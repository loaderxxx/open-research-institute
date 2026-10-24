'use strict';
// Rebuild the bilingual navigation and source-level progress ledger.
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const programmes = require('../site/research-programmes.json');
const { getResearchResources } = require('../site/research-resources');
const { getSourceAnalyses } = require('../site/source-analyses');
const inventory = [];
const totals = { books: 0, studies: 0, researchers: 0, analyses: 0, extended: 0 };

for (const p of programmes) {
  const ru = getResearchResources(p.slug, 'ru');
  const en = getResearchResources(p.slug, 'en');
  const analyses = getSourceAnalyses(p.slug);
  for (const kind of ['books', 'studies', 'researchers']) {
    for (const [i, resource] of en[kind].entries()) {
      totals[kind]++;
      const analysis = analyses.find(a => a.kind === kind && a.ordinal === i + 1);
      if (analysis) totals.analyses++;
      if (analysis?.deep_markdown) totals.extended++;
      inventory.push({ programme: p.slug, kind, ordinal: i + 1,
        title: {ru: ru[kind][i].title, en: resource.title}, source_url: resource.url,
        ...(analysis || { status: 'pending', long_form_status: kind === 'books' ? 'pending_access_check' : 'not_applicable' }),
      });
    }
  }
}
fs.writeFileSync(path.join(root, 'data/source-analysis-status.json'), JSON.stringify({
  updated: '2026-10-24', scope: 'All entries in the 13 public RESEARCH_MAP files, in their original order. Programme-level recommendations may repeat a source.',
  totals, entries: inventory,
}, null, 2) + '\n');

const labels = {
  ru: {title:'Разборы источников ORI',pair:'English',intro:'Содержательные разборы книг, публикаций, данных и исследовательских групп из 13 публичных карт литературы. Тексты подготовлены с помощью ИИ и прошли внутреннюю редакционную проверку; внешнего научного рецензирования не было.',coverage:'Охват',scope:'Позиции считаются по программам: одна работа может рассматриваться с разных исследовательских точек зрения. Этот слой учитывается отдельно от 21 опубликованного тематического обзора. Старые библиографии этих обзоров сохраняются; эта очередь соответствует текущим картам литературы.',books:'книжных позиций',studies:'публикаций и ресурсов',researchers:'записей об исследователях и командах',initial:'Двуязычных разборов',deep:'Подробных двуязычных анализов',depth:'Глубина чтения и работа с книгами',depthText:'Краткий разбор объясняет предмет, основные идеи, основания, ограничения и значение для программы. Он не означает полного прочтения книги. У каждой позиции отмечено, что реально проверено: описание издателя, аннотация, отдельные разделы или полный текст. Целевой объём подробного книжного анализа — примерно 20–30 обычных страниц; длина не заменяет проверку содержания. Если полного текста нет, требуется доступ к законному экземпляру. Открытые, но ещё не прочитанные книги отмечены отдельно.',kind:{books:'Книги',studies:'Исследования и данные',researchers:'Исследователи и команды'},source:'Источник',read:'Разбор',extended:'Подробный анализ',pending:'Ожидает разбора',full:'Нужен полный текст',close:'Углублённое чтение ещё не завершено',access:'Проверенный доступ',back:'Карты литературы'},
  en: {title:'ORI source analyses',pair:'Русский',intro:'Substantive analyses of books, publications, data and research groups from the 13 public literature maps. AI-assisted texts with internal editorial review; no external scientific peer review has been conducted.',coverage:'Coverage',scope:'Entries are counted by programme: a work may be examined from different research perspectives. This layer is tracked separately from the 21 published thematic reviews. Their older bibliographies are preserved; this queue corresponds to the current literature maps.',books:'book entries',studies:'publications and resources',researchers:'researcher and team entries',initial:'Bilingual analyses',deep:'Extended bilingual analyses',depth:'Reading depth and book analysis',depthText:'An initial analysis explains the subject, main ideas, grounds, limitations and relevance to its programme. It does not imply that an entire book was read. Each entry identifies what was actually inspected: publisher description, abstract, selected sections or full text. The target for an extended book analysis is approximately 20–30 conventional pages; length does not substitute for checking the content. Where full text is unavailable, a lawful copy is needed. Open books awaiting close reading are tracked separately.',kind:{books:'Books',studies:'Studies and data',researchers:'Researchers and teams'},source:'Source',read:'Analysis',extended:'Extended analysis',pending:'Analysis pending',full:'Full text required',close:'Close reading not yet complete',access:'Inspected access',back:'Literature maps'},
};
for (const lang of ['ru', 'en']) {
  const t=labels[lang], suffix=lang==='en'?'.en':'', pair=lang==='en'?'':'.en';
  let out=`# ${t.title}\n\n[${t.pair}](SOURCE_ANALYSES${pair}.md) · [${t.back}](RESEARCH_MAPS${suffix}.md)\n\n${t.intro}\n\n## ${t.coverage}\n\n${totals.books} ${t.books}; ${totals.studies} ${t.studies}; ${totals.researchers} ${t.researchers}. ${t.initial}: **${totals.analyses}**. ${t.deep}: **${totals.extended}**.\n\n${t.scope}\n\n## ${t.depth}\n\n${t.depthText}\n`;
  for (const p of programmes) {
    out+=`\n## ${p[lang].title}\n`;
    for (const kind of ['books','studies','researchers']) {
      out+=`\n### ${t.kind[kind]}\n\n`;
      for (const a of inventory.filter(x=>x.programme===p.slug&&x.kind===kind)) {
        const title=a.title[lang].replace(/[\[\]]/g,'');
        const file=lang==='en'?a.markdown_en:a.markdown;
        const deep=lang==='en'?a.deep_markdown_en:a.deep_markdown;
        const state=a.long_form_status==='requires_full_text'?t.full:a.long_form_status==='pending_close_reading'?t.close:'';
        out+=`- **${title}** — ${file?`[${t.read}](${file})`:t.pending}${deep?` · [${t.extended}](${deep})`:''} · [${t.source}](${a.source_url})${state?`. ${state}.`:'.'}\n`;
      }
    }
  }
  fs.writeFileSync(path.join(root, `SOURCE_ANALYSES${suffix}.md`),out);
}
console.log(JSON.stringify(totals));
