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
			{ heading: 'Find your fit', body: 'Different plans for different needs. Explore features, pricing, and benefits to find the one that works best for you.', note: 'Source: algbra.com/all-plans.', source: 'algbra', href: '/studio/all-plans/', linkLabel: 'See all plans' },
			{ heading: 'Good deeds done with ease.', body: 'Support causes you care about directly from your account.', note: 'Source: algbra.com/features/donations.', source: 'algbra', href: '/studio/donations/', linkLabel: 'See donations' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'all-plans',
		title: 'All plans',
		kicker: 'Personal',
		lede: 'Different plans for different needs. Explore features, pricing and benefits to find the one that works best for you.',
		source: 'algbra',
		sections: [
			{ heading: 'Standard', body: 'Free. Everyday financial essentials, to spend, save and manage money. Available to UK residents. T&Cs apply.', note: 'Source: algbra.com/all-plans, where the plan is labelled "Free" with "Get started for free". The free price and UK-only eligibility need confirming for Opello before publishing.', source: 'algbra', href: OPEN, linkLabel: 'Get started for free' },
			{ heading: 'Borderless', body: '£10 a month. A UK account for non-UK residents. Multiple currencies. No borders. T&Cs apply.', note: 'Source: algbra.com/all-plans. The £10 a month fee needs compliance sign-off and must match the Opello fee schedule before publishing.', source: 'algbra', href: '/studio/borderless-account/', linkLabel: 'See the Borderless account' }
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
		slug: 'multi-currency',
		title: 'Multi-currency accounts',
		kicker: 'Personal',
		lede: 'Manage, send and spend your money in one app, across the currencies you use.',
		source: 'algbra',
		sections: [
			{ heading: 'Hold multiple currencies', body: 'Keep different currencies together in one place, no need for multiple apps.', note: 'Source: algbra.com/features/multi-currency.', source: 'algbra' },
			{ heading: 'Easily exchange currencies', body: 'Clear and competitive rates with no surprises.', note: 'Source: algbra.com/features/multi-currency. "No hidden fees" carries an asterisk on Algbra\'s page, and the rates and fee schedule are left out until Opello confirms them.', source: 'algbra', href: '/studio/transfers/', linkLabel: 'See transfers' },
			{ heading: 'Send money abroad', body: 'Send money to over 80 countries.', note: 'Source: algbra.com/features/multi-currency. Transfers page says 20+ countries. Confirm the country count for Opello before publishing.', source: 'algbra' },
			{ heading: 'Add money in a few taps', body: 'Deposit money in just a few taps by bank transfer.', note: 'Source: algbra.com/features/multi-currency. Confirm the deposit methods Opello offers before publishing.', source: 'algbra' },
			{ heading: 'Safeguarded funds', body: 'Your funds are securely held in safeguarded accounts, and we do not put them into unethical or high-risk investments.', note: 'Source: algbra.com/features/multi-currency. Safeguarding wording needs compliance sign-off before publishing.', source: 'algbra' },
			{ heading: 'Open an account within minutes', body: 'Get started in just a few minutes with a seamless and secure account setup.', note: 'Source: algbra.com/features/multi-currency.', source: 'algbra', href: OPEN, linkLabel: 'Open account' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'business',
		title: 'Business',
		kicker: 'Business',
		lede: 'An international business account with IBANs for GBP, USD, EUR and other supported currencies.',
		source: 'algbra',
		sections: [
			{ heading: 'Business account', body: 'International account with IBANs for GBP, USD, EUR and other supported currencies.', note: 'Source: algbra.com/business. IBAN currency list and "built for" line need confirming for Opello before publishing.', source: 'algbra' },
			{ heading: 'Send, hold and receive', body: 'Send, hold, and receive payments in multiple supported currencies, wherever your customers are.', note: 'Source: algbra.com/business. Opello currency list to be confirmed.', source: 'algbra' },
			{ heading: 'Currency exchange', body: 'Convert currencies with clear rates. No surprises.', note: 'Source: algbra.com/business, which says features vary by region and rates may vary. No rates shown here. Rate wording needs compliance sign-off.', source: 'algbra', href: '/studio/multi-currency/', linkLabel: 'See multi-currency accounts' },
			{ heading: 'Cards and Savings Cubes', body: 'Spend with physical and virtual debit cards, and put business funds into Savings Cubes.', note: 'Source: algbra.com/business. "Profit generating" Savings Cubes is a product claim: confirm with Algbra or compliance before publishing. Savings Cubes are not yet confirmed for business accounts.', source: 'algbra', href: '/studio/cards/', linkLabel: 'See cards' },
			{ heading: 'Who can apply', body: 'You need a fully incorporated, active business, or be a sole trader. Your company must be registered in an eligible country and work in a supported industry. You will need up to date company documents, and the same for anyone with significant control.', note: 'Source: algbra.com/business, eligibility FAQ. Opello eligibility rules to be confirmed.', source: 'algbra' },
			{ heading: 'Your money is safeguarded', body: 'Deposits are not covered by the FSCS. They are protected by safeguarding instead: we keep all of your money separate from our own, and there is no upper limit.', note: 'Source: algbra.com/business, FAQ on FSCS and safeguarding. Opello\'s own status and this wording need compliance sign-off before publishing.', source: 'algbra' }
		],
		cta: { label: 'Join the business waitlist', href: OPEN }
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
		lede: 'Hold, send and spend in multiple currencies from one account.',
		source: 'algbra',
		sections: [
			{ heading: 'Multi-currency', body: 'Keep different currencies together in one place, no need for multiple apps.', note: 'Source: algbra.com/features/multi-currency.', source: 'algbra', href: '/studio/multi-currency/', linkLabel: 'See multi-currency accounts' }
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
			{ heading: 'Earn % EPR* with Ethical Saver Cubes', body: 'Put money aside in Cubes and earn on your savings.', note: 'Available to UK residents only. Funds held in your Ethical Saver Cubes are protected by the FSCS up to £120,000. T&Cs apply.', source: 'algbra', href: '/studio/ethical-savings/', linkLabel: 'See Ethical Saver Cubes' },
			{ heading: 'Goal-based Cubes', body: 'Create a Cube for each goal, from a holiday to a house deposit, and track your progress.', note: 'Source: algbra.com/features/cubes.', source: 'algbra', href: '/studio/cubes/', linkLabel: 'See Cubes' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'ethical-savings',
		title: 'Ethical Saver Cubes',
		kicker: 'Savings',
		lede: 'Ethical. Profitable. Human. Set money aside for a fixed term and see your agreed return before you confirm.',
		source: 'algbra',
		sections: [
			{ heading: 'Profit, not interest', body: 'Ethical Saver Cubes are fixed-term savings built on Murabaha, a well-established Islamic finance structure. Your return comes from a genuine asset trade, not interest on your money.', note: 'Source: algbra.com/features/ethical-savings (FAQ and "What makes this product ethical?"). Sharia-compliance and structure wording needs sign-off from compliance and a Sharia adviser before publishing.', source: 'algbra' },
			{ heading: 'How a Cube works', body: 'Pick the term that suits you, choose how much to deposit and see your expected profit before you confirm. At the end of the term you get your deposit back plus the agreed profit.', note: 'Source: algbra.com/features/ethical-savings. The app steps are Algbra\'s, not Opello\'s, and need replacing with Opello screens before publishing.', source: 'algbra' },
			{ heading: 'Save for 3, 6 or 12 months', body: 'Choose your term. Returns are agreed in advance and fixed when the Cube is created, so you know what you will get back at maturity.', note: 'Source: algbra.com/features/ethical-savings. Opello terms and profit rates are placeholders. No rates are shown here.', source: 'algbra' },
			{ heading: 'Where your money is held', body: 'Your deposit is placed with a UK partner bank that is covered by the Financial Services Compensation Scheme (FSCS), up to £120,000 across all your Ethical Saver Cubes. You can split that over several Cubes.', note: 'Source: algbra.com/features/ethical-savings. Available to UK residents only. T&Cs apply. Once money moves back to the main account, it is safeguarded rather than FSCS-protected. The partner is named by category only on this page. Needs compliance sign-off.', source: 'algbra' },
			{ heading: 'Ethical boundaries', body: 'We do not finance industries we consider harmful, such as alcohol, gambling, tobacco and arms. Your money can also help support environmental and social projects.', note: 'Source: algbra.com/features/ethical-savings. Ethical screening and impact claims need compliance sign-off and evidence before publishing.', source: 'algbra', href: '/studio/ethical-finance/', linkLabel: 'See ethical finance' },
			{ heading: 'At the end of the term', body: 'Choose to re-deposit into a new Cube, or move your deposit and profit back to your main account to withdraw, spend or save somewhere else.', note: 'Source: algbra.com/features/ethical-savings. The Algbra page leaves the early-withdrawal answer blank, so nothing is written about it here. Opello needs to confirm it.', source: 'algbra' },
			{ heading: 'Tax on your profit', body: 'Profit may be taxable, depending on your circumstances. It counts towards your Personal Savings Allowance. Tax is not taken off automatically, so you may need to declare it to HMRC.', note: 'Source: algbra.com/features/ethical-savings. Tax wording needs compliance sign-off and a check of current HMRC rules before publishing.', source: 'algbra' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'ethical-finance',
		title: 'Ethical finance',
		kicker: 'About',
		lede: 'Social impact is not an afterthought. It is the core of what we do, from the products to the cards in your wallet.',
		source: 'algbra',
		sections: [
			{ heading: 'Social impact at the core', body: 'Our B Corp certification recognises our efforts to create a more equitable and sustainable society by delivering the infrastructure and technologies needed to democratise financial services.', note: 'Source: algbra.com/ethical-finance, "B Corp Certified". The certification belongs to Algbra. Do not claim it for Opello until the certificate and status are verified.', source: 'algbra' },
			{ heading: 'What you see is what you get', body: 'We offer transparent, accessible, interest-free products, and you will never be confused or surprised by hidden fees.', note: 'Source: algbra.com/ethical-finance. "Interest-free" and "no hidden fees" need checking against Opello\'s fee schedule and the Ethical Saver Cubes, which pay a return. Compliance sign-off needed.', source: 'algbra' },
			{ heading: 'Tools for change', body: 'Our Carbon Tracker lets you calculate your CO2e footprint for every transaction. Our Donate feature lets you support local causes and charities.', note: 'Source: algbra.com/ethical-finance. Algbra says "over 100" causes and charities: the Opello count and charity list are placeholders until confirmed.', source: 'algbra', href: '/studio/carbon-tracking/', linkLabel: 'See Planet Impact' },
			{ heading: 'Recycled materials', body: 'Our cards are biodegradable, and our packaging is made from a non-virgin cane sugar by-product. It is 100% recyclable, biodegradable and compostable.', note: 'Source: algbra.com/ethical-finance. Packaging and recyclability claims need supplier evidence before publishing. Card materials to be confirmed for Opello.', source: 'algbra', href: '/studio/cards/', linkLabel: 'See cards' }
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
		cta: { label: 'Contact', href: '/studio/contact/' }
	},
	{
		slug: 'help',
		title: 'Help',
		kicker: 'Help',
		lede: 'Placeholder. Help centre content to be taken from algbra.com/help once surveyed.',
		source: 'placeholder',
		sections: [
			{ heading: 'Help centre', body: 'Placeholder for help articles and contact details.', source: 'placeholder' },
			{ heading: 'Frequently asked questions', body: 'Answers to the questions we hear most often.', source: 'algbra', href: '/studio/faq/', linkLabel: 'Read the FAQ' },
			{ heading: 'Get in touch', body: 'Thoughts, ideas, suggestions, or a question about your account.', source: 'algbra', href: '/studio/contact/', linkLabel: 'Contact us' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'faq',
		title: 'Frequently asked questions',
		kicker: 'Help',
		lede: "We're here to connect. Answers to the questions we hear most often.",
		source: 'algbra',
		sections: [
			{ heading: 'What you need to open an account', body: 'A smartphone, a mobile number, a valid ID document (passport or driving licence) and proof of your address, such as a utility bill. You will record a short video and take photos of your documents when you sign up.', note: 'Source: algbra.com/faq, Accounts. Document list and video step to confirm for Opello.', source: 'algbra' },
			{ heading: 'Who can open an account', body: 'You need to be 18 or over, a UK resident, and have a valid ID document and proof of address.', note: 'Source: algbra.com/faq, Accounts. Residency rules and any non-resident programme to confirm.', source: 'algbra' },
			{ heading: 'Is my money safe?', body: 'We hold the money you deposit or receive in a client money account that we manage on your behalf. We do not lend or invest deposits, and client accounts can only be used to hold your funds.', note: 'Source: algbra.com/faq, You and Your Money. Compliance sign-off needed before publishing.', source: 'algbra' },
			{ heading: 'Is my balance covered by the FSCS?', body: 'Your balance is e-money, which is not covered by the Financial Services Compensation Scheme. Protection comes from safeguarding instead.', note: 'Source: algbra.com/faq. Regulatory disclosure, compliance sign-off required. Do not soften this wording.', source: 'algbra' },
			{ heading: 'Payments we support today', body: 'Card payments, ATM withdrawals and Faster Payments. Payments are in pounds sterling. International payments, direct debits, standing orders and CHAPS are not yet available.', note: 'Source: algbra.com/faq, Payments. Conflicts with the Transfers page wording, so Opello must confirm which is right before either is published.', source: 'algbra' },
			{ heading: 'Lost or stolen card', body: 'Freeze your card in the app straight away, then contact our support team through the in-app chat. If you cannot get into the app, call or email us instead.', note: 'Source: algbra.com/faq, Cards. Opello support number and email still placeholder.', source: 'algbra' },
			{ heading: 'Unrecognised transactions and chargebacks', body: 'Freeze your card, then tell us the merchant, location and date. For goods or services you have not received or that were faulty, we can help you raise a chargeback claim within 120 days.', note: 'Source: algbra.com/faq, Transactions and Disputes. The 120-day window and card-scheme route to confirm.', source: 'algbra' },
			{ heading: 'Carbon footprint and offsetting', body: 'Your carbon footprint is the CO2e generated by your transactions. Where you cannot avoid a purchase, you can offset the rest by supporting carbon projects.', note: 'Source: algbra.com/faq, Carbon Tracking and Carbon Offsetting. See the Planet Impact page for detail.', source: 'algbra', href: '/studio/carbon-tracking/', linkLabel: 'Read about Planet Impact' },
			{ heading: 'Closing your account', body: 'Chat to the support team in the app, or email us, and we will help you close your account. Once closed, you cannot open a new one.', note: 'Source: algbra.com/faq. Support email still placeholder.', source: 'algbra' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'contact',
		title: 'Contact',
		kicker: 'Help',
		lede: "We're here to connect. Thoughts, ideas and suggestions are always welcome.",
		source: 'algbra',
		sections: [
			{ heading: 'General enquiries', body: 'Thoughts, ideas, suggestions. Contact us here. Email: [general enquiries email, placeholder]', note: 'Source: algbra.com/contact, General Enquiries. Opello email address still to be set up.', source: 'algbra' },
			{ heading: 'Press enquiries', body: 'For all press enquiries. Email: [press email, placeholder]', note: 'Source: algbra.com/contact, Press Enquiries. Opello press contact to confirm.', source: 'algbra' },
			{ heading: 'Problems with your account', body: 'Lost or stolen card, or a payment you do not recognise: freeze your card in the app first, then use the in-app chat. If you cannot get into the app, call or email us instead. Phone number and support email are placeholders.', note: 'Source: algbra.com/faq, Cards and Transactions. Opello support number and email to confirm.', source: 'algbra', href: '/studio/faq/', linkLabel: 'Read the FAQ first' },
			{ heading: 'Company and privacy', body: 'Opello Ltd, registered in England and Wales, company number 17324431. Suite 401–402, Cumberland House, 80 Scrubs Lane, London NW10 6RF. Questions about your personal data: privacy@opello.co.uk', note: 'From the Opello privacy notice draft. Confirm the registered address and privacy mailbox before publishing.', source: 'placeholder' }
		],
		cta: { label: 'Back to help', href: '/studio/help/' }
	},
	{
		slug: 'careers',
		title: 'Careers',
		kicker: 'About',
		lede: 'Be a part of something great. Finance that is fairer, more ethical and more transparent.',
		source: 'algbra',
		sections: [
			{ heading: 'Our mission', body: 'Our mission is to eradicate social and financial exclusion by using technology and a community-first approach to provide equitable access to ethical and sustainable financial services.', note: 'Source: algbra.com/careers, Our Mission. Opello mission wording to confirm before publishing.', source: 'algbra' },
			{ heading: 'Use your money differently', body: 'Opello is for people who want to use their money differently. Join us on the journey to fairer, more ethical and transparent finance.', note: 'Adapted from algbra.com/careers. Opello wording to confirm.', source: 'algbra' },
			{ heading: 'Benefits', body: 'Benefits for the Opello team are being confirmed. [Placeholder: benefits list]', note: 'Placeholder. Algbra lists its own benefits on algbra.com/careers. Do not reuse them for Opello until Opello confirms its own.', source: 'placeholder' },
			{ heading: 'Open roles', body: 'There are no open roles to show yet. [Placeholder: current vacancies]', note: 'Placeholder. Vacancies and how to apply to be confirmed by Opello.', source: 'placeholder' }
		],
		cta: { label: 'Get in touch', href: '/studio/contact/' }
	},
	{
		slug: 'download',
		title: 'Download the app',
		kicker: 'Personal',
		lede: 'Seamless digital onboarding onto the app.',
		source: 'algbra',
		sections: [
			{ heading: 'Scan the code', body: 'On your mobile, open the camera and point your device at the QR code to download the app.', note: 'Source: algbra.com/download. QR code image is a placeholder until the Opello app is published.', source: 'algbra' },
			{ heading: 'iOS and Android', body: 'The app is available on iOS and Android. [Placeholder: app store badges and links]', note: 'Placeholder. Store listings and links are not set up for Opello yet.', source: 'placeholder' },
			{ heading: 'Open your account digitally', body: 'Seamless digital onboarding in the app. All you need is an email address, a phone number and an ID document, like your passport.', note: 'Source: algbra.com/download. Accepted ID documents and any video step to confirm for Opello (see the FAQ).', source: 'algbra', href: '/studio/faq/', linkLabel: 'Read the FAQ' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'news',
		title: 'News',
		kicker: 'About',
		lede: '[Placeholder: intro to the Opello newsroom, covering news, product updates, explainers and stories.]',
		source: 'placeholder',
		sections: [
			{ heading: 'News', body: '[Placeholder: announcements about Opello, such as new products, partnerships and approvals.]', note: 'Placeholder. Algbra\'s News posts are Algbra corporate announcements (partnerships, licences, investment), so none are reused for Opello.', source: 'placeholder' },
			{ heading: 'Updates', body: '[Placeholder: changes to the app and new features for customers.]', note: 'Placeholder. Algbra\'s Updates category is not surveyed yet. Opello release notes to write.', source: 'placeholder' },
			{ heading: 'Insights', body: 'Plain-English explainers on money, ethics and sustainability. [Placeholder: article list.]', note: 'Topics only. Algbra Insights articles (for example, chargebacks, carbon offsetting and virtual cards) are a starting point to adapt and sign off, not copy. Source: algbra.com/news/category/insights.', source: 'placeholder' },
			{ heading: 'Blog', body: 'Stories from the Opello team and the community. [Placeholder: posts.]', note: 'Placeholder until Opello writes its own posts. Source: algbra.com/news/category/blog (category name only).', source: 'placeholder' }
		],
		cta: { label: 'Get in touch', href: '/studio/contact/' }
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
