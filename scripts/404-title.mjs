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

// 2026-11-20 19:38 Dubai run: brand the static shell itself. The pre-boot flash
// (and any no-JS visit) rendered in system-ui with no wordmark — the shell's own
// style pinned system-ui even though the fallback's stylesheet link already
// carries the Nimbus @font-face. Now: brand font stack, plus the Opello wordmark
// (same SVG the nav brand uses, peach, linked to the homepage) at the top of the
// shell. StudioError still removes the shell once the app mounts.

const outDir = process.env.OUT_DIR ?? 'build';
const file = join(outDir, '404.html');
const title = 'Page not found · Opello studio (unlisted)';
const description =
	'The address may have moved, or it was never on the site. Everything that is here starts from the homepage.';
const origin = 'https://studio-5c4fcfa636.onrender.com';
const head =
	`\n\t\t<meta name="description" content="${description}" />` +
	`\n\t\t<meta name="referrer-policy" content="no-referrer" />` +
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
// Same source the Wordmark component imports; strip the file's fixed size and
// label the same way the component does (the link around it carries the name).
const WORDMARK = readFileSync(
	new URL('../src/lib/assets/opello-wordmark.svg', import.meta.url),
	'utf8'
)
	.replace(/\s(width|height)="[^"]*"/g, '')
	.replace(/\srole="img"/, '')
	.replace(/\saria-label="[^"]*"/, ' aria-hidden="true" focusable="false"');
const RING_SVG = '<svg viewBox="-520 -520 1040 1040" aria-hidden="true" focusable="false"><defs><linearGradient id="opring-fill" gradientUnits="userSpaceOnUse" x1="-260" y1="-500" x2="200" y2="500"><stop offset="0" stop-color="#FF9A66"></stop><stop offset="0.38" stop-color="#F58851"></stop><stop offset="0.72" stop-color="#D9784F"></stop><stop offset="1" stop-color="#A9604E"></stop></linearGradient><clipPath id="opring-lockclip" clipPathUnits="userSpaceOnUse"><ellipse rx="258" ry="447.5" transform="rotate(30)"></ellipse></clipPath><mask id="opring-cut" maskUnits="userSpaceOnUse" x="-520" y="-520" width="1040" height="1040"><circle r="500" fill="#fff"></circle><ellipse rx="258" ry="447.5" transform="rotate(30)" fill="#000" fill-opacity="0.45"></ellipse><ellipse rx="258" ry="447.5" transform="rotate(-30)" fill="#000" fill-opacity="0.45"></ellipse><g clip-path="url(#opring-lockclip)"><ellipse rx="258" ry="447.5" transform="rotate(-30)" fill="#000"></ellipse></g></mask></defs><circle r="500" fill="url(#opring-fill)" mask="url(#opring-cut)"></circle></svg>';


const body = `
<div class="s404" lang="en-GB" dir="ltr">
	<a class="s404-skip" href="#s404-main">Skip to content</a>
	<main class="s404-main" id="s404-main">
		<div class="s404-ring" aria-hidden="true">${RING_SVG}</div>
		<a class="s404-brand" href="/studio/" aria-label="Opello, home">${WORDMARK}</a>
		<p class="s404-kicker">Page not found &middot; 404</p>
		<h1>This page <span class="s404-accent">isn't here.</span></h1>
		<p class="s404-lede">${description}</p>
		<p class="s404-actions">
			<a class="s404-pill" href="/studio/">Back to the homepage</a>
			<a class="s404-quiet" href="/studio/sitemap/">Every page on the site</a>
		</p>
	</main>
	<footer class="s404-footer">
		<p>Opello studio build &middot; not for publication until approved.</p>
	</footer>
</div>`;
const styles = `
<style>
/* 2026-11-20 (evening run): the shell uses the brand custom properties but never
   defined them and links no stylesheet, so a no-JS visit rendered default black on
   transparent white instead of navy/clay. Define the four inline (same values as
   src/lib/styles/global.css), and carry print rules matching the studio print pass:
   navy-on-paper, decorative ring off, peach pill keeps its fill. */
	:root {
		--deep: #001431;
		--peach: #f58851;
		--clay: #e9e4e0;
		--muted: rgba(233, 228, 224, 0.66);
	}
	.s404 {
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		background: var(--deep);
		color: var(--clay);
		overflow-x: clip;
		font-family: 'Nimbus Sans Extd', 'Nimbus Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}
	.s404-brand {
		display: block;
		width: clamp(96px, 9vw, 128px);
		color: var(--peach);
		line-height: 0;
		margin: 0 0 42px;
	}
	.s404-brand svg {
		display: block;
		width: 100%;
		height: auto;
	}
	.s404-brand:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
	}
	.s404-skip {
		position: absolute;
		left: -9999px;
	}
	.s404-skip:focus {
		left: 16px;
		top: 16px;
		background: var(--peach);
		color: var(--deep);
		padding: 10px 18px;
		border-radius: 999px;
		font-size: 14px;
		font-weight: 500;
	}
	.s404-main {
		position: relative;
		flex: 1;
		max-width: 1100px;
		width: 100%;
		margin: 0 auto;
		padding: clamp(24px, 4vw, 56px) clamp(20px, 4vw, 48px);
		display: flex;
		flex-direction: column;
		justify-content: end;
		min-height: min(52vh, 480px);
	}
	@media (max-width: 560px) {
		.s404-brand {
			width: 84px;
			margin-bottom: 30px;
		}
	}
	.s404-ring {
		position: absolute;
		top: -40px;
		inset-inline-end: -12vw;
		width: min(34vw, 330px);
		aspect-ratio: 1;
		opacity: 0.8;
		pointer-events: none;
	}
	.s404-ring svg {
		width: 100%;
		height: 100%;
		display: block;
		animation: s404-drift 30s ease-in-out infinite alternate;
	}
	@keyframes s404-drift {
		from { transform: rotate(-1deg) translateY(0); }
		to { transform: rotate(1deg) translateY(-7px); }
	}
	.s404-kicker {
		margin: 0 0 14px;
		font-size: 13px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--muted);
	}
	.s404 h1 {
		margin: 0 0 18px;
		font-size: clamp(40px, 6vw, 64px);
		line-height: 1.04;
		font-weight: 500;
		letter-spacing: -0.01em;
	}
	.s404-accent {
		color: var(--peach);
	}
	.s404-lede {
		margin: 0 0 30px;
		max-width: 34em;
		font-size: 17px;
		line-height: 1.6;
	}
	.s404-actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px 22px;
		margin: 0;
	}
	.s404-pill {
		display: inline-block;
		background: var(--peach);
		color: var(--deep);
		text-decoration: none;
		border-radius: 999px;
		padding: 13px 22px;
		font-size: 15px;
	}
	.s404-pill:hover {
		filter: brightness(1.06);
	}
	.s404-pill:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
	}
	.s404-quiet {
		color: var(--clay);
		text-decoration: underline;
		text-underline-offset: 3px;
		font-size: 15px;
	}
	.s404-quiet:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
	}
	.s404-footer {
		padding: 18px clamp(20px, 4vw, 48px);
		border-top: 1px solid rgba(233, 228, 226, 0.16);
	}
	.s404-footer p {
		margin: 0;
		font-size: 12px;
		color: var(--muted);
	}
	@media (prefers-reduced-motion: reduce) {
		.s404-ring svg {
			animation: none;
		}
	}
	@media print {
		.s404-ring {
			display: none;
		}
		.s404 {
			background: transparent;
			color: var(--deep);
			min-height: auto;
		}
		.s404-brand,
		.s404-accent,
		.s404-quiet {
			color: var(--deep);
		}
		.s404-kicker,
		.s404-footer p {
			color: rgba(0, 20, 49, 0.66);
		}
		.s404-footer {
			border-top-color: rgba(0, 20, 49, 0.16);
		}
	}
</style>`;

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
}
if (html.includes('class="s404"')) {
	console.log('404-title: 404.html already has the static body, leaving it alone');
} else {
	// Static branded body: the shell used to be empty until the app booted, so a
	// no-JS visit (and the pre-boot flash) showed a blank white page. This body
	// carries the same chrome StudioError renders (navy ground, ring, peach pill,
	// sitemap link, footer marker); the app's hydration replaces it on boot.
	html = html.replace(
		/<body[^>]*>/,
		(match) => `${match}\n\t${styles}\n\t${body}`
	);
	writeFileSync(file, html);
	console.log(`404-title: injected title, head tags and static branded body into ${file}`);
}
