const fs = require('node:fs');
const path = require('node:path');
const { markdown, headingIds } = require('../site/markdown');
const root = path.resolve(__dirname, '..');
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    if (['.git', 'node_modules'].includes(e.name)) return [];
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}
const all = walk(root);
const documents = all.filter(p => p.endsWith('.md'));
const failures = [];
let links = 0;
const cache = new Map();
function tokens(file) {
  if (!cache.has(file)) cache.set(file, markdown.parse(fs.readFileSync(file, 'utf8'), {}));
  return cache.get(file);
}
for (const file of documents) {
  const headings = headingIds(tokens(file));
  if (headings.filter(h => h.level === 1).length !== 1) failures.push(`${path.relative(root, file)}: expected one document title`);
  for (const block of tokens(file)) for (const token of block.children || []) {
    if (token.type !== 'link_open') continue;
    const href = token.attrGet('href');
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href)) continue;
    links++;
    const [target, fragment] = decodeURI(href).split('#');
    const dest = target ? path.resolve(path.dirname(file), target.split('?')[0]) : file;
    if (!fs.existsSync(dest)) failures.push(`${path.relative(root, file)}: missing ${href}`);
    else if (fragment && dest.endsWith('.md')) {
      const ids = headingIds(tokens(dest)).map(h => h.id);
      if (!ids.includes(fragment)) failures.push(`${path.relative(root, file)}: missing anchor ${href}`);
    }
  }
}
for (const pdf of all.filter(p => p.endsWith('.pdf'))) failures.push('Unexpected PDF: ' + path.relative(root, pdf));
console.log(JSON.stringify({ documents: documents.length, localLinks: links, failures }, null, 2));
process.exitCode = failures.length ? 1 : 0;
