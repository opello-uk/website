// Site-entity structured data (Organization + WebSite) for sub-pages.
//
// The homepage roots (src/routes/studio/+page.svelte and HomeLang.svelte) each
// inline their own copy of this graph; this module lets every sub-page carry
// the same facts so agents landing on any page (not just the homepage) can
// pick up the site entity. Facts match the visible page only: name, homepage
// URL, the hero description and the footer slogan. No social sameAs (the
// studio has none confirmed), no logo (no licensed mark yet).
// The descriptions mirror the og:description strings in HomeLang.svelte and
// the English root — keep the three in step if the hero line changes.
// URL rides on STUDIO_ORIGIN for the launch-time repoint.
import { STUDIO_ORIGIN, type Lang } from '#lib/studio/i18n';

const DESCRIPTIONS: Record<'en' | Lang, string> = {
	en: 'Unlock your life. For different lives, different circumstances and different starting points.',
	ar: 'افتح حياتك. لحياةٍ مختلفة وظروفٍ مختلفة ونقاط بدايةٍ مختلفة.',
	tr: 'Hayatını aç. Farklı hayatlar, farklı koşullar ve farklı başlangıç noktaları için.'
};

export function siteJsonLd(lang: 'en' | Lang) {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${STUDIO_ORIGIN}/studio/#org`,
				name: 'Opello',
				url: `${STUDIO_ORIGIN}/studio/`,
				description: DESCRIPTIONS[lang],
				slogan: 'Your own money, unlocked.'
			},
			{
				'@type': 'WebSite',
				'@id': `${STUDIO_ORIGIN}/studio/#site`,
				url: `${STUDIO_ORIGIN}/studio/`,
				name: 'Opello',
				inLanguage: lang,
				publisher: { '@id': `${STUDIO_ORIGIN}/studio/#org` }
			}
		]
	};
}
