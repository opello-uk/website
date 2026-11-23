// Studio Atom feed for the insight articles, generated at build from the same
// page lists that drive sitemap.xml and the Article JSON-LD, so it cannot drift
// from what actually renders. Machine-reader layer (like sitemap.xml):
// the studio is noindex for now, so this is launch prep; llms.txt is removed from the
// live build until launch (commits e90e012/a9d5209) and must be reinstated then —
// see the signoff.md launch checklist; repointing
// STUDIO_ORIGIN in src/lib/studio/i18n.ts updates every URL here automatically.
// Dates: these articles carry no publish dates yet (placeholder copy pending
// sign-off), so no published/issued date is claimed anywhere. <updated> is the
// build time only — an honest "this feed was generated then", never a publish date.
import { pages } from '#lib/studio/pages';
import { articleSlugs } from '#lib/studio/articleLd';
import { STUDIO_ORIGIN } from '#lib/studio/i18n';

export const prerender = true;

const origin = STUDIO_ORIGIN.replace(/\/$/, '');
const feedUrl = `${origin}/studio/feed.xml`;

function esc(s: string): string {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function GET() {
	const articles = pages.filter((p) => (articleSlugs as readonly string[]).includes(p.slug));
	// Build time, not a publish date: the moment this feed was generated.
	const updated = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');

	const entries = articles.map((p) => {
		const url = `${origin}/studio/${p.slug}/`;
		return `  <entry>
    <title>${esc(p.title)}</title>
    <link rel="alternate" href="${url}"/>
    <id>${url}</id>
    <updated>${updated}</updated>
    <summary>${esc(p.lede)}</summary>
  </entry>`;
	});

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="en-GB">
  <title>Opello insights</title>
  <subtitle>Articles from the Opello studio build: general financial explainers, draft copy pending sign-off. English edition; Arabic and Turkish twins exist for every article.</subtitle>
  <link rel="self" href="${feedUrl}"/>
  <link rel="alternate" href="${origin}/studio/blog/"/>
  <id>${feedUrl}</id>
  <updated>${updated}</updated>
  <author><name>Opello</name></author>
${entries.join('\n')}
</feed>
`;

	return new Response(xml, {
		headers: { 'content-type': 'application/atom+xml; charset=utf-8', 'cache-control': 'public, max-age=3600' }
	});
}
