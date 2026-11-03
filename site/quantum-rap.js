const fs = require('node:fs');
const path = require('node:path');
const { markdown, headingIds } = require('./markdown');

const BASE = '/ru/quantum-rap/';
const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const nonempty = value => typeof value === 'string' && value.trim().length > 0;

function layout(title, description, content) {
  return `<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} — ORI</title><meta name="description" content="${esc(description)}"><link rel="stylesheet" href="/quantum-rap.css"></head><body class="quantum-rap"><a class="skip" href="#main">К содержанию</a><header class="site-header"><a class="brand" href="/ru/" aria-label="Open Research Institute — главная">ORI<span>.</span></a><nav aria-label="Навигация"><a href="${BASE}">Квантовый рэп</a><a href="/ru/library/">Библиотека</a></nav></header><main id="main">${content}</main><footer><a href="/ru/">Open Research Institute</a><p>От песни — к вопросу. От вопроса — к исследованию.</p><a href="/ru/methodology/">Как мы работаем с научными источниками</a></footer></body></html>`;
}

// Only explicitly reviewed, published entries become routes. Neither the manifest
// nor the source directory is added to the server's public file allowlist.
function createQuantumRap(repo) {
  const manifest = JSON.parse(fs.readFileSync(path.join(repo, 'data/quantum-rap.json'), 'utf8'));
  if (!Array.isArray(manifest)) throw new Error('Quantum rap catalogue must be an array');
  const articles = new Map();
  for (const entry of manifest) {
    if (!entry || entry.status !== 'published' || entry.reviewed !== true) continue;
    const { slug, title, description, track, trackUrl } = entry;
    if (typeof slug !== 'string' || !/^[a-z]+(?:-[a-z]+)*$/.test(slug) || ![title, description, track].every(nonempty) || articles.has(slug)) {
      throw new Error('Invalid published quantum rap entry');
    }
    if (trackUrl !== undefined) {
      const url = new URL(trackUrl);
      if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) throw new Error('Invalid track URL');
    }
    const source = path.join(repo, 'content', 'quantum-rap', slug + '.md');
    const sourceDirectory = fs.realpathSync(path.join(repo, 'content', 'quantum-rap'));
    if (path.dirname(fs.realpathSync(source)) !== sourceDirectory) throw new Error('Article must stay inside its content directory');
    const tokens = markdown.parse(fs.readFileSync(source, 'utf8'), {});
    const headings = headingIds(tokens);
    if (headings.filter(h => h.level === 1).length !== 1 || headings[0]?.level !== 1 || headings.filter(h => h.level === 2).length < 2) {
      throw new Error('Article needs one title and at least two reading sections');
    }
    const titleStart = tokens.findIndex(t => t.type === 'heading_open' && t.tag === 'h1');
    tokens.splice(titleStart, 3);
    const sections = headings.filter(h => h.level === 2);
    articles.set(slug, { slug, title, description, track, trackUrl, sections, body: markdown.renderer.render(tokens, markdown.options, {}) });
  }
  return {
    enabled: articles.size > 0,
    render(pathname) {
      if (!articles.size) return null;
      if (pathname === BASE || pathname === BASE.slice(0, -1)) {
        const cards = [...articles.values()].map((a, i) => `<article class="card"><p class="eyebrow">${String(i + 1).padStart(2, '0')} / ${esc(a.track)}</p><h2><a href="${BASE}${a.slug}/">${esc(a.title)}</a></h2><p>${esc(a.description)}</p><a class="read" href="${BASE}${a.slug}/">Читать разбор <span aria-hidden="true">↗</span></a></article>`).join('');
        return layout('Квантовый рэп', 'Научные разборы тем из песен: понятное начало, подробное объяснение и история открытий.', `<section class="hero"><p class="eyebrow">ORI / Из музыки в науку</p><h1>Квантовый<br><em>рэп.</em></h1><p class="lead">Песня задаёт вопрос.<br>Разберёмся, как устроен ответ.</p><p>Начните с простого объяснения, а затем переходите к подробностям, истории открытий и научным источникам.</p><a class="button" href="#articles">Выбрать тему <span aria-hidden="true">↓</span></a></section><section id="articles" aria-labelledby="articles-title"><div class="section-heading"><p class="eyebrow">Слушать. Спрашивать. Исследовать.</p><h2 id="articles-title">За строчками песни</h2></div><div class="cards">${cards}</div></section>`);
      }
      const match = pathname.match(/^\/ru\/quantum-rap\/([a-z]+(?:-[a-z]+)*)\/?$/);
      const article = match && articles.get(match[1]);
      if (!article) return null;
      const toc = article.sections.map(h => `<li><a href="#${esc(h.id)}">${esc(h.text)}</a></li>`).join('');
      const track = article.trackUrl ? `<a href="${esc(article.trackUrl)}">Слушать: ${esc(article.track)}</a>` : `По теме песни «${esc(article.track)}»`;
      return layout(article.title, article.description, `<article class="reader"><header class="article-header"><a class="back" href="${BASE}">← Все темы</a><p class="eyebrow">Квантовый рэп / Разбор</p><h1>${esc(article.title)}</h1><p class="lead">${esc(article.description)}</p><p class="track">${track}</p></header><div class="reading-layout"><aside><nav class="toc" aria-label="Содержание статьи"><h2>В этом разборе</h2><ol>${toc}</ol></nav></aside><div class="prose">${article.body}<p class="next-reading"><a href="${BASE}">← Выбрать следующую тему</a></p></div></div></article>`);
    }
  };
}

module.exports = { createQuantumRap };
