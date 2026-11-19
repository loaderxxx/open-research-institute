'use strict';
const manifest = require('../content/dfw-2026/manifest.json');
const release = require('../content/dfw-2026/release.json');
const atlas = require('../content/dfw-2026/atlas.json');
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pair = value => value && ['en','ru'].every(lang => typeof value[lang] === 'string' && value[lang].trim());
const labels = {
 publisher_abstract_checked:{en:'Publisher abstract checked; full text not independently reviewed',ru:'Аннотация издателя проверена; полный текст независимо не изучался'},
 catalogue_context:{en:'Catalogue context · not measured results',ru:'Контекст каталога · не результаты измерений'},
 editorial_ready:{en:'Editorial review',ru:'Редакционный обзор'},
 partial_hold:{en:'Partial review · evidence pending',ru:'Частичный обзор · ожидается проверка'},
 opened_current_review:{en:'Official page opened in this review',ru:'Официальная страница открыта при этой проверке'},
 archive_reviewed_not_refetched:{en:'Reviewed in source archive; not independently reopened here',ru:'Изучено в исходном архиве; здесь повторно не проверено'},
 full_text_pending_do_not_quote_results:{en:'Full text pending; results not used',ru:'Полный текст ожидает проверки; результаты не используются'}
};
const label = (value,lang) => labels[value]?.[lang] || value;
function valid(data) {
  return data?.schema_version === 1 && ['title','method','credits'].every(k=>pair(data[k])) && Array.isArray(data.items) && data.items.length === 7 && new Set(data.items.map(i=>i.slug)).size === 7 && data.items.every(i => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(i.slug) && typeof i.status === 'string' && ['title','summary','limitations','callout'].every(k=>pair(i[k])) && (!i.concept || ['title','summary','limitations'].every(k=>pair(i.concept[k]))) && Array.isArray(i.sources) && i.sources.length > 0 && i.sources.every(s=>typeof s.title==='string' && typeof s.evidence_status==='string' && /^https:\/\/[^\s]+$/.test(s.url)));
}
function enabled(data=manifest, publication=release) { return publication.published === true && valid(data); }
const ROOT = 'research/dfw-2026/';
const REPO = 'https://github.com/loaderxxx/open-research-institute/blob/work/chatgpt/ori-dfw-publication-20261119/research/dfw-2026/';
const https = value => {
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password; }
  catch { return false; }
};
function validAtlas(data, notes) {
  return !!notes && Object.keys(notes).length === data.items.length && data.items.every(item => {
    const n = Object.hasOwn(notes, item.slug) && notes[item.slug];
    return n && pair(n.question) && pair(n.next)
      && Array.isArray(n.takeaways) && n.takeaways.length >= 3 && n.takeaways.every(pair)
      && Array.isArray(n.evidence) && n.evidence.length >= 3
      && n.evidence.every(e => e && typeof e.title === 'string' && e.title.trim() && https(e.url) && pair(e.detail))
      && Array.isArray(n.related) && n.related.length >= 2 && new Set(n.related).size === n.related.length
      && n.related.every(slug => slug !== item.slug && data.items.some(i => i.slug === slug));
  });
}
const routeSlug = route => route === ROOT ? '' : route.match(/^research\/dfw-2026\/([a-z0-9]+(?:-[a-z0-9]+)*)\/$/)?.[1];
const urlFor = (lang, slug='') => `/${lang}/${ROOT}${slug ? slug+'/' : ''}`;
const repos = slug => REPO + (slug ? slug+'/' : '');
const number = index => String(index+1).padStart(2,'0');
const sourceRows = (item,lang) => item.sources.map(s =>
  `<li><a href="${esc(s.url)}" rel="noopener noreferrer">${esc(s.title)}</a><small>${esc(label(s.evidence_status,lang))}</small></li>`).join('');

function render(lang, data=manifest, publication=release, notes=atlas) {
 if (!['en','ru'].includes(lang) || !enabled(data,publication)) return null;
 const ru=lang==='ru', rich=validAtlas(data,notes);
 const suffix=ru ? '.ru.md' : '.md';
 const cards=data.items.map((i,index)=>`
   <article class="dfw-entry dfw-atlas-card" id="${i.slug}">
    <p class="dfw-card-kicker"><span>${number(index)}</span> ${esc(label(i.status,lang))}</p>
    <h2>${rich ? `<a href="${urlFor(lang,i.slug)}">${esc(i.title[lang])}</a>` : esc(i.title[lang])}</h2>
    <p>${esc(i.summary[lang])}</p>
    ${i.concept ? `<section class="dfw-concept"><h3>${esc(i.concept.title[lang])}</h3><p>${esc(i.concept.summary[lang])}</p><p>${esc(i.concept.limitations[lang])}</p></section>` : ''}
    <details><summary>${ru?'Источники и ограничения':'Sources and limitations'}</summary><p>${esc(i.limitations[lang])}</p><ul>${sourceRows(i,lang)}</ul></details>
    <a class="dfw-card-link" href="${rich ? urlFor(lang,i.slug) : repos('')+i.slug+suffix}">${rich ? (ru?'Открыть исследование':'Explore this study') : (ru?'Заметка в репозитории':'Repository note')} <span aria-hidden="true">↗</span></a>
   </article>`).join('');
 const nav=`<nav id="dfw-index" class="dfw-atlas-index" aria-label="${ru?'Темы атласа':'Atlas topics'}"><ol>${data.items.map((i,k)=>`<li><a href="${rich ? urlFor(lang,i.slug) : '#'+i.slug}"><span aria-hidden="true">${number(k)}</span> ${esc(i.title[lang])}</a></li>`).join('')}</ol></nav>`;
 const hero=`<section class="dfw-hero"><div class="page-wrap dfw-hero-grid"><div><p class="eyebrow">ORI · DUBAI FUTURE WEEK 2026</p><h1>${esc(data.title[lang])}</h1><p class="dfw-lede">${esc(data.method[lang])}</p><a class="button button-light" href="#dfw-index">${ru?'Перейти к темам':'Browse the atlas'} <span aria-hidden="true">↓</span></a></div><aside class="dfw-hero-note"><span aria-hidden="true">07</span><p>${ru?'Семь обзоров литературы. Каждый отделяет выводы из источников от вопросов, которые ещё предстоит проверить.':'Seven literature reviews. Each separates what the sources show from what still needs testing.'}</p></aside></div></section>`;
 const credits=`<section class="dfw-credits"><h2>${ru?'Как мы работали':'How we worked'}</h2><p>${esc(data.credits[lang])}</p>${data.provenance?.[lang] ? `<p>${esc(data.provenance[lang])}</p>` : ''}${rich ? `<div class="dfw-doc-links"><a href="${repos('')}${ru?'README.ru.md':'README.md'}">${ru?'Репозиторий атласа':'Atlas repository'} ↗</a><a href="${repos('')}METHOD${suffix}">${ru?'Методология':'Review method'} ↗</a><a href="${repos('')}CROSS-STUDY${suffix}">${ru?'Сравнение семи тем':'Cross-study synthesis'} ↗</a></div>` : ''}</section>`;
 return {title:data.title[lang],description:data.method[lang],content:hero+`<div class="page-wrap dfw-content dfw-atlas-content">${nav}<div class="dfw-atlas-intro"><h2>${ru?'Выберите исследование':'Choose a study'}</h2><p>${ru?'Откройте тему, чтобы увидеть выводы, атлас источников и ссылки на смежные исследования.':'Open a topic to see its findings, source atlas, and related studies.'}</p></div><div class="dfw-atlas-grid">${cards}</div>${credits}</div>`};
}
function renderStudy(lang,slug,data=manifest,publication=release,notes=atlas) {
 if (!['en','ru'].includes(lang) || !enabled(data,publication) || !validAtlas(data,notes)) return null;
 const index=data.items.findIndex(i=>i.slug===slug);
 if (index < 0) return null;
 const i=data.items[index], n=notes[slug], ru=lang==='ru';
 const suffix=ru ? '.ru.md' : '.md';
 const labelsHere=ru?['Главные выводы','Атлас источников','Ограничения','Что проверить дальше']:['Key findings','Source atlas','Limitations','What to test next'];
 const sections=['findings','evidence','limits','next-question'];
 const related=n.related.map(s=>data.items.find(j=>j.slug===s));
 const nextStudy=data.items[(index+1)%data.items.length];
 const readMore=`<div class="dfw-doc-links"><a href="${repos(slug)}README${suffix}">${ru?'Разбор в репозитории':'Read the repository overview'} ↗</a><a href="${repos(slug)}ATLAS${suffix}">${ru?'Расширенный атлас':'Extended source atlas'} ↗</a><a href="${repos(slug)}RESEARCH-DESIGN${suffix}">${ru?'План проверки':'Proposed research design'} ↗</a></div>`;
 return {title:i.title[lang],description:n.question[lang],content:`
  <section class="dfw-hero dfw-study-hero"><div class="page-wrap">
   <nav class="dfw-breadcrumb" aria-label="${ru?'Путь к странице':'Breadcrumb'}"><a class="back-link" href="${urlFor(lang)}#${slug}">← ${ru?'Все семь исследований':'All seven studies'}</a><span aria-hidden="true">/</span><span>${ru?'Исследование':'Study'} ${number(index)} / 07</span></nav>
   <div class="dfw-study-title"><p class="eyebrow">ORI · DFW 2026 / ${number(index)} <span aria-hidden="true">·</span> ${esc(label(i.status,lang))}</p>
   <h1>${esc(i.title[lang])}</h1><p class="dfw-lede">${esc(n.question[lang])}</p><div class="dfw-hero-actions"><a class="button button-light" href="#evidence">${labelsHere[1]} <span aria-hidden="true">↓</span></a><a class="dfw-hero-language" lang="${ru?'en':'ru'}" href="${urlFor(ru?'en':'ru',slug)}">${ru?'Read in English':'Читать по-русски'}</a></div></div>
  </div></section>
  <div class="page-wrap dfw-study-layout">
   <nav class="dfw-study-nav" aria-label="${ru?'На этой странице':'On this page'}"><p>${ru?'На этой странице':'On this page'}</p><ol>${labelsHere.map((v,k)=>`<li><a href="#${sections[k]}">${v}</a></li>`).join('')}</ol></nav>
   <article class="dfw-study-body">
    <section id="findings"><h2>${labelsHere[0]}</h2><p class="dfw-study-summary">${esc(i.summary[lang])}</p><ol class="dfw-takeaways">${n.takeaways.map(t=>`<li>${esc(t[lang])}</li>`).join('')}</ol></section>
    <section id="evidence"><h2>${labelsHere[1]}</h2><p class="dfw-evidence-intro">${ru?'Откуда взялись выводы, что показывают смежные работы и чего они не доказывают.':'Where the findings come from, what adjacent work shows, and what it cannot establish.'}</p><ul class="dfw-source-list">${n.evidence.map(e=>`<li><a href="${esc(e.url)}" rel="noopener noreferrer">${esc(e.title)} <span aria-hidden="true">↗</span></a><p>${esc(e.detail[lang])}</p></li>`).join('')}</ul><details><summary>${ru?'Источники исходного обзора и статус чтения':'Original review sources and reading status'}</summary><ul>${sourceRows(i,lang)}</ul></details>${readMore}</section>
    <section id="limits"><h2>${labelsHere[2]}</h2><p>${esc(i.limitations[lang])}</p></section>
    <section id="next-question"><h2>${labelsHere[3]}</h2><p>${esc(n.next[lang])}</p>${i.concept ? `<div class="dfw-concept"><h3>${esc(i.concept.title[lang])}</h3><p>${esc(i.concept.summary[lang])}</p><p>${esc(i.concept.limitations[lang])}</p></div>` : ''}</section>
    <section class="dfw-related"><h2>${ru?'Смежные темы атласа':'Related studies in the atlas'}</h2><ul>${related.map(j=>`<li><a href="${urlFor(lang,j.slug)}">${esc(j.title[lang])} <span aria-hidden="true">↗</span></a></li>`).join('')}</ul><a class="dfw-card-link" href="${urlFor(lang,nextStudy.slug)}">${ru?'Следующая тема:':'Next study:'} ${esc(nextStudy.title[lang])} <span aria-hidden="true">→</span></a></section>
   </article>
  </div>`};
}
function banner(lang) {return enabled() ? `<aside class="research-update"><div class="page-wrap research-update-inner"><span class="research-update-label">${lang==='ru'?'Исследование ORI':'ORI research'}</span><a href="${urlFor(lang)}">${esc(manifest.title[lang])} ↗</a></div></aside>` : '';}
function head(lang,slug='') {
 return `<link rel="canonical" href="https://ori-lab.org${urlFor(lang,slug)}"><link rel="alternate" hreflang="en" href="https://ori-lab.org${urlFor('en',slug)}"><link rel="alternate" hreflang="ru" href="https://ori-lab.org${urlFor('ru',slug)}"><link rel="alternate" hreflang="x-default" href="https://ori-lab.org${urlFor('en',slug)}">`;
}
module.exports={render,renderStudy,banner,head,valid,validAtlas,enabled,routeSlug};
