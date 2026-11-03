const illustrations = require('../data/quantum-rap-illustrations.json');
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const bySlug = new Map(illustrations.map(item => [item.slug, item]));

function getIllustration(slug) {
  const item = bySlug.get(slug);
  if (!item) return null;
  return { ...item, url: '/quantum-rap-images/' + slug + '.svg' };
}

function renderIllustration(item) {
  return `<figure class="learning-figure"><img src="${escape(item.url)}" alt="${escape(item.alt)}" width="${item.width}" height="${item.height}" decoding="async"><figcaption><strong>${escape(item.title)}</strong><span class="figure-note">Авторская учебная схема ORI, не фотография. Масштаб и детали условны.</span>${escape(item.caption)}</figcaption><details class="figure-description"><summary>Текстовое объяснение схемы</summary><p>${escape(item.description)}</p></details></figure>`;
}

module.exports = { getIllustration, renderIllustration };
