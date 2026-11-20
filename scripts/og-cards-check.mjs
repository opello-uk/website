// Build-time check: every prerendered studio page must have a committed
// og:image card whose copy matches the page's current og:title/og:description.
// Render's build image has no Chromium, so cards are rendered offline in the
// sandbox with scripts/og-cards.mjs and committed under static/og/. This check
// fails the build when a page's card is missing (new page added) or stale
// (title or lede changed), telling the run exactly what to regenerate.
//
// Same family as scripts/check-translated-slugs.mjs and scripts/404-title.mjs.
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const buildDir = process.env.OUT_DIR ?? 'build';
const studioDir = join(buildDir, 'studio');
const staticOgDir = join('static', 'studio', 'og');
const manifestPath = join(staticOgDir, 'manifest.json');

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

let manifest;
try {
	manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
} catch {
	console.error('og-cards-check: cannot read static/studio/og/manifest.json. Regenerate the cards: run "vite build" once, then "node scripts/og-cards.mjs", and commit static/studio/og/.');
	process.exit(1);
}
const byPath = new Map(manifest.map((m) => [m.path, m]));

const problems = [];
for (const file of findIndexFiles(studioDir)) {
	const rel = relative(studioDir, file); // e.g. ar/personal/index.html
	let ogPath;
	if (rel === 'index.html') ogPath = 'home.png';
	else if (/^(ar|tr)\/index\.html$/.test(rel)) ogPath = `${rel.slice(0, 2)}/home.png`;
	else ogPath = rel.replace(/index\.html$/, '').replace(/\/$/, '') + '.png';

	const card = byPath.get(ogPath);
	if (!card) {
		problems.push(`missing card for ${ogPath} (page: /studio/${rel.replace(/\/index\.html$/, '')}/)`);
		continue;
	}
	const html = readFileSync(file, 'utf8');
	const title = meta(html, 'og:title');
	const description = meta(html, 'og:description');
	if (card.title !== title) problems.push(`stale title on ${ogPath}: card says "${card.title}", page now says "${title}"`);
	if (card.description !== description) problems.push(`stale description on ${ogPath}`);
}

if (problems.length) {
	console.error(`og-cards-check: ${problems.length} problem(s). Regenerate and commit the cards:\n  1. node scripts/og-cards.mjs   (renders from the current build output into static/studio/og/)\n  2. commit static/studio/og/`);
	for (const p of problems) console.error('  - ' + p);
	process.exit(1);
}
console.log(`og-cards-check: ${manifest.length} cards match the prerendered pages`);
