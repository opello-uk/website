// Studio pages linked from the studio homepage.
// source: 'algbra' = wording taken from algbra.com (homepage, surveyed 2026-11-12)
//         'placeholder' = not yet surveyed or no direct Algbra equivalent; confirm before use
export type Source = 'algbra' | 'placeholder';
export type Section = { heading: string; body: string; note?: string; source: Source; href?: string; linkLabel?: string; links?: { label: string; href: string }[]; items?: string[] };
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
			{ heading: 'Good deeds done with ease.', body: 'Support causes you care about directly from your account.', note: 'Source: algbra.com/features/donations.', source: 'algbra', href: '/studio/donations/', linkLabel: 'See donations' },
			{ heading: 'Get the app', body: 'Seamless digital onboarding onto the app. Scan the code on your phone to download it, then open your account with an email address, a phone number and an ID document.', note: 'Source: algbra.com/download. QR code and app store links are placeholders until the Opello app is published.', source: 'algbra', href: '/studio/download/', linkLabel: 'See how to download' },
			{ heading: 'Measure your carbon impact', body: 'Measure your carbon impact on every transaction, and offset the emissions you cannot avoid.', note: 'Source: algbra.com/features/carbon-tracking. Offset partners are placeholders.', source: 'algbra', href: '/studio/carbon-tracking/', linkLabel: 'See Planet Impact' }
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
		lede: 'Find answers to frequently asked questions here or get in touch via our in-app support chat.',
		source: 'algbra',
		sections: [
			{ heading: 'Find an answer', body: 'Check out the questions we hear most often, then use the emojis at the end of each answer to tell us whether it helped.', note: 'Source: algbra.com/help. Opello answer feedback is not built yet.', source: 'algbra', href: '/studio/faq/', linkLabel: 'Read the FAQ' },
			{ heading: 'Chat to our support team', body: 'You can chat to our dedicated support team in real time from the app. If you prefer, you can send us an email instead.', note: 'Source: algbra.com/help. Opello support hours and in-app chat to confirm before publishing.', source: 'algbra', href: '/studio/contact/', linkLabel: 'See contact options' },
			{ heading: 'Lost or stolen card', body: 'Freeze it instantly in the app. If you cannot get into the app, call us on [support phone, placeholder].', note: 'Source: algbra.com/help and algbra.com/faq. Opello support number still placeholder.', source: 'algbra', href: '/studio/faq/', linkLabel: 'Read about lost cards' },
			{ heading: 'Help articles by category', body: 'Getting started, My card, Security and data, and About Opello. Browse the article titles in each category.', note: 'Source: help.algbra.com collection pages (Getting started, My Card, Security & Data, About Algbra). Opello renames the last one. Answers are written for all four categories; the Opello product list and rename wording still need confirming.', source: 'algbra', href: '/studio/help-articles/', linkLabel: 'See article titles' },
			{ heading: 'Get in touch', body: 'Thoughts, ideas, suggestions, or a question about your account. Email: [support email, placeholder]', note: 'Source: algbra.com/help. Opello support email still to be set up.', source: 'algbra', href: '/studio/contact/', linkLabel: 'Contact us' },
			{ heading: 'Closing your account', body: 'Chat to the support team in the app, or email us, and we will help you close your account.', note: 'Source: algbra.com/faq, Closing your account. Support email still placeholder.', source: 'algbra', href: '/studio/faq/', linkLabel: 'Read the closing steps' }
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
	},
	{
		slug: 'privacy-policy',
		title: 'Privacy policy',
		kicker: 'Legal',
		lede: 'How Opello uses your personal data, in plain English. This is a summary of our privacy notice. The full notice is the one linked below.',
		source: 'placeholder',
		sections: [
			{ heading: 'Who we are', body: 'Opello Ltd is registered in England and Wales, company number 17324431. Registered office: Suite 401–402, Cumberland House, 80 Scrubs Lane, London NW10 6RF. Questions about your data go to privacy@opello.co.uk.', note: 'Source: Opello privacy notice draft v0.3, sections 2 and 18. Confirm before publishing.', source: 'placeholder' },
			{ heading: 'What we collect', body: 'Your name, date of birth, contact details and address. Identity documents and selfie checks. Proof of address. Tax residency details. How you use the app and this website. Records of the payments you make and receive. Support conversations.', note: 'Source: Opello privacy notice draft v0.3, section 3. Categories only; the full list is in the notice.', source: 'placeholder' },
			{ heading: 'Why we use it', body: 'To open and run your account, to check who you are, to meet our legal and regulatory duties, and to keep our services secure. We only send marketing if you have opted in, and you can withdraw that at any time.', note: 'Source: Opello privacy notice draft v0.3, sections 4 and 8. Legal bases to confirm.', source: 'placeholder' },
			{ heading: 'Who we share it with', body: 'Our regulated e-money partner, which provides your account and card, and the service providers we use to run Opello, such as identity checks, fraud screening and hosting. We never sell your personal data.', note: 'Source: Opello privacy notice draft v0.3, section 9. Partner and providers are described by category only.', source: 'placeholder' },
			{ heading: 'Data outside the UK', body: 'Some of our services work across more than one country, so some data may be sent outside the UK. Where that happens, we use approved safeguards to protect it.', note: 'Source: privacy notice draft v0.3, section 10. Opello to confirm which countries are involved.', source: 'placeholder' },
			{ heading: 'How long we keep it', body: 'While your account is open, and then for up to six years after it closes, to meet legal, tax and record-keeping rules. Marketing preferences are kept until you withdraw consent.', note: 'Source: Opello privacy notice draft v0.3, section 13.', source: 'placeholder' },
			{ heading: 'Your rights', body: 'You can ask for a copy of your data, ask us to correct or delete it, restrict or object to how we use it, and ask for it in a portable format. You can also withdraw consent at any time.', note: 'Source: Opello privacy notice draft v0.3, section 14. Requests are free in most cases and get a reply within one month.', source: 'placeholder' },
			{ heading: 'Cookies', body: 'Right now this website sets only the cookies it needs to work. We will not set any other cookies without asking you first, and you can block or delete cookies in your browser.', note: 'Source: Opello privacy notice draft v0.3, section 7. Confirm before publishing; see the cookie policy page.', source: 'placeholder' },
			{ heading: 'Complaints', body: 'Contact us first and we will look into it. You can also complain to the Information Commissioner\'s Office (ICO) at ico.org.uk or on 0303 123 1113.', note: 'Source: Opello privacy notice draft v0.3, section 16. ICO registration number is still a placeholder.', source: 'placeholder' }
		],
		cta: { label: 'Read the full privacy notice', href: '/privacy/' }
	},
	{
		slug: 'terms-and-conditions',
		title: 'Terms and conditions',
		kicker: 'Legal',
		lede: 'How you may use the Opello website. Placeholder terms until counsel signs off the final wording.',
		source: 'placeholder',
		sections: [
			{ heading: 'About this website', body: 'This website is operated by Opello Ltd, registered in England and Wales, company number 17324431. Registered office: Suite 401–402, Cumberland House, 80 Scrubs Lane, London NW10 6RF.', note: 'Entity and address from the Opello privacy notice draft. Confirm the registered office before publishing.', source: 'placeholder' },
			{ heading: 'Information and disclaimers', body: '[Placeholder: the information on this website is for general information only. It is not an offer or a recommendation, and it is not financial advice.]', note: 'Structure follows algbra.com/terms-and-conditions. Algbra\'s wording names its own legal entity, so none of it is reused. Opello wording to be drafted by counsel.', source: 'placeholder' },
			{ heading: 'Accuracy of information', body: '[Placeholder: we take reasonable care to keep this website accurate, but we do not guarantee that it is complete or up to date.]', note: 'Placeholder. Counsel to draft.', source: 'placeholder' },
			{ heading: 'Changes to the website and these terms', body: '[Placeholder: how we change the website and these terms, and how we tell you about changes.]', note: 'Placeholder. Counsel to draft.', source: 'placeholder' },
			{ heading: 'Where you live', body: '[Placeholder: who can open an account and use Opello products. Eligibility wording must match the account terms.]', note: 'Placeholder. Residency rules are not confirmed for Opello. See the All plans page note.', source: 'placeholder' },
			{ heading: 'Our products and our regulated partner', body: '[Placeholder: Opello distributes accounts and cards provided by a regulated e-money partner. Product terms, eligibility and safeguarding apply and are set out separately.]', note: 'Partner is described by category only, as agreed for public pages. Confirm wording with compliance.', source: 'placeholder' },
			{ heading: 'Limits of our liability', body: '[Placeholder: limits on liability for losses from using the website. Must not limit liability that the law does not allow us to limit.]', note: 'Placeholder. Counsel to draft.', source: 'placeholder' },
			{ heading: 'Links to and from our site', body: '[Placeholder: links to other websites are for convenience only, and we are not responsible for their content.]', note: 'Placeholder. Counsel to draft.', source: 'placeholder' },
			{ heading: 'Intellectual property', body: '[Placeholder: the content, brand and designs on this website belong to Opello or its licensors.]', note: 'Placeholder. Counsel to draft.', source: 'placeholder' },
			{ heading: 'Governing law and jurisdiction', body: '[Placeholder: governing law and courts. Expected to be England and Wales, to confirm.]', note: 'Placeholder. Counsel to confirm.', source: 'placeholder' }
		],
		cta: { label: 'Contact us', href: '/studio/contact/' }
	},
	{
		slug: 'customer-terms-and-conditions',
		title: 'Customer terms',
		kicker: 'Legal',
		lede: 'The agreement between you and Opello for your account and card. Placeholder summary until counsel signs off the full terms.',
		source: 'placeholder',
		sections: [
			{ heading: 'About these terms', body: '[Placeholder: what these terms cover, how they form an agreement with you when you open an account, and how to contact us with questions.]', note: 'Structure follows section 1 and 2 of algbra.com/terms-and-conditions.pdf (UK residents, retail standard account, version 2.0.3, effective 7 April 2026). Algbra\'s wording names its own entity, so none of it is reused. Counsel to draft.', source: 'placeholder' },
			{ heading: 'Your account and card', body: '[Placeholder: what the account is, how e-money is issued and redeemed, how you use your card, transaction timings, disputes and account limits.]', note: 'Structure follows section 3 of the Algbra terms (account, cards, Confirmation of Payee, Cubes, carbon offsetting, cashback). Only the sections Opello offers will be kept. Counsel to draft.', source: 'placeholder' },
			{ heading: 'Fees and charges', body: '[Placeholder: what you pay for your account and card. The fee schedule is on its own page.]', note: 'Structure follows section 4 of the Algbra terms. Opello fee schedule to be confirmed; see the fees and charges page.', source: 'placeholder', href: '/studio/fees-and-charges/', linkLabel: 'See fees and charges' },
			{ heading: 'Your responsibilities and your money', body: '[Placeholder: keeping your details up to date and your card safe, telling us when something goes wrong, and how your money is safeguarded. FSCS wording to be confirmed by compliance.]', note: 'Structure follows sections 5 and 6 of the Algbra terms. Protection wording must be confirmed for Opello before publishing. Counsel and compliance to draft.', source: 'placeholder' },
			{ heading: 'Privacy, complaints and liability', body: '[Placeholder: how we use your personal data, how to complain and how we handle disputes, and the limits of our liability.]', note: 'Structure follows sections 7, 8 and 9 of the Algbra terms. Privacy wording links to the full notice. Counsel to draft.', source: 'placeholder' },
			{ heading: 'Changes, closing and governing law', body: '[Placeholder: how we change these terms and tell you, how you or we can close your account, and which courts and law apply.]', note: 'Structure follows sections 10, 11 and 12 of the Algbra terms. Governing law by part of the UK to be confirmed by counsel.', source: 'placeholder' }
		],
		cta: { label: 'Read the privacy notice', href: '/studio/privacy-policy/' }
	},
	{
		slug: 'cookies-policy',
		title: 'Cookie policy',
		kicker: 'Legal',
		lede: 'What cookies are, the kinds we may use, and how you can manage them. Placeholder until the Opello cookie list is confirmed.',
		source: 'placeholder',
		sections: [
			{ heading: 'What a cookie is', body: 'A cookie is a small file of letters and numbers that a website stores on your browser or device. It lets the site recognise you when you come back, and remember some of your choices.', note: 'Source: algbra.com/cookies-policy, general definition only. Algbra\'s cookie table names third-party analytics and advertising tools, so none of it is reused.', source: 'algbra' },
			{ heading: 'Strictly necessary cookies', body: 'These keep the website working and cannot be switched off. They include cookies that keep you signed in to secure areas, and cookies that remember your consent choices.', note: 'Source: algbra.com/cookies-policy category wording. Opello currently sets no cookies beyond these. Confirm before publishing.', source: 'algbra' },
			{ heading: 'Optional cookies', body: '[Placeholder: analytics, functionality and marketing cookies, only if Opello uses them. We will ask for your consent before setting any optional cookie.]', note: 'Placeholder. The privacy notice draft says no optional cookies are set yet. Opello must confirm before this section is written.', source: 'placeholder' },
			{ heading: 'Cookies we use', body: '[Placeholder: table of cookie name, provider category, purpose and how long it lasts.]', note: 'Placeholder. Left empty on purpose: Algbra\'s table names its own tools, and Opello\'s list does not exist yet.', source: 'placeholder' },
			{ heading: 'Managing cookies', body: '[Placeholder: how to block or delete cookies in your browser, and what happens to the site if you do.]', note: 'Placeholder. Counsel or compliance to draft.', source: 'placeholder' },
			{ heading: 'Changes to this policy', body: '[Placeholder: how we will tell you about changes to this cookie policy.]', note: 'Placeholder. Counsel to draft.', source: 'placeholder' }
		],
		cta: { label: 'Read our privacy notice', href: '/privacy/' }
	},
	{
		slug: 'responsible-disclosure',
		title: 'Responsible disclosure',
		kicker: 'Legal',
		lede: 'We take the privacy and security of our customers seriously, and we value the work of security researchers who help us keep it that way.',
		source: 'placeholder',
		sections: [
			{ heading: 'Our commitment', body: 'We operate a responsible disclosure policy. We work closely with security researchers so that any potential vulnerability reported to us is reviewed and fixed as soon as possible.', note: 'Source: algbra.com/responsible-disclosure, adapted to Opello. Algbra\'s contact address is not reused.', source: 'algbra' },
			{ heading: 'When to report', body: 'If you think you have found a security vulnerability that affects Opello systems, products, apps or customers, please send us a report as soon as you can.', note: 'Source: algbra.com/responsible-disclosure.', source: 'algbra' },
			{ heading: 'Our guidelines', body: 'Do not make the vulnerability public without our approval. Do not access customer or employee personal information, or any confidential Opello information. If you do by accident, stop testing and report it straight away. If you gain access to a non-public system or to non-public credentials, stop and report it immediately. Do not degrade our services, disrupt production systems or destroy data. Do not run automated vulnerability scans.', note: 'Source: algbra.com/responsible-disclosure, reworded for Opello.', source: 'algbra' },
			{ heading: 'What to include in your report', body: 'Your name, the date and time you found the issue, and your phone number if you are comfortable sharing it. The technical details, raw requests and responses where they help, and clear step-by-step instructions so we can reproduce it. Do not upload attachments to public storage sites.', note: 'Source: algbra.com/responsible-disclosure.', source: 'algbra' },
			{ heading: 'Out of scope', body: 'Reports that are not real security issues, such as a forgotten password. Spam, social engineering or phishing. Publicly readable files such as robots.txt. Fingerprinting or version disclosure of common software. Guessing usernames or email addresses from error messages, unless there is an exceptional risk.', note: 'Source: algbra.com/responsible-disclosure.', source: 'algbra' },
			{ heading: 'How to send a report', body: '[Placeholder: Opello security mailbox, to be set up before this page is published.]', note: 'Placeholder. Opello has no security mailbox yet. Do not use Algbra\'s address.', source: 'placeholder' }
		],
		cta: { label: 'Contact us', href: '/studio/contact/' }
	},
	{
		slug: 'fees-and-charges',
		title: 'Fees and charges',
		kicker: 'Legal',
		lede: 'Every fee we charge, set out in one place. Standard and Borderless accounts are listed separately, so you can see what applies to you before you open an account.',
		source: 'algbra',
		sections: [
			{ heading: 'Standard account', body: 'No monthly account fee. UK payments are free: sending and receiving by FPS, BACS or CHAPS, and paying by card in pounds in store, online or over the phone.', note: 'Source: algbra.com fees and charges PDF (last updated 7 April 2026), Standard retail customers. Opello fees to confirm before publishing.', source: 'algbra' },
			{ heading: 'Borderless account', body: 'A monthly account fee of £10, charged in advance on the first day of each month. Cancel or close your account and no fees are charged in arrears.', note: 'Source: algbra.com fees and charges PDF, Borderless customers. The £10 figure must match the Opello fee schedule and needs compliance sign-off.', source: 'algbra' },
			{ heading: 'Sending and receiving money abroad', body: 'Sending money outside the UK: a fixed £15 fee per transaction, plus an FX fee of 1.00%. Receiving money from outside the UK in pounds: a fixed £10 fee, plus an FX fee of 1.00% for other currencies. Intermediary bank fees may also apply.', note: 'Source: algbra.com fees and charges PDF. Feature availability on each account and the Opello fee schedule are placeholders until confirmed.', source: 'algbra' },
			{ heading: 'Cards and cash', body: 'Your first physical card is £5, and so is each replacement. Your first three virtual cards are free, then £1 each. Cancelling a card after 14 days from opening the account costs £2.50. Cash withdrawals in the UK cost 1.00%. Cash withdrawals abroad and card payments in a foreign currency cost a 1.50% FX fee. ATM operators may charge their own fee.', note: 'Source: algbra.com fees and charges PDF. Card fees need confirming for Opello and the card scheme.', source: 'algbra' },
			{ heading: 'Converting currencies', body: 'Converting money from one currency to another in your account costs a 0.50% FX fee on the amount converted.', note: 'Source: algbra.com fees and charges PDF. Confirm for Opello before publishing.', source: 'algbra', href: '/studio/multi-currency/', linkLabel: 'See multi-currency accounts' },
			{ heading: 'Other fees', body: 'An administration fee of up to £10 may apply, for example if you ask us to return funds after closing your account, or ask us to mediate a disputed payment. Paper statements cost £5. A dormant account may be charged up to £1 a month after six months of inactivity. Overdrafts are not supported, but repeated negative balances may lead to an administration fee.', note: 'Source: algbra.com fees and charges PDF. Confirm the list and amounts for Opello before publishing.', source: 'algbra' }
		],
		cta: { label: 'Read our terms', href: '/studio/terms-and-conditions/' }
	},
	{
		slug: 'accessibility',
		title: 'Accessibility',
		kicker: 'Legal',
		lede: 'How we are working to make Opello usable by everyone, what we have checked so far, and how to tell us when something gets in your way. Placeholder until the statement is confirmed.',
		source: 'placeholder',
		sections: [
			{ heading: 'Our commitment', body: '[Placeholder: we aim to make our website and app meet the WCAG 2.2 AA standard, and we treat accessibility problems as bugs to fix.]', note: 'Placeholder. Algbra publishes no accessibility statement that we can reuse, so this wording is ours to confirm. Target standard to be agreed with Opello.', source: 'placeholder' },
			{ heading: 'What we have checked', body: 'Keyboard access and visible focus on the pages we have built, text contrast on the main colours, and layouts that work at phone and desktop widths. Motion turns down for people who ask their device to reduce it on the main pages; we are checking the rest.', note: 'Checked on the studio build only. Not yet audited by a third party. Confirm before publishing.', source: 'placeholder' },
			{ heading: 'Known gaps', body: '[Placeholder: list any known issues, for example images without full descriptions, and when we expect to fix them.]', note: 'Placeholder. Filled in from the accessibility audit, which has not run yet.', source: 'placeholder' },
			{ heading: 'Tell us about a problem', body: '[Placeholder: if something is hard to use, email the accessibility team at a placeholder address and say what you were trying to do. We will reply and suggest another way to get it done.]', note: 'Placeholder. The Opello contact mailbox is not set up yet; see the contact page.', source: 'placeholder', href: '/studio/contact/', linkLabel: 'See contact details' },
			{ heading: 'Assistive technology and alternatives', body: '[Placeholder: options such as contacting us by phone or in branch, if they are offered.]', note: 'Placeholder. Opello to confirm which channels exist at launch.', source: 'placeholder' },
			{ heading: 'Review date', body: '[Placeholder: date this statement was last reviewed, and how often we will review it.]', note: 'Placeholder. Set when the statement is approved.', source: 'placeholder' }
		],
		cta: { label: 'Read our terms', href: '/studio/terms-and-conditions/' }
	},
	{
		slug: 'help-articles',
		title: 'Help articles',
		kicker: 'Help',
		lede: 'The articles in each help category. Titles are taken from Algbra\'s help centre. Getting started, Logging in, My card, My account, Security and data and About Opello answers are written.',
		source: 'placeholder',
		sections: [
			{ heading: 'Getting started', body: 'Opening your account and setting up.', note: 'Source: help.algbra.com, Getting started with Algbra. Algbra article titles. Answers for these nine are written; see the link.', source: 'algbra', href: '/studio/help-getting-started/', linkLabel: 'Read the answers', items: [
				'Am I eligible for an account?', 'Do you carry out credit checks?', 'Where can I download the app?', 'What do I need to open an account?', 'Why do I need to verify my identity?', 'Finding your tax identification number (TIN)', 'How can I add funds?', 'Does Opello accept Bacs payments?', 'Can I deposit cash or cheques into my account?'
			] },
			{ heading: 'Logging in', body: 'Getting into your account, and what to do if the confirmation email does not arrive.', note: 'Source: help.algbra.com, Logging In (one article). Answers are written; see the link. The app screen names need checking against the Opello app.', source: 'algbra', href: '/studio/help-logging-in/', linkLabel: 'Read the answers', items: [
				'Why am I not getting a confirmation email?'
			] },
			{ heading: 'My card', body: 'Using, protecting and managing your card.', note: 'Source: help.algbra.com, My Card. Algbra article titles. Answers for these thirteen are written; see the link. Card wallet and card scheme wording is left out until Opello confirms its partners.', source: 'algbra', href: '/studio/help-my-card/', linkLabel: 'Read the answers', items: [
				'How do I get my card?', 'How long until my card arrives?', 'Where can I use my card?', 'Can I add my card to a digital wallet?', 'Can I use my card to withdraw cash?', 'How is the exchange rate calculated?', 'Are my card transactions protected?', 'Can I use my card abroad?', 'What if my card is lost or stolen?', 'What is 3D Secure?', 'How can I change my card PIN?', 'How do I check my card PIN?', 'How do I freeze my card?'
			] },
			{ heading: 'My account', body: 'Statements, limits, Cubes and transfers.', note: 'Source: help.algbra.com, My Account collection. Five answers are written; the seventeen Ethical Saver articles sit on the Ethical Saver page. Algbra article titles, Opello wording.', source: 'algbra', href: '/studio/help-my-account/', linkLabel: 'Read the answers', items: [
				'How do I generate a statement?', 'What are my account limits?', 'What are Cubes?', 'How do I create a regular Cube?', 'Can I make international transfers?'
			] },
			{ heading: 'Security and data', body: 'How we protect your money and your information.', note: 'Source: help.algbra.com, Security & Data. Algbra article titles, partial list. Answers for these six are written; see the link. Fraud and data answers need compliance sign-off.', source: 'algbra', href: '/studio/help-security-data/', linkLabel: 'Read the answers', items: [
				'Is my money safe?', 'How secure is my account?', 'What personal data do I need to share?', 'How does Opello process my data?', 'How do I opt out of marketing notifications?', 'Keeping your money safe: authorised push payment (APP) scams'
			] },
			{ heading: 'About Opello', body: 'Who we are and what we do.', note: 'Source: help.algbra.com, About Algbra, renamed for Opello. Algbra is swapped for Opello in the titles; Opello to confirm. Answers for these six are written; see the link.', source: 'algbra', href: '/studio/help-about-opello/', linkLabel: 'Read the answers', items: [
				'What is Opello?', 'What makes Opello different?', 'Does Opello have any fees?', 'Why is community important to us?', 'Where is Opello based?', 'From which countries can I open an account?'
			] }
		],
		cta: { label: 'Back to help', href: '/studio/help/' }
	},
	{
		slug: 'help-getting-started',
		title: 'Getting started',
		kicker: 'Help articles',
		lede: 'Answers to the Getting started questions, taken from the Algbra help centre and written for Opello. Not final until the flagged points are signed off.',
		source: 'algbra',
		sections: [
			{ heading: 'Am I eligible for an account?', body: 'To open an Opello account you need to be a UK resident aged 18 or over. You will also need a valid photo ID, like a passport or driving licence.', note: 'Source: help.algbra.com, Am I eligible (18 Mar 2026). Conflicts with the homepage banner, which says "A UK account for non-UK residents". Opello must confirm residency rules before publishing.', source: 'algbra', href: '/studio/help-articles/', linkLabel: 'Back to article titles' },
			{ heading: 'Do you carry out credit checks?', body: 'No. We do not carry out credit checks, so opening an Opello account has no impact on your credit rating or borrowing ability. Our identity checks may leave a soft footprint on your credit history, which has no effect on your rating.', note: 'Source: help.algbra.com, Do you carry out credit checks? (18 Mar 2026). Credit wording needs compliance sign-off. Identity-check provider named by category only.', source: 'algbra' },
			{ heading: 'Where can I download the app?', body: 'The Opello app is available on iOS from the App Store, and on Android from the Play Store.', note: 'Source: help.algbra.com, Where can I download (18 Mar 2026). App is not published yet, so store links are placeholders.', source: 'algbra', href: '/studio/download/', linkLabel: 'Get the app' },
			{ heading: 'What do I need to open an account?', body: 'You need an internet-connected device with a camera, a mobile number, a valid ID document such as a passport or driving licence, and proof of address, such as a utility bill. In the app you record a short video of yourself and take a photo of your ID. Once approved, you can use your account straight away.', note: 'Source: help.algbra.com, What do I need (18 Mar 2026). Video step and approval timing to confirm for Opello.', source: 'algbra', href: '/studio/faq/', linkLabel: 'More in the FAQ' },
			{ heading: 'Why do I need to verify my identity?', body: 'Financial rules require us to verify who you are. These are known as Know Your Customer (KYC) and Customer Due Diligence (CDD). The checks protect our community and keep your account secure. You will need a valid, in-date government photo ID. We can only use the original document. If we cannot verify your address from the one you give, we may ask for proof of address and will tell you what we need.', note: 'Source: help.algbra.com, Why do I need to verify my identity (1 Nov 2022). Compliance sign-off needed before publishing.', source: 'algbra' },
			{ heading: 'Finding your tax identification number (TIN)', body: 'Your tax number depends on the country that issued it. Some countries use a national ID number instead, and some issue no tax number at all. [Placeholder: the country-by-country table is not copied here yet.]', note: 'Source: help.algbra.com, Finding your TIN (26 Jun 2026). The Algbra table is long; Opello needs its own list or a link before this goes live.', source: 'placeholder' },
			{ heading: 'How can I add funds?', body: 'Tap Add Money on the Home tab. You can make an instant bank transfer from a supported bank account, with no bank details to enter. You can also send money by transfer from your account details. Most transfers are instant. To move money from your Cubes to your main balance, use the Cubes option, which is instant.', note: 'Source: help.algbra.com, How can I add funds (18 Mar 2026). App screen names and "instant" wording to confirm for Opello.', source: 'algbra', href: '/studio/transfers/', linkLabel: 'See transfers' },
			{ heading: 'Does Opello accept Bacs payments?', body: 'Yes. You can have your salary or benefits paid into your Opello account.', note: 'Source: help.algbra.com, Bacs payments (18 Mar 2026). Conflicts with the FAQ, which lists Faster Payments only and says direct debits and standing orders are not yet available. Opello must confirm before publishing.', source: 'algbra', href: '/studio/faq/', linkLabel: 'Check payments in the FAQ' },
			{ heading: 'Can I deposit cash or cheques into my account?', body: 'Not at the moment. We do not accept cash or cheque deposits.', note: 'Source: help.algbra.com, Cash or cheques (18 Mar 2026). Confirm for Opello before publishing.', source: 'algbra' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'help-logging-in',
		title: 'Logging in',
		kicker: 'Help articles',
		lede: 'Answers to the Logging in questions, taken from the Algbra help centre and written for Opello. Not final until the app screens and support route are confirmed.',
		source: 'algbra',
		sections: [
			{ heading: 'Why am I not getting a confirmation email?', body: 'When you log in, we send a confirmation email to check it is you on this device. It should arrive within a couple of minutes. If it does not, work through the checks on this page.', note: 'Source: help.algbra.com, Why am I not getting a confirmation email (Algbra wording, adapted for Opello). App screen and button names to confirm against the Opello app.', source: 'algbra' },
			{ heading: 'Check your email address', body: 'Look for typos, and for a capital letter in the wrong place. If the address is wrong, choose Change your email address in the app and try again.', note: 'Source: help.algbra.com, Why am I not getting a confirmation email (step 1, adapted).', source: 'algbra' },
			{ heading: 'Check your spam or junk folder', body: 'The email can land there by mistake. If you find it, mark it as not spam so future emails reach your inbox.', note: 'Source: help.algbra.com, Why am I not getting a confirmation email (step 2, adapted).', source: 'algbra' },
			{ heading: 'Check your connection', body: 'Make sure your phone or device is online, then try again. A weak signal can hold up the email.', note: 'Source: help.algbra.com, Why am I not getting a confirmation email (step 3, adapted).', source: 'algbra' },
			{ heading: 'New to the app, or already started?', body: 'If this is your first time in the app, choose Get started. If you have opened the app before, choose I have an account to log in and carry on with your registration. Use the Having trouble? button if you are still stuck.', note: 'Source: help.algbra.com, Why am I not getting a confirmation email (Algbra screen names). Opello app screen names are placeholders until the app is published.', source: 'algbra' },
			{ heading: 'Still stuck?', body: 'Use the chat icon at the top right of the app and tell us what is happening. You can also email us at [placeholder: Opello support email].', note: 'Source: help.algbra.com (chat route, adapted). Opello support email and chat route are placeholders.', source: 'placeholder', href: '/studio/contact/', linkLabel: 'See contact options' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'help-security-data',
		title: 'Security and data',
		kicker: 'Help articles',
		lede: 'Answers to the Security and data questions, taken from the Algbra help centre and written for Opello. Not final until the flagged points are signed off.',
		source: 'algbra',
		sections: [
			{ heading: 'Is my money safe?', body: 'Yes. Your money is kept safe by a process called safeguarding. Opello is not a bank, so your money is not covered by the Financial Services Compensation Scheme (FSCS) in the same way a bank deposit is. Safeguarding means we keep customer money separate from our own funds, we cannot use it for lending or investing like a bank does, and it is held in designated safeguarding accounts with authorised banks. We have regular external audits to check this. If a payment firm were to fail, safeguarded money is used to return funds to customers, with no upper limit.', note: 'Source: help.algbra.com, Is my money safe with Algbra (Algbra wording, reworded for Opello). Opello regulatory status and safeguarding partner to confirm. FSCS wording and any partner-bank protection need compliance sign-off before publishing.', source: 'algbra' },
			{ heading: 'How secure is my account?', body: 'The Opello app uses bank-grade encryption to protect your data, both when it moves and when it is stored. To keep your account safe, keep your account details private and your card secure. If you think someone else has access to your account, freeze your card and contact us straight away.', note: 'Source: help.algbra.com, How secure is my account (Algbra wording, adapted). Security claims and the support route need compliance sign-off. Support email is a placeholder.', source: 'algbra', href: '/studio/contact/', linkLabel: 'See contact options' },
			{ heading: 'What personal data do I need to share?', body: 'To open an account we need your legal name, date of birth, phone number, email address, identity documents and card delivery details. In some cases we may ask for more information so we can support you with our services. We use this to verify your identity, protect accounts from fraud, prevent financial crime and provide our services. Our privacy notice explains more.', note: 'Source: help.algbra.com, What personal data do I need to share (Algbra wording, reworded for Opello). Data list to match the Opello privacy notice before publishing.', source: 'algbra', href: '/privacy/', linkLabel: 'Read the privacy notice' },
			{ heading: 'How does Opello process my data?', body: 'Our privacy notice explains how we process and protect your personal data. You can read it on this website or in the app.', note: 'Source: help.algbra.com, How does Algbra process my data (Algbra wording, adapted). Links to the Opello privacy notice, which is still a draft.', source: 'algbra' },
			{ heading: 'How do I opt out of marketing notifications?', body: 'Go to the Privacy section in the Opello app. There you can opt out of, or back into, marketing emails and push notifications at any time.', note: 'Source: help.algbra.com, How do I opt out of marketing notifications (Algbra wording, adapted). App screen name to confirm for Opello.', source: 'algbra' },
			{ heading: 'Keeping your money safe: authorised push payment (APP) scams', body: 'An APP scam is when you are tricked into sending money by bank transfer to a fraudster. Scammers may pretend to be your bank, HMRC or a delivery firm, pose as a friend or relative in trouble, offer purchases that never arrive, build a romance to ask for money, or promise fast returns on an investment. Protect yourself by staying alert to urgent requests, checking payment details through a number you already know, and never moving money to a "safe" account because someone on the phone asked you to. If you have already sent money in a scam, contact us in the app or by email straight away, and report it to Action Fraud on 0300 123 2040 (in Scotland, contact the police on 101). The sooner you report it, the better our chances of getting the money back.', note: 'Source: help.algbra.com, Keeping your money safe: APP scams (Algbra wording, shortened and reworded for Opello). The full article has more scam types and links; the full version needs Opello sign-off. Action Fraud and 159 details are from Algbra\'s article and should be checked before publishing.', source: 'algbra', href: '/studio/faq/', linkLabel: 'Read the FAQ' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'help-my-card',
		title: 'My card',
		kicker: 'Help articles',
		lede: 'Answers to the My card questions, taken from the Algbra help centre and written for Opello. Not final until the flagged points are signed off.',
		source: 'algbra',
		sections: [
			{ heading: 'How do I get my card?', body: 'Tap Cards on the Home tab, then tap + to order. You can choose a physical card or a virtual card. A physical card works in shops, online and at cash machines, and can be added to a digital wallet on your phone. A virtual card lives in the app and works for online payments. You can have a virtual card on its own or alongside a physical one.', note: 'Source: help.algbra.com, How do I get my Algbra card (Algbra wording, reworded for Opello). Ordering screens and card types to confirm for Opello.' },
			{ heading: 'How long until my card arrives?', body: 'When you order a physical card, the app shows an estimated delivery time. It usually takes 3 to 5 working days in the UK. If it has not arrived by then, allow a couple of extra days for postal delays. If it still has not arrived, contact us in the app and we will send a replacement.', note: 'Source: help.algbra.com, How long until my card arrives (Algbra wording, adapted). Delivery times need Opello confirmation.' },
			{ heading: 'Where can I use my card?', body: 'You can use your card to pay online and in shops anywhere that shows the card network logo. If you have any trouble, get in touch with us through the in-app chat.', note: 'Source: help.algbra.com, Where can I use my card (Algbra wording, adapted). Card network named by category until Opello confirms its scheme.' },
			{ heading: 'Can I use my card abroad?', body: 'Yes. You can use your card in shops, online and at cash machines anywhere the card network is accepted, which covers over 210 countries and territories.', note: 'Source: help.algbra.com, Can I use my card abroad (Algbra wording, adapted). Country figure needs Opello confirmation. Foreign-use fees are on the fees page.', href: '/studio/fees-and-charges/', linkLabel: 'See fees and charges' },
			{ heading: 'Can I use my card to withdraw cash?', body: 'Yes. Your physical card works in cash machines in the UK and abroad. If you forget your PIN, tap Cards on the Home tab, swipe to your physical card and tap Security.', note: 'Source: help.algbra.com, Can I use my card to withdraw cash (Algbra wording, adapted). Cash withdrawal fees are not covered here.', href: '/studio/fees-and-charges/', linkLabel: 'See fees and charges' },
			{ heading: 'Can I add my card to a digital wallet?', body: 'Yes. Tap Cards on the Home tab, swipe to the card you want to add, and tap Add to wallet.', note: 'Source: help.algbra.com, Can I add my card to a digital wallet (Algbra wording, adapted). Wallet names left out until Opello confirms its partners.' },
			{ heading: 'How is the exchange rate calculated?', body: 'When you pay in another currency, we use the card network\'s exchange rate. You can check the current rates on the card network\'s website at any time.', note: 'Source: help.algbra.com, How is the exchange rate calculated (Algbra wording). Any Opello currency charge must be on the fees page before publishing.', href: '/studio/fees-and-charges/', linkLabel: 'See fees and charges' },
			{ heading: 'Are my card transactions protected?', body: 'Yes. Card purchases are covered by the card network\'s chargeback scheme. You can dispute a payment if goods or services did not arrive, were not as described or were faulty, a refund was not processed, a charge was duplicated or wrong, or the payment was not authorised. Try to sort it out with the merchant first. Once a chargeback is raised, the merchant usually has up to 45 days to respond, and the process can take several weeks. We will keep you updated.', note: 'Source: help.algbra.com, Are my card transactions protected (Algbra wording, adapted). Chargeback rules and timings need compliance sign-off.', href: '/studio/faq/', linkLabel: 'Read the FAQ' },
			{ heading: 'What if my card is lost or stolen?', body: 'Freeze the card straight away. Tap Cards on the Home tab, swipe to your physical card, tap Freeze card, then select Report lost or stolen. Please also contact us, especially if you see transactions you did not make.', note: 'Source: help.algbra.com, What if my card is lost or stolen (Algbra steps, adapted). App screen names to confirm. Support phone is a placeholder.', href: '/studio/help/', linkLabel: 'Get in touch' },
			{ heading: 'What is 3D Secure?', body: '3D Secure is an extra check for some online payments. When a payment needs it, we send a one-time passcode by text message to the mobile number on your account. Enter the code at checkout. You will only need it when a payment is flagged, not every time. We will never ask you to share a passcode, so never give one to anyone, even someone who sounds trustworthy. If you do not recognise a payment, do not enter the code. Freeze your card in the app and contact us straight away.', note: 'Source: help.algbra.com, What is 3D Secure (Algbra wording, adapted). Text-message sender and support route need compliance sign-off.' },
			{ heading: 'How can I change my card PIN?', body: 'Tap Cards on the Home tab, swipe to your physical card, tap Security, then tap Change PIN and follow the steps on screen. Then visit any cash machine, insert your card, and do a balance check or cash withdrawal to confirm the new PIN.', note: 'Source: help.algbra.com, How can I change my card PIN (Algbra steps, adapted). App screen names to confirm for Opello.' },
			{ heading: 'How do I check my card PIN?', body: 'Tap Cards on the Home tab, swipe to your physical card, tap Security, then tap See your PIN.', note: 'Source: help.algbra.com, How do I check my card PIN (Algbra steps, adapted). App screen names to confirm for Opello.' },
			{ heading: 'How do I freeze my card?', body: 'Tap Cards on the Home tab, swipe to the card you want to freeze, and turn on Freeze card. You can also freeze it by contacting us in the app as soon as you notice suspicious activity or lose your card.', note: 'Source: help.algbra.com, How do I freeze my card (Algbra steps, adapted). App screen names to confirm for Opello.' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'help-my-account',
		title: 'My account',
		kicker: 'Help articles',
		lede: 'Answers to the My account questions that are not about Ethical Saver Cubes, taken from the Algbra help centre and written for Opello. Not final until the flagged points are signed off.',
		source: 'algbra',
		sections: [
			{ heading: 'How do I generate a statement?', body: 'In the app, tap the three dots on the Home tab, then tap Statements. Choose the date range you want to see and the format you need: PDF, or CSV and QIF if you use a compatible accounting tool.', note: 'Source: help.algbra.com, How do I generate a statement (Algbra steps, adapted). App screen names and export formats to confirm for Opello.' },
			{ heading: 'What are my account limits?', body: 'Your account has no maximum balance. To see your spending limits, tap your profile icon at the top of the Home screen, then tap Limits. If you have a question, get in touch through the in-app chat or email us.', note: 'Source: help.algbra.com, What are my account limits (Algbra wording, adapted). "No maximum balance" needs compliance sign-off. Support email is a placeholder.', href: '/studio/contact/', linkLabel: 'See contact details' },
			{ heading: 'What are Cubes?', body: 'Cubes are savings spaces inside your account. A regular Cube helps you set a goal and track your progress. Moving money from a Cube to your main balance takes a couple of taps, or you can lock a Cube until a date you choose to stop withdrawals. You can unlock it at any time if you need to. Ethical Saver Cubes are a separate type with a fixed term and agreed profit, and have their own page.', note: 'Source: help.algbra.com, What are Cubes (Algbra wording, adapted). Lock feature and Ethical Saver wording to confirm for Opello. Ethical Saver claims need compliance sign-off.', href: '/studio/cubes/', linkLabel: 'See Cubes' },
			{ heading: 'How do I create a regular Cube?', body: 'In the app, tap Cubes on the Home or Other tab, tap the plus sign and choose a saving Cube. Give it a name, pick an image, and set a savings goal if you want one.', note: 'Source: help.algbra.com, How do I create a regular Cube (Algbra steps, adapted). App screen names to confirm for Opello.', href: '/studio/cubes/', linkLabel: 'See Cubes' },
			{ heading: 'Can I make international transfers?', body: 'At the moment you can receive pound sterling transfers from accounts outside the UK, and there is no charge for receiving them. You cannot send money outside the UK yet, and we will tell you when that changes. We cannot accept transfers from some countries, including Belarus, Cuba, Iran, North Korea, Russia, Syria and some regions of Ukraine. Payments in any other currency are sent back to the sending account, which can take several days.', note: 'Source: help.algbra.com, Can I make international transfers (Algbra wording, adapted). CONFLICT: the Transfers page says Opello sends and receives internationally. Resolve before either publishes. The country list may change; compliance to confirm.', href: '/studio/transfers/', linkLabel: 'See transfers' },
			{ heading: 'Ethical Saver Cube questions', body: 'Seventeen Algbra articles cover Ethical Saver Cubes: what they are, how they work, profit rates, early withdrawal, tax, Sharia compliance and whether savings are protected. Their answers stay on the Ethical Saver page until compliance has signed them off.', note: 'Source: help.algbra.com, My Account collection. Not copied here on purpose: the FSCS, profit and Sharia wording needs sign-off first.', source: 'algbra', href: '/studio/ethical-savings/', linkLabel: 'See Ethical Saver Cubes' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'help-about-opello',
		title: 'About Opello',
		kicker: 'Help articles',
		lede: 'Answers to the About Opello questions, adapted from the Algbra help centre and written for Opello. Not final until the flagged points are signed off.',
		source: 'algbra',
		sections: [
			{ heading: 'What is Opello?', body: 'Opello is a sustainable and values-focused finance app. It gives you an e-money account and a debit card, plus tools to help you live a socially and environmentally conscious life, such as a carbon tracker to review the impact of your spending, the option to offset your footprint, and Donations to support causes you care about. [Placeholder: the full Opello product list, to confirm before publishing.]', note: 'Source: help.algbra.com, What is Algbra? (16 May 2022), adapted for Opello. Product list, e-money wording and tool names need Opello confirmation. Card scheme left out.', source: 'algbra', href: '/studio/personal/', linkLabel: 'See the personal account' },
			{ heading: 'What makes Opello different?', body: 'We will never hold your money in an unethical or high-risk way, and we follow strict policies on the industries we invest in. You can always see where your money is held. We aim to be open about everything we do, from where your money sits to clear details on every fee or charge. We will also give you ways to join our social impact work, so you can be part of the difference.', note: 'Source: help.algbra.com, What makes Algbra different? (9 Apr 2026), adapted for Opello. Promise and investment policy need Opello and compliance sign-off. Team background line from Algbra is left out until Opello has its own.', source: 'algbra' },
			{ heading: 'Does Opello have any fees?', body: 'Our fees and charges are set out in full on our fees page, so you can check what applies to the account you choose before you open it.', note: 'Source: help.algbra.com, Does Algbra have any fees? (9 Apr 2026), adapted for Opello. Opello fee schedule still to be confirmed; see the fees page.', source: 'algbra', href: '/studio/fees-and-charges/', linkLabel: 'See fees and charges' },
			{ heading: 'Why is community important to us?', body: 'Our success is measured by the work we do to educate, engage and empower communities that banks have often overlooked, and to help them take control of their finances. [Placeholder: Opello social impact programme and any charity or foundation details. Algbra\'s foundation is not Opello\'s, so none of its details are used here.]', note: 'Source: help.algbra.com, Why is community important to us? (8 Apr 2022), reworded. Opello community work and any charity registration to be supplied by Opello.', source: 'placeholder', href: '/studio/donations/', linkLabel: 'See donations' },
			{ heading: 'Where is Opello based?', body: 'Opello is based in London, United Kingdom. You can find our company details and how to reach us on the contact page.', note: 'Source: help.algbra.com, Where is Algbra based? (8 Apr 2022), adapted for Opello. Opello registered address to confirm on the contact page. Algbra contact address not reused.', source: 'algbra', href: '/studio/contact/', linkLabel: 'See contact details' },
			{ heading: 'From which countries can I open an account?', body: 'At the moment you can open an Opello account if you live in the UK. We plan to open to other countries over time, and we will tell you when that happens.', note: 'Source: help.algbra.com, From which countries can I open an account? (8 Apr 2022), adapted for Opello. Conflicts with the homepage banner, which says "A UK account for non-UK residents". Opello must confirm residency rules before publishing.', source: 'algbra', href: '/studio/help-getting-started/', linkLabel: 'Read the eligibility answer' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'sitemap',
		title: 'Sitemap',
		kicker: 'Help',
		lede: 'Every page in the Opello studio build, grouped the way the footer groups them. Placeholder layout until the site map is confirmed for launch.',
		source: 'placeholder',
		sections: [
			{ heading: 'Personal', body: 'Accounts, payments and cards for everyday use.', source: 'placeholder', links: [
				{ label: 'Personal', href: '/studio/personal/' }, { label: 'All plans', href: '/studio/all-plans/' }, { label: 'Transfers', href: '/studio/transfers/' }, { label: 'Cards', href: '/studio/cards/' }, { label: 'Donations', href: '/studio/donations/' }, { label: 'Planet Impact', href: '/studio/carbon-tracking/' }, { label: 'Download the app', href: '/studio/download/' }
			] },
			{ heading: 'Accounts and savings', body: 'Savings, Cubes, currency accounts and other account types.', source: 'placeholder', links: [
				{ label: 'Current accounts', href: '/studio/current-accounts/' }, { label: 'Multi-currency accounts', href: '/studio/multi-currency/' }, { label: 'Borderless account', href: '/studio/borderless-account/' }, { label: 'Premium', href: '/studio/premium/' }, { label: 'Savings', href: '/studio/savings/' }, { label: 'Cubes', href: '/studio/cubes/' }, { label: 'Ethical Saver Cubes', href: '/studio/ethical-savings/' }, { label: 'Ethical finance', href: '/studio/ethical-finance/' }, { label: 'Pensions', href: '/studio/pensions/' }, { label: 'Open an account', href: '/studio/open-account/' }
			] },
			{ heading: 'Business', body: 'Accounts and payments for businesses.', source: 'placeholder', links: [
				{ label: 'Business', href: '/studio/business/' }
			] },
			{ heading: 'About', body: 'Who we are, what we are building and how to reach us.', source: 'placeholder', links: [
				{ label: 'About', href: '/studio/about/' }, { label: 'Careers', href: '/studio/careers/' }, { label: 'News', href: '/studio/news/' }, { label: 'Contact', href: '/studio/contact/' }
			] },
			{ heading: 'Help', body: 'Answers and support.', source: 'placeholder', links: [
				{ label: 'Help', href: '/studio/help/' }, { label: 'Help articles', href: '/studio/help-articles/' }, { label: 'Getting started answers', href: '/studio/help-getting-started/' }, { label: 'Logging in answers', href: '/studio/help-logging-in/' }, { label: 'Security and data answers', href: '/studio/help-security-data/' }, { label: 'My card answers', href: '/studio/help-my-card/' }, { label: 'My account answers', href: '/studio/help-my-account/' }, { label: 'About Opello answers', href: '/studio/help-about-opello/' }, { label: 'Frequently asked questions', href: '/studio/faq/' }, { label: 'Accessibility', href: '/studio/accessibility/' }, { label: 'Log in', href: '/studio/login/' }
			] },
			{ heading: 'Legal', body: 'Policies, terms and fees.', source: 'placeholder', links: [
				{ label: 'Privacy policy', href: '/studio/privacy-policy/' }, { label: 'Terms and conditions', href: '/studio/terms-and-conditions/' }, { label: 'Customer terms', href: '/studio/customer-terms-and-conditions/' }, { label: 'Cookie policy', href: '/studio/cookies-policy/' }, { label: 'Fees and charges', href: '/studio/fees-and-charges/' }, { label: 'Responsible disclosure', href: '/studio/responsible-disclosure/' }
			] }
		],
		cta: { label: 'Open account with us', href: OPEN }
	}
];

export const bySlug = (slug: string) => pages.find((p) => p.slug === slug);
