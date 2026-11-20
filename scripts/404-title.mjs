// Post-build: give the adapter-static SPA fallback a real document title.
//
// SvelteKit's fallback (vite.config.ts `fallback: '404.html'`) is an empty SPA
// shell: the +error page only mounts after the app boots in the browser, so the
// static 404.html carries no <title> (an axe document-title violation) and
// browsers show the URL before hydration. Inject the English 404 title into the
// shell at build time; StudioError.svelte's svelte:head/$effect take over once
// the app mounts and for translated routes.
//
// 2026-11-24: also inject the description and og/twitter preview tags, matching
// what every sitemap page carries (the 2026-11-20 head sweeps never saw this
// shell because a 404 is not in sitemap.xml). No canonical or og:url: a 404
// serves on any unmatched path, so naming one URL as the page's own would be
// wrong. English strings in the shell; StudioError.svelte keeps the title
// language-matched once the app mounts.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.OUT_DIR ?? 'build';
const file = join(outDir, '404.html');
const title = 'Page not found · Opello studio (unlisted)';
const description =
	'The address may have moved, or it was never on the site. Everything that is here starts from the homepage.';
const origin = 'https://studio-5c4fcfa636.onrender.com';
const head =
	`\n\t\t<meta name="description" content="${description}" />` +
	`\n\t\t<meta property="og:site_name" content="Opello" />` +
	`\n\t\t<meta property="og:title" content="${title}" />` +
	`\n\t\t<meta property="og:description" content="${description}" />` +
	`\n\t\t<meta property="og:type" content="website" />` +
	`\n\t\t<meta property="og:image" content="${origin}/assets/og.png" />` +
	`\n\t\t<meta property="og:image:width" content="1200" />` +
	`\n\t\t<meta property="og:image:height" content="630" />` +
	`\n\t\t<meta property="og:image:alt" content="Opello" />` +
	`\n\t\t<meta property="og:locale" content="en_GB" />` +
	`\n\t\t<meta property="og:locale:alternate" content="ar_AR" />` +
	`\n\t\t<meta property="og:locale:alternate" content="tr_TR" />` +
	`\n\t\t<meta name="twitter:card" content="summary_large_image" />` +
	`\n\t\t<meta name="twitter:title" content="${title}" />` +
	`\n\t\t<meta name="twitter:description" content="${description}" />` +
	`\n\t\t<meta name="twitter:image" content="${origin}/assets/og.png" />`;
let html = readFileSync(file, 'utf8');
if (html.includes('<title>')) {
	console.log('404-title: 404.html already has a title, leaving it alone');
} else {
	// Reuse the app shell's head: inject right after the charset declaration so
	// it is set before anything that could read it.
	html = html.replace(
		/<meta charset="utf-8"\s*\/?>/,
		(match) => `${match}\n\t\t<title>${title}</title>${head}`
	);
	writeFileSync(file, html);
	console.log(`404-title: injected "${title}" + description + og/twitter tags into ${file}`);
}
