const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (['.git', 'node_modules'].includes(entry.name)) return [];
    const p = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(p) : [p];
  });
}
const items = walk(root).filter(p => p.endsWith('.md') && !p.endsWith('.en.md')).map(p => {
  const rel = path.relative(root, p).replaceAll('\\', '/');
  const english = rel.replace(/\.md$/, '.en.md');
  const exists = fs.existsSync(path.join(root, english));
  return { source: rel, source_sha256: crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'), english, status: exists ? 'PREPARED_REQUIRES_SEMANTIC_REVIEW' : 'MISSING', english_sha256: exists ? crypto.createHash('sha256').update(fs.readFileSync(path.join(root, english))).digest('hex') : null };
});
const output = { scope: 'Public repository Markdown pairs only; not private repositories, PDF/PPTX or semantic equivalence certification.', scope_ru: 'Только пары Markdown публичного репозитория; без частных репозиториев, PDF/PPTX и подтверждения смысловой эквивалентности.', items };
fs.writeFileSync(path.join(root, 'data/translation-status.json'), JSON.stringify(output, null, 2) + '\n');
console.log(JSON.stringify({ total: items.length, prepared: items.filter(x => x.status.startsWith('PREPARED')).length, missing: items.filter(x => x.status === 'MISSING').length }));
