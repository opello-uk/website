// Studio sitemap.xml, generated at build from the page lists so it cannot drift.
// The studio is noindex for now (see robots.txt), so this is launch prep: when the
// public domain goes live, repoint STUDIO_ORIGIN in src/lib/studio/i18n.ts and this
// file updates automatically. Out-of-scope pages are not in pages.ts, so they never
// appear here. The HTML sitemap page (/studio/sitemap/) remains the human-readable twin.
import { pages, } from '#lib/studio/pages';
import { pagesByLang, STUDIO_ORIGIN } from '#lib/studio/i18n';

export const prerender = true;

const origin = STUDIO_ORIGIN.replace(/\/$/, '');

// Alternate links per URL: en self plus ar/tr where a twin exists, plus x-default
// (pointing at the English page), matching the hreflang <link> set every page head
// carries (en, ar, tr where a twin exists, x-default -> English).
function urlEntry(path: string, alts: { lang: string; path: string }[]): string {
	const lines = [
		'  <url>',
		`    <loc>${origin}${path}</loc>`,
		...[...alts, { lang: 'x-default', path: alts[0].path }].map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${origin}${a.path}"/>`),
		'  </url>'
	];
	return lines.join('\n');
}

export function GET() {
	const urls: string[] = [];

	// Homepages: /studio/ (en), /studio/ar/, /studio/tr/.
	urls.push(
		urlEntry('/studio/', [
			{ lang: 'en', path: '/studio/' },
			{ lang: 'ar', path: '/studio/ar/' },
			{ lang: 'tr', path: '/studio/tr/' }
		])
	);

	for (const p of pages) {
		const alts = [{ lang: 'en', path: `/studio/${p.slug}/` }];
		for (const lang of ['ar', 'tr'] as const) {
			if (pagesByLang[lang].some((q) => q.slug === p.slug)) {
				alts.push({ lang, path: `/studio/${lang}/${p.slug}/` });
			}
		}
		urls.push(urlEntry(`/studio/${p.slug}/`, alts));
	}

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;

	return new Response(xml, {
		headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' }
	});
}
