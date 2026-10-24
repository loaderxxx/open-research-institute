'use strict';

const fs = require('node:fs');
const path = require('node:path');
const MarkdownIt = require('markdown-it');

const ROOT = path.resolve(__dirname, '..');
const MAP_ROOT = path.join(ROOT, 'programs');
const md = new MarkdownIt();
const resourceCache = new Map();

// The catalogue is the allowlist: callers can never turn a slug into an
// arbitrary filesystem path.
const PROGRAM_SLUGS = new Set(
  JSON.parse(fs.readFileSync(path.join(ROOT, 'site', 'research-programmes.json'), 'utf8'))
    .map((programme) => programme.slug)
    .filter((slug) => typeof slug === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)),
);

function plainText(inline) {
  if (!inline || !Array.isArray(inline.children)) return '';
  let result = '';
  for (const token of inline.children) {
    if (token.type === 'text' || token.type === 'code_inline' || token.type === 'html_inline') {
      result += token.content;
    } else if (token.type === 'softbreak' || token.type === 'hardbreak') {
      result += ' ';
    }
  }
  return result.replace(/\s+/g, ' ').trim();
}

function firstStrongText(inline) {
  if (!inline || !Array.isArray(inline.children)) return '';
  let depth = 0;
  let text = '';
  for (const token of inline.children) {
    if (token.type === 'strong_open') {
      if (depth === 0) text = '';
      depth += 1;
    } else if (token.type === 'strong_close' && depth > 0) {
      depth -= 1;
      if (depth === 0 && text.trim()) return text.replace(/\s+/g, ' ').trim();
    } else if (depth > 0) {
      if (token.type === 'text' || token.type === 'code_inline') text += token.content;
      else if (token.type === 'softbreak' || token.type === 'hardbreak') text += ' ';
    }
  }
  return '';
}

function firstLink(inline) {
  if (!inline || !Array.isArray(inline.children)) return null;
  const children = inline.children;
  for (let i = 0; i < children.length; i += 1) {
    const token = children[i];
    if (token.type !== 'link_open') continue;
    const href = (token.attrs || []).find(([name]) => name === 'href')?.[1] || '';
    let depth = 1;
    let text = '';
    for (let j = i + 1; j < children.length && depth > 0; j += 1) {
      const child = children[j];
      if (child.type === 'link_open') depth += 1;
      else if (child.type === 'link_close') depth -= 1;
      else if (depth > 0 && (child.type === 'text' || child.type === 'code_inline')) text += child.content;
      else if (depth > 0 && (child.type === 'softbreak' || child.type === 'hardbreak')) text += ' ';
    }
    return { href, text: text.replace(/\s+/g, ' ').trim() };
  }
  return null;
}

function isGenericLinkLabel(text) {
  const normalized = text.toLocaleLowerCase('ru').replace(/[ё]/g, 'е').replace(/[.!:]+$/g, '').trim();
  return /^(?:here|this|link|doi|источник|ссылка|здесь|страница|издатель|издательская (?:карточка|страница)(?: .*)?|официальная карточка|official (?:publisher )?(?:record|page)|publisher(?: record| page)?|publisher page(?: .*)?|public transcription|публичная транскрипция|mit press|cambridge(?: up| university press)?|oxford(?: academic| university press)?|world bank|springer|nature(?: communications| physics| cell biology)?|wiley(?:-blackwell)?|nber|harvard business school|hbs|conference page)$/u.test(normalized);
}

function externalUrl(inlines) {
  for (const inline of inlines) {
    for (const token of (inline && inline.children) || []) {
      if (token.type !== 'link_open') continue;
      const href = (token.attrs || []).find(([name]) => name === 'href')?.[1];
      if (!href) continue;
      try {
        const url = new URL(href);
        if (url.protocol === 'http:' || url.protocol === 'https:') return url.href;
      } catch (_) {
        // Ignore malformed and non-absolute links.
      }
    }
  }
  return '';
}

function sectionKind(heading) {
  const normalized = heading.toLocaleLowerCase('ru').replace(/[ё]/g, 'е');
  if (/(исследоват|researcher|\bwho\b|кто|активн|действующ|\bactive\b|current\s+research)/u.test(normalized)) {
    return 'researchers';
  }
  if (/(книг|\bbooks?\b)/u.test(normalized)) return 'books';
  if (/(исследован|публикац|\bresearch\b|\bstudies\b|\bpublications?\b|\bpapers?\b)/u.test(normalized)) {
    return 'studies';
  }
  return null;
}

function entryFromInlines(inlines, kind, table = false) {
  const firstInline = inlines[0];
  let title = kind === 'researchers' ? firstStrongText(firstInline) : '';
  const link = firstLink(firstInline);
  if (!title && table) {
    const leading = leadingText(firstInline);
    if (link && !isGenericLinkLabel(link.text)) title = `${leading}${leading ? ' ' : ''}${link.text}`;
    else title = leading || plainText(firstInline);
  }
  if (!title && firstInline) {
    // List annotations commonly follow the linked source title. Keep only
    // text preceding the first link and its label when that label is the title.
    const leading = leadingText(firstInline);
    if (link && !isGenericLinkLabel(link.text)) {
      title = `${leading}${leading ? ' ' : ''}${link.text}`;
    } else {
      title = leading;
    }
  }
  title = cleanTitle(title);
  const url = externalUrl(inlines);
  if (!title || !url) return null;
  return { title, url };
}

function leadingText(inline) {
  const children = (inline && inline.children) || [];
  let leading = '';
  for (const token of children) {
    if (token.type === 'link_open') break;
    if (token.type === 'text' || token.type === 'code_inline') leading += token.content;
    else if (token.type === 'softbreak' || token.type === 'hardbreak') leading += ' ';
  }
  return leading.replace(/\s+/g, ' ').trim();
}

function cleanTitle(value) {
  let title = value.replace(/^[\s\d.)–—-]+/, '').replace(/\s+/g, ' ').trim();
  title = title.replace(/\s*,?\s*DOI\s*:\s*.*$/iu, '');
  title = title.replace(/\s*,\s*(?:MIT Press|Cambridge(?: UP| University Press)?|Oxford Academic|Oxford University Press|World Bank|Springer|Wiley(?:-Blackwell)?|NBER|HBS|Harvard Business School)\s*$/iu, '');
  return title.replace(/[\s,;:—–-]+$/u, '').trim();
}

function parseListEntries(tokens, start, kind) {
  const entries = [];
  let depth = 0;
  let inItem = false;
  let itemDepth = 0;
  let itemInlines = [];
  for (let i = start; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.type === 'list_item_open') {
      depth += 1;
      if (!inItem) {
        inItem = true;
        itemDepth = depth;
        itemInlines = [];
      }
    } else if (token.type === 'list_item_close') {
      if (inItem && depth === itemDepth) {
        const entry = entryFromInlines(itemInlines, kind);
        if (entry) entries.push(entry);
        inItem = false;
        itemInlines = [];
      }
      depth -= 1;
    } else if (inItem && depth === itemDepth && token.type === 'inline') {
      itemInlines.push(token);
    }
    if (depth === 0 && (token.type === 'bullet_list_close' || token.type === 'ordered_list_close')) break;
  }
  return entries;
}

function parseTableEntries(tokens, start, kind) {
  const entries = [];
  let inRow = false;
  let cell = -1;
  let rowInlines = [];
  for (let i = start; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.type === 'tr_open') {
      inRow = true;
      cell = -1;
      rowInlines = [];
    } else if (inRow && (token.type === 'th_open' || token.type === 'td_open')) {
      cell += 1;
    } else if (inRow && token.type === 'inline' && cell === 0) {
      rowInlines.push(token);
    } else if (token.type === 'tr_close' && inRow) {
      const entry = entryFromInlines(rowInlines, kind, true);
      if (entry) entries.push(entry);
      inRow = false;
    }
    if (token.type === 'table_close') break;
  }
  return entries;
}

function extractSection(tokens, start, kind) {
  const entries = [];
  for (let i = start; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (token.type === 'heading_open' && token.tag === 'h2') break;
    if (token.type === 'ordered_list_open' || token.type === 'bullet_list_open') {
      entries.push(...parseListEntries(tokens, i, kind));
    } else if (token.type === 'table_open') {
      entries.push(...parseTableEntries(tokens, i, kind));
    }
  }
  return entries;
}

function parseResearchMap(markdown) {
  const tokens = md.parse(markdown, {});
  const result = { books: [], studies: [], researchers: [] };
  for (let i = 0; i < tokens.length; i += 1) {
    if (tokens[i].type !== 'heading_open' || tokens[i].tag !== 'h2') continue;
    const heading = plainText(tokens[i + 1]);
    const kind = sectionKind(heading);
    if (!kind) continue;
    let bodyStart = i + 2;
    while (bodyStart < tokens.length && tokens[bodyStart].type !== 'heading_close') bodyStart += 1;
    result[kind].push(...extractSection(tokens, bodyStart + 1, kind));
  }
  return result;
}

function getResearchResources(slug, lang) {
  if (typeof slug !== 'string' || !PROGRAM_SLUGS.has(slug) || (lang !== 'ru' && lang !== 'en')) return null;
  const cacheKey = `${slug}:${lang}`;
  if (resourceCache.has(cacheKey)) return resourceCache.get(cacheKey);
  const filename = lang === 'en' ? 'RESEARCH_MAP.en.md' : 'RESEARCH_MAP.md';
  const filepath = path.join(MAP_ROOT, slug, filename);
  try {
    const contents = fs.readFileSync(filepath, 'utf8');
    const parsed = parseResearchMap(contents);
    const resources = {
      mapUrl: `/programs/${slug}/RESEARCH_MAP${lang === 'en' ? '.en' : ''}.md`,
      ...parsed,
      counts: {
        books: parsed.books.length,
        studies: parsed.studies.length,
        researchers: parsed.researchers.length,
      },
    };
    resourceCache.set(cacheKey, resources);
    return resources;
  } catch (_) {
    return null;
  }
}

module.exports = { getResearchResources };
