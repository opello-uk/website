// Post-build: give the adapter-static SPA fallback a real document title.
//
// SvelteKit's fallback (vite.config.ts `fallback: '404.html'`) is an empty SPA
// shell: the +error page only mounts after the app boots in the browser, so the
// static 404.html carries no <title> (an axe document-title violation) and
// browsers show the URL before hydration. Inject the English 404 title into the
// shell at build time; StudioError.svelte's svelte:head/$effect take over once
// the app mounts and for translated routes.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.OUT_DIR ?? 'build';
const file = join(outDir, '404.html');
const title = 'Page not found · Opello studio (unlisted)';
let html = readFileSync(file, 'utf8');
if (html.includes('<title>')) {
	console.log('404-title: 404.html already has a title, leaving it alone');
} else {
	// Reuse the app shell's head: inject right after the charset declaration so
	// it is set before anything that could read it.
	html = html.replace(
		/<meta charset="utf-8"\s*\/?>/,
		(match) => `${match}\n\t\t<title>${title}</title>`
	);
	writeFileSync(file, html);
	console.log(`404-title: injected "${title}" into ${file}`);
}
