const MarkdownIt = require('markdown-it');

function headingIds(tokens) {
  const seen = new Map();
  const headings = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].type !== 'heading_open') continue;
    const inline = tokens[i + 1];
    const text = (inline.children || []).filter(t => ['text', 'code_inline', 'image'].includes(t.type)).map(t => t.content).join('');
    const base = text.toLowerCase().replace(/[^\p{L}\p{M}\p{N}_\-\s]/gu, '').replace(/\s/g, '-');
    const count = seen.get(base) || 0;
    seen.set(base, count + 1);
    const id = base + (count ? '-' + count : '');
    tokens[i].attrSet('id', id);
    headings.push({ level: Number(tokens[i].tag.slice(1)), text, id });
  }
  return headings;
}
const markdown = new MarkdownIt({ html: false, linkify: false });
markdown.core.ruler.before('normalize', 'ori_markers', state => {
  state.src = state.src.replace(/<!-- ori-(?:nav|toc):(?:start|end) -->/g, '');
});
markdown.core.ruler.push('heading_ids', state => headingIds(state.tokens));
module.exports = { markdown, headingIds };
