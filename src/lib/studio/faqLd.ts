// FAQPage structured data for the studio FAQ page.
// Generated from the page's own visible Q&A copy only (facts-before-links):
// the schema never says anything the rendered page does not say.
// Studio pages are noindex, so this is agent-legibility plumbing for launch,
// not search SEO today.

// Slugs whose sections are genuine question/answer cards (the help Q&A pages).
// The FAQ page (faq) is handled separately: its sections are all Q&A by design.
// help-tin (country table), help-articles and help (nav/index cards) are not Q&A pages.
export const qaPageSlugs: ReadonlySet<string> = new Set([
	'help-getting-started',
	'help-logging-in',
	'help-my-card',
	'help-my-account',
	'help-ethical-saver',
	'help-security-data',
	'help-about-opello',
	'help-get-in-touch'
]);

// Sections phrased as visible questions (English ? or Arabic ؟), so sub-cards and
// topic cards (e.g. "Check your email address") are not emitted as Questions.
export function questionSections(sections: FaqSection[]): FaqSection[] {
	return sections.filter((s) => {
		const t = (s.heading ?? '').trim();
		return t.endsWith('?') || t.endsWith('\u061f');
	});
}

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
