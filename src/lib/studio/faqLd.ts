// FAQPage structured data for the studio FAQ page.
// Generated from the page's own visible Q&A copy only (facts-before-links):
// the schema never says anything the rendered page does not say.
// Studio pages are noindex, so this is agent-legibility plumbing for launch,
// not search SEO today.

export interface FaqSection {
	heading: string;
	body: string;
	href?: string;
	linkLabel?: string;
}

export function faqJsonLd(
	sections: FaqSection[],
	title: string,
	pageUrl: string
): Record<string, unknown> {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		name: title,
		url: pageUrl,
		mainEntity: sections
			.filter((s) => s.heading && s.body)
			.map((s) => ({
				'@type': 'Question',
				name: s.heading,
				acceptedAnswer: { '@type': 'Answer', text: s.body }
			}))
	};
}
