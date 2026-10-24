(() => {
  const lang = document.documentElement.lang === 'ru' ? 'ru' : 'en';
  const emailAddress = 'im@vladimiruzbek.com';
  const copy = {
    ru: { required:'Заполните обязательные поля.', email:'Введите корректный email.', length:'Тема — от 3 до 180 символов, вопрос — от 10 до 6000.', sending:'Отправляем…', send:'Отправить запрос', prepare:'Подготовить письмо', prepared:'Письмо подготовлено. Откройте почтовую программу, проверьте текст и отправьте его.', action:'Открыть письмо ↗', success:'Запрос принят для отправки. Спасибо.', failed:'Не удалось отправить запрос. Попробуйте ещё раз или напишите нам:', unavailable:'Отправка временно недоступна. Напишите нам:', privacy:'Ваш запрос и email будут переданы ORI через почтовый сервис. Не указывайте чувствительные данные.' },
    en: { required:'Please complete the required fields.', email:'Please enter a valid email address.', length:'Topic must be 3–180 characters and the request 10–6,000.', sending:'Sending…', send:'Send request', prepare:'Prepare email', prepared:'Email prepared. Open your email app, review the message and send it.', action:'Open prepared email ↗', success:'Request accepted for delivery. Thank you.', failed:'We could not send your request. Please try again or email us:', unavailable:'Sending is temporarily unavailable. Please email us:', privacy:'Your request and email address will be sent to ORI via an email service. Please do not include sensitive information.' }
  }[lang];
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  function closeMenu() { menu.setAttribute('aria-expanded','false'); nav.classList.remove('is-open'); }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded',String(open)); nav.classList.toggle('is-open',open);
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
  const languageLink = document.querySelector('[data-language-link]');
  languageLink.addEventListener('click', () => {
    const destination = new URL(languageLink.href);
    destination.hash = location.hash;
    destination.search = location.search;
    languageLink.href = destination.href;
  });

  const form = document.querySelector('#request-form');
  if (!form) return;
  let deliveryMode = 'email-link';
  const submit = document.querySelector('#submit-request');
  const submitText = submit.querySelector('[data-submit-label]');
  const status = document.querySelector('#form-status');
  const selected = new URLSearchParams(location.search).get('programme');
  if (selected && /^[a-z-]+$/.test(selected)) {
    const anchor = [...document.querySelectorAll('.programme-card h3 a,.other-links a')].find(a=>a.pathname === '/' + lang + '/research/' + selected + '/');
    if (anchor) form.elements.namedItem('topic').value = anchor.textContent.replace('↗','').trim();
  }
  async function loadConfig() {
    try {
      const response = await fetch('/api/research-requests/config', {headers:{Accept:'application/json'}});
      if (!response.ok) return;
      const config = await response.json();
      if (config.delivery === 'server') {
        deliveryMode = 'server'; submitText.textContent = copy.send;
        document.querySelector('.privacy-note').textContent = copy.privacy;
      }
    } catch { /* Keep email preparation available if configuration cannot be loaded. */ }
  }
  function setStatus(message, kind) {
    status.replaceChildren(); status.dataset.kind = kind || '';
    const text = document.createElement('span'); text.textContent = message; status.append(text);
  }
  function fallback(subject, body, label) {
    const a = document.createElement('a');
    a.href = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    a.textContent = label || emailAddress; status.append(a);
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const fields = ['email','topic','question'].map(name=>form.elements.namedItem(name));
    fields.forEach(field=>field.removeAttribute('aria-invalid'));
    const invalid = fields.find(field=>!field.value.trim() || !field.checkValidity() || (field.minLength > 0 && field.value.trim().length < field.minLength));
    if (invalid) {
      invalid.setAttribute('aria-invalid','true');
      setStatus(!invalid.value.trim() ? copy.required : invalid.name === 'email' ? copy.email : copy.length, 'error'); invalid.focus(); return;
    }
    const payload = Object.fromEntries(['topic','question','email','name','website'].map(name=>[name,form.elements.namedItem(name).value.trim()]));
    const subject = '[ORI research request] ' + payload.topic;
    const body = 'Name: ' + (payload.name || '(not provided)') + '\nEmail: ' + payload.email + '\nTopic: ' + payload.topic + '\n\n' + payload.question;
    if (deliveryMode === 'email-link') { setStatus(copy.prepared,'prepared'); fallback(subject,body,copy.action); return; }
    submit.disabled = true; submit.setAttribute('aria-busy','true'); submitText.textContent = copy.sending; setStatus(copy.sending);
    try {
      const response = await fetch('/api/research-requests',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(payload)});
      if (response.status === 202) { setStatus(copy.success,'success'); form.reset(); }
      else { setStatus(response.status === 503 ? copy.unavailable : copy.failed,'error'); fallback(subject,body); }
    } catch { setStatus(copy.failed,'error'); fallback(subject,body); }
    finally { submit.disabled = false; submit.removeAttribute('aria-busy'); submitText.textContent = copy.send; }
  });
  loadConfig();
})();
