'use strict';

const route = 'research/singularity/';
const title = 'Lira Singularity';
const source = 'https://github.com/loaderxxx/open-research-institute/blob/work/chatgpt/ori-dfw-publication-20261119/research/singularity/';
const url = lang => `/${lang}/${route}`;
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const copy = {
 en: {
  eyebrow: 'ORI / Independent research track', description: 'A research programme on measurable AI progress, short-term forecasting and operational resilience.',
  intro: 'What does faster AI progress change for a small team? We separate what can be measured from what remains hypothetical, test forecasts against simple baselines, and design workflows that remain usable when our assumptions are wrong.',
  repo: 'Read the research in GitHub', contents: 'On this page', library: 'Research library',
  sectionNames: ['What we mean by singularity','Research tracks','Forecast horizons','Evidence levels','Five resilience principles','The proposed pilot'],
  definition: 'A technological singularity is a proposed break in how predictable technological change becomes, often linked to a feedback loop in which AI helps build more capable AI. Improvements on a benchmark, faster human-assisted research and sustained autonomous self-improvement are different claims. The evidence reviewed here does not establish that a global singularity has occurred or that it has a predictable date.',
  tracks: [
   ['Measurement','Track comparable, versioned results: task success, human review, rework, cost and reliability. Separate capability in a test from usefulness in a live workflow.'],
   ['Forecasting','Register questions and deadlines before collecting forecasts. Compare a simple baseline with independent model estimates on the same evidence snapshot. Record unresolved questions instead of treating missing evidence as a “no”.'],
   ['Resilience','Design and rehearse choices that still work across gradual acceleration, a faster shift or a provider disruption. Humans keep authority for consequential changes.']
  ],
  examples: 'Examples of questions, not issued predictions.',
  horizons: [
   ['24 hours','Will an official status page record an incident for a named service during the agreed window?'],
   ['7 days','Will a specified feature become generally available in a named plan and region, rather than merely announced?'],
   ['30 days','Will an alternative improve cost or end-to-end time on a fixed test set without lowering reviewed quality?']
  ],
  levels: [
   ['Measured','A versioned benchmark, field observation or controlled result, interpreted within its stated task and setting.'],
   ['Reported','A paper, provider disclosure or official status record whose data or methods may be incomplete. An announcement is not measured impact.'],
   ['Inferred','A forecast or scenario with explicit assumptions, alternatives and a way to settle the question.'],
   ['Unresolved','Evidence is missing or conflicting; do not promote an assertion to a fact.']
  ],
  safeguards: [
   ['Read-only by default','Collect and compare public evidence without expanding permissions or acting on external systems.'],
   ['Verify before escalating','Check the source, alternative explanations and what decision the signal would change.'],
   ['Keep a human in control','Publishing, purchases, access changes and other consequential actions require an accountable person.'],
   ['Plan a way out','Keep a manual fallback, portable records and a tested way to stop or restore the workflow.'],
   ['Measure benefit before scaling','Test on non-sensitive examples and keep only changes that improve accepted results after review.']
  ],
  pilot: 'Proposed, not run. A 14-day dry run would log timestamped forecasts with predefined resolution rules, compare paired results with a base-rate or persistence baseline, report Brier scores and coverage when questions resolve, and rehearse a manual recovery. A 30-day question might not settle within the trial. No results, live monitor, external actions or validated reliability claim are being presented.',
  sources: 'Starting references'
 },
 ru: {
  eyebrow: 'ORI / Независимое исследовательское направление', description: 'Исследование измеримого прогресса ИИ, краткосрочных прогнозов и устойчивости рабочих процессов.',
  intro: 'Что ускорение ИИ меняет для небольшой команды? Мы отделяем наблюдаемые изменения от гипотез, сравниваем прогнозы с простыми базовыми оценками и проектируем процессы, которые сохраняют работоспособность, даже если наши ожидания не оправдаются.',
  repo: 'Читать исследование на GitHub', contents: 'На этой странице', library: 'Библиотека исследований',
  sectionNames: ['Что мы называем сингулярностью','Направления исследования','Горизонты прогнозов','Уровни доказательности','Пять принципов устойчивости','Предлагаемый пилот'],
  definition: 'Технологическая сингулярность — гипотеза о качественном переломе в предсказуемости технологического развития. Её часто связывают с обратной связью: ИИ помогает создавать более мощный ИИ. Рост результатов теста, ускорение исследований под контролем людей и устойчивое автономное самоулучшение — разные утверждения. Рассмотренные данные не подтверждают наступление глобальной сингулярности и не позволяют назвать её дату.',
  tracks: [
   ['Измерения','Сопоставляем результаты на конкретных версиях: успешность задач, время человеческой проверки, переделки, стоимость и надёжность. Возможности на тесте не равны пользе в рабочем процессе.'],
   ['Прогнозирование','Заранее фиксируем вопросы и сроки. Сравниваем простую базовую оценку и независимые оценки моделей на одном снимке данных. Если вопрос нельзя закрыть, не засчитываем отсутствие данных как «нет».'],
   ['Устойчивость','Продумываем и проверяем решения для плавного ускорения, резкого сдвига и сбоя поставщика. Ответственность за существенные изменения остаётся у человека.']
  ],
  examples: 'Это примеры вопросов, а не опубликованные прогнозы.',
  horizons: [
   ['24 часа','Появится ли на официальной странице статуса запись об инциденте для выбранного сервиса в заданное окно?'],
   ['7 дней','Станет ли указанная функция общедоступной в конкретном тарифе и регионе, а не просто анонсированной?'],
   ['30 дней','Снизит ли альтернативный вариант стоимость или полное время выполнения на фиксированном наборе задач без потери качества после проверки?']
  ],
  levels: [
   ['Измерено','Тест на указанной версии, полевое наблюдение или контролируемый результат. Вывод действует в границах конкретной задачи и условий.'],
   ['Сообщено','Статья, заявление поставщика или официальная запись о статусе, для которых данные или методика могут быть неполными. Анонс не равен измеренному эффекту.'],
   ['Предположено','Прогноз или сценарий с явными допущениями, альтернативами и правилом, позволяющим установить исход.'],
   ['Не установлено','Данные отсутствуют или противоречат друг другу. Утверждение не становится фактом.']
  ],
  safeguards: [
   ['По умолчанию только чтение','Собираем и сравниваем открытые данные, не расширяем доступ и не действуем во внешних системах.'],
   ['Перепроверяем перед эскалацией','Уточняем источник, альтернативные объяснения и решение, которое может изменить этот сигнал.'],
   ['Оставляем управление человеку','За публикации, покупки, изменения доступов и другие существенные действия отвечает человек.'],
   ['Заранее готовим выход','Нужны ручной режим, переносимые записи и проверенный способ остановить или восстановить процесс.'],
   ['Измеряем пользу до расширения','Проверяем на нечувствительных примерах и сохраняем только то, что улучшает принятые после проверки результаты.']
  ],
  pilot: 'Пилот предложен, но не запускался. План на 14 дней: записать прогнозы с отметками времени и правилами установления исхода, сравнить их на одинаковых вопросах с базовой частотой или сценарием без изменения, после установления исходов опубликовать оценку Брайера и долю закрытых вопросов, а также отработать восстановление вручную. Вопросы на 30 дней могут не закрыться за время пилота. Здесь нет результатов, работающего мониторинга, внешних действий или подтверждённой надёжности.',
  sources: 'Источники для начала'
 }
};

const references = [
 ['Vernor Vinge · NASA archive', 'https://ntrs.nasa.gov/citations/19940022856'],
 ['METR · Measuring AI ability to complete long software tasks', 'https://arxiv.org/abs/2503.14499'],
 ['ForecastBench · Forecasting benchmark', 'https://arxiv.org/abs/2409.19839']
];
const ids = ['definition','tracks','horizons','evidence','resilience','pilot'];
const list = (items, tag = 'ul') => `<${tag} class="singularity-list">${items.map(([label, body]) => `<li><strong>${esc(label)}</strong><p>${esc(body)}</p></li>`).join('')}</${tag}>`;

function render(lang) {
 const c = copy[lang];
 if (!c) return null;
 const sections = [`<p>${esc(c.definition)}</p>`, list(c.tracks), `<p>${esc(c.examples)}</p>${list(c.horizons)}`, list(c.levels),
  list(c.safeguards, 'ol'), `<p>${esc(c.pilot)}</p><h3>${esc(c.sources)}</h3><ul class="singularity-sources">${references.map(([text, link]) => `<li><a href="${esc(link)}" rel="noopener noreferrer">${esc(text)}</a></li>`).join('')}</ul>`];
 const repo = source + (lang === 'ru' ? 'README.ru.md' : 'README.md');
 return {
  title, description: c.description,
  content: `<div class="singularity-page"><section class="dfw-study-hero dfw-hero"><div class="page-wrap"><p class="dfw-breadcrumb"><a href="/${lang}/library/">${esc(c.library)}</a></p><div class="dfw-study-title"><p class="eyebrow">${esc(c.eyebrow)}</p><h1>${title}</h1><p class="dfw-lede">${esc(c.intro)}</p></div><div class="dfw-hero-actions"><a class="button button-light" href="${esc(repo)}" rel="noopener noreferrer">${esc(c.repo)}</a></div></div></section><div class="page-wrap dfw-study-layout"><nav class="dfw-study-nav" aria-label="${esc(c.contents)}"><p>${esc(c.contents)}</p><ol>${ids.map((id,i) => `<li><a href="#${id}">${esc(c.sectionNames[i])}</a></li>`).join('')}</ol></nav><div class="dfw-study-body">${ids.map((id,i) => `<section id="${id}" aria-labelledby="${id}-heading"><h2 id="${id}-heading">${esc(c.sectionNames[i])}</h2>${sections[i]}</section>`).join('')}</div></div></div>`
 };
}

function banner(lang) {
 const c = copy[lang];
 return `<aside class="research-update" aria-label="${esc(c.eyebrow)}"><div class="page-wrap research-update-inner"><span class="research-update-label">${lang === 'ru' ? 'Направление ORI' : 'ORI research track'}</span><a href="${url(lang)}">${title}</a></div></aside>`;
}

function libraryCard(lang) {
 const c = copy[lang];
 return `<section class="singularity-library"><p class="eyebrow">${esc(c.eyebrow)}</p><h2><a href="${url(lang)}">${title}</a></h2><p>${esc(c.description)}</p></section>`;
}

function head(lang) {
 const path = language => 'https://ori-lab.org' + url(language);
 return `<link rel="canonical" href="${path(lang)}"><link rel="alternate" hreflang="en" href="${path('en')}"><link rel="alternate" hreflang="ru" href="${path('ru')}"><link rel="alternate" hreflang="x-default" href="${path('en')}">`;
}

module.exports = { route, url, render, banner, libraryCard, head };
