const fs = require('node:fs');
const path = require('node:path');
const programmes = require('./research-programmes.json');
const methodology = require('./methodology.json');
const getResearchResources = require('./research-resources').getResearchResources;
const programmeGroups = [
  { id:'nature', ru:'Природа, жизнь и сознание', en:'Nature, life & consciousness' },
  { id:'society', ru:'Бизнес, государство и общество', en:'Business, government & society' },
  { id:'technology', ru:'ИИ, обучение и личность', en:'AI, learning & identity' }
];
const books = require('../data/reading-library.json').map(book => ({
  ...book,
  title_en: fs.readFileSync(path.join(__dirname, '..', book.markdown_en), 'utf8').match(/^#\s+(.+)$/m)?.[1] || book.title
}));
const template = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
const link = (lang, slug) => `/${lang}/research/${slug}/`;
const documentLink = (lang, name) => `/${name}${lang === 'en' ? '.en' : ''}.md`;
const copy = {
  ru: {
    siteTitle: 'Материя, жизнь, сознание — Open Research Institute',
    description: 'Исследовательские программы о природе, интеллекте и обществе: физика, биология, мозг, ДНК, ИИ, бизнес, государство и религия.',
    skip: 'К содержанию', menu: 'Меню', navigation: 'Основная навигация', programmes: 'Программы', about: 'Об институте', library: 'Библиотека', collaborate: 'Сотрудничество',
    eyebrow: 'Открытый исследовательский институт', hero: 'Материя.<br>Жизнь.<br><em>Сознание.</em>',
    lead: 'Как устроен мир, как возникает сознание и как люди создают компании, государства и общие смыслы? Исследовательские программы о природе, интеллекте и обществе.',
    explore: 'Исследовательские программы', heroCaption: 'От физических закономерностей — к живым системам и разуму.',
    scales: ['Материя', 'Жизнь', 'Разум'], mapLabel: 'Три масштаба исследования',
    researchEyebrow: '01 / Научная повестка', researchTitle: 'Большие вопросы.<br>Конкретные направления.',
    researchIntro: 'От квантовой информации и регуляции генов до бизнеса, государственных институтов и религии.',
    programmeLink: 'О программе', otherTitle: 'Человек, знание и общество', otherIntro: 'Связанные программы об обучении, личности, смысле и сотрудничестве.',
    readingEyebrow: 'Открытая библиотека', readingTitle: 'От вопроса — к подробному разбору.', readingText: '13 подборок публичных источников для всех программ и 21 опубликованный обзор по семи направлениям. Источники — для чтения и знакомства с областью.', allReading: 'Все материалы',
    aboutEyebrow: '02 / Об институте', aboutTitle: 'Наука начинается<br>с хорошего вопроса.',
    aboutText: 'Open Research Institute — независимая исследовательская инициатива. Мы соединяем фундаментальные вопросы о природе с исследованиями интеллекта, организаций и общественных институтов.',
    aboutStage: 'Для каждой из 13 программ собрана подборка публичных книг, исследований и исследовательских команд для чтения и знакомства с областью. Для семи программ также опубликован 21 авторский обзор; ещё шесть программ оформлены как исследовательская повестка.',
    contactEyebrow: '03 / Сотрудничество', contactTitle: 'Какой вопрос<br>исследуем вместе?', contactText: 'Предложите научный вопрос, открытый набор данных или совместную работу по одной из программ.',
    name: 'Имя', optional: 'необязательно', email: 'Электронная почта', topic: 'Направление или тема', question: 'Ваш вопрос или предложение', submit: 'Подготовить письмо',
    privacy: 'Подготовим письмо на im@vladimiruzbek.com. Вы сможете проверить и отправить его в своей почтовой программе.',
    methods: 'Методология', footerText: 'Исследуем природу, интеллект и общество.', top: 'На главную',
    agenda: 'Формируем программу', review: 'Опубликованы обзоры', focus: 'Исследовательские вопросы', next: 'Ближайшая задача',
    ownReading: 'Материалы программы', relatedReading: 'Из нашей библиотеки', relatedText: 'Обзоры по связанным вопросам; они не заменяют будущие материалы этой программы.',
    resourceLink: 'Материалы и источники', resourceNote: 'Подборка публичных источников для чтения и знакомства с областью.', resourcesHeading: 'Материалы и источники', resourcesIntro: 'Книги и научные публикации по теме, открытые данные и страницы исследователей. Полная подборка включает аннотации и историю исследований.', booksLabel: 'Книги', studiesLabel: 'Исследования и данные', researchersLabel: 'Исследователи и команды', allResources: 'Вся подборка с аннотациями', shown: 'Показано', of: 'из',
    read: 'Читать обзор', context: 'Научный контекст', contextText: 'Независимые научные организации и их направления — ориентиры для знакомства с областью.',
    discuss: 'Обсудить эту программу', allProgrammes: 'Все программы',
    libraryTitle: 'Библиотека исследований', libraryIntro: '13 подборок публичных источников — по одной для каждой программы — и 21 опубликованный обзор по семи программам. Подборки помогают читать и знакомиться с областью.',
    libraryNote: 'Обзоры — авторские материалы ORI. Подборки ссылок ведут к внешним публичным источникам.',
    documents: 'Документы и источники', editorial: 'Редакционная заметка', rights: 'Происхождение и права', catalogue: 'Каталог обзоров', repository: 'Репозиторий', programmeDescription: 'Описание в репозитории', fullMethodology: 'Полный текст методологии',
    institutionNote: 'Название Institute обозначает независимую инициативу. Оно не заявляет государственную аккредитацию, статус научного учреждения или наличие постоянного штата.'
  },
  en: {
    siteTitle: 'Matter, life, consciousness — Open Research Institute',
    description: 'Research programmes in nature, intelligence and society: physics, biology, the brain, DNA, AI, business, government and religion.',
    skip: 'Skip to content', menu: 'Menu', navigation: 'Main navigation', programmes: 'Programmes', about: 'About', library: 'Library', collaborate: 'Collaborate',
    eyebrow: 'Open Research Institute', hero: 'Matter.<br>Life.<br><em>Consciousness.</em>',
    lead: 'How does the world work, how does consciousness emerge, and how do people build companies, states and shared meaning? Research programmes in nature, intelligence and society.',
    explore: 'Explore our programmes', heroCaption: 'From physical laws to living systems and the mind.', scales: ['Matter', 'Life', 'Mind'], mapLabel: 'Three scales of inquiry',
    researchEyebrow: '01 / Research agenda', researchTitle: 'Big questions.<br>Focused programmes.', researchIntro: 'From quantum information and gene regulation to business, public institutions and religion.',
    programmeLink: 'Explore programme', otherTitle: 'People, knowledge & society', otherIntro: 'Related programmes on learning, identity, meaning and cooperation.',
    readingEyebrow: 'Open reading library', readingTitle: 'From a question to a deeper understanding.', readingText: '13 public-source collections, one for each programme, and 21 published reviews across seven programmes. The sources are for reading and exploring each field.', allReading: 'Browse all materials',
    aboutEyebrow: '02 / About the institute', aboutTitle: 'Science begins<br>with a good question.',
    aboutText: 'Open Research Institute is an independent research initiative. We connect fundamental questions about nature with the study of intelligence, organisations and social institutions.',
    aboutStage: 'Each of the 13 programmes has a collection of public books, studies and research teams for reading and exploring the field. Seven programmes also have 21 published ORI reviews; six more are documented as research agendas.',
    contactEyebrow: '03 / Collaborate', contactTitle: 'What should we<br>investigate together?', contactText: 'Bring a scientific question, an open dataset or an idea for collaboration within one of our programmes.',
    name: 'Name', optional: 'optional', email: 'Email address', topic: 'Programme or topic', question: 'Your question or proposal', submit: 'Prepare email',
    privacy: 'We will prepare an email to im@vladimiruzbek.com. You can review and send it in your email app.',
    methods: 'Methodology', footerText: 'Exploring nature, intelligence and society.', top: 'Home', agenda: 'Programme in development', review: 'Reviews published', focus: 'Research questions', next: 'Next research step',
    ownReading: 'Programme reading', relatedReading: 'From our library', relatedText: 'Reviews on connected questions, ahead of dedicated materials for this programme.', read: 'Read the review',
    resourceLink: 'Materials & sources', resourceNote: 'A collection of public sources for reading and exploring the field.', resourcesHeading: 'Materials & sources', resourcesIntro: 'Books and scientific publications, open data and researcher profiles. The full collection includes annotations and the history of research in the field.', booksLabel: 'Books', studiesLabel: 'Studies & data', researchersLabel: 'Researchers & teams', allResources: 'Full collection with annotations', shown: 'Showing', of: 'of',
    context: 'Scientific context', contextText: 'Independent research organisations and their programmes offer starting points for exploring this field.',
    discuss: 'Discuss this programme', allProgrammes: 'All programmes', libraryTitle: 'Research library', libraryIntro: '13 public-source collections, one for each programme, plus 21 published reviews across seven programmes. Choose a collection to explore a field or read a full review.',
    libraryNote: 'Reviews are original ORI writing. The linked collections point to public external sources.',
    documents: 'Documents & sources', editorial: 'Editorial note', rights: 'Provenance & rights', catalogue: 'Reading catalogue', repository: 'Repository', programmeDescription: 'Programme description in the repository', fullMethodology: 'Full methodology text',
    institutionNote: 'Institute names an independent initiative. It does not imply accreditation, registration as a scientific institution or a permanent research staff.'
  }
};

function illustration(kind, className = '') {
  let drawing = '';
  if (kind === 'physics') {
    for (let i = 0; i < 9; i++) drawing += `<ellipse cx="180" cy="85" rx="${22 + i * 14}" ry="${60 - i * 4}" transform="rotate(${i * 14 - 56} 180 85)"/>`;
  } else if (kind === 'genomics') {
    for (let i = 0; i < 22; i++) {
      const y = 10 + i * 7, offset = Math.sin(i / 3) * 68;
      drawing += `<path d="M${180 - offset} ${y}H${180 + offset}"/><circle cx="${180 - offset}" cy="${y}" r="2.6"/><circle cx="${180 + offset}" cy="${y}" r="2.6"/>`;
    }
  } else if (kind === 'biology') {
    [[130,65,36],[205,78,43],[165,118,28],[238,123,22],[232,31,17],[102,118,19]].forEach(([x,y,r]) => {
      drawing += `<circle cx="${x}" cy="${y}" r="${r}"/><circle cx="${x}" cy="${y}" r="${r*.35}"/><circle cx="${x+7}" cy="${y-6}" r="3"/>`;
    });
  } else if (kind === 'consciousness') {
    for (let i = 0; i < 7; i++) {
      let d = '';
      for (let x = 35; x <= 325; x += 5) d += `${x === 35 ? 'M' : 'L'}${x} ${30+i*18+Math.sin(x/22+i*.6)*Math.exp(-(((x-180)/95)**2))*19}`;
      drawing += `<path d="${d}"/>`;
    }
  } else {
    const nodes = [[65,85],[112,30],[112,135],[161,61],[174,112],[215,22],[238,76],[230,144],[292,42],[300,119]];
    const edges = [[0,1],[0,2],[0,3],[1,3],[1,5],[2,4],[3,4],[3,5],[3,6],[4,6],[4,7],[5,6],[5,8],[6,8],[6,9],[7,9],[8,9]];
    edges.forEach(([a,b])=>drawing += `<path d="M${nodes[a][0]} ${nodes[a][1]}L${nodes[b][0]} ${nodes[b][1]}"/>`);
    nodes.forEach(([x,y],i)=>drawing += `<circle cx="${x}" cy="${y}" r="${i%3+3}"/>`);
  }
  return `<svg class="science-art ${className}" viewBox="0 0 360 170" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">${drawing}</svg>`;
}

function header(lang, route) {
  const c = copy[lang], home = `/${lang}/`, other = lang === 'ru' ? 'en' : 'ru';
  return `<a class="skip-link" href="#main">${c.skip}</a><header class="site-header"><div class="page-wrap header-inner"><a class="brand" href="${home}" aria-label="Open Research Institute"><span class="brand-mark">ORI<span>.</span></span><span class="brand-name">Open Research<br>Institute</span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">${c.menu}</button><nav id="site-nav" aria-label="${c.navigation}"><a href="${home}#research">${c.programmes}</a><a href="${home}#about">${c.about}</a><a href="${home}library/"${route === 'library/' ? ' aria-current="page"' : ''}>${c.library}</a><a href="${home}methodology/"${route === 'methodology/' ? ' aria-current="page"' : ''}>${c.methods}</a><a href="${home}#collaborate">${c.collaborate}</a></nav><div class="language-switch"><span aria-current="true">${lang.toUpperCase()}</span><span class="language-divider">/</span><a href="/${other}/${route}" lang="${other}" hreflang="${other}" data-language-link>${other.toUpperCase()}</a></div></div></header>`;
}

function footer(lang) {
  const c = copy[lang];
  return `<footer class="site-footer"><div class="page-wrap footer-main"><div><a class="brand" href="/${lang}/"><span class="brand-mark">ORI<span>.</span></span><span class="brand-name">Open Research<br>Institute</span></a><p>${c.footerText}</p></div><nav aria-label="${lang === 'ru' ? 'Дополнительная навигация' : 'More information'}"><a href="/${lang}/library/">${c.library}</a><a href="/${lang}/methodology/">${c.methods}</a><a href="https://github.com/loaderxxx/open-research-institute">GitHub ↗</a><a href="mailto:im@vladimiruzbek.com">im@vladimiruzbek.com ↗</a></nav></div><div class="page-wrap footer-bottom"><span>© ${new Date().getFullYear()} Open Research Institute</span><span>${lang === 'ru' ? 'Независимая исследовательская инициатива' : 'Independent research initiative'}</span></div></footer>`;
}

function requestForm(lang) {
  const c = copy[lang];
  return `<section id="collaborate" class="contact section"><div class="page-wrap contact-grid"><div><p class="eyebrow">${c.contactEyebrow}</p><h2>${c.contactTitle}</h2><p class="section-intro">${c.contactText}</p><a class="contact-email" href="mailto:im@vladimiruzbek.com">im@vladimiruzbek.com ↗</a></div><form id="request-form" class="request-form" novalidate><label>${c.name} <small>${c.optional}</small><input name="name" autocomplete="name" maxlength="120"></label><label>${c.email}<input name="email" type="email" autocomplete="email" maxlength="254" required></label><label class="full">${c.topic}<input name="topic" minlength="3" maxlength="180" required></label><label class="full">${c.question}<textarea name="question" rows="4" minlength="10" maxlength="6000" required></textarea></label><div class="honeypot" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div><div class="form-submit-row"><button id="submit-request" class="button button-dark" type="submit"><span data-submit-label>${c.submit}</span><span aria-hidden="true">↗</span></button><p id="form-status" role="status" aria-live="polite"></p></div><p class="privacy-note">${c.privacy}</p></form></div></section>`;
}

function programmeCard(p, lang, index) {
  const c = p[lang];
  const resources = getResearchResources(p.slug, lang), counts = resources.counts;
  return `<article class="programme-card"><div class="card-topline"><span>${String(index+1).padStart(2,'0')} / ${esc(c.kicker)}</span><span class="small-dot" aria-hidden="true"></span></div>${p.group === 'nature' ? illustration(p.slug) : ''}<h3><a href="${link(lang,p.slug)}">${esc(c.title)}</a></h3><p class="programme-question">${esc(c.question)}</p><p class="programme-resource-count">${counts.books} ${lang === 'ru' ? 'книги' : 'books'} · ${counts.studies} ${lang === 'ru' ? (counts.studies === 4 ? 'исследования' : 'исследований') : 'studies'} · ${counts.researchers} ${lang === 'ru' ? 'исследователя' : 'researchers'}</p><a class="programme-link" href="${link(lang,p.slug)}">${copy[lang].programmeLink}<span aria-hidden="true">↗</span></a><a class="programme-resources-link" href="${link(lang,p.slug)}#resources">${copy[lang].resourceLink}<span aria-hidden="true">↗</span></a></article>`;
}

function resourceCollection(p, lang, className = '') {
  const c = copy[lang], resources = getResearchResources(p.slug, lang);
  const labels = lang === 'ru' ? { read: 'Читать разбор', deep: 'Подробный анализ', source: 'Первоисточник', note: 'Разборы ORI: основные идеи, свидетельства и ограничения. Объём прочтения указан в каждом тексте.' } : { read: 'Read analysis', deep: 'Extended analysis', source: 'Original source', note: 'ORI analyses: main ideas, evidence and limitations. Each text states the depth of source reading.' };
  const category = (label, entries, total) => `<section class="resource-category"><h3>${label} <span class="resource-count">${total}</span></h3><ul>${entries.map(item=>`<li><a class="resource-title" href="${esc(item.analysis?.url || item.url)}">${esc(item.title)}<span aria-hidden="true"> ${item.analysis ? '→' : '↗'}</span></a>${item.analysis ? `<p class="resource-summary">${esc(item.analysis.summary)}</p><div class="resource-actions"><a href="${esc(item.analysis.url)}">${labels.read} →</a>${item.analysis.deepUrl ? `<a href="${esc(item.analysis.deepUrl)}">${labels.deep} →</a>` : ''}<a class="source-original" href="${esc(item.url)}">${labels.source} ↗</a></div>` : ''}</li>`).join('')}</ul></section>`;
  return `<section id="resources" class="resource-collection ${className}"><div class="resource-heading"><div><h2>${c.resourcesHeading}</h2><p>${c.resourcesIntro}</p><p class="analysis-intro">${labels.note}</p></div><a class="resource-map-link" href="${esc(resources.mapUrl)}">${c.allResources}<span aria-hidden="true">↗</span></a></div><div class="resource-categories">${category(c.booksLabel,resources.books,resources.counts.books)}${category(c.studiesLabel,resources.studies,resources.counts.studies)}${category(c.researchersLabel,resources.researchers,resources.counts.researchers)}</div></section>`;
}

function programmeCatalogue(lang) {
  let index = 0;
  return `<nav class="programme-jumps" aria-label="${lang === 'ru' ? 'Области исследований' : 'Research areas'}">${programmeGroups.map(g=>`<a href="#${g.id}">${g[lang]} <span aria-hidden="true">↓</span></a>`).join('')}</nav>` + programmeGroups.map(g=>`<section id="${g.id}" class="programme-group"><h2>${g[lang]}</h2><div class="programme-grid">${programmes.filter(p=>p.group === g.id).map(p=>programmeCard(p,lang,index++)).join('')}</div></section>`).join('');
}

function home(lang) {
  const c = copy[lang];
  return `<section class="hero"><div class="page-wrap hero-grid"><div class="hero-copy"><p class="eyebrow">${c.eyebrow}</p><h1>${c.hero}</h1><p class="hero-lede">${c.lead}</p><a class="button button-light" href="#research">${c.explore}<span aria-hidden="true">↘</span></a></div><div class="hero-plate" aria-hidden="true"><div class="plate-heading">ORI / ${c.mapLabel}</div>${['physics','genomics','brain'].map((slug,i)=>`<div class="plate-row"><span class="plate-index">0${i+1}</span>${illustration(slug)}<span class="plate-label">${c.scales[i]}</span></div>`).join('')}<div class="plate-caption">${c.heroCaption}</div></div></div></section>
    <section id="research" class="section research"><div class="page-wrap"><div class="section-heading"><div><p class="eyebrow">${c.researchEyebrow}</p><h2>${c.researchTitle}</h2></div><p class="section-intro">${c.researchIntro}</p></div>${programmeCatalogue(lang)}</div></section>
    <section class="reading-strip"><div class="page-wrap reading-strip-inner"><div><p class="eyebrow">${c.readingEyebrow}</p><h2>${c.readingTitle}</h2><p>${c.readingText}</p></div><a class="button button-outline" href="/${lang}/library/">${c.allReading}<span aria-hidden="true">↗</span></a></div></section>
    <section id="about" class="section"><div class="page-wrap about-grid"><div><p class="eyebrow">${c.aboutEyebrow}</p><h2>${c.aboutTitle}</h2></div><div class="about-copy"><p>${c.aboutText}</p><p>${c.aboutStage}</p></div></div></section>${requestForm(lang)}`;
}

function readingCards(items, lang) {
  return `<div class="reading-grid">${items.map(book=>`<article class="reading-card"><span class="eyebrow">${lang === 'ru' ? 'Обзор литературы' : 'Literature review'}</span><h3><a href="/${esc(lang === 'ru' ? book.markdown : book.markdown_en)}">${esc(lang === 'ru' ? book.title : book.title_en)}</a></h3><a class="programme-link" href="/${esc(lang === 'ru' ? book.markdown : book.markdown_en)}">${copy[lang].read}<span aria-hidden="true">↗</span></a></article>`).join('')}</div>`;
}

function programmePage(p, lang) {
  const c = copy[lang], text = p[lang];
  const own = books.filter(b=>b.program === p.slug);
  const related = own.length ? [] : books.filter(b=>(p.related || []).includes(b.program) && b.slug === 'overview');
  return `<section class="detail-hero"><div class="page-wrap"><a class="back-link" href="/${lang}/#research">← ${c.allProgrammes}</a><div class="detail-heading"><div><p class="eyebrow">${esc(text.kicker)}</p><h1>${esc(text.title)}</h1><p class="detail-question">${esc(text.question)}</p><span class="status-label">${p.stage === 'agenda' ? c.agenda : c.review}</span></div>${illustration(p.slug)}</div></div></section><section class="section detail-body"><div class="page-wrap"><p class="programme-introduction">${esc(text.summary)}</p>${resourceCollection(p,lang)}<h2 class="subheading">${c.focus}</h2><div class="focus-grid">${text.focus.map((f,i)=>`<article><span class="eyebrow">0${i+1}</span><h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></article>`).join('')}</div><div class="next-step"><span class="eyebrow">${c.next}</span><p>${esc(text.nextStep)}</p></div>${own.length || related.length ? `<section class="programme-reading"><h2 class="subheading">${own.length ? c.ownReading : c.relatedReading}</h2>${related.length ? `<p class="section-intro">${c.relatedText}</p>` : ''}${readingCards(own.length ? own : related,lang)}</section>` : ''}${p.references?.length ? `<details class="references"><summary>${c.context}</summary><p>${c.contextText}</p><ul>${p.references.map(r=>`<li><a href="${esc(r.url)}">${esc(r.title)} ↗</a></li>`).join('')}</ul></details>` : ''}<div class="detail-actions"><a class="button button-dark" href="/${lang}/?programme=${encodeURIComponent(p.slug)}#collaborate">${c.discuss}<span aria-hidden="true">↗</span></a><a class="quiet-link" href="/programs/${p.slug}/README${lang === 'en' ? '.en' : ''}.md">${c.programmeDescription}</a></div></div></section>`;
}

function libraryPage(lang) {
  const c = copy[lang];
  const sourceCards = programmes.map(p=>{const r=getResearchResources(p.slug,lang); return `<article class="source-card"><h3><a href="${link(lang,p.slug)}#resources">${esc(p[lang].title)}<span aria-hidden="true"> ↗</span></a></h3><p>${r.counts.books} ${lang === 'ru' ? 'книги' : 'books'} · ${r.counts.studies} ${lang === 'ru' ? (r.counts.studies === 4 ? 'исследования' : 'исследований') : 'studies'} · ${r.counts.researchers} ${lang === 'ru' ? 'исследователя' : 'researchers'}</p><a class="programme-link" href="${link(lang,p.slug)}#resources">${c.resourceLink}<span aria-hidden="true">↗</span></a><a class="programme-resources-link" href="${esc(r.mapUrl)}">${c.allResources}<span aria-hidden="true">↗</span></a></article>`;}).join('');
  return `<section class="page-title page-wrap"><p class="eyebrow">${c.readingEyebrow}</p><h1>${c.libraryTitle}</h1><p>${c.libraryIntro}</p></section><div class="page-wrap library-content"><a class="analysis-catalogue-link" href="/SOURCE_ANALYSES${lang === 'en' ? '.en' : ''}.md">${lang === 'ru' ? 'Каталог разборов источников и глубина чтения' : 'Source analyses and reading depth'} →</a><section class="library-group source-library"><div class="library-section-heading"><h2>${c.resourcesHeading}</h2><a href="/${lang}/#research">${c.allProgrammes} ↗</a></div><p class="library-note">${c.resourcesIntro}</p><div class="source-grid">${sourceCards}</div></section><section class="library-group review-library"><div class="library-section-heading"><h2>${lang === 'ru' ? '21 опубликованный обзор' : '21 published review'}</h2><a href="/${lang}/methodology/">${c.methods} ↗</a></div>${programmes.filter(p=>books.some(b=>b.program === p.slug)).map(p=>`<section class="review-programme"><h3><a href="${link(lang,p.slug)}">${esc(p[lang].title)} <span aria-hidden="true">↗</span></a></h3>${readingCards(books.filter(b=>b.program === p.slug),lang)}</section>`).join('')}</section><p class="library-note">${c.libraryNote}</p></div>`;
}

function methodsPage(lang) {
  const c = copy[lang], method = methodology[lang];
  return `<section class="page-title page-wrap"><p class="eyebrow">${c.methods}</p><h1>${esc(method.title)}</h1><p>${esc(method.intro)}</p></section><section class="page-wrap methods-content">${method.sections.map(({title,text})=>`<article><h2>${esc(title)}</h2><p>${esc(text)}</p></article>`).join('')}<article><h2>${c.documents}</h2><div class="document-links"><a href="${documentLink(lang,'METHODOLOGY')}">${c.fullMethodology} ↗</a><a href="${documentLink(lang,'EDITORIAL_NOTE')}">${c.editorial} ↗</a><a href="${documentLink(lang,'RIGHTS')}">${c.rights} ↗</a><a href="${documentLink(lang,'LIBRARY')}">${c.catalogue} ↗</a><a href="https://github.com/loaderxxx/open-research-institute">${c.repository} ↗</a></div></article><p class="institution-note">${c.institutionNote}</p></section>`;
}

function renderPage(pathname) {
  const match = pathname === '/' ? ['', 'en', ''] : pathname.match(/^\/(en|ru)(?:\/(.*))?$/);
  if (!match) return null;
  const lang = match[1], rawRoute = match[2] || '', route = rawRoute ? rawRoute.replace(/\/$/, '') + '/' : '';
  let content, title = copy[lang].siteTitle, description = copy[lang].description;
  if (!route) content = home(lang);
  else if (route === 'library/') { content = libraryPage(lang); title = copy[lang].libraryTitle + ' — ORI'; }
  else if (route === 'methodology/') { content = methodsPage(lang); title = copy[lang].methods + ' — ORI'; description = methodology[lang].intro; }
  else {
    const slug = route.match(/^research\/([a-z-]+)\/$/)?.[1];
    const p = programmes.find(p=>p.slug === slug);
    if (!p) return null;
    content = programmePage(p,lang); title = p[lang].title + ' — ORI'; description = p[lang].question;
  }
  const values = {lang, title:esc(title), description:esc(description), header:header(lang,route), content, footer:footer(lang)};
  return template.replace(/\{\{(\w+)\}\}/g, (_, key)=>values[key] || '');
}

module.exports = { renderPage };
