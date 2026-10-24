'use strict';

const fs = require('node:fs');
const path = require('node:path');
const ROOT = path.resolve(__dirname, '..');
const SLUGS = new Set(require('../catalog.json').map(p => p.slug));
const KINDS = new Set(['books', 'studies', 'researchers']);
const cache = new Map();

function validDocument(slug, value) {
  return typeof value === 'string' &&
    new RegExp(`^programs/${slug}/analysis/(?:book|study|researcher)-[0-9]{2}(?:-deep)?(?:\\.en)?\\.md$`).test(value) &&
    fs.existsSync(path.join(ROOT, value));
}

function getSourceAnalyses(slug) {
  if (!SLUGS.has(slug)) return [];
  if (cache.has(slug)) return cache.get(slug);
  const filename = path.join(ROOT, 'programs', slug, 'analysis-index.json');
  if (!fs.existsSync(filename)) return [];
  const items = JSON.parse(fs.readFileSync(filename, 'utf8'));
  if (!Array.isArray(items)) throw new Error(`Invalid source analysis index: ${slug}`);
  const ids = new Set();
  for (const item of items) {
    if (!KINDS.has(item.kind) || !Number.isInteger(item.ordinal) || item.ordinal < 1 ||
        ids.has(item.id) || !validDocument(slug, item.markdown) || !validDocument(slug, item.markdown_en) ||
        !item.title?.ru || !item.title?.en || !item.summary?.ru || !item.summary?.en) {
      throw new Error(`Invalid source analysis entry: ${slug}/${item.id}`);
    }
    ids.add(item.id);
    if (item.deep_markdown || item.deep_markdown_en) {
      if (!validDocument(slug, item.deep_markdown) || !validDocument(slug, item.deep_markdown_en)) {
        throw new Error(`Incomplete extended analysis pair: ${slug}/${item.id}`);
      }
    }
  }
  cache.set(slug, items);
  return items;
}

module.exports = { getSourceAnalyses, validDocument };
