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
function elementWithId(html, id) {
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const opening = new RegExp(`<([a-z][a-z0-9:-]*)\\b[^>]*\\bid=["']${escapedId}["'][^>]*>`, 'i').exec(html);
  assert.ok(opening, `element #${id} exists`);
  const tag = opening[1];
  const tags = new RegExp(`<\\/?${tag}\\b[^>]*>`, 'gi');
  tags.lastIndex = opening.index;
  let depth = 0, match;
  while ((match = tags.exec(html))) {
    if (match[0].startsWith('</')) depth -= 1;
    else if (!/\/>$/.test(match[0])) depth += 1;
    if (depth === 0) return html.slice(opening.index, tags.lastIndex);
  }
  assert.fail(`element #${id} has a closing tag`);
}
function externalHrefs(html) {
  return [...html.matchAll(/href=["']([^"']+)["']/gi)]
    .map(match => match[1].replace(/&amp;/g, '&'))
    .filter(href => /^https?:\/\//i.test(href));
}
function linkedText(html, url) {
  const match = [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)]
    .find(([_, attributes]) => [...attributes.matchAll(/href=["']([^"']+)["']/gi)]
      .some(([, href]) => href.replace(/&amp;/g, '&') === url));
  return match ? match[2].replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').trim() : '';
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
  for (const route of ['/', '/en/', '/ru/', '/data/reading-library.json', '/programs/verified-learning/reading/overview.md']) assert.equal((await fetch(base + route)).status, 200, route);
  for (const route of ['/programs/verified-learning/reading/overview.pdf', '/server.js', '/.env', '/package.json', '/server.test.js', '/%2e%2e/server.js', '/README.private.md']) assert.equal((await fetch(base + route)).status, 404, route);
  assert.equal((await fetch(base + '/api/research-requests')).status, 405);
});
test('production requires explicitly configured origin', async t => {
  const { post } = await withServer(t, { env: { NODE_ENV: 'production' } }); assert.equal((await post()).status, 403);
});
test('delivery configuration exposes no secrets and reflects provider availability', async t => {
  const { base } = await withServer(t, { env: {} });
  const r = await fetch(base + '/api/research-requests/config');
  assert.deepEqual(await r.json(), { code: 'configuration', delivery: 'email-link' });
  const configured = await withServer(t);
  const ready = await fetch(configured.base + '/api/research-requests/config');
  assert.deepEqual(await ready.json(), { code: 'configuration', delivery: 'server' });
});
test('only explicitly listed production origins are accepted', async t => {
  const { post } = await withServer(t, { env: { NODE_ENV: 'production', SITE_ORIGINS: 'https://ori-lab.org,https://www.ori-lab.org' } });
  assert.equal((await post(valid, { Origin: 'https://ori-lab.org' })).status, 503);
  assert.equal((await post(valid, { Origin: 'https://www.ori-lab.org' })).status, 503);
  assert.equal((await post(valid, { Origin: 'https://attacker.example' })).status, 403);
});
test('document reader renders English with language link and offers original Markdown', async t => {
  const { base } = await withServer(t);
  const response = await fetch(base + '/programs/consciousness/README.en.md', { headers: { Accept: 'text/html' } });
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /text\/html/);
  const html = await response.text();
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<h1 id="consciousness-and-perception">Consciousness and perception<\/h1>/);
  assert.match(html, /href="\/programs\/consciousness\/README.md"/);
  const raw = await fetch(base + '/programs/consciousness/README.en.md?raw=1', { headers: { Accept: 'text/html' } });
  assert.match(raw.headers.get('content-type'), /text\/plain/);
});

test('Markdown contents target generated heading anchors, including Cyrillic and repeated headings', () => {
  const { markdown } = require('./markdown');
  const html = markdown.render('[Раздел](#1-предмет-исследования)\n\n## 1. Предмет исследования\n\n## Same heading\n\n## Same heading');
  assert.match(decodeURI(html), /href="#1-предмет-исследования"/);
  assert.match(html, /id="1-предмет-исследования"/);
  assert.match(html, /id="same-heading-1"/);
  assert.ok(!markdown.render('<script>alert(1)</script>').includes('<script>'));
});

test('literature maps are readable in both languages without exposing unrelated files', async t => {
  const { base } = await withServer(t);
  const catalogue = require('../catalog.json');
  for (const lang of ['ru', 'en']) {
    const suffix = lang === 'en' ? '.en.md' : '.md';
    for (const route of ['/RESEARCH_MAPS' + suffix, ...catalogue.map(p => '/' + p[lang === 'en' ? 'research_map_en' : 'research_map'])]) {
      const response = await fetch(base + route, { headers: { Accept: 'text/html' } });
      assert.equal(response.status, 200, route);
      const html = await response.text();
      assert.ok(html.includes(`<html lang="${lang}">`), route);
      assert.match(html, /<h1\b/);
      const other = lang === 'en' ? route.replace('.en.md', '.md') : route.replace('.md', '.en.md');
      assert.ok(html.includes(`href="${other}"`), 'paired language link: ' + route);
    }
  }
  for (const route of ['/programs/physics/NOTES.md', '/programs/not-a-programme/RESEARCH_MAP.md', '/site/server.js']) {
    assert.equal((await fetch(base + route)).status, 404, route);
  }
  assert.equal(require('../data/reading-library.json').length, 21);
});

test('programme pages render without a reading entry, preserve language and expose only published reviews', async t => {
  const { base } = await withServer(t);
  const programmes = require('./research-programmes.json');
  assert.equal(programmes.filter(p => p.stage === 'agenda').length, 6);
  for (const lang of ['en', 'ru']) {
    for (const p of programmes) {
      const response = await fetch(`${base}/${lang}/research/${p.slug}/`);
      assert.equal(response.status, 200, `${lang}/${p.slug}`);
      const html = await response.text();
      assert.ok(html.includes(`<html lang="${lang}">`));
      assert.ok(html.includes(`href="/${lang === 'en' ? 'ru' : 'en'}/research/${p.slug}/"`));
      assert.equal((html.match(/<h1>/g) || []).length, 1);
      assert.ok(!html.includes('{{'));
      if (p.stage === 'agenda') {
        assert.ok(html.includes(lang === 'en' ? 'Programme in development' : 'Формируем программу'));
        assert.ok(!html.includes(`/programs/${p.slug}/reading/`), 'new programmes must not invent published reviews');
      }
    }
    const library = await (await fetch(`${base}/${lang}/library/`)).text();
    assert.equal((library.match(/class="reading-card"/g) || []).length, 21);
    const home = await (await fetch(`${base}/${lang}/`)).text();
    assert.equal((home.match(/class="programme-card"/g) || []).length, 13);
    assert.ok(!home.includes('slide-content'));
    assert.ok(!home.includes('class="reading-card"'));
    const legacy = await fetch(`${base}/${lang}/methods/`, {redirect:'manual'});
    assert.equal(legacy.status, 308);
    assert.equal(legacy.headers.get('location'), `/${lang}/methodology/`);
    const methodology = await (await fetch(`${base}/${lang}/methodology/`)).text();
    assert.ok(methodology.includes(`href="/${lang === 'en' ? 'ru' : 'en'}/methodology/"`));
    assert.ok(methodology.includes(lang === 'ru' ? 'Протокол будущего исследования' : 'Protocols for future studies'));
    assert.ok(!home.includes(lang === 'ru' ? 'Протокол будущего исследования' : 'Protocols for future studies'));
    assert.equal((await fetch(`${base}/${lang}/research/does-not-exist/`)).status, 404);
    assert.equal((await fetch(`${base}/${lang}/methods/`, {method:'HEAD'})).status, 200);
  }
  for (const privatePath of ['/pages.js', '/research-programmes.json', '/research-resources.js', '/en/research/../../pages.js']) {
    assert.equal((await fetch(base + privatePath)).status, 404, privatePath);
  }
});

test('research resources link every programme section to its bilingual source map', async t => {
  const { base } = await withServer(t);
  const programmes = require('./research-programmes.json');
  const { getResearchResources } = require('./research-resources');

  for (const lang of ['en', 'ru']) {
    const home = await (await fetch(`${base}/${lang}/`)).text();
    for (const p of programmes) {
      assert.ok(home.includes(`href="/${lang}/research/${p.slug}/#resources"`), `${lang} home card links ${p.slug} resources`);
      const resources = getResearchResources(p.slug, lang);
      assert.ok(resources, `${lang}/${p.slug} has a research map`);
      for (const kind of ['books', 'researchers']) {
        assert.ok(resources[kind].length >= 3, `${lang}/${p.slug} has three ${kind}`);
        assert.ok(resources[kind].slice(0, 3).every(item => /^https?:\/\//i.test(item.url)), `${lang}/${p.slug} first three ${kind} have external URLs`);
      }
      assert.ok(resources.studies.length >= 3, `${lang}/${p.slug} has three publications`);
      assert.ok(resources.studies.slice(0, 3).every(item => /^https?:\/\//i.test(item.url)), `${lang}/${p.slug} first three publications have external URLs`);
      assert.deepEqual(resources.counts, {
        books: resources.books.length,
        studies: resources.studies.length,
        researchers: resources.researchers.length,
      }, `${lang}/${p.slug} resource counts describe parsed map entries`);

      const page = await fetch(`${base}/${lang}/research/${p.slug}/`);
      assert.equal(page.status, 200, `${lang}/${p.slug}`);
      const html = await page.text();
      const block = elementWithId(html, 'resources');
      const hrefs = externalHrefs(block);
      const allowed = new Set([...resources.books, ...resources.studies, ...resources.researchers].map(item => item.url));
      assert.ok(hrefs.length >= 9, `${lang}/${p.slug} renders linked resources`);
      assert.ok(hrefs.every(href => allowed.has(href)), `${lang}/${p.slug} external resource links come from its research map`);
      for (const item of [...resources.books.slice(0, 3), ...resources.researchers.slice(0, 3), ...resources.studies.slice(0, 3)]) {
        assert.ok(hrefs.includes(item.url), `${lang}/${p.slug} renders map link ${item.url}`);
      }
      assert.ok(html.includes(`href="${resources.mapUrl}"`), `${lang}/${p.slug} links to its full map`);
      const pairedMap = `/programs/${p.slug}/RESEARCH_MAP${lang === 'en' ? '.en' : ''}.md`;
      assert.equal(resources.mapUrl, pairedMap, `${lang}/${p.slug} full map uses the current language`);
    }

    const library = await (await fetch(`${base}/${lang}/library/`)).text();
    const catalogue = require('../catalog.json');
    const expectedMaps = new Set(catalogue.map(p => `href="/${p[lang === 'en' ? 'research_map_en' : 'research_map']}"`));
    for (const href of expectedMaps) assert.ok(library.includes(href), `${lang} library links ${href}`);
    assert.equal(expectedMaps.size, 13, `${lang} library has 13 programme maps`);
    const reviewLinks = new Set([...library.matchAll(/href=["'](\/programs\/[a-z-]+\/reading\/[a-z-]+(?:\.en)?\.md)["']/g)].map(match => match[1]));
    assert.equal(reviewLinks.size, 21, `${lang} library links all 21 published reviews`);
  }
});

test('society resource links retain book and dataset titles in their rendered anchors', async t => {
  const { base } = await withServer(t);
  const checks = [
    {
      slug: 'state-and-institutions',
      url: 'https://www.cambridge.org/core/books/governing-the-commons/7AB7AE11BADA84409C34815CC288CD79',
      title: 'Governing the Commons',
    },
    {
      slug: 'voluntary-governance',
      url: 'https://www.cambridge.org/core/books/governing-the-commons/7AB7AE11BADA84409C34815CC288CD79',
      title: 'Governing the Commons',
    },
    {
      slug: 'state-and-institutions',
      url: 'https://www.worldbank.org/en/publication/worldwide-governance-indicators',
      title: 'Worldwide Governance Indicators',
    },
  ];
  for (const lang of ['en', 'ru']) {
    for (const item of checks) {
      const html = await (await fetch(`${base}/${lang}/research/${item.slug}/`)).text();
      const block = elementWithId(html, 'resources');
      assert.ok(linkedText(block, item.url).includes(item.title), `${lang}/${item.slug} anchor shows ${item.title}`);
    }
  }
});

test('all legacy programme README files and research maps remain publicly readable', async t => {
  const { base } = await withServer(t);
  const catalogue = require('../catalog.json');
  const readmes = new Set(catalogue.flatMap(p => [p.page, p.page_en]).map(file => '/' + file));
  const maps = new Set(['/RESEARCH_MAPS.md', '/RESEARCH_MAPS.en.md', ...catalogue.flatMap(p => [p.research_map, p.research_map_en]).map(file => '/' + file)]);
  assert.equal(readmes.size, 26);
  assert.equal(maps.size, 28);
  for (const route of [...readmes, ...maps]) assert.equal((await fetch(base + route)).status, 200, route);
});

test('every local link on new pages resolves, including all published review links', async t => {
  const { base } = await withServer(t);
  const programmes = require('./research-programmes.json');
  const targets = new Set();
  for (const lang of ['ru','en']) {
    for (const route of ['', 'library/', 'methodology/', ...programmes.map(p=>`research/${p.slug}/`)]) {
      const html = await (await fetch(`${base}/${lang}/${route}`)).text();
      for (const match of html.matchAll(/href="(\/[^"#]*)"/g)) targets.add(match[1].split('#')[0]);
    }
  }
  for (const target of targets) assert.equal((await fetch(base + target)).status, 200, target);
});

test('every website programme is registered and has bilingual repository descriptions', async t => {
  const { base } = await withServer(t);
  const programmes = require('./research-programmes.json');
  const catalog = require('../catalog.json');
  const reading = require('../data/reading-library.json');
  assert.deepEqual(new Set(catalog.map(p=>p.slug)), new Set(programmes.map(p=>p.slug)));
  for (const p of programmes) {
    const record = catalog.find(x=>x.slug === p.slug);
    assert.equal(record.status, p.stage === 'agenda' ? 'PROGRAMME_AGENDA' : 'LITERATURE_REVIEW');
    assert.ok(['nature','society','technology'].includes(p.group));
    assert.deepEqual(new Set(record.documents), new Set(reading.filter(b=>b.program === p.slug).map(b=>b.slug)));
    for (const file of [record.page, record.page_en]) {
      assert.ok(file);
      const response = await fetch(base + '/' + file);
      assert.equal(response.status, 200, file);
      const body = await response.text();
      assert.match(body, /^# /);
      if (p.stage === 'agenda') assert.ok(body.includes('PROGRAMME_AGENDA'), file);
    }
  }
});
