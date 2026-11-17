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
	sourceNotes?: string[];
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
			{ heading: 'One app. Multiple currencies.', body: 'We offer transparent, accessible, interest-free products, and you will never be confused or surprised by a fee.', source: 'algbra', href: '/studio/multi-currency/', linkLabel: 'See multi-currency accounts' },
			{ heading: 'Earn % EPR* with Ethical Saver Cubes', body: 'Put money aside in Cubes and earn on your savings.', note: '*Placeholder. EPR rate, eligibility and protection wording need compliance sign-off. Not for publication until approved.', source: 'algbra' },
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
			{ heading: 'Pay with a QR code', body: 'Use a friend or family member\'s QR code to pay them.', note: 'Source: algbra.com/features/transfers.', source: 'algbra' },
			{ heading: 'Get paid with your own link', body: 'Make the everyday task of getting paid easier by creating a unique link to share.', note: 'Source: algbra.com/features/transfers, "Algbra.Me" section, renamed for Opello. Product name and link set-up steps are a placeholder until Opello confirms them.', source: 'algbra' }
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
			{ heading: 'Virtual cards', body: 'A card you can use straight away when you open an account.', note: 'Source: algbra.com/features/cards, where virtual cards are marked as available soon. Opello availability is a placeholder.', source: 'algbra', href: '/studio/virtual-cards/', linkLabel: 'Learn about virtual cards' },
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
			{ heading: 'Offset what you cannot avoid', body: 'Offset the carbon emissions you cannot avoid by supporting carbon offsetting projects that benefit the planet and local communities around the world.', note: 'Source: algbra.com/features/carbon-tracking. The offsetting project partners and how offsets are verified are placeholders until Opello confirms them.', source: 'algbra', href: '/studio/carbon-offsetting/', linkLabel: 'Read about carbon offsetting' },
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
		lede: 'Algbra does not publish a Premium plan. Its plans are Standard and Borderless, so this page stays a placeholder until Opello decides what Premium is.',
		source: 'placeholder',
		sections: [
			{ heading: 'The plans we have', body: 'Standard is free for UK residents. Borderless is a UK account for non-UK residents at £10 a month.', note: 'Source: algbra.com/all-plans. Plan wording is Algbra\'s and is not yet approved for Opello.', source: 'algbra', href: '/studio/all-plans/', linkLabel: 'See all plans' },
			{ heading: 'What Premium includes', body: 'Placeholder. Features, limits and price for an Opello Premium tier are still to be decided.', note: 'Placeholder. No Algbra plan has this name, so no wording is copied. Opello to decide whether Premium exists.', source: 'placeholder' },
			{ heading: 'Borderless account', body: 'A UK account for non-UK residents, with multiple currencies and a debit card.', note: 'Source: algbra.com/features/borderless-account. The UK-only eligibility wording conflicts with the non-UK banner; flagged.', source: 'algbra', href: '/studio/borderless-account/', linkLabel: 'See the Borderless account' }
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
			{ heading: 'Multi-currency', body: 'Keep different currencies together in one place, no need for multiple apps.', note: 'Source: algbra.com/features/multi-currency.', source: 'algbra', href: '/studio/multi-currency/', linkLabel: 'See multi-currency accounts' },
			{ heading: 'Send and receive money', body: 'Instant bank transfers, international transfers, and payments to friends and family.', note: 'Source: algbra.com/features/transfers. Country count and availability are flagged on the Transfers page.', source: 'algbra', href: '/studio/transfers/', linkLabel: 'See transfers' },
			{ heading: 'Spend with your card', body: 'Physical and virtual cards, card controls and spending abroad.', note: 'Source: algbra.com/features/cards. Wording taken from the Cards page.', source: 'algbra', href: '/studio/cards/', linkLabel: 'See cards' }
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
			{ heading: 'Earn % EPR* with Ethical Saver Cubes', body: 'Put money aside in Cubes and earn on your savings.', note: '*Placeholder. EPR rate, eligibility and protection wording need compliance sign-off. Not for publication until approved.', source: 'algbra', href: '/studio/ethical-savings/', linkLabel: 'See Ethical Saver Cubes' },
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
		lede: 'Here is what you will need to open an Opello account in the app, and what happens next.',
		source: 'algbra',
		sourceNotes: [
			'What you need and the identity steps come from the Algbra help centre (help.algbra.com, "What do I need to open an account" and "Why do I need to verify my identity", 18 Mar 2026 and 1 Nov 2022), reworded for Opello.',
			'The "Get started for free" button label is from algbra.com/all-plans. Opello has not chosen its own label yet.',
			'Eligibility conflict: Algbra help says UK residents only, but the homepage banner says "A UK account for non-UK residents". Opello must confirm residency rules before this page publishes.',
			'Approval timing, the video step and any waiting list are placeholders until Opello confirms them. Accounts are not open yet, so no sign-up is live.'
		],
		sections: [
			{ heading: 'What you will need', body: 'An internet-connected phone or device with a camera, a mobile number, a valid photo ID such as a passport or driving licence, and proof of address, such as a utility bill.', source: 'algbra' },
			{ heading: 'How it works', body: 'Download the app and enter your email address and mobile number. Then add your ID and proof of address, and record a short video of yourself. We check your details, and once approved you can start using your account.', note: 'Source: help.algbra.com, What do I need (18 Mar 2026). Video step and approval timing to confirm for Opello.', source: 'algbra' },
			{ heading: 'Why we check your identity', body: 'Financial rules require us to verify who you are. These checks are known as Know Your Customer (KYC) and Customer Due Diligence (CDD). They protect our community and keep your account secure. You will need a valid, in-date government photo ID, and we can only use the original document.', note: 'Source: help.algbra.com, Why do I need to verify my identity (1 Nov 2022). Compliance sign-off needed before publishing.', source: 'algbra' },
			{ heading: 'No credit check', body: 'We do not carry out credit checks, so opening an Opello account has no impact on your credit rating or borrowing ability.', note: 'Source: help.algbra.com, Do you carry out credit checks? (18 Mar 2026). Credit wording needs compliance sign-off.', source: 'algbra', href: '/studio/help-getting-started/', linkLabel: 'More getting started answers' },
			{ heading: 'Ready to start?', body: 'Get the app first, then open your account in a few steps. Have your ID and proof of address to hand.', note: 'Source: algbra.com/download for the app steps. The app is not published yet, so the store links are placeholders.', source: 'algbra', href: '/studio/download/', linkLabel: 'Get the app' }
		],
		cta: { label: 'Get started for free', href: '/studio/download/' }
	},
	{
		slug: 'about',
		title: 'About',
		kicker: 'About',
		lede: 'Finance, made for humans. We are people and planet first.',
		source: 'algbra',
		sections: [
			{ heading: 'Our objective', body: 'To eradicate social and financial exclusion and create a more sustainable society, using our values-driven financial technology and a community-first approach. We are people and planet first. Opello is for people who want more than excellent financial services: people who want a new experience with finance, one that reflects their identity, values and lifestyle, and that helps them in everyday actions.', source: 'algbra' },
			{ heading: 'Why we are different', body: 'Five things we hold ourselves to.', source: 'algbra', items: [
				'We never hold your money in an unethical or high-risk manner.',
				'We offer clear, accessible and interest-free products and services.',
				'We put our values into action by giving back to our community, and working with them on social impact initiatives.',
				'We bring you into the equation through social and environmental impact tools inside the app.',
				'We adopt a systematic approach to ethical finance, with a focus on equitable access to sustainable financial services.'
			] },
			{ heading: 'We are not a bank', body: 'We are a movement. Join us on the journey to fairer, more ethical and transparent finance.', source: 'algbra', href: '/studio/ethical-finance/', linkLabel: 'See ethical finance' }
		],
		sourceNotes: [
			'Lede and sections: Source: algbra.com/about, "Values that Drive Ambition", and the algbra.com homepage headline "Finance, made for humans". Wording is Algbra\'s and needs Opello approval.',
						'Why we are different: each claim needs Opello evidence or compliance sign-off. Interest-free wording needs checking against the Ethical Saver Cubes.',
			'We are not a bank: needs checking against Opello\'s regulatory status. Opello accounts are provided through a regulated partner, so the page must not imply bank status.',
			'Our objective: "end social and financial exclusion" is an aim, not a measured result. Algbra\'s name is replaced with Opello in the "Who it is for" sentences. Opello to approve its own mission and about wording.',
			'Community and charity details are on the Donations and Ethical finance pages and are placeholders there.'
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'help',
		title: 'Help',
		kicker: 'Help',
		lede: 'Find answers to frequently asked questions here or get in touch via our in-app support chat.',
		source: 'algbra',
		sections: [
			{ heading: 'Find an answer', body: 'Check out the questions we hear most often, then use the emojis at the end of each answer to tell us whether it helped.', source: 'algbra', href: '/studio/faq/', linkLabel: 'Read the FAQ' },
			{ heading: 'Chat to our support team', body: 'You can chat to our dedicated support team in real time from the app. If you prefer, you can send us an email instead.', source: 'algbra', href: '/studio/contact/', linkLabel: 'See contact options' },
			{ heading: 'Lost or stolen card', body: 'Freeze it instantly in the app. If you cannot get into the app, call us on [support phone, placeholder].', source: 'algbra', href: '/studio/faq/', linkLabel: 'Read about lost cards' },
			{ heading: 'Help articles by category', body: 'Getting started, Logging in, My card, My account, Ethical Saver Cubes, Security and data, About Opello, and Get in touch. Browse the article titles in each category.', source: 'algbra', href: '/studio/help-articles/', linkLabel: 'See article titles' },
			{ heading: 'Get in touch', body: 'Thoughts, ideas, suggestions, or a question about your account. Email: [support email, placeholder]', source: 'algbra', href: '/studio/contact/', linkLabel: 'Contact us' },
			{ heading: 'Closing your account', body: 'Chat to the support team in the app, or email us, and we will help you close your account.', source: 'algbra', href: '/studio/faq/', linkLabel: 'Read the closing steps' }
		],
		sourceNotes: [
			'Find an answer: Source: algbra.com/help. Opello answer feedback is not built yet.',
			'Chat to our support team: Source: algbra.com/help. Opello support hours and in-app chat to confirm before publishing.',
			'Lost or stolen card: Source: algbra.com/help and algbra.com/faq. Opello support number still placeholder.',
			'Help articles by category: Source: help.algbra.com collection pages (Getting started, Logging in, My Card, My Account, Ethical Saver Cubes, Security & Data, About Algbra, Get in touch). Opello renames About Algbra. Answers are written for all eight categories; the Opello product list and rename wording still need confirming.',
			'Get in touch: Source: algbra.com/help. Opello support email still to be set up.',
			'Closing your account: Source: algbra.com/faq, Closing your account. Support email still placeholder.'
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
			{ heading: 'What you need to open an account', body: 'A smartphone, a mobile number, a valid ID document (passport or driving licence) and proof of your address, such as a utility bill. You will record a short video and take photos of your documents when you sign up.', source: 'algbra' },
			{ heading: 'Who can open an account', body: 'You need to be 18 or over, a UK resident, and have a valid ID document and proof of address.', source: 'algbra' },
			{ heading: 'Is my money safe?', body: 'We hold the money you deposit or receive in a client money account that we manage on your behalf. We do not lend or invest deposits, and client accounts can only be used to hold your funds.', source: 'algbra' },
			{ heading: 'Is my balance covered by the FSCS?', body: 'Your balance is e-money, which is not covered by the Financial Services Compensation Scheme. Protection comes from safeguarding instead.', source: 'algbra' },
			{ heading: 'Payments we support today', body: 'Card payments, ATM withdrawals and Faster Payments. Payments are in pounds sterling. International payments, direct debits, standing orders and CHAPS are not yet available.', source: 'algbra' },
			{ heading: 'Lost or stolen card', body: 'Freeze your card in the app straight away, then contact our support team through the in-app chat. If you cannot get into the app, call or email us instead.', source: 'algbra' },
			{ heading: 'Unrecognised transactions and chargebacks', body: 'Freeze your card, then tell us the merchant, location and date. For goods or services you have not received or that were faulty, we can help you raise a chargeback claim within 120 days.', source: 'algbra' },
			{ heading: 'Carbon footprint and offsetting', body: 'Your carbon footprint is the CO2e generated by your transactions. Where you cannot avoid a purchase, you can offset the rest by supporting carbon projects.', source: 'algbra', href: '/studio/carbon-tracking/', linkLabel: 'Read about Planet Impact' },
			{ heading: 'Closing your account', body: 'Chat to the support team in the app, or email us, and we will help you close your account. Once closed, you cannot open a new one.', source: 'algbra' }
		],
		sourceNotes: [
			'What you need to open an account: Source: algbra.com/faq, Accounts. Document list and video step to confirm for Opello.',
			'Who can open an account: Source: algbra.com/faq, Accounts. Residency rules and any non-resident programme to confirm.',
			'Is my money safe?: Source: algbra.com/faq, You and Your Money. Compliance sign-off needed before publishing.',
			'Is my balance covered by the FSCS?: Source: algbra.com/faq. Regulatory disclosure, compliance sign-off required. Do not soften this wording.',
			'Payments we support today: Source: algbra.com/faq, Payments. Conflicts with the Transfers page wording, so Opello must confirm which is right before either is published.',
			'Lost or stolen card: Source: algbra.com/faq, Cards. Opello support number and email still placeholder.',
			'Unrecognised transactions and chargebacks: Source: algbra.com/faq, Transactions and Disputes. The 120-day window and card-scheme route to confirm.',
			'Carbon footprint and offsetting: Source: algbra.com/faq, Carbon Tracking and Carbon Offsetting. See the Planet Impact page for detail.',
			'Closing your account: Source: algbra.com/faq. Support email still placeholder.'
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
			{ heading: 'Problems with your account', body: 'Lost or stolen card, or a payment you do not recognise: freeze your card in the app first, then use the in-app chat. If you cannot get into the app, call or email us instead.', note: 'Source: algbra.com/faq, Cards and Transactions. Opello support number and email to confirm.', source: 'algbra', href: '/studio/faq/', linkLabel: 'Read the FAQ first' },
			{ heading: 'Company and privacy', body: 'Opello Ltd, registered in England and Wales, company number 17324431. Suite 401–402, Cumberland House, 80 Scrubs Lane, London NW10 6RF. Questions about your personal data: privacy@opello.co.uk', note: 'From the Opello privacy notice draft. Confirm the registered address and privacy mailbox before publishing.', source: 'placeholder', href: '/studio/privacy-policy/', linkLabel: 'Read the privacy policy' }
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
		lede: 'News, product updates, explainers and stories from Opello. [Placeholder: Opello newsroom intro, in Opello wording.]',
		source: 'placeholder',
		sourceNotes: [
			'Algbra\'s news page (algbra.com/news) is its corporate newsroom: partnerships, licences and investment. None of it is reused for Opello.',
			'Insights topics are Algbra article subjects (algbra.com/news/category/insights). They are topics to write for Opello, not copy, and each needs sign-off before it publishes.',
			'Algbra\'s Updates category page returns not found, so Updates is Opello wording only.',
			'Blog category names come from algbra.com/news/category/blog. Opello posts are not written yet.'
		],
		sections: [
			{ heading: 'News', body: '[Placeholder: announcements about Opello, such as new products, partnerships and approvals.]', source: 'placeholder' },
			{ heading: 'Updates', body: '[Placeholder: changes to the app and new features for customers, with dates.]', source: 'placeholder' },
			{ heading: 'Blog', body: 'Stories from the Opello team and the community. [Placeholder: first posts.]', source: 'placeholder', href: '/studio/blog/', linkLabel: 'Read the blog topics' },
			{ heading: 'Read the insights', body: 'Plain-English explainers on money, fees and sustainability.', source: 'algbra', links: [
				{ label: 'The bright side of dark mode', href: '/studio/dark-mode/' },
				{ label: 'Seven principles for implementing the Consumer Duty', href: '/studio/consumer-duty/' },
				{ label: 'The pros and cons of a cashless society', href: '/studio/cashless-society/' },
				{ label: 'What are chargebacks, and when can you claim?', href: '/studio/chargebacks/' },
				{ label: 'An intro to carbon offsetting', href: '/studio/carbon-offsetting/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' },
				{ label: 'A Green Break: how to holiday sustainably', href: '/studio/green-break/' },
				{ label: 'Money and mental health: 5 free mood boosters', href: '/studio/money-and-mental-health/' },
				{ label: 'What is World Wildlife Day, and why does it matter?', href: '/studio/world-wildlife-day/' },
				{ label: 'What are virtual cards, and how do they work?', href: '/studio/virtual-cards/' }
			] }
		],
		cta: { label: 'Get in touch', href: '/studio/contact/' }
	},
	{
		slug: 'login',
		title: 'Log in',
		kicker: 'Account',
		lede: 'Log in to the Opello app with your email address. Accounts are not open yet, so there is nothing to sign in to today.',
		source: 'placeholder',
		sourceNotes: [
			'Log in steps and the confirmation email wording come from the Algbra help centre (help.algbra.com, Logging in articles), adapted for Opello. Algbra publishes no log in page of its own.',
			'Opello to confirm: whether there is a web log in at all, the app screen names, and the support route for people who are locked out.'
		],
		sections: [
			{ heading: 'How you log in', body: 'Open the app and enter your email address. We send a confirmation email to check it is you on this device. It should arrive within a couple of minutes.', note: 'Source: help.algbra.com, Logging in (Algbra wording, adapted for Opello). App screen names are placeholders until the Opello app is published.', source: 'algbra', href: '/studio/help-logging-in/', linkLabel: 'Read the logging in help' },
			{ heading: 'New here, or already started?', body: 'If this is your first time in the app, choose Get started. If you have opened the app before, choose I have an account to log in and carry on with your registration.', note: 'Source: help.algbra.com, Logging in (Algbra screen names, adapted). Opello screen names to confirm.', source: 'algbra' },
			{ heading: 'No confirmation email?', body: 'The email can take a few minutes and sometimes lands in the wrong place. Try these in order.', source: 'algbra', items: [
				'Check the email address for typos and capital letters in the wrong place.',
				'Check your spam or junk folder, and mark the email as not spam.',
				'Check that your phone or device is online, then try again.'
			] },
			{ heading: 'Locked out or still stuck?', body: 'Tell us what is happening and we will help you get back in. [Placeholder: support email and in-app chat route.]', note: 'Placeholder. Opello support email and chat route are not set up yet.', source: 'placeholder', href: '/studio/contact/', linkLabel: 'See contact options' },
			{ heading: 'Not live yet', body: 'Accounts open to customers at launch. Until then, there is no account to log in to. [Placeholder: launch date and the sign-up route, once Opello confirms them.]', note: 'Placeholder. Launch timing is not confirmed for this page.', source: 'placeholder' }
		],
		cta: { label: 'See how to open an account', href: '/studio/open-account/' }
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
			{ heading: 'Cards and cash', body: 'First physical card £5, replacements £5 each. First three virtual cards free, then £1 each. Card cancellation after 14 days: £2.50. UK cash withdrawals 1.00%. Foreign withdrawals and foreign-currency card payments: 1.50% FX fee. ATM operators may charge their own fee.', note: 'Source: algbra.com fees and charges PDF. Card fees need confirming for Opello and the card scheme.', source: 'algbra' },
			{ heading: 'Converting currencies', body: 'Converting money from one currency to another in your account costs a 0.50% FX fee on the amount converted.', note: 'Source: algbra.com fees and charges PDF. Confirm for Opello before publishing.', source: 'algbra', href: '/studio/multi-currency/', linkLabel: 'See multi-currency accounts' },
			{ heading: 'Other fees', body: 'Administration fee up to £10, for example returning funds after account closure or mediating a disputed payment. Paper statements £5. Dormant accounts: up to £1 a month after six months. Overdrafts are not supported; repeated negative balances may lead to an administration fee.', note: 'Source: algbra.com fees and charges PDF. Confirm the list and amounts for Opello before publishing.', source: 'algbra' }
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
			{ heading: 'What we have checked', body: 'An automated colour-contrast scan of every studio page at desktop and phone widths, with the failures fixed (17 November 2026). Layouts checked by eye at 1440 and 390 pixels. Keyboard access and visible focus: focus-visible rings on navigation, footer and card links, plus a skip-to-content link on every page template (17 November 2026). Screen-reader spot-checks: heading order, skip links, main landmark, link text and tab order verified on the homepage and sub-pages (17 November 2026). Reduced motion: every animated component has a prefers-reduced-motion block that disables transitions and animations (17 November 2026).', note: 'Checked on the studio build only, not on the live site. Not yet audited by a third party. Confirm before publishing.', source: 'placeholder' },
			{ heading: 'Known gaps', body: 'The homepage and product photos are placeholders that still need descriptive alt text. The phone screens in the hero show sample content, not real app screens. A full third-party audit has not been run.', note: 'Placeholder. The photo and sample-screen items were noted on the build, not audited. A third-party audit is needed before publishing.', source: 'placeholder' },
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
		lede: 'The articles in each help category. Titles are taken from Algbra\'s help centre. Getting started, Logging in, My card, My account, Ethical Saver, Security and data, About Opello and Get in touch answers are written.',
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
			{ heading: 'My account', body: 'Statements, limits, Cubes and transfers.', note: 'Source: help.algbra.com, My Account collection. Five answers are written. The Ethical Saver articles are on their own card below. Algbra article titles, Opello wording.', source: 'algbra', href: '/studio/help-my-account/', linkLabel: 'Read the answers', items: [
				'How do I generate a statement?', 'What are my account limits?', 'What are Cubes?', 'How do I create a regular Cube?', 'Can I make international transfers?'
			] },
			{ heading: 'Ethical Saver Cubes', body: 'Fixed-term savings, profit, tax and protection.', note: 'Source: help.algbra.com, Ethical Saver Cubes (16 articles). Answers are written for Opello and held for compliance sign-off before publishing.', source: 'algbra', href: '/studio/help-ethical-saver/', linkLabel: 'Read the answers', items: [
				'What are Ethical Saver Cubes?', 'How do Ethical Saver Cubes work?', 'Is there a minimum deposit?', 'Can I withdraw my money early?', 'How are Ethical Saver Cubes Sharia-compliant?', 'What is the EPR?', 'Are my savings protected?', 'Can I open more than one?', 'What happens when my Cube matures?', 'Are the profits guaranteed?', 'How do I create an Ethical Saver Cube?', 'Can I close my account while I have Cubes?', 'Do I need to pay tax on my profit?', 'What makes Ethical Saver Cubes ethical?', 'How is the impact calculated?', 'Why is it called EPR if my return is fixed?'
			] },
			{ heading: 'Security and data', body: 'How we protect your money and your information.', note: 'Source: help.algbra.com, Security & Data. Algbra article titles, full collection of six. Answers for these six are written; see the link. Fraud and data answers need compliance sign-off.', source: 'algbra', href: '/studio/help-security-data/', linkLabel: 'Read the answers', items: [
				'Is my money safe?', 'How secure is my account?', 'What personal data do I need to share?', 'How does Opello process my data?', 'How do I opt out of marketing notifications?', 'Keeping your money safe: authorised push payment (APP) scams'
			] },
			{ heading: 'About Opello', body: 'Who we are and what we do.', note: 'Source: help.algbra.com, About Algbra, renamed for Opello. Algbra is swapped for Opello in the titles; Opello to confirm. Answers for these six are written; see the link.', source: 'algbra', href: '/studio/help-about-opello/', linkLabel: 'Read the answers', items: [
				'What is Opello?', 'What makes Opello different?', 'Does Opello have any fees?', 'Why is community important to us?', 'Where is Opello based?', 'From which countries can I open an account?'
			] },
			{ heading: 'Get in touch', body: 'Contacting us, complaints and closing your account.', note: 'Source: help.algbra.com, Get in touch collection (three articles). Algbra titles, Opello wording. Answers are written; see the link.', source: 'algbra', href: '/studio/help-get-in-touch/', linkLabel: 'Read the answers', items: [
				'How do I get in touch?', 'What is your complaints procedure?', 'How do I close my account?'
			] }
		],
		cta: { label: 'Back to help', href: '/studio/help/' }
	},
	{
		slug: 'help-tin',
		title: 'Finding your TIN',
		kicker: 'Help articles',
		lede: 'Which tax number to use for your country. Some countries use a national ID number instead, and some issue no tax number at all.',
		source: 'algbra',
		sourceNotes: [
			'Source: help.algbra.com, Finding your tax identification number (TIN) (Algbra article dated 26 Jun 2026). Country list reproduced as published; the Where to find it column is joined to each row as Found on.',
			'Opello to confirm: whether this list is published as is, or replaced with an Opello list that covers only the countries we accept applicants from (see the eligibility conflict on the Getting started page).',
			'Some rows say no TIN is issued. Those rows need Opello to confirm the wording for applicants from those countries.'
		],
		sections: [
			{ heading: 'Tax number by country', body: 'Find your country below. Some countries use a national ID number instead, and some issue no tax number at all. If your country does not issue a TIN, you may be asked to confirm this instead.', source: 'algbra', items: [
		  "Albania: National Identity Number (NID) (Numri i Identitetit (NID)). Found on: National ID card",
		  "Andorra: Administrative Identification Number (Número d'Identificació Administrativa (NIA)). Found on: Tax identification card (Tax & Borders Dept)",
		  "Anguilla: Tax Identification Number (TIN). Found on: IRD registration reports, official assessment documents",
		  "Argentina: Single Tax / Unified Labour Identification Code (CUIT / CUIL / CDI). Found on: AFIP taxpayer register; proofs of registration",
		  "Aruba: Person Number (Persoonsnummer). Found on: Tax returns, assessments, official notices. Note: Request from tax authority",
		  "Australia: Tax File Number (TFN). Found on: Payment summaries, ATO correspondence, superannuation statements",
		  "Austria: Tax Identification Number (Steueridentifikationsnummer (St.Nr.)). Found on: Tax assessment notices (upper-right corner, first page)",
		  "Azerbaijan: Tax Identification Number / Personal ID Number (PIN) (Vergi Mükellefi Eyniləşdirmə Nömrəsi (VÖEN)). Found on: Tax ID cards (TIN); passports / identity cards (PIN). Note: Two separate identifiers",
		  "Bahamas: No TIN issued. Found on: No TIN issued: no direct taxation laws",
		  "Bahrain: No TIN issued. Found on: No TIN: Bahrain exchanges financial information on a non-reciprocal basis",
		  "Barbados: Tax Identification Number (TIN). Found on: Tax return, tax clearance certificate, registration confirmation letter",
		  "Belgium: National Number (Numéro National (NN)). Found on: Check with your local tax authority or the relevant tax registration documents.",
		  "Belize: Tax Identification Number (TIN). Found on: GST Certificate; Business Tax Certificate. Note: Only employed individuals get a TIN",
		  "Bermuda: No TIN issued. Found on: Bermuda does not issue TINs",
		  "Brazil: Natural Persons Registry (Cadastro de Pessoas Físicas (CPF)). Found on: CPF card, national ID card, driver's licence, professional ID cards",
		  "British Virgin Islands: No TIN issued. Found on: BVI does not issue TINs",
		  "Brunei Darussalam: National Registration Identity Card Number (Nombor Kad Pengenalan (NRIC)). Found on: National identity card (Yellow/Purple/Green bordered)",
		  "Bulgaria: Unified Civil Number (UCN) (Единен граждански номер (ЕГН)). Found on: Passports, identity cards, driving licences, certificate of fiscal residence",
		  "Canada: Social Insurance Number (SIN). Found on: SIN letter (since 2014); front page of income tax return; CRA notices of assessment",
		  "Cayman Islands: No TIN issued. Found on: Cayman Islands does not issue TINs",
		  "Chile: National/Tax Unique Identity Number (Rol Único Nacional (RUN) / Rol Único Tributario (RUT)). Found on: National ID card, driver's licence, contracts, invoices",
		  "China: Tax Identification Number (TIN) (税务识别号). Found on: National ID card (for Chinese citizens); Tax Paid Certificates (passport holders)",
		  "Colombia: Tax Identification Number (Número de Identificación Tributaria (NIT)). Found on: Tax Registry Form (RUT) - box 5; letterheads, invoices, tax returns",
		  "Cook Islands: Revenue Management Division Number (RMD Number). Found on: Check with your local tax authority or the relevant tax registration documents.",
		  "Costa Rica: Physical ID / Foreigner ID / Special Tax ID (Cédula / DIMEX / NITE). Found on: National ID cards (residents); DIMEX card (foreigners); tax administration (NITE)",
		  "Croatia: Personal Identification Number (Osobni identifikacijski broj (OIB)). Found on: Identity cards, passports",
		  "Curaçao: Person Number (Persoonsnummer). Found on: Tax returns, tax assessments, official tax notices",
		  "Cyprus: Tax Identification Number (Αριθμός Εγγραφής Φορολογουμένου (ΑΦΤ)). Found on: Income Tax self-assessment documents",
		  "Czech Republic: Personal/Birth Number (Rodné číslo / DIČ). Found on: National ID cards, passports",
		  "Denmark: Danish Civil Registration Number (CPR-nummer). Found on: Passports, driver's licences, health/social security cards",
		  "Dominica: Tax Identification Number (TIN). Found on: Tax/customs documents; driver's licence",
		  "Ecuador: Unique Contributor Registry (Registro Único de Contribuyentes (RUC)). Found on: Wide range of official documents: tax forms, invoices, payrolls, import permits, etc.",
		  "Estonia: Personal Identification Code (Isikukood). Found on: Passports, identity cards",
		  "Faroe Islands: Faroese P Number / Identification Number (P-tal / Identifikationsnummer). Found on: Official ID cards, health cards, public authority communications",
		  "Finland: Social Security / Personal Identity Number (Henkilötunnus (HETU)). Found on: Identity cards, passports, driving licences",
		  "France: Tax Reference Number (Numéro fiscal de référence (Numéro SPI)). Found on: Pre-filled income tax return (déclaration pré-remplie); tax assessment notices",
		  "Georgia: Tax Identification Number (საგადასახადო საიდენტიფიკაციო ნომერი). Found on: Tax returns, tax invoices, transportation waybills, cash register receipts",
		  "Germany: Tax Identification Number (Steueridentifikationsnummer (IdNr)). Found on: Written notice from Federal Central Tax Office; tax assessment notices",
		  "Ghana: Tax Identification Number / Ghana Card PIN (GRA TIN / NIA Ghanacard PIN). Found on: Tax documents / TIN certificate (GRA); Ghana Card (NIA)",
		  "Gibraltar: Taxpayer Reference Number. Found on: Tax return forms, assessments, tax code advice statements",
		  "Greece: Taxpayer Identification Number (Αριθμός Φορολογικού Μητρώου (ΑΦΜ)). Found on: Certification of issued TIN; tax completeness/refund status documents",
		  "Greenland: Civil Registration Number (CPR-nummer). Found on: Passports, residence certificates, driving licences",
		  "Grenada: Tax Identification Number (TIN). Found on: Tax remittance forms; statements issued to taxpayers",
		  "Guernsey: Social Insurance / National Insurance Number (Social Insurance Number / NINO). Found on: Social Security/Insurance card; employer pay slips; tax correspondence",
		  "Hong Kong: Hong Kong Identity Card Number (香港身分證 (HKID)). Found on: Hong Kong Identity Card (HKID)",
		  "Hungary: Tax Identification Number (Adóazonosító jel). Found on: Hungarian TIN card (not shown on passport/ID card)",
		  "Iceland: Icelandic Identification Number (Kennitala). Found on: Driving licences, debit cards, bank statements, tax returns",
		  "India: Permanent Account Number (PAN). Found on: PAN card or PAN allotment letter; Indian Income Tax Return",
		  "Indonesia: Taxpayer Registration Number (Nomor Pokok Wajib Pajak (NPWP)). Found on: NPWP card",
		  "Ireland: Personal Public Service Number (Uimhir Phearsanta Seirbhíse Poiblí (PPS)). Found on: Tax return forms",
		  "Isle of Man: Tax Reference Number / National Insurance Number (NINO). Found on: Official documents / letters from Income Tax Division; National Insurance Number Card",
		  "Israel: Identity / Tax ID Number (מספר זהות). Found on: National identity card (תעודת זהות)",
		  "Italy: Fiscal Code (Codice fiscale). Found on: Health card/tax card (tessera sanitaria); TIN card; Electronic Identity Card",
		  "Japan: Individual Number (My Number) (個人番号 (My Number)). Found on: My Number notification card",
		  "Jersey: Jersey Social Security Number. Found on: Registration card or health card",
		  "Kazakhstan: Individual Identification Number (IIN) (Жеке сәйкестендіру нөмірі (ЖСН)). Found on: Identity card (bottom-right of photo)",
		  "South Korea: Resident Registration Number (주민등록번호). Found on: Resident registration card; passport",
		  "Kuwait: Civil Identification Number (الرقم المدني). Found on: Civil ID card",
		  "Latvia: Personal Identity Number (Personas kods). Found on: Passport, driving licence, identity card",
		  "Lebanon: Tax Identification Number (رقم التعريف الضريبي). Found on: Tax identification card; certificates from Revenue Directorate",
		  "Liechtenstein: Person Identification Number (Personenidentifikationsnummer (PEID)). Found on: Residence permits for foreigners; national ID cards (in progress)",
		  "Lithuania: Unique Personal Number (Asmens kodas). Found on: All identity documents: passports, ID cards, driving licences, student IDs",
		  "Luxembourg: National Identification Number (Numéro d'identification national). Found on: Social security card",
		  "Macao: Tax Identification Number (税务识别号码). Found on: Tax purpose documents; Macao ID card (for residents)",
		  "Malaysia: Income Tax Number / National Registration IC (Nombor Cukai Pendapatan (ITN) / NRIC). Found on: Malaysia Passport (2nd page for NRIC); tax documents",
		  "Maldives: Tax Identification Number (TIN). Found on: Registration notification; registration certificate; MIRAConnect profile",
		  "Malta: Tax Identification Number (TIN). Found on: Passports, identity cards, tax returns",
		  "Marshall Islands: Employee / Employer Identification Number (Employee Identification Number / Employer EIN). Found on: Social security cards, passports, driver's licences, official company documents",
		  "Mauritius: Tax Account Number (TAN). Found on: Tax returns, letters, assessment notices, tax residence certificates",
		  "Mexico: Federal Taxpayer Registry Code (Registro Federal de Contribuyentes (RFC)). Found on: Tax identification card; Federal Taxpayer Registry",
		  "Monaco: No TIN issued. Found on: Monaco does not issue TINs",
		  "Montserrat: No TIN issued. Found on: Montserrat does not issue TINs",
		  "Nauru: Tax Identification Number (TIN). Found on: Tax returns, withholding forms, receipts, bank statements, official TIN indexes",
		  "Netherlands: Citizen Service Number / Tax ID (Persoonsnummer / Burgerservicenummer (BSN)). Found on: Passport, driving licence, identity card",
		  "New Zealand: Inland Revenue Department Number (IRD Number). Found on: Tax returns, IRD letters, payslips (for employees)",
		  "Norway: National Identity Number / D-number (Fødselsnummer / D-nummer). Found on: Norwegian passports; driving licences; official authority letters",
		  "Oman: No TIN issued. Found on: This country does not issue a TIN.",
		  "Pakistan: CNIC Number (Computerized National Identity Card (CNIC)). Found on: National Identity Card",
		  "Panama: Single Taxpayer Registry (Registro Único de Contribuyente (RUC)). Found on: Personal identity card or birth certificate",
		  "Peru: Single Contributor Registry (Registro Único de Contribuyentes (RUC)). Found on: Registered Information Voucher (CIR) from SUNAT",
		  "Poland: PESEL (individuals) / Tax ID Number (NIP) (PESEL / NIP). Found on: PESEL: passport, ID card. NIP: official form from local tax office (NIP4)",
		  "Portugal: Tax Identification Number (Número de Identificação Fiscal (NIF)). Found on: Citizen card (Cartão de Cidadão); taxpayer card",
		  "Qatar: Tax Identification Number (الرقم الضريبي). Found on: TAX/Zakat/VAT certificates; GTA correspondence. Note: Only for taxpayers with taxable activity; others use PIN or residence permit number",
		  "Romania: Personal Identification Number / Tax ID (Cod Numeric Personal (CNP) / Cod de înregistrare fiscală). Found on: Passports, identity cards, driving licences, tax certificates",
		  "Russia: Taxpayer Personal Identification Number (INN) (Идентификационный номер налогоплательщика (ИНН)). Found on: Certificate of registration as taxpayer",
		  "Saint Kitts and Nevis: Tax Identification Number (TIN). Found on: Driver's licence; tax/customs documents",
		  "Saint Lucia: Tax Identification Number (TIN). Found on: Tax and customs documents only",
		  "Saint Vincent and the Grenadines: Tax Identification Number (TIN). Found on: National Driver's Licence ID; Inland Revenue Department receipts",
		  "Samoa: Tax Identification Number (TIN). Found on: Business Licence Certificates; invoices/receipts; Ministry notices",
		  "San Marino: Social Security Number (Numero di sicurezza sociale (SSI)). Found on: Identity card (front, next to photo); Carta Azzurra health card; tax residency certificates",
		  "Saudi Arabia: Tax Identification Number (رقم التعريف الضريبي (TIN)). Found on: TAX/Zakat/excise/VAT certificates; GAZT correspondence and documents. Note: National ID or residency ID used if no TIN",
		  "Seychelles: Tax Identification Number (TIN). Found on: Any document produced by Seychelles Revenue Commission. Note: Employees not issued TINs; only employers and self-employed landlords",
		  "Singapore: National Registration Identity Card / Foreign Identification Number (NRIC / FIN). Found on: NRIC (Singapore citizen/PR); Work Pass or Immigration Pass (foreigners)",
		  "Sint Maarten: Central Registration Information Tax Number (CRIB (Centraal Registratie Informatie Belastingplichtige)). Found on: Front page of tax return; all tax type assessments. Note: Not on ID card or passport",
		  "Slovakia: Tax Identification Number / Birth Identification Number (DIČ / Rodné číslo). Found on: Financial admin confirmation (TIN); ID cards/passports (Birth ID). Note: Birth ID has 9 or 10 digits depending on birth date",
		  "Slovenia: Tax Number (Davčna številka). Found on: Tax register entry certificate; certificate of residence. Note: Not on official identity documents",
		  "South Africa: Tax ID / Identity Number / Passport Number (TIN / South African ID / Passport). Found on: Tax returns (IT12/IT14), assessments (IT34), SARS correspondence; ID cards/passports. Note: Three TIN types; multiple passport formats",
		  "Spain: National ID / Foreigner Identification Number (DNI / NIE (Número de Identificación de Extranjero)). Found on: Personal/Electronic ID cards; Foreigners' Resident Cards; Tax ID Cards; driver's licences",
		  "Sweden: Personal Identity Number / Co-ordination Number (Personnummer / Samordningsnummer). Found on: Passports, driving licences, identity cards",
		  "Switzerland: Old-Age and Survivors' Insurance Number (AHV-Nummer (OASI)). Found on: Swiss health insurance card; insurance certificates",
		  "Trinidad and Tobago: BIR File Number (Board of Inland Revenue (BIR) File Number). Found on: BIR correspondence: statements of account, payment receipts, assessment notices, audit statements",
		  "Turkey: National ID Number (nationals) / Tax ID (non-nationals) (T.C. Kimlik Numarası / Vergi Kimlik Numarası). Found on: National identity cards/passports; TIN cards; financial statements/declarations",
		  "Turks and Caicos Islands: No TIN issued. Found on: This country does not issue a TIN.",
		  "United Arab Emirates: No TIN issued. Found on: UAE does not issue TINs",
		  "United Kingdom: Unique Taxpayer Reference / National Insurance Number (UTR / National Insurance Number (NINO)). Found on: Tax return (SA100/CT600); HMRC coding notices; NI card; payslips",
		  "United States: Social Security / Individual Taxpayer ID / Employer ID (SSN / ITIN / EIN). Found on: Tax returns/IRS forms; Social Security card (SSN)",
		  "Uruguay: Single Taxpayer Registry / ID Card / Foreigner's ID (RUT / Cédula / NIE). Found on: Identity cards (ID card number); official tax admin documents (RUT/NIE). Note: Three identifier types",
		  "Vanuatu: Tax Identification Number (TIN). Found on: Business Licence Certificates; VAT Certificates; driver's licence; Tax Clearance Certificates"
		] }
		],
		cta: { label: 'Back to getting started', href: '/studio/help-getting-started/' }
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
			{ heading: 'Finding your tax identification number (TIN)', body: 'Your tax number depends on the country that issued it. Some countries use a national ID number instead, and some issue no tax number at all. The country list is on its own page.', note: 'Source: help.algbra.com, Finding your TIN (26 Jun 2026). The country list is Algbra wording and needs Opello sign-off (see the TIN page).', source: 'algbra', href: '/studio/help-tin/', linkLabel: 'See the country list' },
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
			{ heading: 'Ethical Saver Cube questions', body: 'Sixteen Algbra articles cover Ethical Saver Cubes: what they are, how they work, profit rates, early withdrawal, tax, Sharia compliance and whether savings are protected. They are written up on their own page, pending compliance sign-off.', note: 'Source: help.algbra.com, Ethical Saver Cubes collection (16 articles found by search). Written for Opello, not final until signed off.', source: 'algbra', href: '/studio/help-ethical-saver/', linkLabel: 'Read the answers' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'help-ethical-saver',
		title: 'Ethical Saver help',
		kicker: 'Help articles',
		lede: 'Sixteen answers on Ethical Saver Cubes, taken from the Algbra help centre and written for Opello. Not for publication until compliance has signed off the savings, protection and Sharia wording.',
		source: 'algbra',
		sections: [
			{ heading: 'What are Ethical Saver Cubes?', body: 'Ethical Saver Cubes are a savings feature in the Opello app. You earn a fixed, agreed amount of profit over a set period, and your savings support environmental and social projects. Your money is linked to a sustainable finance portfolio run by our partner bank, and we show you the estimated CO\u2082 emissions avoided and clean water generated.', note: 'Source: help.algbra.com, What are Ethical Saver Cubes (Algbra wording, adapted, dated 1 April 2026). "Guaranteed" and "Sharia-compliant" need compliance sign-off. Partner named by category only. Impact figures are the partner\'s.', source: 'algbra' },
			{ heading: 'How do Ethical Saver Cubes work?', body: 'Choose how much to save and a fixed term, such as 3, 6 or 12 months. Your expected profit is shown before you confirm. Your money is locked for the term, and at the end you get your savings plus the agreed profit. The return is fixed in advance, so there are no market ups and downs.', note: 'Source: help.algbra.com, How do Ethical Saver Cubes work (Algbra wording, adapted). Term options to confirm for Opello.', source: 'algbra' },
			{ heading: 'Is there a minimum deposit?', body: 'There is no minimum deposit at the moment. This may change in future.', note: 'Source: help.algbra.com, minimum deposit. Confirm for Opello before publishing.', source: 'algbra' },
			{ heading: 'Can I withdraw my money early?', body: 'No. Ethical Saver Cubes are fixed-term savings, so you cannot withdraw early, and you cannot add money once the Cube is created. You can open another Ethical Saver Cube if you want to save more. Only save what you can leave untouched until the Cube matures.', note: 'Source: help.algbra.com, Can I withdraw my money early (Algbra wording, adapted). This answers the early-withdrawal question the Ethical Saver page left open, so Opello must confirm it before publishing.', source: 'algbra' },
			{ heading: 'How are Ethical Saver Cubes Sharia-compliant?', body: 'They are built on Murabaha, a Sharia-compliant cost-plus-profit sale. Your profit comes from a profit rate agreed up front on a sale, not from interest. Your money is never used to finance sectors considered harmful, such as alcohol, gambling, tobacco and arms.', note: 'Source: help.algbra.com, How are Ethical Saver Cubes Sharia-compliant (Algbra wording, adapted). Needs sign-off from compliance and a Sharia adviser before publishing.', source: 'algbra' },
			{ heading: 'What is the EPR?', body: 'The Expected Profit Rate (EPR) is the percentage return you can expect over your chosen term. It is fixed and agreed up front, so you know exactly what you will get at maturity.', note: 'Source: help.algbra.com, What is EPR (Algbra wording, adapted). The EPR footnote on the Personal page is still a placeholder.', source: 'algbra' },
			{ heading: 'Are my savings protected?', body: 'While your deposit sits with our partner bank, it is placed with a UK bank covered by the Financial Services Compensation Scheme (FSCS), up to \u00a3120,000 across all your active Ethical Saver Cubes. Once a Cube matures and the money moves into your Opello account, FSCS protection no longer applies. Instead your money is safeguarded: kept separate from company funds and returned to you if anything happens to Opello, with no upper limit.', note: 'Source: help.algbra.com, Are my savings protected (Algbra wording, adapted). FSCS, safeguarding and "no upper limit" wording need compliance sign-off. Bank named by category only.', source: 'algbra' },
			{ heading: 'Can I open more than one?', body: 'Yes. You can open several Cubes with different terms, up to a total of \u00a3120,000 across all active Ethical Saver Cubes.', note: 'Source: help.algbra.com, Can I open more than one Ethical Saver Cube. The \u00a3120,000 limit needs Opello confirmation.', source: 'algbra' },
			{ heading: 'What happens when my Cube matures?', body: 'At maturity we offer to put your money into a new Ethical Saver Cube. If you do not want that, your deposit and profit go back to your Opello account, where you can withdraw it, spend it or save it in a new Cube.', note: 'Source: help.algbra.com, What happens when my Cube matures (Algbra wording, adapted).', source: 'algbra' },
			{ heading: 'Are the profits guaranteed?', body: 'Yes. The Expected Profit Rate is agreed in advance and fixed once the Cube is opened.', note: 'Source: help.algbra.com, Are the profits guaranteed. What "guaranteed" covers needs checking against the Opello terms and compliance sign-off before use.', source: 'algbra' },
			{ heading: 'How do I create an Ethical Saver Cube?', body: 'In the app, tap Cubes, then the plus sign. Choose Ethical Saver Cube, pick your term and enter the amount. You will see the expected profit before you confirm.', note: 'Source: help.algbra.com, How do I create an Ethical Savings Cube (Algbra steps, adapted). Opello app screen names to confirm.', source: 'algbra' },
			{ heading: 'Can I close my account while I have Cubes?', body: 'No. You need to wait until all your active Cubes have matured and the money is back in your account balance.', note: 'Source: help.algbra.com, Can I close my account whilst I have active Ethical Saver Cubes (Algbra wording, adapted). Confirm for Opello.', source: 'algbra' },
			{ heading: 'Do I need to pay tax on my profit?', body: 'Your profit may be taxable, depending on your circumstances. It counts towards your Personal Savings Allowance. Opello does not take tax off automatically, so you may need to report it to HMRC.', note: 'Source: help.algbra.com, Do I need to pay tax on my profits (Algbra wording, adapted). Needs compliance sign-off and a check of current HMRC rules.', source: 'algbra' },
			{ heading: 'What makes Ethical Saver Cubes ethical?', body: 'Our partner bank uses your funds to buy a permitted commodity, such as precious metals, and sells it back at an agreed price that includes a profit margin. That margin is your return, and there is no interest. While your funds are held, they support a portfolio of sustainable projects and companies, and they are never invested in industries considered harmful, such as alcohol, gambling, tobacco or arms.', note: 'Source: help.algbra.com, What makes Ethical Saver Cubes ethical (Algbra wording, adapted). Ethical, portfolio and commodity wording needs compliance sign-off and evidence.', source: 'algbra' },
			{ heading: 'How is the impact calculated?', body: 'The impact figures come from the partner\'s audited annual sustainable finance impact report. They show the average CO\u2082 avoided and clean water generated per unit invested. We apply those averages to your deposit, counting only the part of the year that matches your term, using the previous year\'s data. We may show the CO\u2082 figure as everyday comparisons, such as phones charged or flights avoided, based on the US Environmental Protection Agency calculator.', note: 'Source: help.algbra.com, How do you calculate the impact from my Ethical Saver Cubes (Algbra wording, adapted). Opello has not verified these figures. Impact claims need evidence and compliance sign-off.', source: 'algbra' },
			{ heading: 'Why is it called EPR if my return is fixed?', body: 'The term is used for regulatory and technical reasons. In practice, your profit amount is agreed when you create the Cube, your final return does not move with the markets, and if you keep the Cube until maturity you receive the full agreed profit.', note: 'Source: help.algbra.com, Why is it called Expected Profit Rate (EPR) if my return is fixed (Algbra wording, adapted).', source: 'algbra' }
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
		slug: 'help-get-in-touch',
		title: 'Get in touch',
		kicker: 'Help articles',
		lede: 'Answers to the Get in touch questions, taken from the Algbra help centre and written for Opello. Every contact detail is a placeholder until Opello sets up its own channels.',
		source: 'algbra',
		sections: [
			{ heading: 'How do I get in touch?', body: 'For general enquiries, email [placeholder: Opello general enquiries email]. To speak to our Support team, tap the profile icon at the top left of your Home screen in the Opello app and choose Support. There you can chat with us live, or email [placeholder: Opello support email]. If you have lost your card or see suspicious activity and cannot get into the app, email [placeholder: Opello emergency email] or call [placeholder: Opello emergency phone number] straight away.', note: 'Source: help.algbra.com, How do I get in touch (Algbra structure, adapted). Algbra email addresses, emergency line and app screen names are not reused. All contact details and the emergency route need Opello sign-off.', source: 'algbra', href: '/studio/contact/', linkLabel: 'See contact details' },
			{ heading: 'What is your complaints procedure?', body: 'We want to hear when we have not met your expectations. Tell our team through the in-app chat, or email [placeholder: Opello complaints email]. Please include your first name and surname, the phone number and email address on your account, what the issue is, when it started, and how you would like us to put it right. We will acknowledge your complaint and look into it as quickly as we can. This usually takes a few days, but it can take up to 15 working days, and in extraordinary cases up to 35 working days, to send our final response. If we need more than 15 working days, we will tell you in advance. If you are not happy with our final response, you can escalate your complaint to the Financial Ombudsman Service (FOS) through their website or by calling 0800 023 4567.', note: 'Source: help.algbra.com, What is your complaints procedure (Algbra wording, adapted). Timescales, FOS eligibility and the complaints mailbox need compliance sign-off. Complaints mailbox is a placeholder.', source: 'algbra' },
			{ heading: 'How do I close my account?', body: 'You can close your account by speaking to our Support team in the in-app chat. Logging in and telling us there lets us check that it is you asking. You will need to bring your balance to zero first. At the moment, once an account is closed we cannot reopen it or offer you a new account later. If something has gone wrong, please tell us before you decide, so we have a chance to put it right.', note: 'Source: help.algbra.com, How do I close my account (Algbra wording, adapted). The no-reopening rule and the balance requirement need Opello confirmation.', source: 'algbra', href: '/studio/contact/', linkLabel: 'See contact details' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'blog',
		title: 'Blog',
		kicker: 'About',
		lede: 'Stories from the Opello team and the community, on money, sustainability and everyday spending. [Placeholder: first posts, in Opello wording.]',
		source: 'placeholder',
		sourceNotes: [
			'Topics are article titles from algbra.com/news/category/blog. They are subjects to consider for Opello, not copy. No Algbra post is reused.',
			'Algbra posts about accounts for non-UK residents are left out until the eligibility question is settled (UK-only in Algbra help, non-UK residents in our homepage banner).',
			'Every Opello post needs Opello sign-off before it publishes. Not for publication until approved.'
		],
		sections: [
			{ heading: 'Read the insights', body: 'The explainers already written for Opello.', source: 'algbra', links: [
				{ label: 'The bright side of dark mode', href: '/studio/dark-mode/' },
				{ label: 'Seven principles for implementing the Consumer Duty', href: '/studio/consumer-duty/' },
				{ label: 'The pros and cons of a cashless society', href: '/studio/cashless-society/' },
				{ label: 'A Green Break: how to holiday sustainably', href: '/studio/green-break/' },
				{ label: 'Money and mental health: 5 free mood boosters', href: '/studio/money-and-mental-health/' },
				{ label: 'What is World Wildlife Day, and why does it matter?', href: '/studio/world-wildlife-day/' },
				{ label: 'What are chargebacks, and when can you claim?', href: '/studio/chargebacks/' },
				{ label: 'An intro to carbon offsetting', href: '/studio/carbon-offsetting/' },
				{ label: 'What are virtual cards, and how do they work?', href: '/studio/virtual-cards/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' }
			] },
			{ heading: 'First Opello posts', body: '[Placeholder: the first two or three posts from the Opello team, once written and approved.]', source: 'placeholder' }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	{
		slug: 'chargebacks',
		title: 'What are chargebacks, and when can you claim?',
		kicker: 'Insights',
		lede: 'If a card payment goes wrong, you can often get your money back. Here is how a chargeback works and when it can help.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/what-are-chargebacks-and-when-you-claim (Algbra Insights article, 6 January 2023). Wording adapted for Opello. Algbra\'s article describes its own dispute team, so the Opello process is marked for confirmation.',
			'The card scheme rules are named by category only ("card scheme rules"). Opello to confirm its scheme and rule set before publishing.',
			'Timescales, the evidence list and how Opello hands a claim to the card issuer need Opello and compliance sign-off. Not for publication until approved.'
		],
		sections: [
			{ heading: 'What a chargeback is', body: 'A chargeback is the process your card provider runs after you dispute a card payment. Your provider contacts the shop or merchant with the evidence you have sent, and if the claim succeeds, the payment amount goes back to your card.', note: 'Source: algbra.com chargeback article, "Chargebacks, the beginner\'s guide". Wording adapted for Opello.', source: 'algbra' },
			{ heading: 'When you can raise one', body: 'You can raise a chargeback in situations such as these, and in many others:', note: 'Source: algbra.com chargeback article. The list is Algbra\'s example list. Check it against the rules that apply to Opello cards.', source: 'algbra', items: [
				'The goods or services you paid for were not provided',
				'The goods or services are damaged or not as described',
				'An ATM did not dispense the funds',
				'The merchant charged you twice',
				'The merchant kept charging you for a subscription you cancelled'
			] },
			{ heading: 'Try the shop first', body: 'Start by asking the shop or merchant for a refund. If they will not help, contact us and we will look at raising a chargeback for you.', note: 'Source: algbra.com chargeback article ("contact the shop or merchant first"). The Opello route after that is a placeholder until the chargeback process is confirmed.', source: 'algbra' },
			{ heading: 'What to send us', body: 'The more evidence you have, the better. If you do not have everything, still get in touch: we will tell you what is needed.', note: 'Source: algbra.com chargeback article. Evidence list (proof of purchase, description of the goods or service, photos, records of contact with the merchant) is Algbra wording and needs Opello confirmation.', source: 'algbra', items: [
				'Evidence that you have tried to sort it out with the merchant',
				'A description of the goods or service you ordered',
				'Proof of purchase, such as a receipt or invoice',
				'Evidence that the goods were damaged or not as described, such as a photo'
			] },
			{ heading: 'How long it takes', body: '[Placeholder: how long a chargeback takes and what you will hear from us, to be confirmed by Opello.]', note: 'Placeholder. Algbra does not give a timescale in this article.', source: 'placeholder' }
		],
		cta: { label: 'Get in touch', href: '/studio/contact/' }
	},
	{
		slug: 'virtual-cards',
		title: 'What are virtual cards, and how do they work?',
		kicker: 'Insights',
		lede: 'A virtual card is a debit card that lives in your phone. Here is what it is, where you can use one, and how it compares with a physical card.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/what-are-virtual-cards-and-how-do-they-work (Algbra Insights article, 18 April 2023). Wording adapted for Opello. Algbra\'s cashback, carbon and biodegradable card lines are left out.',
			'Whether Opello offers virtual cards, single-use cards and which phone wallets they work with are placeholders until Opello confirms them. Not for publication until approved.',
			'Security claims (cannot be skimmed, freeze in the app) need Opello confirmation and compliance sign-off before publishing.'
		],
		sections: [
			{ heading: 'Virtual, digital and disposable', body: 'There are three kinds of electronic card. A virtual card is a debit card that lives in your phone, with its own card number and expiry date. A digital card is a copy of your physical card, using the same details. A disposable card is a single-use virtual card, which cannot be used again once it has been used to pay.', note: 'Source: algbra.com virtual cards article, "Virtual, digital and disposable cards". Adapted for Opello. Opello products are a placeholder until confirmed.', source: 'algbra' },
			{ heading: 'Where you can use one', body: 'You can use a virtual card to pay online, in shops and in apps. For shops, add the card to your phone\'s wallet app, turn on the phone\'s contactless setting, and tap to pay. [Placeholder: the phone wallets Opello cards work with.]', note: 'Source: algbra.com virtual cards article, "Where can I use a virtual card?" Wallet names are left out here. Placeholder until Opello confirms its wallet list.', source: 'algbra' },
			{ heading: 'Why people use them', body: 'Your card details are kept in your app rather than on a plastic card. You cannot leave a virtual card behind, and it is harder for someone to copy the details from a card reader. You can also freeze a card in the app if you think someone has your details.', note: 'Source: algbra.com virtual cards article, "How easy are virtual cards to use?" and "Instantly block and unblock". Freeze-in-app and safety claims need Opello confirmation.', source: 'algbra', items: [
				'Start using it straight away, with no card to wait for',
				'Hard to lose, because it lives in your app',
				'Hard to copy, because a card reader cannot read it',
				'Freeze the card in the app, without waiting for a call'
			] },
			{ heading: 'Single-use cards', body: 'Disposable cards are useful for a website you have not used before, or for a sign-up you do not want to commit to. [Placeholder: whether Opello offers single-use cards, and how to create one.]', note: 'Source: algbra.com virtual cards article, "Can I only use my virtual card one time?". Opello availability is a placeholder.', source: 'placeholder' },
			{ heading: 'Getting a virtual card', body: '[Placeholder: how to get a virtual card in the Opello app, and whether it is offered on every account.]', note: 'Placeholder. Algbra\'s steps are for its own app, so the Opello steps need checking in the app before publishing.', source: 'placeholder' }
		],
		cta: { label: 'See cards', href: '/studio/cards/' }
	},
	{
		slug: 'green-banking',
		title: 'What is green banking, and why does it matter?',
		kicker: 'Insights',
		lede: 'Green banking looks at where your money goes, not just where it sits. Here is what it means and why it matters.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/what-is-green-banking-and-why-does-it-matter (Algbra Insights article, 26 June 2023). Wording adapted for Opello.',
			'Left out until each figure is checked against its original source: Algbra\'s statistics (household emissions, pension comparison, bank investment totals, climate costs, the 42% greenwashing estimate) and its third-party directory link.',
			'Opello\'s own green claims (how we invest, lend or offset) are placeholders until Opello confirms them. Not for publication until approved.'
		],
		sections: [
			{ heading: 'What green banking is', body: 'Green banking is a way of banking that focuses on lowering environmental risk and having a positive effect on the planet, while still handling your day-to-day money. It can mean investing in renewable energy rather than harmful industries, offering green loans and helping people cut their carbon footprint.', note: 'Source: algbra.com green banking article, "What is green banking?". Adapted for Opello.', source: 'algbra' },
			{ heading: 'Why it matters', body: 'Most of us already think about sustainability in what we buy and eat. Money is part of that too. Banks decide what to lend to and what to invest in, and most people never get a say in it. Where you bank can make a difference.', note: 'Source: algbra.com green banking article, "Why is green banking important?" and "What high street banks do with your money". Adapted; the statistics are left out.', source: 'algbra' },
			{ heading: 'Climate and social goals together', body: 'Some green banks look at climate and social issues as one problem. The people who contribute least to climate change often feel its effects first, so helping low-income communities is part of the same job.', note: 'Source: algbra.com green banking article, "What is green banking?". Adapted for Opello.', source: 'algbra', items: [
				'Lower environmental risk in what the bank funds',
				'Invest in renewable energy instead of harmful industries',
				'Help people reduce their carbon footprint',
				'Look at climate and social impact together'
			] },
			{ heading: 'How Opello fits in', body: '[Placeholder: what Opello does with customer money and how it supports sustainability, in Opello wording. Needs Opello confirmation before publishing.]', note: 'Placeholder. Opello sustainability claims need Opello confirmation and compliance sign-off.', source: 'placeholder' },
			{ heading: 'Read next', body: 'See how Opello tracks the impact of your spending, and how Ethical Saver works.', source: 'placeholder', links: [
				{ label: 'Planet Impact', href: '/studio/carbon-tracking/' },
				{ label: 'Ethical Saver', href: '/studio/ethical-savings/' },
				{ label: 'An intro to carbon offsetting', href: '/studio/carbon-offsetting/' }
			] }
		],
		cta: { label: 'Read the insights', href: '/studio/news/' }
	},
	{
		slug: 'carbon-offsetting',
		title: 'An intro to carbon offsetting',
		kicker: 'Insights',
		lede: 'Carbon offsetting is one way to pay for the emissions you cannot avoid. Here is what it means, how it works, and where it can fall short.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/an-intro-to-carbon-offsetting (Algbra Insights article, 30 January 2023). Wording adapted for Opello. Project examples, the rating scheme and the calculation partner are left out, because they are Algbra\'s own.',
			'Claims about Opello\'s own projects, quality checks and calculation method are flagged. Opello to confirm its project partners and verification before publishing.',
			'Not for publication until approved.'
		],
		sections: [
			{ heading: 'What carbon offsetting is', body: 'Carbon offsetting looks to avoid, reduce or remove the impact of carbon dioxide equivalent (CO2e) emissions that you cannot avoid producing. It does this through verified projects, such as reforestation, energy efficiency or renewable energy.', note: 'Source: algbra.com carbon offsetting article, "Okay, what is carbon offsetting?". Adapted for Opello.', source: 'algbra' },
			{ heading: 'An example', body: 'Say you have to fly for work. The journey creates CO2e emissions, so you buy a carbon credit that pays for an equal amount of emissions to be avoided or removed somewhere else. The credit does not stop the flight from producing emissions. It pays for an equal amount to be cut elsewhere.', note: 'Source: algbra.com carbon offsetting article, the flight example. Reworded so the offset is not described as making the flight carbon neutral.', source: 'algbra' },
			{ heading: 'Two kinds of project', body: 'Carbon offsetting projects usually fall into two groups. Avoidance projects stop greenhouse gases being released in the first place. Removal projects capture carbon that is already in the air and store it.', note: 'Source: algbra.com carbon offsetting article, "The types of carbon offsetting, explained". Adapted for Opello.', source: 'algbra', items: [
				'Avoidance: for example, a solar farm that creates no emissions',
				'Removal: for example, planting trees, or capturing carbon and storing it',
				'Both can be technology-based or nature-based'
			] },
			{ heading: 'Why quality matters', body: 'Not every project is high quality. Cheaper projects are sometimes unverified, and they may not give measurable evidence that carbon has really been removed or avoided. Buying those credits can be greenwashing. Offsetting works best when it sits alongside cutting emissions at source.', note: 'Source: algbra.com carbon offsetting article, "Isn\'t that greenwashing?" and "How are carbon offsetting projects rated?". Adapted for Opello.', source: 'algbra' },
			{ heading: 'How Opello uses it', body: 'Planet Impact in the Opello app works out the emissions from your card spending, so you can see your footprint and choose what to offset. Opello only lists verified projects.', note: 'Claim to confirm: Opello uses Planet Impact to show footprint and offset it, and that only verified projects are listed. Project partners and verification route are placeholders. Not for publication until approved.', source: 'placeholder', href: '/studio/carbon-tracking/', linkLabel: 'See Planet Impact' },
			{ heading: 'How emissions are worked out', body: '[Placeholder: the method and data source Opello uses to estimate the emissions for each transaction, described in plain English. Algbra\'s calculation partner is not named here.]', note: 'Placeholder. Opello to confirm the method and what it says about accuracy. Do not publish a figure without a source.', source: 'placeholder' }
		],
		cta: { label: 'See Planet Impact', href: '/studio/carbon-tracking/' }
	},
	{
		slug: 'green-break',
		title: 'A Green Break: how to holiday sustainably',
		kicker: 'Insights',
		lede: 'It is hard to travel in a completely green way, but a few conscious choices can let you enjoy a break while limiting the harm. Here are five tips for greener travel.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/a-green-break-how-to-holiday-sustainably (Algbra blog article, 1 July 2022). Wording adapted for Opello. Algbra product references (track emissions in the Algbra app, sign up for early access) are left out.',
			'The opening examples (5 million displaced in Sylhet, Bangladesh; 5,000-acre wildfire in New Mexico, California; 32°C in Suffolk) are Algbra figures and need checking against their original source before publishing.',
			'The CO2 figures (371.4kg for a return London to Marrakech; 685kg for a return London to Dubai) and the World Tourism Organisation $5 of $100 statistic are Algbra figures and need checking against their original source before publishing.',
			'The named hotels and lodges (Nayara Springs, Wilderness Safaris Bisate Lodge, Pousada Literaria de Paraty) are Algbra examples, not Opello recommendations. Opello to confirm its own examples or leave them out. Not for publication until approved.'
		],
		sections: [
			{ heading: 'Why it matters', body: 'As we see more unpredictable and extreme weather around the world, the question is how we can enjoy our breaks while contributing as little as possible to climate damage. It is difficult to travel in a completely green way, but more conscious decisions can let us enjoy memorable resets while limiting their negative effects.', note: 'Source: algbra.com article, opening paragraphs. The climate examples are Algbra figures and need checking against their original source.', source: 'algbra' },
			{ heading: 'Stay local', body: 'Staying local does not mean giving up good views or a good time. In the UK there are sights on our doorstep, and if you live elsewhere, try the overlooked gems a few cities away or destinations within a train ride from home. Even short-haul flights over longer journeys mean a much smaller share of carbon emissions. A number of online tools, including the ICAO calculator endorsed by the UN, can help you work out your carbon footprint.', note: 'Source: algbra.com article, "Stay local". The UK place examples are kept as Algbra published them. The CO2 figures are left out as they need checking. ICAO is a public UN body, not a vendor.', source: 'algbra' },
			{ heading: 'Eco-conscious accommodation', body: 'If you do travel further, some research into environmentally friendly places to stay can go a long way. Hotel developments can disrupt the local ecosystem, but some go to great lengths to minimise the disruption or even build back natural areas.', note: 'Source: algbra.com article, "Eco-conscious Accommodation". The named hotels and lodges are Algbra examples, not Opello recommendations.', source: 'algbra' },
			{ heading: 'Limit plastic waste', body: 'Plastic often ends up in nature, poisoning the environment and directly killing wildlife. Of all plastic waste, single-use bottles may be the most harmful. There is an abundance of reusable water bottles for every kind of traveller.', note: 'Source: algbra.com article, "Limit plastic waste". Adapted for Opello.', source: 'algbra' },
			{ heading: 'Shop local', body: 'The World Tourism Organisation reports that of each one hundred dollars spent on a trip, only five dollars reaches local economies. By shopping at markets abroad you can support independent owners who source ingredients more locally.', note: 'Source: algbra.com article, "Shop local". The World Tourism Organisation statistic is an Algbra figure and needs checking against its original source.', source: 'algbra' },
			{ heading: 'Offset your carbon emissions', body: 'There are a growing number of organisations offering carbon offsetting to help reduce carbon footprints. If you want to see the carbon footprint of your spending, Planet Impact in the Opello app estimates the emissions from each card purchase so you can choose what to offset.', note: 'Source: algbra.com article, "Offset your carbon emissions". The third-party offsetting companies are left out. The Planet Impact reference is an Opello claim that needs confirmation before publishing.', source: 'algbra', href: '/studio/carbon-tracking/', linkLabel: 'See Planet Impact' },
			{ heading: 'Read next', body: 'More on sustainability and travel from Opello.', source: 'placeholder', links: [
				{ label: 'An intro to carbon offsetting', href: '/studio/carbon-offsetting/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' },
				{ label: 'Planet Impact', href: '/studio/carbon-tracking/' }
			] }
		],
		cta: { label: 'Read the insights', href: '/studio/news/' }
	},
	{
		slug: 'money-and-mental-health',
		title: 'Money and mental health: 5 free mood boosters',
		kicker: 'Insights',
		lede: 'The link between money and mental health is often overlooked. Financial strain can worsen mental health, and poor mental health can make money harder to manage. Here are five free things that can help.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/money-and-mental-health-5-free-mood-boosters (Algbra blog article, 6 September 2022). Wording adapted for Opello. Algbra product references and community initiatives are left out.',
			'The statistics (almost half of people in problem debt also have a mental health problem, 4 in 10 with a mental health problem reported a detrimental impact on their finances) are Algbra figures and need checking against their original source before publishing.',
			'The AlgbraX community initiatives (Cycle Sisters, CWSA, Chai Mama) are Algbra specifics and are not reused. Opello community initiatives are a placeholder. Not for publication until approved.'
		],
		sections: [
			{ heading: 'The link between money and mind', body: 'A common cause of mental health struggles is financial pressure, and vice versa. Poor mental health can make it harder to keep good money habits or stay on top of bill payments. Almost half of people in problem debt also have a mental health problem, and 4 in 10 people with a mental health problem said it had a detrimental impact on their financial situation.', note: 'Source: algbra.com article, opening paragraphs. The statistics are Algbra figures and need checking against their original source.', source: 'algbra' },
			{ heading: 'Finding water', body: 'Studies have shown that people living near water generally report better mental health and wellbeing, and the same applies to green spaces. The mere sight and sound of water can induce neurochemicals that promote wellness, increase blood flow to the brain and heart, and induce relaxation.', note: 'Source: algbra.com article, "Finding water". Adapted for Opello.', source: 'algbra' },
			{ heading: 'Keeping a journal', body: 'Putting thoughts on paper, or in a notes app, can reduce stress and improve emotional functions and even the immune system. When thoughts, worries or fears are rushing at you, the first step is to organise them before you can start working towards solutions.', note: 'Source: algbra.com article, "Keeping a Journal". Adapted for Opello.', source: 'algbra' },
			{ heading: 'Consuming positivity', body: 'Go out of your way to watch or read something positive. Better yet, write down something you are grateful for, small or big. We are exposed to more information than ever before, and constantly consuming negative news can unknowingly put us in bad mental states or lead to spiralling thoughts.', note: 'Source: algbra.com article, "Consuming positivity". Adapted for Opello.', source: 'algbra' },
			{ heading: 'Connecting with community', body: 'Human connection is integral to feeling whole. There are many ways to connect with people in your community and nurture relationships, new and old. Local sports centres, community groups, volunteering and social platforms are all starting points.', note: 'Source: algbra.com article, "Connecting with community". Algbra community initiatives (Cycle Sisters, CWSA, Chai Mama) are not reused. Opello community work is a placeholder.', source: 'algbra' },
			{ heading: 'Recharging your brain', body: 'A good night sleep has wondrous effects on both emotional stability and cognitive functions, including how we respond to stress and our decision-making skills. Research shows sleep and mental health are intertwined. Meditation videos, classical music or white noise can help if you struggle to get to sleep.', note: 'Source: algbra.com article, "Recharging our brain". Adapted for Opello.', source: 'algbra' },
			{ heading: 'In it for the long haul', body: 'Being strapped for cash can also mean being strapped for time, and these activities require time and energy. Seeing mental health as an investment means taking time now so you are healthier and happier for longer, and more present for the people you love.', note: 'Source: algbra.com article, "In it for the long haul". Adapted for Opello.', source: 'algbra' },
			{ heading: 'Read next', body: 'More from Opello on wellbeing, money and sustainability.', source: 'placeholder', links: [
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' },
				{ label: 'What is World Wildlife Day, and why does it matter?', href: '/studio/world-wildlife-day/' },
				{ label: 'An intro to carbon offsetting', href: '/studio/carbon-offsetting/' }
			] }
		],
		cta: { label: 'Read the insights', href: '/studio/news/' }
	},
	{
		slug: 'world-wildlife-day',
		title: 'What is World Wildlife Day, and why does it matter?',
		kicker: 'Insights',
		lede: 'World Wildlife Day celebrates our planet\'s wildlife and reminds us that our survival is tied to theirs. Here is what it is and why it matters.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/what-is-world-wildlife-day-and-why-does-it-matter (Algbra blog article, 27 February 2023). Wording adapted for Opello. Algbra\'s product references (Algbra account, carbon offsetting product) are left out.',
			'The extinction statistics (over 42,100 species threatened, 28% of assessed species, extinction rate 1,000 to 10,000 times the natural rate) are Algbra\'s figures and need checking against their original source before publishing.',
			'The 2023 theme ("Forests and Livelihoods: Sustaining People and Planet") is from the dated article. Opello to update with the current year\'s theme before publishing. Not for publication until approved.'
		],
		sections: [
			{ heading: 'What World Wildlife Day is', body: 'World Wildlife Day is held on 3 March each year. It marks the day the Convention on International Trade in Endangered Species of Wild Fauna and Flora (CITES) was signed in 1973. It celebrates our planet\'s wildlife and raises awareness of the importance of conserving wildlife and their habitats, and of protecting endangered species.', note: 'Source: algbra.com World Wildlife Day article, "What is World Wildlife Day?". Adapted for Opello.', source: 'algbra' },
			{ heading: 'Why it matters', body: 'World Wildlife Day is about highlighting the importance of biodiversity to our continued survival. Right now, over 42,100 species are threatened with extinction, around 28% of all the species assessed, and the current rate of extinction is between 1,000 and 10,000 times higher than it should be naturally. Losing one species can trigger an extinction domino effect with impacts far larger than losing a single animal. It could lead to an uninhabitable planet.', note: 'Source: algbra.com World Wildlife Day article, "Why does World Wildlife Day matter?". The statistics are Algbra\'s figures and need checking against their original source before publishing.', source: 'algbra' },
			{ heading: 'The theme', body: 'The 2023 theme was "Forests and Livelihoods: Sustaining People and Planet", focusing on the role of forests in sustaining the livelihoods of millions of people and in maintaining the planet\'s ecological balance.', note: 'Source: algbra.com World Wildlife Day article, "World Wildlife Day 2023 theme". This is the 2023 theme from a dated article. Opello to update with the current year\'s theme before publishing.', source: 'algbra' },
			{ heading: 'How to make an impact', body: '[Placeholder: what Opello does with customer money so it never funds harm to people or the planet, and how Opello helps customers offset their carbon footprint into projects that help reverse the loss of biodiversity. Opello wording to confirm before publishing.]', note: 'Placeholder. Adapted from algbra.com World Wildlife Day article, "How can I make an impact?". Algbra\'s product claims are not reused. Opello sustainability claims need Opello confirmation and compliance sign-off.', source: 'placeholder', href: '/studio/carbon-tracking/', linkLabel: 'See Planet Impact' },
			{ heading: 'Read next', body: 'More on sustainability and ethical finance from Opello.', source: 'placeholder', links: [
				{ label: 'Planet Impact', href: '/studio/carbon-tracking/' },
				{ label: 'An intro to carbon offsetting', href: '/studio/carbon-offsetting/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' }
			] }
		],
		cta: { label: 'Read the insights', href: '/studio/news/' }
	},
	{
		slug: 'uk-account-from-abroad',
		title: 'Getting a UK account from abroad',
		kicker: 'Insights',
		lede: 'Many people living outside the UK still get paid in pounds, own UK property or need to move money to the UK. Here is how a UK account can work when you do not live here.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/how-to-get-a-uk-account-from-malaysia and algbra.com/news/how-to-get-a-uk-account-from-qatar (Algbra Insights articles). Wording adapted for Opello and combined into one page. The two Algbra articles are almost identical, so only the country examples differ.',
			'Eligibility is a conflict to settle first. Algbra says its Borderless account is for people living outside the UK, but the Opello help pages and the open-account page say UK residents only. Opello must decide which is right before this page publishes.',
			'Sharia, FCA, FSCS, safeguarding, fee, country-count and app-only application claims are Algbra wording and are flagged for Opello and compliance sign-off. Not for publication until approved.'
		],
		sections: [
			{ heading: 'Why you might need a UK account', body: 'Freelancers and remote workers paid by UK clients, business owners with UK customers or suppliers, people with UK rental income, and investors with UK assets often need to receive or hold pounds.', note: 'Source: algbra.com Malaysia and Qatar articles, "Why ... residents may need a UK account". Country examples are left out. Eligibility is flagged above.', source: 'algbra', items: [
				'Freelancers and remote professionals paid by UK companies',
				'Business owners working with British clients or suppliers',
				'Property owners receiving UK rental income',
				'Investors managing expenses or assets in the UK'
			] },
			{ heading: 'Why not just send money the usual way', body: 'Without UK account details, payments often go through international transfers or middlemen. That can mean extra fees, currency conversion costs and slower payments.', note: 'Source: algbra.com Malaysia and Qatar articles. Opello fee comparison is a placeholder until Opello confirms its numbers.', source: 'algbra' },
			{ heading: 'Can you open a traditional UK bank account from abroad?', body: 'It may be possible, but it is often hard. High-street banks commonly ask for a UK credit history, a UK address or a branch visit. Some offer non-resident accounts, but these can need large minimum balances or sit within private banking.', note: 'Source: algbra.com Malaysia and Qatar articles. Bank requirements are Algbra\'s general description, not checked against named banks. Remove or confirm before publishing.', source: 'algbra' },
			{ heading: 'Bank account or e-money account', body: 'An e-money account is run by an authorised Electronic Money Institution rather than a bank. It can give you a UK sort code and account number and hold several currencies. Bank deposits may be covered by the Financial Services Compensation Scheme. E-money is not. It is protected by safeguarding instead, which keeps customer money separate from the company\'s own money.', note: 'Source: algbra.com Malaysia and Qatar articles. FSCS and safeguarding wording needs compliance sign-off for Opello.', source: 'algbra' },
			{ heading: 'How a UK e-money account can work for you', body: 'You get a UK sort code and account number to receive pound payments, a multi-currency account for pounds, dollars, euros and other major currencies, and an international payments service. You can apply in an app with identity checks, with no branch visit and no UK address needed.', note: 'Source: algbra.com Malaysia and Qatar articles, Borderless account section. The product name is a placeholder; the currency list, country count, exchange fee and card details are left out until Opello confirms them.', source: 'algbra', items: [
				'A UK sort code and account number for pound payments',
				'Several currencies in one account',
				'International payments (country count to confirm for Opello)',
				'A virtual debit card (card scheme to confirm)'
			] },
			{ heading: 'Fees and protection', body: '[Placeholder: Opello exchange fee, monthly fee and how fees are shown before you pay. Confirm against the Opello fee schedule.]', note: 'Placeholder. Algbra\'s figures (a flat 0.5% exchange fee and £10 a month) are not used here until Opello confirms its own fees.', source: 'placeholder' },
			{ heading: 'Who it is for', body: 'People who live outside the UK and need access to UK payment services, and who want the account to match Sharia principles or be interest-free.', note: 'Source: algbra.com Malaysia and Qatar articles. Sharia and interest-free claims need Opello sign-off and a named oversight body before publishing. Opello eligibility is flagged above.', source: 'algbra' },
			{ heading: 'How to apply', body: 'The application is completed in the app. You will need to pass identity and eligibility checks. Availability depends on where you live and your situation, so check the app before you apply.', note: 'Source: algbra.com Malaysia and Qatar articles. Opello app availability and the list of documents are placeholders.', source: 'placeholder' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'cashless-society',
		title: 'The pros and cons of a cashless society',
		kicker: 'Insights',
		lede: 'As we move towards a cashless society, there is less money in our wallets. Is that a bad thing? Here are the pros and cons.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/the-pros-and-cons-of-a-cashless-society (Algbra blog article, 14 February 2023). Wording adapted for Opello. Algbra product references (freeze card in the Algbra app, Algbra card exchange rate, biodegradable cards, Chai Mama, opening an account with a UK mobile number and ID) are left out.',
			'The third-party figures (crime reduction cited to Swift Money, untraceable cash cited to the Access to Cash Review, the ECB stopping the €500 note, 50% of adults in Bangladesh, 99% of UK adults via the World Bank, 0.00378 kgCO2e per debit card transaction) are Algbra\'s figures and need checking against their original source before publishing.',
			'The card scheme is named by category only ("card scheme"). Opello card features (freeze in app, exchange rate, biodegradable cards) are placeholders until Opello confirms them. Not for publication until approved.'
		],
		sections: [
			{ heading: 'What a cashless society is', body: 'A cashless society is one where physical coins and banknotes are not used in financial transactions. Around the world, people, businesses and entire countries are going cashless. They are not ditching money; they are moving to electronic money, waving goodbye to notes and coins.', note: 'Source: algbra.com cashless society article, "What is a cashless society?". Adapted for Opello.', source: 'algbra', items: [
				'Pros: quicker transactions, lower crime risk, greater financial inclusion, better for the environment, easier travel abroad',
				'Cons: harder to budget with cash, greater cybercrime risk, leaves some people behind, makes donating harder, cash can hold sentimental value'
			] },
			{ heading: 'Pro: quicker, easier transactions', body: 'With digital payments, you always have the right amount to hand, so there is no more digging for coins and no more waiting. You can check out with a tap, and you do not even need your wallet when your cards are on your phone.', note: 'Source: algbra.com cashless society article, "Pro: Quicker, easier transactions". Adapted for Opello.', source: 'algbra' },
			{ heading: 'Con: it is easier to budget with cash', body: 'Budgeting can be easier with physical cash. You can lay it out and sort it into pots to keep you from overspending. It is easier to overdo it when you can check out with a tap, but with physical cash, you can only spend the money you have on you.', note: 'Source: algbra.com cashless society article, "Con: It\'s easier to budget with cash". Adapted for Opello.', source: 'algbra' },
			{ heading: 'Pro: lower risk of crime', body: 'Cash makes crime easier. Bank robberies, burglaries, extortion and corruption fall when physical cash is harder to come by. When cash is stolen from your wallet, it is gone, but if your card is missing you can block it from your app. Digital payments also leave a trail, which can make fraudsters think twice, and cashless payments help prevent money laundering by removing the chance to circulate fake notes.', note: 'Source: algbra.com cashless society article, "Pro: Lower risk of crime". The crime-reduction figure is cited to a third party (Swift Money) and the untraceable-cash point to the Access to Cash Review; both need checking against their original source. The ECB €500 note point is Algbra\'s wording and needs checking. Opello card-freeze feature is a placeholder until confirmed.', source: 'algbra' },
			{ heading: 'Con: greater risk of cybercrime', body: 'When money is involved, criminals are never far behind. Cybercriminals use schemes such as hacking, phishing and malicious software, and these change all the time. As money becomes more digital, the window of opportunity widens. Looking to stay safe online? Check the National Crime Agency website.', note: 'Source: algbra.com cashless society article, "Con: Greater risk of cybercrime". The National Crime Agency is a public body, not a vendor. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Pro: increases financial inclusion', body: 'The move towards a cashless society can increase financial inclusion, because mobile money accounts are easy to open, unlike traditional bank accounts. They make people\'s lives easier, especially in developing countries, and digital finance apps have also brought more people into the financial system in the UK.', note: 'Source: algbra.com cashless society article, "Pro: Increases financial inclusion". The Bangladesh 50% and UK 99% figures are Algbra\'s and need checking against their original source (World Bank). The Algbra sign-up line is left out.', source: 'algbra' },
			{ heading: 'Con: leaves people behind', body: 'A cashless society is all well and good until your internet drops out. Digital payments could leave some people behind, such as those in areas where the internet is less accessible, or people who are not as tech-savvy. If there were a widespread blackout, accessing your money would become a real problem. As we edge towards a cashless future, financial literacy matters more than ever.', note: 'Source: algbra.com cashless society article, "Con: Leaves people behind". The Algbra Chai Mama programme is not reused. Opello financial literacy work is a placeholder.', source: 'algbra' },
			{ heading: 'Pro: better for the environment', body: 'Going cashless can be better for the planet. Cashless transactions can have a minor impact, while cash has a larger carbon footprint, given the energy to produce banknotes and coins, the chemicals and greenhouse gases released in manufacturing, and the emissions from transporting physical cash around the world. Cashless is not without its issues, though: some payment cards are made from plastic that does not biodegrade.', note: 'Source: algbra.com cashless society article, "Pro: Better for the environment". The 0.00378 kgCO2e figure is Algbra\'s and needs checking against its original source. Algbra\'s biodegradable card claim is left out; Opello card materials are a placeholder.', source: 'algbra' },
			{ heading: 'Con: makes donating harder', body: 'Ever wanted to give a few coins to a charity collection box, but did not have any change? At these times, physical cash is handy, because you can easily donate whatever you can spare. Contactless card readers alongside collection boxes are a glimpse of how donating is changing.', note: 'Source: algbra.com cashless society article, "Con: Makes donating harder". Adapted for Opello.', source: 'algbra' },
			{ heading: 'Pro: easier to travel abroad', body: 'Sorting out your finances abroad can be a nightmare when you are trying to find an ATM or bureau de change. Payment cards make your trip easier because they are globally accepted through the card scheme. With exchange rates, not all payment cards are born equal: some banks add a mark-up to the exchange rate when you buy something in a foreign currency.', note: 'Source: algbra.com cashless society article, "Pro: Easier to travel abroad". The card scheme is named by category only. Algbra\'s "Mastercard Exchange rate with no extra fees" claim is left out; Opello exchange rate and fees are a placeholder until confirmed against the Opello fee schedule.', source: 'algbra' },
			{ heading: 'Con: cash can hold sentimental value', body: 'Cash can look cool. Notes from different countries make great keepsakes from a trip, and banknotes can feature beautiful designs that tell you about a country\'s culture. It is still big news when a new note is launched, and there is no feeling quite like finding a fiver from a grandparent in your birthday card. Creating those memories is harder in a cashless future.', note: 'Source: algbra.com cashless society article, "Con: Cash can hold sentimental value". The Alan Turing £50 note example is kept as Algbra published it. Adapted for Opello.', source: 'algbra' },
			{ heading: 'The future of money', body: 'Whether you are already cashless or clinging firmly to your coin collection, money is changing.', source: 'algbra', links: [
				{ label: 'What are virtual cards, and how do they work?', href: '/studio/virtual-cards/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' },
				{ label: 'Planet Impact', href: '/studio/carbon-tracking/' }
			] }
		],
		cta: { label: 'Read the insights', href: '/studio/news/' }
	},
	{
		slug: 'consumer-duty',
		title: 'Seven principles for implementing the Consumer Duty',
		kicker: 'Insights',
		lede: 'The Financial Conduct Authority\'s Consumer Duty is about delivering good outcomes for customers. Here is how we are approaching it.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/seven-principles-for-implementing-the-consumer-duty (Algbra blog article, 16 March 2023). Wording adapted for Opello. Algbra\'s author (Omar Salem, Head of Legal & Regulatory Affairs) is not reused.',
			'The Consumer Duty effective date (31 July 2023) is a matter of public record published by the FCA. The seven principles are Algbra\'s own approach, adapted for Opello. Opello\'s actual Consumer Duty implementation needs Opello and compliance sign-off before publishing.',
			'The FCA is a public body, not a vendor. The link to the FCA Consumer Duty page is a public resource. Not for publication until approved.'
		],
		sections: [
			{ heading: 'What the Consumer Duty is', body: 'The Consumer Duty is an FCA requirement that came in on 31 July 2023. It means FCA-regulated firms need to deliver good outcomes for their customers. The FCA has set out rules on what companies should do to comply, so it is a chance to look at how we do things and how we can improve even more.', note: 'Source: algbra.com Consumer Duty article, "What is the Consumer Duty?". The 31 July 2023 effective date is FCA public record. Adapted for Opello.', source: 'algbra' },
			{ heading: '1. Better than good', body: 'The Consumer Duty requires firms to deliver good outcomes for customers. We want to go beyond the minimum requirements and provide outstanding outcomes wherever possible.', note: 'Source: algbra.com Consumer Duty article, principle 1. Adapted for Opello.', source: 'algbra' },
			{ heading: '2. Prioritising what will make the most difference', body: 'We focus on where the greatest risks and greatest potential benefits are for customers, so we make sure we are working on what matters most.', note: 'Source: algbra.com Consumer Duty article, principle 2. Adapted for Opello.', source: 'algbra' },
			{ heading: '3. Practical steps with real outcomes', body: 'We focus on practical steps that will make a real difference to customers, so our implementation of the Consumer Duty has real outcomes rather than just paperwork.', note: 'Source: algbra.com Consumer Duty article, principle 3. Adapted for Opello.', source: 'algbra' },
			{ heading: '4. Making improvements as soon as possible', body: 'If it is clear an enhancement makes sense, we do not wait around. We implement improvements as soon as possible.', note: 'Source: algbra.com Consumer Duty article, principle 4. Adapted for Opello.', source: 'algbra' },
			{ heading: '5. Engaging all consumer-impacting functions', body: 'From customer operations to marketing and finance, many parts of our business affect our customers\' experience. The whole company works together to implement the Consumer Duty.', note: 'Source: algbra.com Consumer Duty article, principle 5. Adapted for Opello.', source: 'algbra' },
			{ heading: '6. Ensuring all requirements are met', body: 'After reviewing implementation plans, the FCA thinks firms may have considered the requirements superficially. We are doing a line-by-line review of the FCA\'s rules and tracking how we comply with them.', note: 'Source: algbra.com Consumer Duty article, principle 6. The FCA quote is Algbra\'s summary of FCA guidance. Adapted for Opello.', source: 'algbra' },
			{ heading: '7. Working closely with our partners', body: 'To provide our customers with services, we work with partners. We are working with each of them to make sure we have the most comprehensive approach to the Consumer Duty possible.', note: 'Source: algbra.com Consumer Duty article, principle 7. Partners are described by category only. Adapted for Opello.', source: 'algbra' },
			{ heading: 'A big change in regulation', body: 'The Consumer Duty is a big change in the FCA\'s approach to regulation. It is an opportunity for us to do what we do best, but even better. You can read more on the FCA\'s Consumer Duty page.', note: 'Source: algbra.com Consumer Duty article, closing paragraph. The FCA Consumer Duty page is at fca.org.uk/firms/consumer-duty (public resource, not a vendor link). Adapted for Opello.', source: 'algbra', links: [
				{ label: 'What are chargebacks, and when can you claim?', href: '/studio/chargebacks/' },
				{ label: 'Frequently asked questions', href: '/studio/faq/' }
			] }
		],
		cta: { label: 'Read the insights', href: '/studio/news/' }
	},
	{
		slug: 'dark-mode',
		title: 'The bright side of dark mode',
		kicker: 'Insights',
		lede: 'One simple change on your phone could save battery, money and even a little of the planet. Here is why dark mode is worth switching on.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/the-bright-side-of-dark-mode (Algbra blog article, 29 April 2025). Wording adapted for Opello. Algbra product references (dark mode in the Algbra app, the Instagram post, "Join the dark side with Algbra") are left out.',
			'The statistics (5.3 billion of 16 billion phones thrown away in 2022, up to 47% battery saving, OLED screens making up almost half the market) are Algbra\'s and need checking against their original source before publishing.',
			'Opello dark mode availability, supported screens and launch timing are placeholders until confirmed. Not for publication until approved.'
		],
		sections: [
			{ heading: 'A small switch with a big difference', body: 'Ever thought that one simple change could make a huge difference? Switching to dark mode on your phone could be that game-changer. It is not just about looking cool; it is about saving time, money, your health and even the planet.', note: 'Source: algbra.com dark mode article, opening. Adapted for Opello. Algbra app reference left out.', source: 'algbra' },
			{ heading: 'Protect your phone and the planet', body: 'By switching to dark mode, you reduce the number of times you need to charge your phone. Fewer charges mean your battery stays healthier for longer, and with battery issues the top complaint among smartphone users, anything that helps your battery last is a win. Longer battery life also means fewer dead batteries polluting the planet with harmful chemicals. In 2022 alone, an estimated 5.3 billion of the 16 billion phones worldwide were thrown away.', note: 'Source: algbra.com dark mode article, "Protect Your Phone and the Planet". The 5.3 billion of 16 billion figure is Algbra\'s and needs checking against its original source. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Up to 47% less battery', body: 'Using dark mode can save up to 47% battery power, which is nearly doubling your phone\'s battery life and cutting your energy use in half. This is especially true for phones with OLED screens, which now make up almost half the market, but other screen types see benefits too.', note: 'Source: algbra.com dark mode article, "Protect Your Phone and the Planet". The 47% figure and the OLED market share are Algbra\'s and need checking against their original source. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Be kinder to your eyes and sleep better', body: 'Switching to dark mode can also reduce the strain on your eyes, especially in low-light conditions. It cuts blue light emissions, which can interfere with your melatonin levels and disrupt your sleep. Better sleep equals better health.', note: 'Source: algbra.com dark mode article, "Be Kinder to Your Eyes and Sleep Better". Adapted for Opello.', source: 'algbra' },
			{ heading: 'Join the dark side', body: 'Your eyes, wallet and the planet will thank you. [Placeholder: when dark mode is available in the Opello app and which screens it covers, to be confirmed.]', note: 'Source: algbra.com dark mode article, closing. Algbra product plug left out. Opello dark mode availability is a placeholder.', source: 'algbra', links: [
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' },
				{ label: 'An intro to carbon offsetting', href: '/studio/carbon-offsetting/' }
			] }
		],
		cta: { label: 'Read the insights', href: '/studio/news/' }
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
				{ label: 'Current accounts', href: '/studio/current-accounts/' }, { label: 'Multi-currency accounts', href: '/studio/multi-currency/' }, { label: 'Borderless account', href: '/studio/borderless-account/' }, { label: 'UK account from abroad', href: '/studio/uk-account-from-abroad/' }, { label: 'Premium', href: '/studio/premium/' }, { label: 'Savings', href: '/studio/savings/' }, { label: 'Cubes', href: '/studio/cubes/' }, { label: 'Ethical Saver Cubes', href: '/studio/ethical-savings/' }, { label: 'Ethical finance', href: '/studio/ethical-finance/' }, { label: 'Pensions', href: '/studio/pensions/' }, { label: 'Open an account', href: '/studio/open-account/' }
			] },
			{ heading: 'Business', body: 'Accounts and payments for businesses.', source: 'placeholder', links: [
				{ label: 'Business', href: '/studio/business/' }
			] },
			{ heading: 'About', body: 'Who we are, what we are building and how to reach us.', source: 'placeholder', links: [
				{ label: 'About', href: '/studio/about/' }, { label: 'Careers', href: '/studio/careers/' }, { label: 'News', href: '/studio/news/' }, { label: 'Blog', href: '/studio/blog/' }, { label: 'Contact', href: '/studio/contact/' }
			] },
			{ heading: 'Help', body: 'Answers and support.', source: 'placeholder', links: [
				{ label: 'Help', href: '/studio/help/' }, { label: 'Chargebacks insight', href: '/studio/chargebacks/' }, { label: 'Carbon offsetting insight', href: '/studio/carbon-offsetting/' }, { label: 'Virtual cards insight', href: '/studio/virtual-cards/' }, { label: 'Green banking insight', href: '/studio/green-banking/' }, { label: 'World Wildlife Day insight', href: '/studio/world-wildlife-day/' }, { label: 'A Green Break insight', href: '/studio/green-break/' }, { label: 'Money and mental health insight', href: '/studio/money-and-mental-health/' }, { label: 'Cashless society insight', href: '/studio/cashless-society/' }, { label: 'Consumer Duty insight', href: '/studio/consumer-duty/' }, { label: 'Dark mode insight', href: '/studio/dark-mode/' }, { label: 'Help articles', href: '/studio/help-articles/' }, { label: 'Ethical Saver help', href: '/studio/help-ethical-saver/' }, { label: 'Getting started answers', href: '/studio/help-getting-started/' }, { label: 'Finding your TIN', href: '/studio/help-tin/' }, { label: 'Logging in answers', href: '/studio/help-logging-in/' }, { label: 'Security and data answers', href: '/studio/help-security-data/' }, { label: 'My card answers', href: '/studio/help-my-card/' }, { label: 'My account answers', href: '/studio/help-my-account/' }, { label: 'About Opello answers', href: '/studio/help-about-opello/' }, { label: 'Get in touch answers', href: '/studio/help-get-in-touch/' }, { label: 'Frequently asked questions', href: '/studio/faq/' }, { label: 'Accessibility', href: '/studio/accessibility/' }, { label: 'Log in', href: '/studio/login/' }
			] },
			{ heading: 'Legal', body: 'Policies, terms and fees.', source: 'placeholder', links: [
				{ label: 'Privacy policy', href: '/studio/privacy-policy/' }, { label: 'Terms and conditions', href: '/studio/terms-and-conditions/' }, { label: 'Customer terms', href: '/studio/customer-terms-and-conditions/' }, { label: 'Cookie policy', href: '/studio/cookies-policy/' }, { label: 'Fees and charges', href: '/studio/fees-and-charges/' }, { label: 'Responsible disclosure', href: '/studio/responsible-disclosure/' }
			] }
		],
		cta: { label: 'Open account with us', href: OPEN }
	}
];

export const bySlug = (slug: string) => pages.find((p) => p.slug === slug);
