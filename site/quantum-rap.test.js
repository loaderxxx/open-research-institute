const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { createQuantumRap } = require('./quantum-rap');
const { createServer } = require('./server');

const entry = { slug: 'test-topic', title: 'Тестовый заголовок', description: 'Технический пример для проверки верстки.', track: 'Тестовая песня', status: 'published', reviewed: true };
const article = '# Тестовый заголовок\n\n## Понятное начало\n\nТестовый абзац.\n\n## Подробный разбор\n\nТестовый абзац.\n\n## Источники\n\n[Источник](https://example.org/)';
function fixture(t, entries = [entry], text = article) {
  const repo = fs.mkdtempSync(path.join(os.tmpdir(), 'ori-quantum-rap-test-'));
  fs.mkdirSync(path.join(repo, 'data'));
  fs.mkdirSync(path.join(repo, 'site'));
  fs.mkdirSync(path.join(repo, 'content/quantum-rap'), { recursive: true });
  fs.writeFileSync(path.join(repo, 'data/quantum-rap.json'), JSON.stringify(entries));
  fs.writeFileSync(path.join(repo, 'content/quantum-rap/test-topic.md'), text);
  fs.copyFileSync(path.join(__dirname, 'quantum-rap.css'), path.join(repo, 'site/quantum-rap.css'));
  t.after(() => fs.rmSync(repo, { recursive: true, force: true }));
  return repo;
}
async function serve(t, repo) {
  const server = createServer({ env: {}, ...(repo ? { root: path.join(repo, 'site') } : {}) });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => { server.closeAllConnections(); server.close(resolve); }));
  return 'http://127.0.0.1:' + server.address().port;
}

test('empty catalogue keeps the section, stylesheet, manifest and drafts private', async t => {
  const base = await serve(t, fixture(t, []));
  for (const route of ['/ru/quantum-rap/', '/ru/quantum-rap/test-topic/', '/quantum-rap.css', '/data/quantum-rap.json', '/content/quantum-rap/test-topic.md', '/site/quantum-rap.js']) {
    assert.equal((await fetch(base + route)).status, 404, route);
  }
  for (const route of ['/ru/', '/en/', '/ru/library/', '/en/library/']) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200);
    assert.ok(!(await response.text()).includes('/quantum-rap/'));
  }
});

test('every released article and index link resolves with contents and private source files', async t => {
  const base = await serve(t);
  const entries = require('../data/quantum-rap.json').filter(e => e.status === 'published' && e.reviewed === true);
  assert.ok(entries.length > 0);
  const index = await fetch(base + '/ru/quantum-rap/');
  assert.equal(index.status, 200);
  const html = await index.text();
  assert.equal((html.match(/class="card"/g) || []).length, entries.length);
  for (const entry of entries) {
    const route = '/ru/quantum-rap/' + entry.slug + '/';
    assert.ok(html.includes(`href="${route}"`));
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    const body = await response.text();
    assert.equal((body.match(/<h1>/g) || []).length, 1);
    for (const [, id] of body.matchAll(/href="#([^\"]+)"/g)) assert.ok(body.includes(`id="${id}"`), route + '#' + id);
    assert.equal((await fetch(base + '/content/quantum-rap/' + entry.slug + '.md')).status, 404);
  }
});

test('drafts and unreviewed entries never become pages or cards', t => {
  const drafts = [{ ...entry, status: 'draft' }, { ...entry, slug: 'unchecked', reviewed: false }];
  const renderer = createQuantumRap(fixture(t, drafts));
  assert.equal(renderer.enabled, false);
  assert.equal(renderer.render('/ru/quantum-rap/'), null);
  const mixed = createQuantumRap(fixture(t, [entry, { ...entry, slug: 'private-draft', status: 'draft' }]));
  assert.ok(!mixed.render('/ru/quantum-rap/').includes('private-draft'));
  assert.equal(mixed.render('/ru/quantum-rap/private-draft/'), null);
});

test('reviewed articles render with one title, working contents and safe markup', t => {
  const renderer = createQuantumRap(fixture(t, [{ ...entry, title: '<script>title</script>', track: 'Track & more' }], article + '\n\n<script>alert(1)</script>\n\n[bad](javascript:alert(1))\n\n## Подробный разбор\n\nПовтор.'));
  const index = renderer.render('/ru/quantum-rap/');
  const html = renderer.render('/ru/quantum-rap/test-topic/');
  assert.match(index, /href="\/ru\/quantum-rap\/test-topic\/"/);
  assert.equal((html.match(/<h1>/g) || []).length, 1);
  assert.ok(!html.includes('<script>'));
  assert.ok(!html.includes('href="javascript:'));
  assert.match(html, /Track &amp; more/);
  assert.match(html, /lang="ru"/);
  assert.match(html, /name="viewport"/);
  for (const [, id] of html.matchAll(/href="#([^\"]+)"/g)) assert.ok(html.includes(`id="${id}"`), id);
  assert.equal(renderer.render('/ru/quantum-rap/missing/'), null);
  assert.equal(renderer.render('/en/quantum-rap/'), null);
});

test('invalid published metadata, duplicate slugs and incomplete articles fail validation', t => {
  for (const entries of [[{ ...entry, slug: '../../README' }], [entry, entry], [{ ...entry, title: '' }], [{ ...entry, trackUrl: 'javascript:alert(1)' }]]) {
    assert.throws(() => createQuantumRap(fixture(t, entries)));
  }
  assert.throws(() => createQuantumRap(fixture(t, [entry], '# Title\n\nUnstructured draft.')));
});

test('published routes support GET/HEAD with existing security policy and no source exposure', async t => {
  const base = await serve(t, fixture(t));
  const home = await fetch(base + '/ru/');
  for (const route of ['/ru/quantum-rap/', '/ru/quantum-rap/test-topic/', '/quantum-rap.css']) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    assert.equal(response.headers.get('content-security-policy'), home.headers.get('content-security-policy'));
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
    const head = await fetch(base + route, { method: 'HEAD' });
    assert.equal(head.status, 200);
    assert.equal(await head.text(), '');
    assert.equal((await fetch(base + route, { method: 'POST' })).status, 405);
  }
  for (const route of ['/data/quantum-rap.json', '/content/quantum-rap/test-topic.md', '/content/quantum-rap/missing.md', '/site/quantum-rap.js', '/ru/quantum-rap/%2e%2e%2fREADME/']) {
    assert.equal((await fetch(base + route)).status, 404, route);
  }
});

test('each published topic has an accessible, passive SVG served only at its exact public URL', async t => {
  const base = await serve(t);
  const catalogue = require('../data/quantum-rap.json');
  const illustrations = require('../data/quantum-rap-illustrations.json');
  assert.equal(new Set(illustrations.map(i => i.slug)).size, catalogue.length);
  for (const article of catalogue) {
    const item = illustrations.find(i => i.slug === article.slug);
    assert.ok(item, article.slug);
    assert.ok(item.alt.length > 40 && item.caption.length > 80 && item.description.length > 150);
    const page = await (await fetch(base + '/ru/quantum-rap/' + article.slug + '/')).text();
    assert.equal((page.match(/<figure /g) || []).length, 1);
    assert.match(page, /<details class="figure-description"><summary>/);
    const url = '/quantum-rap-images/' + article.slug + '.svg';
    assert.ok(page.includes('src="' + url + '"'));
    const response = await fetch(base + url);
    assert.equal(response.status, 200, url);
    assert.match(response.headers.get('content-type'), /^image\/svg\+xml/);
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
    const svg = await response.text();
    assert.match(svg, /role="img" aria-labelledby="title description"/);
    assert.match(svg, /<title id="title">.+<\/title><desc id="description">.+<\/desc>/);
    assert.ok(!/<(?:script|foreignObject|image|a|animate|set)\b|\bon\w+\s*=|(?:href|url)\s*=|<!ENTITY/i.test(svg), 'SVG must remain passive and self-contained');
    assert.equal((await fetch(base + url, { method: 'HEAD' })).status, 200);
    assert.equal((await fetch(base + url, { method: 'POST' })).status, 405);
  }
  for (const url of ['/quantum-rap-images/', '/quantum-rap-images/unknown.svg', '/quantum-rap-images/../server.js', '/site/quantum-rap-images/wave-or-particle.svg', '/data/quantum-rap-illustrations.json', '/site/quantum-rap-illustrations.js']) {
    assert.equal((await fetch(base + url)).status, 404, url);
  }
  const draft = { ...catalogue[0], status: 'draft' };
  assert.deepEqual(createQuantumRap(fixture(t, [draft])).assets, []);
});
