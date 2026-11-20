// Article structured data for the studio insight articles (the blog/insight
// pages adapted from Algbra's published articles and news pieces).
// Generated from the page's own visible copy only (facts-before-links):
// the schema never says anything the rendered page does not say.
// No datePublished: these articles carry no published date yet (placeholder
// copy pending sign-off), and inventing one would be a false claim.
// Studio pages are noindex, so this is agent-legibility plumbing for launch,
// not search SEO today.

// The insight/blog article slugs (not product pages, not help collections).
export const articleSlugs = [
	'chargebacks',
	'green-banking',
	'green-break',
	'money-and-mental-health',
	'world-wildlife-day',
	'cashless-society',
	'consumer-duty',
	'dark-mode',
	'climate-catastrophes',
	'just-transition',
	'sustainable-valentines-day',
	'card-exchange-rates'
] as const;

export function isArticle(slug: string): boolean {
	return (articleSlugs as readonly string[]).includes(slug);
}

export function articleJsonLd(
	title: string,
	lede: string,
	lang: 'en' | 'ar' | 'tr',
	pageUrl: string
): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: title,
		description: lede,
		url: pageUrl,
		inLanguage: lang === 'en' ? 'en-GB' : lang,
		// Name only: the Opello name is the fact the page itself shows (nav and footer).
		// No logo, no sameAs, no dates, until each is real.
		publisher: { '@type': 'Organization', name: 'Opello' }
	};
}
