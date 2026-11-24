import { chromium } from '/home/user/workspace/opello-svelte/node_modules/playwright-core/index.mjs';
const pages = process.argv.slice(2);
const exe = '/usr/bin/chromium';
const browser = await chromium.launch({ executablePath: exe });
const results = [];
for (const width of [1440, 390]) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } });
  const page = await ctx.newPage();
  for (const url of pages) {
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(400);
    const res = await page.evaluate(() => {
      // WCAG 1.4.12 text-spacing bookmarklet values
      const style = document.createElement('style');
      style.textContent = `* { line-height: 1.5 !important; letter-spacing: 0.12em !important; word-spacing: 0.16em !important; } p, li, dd, blockquote, figure, .note, .lede { margin-bottom: 2em !important; }`;
      document.head.appendChild(style);
      const doc = document.documentElement;
      const overflowX = doc.scrollWidth - doc.clientWidth;
      // clipped text: elements whose content is cut (scrollWidth > clientWidth) and not intentionally scrollable
      const clipped = [];
      const els = document.querySelectorAll('h1,h2,h3,p,li,a,button,span,td,th,label');
      for (const el of els) {
        if (!(el instanceof HTMLElement)) continue;
        const cs = getComputedStyle(el);
        if (cs.display === 'none' || cs.visibility === 'hidden') continue;
        if (el.closest('[aria-hidden="true"]')) continue;
        const s = el.scrollWidth - el.clientWidth;
        const oy = el.scrollHeight - el.clientHeight;
        const scrollable = /(auto|scroll)/.test(cs.overflowX + cs.overflowY);
        if ((s > 2 || oy > 6) && !scrollable && el.clientWidth > 0) {
          clipped.push({ tag: el.tagName, txt: (el.textContent||'').trim().slice(0,50), s, oy });
        }
      }
      style.remove();
      return { overflowX, clipped: clipped.slice(0, 8), h1: !!document.querySelector('h1') };
    });
    const bad = res.overflowX > 1 || res.clipped.length > 0;
    results.push({ width, url, overflowX: res.overflowX, clipped: res.clipped, bad });
    if (bad) console.log('FLAG', width, url, JSON.stringify(res));
  }
  await ctx.close();
}
await browser.close();
console.log('DONE', results.length, 'runs,', results.filter(r=>r.bad).length, 'flagged');
