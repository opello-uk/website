import { chromium } from 'playwright-core';
const urls = process.argv.slice(2);
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? '/usr/bin/chromium', args: ['--no-sandbox'] });
for (const url of urls) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForTimeout(1500);
  const m = await page.evaluate(() => new Promise(res => {
    let lcp = 0, cls = 0, fcp = 0;
    try { new PerformanceObserver(l => { const e = l.getEntries(); if (e.length) lcp = e[e.length-1].renderTime || e[e.length-1].startTime; }).observe({ type: 'largest-contentful-paint', buffered: true }); } catch {}
    try { new PerformanceObserver(l => { for (const e of l.getEntries()) if (!e.hadRecentInput) cls += e.value; }).observe({ type: 'layout-shift', buffered: true }); } catch {}
    try { new PerformanceObserver(l => { const e = l.getEntries(); if (e.length) fcp = e[0].startTime; }).observe({ type: 'paint', buffered: true }); } catch {}
    setTimeout(() => {
      const nav = performance.getEntriesByType('navigation')[0];
      res({ lcp: Math.round(lcp), cls: +cls.toFixed(3), fcp: Math.round(fcp), ttfb: Math.round(nav ? nav.responseStart : 0), bytes: nav ? nav.transferSize : 0 });
    }, 500);
  }));
  console.log(url.replace('http://localhost:4173', ''), JSON.stringify(m));
  await page.close();
}
await browser.close();
