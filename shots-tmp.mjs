import { chromium } from 'playwright';
const b = await chromium.launch();
for (const [lang, port] of [['ar', 8477], ['tr', 8477], ['en', 8477]]) {
  const path = lang === 'en' ? '/studio/' : `/studio/${lang}/`;
  for (const w of [1440, 390]) {
    const pg = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
    await pg.goto(`http://localhost:${port}${path}`, { waitUntil: 'networkidle' });
    await pg.waitForTimeout(600);
    await pg.screenshot({ path: `/tmp/deck-${lang}-${w}.png`, fullPage: true });
    await pg.context().close();
  }
}
await b.close();
console.log('done');
