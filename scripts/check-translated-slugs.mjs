// Build-time drift guard: the small translatedSlugs list in i18n.ts must match
// the real page lists in pages-translated.ts. If a page is added to (or removed
// from) a language without updating translatedSlugs, the nav dropdown would
// link to a missing page or hide a built one. Run from npm run build.
import fs from 'fs';

const read = (p) => fs.readFileSync(new URL(p, import.meta.url), 'utf8');
const i18n = read('../src/lib/studio/i18n.ts');
const translated = read('../src/lib/studio/pages-translated.ts');

const slugList = (text) => [...text.matchAll(/slug: "([a-z0-9-]+)"/g)].map((m) => m[1]);
const trIdx = translated.indexOf('  tr: [');
const arReal = slugList(translated.slice(0, trIdx));
const trReal = slugList(translated.slice(trIdx));

const declared = {};
for (const m of i18n.matchAll(/  (ar|tr): \[([^\]]*)\],/g)) {
  declared[m[1]] = [...m[2].matchAll(/"([a-z0-9-]+)"/g)].map((x) => x[1]);
}

let fail = false;
for (const lang of ['ar', 'tr']) {
  const real = lang === 'ar' ? arReal : trReal;
  const decl = declared[lang] || [];
  const missing = real.filter((s) => !decl.includes(s));
  const extra = decl.filter((s) => !real.includes(s));
  if (missing.length || extra.length) {
    fail = true;
    console.error(`translatedSlugs[${lang}] out of sync with pages-translated.ts`);
    if (missing.length) console.error(`  missing: ${missing.join(', ')}`);
    if (extra.length) console.error(`  extra: ${extra.join(', ')}`);
  }
}
if (fail) {
  console.error('Update src/lib/studio/i18n.ts translatedSlugs to match pages-translated.ts.');
  process.exit(1);
}
console.log(`translatedSlugs in sync (ar: ${arReal.length}, tr: ${trReal.length} pages).`);
