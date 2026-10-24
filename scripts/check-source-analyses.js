'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const programmes = require('../catalog.json');
const { getSourceAnalyses } = require('../site/source-analyses');
const { getResearchResources } = require('../site/research-resources');
const failures=[]; let count=0, extended=0;
const access=new Set(['full_text','selected_sections','abstract','publisher_description','institutional_profile','research_map_only']);
for (const p of programmes) {
  const items=getSourceAnalyses(p.slug), resources=getResearchResources(p.slug,'en');
  for (const kind of ['books','studies','researchers']) {
    const selected=items.filter(a=>a.kind===kind);
    if(selected.length!==resources[kind].length) failures.push(`${p.slug}: ${kind} ${selected.length}/${resources[kind].length}`);
    for(let i=1;i<=resources[kind].length;i++) if(!selected.find(a=>a.ordinal===i)) failures.push(`${p.slug}: missing ${kind} ${i}`);
  }
  for(const a of items) {
    count++;
    if(!access.has(a.access)||!a.checked||!a.status||!a.long_form_status) failures.push(`${p.slug}/${a.id}: incomplete provenance`);
    if(!Array.isArray(a.evidence_urls)||!a.evidence_urls.length) failures.push(`${p.slug}/${a.id}: no evidence URLs`);
    const ru=fs.readFileSync(path.join(root,a.markdown),'utf8'),en=fs.readFileSync(path.join(root,a.markdown_en),'utf8');
    for(const [lang,body] of [['ru',ru],['en',en]]) {
      const words=body.split(/\s+/).filter(Boolean).length;
      if(words<180) failures.push(`${p.slug}/${a.id}/${lang}: only ${words} words`);
      if(/|turn\d+(?:search|view|fetch)\d+|TODO|TBD|\{\{/.test(body)) failures.push(`${p.slug}/${a.id}/${lang}: unresolved marker`);
      if(!/https?:\/\//.test(body)) failures.push(`${p.slug}/${a.id}/${lang}: no source link`);
    }
    if(a.deep_markdown) {
      extended++;
      for(const field of ['deep_markdown','deep_markdown_en']) {
        const body=fs.readFileSync(path.join(root,a[field]),'utf8');
        if(body.split(/\s+/).length<4500) failures.push(`${a[field]}: extended analysis below 4500 words`);
      }
    }
  }
}
console.log(JSON.stringify({initialAnalyses:count,extendedAnalyses:extended,failures},null,2));
process.exitCode=failures.length?1:0;
