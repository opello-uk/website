// Offline tool: generate a per-page og:image (1200x630) for every prerendered
// studio page, so a shared link shows that page's own title instead of one
// generic card. Run this in the sandbox after any copy change, then commit
// static/studio/og/ — Render's build image has no Chromium, so the cards are checked
// at build time (scripts/og-cards-check.mjs) rather than rendered there.
//
// How it works: `vite build` first (adapter-static emits build/studio/**/index.html).
// Each file carries og:title and og:description (head templates, 2026-11-20).
// This script walks those files, renders a brand card (deep navy #001431, the
// ring motif, peach wordmark, page title/lede) and screenshots it with Playwright
// Chromium into static/studio/og/<page path>.png, mirroring the page URL:
// /studio/personal/ -> og/personal.png, /studio/ar/personal/ ->
// og/ar/personal.png, /studio/ -> og/home.png, /studio/ar/ -> og/ar/home.png.
//
// The head templates point og:image/twitter:image at these paths directly
// (deterministic from slug + lang). Card copy comes from the page's own og
// tags — no new claims are introduced. The studio marker line is on the card.
// The manifest (og/manifest.json) records each card's source title/description;
// og-cards-check.mjs fails the build when a page is missing or its copy drifted.
import { readdirSync, readFileSync, mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { chromium } from 'playwright-core';

const outDir = process.env.OUT_DIR ?? 'static/studio/og';
const sourceDir = join(process.env.BUILD_DIR ?? 'build', 'studio');
const ogDir = outDir;
const marker = 'Opello studio · Not for publication until approved.';

function findIndexFiles(dir) {
	const out = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const p = join(dir, entry.name);
		if (entry.isDirectory()) out.push(...findIndexFiles(p));
		else if (entry.name === 'index.html') out.push(p);
	}
	return out;
}

function meta(html, prop) {
	const m = html.match(new RegExp(`<meta property="${prop}" content="([^"]*)"`));
	return m ? m[1] : '';
}

// Kickers and titles come from the page's own og tags. For the homepages the
// og:title is the marketing line ("Unlock your life." / translated), which
// reads fine as the card headline.
const pages = [];
for (const file of findIndexFiles(sourceDir)) {
	const rel = relative(sourceDir, file); // e.g. ar/personal/index.html
	const html = readFileSync(file, 'utf8');
	const title = meta(html, 'og:title');
	const description = meta(html, 'og:description');
	if (!title) continue;
	let ogPath;
	if (rel === 'index.html') ogPath = 'home.png';
	else if (/^(ar|tr)\/index\.html$/.test(rel)) ogPath = `${rel.slice(0, 2)}/home.png`;
	else ogPath = rel.replace(/index\.html$/, '').replace(/\/$/, '') + '.png';
	pages.push({ ogPath, title, description });
}

if (!pages.length) {
	console.error('og-cards: no prerendered pages found under', studioDir);
	process.exit(1);
}

rmSync(ogDir, { recursive: true, force: true });
for (const p of pages) mkdirSync(dirname(join(ogDir, p.ogPath)), { recursive: true });

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Long titles step down in size so the card never overflows; ledes clamp at
// three lines. dir=rtl for Arabic mirrors the whole card.
function cardHtml({ title, description, rtl, dir = 'ltr' }) {
	const t = esc(title);
	const tLen = title.length;
	const titleSize = tLen > 60 ? 46 : tLen > 34 ? 72 : 92;
	const lede = description ? `<p class="lede">${esc(description)}</p>` : '';
	const kicker = rtl ? '' : ''; // kickers repeat the title's section name; the title alone reads cleaner on a card
	return `<!doctype html><html lang="${rtl ? 'ar' : 'en'}" dir="${dir}"><head><meta charset="utf-8">
<style>
  * { margin: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body {
    background: #001431; color: #E9E4E0;
    font-family: 'Nimbus Sans', 'Nimbus Sans L', Arial, sans-serif;
    position: relative; padding: 64px 72px;
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .rings { position: absolute; inset-inline-end: -180px; top: -220px; z-index: 0; }
  .top { position: relative; z-index: 1; }
  .wordmark { color: #F58851; font-size: 44px; letter-spacing: -0.02em; font-weight: 500; }
  .kicker { margin-top: 26px; color: #F58851; font-size: 22px; letter-spacing: 0.18em; text-transform: uppercase; }
  h1 { position: relative; z-index: 1; margin-top: 18px; font-size: ${titleSize}px; line-height: 1.06;
       letter-spacing: -0.015em; font-weight: 500; max-width: 720px; }
  .lede { position: relative; z-index: 1; margin-top: 20px; font-size: 26px; line-height: 1.45;
          color: rgba(233, 228, 224, 0.75); max-width: 680px; display: -webkit-box;
          -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
  .marker { position: relative; z-index: 1; font-size: 17px; color: rgba(245, 136, 81, 0.85); }
  /* The marker sentence is Latin-only; inside dir=rtl it reorders visually
     (".Not for publication until approved · Opello studio"), so it is pinned
     LTR. Found by the og-card pixel sweep 2026-11-23. */
  .bottom { display: flex; flex-direction: column; gap: 14px; }
</style></head><body>
<svg class="rings" width="760" height="760" viewBox="0 0 760 760" fill="none" aria-hidden="true">
  <circle cx="380" cy="380" r="300" stroke="url(#g1)" stroke-width="70"/>
  <circle cx="380" cy="380" r="160" stroke="url(#g2)" stroke-width="34" opacity="0.8"/>
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="760" y2="760">
      <stop offset="0" stop-color="#F58851" stop-opacity="0.9"/><stop offset="1" stop-color="#B4562E" stop-opacity="0.35"/>
    </linearGradient>
    <linearGradient id="g2" x1="0" y1="760" x2="760" y2="0">
      <stop offset="0" stop-color="#F58851" stop-opacity="0.75"/><stop offset="1" stop-color="#7A3A1F" stop-opacity="0.3"/>
    </linearGradient>
  </defs>
</svg>
<div class="top"><div class="wordmark">opello</div>${kicker}</div>
<div class="bottom">
  <h1>${t}</h1>
  ${lede}
  <div class="marker" dir="ltr">${esc(marker)}</div>
</div>
</body></html>`;
}

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH ?? '/usr/bin/chromium', args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
let n = 0;
for (const p of pages) {
	const rtl = p.ogPath.startsWith('ar/');
	await page.setContent(cardHtml({ ...p, rtl, dir: rtl ? 'rtl' : 'ltr' }), { waitUntil: 'load' });
	await page.screenshot({ path: join(ogDir, p.ogPath) });
	n++;
}
await browser.close();
// Manifest: ogPath -> the og:title/og:description the card was rendered from,
// so the build-time check can catch stale cards after copy changes.
writeFileSync(
	join(ogDir, 'manifest.json'),
	JSON.stringify(pages.map((p) => ({ path: p.ogPath, title: p.title, description: p.description })), null, 2)
);
console.log(`og-cards: generated ${n} cards into ${ogDir}`);
