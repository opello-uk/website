import { chromium } from 'playwright';

const BASE = 'http://localhost:4173';
const PAGES = ['/', '/studio/ar/', '/studio/tr/', '/studio/personal/', '/studio/cards/', '/studio/faq/', '/studio/fees-and-charges/',
  '/studio/help-tin/', '/studio/blog/', '/studio/sitemap/', '/studio/transfers/', '/studio/open-account/',
  '/studio/contact/', '/studio/help/', '/studio/login/', '/studio/download/', '/studio/careers/', '/studio/referrals/',
  '/studio/about/', '/studio/chargebacks/', '/studio/help-getting-started/', '/studio/virtual-cards/', '/studio/savings/',
  '/studio/all-plans/', '/studio/terms-and-conditions/', '/studio/blog/consumer-duty/'];
const WIDTHS = process.argv[2] === '390' ? [390] : [1440];

const lum = rgb => { const f=c=>{c/=255;return c<=0.03928?c/12.92:((c+0.055)/1.055)**2.4}; return 0.2126*f(rgb[0])+0.7152*f(rgb[1])+0.0722*f(rgb[2]); };
const ratio = (a,b)=>{const l=[lum(a),lum(b)].sort((x,y)=>y-x);return (l[0]+0.05)/(l[1]+0.05);};
const pc = s => { const m=s.match(/rgba?\(([^)]+)\)/); if(!m) return null; const p=m[1].split(',').map(Number); return [p[0],p[1],p[2]]; };

const browser = await chromium.launch();
const fails = [], seen = new Set();
for (const W of WIDTHS) for (const p of PAGES) {
  const page = await browser.newPage({ viewport: { width: W, height: 900 } });
  try {
    await page.goto(BASE + p, { waitUntil: 'load', timeout: 45000 });
    await page.waitForTimeout(900);
    await page.keyboard.press('Tab');
    let guard = 0;
    while (guard++ < 500) {
      const r = await page.evaluate(() => {
        const a = document.activeElement;
        if (!a || a === document.body) return null;
        const pc = (q) => { const m = q.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(',').map(Number); return [p[0], p[1], p[2]]; };
        const cs = getComputedStyle(a);
        const ringCol = cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0 ? pc(cs.outlineColor) : null;
        const rect = a.getBoundingClientRect();
        if (!rect.width || rect.bottom < 0 || rect.top > innerHeight) return { skip: true };
        // surface behind the ring: point just outside element on each side
        const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
        const probe = (x, y) => {
          const el = document.elementFromPoint(x, y);
          if (!el) return null;
          let e = el, g = null;
          while (e) { const raw = getComputedStyle(e).backgroundColor; const c = pc(raw); if (c && !/rgba\(\s*\d+,\s*\d+,\s*\d+,\s*0\)/.test(raw)) { g = c; break; } e = e.parentElement; }
          return g;
        };
        const grounds = [];
        const cand = [[rect.right + 4, cy], [rect.left - 4, cy], [cx, rect.bottom + 4], [cx, rect.top - 4]];
        for (const [x, y] of cand) if (x >= 0 && x <= innerWidth && y >= 0 && y <= innerHeight) grounds.push(probe(x, y));
        const own = pc(cs.backgroundColor);
        const shadow = (cs.boxShadow && cs.boxShadow !== 'none') ? cs.boxShadow : '';
        return { ring: ringCol, own, grounds: grounds.filter(Boolean), tag: a.tagName, txt: (a.textContent || a.getAttribute('aria-label') || '').trim().slice(0, 30), shadow: shadow.slice(0, 80), top: Math.round(rect.top) };
      });
      if (!r) break;
      if (!r.skip) {
        const key = JSON.stringify([r.ring, r.own, r.grounds, r.tag]);
        if (!seen.has(key)) {
          seen.add(key);
          let minRatio = 99, worst = null;
          if (r.ring) {
            const surfs = [...new Set([...(r.grounds||[]).map(g=>g.join(',')), r.own ? r.own.join(',') : null].filter(Boolean))];
            for (const s of surfs) { const v = ratio(r.ring, s.split(',').map(Number)); if (v < minRatio) { minRatio = v; worst = s; } }
          }
          if (r.ring && minRatio < 3) fails.push({ page: p, W, ...r, minRatio: +minRatio.toFixed(2), worst });
        }
      }
      await page.keyboard.press('Tab');
    }
  } catch (e) { console.error('ERR', p, W, String(e).slice(0, 120)); }
  await page.close();
}
await browser.close();
console.log('FAILS:', fails.length);
for (const f of fails) console.log(`${f.page} @${f.W} ${f.tag} "${f.txt}" ring ${f.ring} vs ${f.worst} = ${f.minRatio} (grounds ${JSON.stringify(f.grounds)}, own ${f.own}, top ${f.top})`);
