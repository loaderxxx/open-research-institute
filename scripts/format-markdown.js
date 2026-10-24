const fs = require('node:fs');
const path = require('node:path');
const { markdown, headingIds } = require('../site/markdown');
const root = path.resolve(__dirname, '..');
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    if (['.git', 'node_modules'].includes(e.name)) return [];
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : p.endsWith('.md') ? [p] : [];
  });
}
const requested = process.argv.slice(2).map(p => path.resolve(root, p));
for (const file of walk(root).filter(p => !requested.length || requested.includes(p))) {
  const en = file.endsWith('.en.md');
  let text = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  text = text.replace(/^# # /gm, '## ').replace(/^(#{1,6})([^#\s])/gm, '$1 $2');
  text = text.replace(/^## (\d+)\.\s*(\d+)\.\s*/gm, (whole, a, b) => Number(a) === Number(b) ? `## ${Number(a)}. ` : whole);
  // Remove obsolete generated contents and the original unlinked contents list.
  text = text.replace(/<!-- ori-toc:start -->[\s\S]*?<!-- ori-toc:end -->\n*/g, '');
  text = text.replace(/([^\n])\s+## (Contents|Table of Contents)\s*\n/g, '$1\n\n## $2\n');
  text = text.replace(/^## (?:Содержание|Contents|Table of Contents|Table of contents)\s*\n[\s\S]*?(?=^## |$(?![\s\S]))/gm, '');
  // A reading-format line is publication metadata, not part of the research prose.
  text = text.replace(/^.*\[[^\]\n]*\]\([^\)\n]*\.pdf\)\.[^\n]*$/gm, line => {
    if (/https?:\/\//.test(line)) return line;
    return line.replace(/^.*?\[[^\]]*\]\([^)]*\.pdf\)\.\s*/, '');
  });
  text = text.replace(/Число страниц не является мерой доказательности\.\s*/g, '').replace(/(?:The )?[Pp]age count is not a measure of (?:evidence|evidential strength)\.\s*/g, '');
  text = text.replace(/\n{3,}/g, '\n\n');
  // Repair the former four-column PDF table after the PDF column was removed.
  text = text.replace(/^\|---\|---\|---\|---:\|$/gm, '|---|---|---:|');
  if (en) {
    text = text.replace(/\[Read in Russian\]/g, '[Read]').replace(/\[Markdown \(Russian\)\]/g, '[Markdown]').replace(/\[Markdown, Russian\]/g, '[Markdown]').replace(/The linked repository Markdown is in Russian; the titles above are English translations\.\s*/g, '').replace(/Overview in Russian/g, 'Overview').replace(/\[Text, Russian\]/g, '[Read]');
    text = text.replace(/\]\(([^)\s]+\.md)(#[^)]*)?\)/g, (whole, target, hash = '') => {
      if (/^(?:https?:|#)/.test(target) || target.endsWith('.en.md')) return whole;
      const translated = target.replace(/\.md$/, '.en.md');
      if (path.resolve(path.dirname(file), translated) === file) return whole;
      return fs.existsSync(path.resolve(path.dirname(file), translated)) ? `](${translated}${hash})` : whole;
    });
  }
  const relative = path.relative(root, file).replaceAll('\\', '/');
  const pair = en ? path.basename(file).replace(/\.en\.md$/, '.md') : path.basename(file).replace(/\.md$/, '.en.md');
  if (relative.includes('/reading/')) {
    text = text.replace(/([^\n]) (\*\*Scope of Review:\*\*)/g, '$1\n\n$2').replace(/([^\n]) (The document was prepared using AI)/g, '$1\n\n$2');
    if (en) text = text.replace(/^(?:\*\*)?(?:Length|Word count|Volume)(?:\*\*)?:?(?:\*\*)?\s*/m, '**Source length (Russian):** ');
    text = text.replace(/<!-- ori-nav:start -->[\s\S]*?<!-- ori-nav:end -->\n*/g, '');
    const suffix = en ? '.en.md' : '.md';
    const nav = en ? `[Русский](${pair}) · [Programme description](../README${suffix}) · [Research library](../../../LIBRARY${suffix}) · [Sources and reading depth](../SOURCES${suffix})` : `[English](${pair}) · [Описание программы](../README${suffix}) · [Библиотека исследований](../../../LIBRARY${suffix}) · [Источники и глубина чтения](../SOURCES${suffix})`;
    text = text.replace(/^(# .+)\n/, `$1\n\n<!-- ori-nav:start -->\n${nav}\n<!-- ori-nav:end -->\n`);
  }
  const headings = headingIds(markdown.parse(text, {})).filter(h => h.level === 2);
  if (headings.length >= 2) {
    const toc = `<!-- ori-toc:start -->\n## ${en ? 'Contents' : 'Содержание'}\n\n` + headings.map(h => `- [${h.text.replace(/\[/g, '\\[').replace(/\]/g, '\\]')}](#${h.id})`).join('\n') + '\n<!-- ori-toc:end -->\n\n';
    const at = text.search(/^## /m);
    text = text.slice(0, at) + toc + text.slice(at);
  }
  fs.writeFileSync(file, text.replace(/\n{3,}/g, '\n\n').trim() + '\n');
}
