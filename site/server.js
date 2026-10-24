const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const { randomUUID, createHash } = require('node:crypto');
const { markdown } = require('./markdown');
const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const RECIPIENT = 'im@vladimiruzbek.com';
const MAX_BODY = 16384;
const WINDOW = 15 * 60 * 1000;
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.md': 'text/plain; charset=utf-8' };

function reply(res, status, code, extra = {}) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify({ code, ...extra }));
}
function validate(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null;
  const fields = {};
  for (const key of ['topic', 'question', 'email', 'name', 'website']) {
    if (input[key] !== undefined && typeof input[key] !== 'string') return null;
    fields[key] = (input[key] || '').trim();
  }
  if (fields.topic.length < 3 || fields.topic.length > 180 || /[\r\n\x00-\x1f]/.test(fields.topic)) return null;
  if (fields.question.length < 10 || fields.question.length > 6000 || /\x00/.test(fields.question)) return null;
  if (fields.name.length > 120 || /[\r\n\x00-\x1f]/.test(fields.name)) return null;
  if (fields.email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fields.email)) return null;
  if (fields.website) return null;
  return fields;
}
function createServer({ env = process.env, fetchImpl = fetch, root = __dirname, now = Date.now } = {}) {
  const attempts = new Map(), pending = new Set(), accepted = new Map();
  let inFlight = 0;
  const repo = path.dirname(root);
  const files = new Map(['/index.html', '/style.css', '/reader.css', '/app.js'].map(p => [p, path.join(root, p)]));
  for (const doc of ['README', 'LIBRARY', 'EDITORIAL_NOTE', 'RIGHTS']) {
    for (const suffix of ['.md', '.en.md']) files.set('/' + doc + suffix, path.join(repo, doc + suffix));
  }
  files.set('/data/reading-library.json', path.join(repo, 'data/reading-library.json'));
  for (const file of ['catalog.json', 'data/sources.json', 'data/claims.json']) files.set('/' + file, path.join(repo, file));
  const catalogueReady = fs.readFile(path.join(repo, 'data/reading-library.json'), 'utf8').then(raw => {
    for (const item of JSON.parse(raw)) {
      for (const name of [item.markdown, item.markdown_en, ...['README.md', 'README.en.md', 'SOURCES.md', 'SOURCES.en.md', 'sources.json'].map(doc => 'programs/' + item.program + '/' + doc)]) {
        if (/^programs\/[a-z-]+\/(?:reading\/[a-z-]+(?:\.en)?\.md|(?:README|SOURCES)(?:\.en)?\.md|sources\.json)$/.test(name))
          files.set('/' + name, path.join(repo, name));
      }
    }
  }).catch(() => {});
  const server = http.createServer(async (req, res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'");
    try {
      const pathname = new URL(req.url, 'http://local').pathname;
      if (pathname === '/api/research-requests/config' && req.method === 'GET') {
        return reply(res, 200, 'configuration', { delivery: env.RESEND_API_KEY && env.MAIL_FROM ? 'server' : 'email-link' });
      }
      if (pathname === '/api/research-requests') {
        if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return reply(res, 405, 'method_not_allowed'); }
        const expectedOrigins = (env.SITE_ORIGINS || env.SITE_ORIGIN || (env.NODE_ENV !== 'production' ? 'http://' + req.headers.host : '')).split(',').map(origin => origin.trim()).filter(Boolean);
        if (!expectedOrigins.includes(req.headers.origin) || req.headers['sec-fetch-site'] === 'cross-site') return reply(res, 403, 'origin_rejected');
        if (!/^application\/json(?:;|$)/i.test(req.headers['content-type'] || '')) return reply(res, 415, 'json_required');
        const time = now();
        for (const [key, value] of attempts) if (value.reset <= time) attempts.delete(key);
        for (const [key, value] of accepted) if (value.expires <= time) accepted.delete(key);
        // Do not trust spoofable forwarded headers. Behind a proxy the limit is shared.
        const ip = req.socket.remoteAddress;
        const entry = attempts.get(ip) || { count: 0, reset: time + WINDOW };
        if (entry.count >= 5 || attempts.size > 10000 || inFlight >= 5) {
          res.setHeader('Retry-After', '900'); return reply(res, 429, 'rate_limited');
        }
        entry.count++; attempts.set(ip, entry);
        if (Number(req.headers['content-length']) > MAX_BODY) { req.resume(); return reply(res, 413, 'too_large'); }
        const chunks = []; let bytes = 0;
        for await (const chunk of req) {
          bytes += chunk.length;
          if (bytes > MAX_BODY) return reply(res, 413, 'too_large');
          chunks.push(chunk);
        }
        let input;
        try { input = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { return reply(res, 400, 'invalid_json'); }
        const fields = validate(input);
        if (!fields) return reply(res, 422, 'invalid_fields');
        if (!env.RESEND_API_KEY || !env.MAIL_FROM) return reply(res, 503, 'mail_unavailable');
        const fingerprint = createHash('sha256').update(JSON.stringify(fields)).digest('hex');
        if (accepted.has(fingerprint)) return reply(res, 202, 'accepted', { requestId: accepted.get(fingerprint).id });
        if (pending.has(fingerprint)) return reply(res, 409, 'in_progress');
        pending.add(fingerprint); inFlight++;
        try {
          const id = randomUUID();
          const response = await fetchImpl('https://api.resend.com/emails', {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json', 'Idempotency-Key': 'ori-' + fingerprint },
            signal: AbortSignal.timeout(10000),
            body: JSON.stringify({
              from: env.MAIL_FROM, to: [RECIPIENT], reply_to: fields.email,
              subject: '[ORI] ' + fields.topic,
              text: 'Research request / Запрос на исследование\n\nTopic / Тема: ' + fields.topic + '\nName / Имя: ' + (fields.name || '—') + '\nEmail: ' + fields.email + '\n\n' + fields.question
            })
          });
          const result = await response.json().catch(() => ({}));
          if (!response.ok || typeof result.id !== 'string' || !result.id) return reply(res, 502, 'mail_failed');
          accepted.set(fingerprint, { id, expires: now() + WINDOW });
          return reply(res, 202, 'accepted', { requestId: id });
        } catch { return reply(res, 502, 'mail_failed'); }
        finally { pending.delete(fingerprint); inFlight--; }
      }
      if (!['GET', 'HEAD'].includes(req.method)) { res.setHeader('Allow', 'GET, HEAD'); return reply(res, 405, 'method_not_allowed'); }
      const file = ['/', '/en', '/en/', '/ru', '/ru/'].includes(pathname) ? '/index.html' : pathname;
      await catalogueReady;
      if (!files.has(file)) return reply(res, 404, 'not_found');
      const body = await fs.readFile(files.get(file));
      if (file.endsWith('.md') && /text\/html/.test(req.headers.accept || '') && !new URL(req.url, 'http://local').searchParams.has('raw')) {
        const english = file.endsWith('.en.md');
        const other = english ? file.replace(/\.en\.md$/, '.md') : file.replace(/\.md$/, '.en.md');
        const hasOther = files.has(other) && await fs.access(files.get(other)).then(() => true, () => false);
        const title = body.toString('utf8').match(/^#\s+(.+)$/m)?.[1] || 'Open Research Institute';
        const languageLink = hasOther ? `<a href="${escapeHtml(other)}">${english ? 'Русский' : 'English'}</a>` : `<span>${english ? 'Russian translation pending' : 'Перевод на английский ещё не готов'}</span>`;
        const page = `<!doctype html><html lang="${english ? 'en' : 'ru'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)} — ORI</title><link rel="stylesheet" href="/reader.css"></head><body><header><a href="/${english ? 'en' : 'ru'}/">ORI · ${english ? 'Research library' : 'Исследовательская библиотека'}</a><nav>${languageLink}<a href="${escapeHtml(file)}?raw=1">Markdown</a></nav></header><main>${markdown.render(body.toString('utf8'))}</main></body></html>`;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' });
        return res.end(req.method === 'HEAD' ? undefined : page);
      }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)], 'Cache-Control': 'no-cache' });
      res.end(req.method === 'HEAD' ? undefined : body);
    } catch (error) {
      if (!res.headersSent) reply(res, error.code === 'ENOENT' ? 404 : 500, error.code === 'ENOENT' ? 'not_found' : 'server_error');
      else res.end();
    }
  });
  server.requestTimeout = 15000; server.headersTimeout = 10000;
  return server;
}
if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  createServer().listen(port, '0.0.0.0', () => console.log('ORI preview: http://localhost:' + port));
}
module.exports = { createServer, validate, RECIPIENT };
