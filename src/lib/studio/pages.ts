// Studio pages linked from the studio homepage.
// source: 'algbra' = wording taken from algbra.com (homepage, surveyed 2026-11-12)
//         'placeholder' = not yet surveyed or no direct Algbra equivalent; confirm before use
export type Source = 'algbra' | 'placeholder';
export type Section = { heading: string; body: string; note?: string; source: Source; href?: string; linkLabel?: string };
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
			{ heading: 'Send and receive money', body: 'Instant bank transfers, international transfers, and payments to friends and family.', source: 'algbra', href: '/studio/transfers/', linkLabel: 'See transfers' },
			{ heading: 'Spend with your card', body: 'Physical and virtual cards, card controls and spending abroad.', note: 'Source: algbra.com/features/cards. Wording taken from the Cards page.', source: 'algbra', href: '/studio/cards/', linkLabel: 'See cards' },
			{ heading: 'Good deeds done with ease.', body: 'Support causes you care about directly from your account.', note: 'Source: algbra.com/features/donations.', source: 'algbra', href: '/studio/donations/', linkLabel: 'See donations' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'transfers',
		title: 'Transfers',
		kicker: 'Personal',
		lede: 'Use your account to send and receive money quickly and easily.',
		source: 'algbra',
		sections: [
			{ heading: 'Friends and family', body: 'Receive and send money to your friends and family instantly, no matter where they are.', note: 'Source: algbra.com/features/transfers. Feature name is a placeholder until Opello confirms its product name.', source: 'algbra' },
			{ heading: 'Free instant bank transfers', body: 'Pay and get paid in seconds, not days. Instant bank transfers work 24/7, so your money arrives straight away.', note: 'Source: algbra.com/features/transfers. "Free" and "24/7" are product claims: confirm with Algbra before publishing.', source: 'algbra' },
			{ heading: 'International transfers', body: 'Easy global transfers with transparent fees and no sneaky hidden charges. Send money to over 20 countries.', note: 'Source: algbra.com/features/transfers. Country count and fee wording need confirming for Opello.', source: 'algbra' },
			{ heading: 'Safer transfers', body: 'Open banking technology checks that the account details you enter match the account you are sending to.', note: 'Source: algbra.com/features/transfers. Confirm this check is live for Opello before publishing.', source: 'algbra' },
			{ heading: 'Request money', body: 'Shared a meal out or need to pay rent? Ask for money and split the bill the easy way.', note: 'Available soon on Algbra. Opello availability is a placeholder.', source: 'algbra' },
			{ heading: 'Nearby payments', body: 'Find your friends nearby and pay them instantly.', note: 'Source: algbra.com/features/transfers. Confirm availability for Opello.', source: 'algbra' },
			{ heading: 'Pay with a QR code', body: 'Use a friend or family member\'s QR code to pay them.', note: 'Source: algbra.com/features/transfers.', source: 'algbra' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'cards',
		title: 'Cards',
		kicker: 'Personal',
		lede: 'Spend anywhere your card scheme is accepted, with cards you can freeze and control in the app.',
		source: 'algbra',
		sections: [
			{ heading: 'Physical cards', body: 'Choose from one of three biodegradable cards and get it delivered to your home for free.', note: 'Source: algbra.com/features/cards. Card choice, "free" delivery and biodegradable claims need confirming for Opello. Card artwork is a placeholder.', source: 'algbra' },
			{ heading: 'Virtual cards', body: 'A card you can use straight away when you open an account.', note: 'Source: algbra.com/features/cards, where virtual cards are marked as available soon. Opello availability is a placeholder.', source: 'algbra' },
			{ heading: 'Disposable cards', body: 'For one-time payments, use a disposable card and keep your account details to yourself.', note: 'Source: algbra.com/features/cards. Confirm the feature is live for Opello before publishing.', source: 'algbra' },
			{ heading: 'Add your card to your phone', body: 'Pay with your phone using a mobile wallet. It is an easy, secure and private way to pay.', note: 'Source: algbra.com/features/cards, which names individual wallet providers. Wallet names are placeholders until Opello confirms its supported wallets.', source: 'algbra' },
			{ heading: 'Card controls and alerts', body: 'In the app, freeze or unfreeze your card and change your PIN with a few taps. Get a real-time push notification after every transaction.', note: 'Source: algbra.com/features/cards. Confirm the app feature set for Opello before publishing.', source: 'algbra' },
			{ heading: 'Contactless and identity checks', body: 'One tap pays in stores, online or in-app. Your card scheme\'s identity check helps confirm that online purchases are yours.', note: 'Source: algbra.com/features/cards. Card scheme names are left out until Opello confirms its scheme.', source: 'algbra' },
			{ heading: 'Spend beyond borders', body: 'Get a good exchange rate when you spend abroad or online in a foreign currency, and withdraw cash from ATMs around the world.', note: 'Source: algbra.com/features/cards. Exchange rates, ATM fees and limits are not stated here and must be confirmed before publishing.', source: 'algbra' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'cubes',
		title: 'Cubes',
		kicker: 'Personal',
		lede: 'Create a Cube for each goal, set money aside and track your progress in a few taps.',
		source: 'algbra',
		sections: [
			{ heading: 'One Cube at a time', body: 'Whether it is for your dream holiday, your child\'s education or your first home, Cubes helps you save for any goal. Popular Cubes include bills, an emergency fund, house deposits, hobbies and an electric car.', note: 'Source: algbra.com/features/cubes. Algbra says funds are securely held in safeguarded accounts: Opello wording needs compliance sign-off before publishing.', source: 'algbra' },
			{ heading: 'Add money instantly', body: 'Move money from one of your Cubes to your main account or to another Cube in an instant.', note: 'Source: algbra.com/features/cubes, where this is marked available soon. Opello availability is a placeholder.', source: 'algbra' },
			{ heading: 'Spend to save with round-ups', body: 'Save as you spend. We round up each transaction to the nearest whole number and put the difference into the Cube you choose.', note: 'Source: algbra.com/features/cubes. Round-up rules and any limits need confirming for Opello.', source: 'algbra' },
			{ heading: 'Control your Cubes', body: 'Customise a Cube, hide its balance, lock it, create goals, see statements and track your progress.', note: 'Source: algbra.com/features/cubes.', source: 'algbra' },
			{ heading: 'Lock a Cube', body: 'Lock a Cube until a date you choose. While it is locked, you cannot withdraw from it. Change your mind and you can turn the lock off from the Cube\'s settings.', note: 'Source: algbra.com/features/cubes, FAQ. Confirm the lock feature for Opello before publishing.', source: 'algbra' },
			{ heading: 'Tribes', body: 'Invite up to 10 friends and family to reach a shared goal together.', note: 'Source: algbra.com/features/cubes. Confirm availability for Opello.', source: 'algbra' },
			{ heading: 'Smart Cubes', body: 'Automate your carbon offset contributions, or donate your round-ups to the charities you choose.', note: 'Source: algbra.com/features/cubes, which marks planet impact Cubes as available soon. Opello availability and charity partners are placeholders.', source: 'algbra', href: '/studio/carbon-tracking/', linkLabel: 'See Planet Impact' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'donations',
		title: 'Donations',
		kicker: 'Personal',
		lede: 'Make the world a better place with just a tap.',
		source: 'algbra',
		sections: [
			{ heading: 'Donate to causes you believe in', body: 'Donate to your preferred charities through the app.', note: 'Source: algbra.com/features/donations. The charity list for Opello is a placeholder until partners are confirmed.', source: 'algbra' },
			{ heading: 'One-off or recurring', body: 'Make a one-off or recurring donation. 100% of your money goes directly to the charity.', note: 'Source: algbra.com/features/donations, where donation types are marked available soon. The 100% claim and Opello availability need confirming before publishing.', source: 'algbra' },
			{ heading: 'Manage your donations', body: 'Check your donations under My donations. See how many you have made so far, and view, edit or cancel recurring donations at any time.', note: 'Source: algbra.com/features/donations.', source: 'algbra' },
			{ heading: 'Build a monthly charity pot', body: 'Use round-up functionality to build a monthly charity pot.', note: 'Source: algbra.com/features/donations. Round-ups for donations are linked to Smart Cubes, which need confirming for Opello.', source: 'algbra', href: '/studio/cubes/', linkLabel: 'See Cubes' },
			{ heading: 'Gift Aid', body: 'If you are a UK taxpayer, the value of your gift can increase by 25% at no extra cost to you.', note: 'Source: algbra.com/features/donations. Gift Aid wording needs compliance sign-off and a check of the charity and HMRC rules for Opello.', source: 'algbra' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'carbon-tracking',
		title: 'Planet Impact',
		kicker: 'Personal',
		lede: 'Measure your carbon impact on every transaction, and offset the emissions you cannot avoid.',
		source: 'algbra',
		sections: [
			{ heading: 'See your footprint on every transaction', body: 'Measure your carbon impact on every transaction, so you can see how your everyday choices add up.', note: 'Source: algbra.com/features/carbon-tracking. Algbra also quotes a global emissions figure on that page. It is left out here because it is unsourced and must be verified before use.', source: 'algbra' },
			{ heading: 'Offset what you cannot avoid', body: 'Offset the carbon emissions you cannot avoid by supporting carbon offsetting projects that benefit the planet and local communities around the world.', note: 'Source: algbra.com/features/carbon-tracking. The offsetting project partners and how offsets are verified are placeholders until Opello confirms them.', source: 'algbra' },
			{ heading: 'Insights by category', body: 'Understand how your spending affects your carbon footprint, with CO2e insights sorted by category.', note: 'Source: algbra.com/features/carbon-tracking. Confirm the insights are live for Opello before publishing.', source: 'algbra' },
			{ heading: 'Where your money goes', body: 'We will never use your money to fund any unethical industries.', note: 'Source: algbra.com/features/carbon-tracking, where the wording is a comparison with other banks. Comparative and ethical-investment claims need compliance sign-off before publishing.', source: 'algbra' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'borderless-account',
		title: 'Borderless account',
		kicker: 'Premium',
		lede: 'The UK account, built for the world. A UK account for non-UK residents with multiple currencies and a debit card, for £10 a month.',
		source: 'algbra',
		sections: [
			{ heading: 'Hold multiple currencies', body: 'An international account with IBANs for GBP, USD, EUR and other supported currencies.', note: 'Source: algbra.com/features/borderless-account. The full currency list for Opello is a placeholder until confirmed.', source: 'algbra' },
			{ heading: 'Currency exchange', body: 'Convert currencies easily, with clear rates and no surprises.', note: 'Source: algbra.com/features/borderless-account, which says fees vary by currency and T&Cs apply. Exchange rates are left out here until Opello confirms them.', source: 'algbra' },
			{ heading: 'International money transfers', body: 'Send money to 20+ countries worldwide. Transparent fees, no surprises.', note: 'Source: algbra.com/features/borderless-account. Country count and fee wording need confirming for Opello.', source: 'algbra', href: '/studio/transfers/', linkLabel: 'See transfers' },
			{ heading: 'Receive domestic payments', body: 'Receive local payments instantly at no extra cost.', note: 'Source: algbra.com/features/borderless-account. Confirm the wording and any limits for Opello before publishing.', source: 'algbra' },
			{ heading: 'Spend with a debit card', body: 'Use your card across your currencies, with cash withdrawal in the UK and abroad.', note: 'Source: algbra.com/features/borderless-account. Card scheme and withdrawal fees are left out until Opello confirms them. Card artwork is a placeholder.', source: 'algbra', href: '/studio/cards/', linkLabel: 'See cards' },
			{ heading: 'Monthly fee', body: '£10 a month for the Borderless account, as stated on algbra.com.', note: 'Source: algbra.com/features/borderless-account. Fees need compliance sign-off and must match the Opello fee schedule before publishing.', source: 'algbra' }
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
			{ heading: 'Borderless Plan', body: 'A UK account for non-UK residents. Multiple currencies. No borders.', note: 'Mapping to Premium is a placeholder decision. Confirm with Algbra.', source: 'algbra', href: '/studio/borderless-account/', linkLabel: 'See the Borderless account' }
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
			{ heading: 'Earn % EPR* with Ethical Saver Cubes', body: 'Put money aside in Cubes and earn on your savings.', note: 'Available to UK residents only. Funds held in your Ethical Saver Cubes are protected by the FSCS up to £120,000. T&Cs apply.', source: 'algbra' },
			{ heading: 'Goal-based Cubes', body: 'Create a Cube for each goal, from a holiday to a house deposit, and track your progress.', note: 'Source: algbra.com/features/cubes.', source: 'algbra', href: '/studio/cubes/', linkLabel: 'See Cubes' }
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
