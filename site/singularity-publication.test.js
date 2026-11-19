const { test } = require('node:test');
const assert = require('node:assert/strict');
const { renderPage } = require('./pages');
const singularity = require('./singularity-publication');

test('Lira Singularity renders a localized standalone track reciprocally in EN and RU', () => {
 for (const lang of ['en','ru']) {
  const page = singularity.url(lang), other = lang === 'en' ? 'ru' : 'en';
  const html = renderPage(page);
  assert.equal(renderPage(page.slice(0,-1)), html);
  assert.match(html, /<h1>Lira Singularity<\/h1>/);
  assert.ok(html.includes(`<html lang="${lang}">`));
  assert.ok(html.includes(`href="${singularity.url(other)}" lang="${other}"`));
  assert.ok(html.includes(`rel="canonical" href="https://ori-lab.org${page}"`));
  assert.ok(html.includes(`hreflang="${other}" href="https://ori-lab.org${singularity.url(other)}"`));
  assert.ok(html.includes('hreflang="x-default" href="https://ori-lab.org/en/research/singularity/"'));
  assert.ok(html.includes(`/research/singularity/README${lang === 'ru' ? '.ru' : ''}.md"`));
  for (const id of ['definition','tracks','horizons','evidence','resilience','pilot']) {
   assert.ok(html.includes(`href="#${id}"`));
   assert.ok(html.includes(`id="${id}"`));
  }
  assert.match(html,lang === 'en' ? /Proposed, not run/ : /Пилот предложен, но не запускался/);
 }
 assert.equal(renderPage('/en/research/singularity/does-not-exist/'),null);
});

test('Lira Singularity navigation is additive to DFW, safe AI, programmes, and the library', () => {
 for (const lang of ['en','ru']) {
  const page = singularity.url(lang), home = renderPage(`/${lang}/`), library = renderPage(`/${lang}/library/`);
  assert.ok(home.includes(`href="${page}"`));
  assert.ok(library.includes(`href="${page}"`));
  assert.ok(home.includes(`/${lang}/research/dfw-2026/`));
  assert.ok(home.includes('safe-ai-landscape'));
  assert.ok(library.includes('SOURCE_ANALYSES'));
  assert.ok(renderPage(`/${lang}/research/brain/`));
 }
});
