// Studio pages linked from the studio homepage.
// source: 'algbra' = wording taken from algbra.com (homepage, surveyed 2026-11-12)
//         'placeholder' = not yet surveyed or no direct Algbra equivalent; confirm before use
export type Source = 'algbra' | 'placeholder';
export type Section = { heading: string; body: string; note?: string; source: Source };
export type StudioPage = {
	slug: string;
	title: string;
	kicker: string;
	lede: string;
	source: Source;
	sections: Section[];
	cta: { label: string; href: string };
};

const OPEN = '/studio/open-account/';

export const pages: StudioPage[] = [
	{
		slug: 'personal',
		title: 'Personal',
		kicker: 'Personal',
		lede: 'Finance, made for humans. Transparent, accessible products, and you will never be confused or surprised by a fee.',
		source: 'algbra',
		sections: [
			{ heading: 'One app. Multiple currencies.', body: 'We offer transparent, accessible, interest-free products, and you will never be confused or surprised by a fee.', source: 'algbra' },
			{ heading: 'Earn % EPR* with Ethical Saver Cubes', body: 'Put money aside in Cubes and earn on your savings.', note: 'Available to UK residents only. Funds held in your Ethical Saver Cubes are protected by the FSCS up to £120,000. T&Cs apply.', source: 'algbra' },
			{ heading: 'Good deeds done with ease.', body: 'Support causes you care about directly from your account.', source: 'algbra' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'business',
		title: 'Business',
		kicker: 'Business',
		lede: 'Business banking for teams that pay people and suppliers across borders.',
		source: 'placeholder',
		sections: [
			{ heading: 'Business accounts', body: 'Placeholder. Copy to be taken from algbra.com/business once that page is surveyed.', source: 'placeholder' },
			{ heading: 'Business payments', body: 'Placeholder. Confirm the business product range with Algbra before publishing.', source: 'placeholder' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'premium',
		title: 'Premium',
		kicker: 'Premium',
		lede: 'A UK account for non-UK residents. Multiple currencies. No borders.',
		source: 'algbra',
		sections: [
			{ heading: 'Borderless Plan', body: 'A UK account for non-UK residents. Multiple currencies. No borders.', note: 'Mapping to Premium is a placeholder decision. Confirm with Algbra.', source: 'algbra' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'current-accounts',
		title: 'Current accounts',
		kicker: 'Personal',
		lede: 'Placeholder. The equivalent Algbra product is the multi-currency account.',
		source: 'placeholder',
		sections: [
			{ heading: 'Multi-currency', body: 'Hold money in multiple currencies in one app. Wording to be confirmed against algbra.com/features/multi-currency.', source: 'placeholder' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'savings',
		title: 'Savings',
		kicker: 'Personal',
		lede: 'Earn on the money you are saving. Available to UK residents.',
		source: 'algbra',
		sections: [
			{ heading: 'Earn % EPR* with Ethical Saver Cubes', body: 'Put money aside in Cubes and earn on your savings.', note: 'Available to UK residents only. Funds held in your Ethical Saver Cubes are protected by the FSCS up to £120,000. T&Cs apply.', source: 'algbra' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'pensions',
		title: 'Pensions',
		kicker: 'Personal',
		lede: 'Placeholder. Algbra does not currently offer pensions, so this page cannot be published as written.',
		source: 'placeholder',
		sections: [
			{ heading: 'Not yet available', body: 'No pension product is in the Algbra range. Remove this page from the homepage or replace it with an approved product before launch.', source: 'placeholder' }
		],
		cta: { label: 'Register your interest', href: '/studio/open-account/' }
	},
	{
		slug: 'open-account',
		title: 'Open an account',
		kicker: 'Get started',
		lede: 'Accounts open when Opello launches. Register your interest and we will let you know.',
		source: 'placeholder',
		sections: [
			{ heading: 'What you will need', body: 'Identity document, proof of address and details of where you are living. Final requirements to be confirmed with Algbra during onboarding.', source: 'placeholder' },
			{ heading: 'How it works', body: 'You apply, we check your details, and your account opens. Timings and eligibility are placeholders until launch.', source: 'placeholder' }
		],
		cta: { label: 'Register your interest', href: '/studio/' }
	},
	{
		slug: 'about',
		title: 'About',
		kicker: 'About',
		lede: 'Placeholder. Algbra describes its vision as finance made for humans.',
		source: 'placeholder',
		sections: [
			{ heading: 'Finance, made for humans', body: 'Taken from the Algbra homepage. Our own about copy to be written and approved.', source: 'algbra' }
		],
		cta: { label: 'Contact', href: '/studio/help/' }
	},
	{
		slug: 'help',
		title: 'Help',
		kicker: 'Help',
		lede: 'Placeholder. Help centre content to be taken from algbra.com/help once surveyed.',
		source: 'placeholder',
		sections: [
			{ heading: 'Help centre', body: 'Placeholder for help articles and contact details.', source: 'placeholder' },
			{ heading: 'Frequently asked questions', body: 'Placeholder. Taken from algbra.com/faq once surveyed.', source: 'placeholder' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'login',
		title: 'Log in',
		kicker: 'Account',
		lede: 'Log in is not available until Opello launches.',
		source: 'placeholder',
		sections: [
			{ heading: 'Coming soon', body: 'There is nothing to sign in to yet. Register your interest and we will let you know when accounts open.', source: 'placeholder' }
		],
		cta: { label: 'Register your interest', href: '/studio/' }
	}
];

export const bySlug = (slug: string) => pages.find((p) => p.slug === slug);
