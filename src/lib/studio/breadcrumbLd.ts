// Breadcrumb structured data for the studio sub-pages (en/ar/tr).
// Generated from the page's own visible chrome only (facts-before-links):
// crumb 1 is the brand name in the nav, crumb 2 is the hero kicker (in the
// page's own language, exactly as rendered), crumb 3 is the page title.
// When the kicker's group page exists the crumb links to it (the parent page
// comes from the slug-keyed parentBySlug map, because the kicker text is
// translated and cannot key the map); when no group page exists (Legal,
// Account, Get started) the kicker renders as a name-only crumb — the schema
// never claims a parent page that does not exist.
// 2026-11-23: the insight articles' kicker "Insights" now links to News —
// that page's "Read the insights" section lists every one of these articles,
// so a real parent page exists and the name-only crumb was stale drift.
// Studio pages are noindex, so this is agent-legibility plumbing for launch,
// not search SEO today.

// Page slug -> group page slug, or null where no group page exists.
export const parentBySlug: Record<string, string | null> = {
	// Personal group
	personal: null,
	'all-plans': 'personal',
	transfers: 'personal',
	cards: 'personal',
	'virtual-cards': 'personal',
	'current-accounts': 'personal',
	savings: 'personal',
	download: 'personal',
	referrals: 'personal',
	'ethical-savings': 'savings',
	'open-account': null, // "Get started" kicker names this page itself
	about: null, // "About" kicker names this page itself
	careers: 'about',
	help: null, // "Help" kicker names this page itself
	faq: 'help',
	contact: 'help',
	sitemap: 'help',
	news: null, // "News" kicker names this page itself
	blog: null, // "Blog" kicker names this page itself
	// Insight articles: kicker "Insights" links to News, whose "Read the
	// insights" section lists every article below (verified live 2026-11-23).
	'chargebacks': 'news',
	'green-banking': 'news',
	'green-break': 'news',
	'money-and-mental-health': 'news',
	'world-wildlife-day': 'news',
	'cashless-society': 'news',
	'consumer-duty': 'news',
	'dark-mode': 'news',
	'climate-catastrophes': 'news',
	'just-transition': 'news',
	'sustainable-valentines-day': 'news',
	'card-exchange-rates': 'news',
	'cop26': 'news',
	'fintech-for-good': 'news',
	'help-articles': 'help',
	'help-tin': 'help-articles',
	'help-getting-started': 'help-articles',
	'help-logging-in': 'help-articles',
	'help-security-data': 'help-articles',
	'help-my-card': 'help-articles',
	'help-my-account': 'help-articles',
	'help-ethical-saver': 'help-articles',
	'help-about-opello': 'help-articles',
	'help-get-in-touch': 'help-articles',
	login: null, // "Account" kicker has no group page
	'uk-account-from-abroad': null, // kicker "Insights", but News does not list this page (eligibility still open), so it stays name-only
	'privacy-policy': null,
	'terms-and-conditions': null,
	'customer-terms-and-conditions': null,
	'cookies-policy': null,
	'responsible-disclosure': null,
	'fees-and-charges': null,
	accessibility: null
};

export function breadcrumbJsonLd(
	kicker: string,
	title: string,
	pageUrl: string,
	parentUrl: string | null
): Record<string, unknown> {
	const crumbs: Record<string, unknown>[] = [
		{
			'@type': 'ListItem',
			position: 1,
			name: 'Opello',
			item: pageUrl
				.replace(/\/studio\/(ar|tr)\/.*$/, '/studio/$1/')
				.replace(/\/studio\/.*$/, '/studio/')
		}
	];
	if (kicker.trim().toLowerCase() !== title.trim().toLowerCase()) {
		// A kicker with a group page links to it; a kicker with no group page
		// stays as a name-only crumb.
		crumbs.push(
			parentUrl
				? { '@type': 'ListItem', position: 2, name: kicker, item: parentUrl }
				: { '@type': 'ListItem', position: 2, name: kicker }
		);
	}
	crumbs.push({
		'@type': 'ListItem',
		position: crumbs.length + 1,
		name: title,
		item: pageUrl
	});
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: crumbs
	};
}
