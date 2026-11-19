'use strict';
const manifest = require('../content/dfw-2026/manifest.json');
const release = require('../content/dfw-2026/release.json');
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
function render(lang, data=manifest, publication=release) {
 if (!['en','ru'].includes(lang) || !enabled(data,publication)) return null;
 const ru=lang==='ru';
 const cards=data.items.map(i=>`<article class="dfw-entry" id="${i.slug}"><p class="eyebrow">${esc(label(i.status,lang))}</p><h2>${esc(i.title[lang])}</h2><p>${esc(i.summary[lang])}</p><h3>${ru?'Ограничения':'Limitations'}</h3><p>${esc(i.limitations[lang])}</p><h3>${ru?'Следующий вопрос':'Next question'}</h3><p>${esc(i.callout[lang])}</p>${i.concept ? `<section class="dfw-concept"><h3>${esc(i.concept.title[lang])}</h3><p>${esc(i.concept.summary[lang])}</p><p>${esc(i.concept.limitations[lang])}</p></section>` : ''}<h3>${ru?'Источники и статус проверки':'Sources and evidence status'}</h3><ul>${i.sources.map(s=>`<li><a href="${esc(s.url)}" rel="noopener noreferrer">${esc(s.title)}</a> <small>${esc(label(s.evidence_status,lang))}</small></li>`).join('')}</ul><p><a href="https://github.com/loaderxxx/open-research-institute/blob/work/chatgpt/ori-dfw-publication-20261119/research/dfw-2026/${i.slug}.md">${ru?'Материал в репозитории (EN)':'Repository research note (EN)'}</a></p><a href="#dfw-index">${ru?'К содержанию':'Back to contents'} ↑</a></article>`).join('');
 return {title:data.title[lang],description:data.method[lang],content:`<section class="page-title page-wrap"><p class="eyebrow">ORI · DFW 2026</p><h1>${esc(data.title[lang])}</h1><p>${esc(data.method[lang])}</p></section><div class="page-wrap dfw-content"><nav id="dfw-index" aria-label="${ru?'Содержание исследования':'Research contents'}"><ol>${data.items.map(i=>`<li><a href="#${i.slug}">${esc(i.title[lang])}</a></li>`).join('')}</ol></nav>${cards}<section class="dfw-credits"><h2>${ru?'Об исследовании':'About this research'}</h2><p>${esc(data.credits[lang])}</p>${data.provenance?.[lang] ? `<p>${esc(data.provenance[lang])}</p>` : ''}</section></div>`};
}
function banner(lang) {return enabled() ? `<aside class="research-update"><div class="page-wrap research-update-inner"><span class="research-update-label">${lang==='ru'?'Исследование ORI':'ORI research'}</span><a href="/${lang}/research/dfw-2026/">${esc(manifest.title[lang])} ↗</a></div></aside>` : '';}
function head(lang) {const path='/research/dfw-2026/';return `<link rel="canonical" href="https://ori-lab.org/${lang}${path}"><link rel="alternate" hreflang="en" href="https://ori-lab.org/en${path}"><link rel="alternate" hreflang="ru" href="https://ori-lab.org/ru${path}"><link rel="alternate" hreflang="x-default" href="https://ori-lab.org/en${path}">`;}
module.exports={render,banner,head,valid,enabled};
