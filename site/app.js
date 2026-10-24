(() => {
  const emailAddress = 'im@vladimiruzbek.com';
  let deliveryMode = 'email-link';
  const t = {
    en: {
      skip:'Skip to content', menu:'Menu', navLabel:'Main navigation', languageLabel:'Language', navResearch:'Research', navLibrary:'Library', navPresentation:'Presentation', navCollaborate:'Collaborate',
      heroEyebrow:'Independent research initiative', heroTitle:'Intelligence.<br>Evidence.<br><span>Cooperation.</span>', heroLead:'We examine what published research supports, where explanations diverge, and which questions deserve the next careful test.', heroCta:'Explore the institute', repoLink:'Browse the public repository ↗', heroFootnote:'Literature synthesis today. Experiments are a possible next stage with collaborators, subject to agreed protocols.', artQuestions:'QUESTIONS', artEvidence:'EVIDENCE / REVIEW',
      researchEyebrow:'01 — Research map', researchTitle:'One institute.<br><em>Seven questions.</em>', researchIntro:'A connected map across reliable AI research, minds and identity, and the systems people build to cooperate.', researchNote:'These themes connect through shared questions about evidence, interpretation and responsibility. The connections help navigation; each programme keeps its own scope and standards.',
      libraryEyebrow:'02 — Reading room', libraryTitle:'Read the work.<br><em>Check the sources.</em>', libraryIntro:'Seven programmes and 21 full literature reviews, each available in English and Russian, with links to the sources they examine.', statPrograms:'programmes', statReviews:'literature reviews', statFormats:'format · Markdown', librarySummaryLabel:'Library overview', languageNote:'Choose a programme or review to open the complete text in your preferred language.', libraryLoading:'Loading the reading catalogue…', catalogLink:'Full catalogue ↗', editorialLink:'Editorial note ↗',
      deckEyebrow:'03 — A short introduction', deckTitle:'The institute,<br><em>in thirteen slides.</em>', deckIntro:'A concise introduction to the work, its boundaries and a practical first collaboration.', deckTag:'OPEN RESEARCH INSTITUTE', slideChooser:'Choose slide', previous:'Previous', next:'Next', deckHint:'Use the arrow keys or the controls to move through the presentation.',
      collabEyebrow:'04 — Work together', collabTitle:'Start with one<br><em>checkable question.</em>', collabIntro:'A useful first collaboration is small enough to finish and clear enough for another person to verify.', partnerResearchers:'Researchers & universities', partnerResearchersText:'Review a bounded set of claims, or use a programme in a supervised reading seminar.', partnerTeams:'Engineering teams', partnerTeamsText:'Define one evaluation question and a limited technical pilot.', partnerBusiness:'Business partners', partnerBusinessText:'Bring one decision where an evidence brief would be useful.', stageLabel:'Current stage.', stageText:'Literature synthesis and collaboration development. “Institute” names the initiative; it does not imply accreditation, a registered scientific institution or a permanent research staff.',
      formEyebrow:'Propose a research request', formTitle:'What should we<br>examine together?', formIntro:`Describe a bounded question, collaboration idea or correction. Requests go to the ORI team at <a href="mailto:${emailAddress}">${emailAddress}</a>.`, nameLabel:'Name <small>optional</small>', emailLabel:'Email address', topicLabel:'Topic', questionLabel:'Your question or request', submitLabel:'Send request', prepareEmail:'Prepare email', privacyNote:'Your request and email address will be sent to ORI via an email service. Please do not include sensitive information.', emailLinkNote:`This button prepares an email to ${emailAddress}. Your email app will open so you can review and send it. Please do not include sensitive information.`, formRequired:'Please complete the required fields.', formEmail:'Please enter a valid email address.', formLength:'Topic must be 3–180 characters and the request must be 10–6,000 characters.', formSubmitting:'Sending your request…', formEmailPrepared:'Email prepared. Open your email app and send it to ORI.', formEmailAction:'Open email app and send ↗', formSuccess:'Request accepted for delivery. Thank you.', formUnavailable:'The request form is temporarily unavailable. Please email the ORI team directly:', formFailure:'We could not send your request. Please try again or email the ORI team:',
      footerNote:'Independent literature synthesis. Clear about evidence, careful about claims.', footerRepo:'GitHub ↗', footerEmail:'Email ↗', footerStage:'Research initiative · Literature synthesis', libraryError:'The reading catalogue could not be loaded. Open the public catalogue on GitHub.', bookMarkdown:'Read English text ↗', sourceCount:'sources', notAvailable:'File unavailable',
      programmes:[
        ['Reliable AI research','When does an answer deserve trust?'],['Learning from verified results','What counts as useful verification?'],['Consciousness & measurement','Competing theories, observable indicators and limits of interpretation.'],['Digital continuity of identity','Memory, neural structure and the difference between a model and a person.'],['Religion, ritual & cooperation','Belief, group membership and collective action.'],['Voluntary coordination','Shared resources, participation and accountability.'],['Philosophy & meaning','Values, pluralism and the limits of measurement.']
      ], programmeBadge:'PROGRAMME', programmeLink:'Read programme',
      slides:[
        ['Intelligence. Evidence. Cooperation.','<p>An independent research initiative.</p>'],
        ['What can we know, and how can we check it?','<p>Exploring AI, consciousness, identity and human cooperation through accessible reviews of published knowledge.</p><p>Current stage: literature synthesis and collaboration development.</p>'],
        ['Seven programmes, three reading paths','<p>Reliable knowledge · Mind & identity · Human cooperation.</p><p>The groups provide navigation. Each programme retains its own questions and evidence standards.</p>'],
        ['Reliable knowledge','<p><b>Reliable AI research:</b> citation support, research agents and evaluation limits.</p><p><b>Learning from verified results:</b> training signals, process checks and synthetic data.</p><p>No model-performance improvement is claimed.</p>'],
        ['Mind and identity','<p><b>Consciousness & measurement:</b> theories, indicators and limits of interpretation.</p><p><b>Digital continuity:</b> memory, neural structure and the difference between a model and a person.</p><p>No consciousness transfer or digital immortality result is claimed.</p>'],
        ['Human cooperation','<p>Religion, ritual & cooperation · Voluntary coordination · Philosophy & meaning.</p><p>Local findings require context. Philosophical arguments and empirical results remain distinct.</p>'],
        ['The public research foundation','<p>7 programmes · 21 literature reviews in Markdown.</p><p>One overview and two focused reviews per programme, with source references, objections and explicit limits.</p>'],
        ['What the current work establishes','<ul><li>Published literature syntheses</li><li>Programme and reading catalogues</li><li>References and source-access notes</li><li>A public route for corrections</li></ul><p>No external scientific peer review or original experiments are claimed.</p>'],
        ['People, AI and research','<p><b>People</b> set questions, assess claims and take responsibility for decisions.</p><p><b>AI assistance</b> supports finding, comparing and drafting material. Outputs still need scrutiny.</p><p><b>Experiments</b> are a proposed next stage with agreed protocols and qualified collaborators.</p>'],
        ['A first joint project: claim review','<p>Choose one review and 20 jointly selected claims. Use two independent reviewers. Resolve disagreements explicitly.</p><p>Output: source passages, support ratings, corrections and a short English summary.</p>'],
        ['A concrete contribution for each partner','<p>Researchers — independent claim review.<br>Universities — supervised reading seminar.<br>Technical teams — bounded evaluation pilot.<br>Business partners — evidence brief for one decision.</p>'],
        ['The next proof of progress','<p>01 Agree one question.<br>02 Complete the review.<br>03 Release a useful output.</p><p>Completion criterion: every sampled claim has evidence and a disposition. A negative result is valid.</p>'],
        ['What is one question we could examine together?','<p>Start with a bounded, checkable collaboration.</p><a class="slide-action" href="https://github.com/loaderxxx/open-research-institute/issues" target="_blank" rel="noopener noreferrer">Start a public discussion ↗</a>']
      ]
    },
    ru: {
      skip:'Перейти к содержанию', menu:'Меню', navLabel:'Основная навигация', languageLabel:'Язык', navResearch:'Исследования', navLibrary:'Библиотека', navPresentation:'Презентация', navCollaborate:'Сотрудничество',
      heroEyebrow:'Независимая исследовательская инициатива', heroTitle:'Интеллект.<br>Свидетельства.<br><span>Сотрудничество.</span>', heroLead:'Мы изучаем, какие выводы подтверждает опубликованная литература, где расходятся объяснения и какие вопросы стоит проверить дальше.', heroCta:'Об институте', repoLink:'Открытый репозиторий ↗', heroFootnote:'Сегодня мы обобщаем литературу. Эксперименты с партнёрами возможны на следующем этапе при наличии согласованных протоколов.', artQuestions:'ВОПРОСЫ', artEvidence:'СВИДЕТЕЛЬСТВА / ОБЗОР',
      researchEyebrow:'01 — Карта исследований', researchTitle:'Одна инициатива.<br><em>Семь вопросов.</em>', researchIntro:'Связанная карта тем: надёжность исследований с ИИ, сознание и личность, а также системы совместного действия людей.', researchNote:'Эти темы связаны общими вопросами о свидетельствах, интерпретации и ответственности. Такая связь помогает ориентироваться, но у каждой программы свои рамки и стандарты.',
      libraryEyebrow:'02 — Читальный зал', libraryTitle:'Читайте обзоры.<br><em>Проверяйте источники.</em>', libraryIntro:'Семь программ и 21 полный обзор литературы на русском и английском языках, со ссылками на источники.', statPrograms:'программ', statReviews:'обзоров литературы', statFormats:'формат · Markdown', librarySummaryLabel:'О библиотеке', languageNote:'Выберите программу или обзор, чтобы открыть полный текст на удобном языке.', libraryLoading:'Загружаем каталог чтения…', catalogLink:'Полный каталог ↗', editorialLink:'Редакционная заметка ↗',
      deckEyebrow:'03 — Краткое знакомство', deckTitle:'Об инициативе<br><em>за тринадцать слайдов.</em>', deckIntro:'Краткое знакомство с работой, её границами и практическим форматом первого сотрудничества.', deckTag:'OPEN RESEARCH INSTITUTE', slideChooser:'Выбрать слайд', previous:'Назад', next:'Далее', deckHint:'Переключайте слайды стрелками на клавиатуре или кнопками.',
      collabEyebrow:'04 — Сотрудничество', collabTitle:'Начнём с одного<br><em>проверяемого вопроса.</em>', collabIntro:'Для первого проекта лучше выбрать небольшую задачу, которую можно завершить и результат которой сможет проверить другой человек.', partnerResearchers:'Исследователи и университеты', partnerResearchersText:'Проверить ограниченный набор утверждений или провести семинар по одной программе под руководством преподавателя.', partnerTeams:'Инженерные команды', partnerTeamsText:'Сформулировать один вопрос для оценки и небольшой технический пилот.', partnerBusiness:'Бизнес-партнёры', partnerBusinessText:'Предложить решение, для которого полезна записка с разбором свидетельств.', stageLabel:'Текущий этап.', stageText:'Обзор литературы и развитие сотрудничества. Слово «институт» обозначает инициативу и не подразумевает аккредитацию, регистрацию научного учреждения или постоянный штат исследователей.',
      formEyebrow:'Предложить исследовательский запрос', formTitle:'Какой вопрос<br>изучим вместе?', formIntro:`Опишите конкретный вопрос, идею сотрудничества или исправление. Запрос поступит команде ORI: <a href="mailto:${emailAddress}">${emailAddress}</a>.`, nameLabel:'Имя <small>необязательно</small>', emailLabel:'Электронная почта', topicLabel:'Тема', questionLabel:'Ваш вопрос или запрос', submitLabel:'Отправить запрос', prepareEmail:'Подготовить письмо', privacyNote:'Ваш запрос и адрес электронной почты будут отправлены в ORI через почтовый сервис. Не указывайте чувствительные сведения.', emailLinkNote:`Кнопка подготовит письмо на адрес ${emailAddress}. Почтовое приложение откроется, чтобы вы могли проверить и отправить письмо. Не указывайте чувствительные сведения.`, formRequired:'Заполните обязательные поля.', formEmail:'Введите корректный адрес электронной почты.', formLength:'Тема должна содержать от 3 до 180 знаков, запрос — от 10 до 6000 знаков.', formSubmitting:'Отправляем запрос…', formEmailPrepared:'Письмо подготовлено. Откройте почтовое приложение и отправьте его в ORI.', formEmailAction:'Открыть почтовое приложение и отправить ↗', formSuccess:'Запрос принят к отправке. Спасибо.', formUnavailable:'Форма временно недоступна. Напишите команде ORI напрямую:', formFailure:'Не удалось отправить запрос. Попробуйте ещё раз или напишите команде ORI:',
      footerNote:'Независимый обзор литературы. Внимательно к свидетельствам и формулировкам.', footerRepo:'GitHub ↗', footerEmail:'Электронная почта ↗', footerStage:'Исследовательская инициатива · Обзор литературы', libraryError:'Не удалось загрузить каталог. Откройте его в публичном репозитории GitHub.', bookMarkdown:'Читать по-русски ↗', sourceCount:'источников', notAvailable:'Файл недоступен',
      programmes:[
        ['Надёжные исследования с ИИ','Когда ответу можно доверять?'],['Обучение на проверенных результатах','Что считать полезной проверкой?'],['Сознание и измерение','Конкурирующие теории, наблюдаемые признаки и пределы интерпретации.'],['Цифровая непрерывность личности','Память, структура мозга и различие между моделью и человеком.'],['Религия, ритуал и сотрудничество','Вера, принадлежность к группе и совместные действия.'],['Добровольная координация','Общие ресурсы, участие и подотчётность.'],['Философия и смысл','Ценности, плюрализм и пределы измерения.']
      ], programmeBadge:'ПРОГРАММА', programmeLink:'Открыть программу',
      slides:[
        ['Интеллект. Свидетельства. Сотрудничество.','<p>Независимая исследовательская инициатива.</p>'],
        ['Что мы можем знать и как это проверить?','<p>Доступные обзоры опубликованных знаний об ИИ, сознании, личности и человеческом сотрудничестве.</p><p>Текущий этап: обзор литературы и развитие сотрудничества.</p>'],
        ['Семь программ, три направления','<p>Надёжность знаний · Сознание и личность · Человеческое сотрудничество.</p><p>Эти группы помогают ориентироваться. У каждой программы свои вопросы и стандарты свидетельств.</p>'],
        ['Надёжность знаний','<p><b>Надёжные исследования с ИИ:</b> подтверждение цитатами, исследовательские агенты и ограничения оценки.</p><p><b>Обучение на проверенных результатах:</b> обучающие сигналы, проверки процесса и синтетические данные.</p><p>Мы не заявляем об улучшении качества моделей.</p>'],
        ['Сознание и личность','<p><b>Сознание и измерение:</b> теории, показатели и пределы интерпретации.</p><p><b>Цифровая непрерывность:</b> память, структура мозга и различие между моделью и человеком.</p><p>Мы не заявляем о переносе сознания или достижении цифрового бессмертия.</p>'],
        ['Человеческое сотрудничество','<p>Религия, ритуал и сотрудничество · Добровольная координация · Философия и смысл.</p><p>Локальные результаты требуют контекста. Философские аргументы и эмпирические результаты рассматриваются отдельно.</p>'],
        ['Открытая исследовательская база','<p>7 программ · 21 обзор литературы в формате Markdown.</p><p>Для каждой программы подготовлены общий обзор и два тематических. В них приведены источники, возражения и явные ограничения.</p>'],
        ['Что уже сделано','<ul><li>Обзоры опубликованной литературы</li><li>Каталоги программ и чтения</li><li>Ссылки и сведения о доступе к источникам</li><li>Открытый способ предложить исправления</li></ul><p>Внешняя научная рецензия и собственные эксперименты не проводились.</p>'],
        ['Люди, ИИ и исследования','<p><b>Люди</b> выбирают вопросы, оценивают утверждения и несут ответственность за решения.</p><p><b>ИИ</b> помогает находить, сравнивать и готовить материалы. Его результаты всё равно требуют проверки.</p><p><b>Эксперименты</b> — возможный следующий этап при наличии согласованных протоколов и квалифицированных партнёров.</p>'],
        ['Первый совместный проект: проверка утверждений','<p>Выбрать один обзор и 20 согласованных утверждений. Привлечь двух независимых проверяющих. Явно разобрать расхождения.</p><p>Результат: фрагменты источников, оценки подтверждений, исправления и краткое резюме на английском.</p>'],
        ['Посильный вклад каждого партнёра','<p>Исследователи — независимая проверка утверждений.<br>Университеты — учебный семинар с преподавателем.<br>Технические команды — ограниченный пилот оценки.<br>Бизнес-партнёры — записка для одного решения.</p>'],
        ['Следующий проверяемый результат','<p>01 Согласовать один вопрос.<br>02 Завершить обзор.<br>03 Опубликовать полезный результат.</p><p>Критерий завершения: для каждого выбранного утверждения есть свидетельства и итоговая оценка. Отрицательный результат тоже полезен.</p>'],
        ['Какой вопрос мы могли бы изучить вместе?','<p>Начнём с чётко ограниченного и проверяемого проекта.</p><a class="slide-action" href="https://github.com/loaderxxx/open-research-institute/issues" target="_blank" rel="noopener noreferrer">Начать публичное обсуждение ↗</a>']
      ]
    }
  };

  const programSlugs = ['reliable-ai-research','verified-learning','consciousness','digital-continuity','religion-and-cooperation','voluntary-governance','philosophy-and-meaning'];
  let lang = location.pathname === '/ru' || location.pathname.startsWith('/ru/') ? 'ru' : 'en';
  let slideIndex = 0;
  const dict = () => t[lang];
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function applyLanguage(next, updateUrl = true) {
    lang = next === 'ru' ? 'ru' : 'en';
    document.documentElement.lang = lang;
    document.body.classList.toggle('lang-ru', lang === 'ru');
    const copy = dict();
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const value = copy[node.dataset.i18n];
      if (typeof value === 'string') node.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(node => {
      const value = copy[node.dataset.i18nAria];
      if (typeof value === 'string') node.setAttribute('aria-label', value);
    });
    document.querySelectorAll('[data-i18n-href]').forEach(node => {
      node.href = node.dataset.i18nHref === 'library'
        ? (lang === 'ru' ? '/LIBRARY.md' : '/LIBRARY.en.md')
        : (lang === 'ru' ? '/EDITORIAL_NOTE.md' : '/EDITORIAL_NOTE.en.md');
    });
    updateDeliveryCopy();
    document.title = lang === 'ru' ? 'Институт открытых исследований — Интеллект, свидетельства, сотрудничество' : 'Open Research Institute — Intelligence, evidence, cooperation';
    document.querySelector('meta[name="description"]').content = lang === 'ru'
      ? 'Институт открытых исследований изучает выводы опубликованных работ, различия в объяснениях и вопросы для дальнейшей проверки.'
      : 'Open Research Institute examines what published research supports, where explanations diverge, and which questions deserve the next careful test.';
    document.querySelectorAll('.language-button').forEach(button => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    renderProgrammes();
    renderSlide();
    renderLibrary();
    document.querySelector('#request-form').querySelectorAll('[aria-invalid="true"]').forEach(el => el.removeAttribute('aria-invalid'));
    document.querySelector('#form-status').replaceChildren();
    if (updateUrl) {
      const path = lang === 'ru' ? '/ru/' : '/en/';
      history.pushState({lang}, '', path + location.hash);
    }
  }

  function renderProgrammes() {
    const copy = dict();
    document.querySelector('#programmes').innerHTML = copy.programmes.map(([title, description], index) => `
      <article class="programme-card"><span class="program-number">0${index + 1} / ${escapeHtml(copy.programmeBadge)}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p><a href="/programs/${programSlugs[index]}/${lang === 'ru' ? 'README.md' : 'README.en.md'}">${escapeHtml(copy.programmeLink)} <span aria-hidden="true">↗</span></a></article>`).join('');
  }

  function renderSlide() {
    const copy = dict();
    const slide = copy.slides[slideIndex];
    document.querySelector('#slide-content').innerHTML = `<span class="slide-number">${String(slideIndex + 1).padStart(2,'0')} / 13</span><h3>${slide[0]}</h3><div class="slide-body">${slide[1]}</div>`;
    document.querySelector('#counter').textContent = `${String(slideIndex + 1).padStart(2,'0')} / 13`;
    document.querySelector('#slide-dots').innerHTML = copy.slides.map((_, i) => `<button type="button" class="slide-dot${i === slideIndex ? ' is-active' : ''}" aria-label="${lang === 'ru' ? 'Слайд' : 'Slide'} ${i + 1}" aria-current="${i === slideIndex ? 'step' : 'false'}" data-slide="${i}"></button>`).join('');
  }

  const slugTitle = {
    'reliable-ai-research':['Reliable AI research','Надёжные исследования с ИИ'],
    'verified-learning':['Learning from verified results','Обучение на проверенных результатах'],
    consciousness:['Consciousness & measurement','Сознание и измерение'],
    'digital-continuity':['Digital continuity of identity','Цифровая непрерывность личности'],
    'religion-and-cooperation':['Religion, ritual & cooperation','Религия, ритуал и сотрудничество'],
    'voluntary-governance':['Voluntary coordination','Добровольная координация'],
    'philosophy-and-meaning':['Philosophy & meaning','Философия и смысл']
  };
  const bookTitleEn = {
    'philosophy-and-meaning/overview':'Philosophy and the meaning of life',
    'philosophy-and-meaning/pluralism-and-measurement':'Pluralism and measuring meaning',
    'philosophy-and-meaning/theories-of-meaning':'Theories of meaning',
    'verified-learning/overview':'Learning from verified results',
    'verified-learning/process-verification':'Process verification',
    'verified-learning/synthetic-data':'Synthetic data and recursive learning',
    'consciousness/indicators-and-measurement':'Indicators and measuring consciousness',
    'consciousness/overview':'Consciousness: a map of open questions',
    'consciousness/theories-and-evidence':'Theories of consciousness and testing predictions',
    'voluntary-governance/commons-and-polycentricity':'Commons and polycentricity',
    'voluntary-governance/overview':'Voluntary coordination',
    'voluntary-governance/participation-and-accountability':'Participation and accountability',
    'digital-continuity/connectomics-and-memory':'Connectomics and memory',
    'digital-continuity/identity-and-models':'Identity and digital models',
    'digital-continuity/overview':'Digital continuity of identity',
    'reliable-ai-research/agents-and-evaluation':'Agents and evaluation of research systems',
    'reliable-ai-research/evidence-and-citations':'Evidence and citations',
    'reliable-ai-research/overview':'Reliable research with AI',
    'religion-and-cooperation/overview':'Religion and cooperation',
    'religion-and-cooperation/religion-and-institutions':'Religion and institutions',
    'religion-and-cooperation/ritual-and-cooperation':'Ritual and cooperation'
  };
  let libraryBooks = null;
  let libraryLoadFailed = false;
  function renderLibrary() {
    const container = document.querySelector('#library-list');
    if (!libraryBooks) {
      if (libraryLoadFailed) container.innerHTML = `<p class="load-error">${escapeHtml(dict().libraryError)} <a href="${lang === 'ru' ? '/LIBRARY.md' : '/LIBRARY.en.md'}">${escapeHtml(dict().catalogLink)}</a></p>`;
      return;
    }
    try {
      const groups = new Map();
      libraryBooks.forEach(book => {
        if (!groups.has(book.program)) groups.set(book.program, []);
        groups.get(book.program).push(book);
      });
      const order = [...programSlugs, ...groups.keys()].filter((slug, i, all) => groups.has(slug) && all.indexOf(slug) === i);
      container.innerHTML = order.map(slug => {
        const name = (slugTitle[slug] || [slug, slug])[lang === 'ru' ? 1 : 0];
        const items = groups.get(slug) || [];
        return `<section class="library-program"><div><h3><a href="/programs/${slug}/${lang === 'ru' ? 'README.md' : 'README.en.md'}">${escapeHtml(name)}</a></h3><p class="program-slug">${escapeHtml(slug.replaceAll('-', ' '))}</p></div><div class="book-list">${items.map(book => {
          const titleRu = book.title || book.slug;
          const title = lang === 'ru' ? titleRu : (bookTitleEn[`${slug}/${book.slug}`] || titleRu);
          const sourceMeta = book.sources ? `${book.sources} ${dict().sourceCount}` : '';
          const readingPath = safeLibraryPath(lang === 'en' ? book.markdown_en : book.markdown);
          return `<article class="book-card"><h4>${escapeHtml(title)}</h4>${sourceMeta ? `<span class="book-meta">${escapeHtml(sourceMeta)}</span>` : ''}<div class="book-links">${readingPath ? `<a href="/${readingPath}">${escapeHtml(dict().bookMarkdown)}</a>` : `<span class="book-meta">${escapeHtml(dict().notAvailable)}</span>`}</div></article>`;
        }).join('')}</div></section>`;
      }).join('');
    } catch (error) {
      container.innerHTML = `<p class="load-error">${escapeHtml(dict().libraryError)}</p>`;
    }
  }
  async function loadLibrary() {
    try {
      const response = await fetch('/data/reading-library.json', {headers:{Accept:'application/json'}});
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const books = await response.json();
      if (!Array.isArray(books)) throw new Error('Unexpected catalogue format');
      libraryBooks = books;
      renderLibrary();
    } catch (error) {
      libraryLoadFailed = true;
      renderLibrary();
    }
  }
  function safeLibraryPath(value) {
    if (typeof value !== 'string' || value.startsWith('/') || value.includes('..') || !/^programs\/[a-z0-9-]+\/reading\/[a-z0-9-]+(?:\.en)?\.md$/.test(value)) return '';
    return value;
  }

  function setStatus(message, kind='') {
    const node = document.querySelector('#form-status');
    node.replaceChildren();
    node.dataset.kind = kind;
    const text = document.createElement('span'); text.textContent = message; node.append(text);
  }
  function addMailFallback(subject, body, actionLabel) {
    const status = document.querySelector('#form-status');
    const link = document.createElement('a');
    link.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    link.textContent = actionLabel || emailAddress;
    status.append(link);
  }
  function updateDeliveryCopy() {
    const copy = dict();
    const submitText = document.querySelector('#submit-request [data-i18n="submitLabel"]');
    if (!submitText) return;
    submitText.textContent = deliveryMode === 'email-link' ? copy.prepareEmail : copy.submitLabel;
    document.querySelector('.privacy-note').textContent = deliveryMode === 'email-link' ? copy.emailLinkNote : copy.privacyNote;
  }
  async function loadDeliveryConfig() {
    try {
      const response = await fetch('/api/research-requests/config', {headers:{Accept:'application/json'}});
      if (!response.ok) return;
      const config = await response.json();
      if (config.delivery === 'server' || config.delivery === 'email-link') deliveryMode = config.delivery;
      updateDeliveryCopy();
    } catch {
      // Keep the safe email-link mode when configuration cannot be confirmed.
    }
  }
  const form = document.querySelector('#request-form');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const fields = ['email','topic','question'].map(name => form.elements.namedItem(name));
    fields.forEach(field => field.removeAttribute('aria-invalid'));
    const invalid = fields.find(field => !field.value.trim() || !field.checkValidity());
    if (invalid) {
      invalid.setAttribute('aria-invalid','true');
      const message = invalid.name === 'email' && invalid.value ? dict().formEmail
        : invalid.value.trim() ? dict().formLength : dict().formRequired;
      setStatus(message, 'error');
      invalid.focus();
      return;
    }
    const payload = Object.fromEntries(['topic','question','email','name','website'].map(name => [name, form.elements.namedItem(name).value.trim()]));
    const subject = `[ORI research request] ${payload.topic}`;
    const body = `Name: ${payload.name || '(not provided)'}\nEmail: ${payload.email}\nTopic: ${payload.topic}\n\n${payload.question}`;
    if (deliveryMode === 'email-link') {
      setStatus(dict().formEmailPrepared, 'prepared');
      addMailFallback(subject, body, dict().formEmailAction);
      return;
    }
    const button = document.querySelector('#submit-request');
    const submitText = button.querySelector('[data-i18n="submitLabel"]');
    button.disabled = true;
    button.setAttribute('aria-busy','true');
    submitText.textContent = dict().formSubmitting;
    setStatus(dict().formSubmitting);
    try {
      const response = await fetch('/api/research-requests', {method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(payload)});
      if (response.status === 202) {
        setStatus(dict().formSuccess, 'success');
        form.reset();
      } else {
        const unavailable = response.status === 503;
        setStatus(unavailable ? dict().formUnavailable : dict().formFailure, 'error');
        addMailFallback(subject, body);
      }
    } catch (error) {
      setStatus(dict().formFailure, 'error');
      addMailFallback(subject, body);
    } finally {
      button.disabled = false;
      button.removeAttribute('aria-busy');
      submitText.textContent = dict().submitLabel;
    }
  });

  document.querySelectorAll('.language-button').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
  document.querySelector('#prev').addEventListener('click', () => {slideIndex = (slideIndex + 12) % 13; renderSlide();});
  document.querySelector('#next').addEventListener('click', () => {slideIndex = (slideIndex + 1) % 13; renderSlide();});
  document.querySelector('#slide-dots').addEventListener('click', event => {
    const dot = event.target.closest('[data-slide]');
    if (dot) {slideIndex = Number(dot.dataset.slide); renderSlide();}
  });
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
    if (event.key === 'ArrowRight') {slideIndex = (slideIndex + 1) % 13; renderSlide();}
    if (event.key === 'ArrowLeft') {slideIndex = (slideIndex + 12) % 13; renderSlide();}
  });
  const menuButton = document.querySelector('.menu-toggle');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    document.querySelector('#site-nav').classList.toggle('is-open', open);
  });
  document.querySelectorAll('#site-nav a').forEach(link => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded','false');
    document.querySelector('#site-nav').classList.remove('is-open');
  }));
  window.addEventListener('popstate', () => applyLanguage(location.pathname.startsWith('/ru') ? 'ru' : 'en', false));
  document.querySelector('#year').textContent = new Date().getFullYear();
  applyLanguage(lang, false);
  loadLibrary();
  loadDeliveryConfig();
})();
