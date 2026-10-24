const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createServer, RECIPIENT } = require('./server');
const valid = { topic: 'AI evidence', question: 'How can we verify claims?', email: 'visitor@example.com', name: 'Reader', website: '' };
async function withServer(t, options = {}) {
  const server = createServer({ env: { RESEND_API_KEY: 'test-only', MAIL_FROM: 'ORI <test@example.org>' }, ...options });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => { server.closeAllConnections(); server.close(resolve); }));
  const base = 'http://127.0.0.1:' + server.address().port;
  return { base, post: (body = valid, headers = {}) => fetch(base + '/api/research-requests', { method: 'POST', headers: { Origin: base, 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) }) };
}
test('accepted only after provider acceptance; fixed recipient and reply-to; repeat is deduplicated', async t => {
  const calls = [];
  const { post } = await withServer(t, { fetchImpl: async (url, options) => { calls.push({ url, options }); return { ok: true, json: async () => ({ id: 'provider-id' }) }; } });
  const first = await post(); assert.equal(first.status, 202);
  const result = await first.json(); assert.ok(result.requestId);
  assert.equal((await post()).status, 202);
  assert.equal(calls.length, 1);
  const mail = JSON.parse(calls[0].options.body);
  assert.deepEqual(mail.to, [RECIPIENT]); assert.equal(mail.reply_to, valid.email);
  assert.equal(calls[0].url, 'https://api.resend.com/emails');
  assert.equal(mail.html, undefined); assert.ok(mail.text.includes(valid.question));
});
test('no configured provider means unavailable, never success', async t => {
  const { post } = await withServer(t, { env: {}, fetchImpl: async () => assert.fail('no call expected') });
  assert.equal((await post()).status, 503);
});
test('provider failures and malformed acceptance do not show success', async t => {
  for (const result of [{ ok: false, json: async () => ({}) }, { ok: true, json: async () => ({}) }]) {
    const { post } = await withServer(t, { fetchImpl: async () => result }); assert.equal((await post()).status, 502);
  }
});
test('timeout/network failure is safely reported', async t => {
  const { post } = await withServer(t, { fetchImpl: async () => { throw new Error('secret transport details'); } });
  const r = await post(); assert.equal(r.status, 502); assert.ok(!(await r.text()).includes('secret'));
});
test('invalid fields, header injection and honeypot never reach mail provider', async t => {
  const { post } = await withServer(t, { fetchImpl: async () => assert.fail('no call expected') });
  for (const change of [{ email: 'not-an-address' }, { topic: 'a\r\nBcc: victim@example.org' }, { question: '' }, { website: 'bot' }, { name: {} }]) {
    assert.equal((await post({ ...valid, ...change })).status, 422);
  }
});
test('rejects cross-origin and non-JSON requests', async t => {
  const { post } = await withServer(t);
  assert.equal((await post(valid, { Origin: 'https://attacker.example' })).status, 403);
  assert.equal((await post(valid, { 'Content-Type': 'text/plain' })).status, 415);
});
test('rejects oversized body', async t => {
  const { post } = await withServer(t); assert.equal((await post({ ...valid, question: 'x'.repeat(17000) })).status, 413);
});
test('rate limit cannot be bypassed by forged forwarded headers', async t => {
  const { post } = await withServer(t, { env: {} });
  for (let i = 0; i < 5; i++) assert.equal((await post(valid, { 'X-Forwarded-For': '192.0.2.' + i })).status, 503);
  const r = await post(); assert.equal(r.status, 429); assert.ok(r.headers.get('retry-after'));
});
test('public routes work; source, secrets and traversal blocked', async t => {
  const { base } = await withServer(t);
  for (const route of ['/', '/en/', '/ru/', '/data/reading-library.json', '/programs/verified-learning/reading/overview.pdf']) assert.equal((await fetch(base + route)).status, 200, route);
  for (const route of ['/server.js', '/.env', '/package.json', '/server.test.js', '/%2e%2e/server.js', '/README.private.md']) assert.equal((await fetch(base + route)).status, 404, route);
  assert.equal((await fetch(base + '/api/research-requests')).status, 405);
});
test('production requires explicitly configured origin', async t => {
  const { post } = await withServer(t, { env: { NODE_ENV: 'production' } }); assert.equal((await post()).status, 403);
});
test('document reader renders English with language link and offers original Markdown', async t => {
  const { base } = await withServer(t);
  const response = await fetch(base + '/programs/consciousness/README.en.md', { headers: { Accept: 'text/html' } });
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /text\/html/);
  const html = await response.text();
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<h1>Consciousness and Measurement<\/h1>/);
  assert.match(html, /href="\/programs\/consciousness\/README.md"/);
  const raw = await fetch(base + '/programs/consciousness/README.en.md?raw=1', { headers: { Accept: 'text/html' } });
  assert.match(raw.headers.get('content-type'), /text\/plain/);
});
