const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const items = JSON.parse(fs.readFileSync(path.join(root, 'data/reading-library.json')));
const failures = [], reviews = [];
function sections(text) {
  return [...text.matchAll(/^## (\d+)\. ([^\n]+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)].map(m => ({
    number: Number(m[1]), title: m[2], body: m[3],
    paragraphs: m[3].trim().split(/\n\s*\n/).filter(Boolean).length,
    references: [...m[3].matchAll(/\[([^\]]+)\]\((https?:[^)]+)\)/g)].map(x => x[1] + '|' + x[2]).sort()
  }));
}
for (const item of items) {
  const source = fs.readFileSync(path.join(root, item.markdown), 'utf8').replace(/\r\n/g, '\n');
  const target = path.join(root, item.markdown_en);
  if (!fs.existsSync(target)) { failures.push(`${item.markdown_en}: missing`); continue; }
  const translation = fs.readFileSync(target, 'utf8').replace(/\r\n/g, '\n');
  const ru = sections(source), en = sections(translation);
  if (ru.length !== en.length || !en.length) failures.push(`${item.markdown_en}: section count ${en.length} versus ${ru.length}`);
  for (let i = 0; i < ru.length; i++) {
    if (!en[i]) continue;
    const label = `${item.markdown_en} section ${ru[i].number}`;
    if (ru[i].number !== en[i].number) failures.push(label + ': section order differs');
    if (JSON.stringify(ru[i].references) !== JSON.stringify(en[i].references)) failures.push(label + ': reference IDs/URLs differ');
    if (ru[i].paragraphs !== en[i].paragraphs) failures.push(label + `: paragraph count ${en[i].paragraphs} versus ${ru[i].paragraphs}`);
  }
  reviews.push({ file: item.markdown_en, sections: en.length, sourceParagraphs: ru.reduce((n,s) => n+s.paragraphs,0), translatedParagraphs: en.reduce((n,s) => n+s.paragraphs,0) });
}
console.log(JSON.stringify({ note: 'Structural completeness checks only; semantic review is separate.', reviews, failures }, null, 2));
process.exitCode = failures.length ? 1 : 0;
