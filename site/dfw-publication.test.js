const {test}=require('node:test');
const assert=require('node:assert/strict');
const dfw=require('./dfw-publication');
const {renderPage}=require('./pages');
const pair={en:'Test evidence <unsafe>',ru:'Тест свидетельства <unsafe>'};
const fixture={schema_version:1,title:pair,method:pair,credits:pair,items:Array.from({length:7},(_,i)=>({slug:'entry-'+i,status:'Draft review',title:pair,summary:pair,limitations:pair,callout:pair,sources:[{title:'Source',url:'https://example.org/source',evidence_status:'test-only'}]}))};
test('draft gate and home preservation',()=>{assert.equal(dfw.render('en',fixture,{published:false}),null);if(!dfw.enabled()){assert.equal(renderPage('/en/research/dfw-2026/'),null);assert.equal(renderPage('/ru/research/dfw-2026/'),null);assert.ok(!renderPage('/en/').includes('/en/research/dfw-2026/'));}assert.ok(renderPage('/en/').includes('safe-ai-landscape.en.md'));});
test('both translations, seven sections and escaped content',()=>{for(const lang of ['en','ru']){const p=dfw.render(lang,fixture,{published:true});assert.equal((p.content.match(/class="dfw-entry dfw-atlas-card"/g)||[]).length,7);assert.ok(p.content.includes('&lt;unsafe&gt;'));assert.ok(!p.content.includes('<unsafe>'));assert.ok(p.content.includes('https://example.org/source'));}});
test('incomplete data and unsafe URLs fail closed',()=>{assert.equal(dfw.enabled({...fixture,items:[]},{published:true}),false);const unsafe=structuredClone(fixture);unsafe.items[0].sources[0].url='javascript:alert(1)';assert.equal(dfw.valid(unsafe),false);const noRu=structuredClone(fixture);delete noRu.items[0].summary.ru;assert.equal(dfw.valid(noRu),false);});
test('self canonical, reciprocal language links and EN default',()=>{for(const lang of ['en','ru']){const h=dfw.head(lang);assert.ok(h.includes(`rel="canonical" href="https://ori-lab.org/${lang}/research/dfw-2026/"`));assert.ok(h.includes('hreflang="x-default" href="https://ori-lab.org/en/research/dfw-2026/"'));}assert.ok(renderPage('/').includes('<html lang="en">'));});
test('enabled integration preserves switch and existing home banner',()=>{
 const data=require('../content/dfw-2026/manifest.json'); const release=require('../content/dfw-2026/release.json');
 const saved=structuredClone(data), state=release.published;
 try {Object.assign(data,fixture);release.published=true;
 for(const lang of ['en','ru']){const html=renderPage(`/${lang}/research/dfw-2026/`);assert.ok(html.includes(`<html lang="${lang}">`));assert.ok(html.includes(`href="/${lang==='en'?'ru':'en'}/research/dfw-2026/"`));assert.ok(html.includes(dfw.head(lang)));const home=renderPage(`/${lang}/`);assert.ok(home.includes(`/${lang}/research/dfw-2026/`));assert.ok(home.includes('safe-ai-landscape'));}
 } finally {for(const key of Object.keys(data))delete data[key];Object.assign(data,saved);release.published=state;}
});

test('editorial manifest renders provenance and seven entries in each language',()=>{const m=require('../content/dfw-2026/manifest.json');assert.ok(dfw.valid(m));for(const lang of ['en','ru']){const p=dfw.render(lang,m,{published:true});assert.ok(p.content.includes(m.provenance[lang]));for(const item of m.items){assert.ok(p.content.includes(`id="${item.slug}"`));}assert.ok(p.content.includes(m.items[0].concept.title[lang]));}});

test('all seven detail pages preserve legacy anchors and translate reciprocal paths',()=>{
 const m=require('../content/dfw-2026/manifest.json');
 const a=require('../content/dfw-2026/atlas.json');
 assert.ok(dfw.validAtlas(m,a));
 assert.ok(dfw.enabled());
 for(const lang of ['en','ru']){
  const prefix=`/${lang}/research/dfw-2026/`, other=lang==='en'?'ru':'en';
  const hub=renderPage(prefix);
  for(const item of m.items){
   const slug=item.slug, url=prefix+slug+'/';
   assert.ok(hub.includes(`id="${slug}"`));
   assert.ok(hub.includes(`href="${url}"`));
   const html=renderPage(url);
   assert.ok(html.includes(`href="${prefix}#${slug}"`));
   assert.ok(html.includes(`href="/${other}/research/dfw-2026/${slug}/"`));
   assert.ok(html.includes(`rel="canonical" href="https://ori-lab.org${url}"`));
   assert.ok(html.includes(`/${slug}/README.md"`));
   for(const id of ['findings','evidence','limits','next-question']){
    assert.ok(html.includes(`href="#${id}"`));
    assert.ok(html.includes(`id="${id}"`));
   }
   for(const related of a[slug].related) assert.ok(html.includes(`href="${prefix+related}/"`));
   assert.equal((html.match(/<h1>/g)||[]).length,1);
  }
 }
 assert.equal(renderPage('/en/research/dfw-2026/does-not-exist/'),null);
 assert.equal(renderPage('/en/research/dfw-2026/newman-shared-sensing/extra/'),null);
});

test('study atlas rejects broken related links and unsafe evidence; escapes content',()=>{
 const m=require('../content/dfw-2026/manifest.json');
 const a=structuredClone(require('../content/dfw-2026/atlas.json'));
 const slug=m.items[0].slug;
 assert.equal(dfw.renderStudy('en',slug,m,{published:false},a),null);
 a[slug].evidence[0].title='<img src=x onerror=alert(1)>';
 const rendered=dfw.renderStudy('en',slug,m,{published:true},a);
 assert.ok(rendered.content.includes('&lt;img'));
 assert.ok(!rendered.content.includes('<img src=x'));
 a[slug].related[0]='unknown-slug';
 assert.equal(dfw.renderStudy('en',slug,m,{published:true},a),null);
 a[slug].related[0]=m.items.find(i=>i.slug!==slug && i.slug!==a[slug].related[1]).slug;
 a[slug].evidence[0].url='javascript:alert(1)';
 assert.equal(dfw.renderStudy('en',slug,m,{published:true},a),null);
});
