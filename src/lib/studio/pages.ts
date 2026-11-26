// Studio pages linked from the studio homepage.
// = wording taken from algbra.com (homepage, surveyed 2026-11-12)
//         'placeholder' = not yet surveyed or no direct Algbra equivalent; confirm before use
export type Source = 'algbra' | 'placeholder';
export type Section = { heading: string; body: string; note?: string; source?: Source; href?: string; linkLabel?: string; links?: { label: string; href: string }[]; items?: string[]; countries?: boolean; wide?: boolean; half?: boolean; big?: boolean };
export type StudioPage = {
	slug: string;
	title: string;
	kicker: string;
	lede: string;
	// Optional shorter meta description (search snippets truncate around 155-165 chars).
	// Used for <meta name=description>/og/twitter description only; the visible lede is untouched.
	metaTitle?: string;
	metaDescription?: string;
	// Optional unique hero. 'split' = photo card beside the copy (landing-page card language);
	// 'band' = full-bleed photo with the copy overlaid. Default is the shared ring hero.
	// default is the shared ring hero. Placeholder photos keep their alt updated with the licensed replacement.
	hero?: { variant: 'split' | 'ring-photo' | 'photo-ring' | 'band'; alt: string };
	// Page-level source marking was folded into sourceNotes (2026-11-20); kept optional.
	source?: Source;
	sourceNotes?: string[];
	sections: Section[];
	cta: { label: string; href: string };
};

const OPEN = '/studio/open-account/';

export const pages: StudioPage[] = [
{
		slug: 'personal',
		// Page-level sources restored 2026-11-20 (15:00 Dubai run): the Algbra-derived product pages
		// lost their visible source marking in the MLP1 trims; see the log.
		sourceNotes: [
			'Source: algbra.com homepage and personal page copy (surveyed 2026-11-12, page built 2026-11-16), adapted for Opello.',
			'Claims flagged for sign-off: "instant bank transfers", "international transfers" and "you will never be confused or surprised by a fee" are Algbra wording and need Algbra or compliance sign-off before publishing.',
			'The Refer a friend card carries a placeholder: reward and terms are Opello\'s to confirm (Algbra publishes no referral mechanics). Physical-card and out-of-scope sections are commented out.'
		],
		title: 'Personal',
		kicker: 'Personal',
		lede: 'Finance, made for humans. Transparent, accessible products, and you will never be confused or surprised by a fee.',
		sections: [
			// OUT OF MLP1 SCOPE — section removed, do not publish.

			// OUT OF MLP1 SCOPE — section removed, do not publish.

			{ heading: 'Send and receive money', body: 'Instant bank transfers, international transfers, and payments to friends and family.', href: '/studio/transfers/', linkLabel: 'See transfers' },
			// Out of MLP1 scope — physical cards not confirmed for day one; wording changed to virtual cards only.
			{ heading: 'Spend with your card', body: 'Virtual cards, card controls and spending abroad.', href: '/studio/cards/', linkLabel: 'See cards' },
			{ heading: 'Find your fit', body: 'Different plans for different needs. Explore features, pricing, and benefits to find the one that works best for you.', href: '/studio/all-plans/', linkLabel: 'See all plans' },
			// OUT OF MLP1 SCOPE — section removed, do not publish.

			{ heading: 'Get the app', body: 'Seamless digital onboarding onto the app. Scan the code on your phone to download it, then open your account with an email address, a phone number and an ID document.', href: '/studio/download/', linkLabel: 'See how to download' },
			// Refer-a-friend is in MLP1 scope (Vinay, 2026-11-17); the page carries placeholder copy pending sign-off.
			{ heading: 'Refer a friend', body: 'Share your referral code and QR code with a friend. [Placeholder: reward and terms to be confirmed by Opello.]', href: '/studio/referrals/', linkLabel: 'See how referrals work' }
			// OUT OF MLP1 SCOPE — section removed, do not publish.
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'all-plans',
		sourceNotes: [
			'Source: algbra.com/all-plans (built 2026-11-16); the Standard card wording is Algbra\'s, adapted.',
			'Claims flagged for sign-off: the Standard plan "free" wording and the "Get started for free" pill (also in the sign-off sheet). Eligibility "Available to UK residents" needs Opello confirmation against the banner eligibility decision.',
			'Premium and Borderless plan cards are out of first-release scope and are commented out.'
		],
		title: 'All plans',
		kicker: 'Personal',
		lede: 'Different plans for different needs. Explore features, pricing and benefits to find the one that works best for you.',
		sections: [
			{ heading: 'Standard', body: 'Free. Everyday financial essentials, to spend, save and manage money. Available to UK residents. T&Cs apply.', href: OPEN, linkLabel: 'Get started for free' }
			// OUT OF MLP1 SCOPE — section removed, do not publish.
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'transfers',
		sourceNotes: [
			'Source: algbra.com/features/transfers (built 2026-11-16), adapted for Opello.',
			'Claims flagged for sign-off: "free" instant transfers, 24/7 availability, the open-banking account check, and whether nearby payments are available at launch.',
			'"Get paid with your own link" is adapted from Algbra\'s own-link card; the Opello product name is a placeholder.'
		],
		title: 'Transfers',
		kicker: 'Personal',
		lede: 'Use your account to send and receive money quickly and easily, to friends and family and between banks.',
		// Placeholder photo (reused from the homepage split until licensed photography lands).
		hero: { variant: 'split', alt: 'Traveller looking out of a large window at an airport, about to send money home' },
		sections: [
			{ heading: 'Friends and family', body: 'Receive and send money to your friends and family instantly, no matter where they are.' },
			{ heading: 'Free instant bank transfers', body: 'Pay and get paid in seconds, not days. Instant bank transfers work 24/7, so your money arrives straight away.', href: '/studio/current-accounts/', linkLabel: 'See current accounts' }, { heading: 'Safer transfers', body: 'Open banking technology checks that the account details you enter match the account you are sending to.', href: '/studio/help-security-data/', linkLabel: 'Read about security' },
			{ heading: 'Request money', body: 'Shared a meal out or need to pay rent? Ask for money and split the bill the easy way.' },
			{ heading: 'Nearby payments', body: 'Find your friends nearby and pay them instantly.' },
			{ heading: 'Pay with a QR code', body: 'Use a friend or family member\'s QR code to pay them.' },
			{ heading: 'Get paid with your own link', body: 'Make the everyday task of getting paid easier by creating a unique link to share.' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'cards',
		sourceNotes: [
			'Source: algbra.com/features/cards (built 2026-11-16), adapted for Opello. The card scheme is named by category only and wallet providers are left out as vendor names.',
			'Claims flagged for sign-off: freezing and unfreezing in the app, PIN change, real-time push notification after every transaction, and the identity-check wording.',
			'Physical cards and mobile wallets are out of first-release scope and are commented out.'
		],
		title: 'Cards',
		kicker: 'Personal',
		// Placeholder photo (generated until licensed photography lands).
		hero: { variant: 'ring-photo', alt: 'A pale peach debit card resting beside a phone being used to shop online at a sunlit table' },
		lede: 'Spend anywhere your card scheme is accepted, with cards you can freeze and control in the app.',
		sections: [
			/* Out of MLP1 scope — physical cards and mobile wallets (Apple Pay / Google Pay) are not confirmed for day one. Do not publish.
			{ heading: 'Physical cards', body: 'Choose from one of three biodegradable cards and get it delivered to your home for free.' }, { heading: 'Add your card to your phone', body: 'Pay with your phone using a mobile wallet. It is an easy, secure and private way to pay.' },
			*/
			{ heading: 'Virtual cards', body: 'A virtual card lives in the app and works for online payments.', href: '/studio/virtual-cards/', linkLabel: 'Learn about virtual cards' },
			{ heading: 'Card controls and alerts', body: 'In the app, freeze or unfreeze your card and change your PIN with a few taps. Get a real-time push notification after every transaction.', href: '/studio/help-my-card/', linkLabel: 'Read about card controls' },
			// Out of MLP1 scope — contactless in-store payment needs a physical card or wallet, which are not confirmed for day one; trimmed to the online identity check.
			{ heading: 'Identity checks', body: 'Your card scheme\'s identity check helps confirm that online purchases are yours.', href: '/studio/open-account/', linkLabel: 'See how to open an account' }],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		// Virtual cards product page. In MLP1 scope (virtual card for spending globally).
		// Rebuilt 2026-11-20 as a product page after the insight article was purged in the MLP1 scope purge.
		// Wording adapted from Algbra's virtual cards article (algbra.com/news/what-are-virtual-cards-and-how-do-they-work, 18 Apr 2023).
		// Out of scope for this page: contactless in-store payment and mobile wallets (physical card / wallet not confirmed for day one),
		// environment claims from the Algbra article (no source for our materials), card scheme named by category only.
		// Disposable (single-use) cards: Algbra publishes the concept; whether Opello ships single-use cards is unconfirmed, so the body describes it as an option only.
		slug: 'virtual-cards',
		sourceNotes: [
			'Source: algbra.com/news/what-are-virtual-cards-and-how-do-they-work (18 Apr 2023, rebuilt as a product page 2026-11-20), adapted for Opello. The card scheme is named by category only.',
			'Disposable (single-use) cards are described as an option only; whether Opello ships them is unconfirmed.',
			'Contactless in-store payment, mobile wallets and environment claims are left out: not confirmed for day one / no source for our materials.'
		],
		title: 'Virtual cards',
		kicker: 'Personal',
		lede: 'A card that lives in your app. Pay online with your own card number, and freeze it whenever you like.',
		sections: [
			{ heading: 'What is a virtual card?', body: 'A virtual card works like a debit card, but it lives in your app instead of your wallet. It has its own card number, expiry date and security code, always kept safe in the app.' },
			{ heading: 'Pay online in a few taps', body: 'Fill in your virtual card details at checkout, just as you would with any other card. No card to carry, nothing to leave behind.', href: '/studio/current-accounts/', linkLabel: 'See current accounts' },
			{ heading: 'Harder to lose, harder to skim', body: 'A virtual card cannot be skimmed at a machine or left behind at a till. And if something does not look right, freeze your card in the app with a few taps, then unfreeze it just as quickly.', href: '/studio/help-my-card/', linkLabel: 'Read about card controls' },
			{ heading: 'Disposable cards', body: 'Some virtual cards are single-use: after one online checkout they are destroyed, and you generate a new one for the next purchase. Handy for trying a new shop or subscription.', href: '/studio/cards/', linkLabel: 'See cards' }
			// Out of MLP1 scope — contactless in-store payment and mobile wallets are not confirmed for day one. Do not publish.
			// Out of MLP1 scope — environment claims from the Algbra article need a source for our materials. Do not publish.
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'current-accounts',
		sourceNotes: [
			'Source: algbra.com current accounts copy (built 2026-11-16), adapted for Opello.',
			'Reworded GBP-first: multi-currency holding is out of first-release scope, so the lede no longer mentions other currencies.',
			'Claims flagged for sign-off: "instant bank transfers" and "international transfers" availability.'
		],
		title: 'Current accounts',
		kicker: 'Personal',
		// Split hero with a generated placeholder photo until licensed photography is supplied.
		hero: { variant: 'split', alt: 'A woman paying at a cafe counter by holding her phone over a card terminal' },
		// Out of MLP1 scope — multi-currency holding is not in the first release; GBP-first wording.
		lede: 'Send, spend and manage your money in pounds from one account. See what comes with the Opello personal account.',
		sections: [
			{ heading: 'Send and receive money', body: 'Instant bank transfers, international transfers, and payments to friends and family.', href: '/studio/transfers/', linkLabel: 'See transfers' },
			// Out of MLP1 scope — physical cards not confirmed for day one; wording changed to virtual cards only.
			{ heading: 'Spend with your card', body: 'Virtual cards, card controls and spending abroad.', links: [
				{ label: 'See cards', href: '/studio/cards/' }] }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'savings',
		sourceNotes: [
			'Source: algbra.com/features/cubes for the Goal-based Cubes card (as originally cited 2026-11-16), adapted for Opello.',
			'The "Earn % EPR*" card stays unpublished pending compliance sign-off on the rate, eligibility and protection wording.',
			'The card links to the help answer because the Cubes product page is out of first-release scope (round-up donations).'
		],
		title: 'Savings',
		kicker: 'Personal',
		lede: 'Earn on the money you are saving. Available to UK residents. Set up goal-based savings pots in the app.',
		hero: { variant: 'split', alt: 'A pale peach savings jar on a sunlit wooden table beside a potted plant and a small stack of coins' },
		sections: [
			// Out of MLP1 scope? No — savings pots and Cubes are in scope, but the EPR rate, eligibility and
			// protection wording need compliance sign-off, so this card stays unpublished. Do not publish.
			// { heading: 'Earn % EPR* with Ethical Saver Cubes', body: 'Put money aside in Cubes and earn on your savings.', source: 'algbra', href: '/studio/ethical-savings/', linkLabel: 'See Ethical Saver Cubes' },
			// Goal-based Cubes restored 2026-11-21: swept out with the EPR card in the MLP1 purge, but savings pots are in scope.
			{ heading: 'Goal-based Cubes', body: 'Create a Cube for each goal, from a holiday to a house deposit, and track your progress.', source: 'algbra', href: '/studio/help-my-account/', linkLabel: 'Read about Cubes' }
			// The Cubes product page is out of MLP1 scope (round-up donations), so this card points at the in-scope help answer.
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'ethical-savings',
		title: 'Ethical Saver Cubes',
		kicker: 'Savings',
		lede: 'Ethical. Profitable. Human. Set money aside for a fixed term and see your agreed return before you confirm.',
		sections: [
			{ heading: 'How a Cube works', body: 'Pick the term that suits you, choose how much to deposit and see your expected profit before you confirm. At the end of the term you get your deposit back plus the agreed profit.', links: [
				{ label: 'Back to savings', href: '/studio/savings/' }
			] },
			{ heading: 'Save for 3, 6 or 12 months', body: 'Choose your term. Returns are agreed in advance and fixed when the Cube is created, so you know what you will get back at maturity.' },
			// OUT OF MLP1 SCOPE — section removed, do not publish.,
			{ heading: 'At the end of the term', body: 'Choose to re-deposit into a new Cube, or move your deposit and profit back to your main account to withdraw, spend or save somewhere else.' },
			{ heading: 'Tax on your profit', body: 'Profit may be taxable, depending on your circumstances. It counts towards your Personal Savings Allowance. Tax is not taken off automatically, so you may need to declare it to HMRC.', href: '/studio/help-ethical-saver/', linkLabel: 'Read about tax on Ethical Saver' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'open-account',
		title: 'Open an account',
		kicker: 'Get started',
		lede: 'Here is what you will need to open an Opello account in the app, and what happens next.',
		// Open account photo-ring hero: generated placeholder until licensed photography is supplied.
		hero: { variant: 'photo-ring', alt: 'A man at a sunlit desk holding his smartphone, recording a short verification video, with plain paper documents and his phone on a stand on the desk' },
		sections: [
			{ heading: 'What you will need', body: 'An internet-connected phone or device with a camera, a mobile number, a valid photo ID such as a passport or driving licence, and proof of address, such as a utility bill.' },
			{ heading: 'How it works', body: 'Download the app and enter your email address and mobile number. Then add your ID and proof of address, and record a short video of yourself. We check your details, and once approved you can start using your account.' },
			{ heading: 'Why we check your identity', body: 'Financial rules require us to verify who you are. These checks are known as Know Your Customer (KYC) and Customer Due Diligence (CDD). They protect our community and keep your account secure. You will need a valid, in-date government photo ID, and we can only use the original document.' },
			{ heading: 'No credit check', body: 'We do not carry out credit checks, so opening an Opello account has no impact on your credit rating or borrowing ability.', href: '/studio/help-getting-started/', linkLabel: 'More getting started answers' },
			{ heading: 'Ready to start?', body: 'Get the app first, then open your account in a few steps. Have your ID and proof of address to hand.', href: '/studio/download/', linkLabel: 'Get the app' }
		],
		cta: { label: 'Get started for free', href: '/studio/download/' }
	},
	{
		slug: 'about',
		// sourceNote added 2026-11-21 (~07:30 Dubai run): the "Why we are different" list originally carried
		// five items; the two impact/donation items are out of MLP1 scope (Planet Impact / community initiatives)
		// and were commented out in EN/AR/TR, leaving three.
		sourceNotes: [
			'Scope trim: the "Why we are different" list originally carried two further items about community giving-back and in-app social and environmental impact tools; both are out of the first-release scope and are commented out, leaving three.',
		],
		title: 'About',
		kicker: 'About',
		lede: 'Finance, made for humans. We are people and planet first. Read our mission and the thinking behind Opello.',
		// About band hero: generated placeholder until licensed photography is supplied.
		hero: { variant: 'band', alt: 'Four people chatting casually in a bright, warm lounge with clay and cream walls' },
		sections: [
			{ heading: 'Our objective', body: 'To eradicate social and financial exclusion and create a more sustainable society, using our values-driven financial technology and a community-first approach. We are people and planet first. Opello is for people who want more than excellent financial services: people who want a new experience with finance, one that reflects their identity, values and lifestyle, and that helps them in everyday actions.', half: true },
			{ heading: 'Why we are different', body: 'Three things we hold ourselves to.', half: true, items: [
				'We never hold your money in an unethical or high-risk manner.',
				'We offer clear, accessible and interest-free products and services.',
				// Out of MLP1 scope — giving back/social impact initiatives is donation and community-programme content. Do not publish.
				// 'We put our values into action by giving back to our community, and working with them on social impact initiatives.',
				// Out of MLP1 scope — in-app social and environmental impact tools are Planet Impact content. Do not publish.
				// 'We bring you into the equation through social and environmental impact tools inside the app.',
				'We adopt a systematic approach to ethical finance, with a focus on equitable access to sustainable financial services.'
			] },
			// About rebalance 2026-11-20 (19:07 Dubai run): the short statement card ran mostly
			// empty beside its two tall neighbours at 1440, so it now runs full width as a
			// statement band and the two cards above split the row. Careers link restored (in
			// scope; the ethical-finance link stayed out with the purged page).
			{ heading: 'We are not a bank', body: 'We are a movement. Join us on the journey to fairer, more ethical and transparent finance.', wide: true, big: true, links: [{ label: 'Join us', href: '/studio/careers/' }] }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'help',
		// sourceNotes added 2026-11-20 (~13:30 Dubai run): re-surveyed algbra.com/help today; the adapted
		// wording had no visible source marking.
		sourceNotes: [
			'Source: algbra.com/help (re-surveyed 2026-11-20): the lede, the find-an-answer and in-app support wording and the lost-or-stolen-card freeze wording follow Algbra\'s help page, adapted for Opello.',
			'Placeholders: the support phone number and support email are Opello\'s to set up. Algbra\'s own phone number and email are not reused.'
		],
		title: 'Help',
		kicker: 'Help',
		lede: 'Find answers to frequently asked questions here or get in touch via our in-app support chat.',
		// Help ring-photo hero: generated placeholder until licensed photography is supplied.
		hero: { variant: 'ring-photo', alt: 'A woman wearing headphones at a sunlit kitchen table, smiling while chatting to a support agent on her smartphone, a ceramic mug beside it' },
		sections: [
			{ heading: 'Find an answer', body: 'Check out the questions we hear most often, then use the emojis at the end of each answer to tell us whether it helped.', href: '/studio/faq/', linkLabel: 'Read the FAQ' },
			{ heading: 'Chat to our support team', body: 'You can chat to our dedicated support team in real time from the app. If you prefer, you can send us an email instead.', href: '/studio/contact/', linkLabel: 'See contact options' },
			{ heading: 'Lost or stolen card', body: 'Freeze it instantly in the app. If you cannot get into the app, call us on [support phone, placeholder].', href: '/studio/faq/', linkLabel: 'Read about lost cards' },
			{ heading: 'Help articles by category', body: 'Getting started, Logging in, My card, My account, Ethical Saver Cubes, Security and data, About Opello, and Get in touch. Browse the article titles in each category.', href: '/studio/help-articles/', linkLabel: 'See article titles' },
			{ heading: 'Get in touch', body: 'Thoughts, ideas, suggestions, or a question about your account. Email: [support email, placeholder]', href: '/studio/contact/', linkLabel: 'Contact us' },
			{ heading: 'Closing your account', body: 'Chat to the support team in the app, or email us, and we will help you close your account.', href: '/studio/faq/', linkLabel: 'Read the closing steps' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'faq',
		sourceNotes: [
			'Source: algbra.com/faq (built 2026-11-16), adapted for Opello.',
			'Claims flagged for sign-off: the client-money/safeguarding wording, and the payments scope (Faster Payments only; international payments, direct debits, standing orders and CHAPS not yet available).',
			'The eligibility answer (UK residents, 18+) sits against the homepage banner\'s non-UK-resident wording; Opello to decide which is right before either publishes.'
		],
		title: 'Frequently asked questions',
		kicker: 'Help',
		lede: "We're here to connect. Answers to the questions we hear most often, from opening your account to using your card.",
		sections: [
			{ heading: 'What you need to open an account', body: 'A smartphone, a mobile number, a valid ID document (passport or driving licence) and proof of your address, such as a utility bill. You will record a short video and take photos of your documents when you sign up.', href: '/studio/open-account/', linkLabel: 'See how to open an account' },
			{ heading: 'Who can open an account', body: 'You need to be 18 or over, a UK resident, and have a valid ID document and proof of address.', href: '/studio/help-getting-started/', linkLabel: 'Read about eligibility' },
			{ heading: 'Is my money safe?', body: 'We hold the money you deposit or receive in a client money account that we manage on your behalf. We do not lend or invest deposits, and client accounts can only be used to hold your funds.', href: '/studio/help-security-data/', linkLabel: 'Read about security' },
			// OUT OF MLP1 SCOPE — section removed, do not publish.

			{ heading: 'Payments we support today', body: 'Card payments, ATM withdrawals and Faster Payments. Payments are in pounds sterling. International payments, direct debits, standing orders and CHAPS are not yet available.', href: '/studio/current-accounts/', linkLabel: 'See current accounts' },
			{ heading: 'Lost or stolen card', body: 'Freeze your card in the app straight away, then contact our support team through the in-app chat. If you cannot get into the app, call or email us instead.', href: '/studio/help-my-card/', linkLabel: 'Read about lost cards' }, // OUT OF MLP1 SCOPE — section removed, do not publish.

			{ heading: 'Closing your account', body: 'Chat to the support team in the app, or email us, and we will help you close your account. Once closed, you cannot open a new one.', href: '/studio/help-get-in-touch/', linkLabel: 'Read about closing your account' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'contact',
		title: 'Contact',
		kicker: 'Help',
		lede: "We're here to connect. Thoughts, ideas and suggestions are always welcome.",
		sections: [
			{ heading: 'General enquiries', body: 'Thoughts, ideas, suggestions. Contact us here. Email: [general enquiries email, placeholder]' },
			{ heading: 'Press enquiries', body: 'For all press enquiries. Email: [press email, placeholder]' },
			{ heading: 'Problems with your account', body: 'Lost or stolen card, or a payment you do not recognise: freeze your card in the app first, then use the in-app chat. If you cannot get into the app, call or email us instead.', href: '/studio/faq/', linkLabel: 'Read the FAQ first' },
			{ heading: 'Company and privacy', body: 'Opello Ltd, registered in England and Wales, company number 17324431. Suite 401–402, Cumberland House, 80 Scrubs Lane, London NW10 6RF. Questions about your personal data: privacy@opello.co.uk', href: '/studio/privacy-policy/', linkLabel: 'Read the privacy policy' }
		],
		cta: { label: 'Back to help', href: '/studio/help/' }
	},
	// Careers restored 2026-11-21: the page was dropped entirely (not commented out) during the MLP1 purge even though it is company content, not a product page. Content comes from pages-full.ts.bak unchanged except the 'Our mission' link, which pointed at the purged ethical-finance page and now points at About.
	{
		slug: 'careers',
		title: 'Careers',
		kicker: 'About',
		lede: 'Be a part of something great. Finance that is fairer, more ethical and more transparent.',
		source: 'algbra',
		sections: [
			{ heading: 'Our mission', body: 'Our mission is to eradicate social and financial exclusion by using technology and a community-first approach to provide equitable access to ethical and sustainable financial services. Our approach is underpinned by a fundamental set of principles. We are people and planet first.', note: 'Source: algbra.com/careers, Our Mission. Opello mission wording to confirm before publishing.', source: 'algbra', href: '/studio/about/', linkLabel: 'Read about us' },
			{ heading: 'Use your money differently', body: 'Opello is for people who want to use their money differently. Join us on the journey to fairer, more ethical and transparent finance. We are not a bank. We are a movement.', note: "Adapted from algbra.com/careers. \"We are not a bank. We are a movement.\" is a claim that needs Opello sign-off before publishing. Opello wording to confirm.", source: 'algbra' },
			{ heading: 'Benefits', body: 'Our benefits reflect our inclusive values and are extended to every member of the team, regardless of location or seniority. Benefits for the Opello team are being confirmed. [Placeholder: benefits list]', note: "Source: algbra.com/careers. Benefits intro line is Algbra's wording. Algbra lists its own specific benefits on algbra.com/careers. Do not reuse them for Opello until Opello confirms its own.", source: 'algbra' },
			{ heading: 'Open roles', body: 'There are no open roles to show yet. [Placeholder: current vacancies]', note: 'Placeholder. Vacancies and how to apply to be confirmed by Opello.', source: 'placeholder' }
		],
		cta: { label: 'Get in touch', href: '/studio/contact/' }
	},
	{
		slug: 'download',
		// sourceNotes added 2026-11-20 (~13:30 Dubai run): the page's Algbra-derived wording had no visible
		// source marking (the pre-purge notes in pages-full.ts.bak were dropped); re-surveyed algbra.com/download today.
		sourceNotes: [
			'Source: algbra.com/download (re-surveyed 2026-11-20): the QR instruction and the onboarding wording ("All you need is an email address, phone number and an ID document like your passport") are Algbra\'s published copy, adapted for Opello. Algbra\'s download page is thin beyond this; nothing else is reusable.',
			'Placeholders: the QR code image and the app-store badges and links wait for the Opello app to be published; app-store availability itself is Opello to confirm.'
		],
		title: 'Download the app',
		kicker: 'Personal',
		lede: 'Seamless digital onboarding onto the app. Scan the QR code, download it, and open your account with an email address, a phone number and an ID document.',
		sections: [
			{ heading: 'Scan the code', body: 'On your mobile, open the camera and point your device at the QR code to download the app. Can\'t scan the QR code? Use the download links below.' },
			{ heading: 'iOS and Android', body: 'The app is available on iOS and Android. [Placeholder: app store badges and links]' },
			{ heading: 'Open your account digitally', body: 'Seamless digital onboarding in the app. All you need is an email address, a phone number and an ID document, like your passport.', href: '/studio/faq/', linkLabel: 'Read the FAQ' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'referrals',
		title: 'Refer a friend',
		kicker: 'Personal',
		// Refer-a-friend is in MLP1 scope (Vinay, 2026-11-17, relaying Harvey's notes: "Refer-a-friend QR code").
		// Algbra publishes no referral product copy: its /referrals/ page is only a download-link capture
		// page ("Enter your email address to download Algbra app" / "Scan to Download"), so every claim
		// here is placeholder until Opello confirms the reward, the terms and the in-app mechanics.
		lede: 'Share Opello with the people you care about. [Placeholder: referral reward and terms to be confirmed by Opello before publishing.]',
		sections: [
			{ heading: 'Share your code', body: 'Find your referral code and QR code in the app and share them with a friend. [Placeholder: where the code and QR code live in the app, to be confirmed by Opello.]', note: 'Placeholder. Algbra publishes no referral product copy; its referrals page is only a download-link capture page (algbra.com/referrals, 2026-11-21). The QR-code mechanic is Opello\'s to confirm.' },
			{ heading: 'Your friend opens an account', body: 'Your friend opens the app, scans your code or enters it by hand, and applies in a few steps with an ID document and proof of address. [Placeholder: whether the code is entered during sign-up, to be confirmed by Opello.]', note: 'Placeholder. Onboarding steps follow the Opello open-an-account page; the code-entry step is unconfirmed.', links: [{ label: 'See how to open an account', href: '/studio/open-account/' }] },
			{ heading: 'The reward', body: '[Placeholder: whether there is a reward, its amount, when it is paid, and any conditions. Opello to confirm; do not publish a reward without sign-off.]', note: 'Placeholder. No reward amount or terms exist yet for Opello. Algbra\'s terms do not cover referrals, so none is reused.' },
			{ heading: 'Good to know', body: 'A referral is not advice and does not change how we look after your money or your friend\'s. [Placeholder: eligibility limits, fair-use rules and fraud checks, to be confirmed by Opello.]', note: 'Placeholder. Fair-use and fraud wording needs Opello and compliance sign-off.' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'news',
		title: 'News',
		kicker: 'News',
		// News split hero: generated placeholder until licensed photography is supplied.
		hero: { variant: 'split', alt: 'A person at a sunlit wooden desk writing in a notebook beside an open laptop, a coffee mug and printed story drafts' },
		lede: 'News, product updates, explainers and stories from Opello. [Placeholder: Opello newsroom intro, in Opello wording.]',
		sections: [
			{ heading: 'News', body: '[Placeholder: announcements about Opello, such as new products, partnerships and approvals.]' },
			{ heading: 'Updates', body: '[Placeholder: changes to the app and new features for customers, with dates.]' },
			{ heading: 'Blog', body: 'Stories from the Opello team and the community. [Placeholder: first posts.]', href: '/studio/blog/', linkLabel: 'Read the blog topics' },
			// Insights list repopulated 2026-11-21: the article restore (a9dbc50) rewired the blog index and sitemap but left this card empty.
			{ heading: 'Read the insights', body: 'Plain-English explainers on money, fees and sustainability.', links: [{ label: 'What are chargebacks, and when can you claim?', href: '/studio/chargebacks/' }, { label: 'What are virtual cards, and how do they work?', href: '/studio/virtual-cards/' }, { label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' }, { label: 'A Green Break: how to holiday sustainably', href: '/studio/green-break/' }, { label: 'Money and mental health: 5 free mood boosters', href: '/studio/money-and-mental-health/' }, { label: 'What is World Wildlife Day, and why does it matter?', href: '/studio/world-wildlife-day/' }, { label: 'The pros and cons of a cashless society', href: '/studio/cashless-society/' }, { label: 'Seven principles for implementing the Consumer Duty', href: '/studio/consumer-duty/' }, { label: 'The bright side of dark mode', href: '/studio/dark-mode/' }, { label: 'Climate catastrophes: at our doorstep', href: '/studio/climate-catastrophes/' }, { label: 'A just transition: an achievable goal?', href: '/studio/just-transition/' }, { label: "5 tips for a sustainable Valentine's Day", href: '/studio/sustainable-valentines-day/' }, { label: 'Travelling with your card: fees and exchange rates explained', href: '/studio/card-exchange-rates/' }, { label: 'COP26: what it is and why it matters', href: '/studio/cop26/' }, { label: 'Can fintech be a force for good?', href: '/studio/fintech-for-good/' }] },
			// Feed card added 2026-11-20 cycle: same card as the blog index, so the news page advertises the feed too.
			{ wide: true, heading: 'Subscribe to the feed', body: 'Every insight article is also published as an Atom feed, so you can follow new articles in a feed reader. The feed is the English edition, and its address moves to the public domain at launch.', links: [{ label: 'Subscribe to the Atom feed', href: '/studio/feed.xml' }] }
		],
		cta: { label: 'Get in touch', href: '/studio/contact/' }
	},
	{
		slug: 'login',
		title: 'Log in',
		kicker: 'Account',
		lede: 'Log in to the Opello app with your email address. Accounts are not open yet, so there is nothing to sign in to today.',
		sections: [
			{ heading: 'How you log in', body: 'Open the app and enter your email address. We send a confirmation email to check it is you on this device. It should arrive within a couple of minutes.', href: '/studio/help-logging-in/', linkLabel: 'Read the logging in help' },
			{ heading: 'New here, or already started?', body: 'If this is your first time in the app, choose Get started. If you have opened the app before, choose I have an account to log in and carry on with your registration.' },
			{ heading: 'No confirmation email?', body: 'The email can take a few minutes and sometimes lands in the wrong place. Try these in order.', items: [
				'Check the email address for typos and capital letters in the wrong place.',
				'Check your spam or junk folder, and mark the email as not spam.',
				'Check that your phone or device is online, then try again.'
			] },
			{ heading: 'Locked out or still stuck?', body: 'Tell us what is happening and we will help you get back in. [Placeholder: support email and in-app chat route.]', href: '/studio/contact/', linkLabel: 'See contact options' },
			{ heading: 'Not live yet', body: 'Accounts open to customers at launch. Until then, there is no account to log in to. [Placeholder: launch date and the sign-up route, once Opello confirms them.]' }
		],
		cta: { label: 'See how to open an account', href: '/studio/open-account/' }
	},
	{
		slug: 'privacy-policy',
		title: 'Privacy policy',
		kicker: 'Legal',
		lede: 'How Opello uses your personal data, in plain English. This is a summary of our privacy notice. The full notice is the one linked below.',
		sections: [
			{ heading: 'Who we are', body: 'Opello Ltd is registered in England and Wales, company number 17324431. Registered office: Suite 401–402, Cumberland House, 80 Scrubs Lane, London NW10 6RF. Questions about your data go to privacy@opello.co.uk.' },
			{ heading: 'What we collect', body: 'Your name, date of birth, contact details and address. Identity documents and selfie checks. Proof of address. Tax residency details. How you use the app and this website. Records of the payments you make and receive. Support conversations.' },
			{ heading: 'Why we use it', body: 'To open and run your account, to check who you are, to meet our legal and regulatory duties, and to keep our services secure. We only send marketing if you have opted in, and you can withdraw that at any time.' },
			{ heading: 'Who we share it with', body: 'Our regulated e-money partner, which provides your account and card, and the service providers we use to run Opello, such as identity checks, fraud screening and hosting. We never sell your personal data.' },
			{ heading: 'Data outside the UK', body: 'Some of our services work across more than one country, so some data may be sent outside the UK. Where that happens, we use approved safeguards to protect it.' },
			{ heading: 'How long we keep it', body: 'While your account is open, and then for up to six years after it closes, to meet legal, tax and record-keeping rules. Marketing preferences are kept until you withdraw consent.' },
			{ heading: 'Your rights', body: 'You can ask for a copy of your data, ask us to correct or delete it, restrict or object to how we use it, and ask for it in a portable format. You can also withdraw consent at any time.' },
			{ heading: 'Cookies', body: 'Right now this website sets only the cookies it needs to work. We will not set any other cookies without asking you first, and you can block or delete cookies in your browser.' },
			{ heading: 'Complaints', body: 'Contact us first and we will look into it. You can also complain to the Information Commissioner\'s Office (ICO) at ico.org.uk or on 0303 123 1113.' }
		],
		cta: { label: 'Read the full privacy notice', href: '/privacy/' }
	},
	{
		slug: 'terms-and-conditions',
		title: 'Terms and conditions',
		kicker: 'Legal',
		lede: 'How you may use the Opello website. Placeholder terms until counsel signs off the final wording.',
		sections: [
			{ heading: 'About this website', body: 'This website is operated by Opello Ltd, registered in England and Wales, company number 17324431. Registered office: Suite 401–402, Cumberland House, 80 Scrubs Lane, London NW10 6RF.' },
			{ heading: 'Information and disclaimers', body: '[Placeholder: the information on this website is for general information only. It is not an offer or a recommendation, and it is not financial advice.]' },
			{ heading: 'Accuracy of information', body: '[Placeholder: we take reasonable care to keep this website accurate, but we do not guarantee that it is complete or up to date.]' },
			{ heading: 'Changes to the website and these terms', body: '[Placeholder: how we change the website and these terms, and how we tell you about changes.]' },
			{ heading: 'Where you live', body: '[Placeholder: who can open an account and use Opello products. Eligibility wording must match the account terms.]' },
			{ heading: 'Our products and our regulated partner', body: '[Placeholder: Opello distributes accounts and cards provided by a regulated e-money partner. Product terms, eligibility and safeguarding apply and are set out separately.]' },
			{ heading: 'Limits of our liability', body: '[Placeholder: limits on liability for losses from using the website. Must not limit liability that the law does not allow us to limit.]' },
			{ heading: 'Links to and from our site', body: '[Placeholder: links to other websites are for convenience only, and we are not responsible for their content.]' },
			{ heading: 'Intellectual property', body: '[Placeholder: the content, brand and designs on this website belong to Opello or its licensors.]' },
			{ heading: 'Governing law and jurisdiction', body: '[Placeholder: governing law and courts. Expected to be England and Wales, to confirm.]' }
		],
		cta: { label: 'Contact us', href: '/studio/contact/' }
	},
	{
		slug: 'customer-terms-and-conditions',
		title: 'Customer terms',
		kicker: 'Legal',
		lede: 'The agreement between you and Opello for your account and card. Placeholder summary until counsel signs off the full terms.',
		sections: [
			{ heading: 'About these terms', body: '[Placeholder: what these terms cover, how they form an agreement with you when you open an account, and how to contact us with questions.]' },
			// OUT OF MLP1 SCOPE — section removed, do not publish.

			{ heading: 'Fees and charges', body: '[Placeholder: what you pay for your account and card. The fee schedule is on its own page.]', href: '/studio/fees-and-charges/', linkLabel: 'See fees and charges' },
			// OUT OF MLP1 SCOPE — section removed, do not publish.

			{ heading: 'Privacy, complaints and liability', body: '[Placeholder: how we use your personal data, how to complain and how we handle disputes, and the limits of our liability.]' },
			{ heading: 'Changes, closing and governing law', body: '[Placeholder: how we change these terms and tell you, how you or we can close your account, and which courts and law apply.]' }
		],
		cta: { label: 'Read the privacy notice', href: '/studio/privacy-policy/' }
	},
	{
		slug: 'cookies-policy',
		title: 'Cookie policy',
		kicker: 'Legal',
		lede: 'What cookies are, the kinds we may use, and how you can manage them. Placeholder until the Opello cookie list is confirmed.',
		sections: [
			{ heading: 'What a cookie is', body: 'A cookie is a small file of letters and numbers that a website stores on your browser or device. It lets the site recognise you when you come back, and remember some of your choices.' },
			{ heading: 'Strictly necessary cookies', body: 'These keep the website working and cannot be switched off. They include cookies that keep you signed in to secure areas, and cookies that remember your consent choices.' },
			{ heading: 'Optional cookies', body: '[Placeholder: analytics, functionality and marketing cookies, only if Opello uses them. We will ask for your consent before setting any optional cookie.]' },
			{ heading: 'Cookies we use', body: '[Placeholder: table of cookie name, provider category, purpose and how long it lasts.]' },
			{ heading: 'Managing cookies', body: '[Placeholder: how to block or delete cookies in your browser, and what happens to the site if you do.]' },
			{ heading: 'Changes to this policy', body: '[Placeholder: how we will tell you about changes to this cookie policy.]' }
		],
		cta: { label: 'Read our privacy notice', href: '/privacy/' }
	},
	{
		slug: 'responsible-disclosure',
		title: 'Responsible disclosure',
		kicker: 'Legal',
		lede: 'We take the privacy and security of our customers seriously, and we value the work of security researchers who help us keep it that way.',
		sections: [
			{ heading: 'Our commitment', body: 'We operate a responsible disclosure policy. We work closely with security researchers so that any potential vulnerability reported to us is reviewed and fixed as soon as possible.' },
			{ heading: 'When to report', body: 'If you think you have found a security vulnerability that affects Opello systems, products, apps or customers, please send us a report as soon as you can.' },
			{ heading: 'Our guidelines', body: 'Do not make the vulnerability public without our approval. Do not access customer or employee personal information, or any confidential Opello information. If you do by accident, stop testing and report it straight away. If you gain access to a non-public system or to non-public credentials, stop and report it immediately. Do not degrade our services, disrupt production systems or destroy data. Do not run automated vulnerability scans.' },
			// OUT OF MLP1 SCOPE — section removed, do not publish.

			{ heading: 'Out of scope', body: 'Reports that are not real security issues, such as a forgotten password. Spam, social engineering or phishing. Publicly readable files such as robots.txt. Fingerprinting or version disclosure of common software. Guessing usernames or email addresses from error messages, unless there is an exceptional risk.' },
			{ heading: 'How to send a report', body: '[Placeholder: Opello security mailbox, to be set up before this page is published.]' }
		],
		cta: { label: 'Contact us', href: '/studio/contact/' }
	},
	{
		slug: 'fees-and-charges',
		title: 'Fees and charges',
		kicker: 'Legal',
		// Out of MLP1 scope — Borderless account is not in the first release; Borderless reference removed.
		lede: 'Every fee we charge, set out in one place, so you can see what applies to you before you open an account.',
		// Full-PDF re-check 2026-11-20 (00:50 Dubai run): the Standard customer table is now covered
		// in full. Rows deliberately left out are out of MLP1 scope (physical-card issuance and
		// replacement, cash withdrawals, in-account currency conversion) or not yet available
		// (Direct Debit and standing orders, per the FAQ). The PDF's Borderless and Business
		// customer tables are out of scope and not summarised. The PDF has no chargeback fee row;
		// the chargeback window lives in the help answers.
		sourceNotes: [
			'Source: algbra.com fees and charges PDF (last updated 7 April 2026), re-checked in full on 20 November 2026: the Standard customer table is covered above; the PDF\'s other customer tables (Borderless and Business) are out of the first-release scope and are not summarised.',
			'Rows left out on purpose: physical-card issuance and replacement, cash withdrawals and in-account currency conversion (out of first-release scope), and Direct Debit and standing orders (not yet available, per the FAQ). The PDF has no chargeback fee row; the chargeback claim window is covered in the help answers.',
			'Every figure is Algbra\'s published rate, shown for reference. The Opello fee schedule must be confirmed before this page publishes.',
			'Cost calculator (2026-11-25): worked from the schedule above — sending money outside the UK, fixed £15 plus an FX fee of 1.00%. No exchange-rate estimate is shown (rates are shown in the app before a transfer is confirmed). Figures and wording pending sign-off.'
		],
		sections: [
			{ heading: 'Standard account', body: 'No monthly account fee. UK payments are free: sending and receiving by FPS, BACS or CHAPS, and paying by card in pounds online or over the phone.' }, { heading: 'Sending and receiving money abroad', body: 'Sending money outside the UK: a fixed £15 fee per transaction, plus an FX fee of 1.00%. Receiving money from outside the UK in pounds: a fixed £10 fee, plus an FX fee of 1.00% for other currencies. Intermediary bank fees may also apply.' },
			// Out of MLP1 scope — physical-card and cash-machine fees removed (no physical card at launch); virtual card and FX fees kept.
			{ heading: 'Cards', body: 'First three virtual cards free, then £1 each, up to five in total. Card cancellation after 14 days: £2.50. Foreign-currency card payments: 1.50% FX fee.', href: '/studio/cards/', linkLabel: 'See cards' }, { heading: 'Other fees', body: 'Administration fee up to £10, for example returning funds after account closure or mediating a disputed payment. Paper statements £5. Dormant accounts: up to £1 a month after six months. Overdrafts are not supported; repeated negative balances may lead to an administration fee.' }
		],
		cta: { label: 'Read our terms', href: '/studio/terms-and-conditions/' }
	},
	{
		slug: 'accessibility',
		title: 'Accessibility',
		kicker: 'Legal',
		lede: 'How we are working to make Opello usable by everyone, what we have checked so far, and how to tell us when something gets in your way. Placeholder until the statement is confirmed.',
		metaDescription: "How we are making Opello usable by everyone, what we have checked so far, and how to tell us when something gets in your way. Draft statement.", // shorter than the lede for search snippets; lede untouched
		sections: [
			{ heading: 'Our commitment', body: '[Placeholder: we aim to make our website and app meet the WCAG 2.2 AA standard, and we treat accessibility problems as bugs to fix.]' },
			{ heading: 'What we have checked', body: 'Automated colour-contrast scans of every studio page at desktop and phone widths, with the failures fixed (17 November 2026), and a full automated accessibility sweep (axe) re-run across all pages at 1440 and 390 pixels with no violations (21 November 2026). Keyboard: focus-visible rings on navigation, footer and card links plus a skip-to-content link on every page template (17 November 2026); tab order and keyboard-trap checks on English and right-to-left Arabic pages (17 and 22 November 2026); the language menu and the search panel operated by keyboard end to end, with Escape closing and returning focus (23 November 2026). Screen-reader spot-checks: heading order, skip links, main landmark, link text and tab order (17 November 2026). Touch targets: sizes checked at phone width, with undersized links found and fixed (20 November 2026). Layouts: checked by eye at 1440 and 390 pixels (17 November 2026), then reflow-checked at 320 pixels and under 200% zoom, with clipped text found and fixed (21 and 23 November 2026), and a text-spacing override sweep with nothing hidden or clipped (23 November 2026). Reduced motion: honoured in behaviour, not just in code, with zero running animations under emulation across the studio (22 and 23 November 2026). Contrast beyond text: text over photos sampled by pixel, icons at least 3:1, and high-contrast (forced-colours) mode renders everything (21 November 2026). Control naming and states: every control has an accessible name with no ambiguous labels, menus and panels announce their state, and status is never conveyed by colour alone (21 to 23 November 2026).' },
			{ heading: 'Known gaps', body: 'The homepage and product photos are placeholders: they carry descriptive alt text, which will be re-checked when licensed photography replaces them. The phone screens in the hero show sample content, not real app screens (hidden from screen readers). A full third-party audit has not been run.' },
			{ heading: 'Tell us about a problem', body: '[Placeholder: if something is hard to use, email the accessibility team at a placeholder address and say what you were trying to do. We will reply and suggest another way to get it done.]', href: '/studio/contact/', linkLabel: 'See contact details' },
			{ heading: 'Assistive technology and alternatives', body: '[Placeholder: options such as contacting us by phone or in branch, if they are offered.]' },
			{ heading: 'Review date', body: '[Placeholder: date this statement was last reviewed, and how often we will review it.]' }
		],
		cta: { label: 'Read our terms', href: '/studio/terms-and-conditions/' }
	},
	{
		slug: 'help-articles',
		title: 'Help articles',
		kicker: 'Help',
		lede: 'The articles in each help category. Titles are taken from Algbra\'s help centre. Getting started, Logging in, My card, My account, Ethical Saver, Security and data, About Opello and Get in touch answers are written.',
		metaDescription: "Help articles by category: getting started, logging in, my card, my account, Ethical Saver, security and data, about Opello and get in touch.", // shorter than the lede for search snippets; lede untouched
		sections: [
			{ heading: 'Getting started', body: 'Opening your account and setting up.', href: '/studio/help-getting-started/', linkLabel: 'Read the answers', items: [
				'Am I eligible for an account?', 'Do you carry out credit checks?', 'Where can I download the app?', 'What do I need to open an account?', 'Why do I need to verify my identity?', 'Finding your tax identification number (TIN)', 'How can I add funds?', 'Does Opello accept Bacs payments?', 'Can I deposit cash or cheques into my account?'
			] },
			{ heading: 'Logging in', body: 'Getting into your account, and what to do if the confirmation email does not arrive.', href: '/studio/help-logging-in/', linkLabel: 'Read the answers', items: [
				'Why am I not getting a confirmation email?'
			] },
			{ heading: 'My card', body: 'Using, protecting and managing your card.', href: '/studio/help-my-card/', linkLabel: 'Read the answers', items: [
				'How do I get my card?', 'Where can I use my card?', 'Can I use my card abroad?', 'How is the exchange rate calculated?', 'Are my card transactions protected?', 'What if my card is lost or stolen?', 'What is 3D Secure?', 'How do I freeze my card?'
				// Out of MLP1 scope — titles kept for later iterations: 'How long until my card arrives?', 'Can I add my card to a digital wallet?', 'Can I use my card to withdraw cash?', 'How can I change my card PIN?', 'How do I check my card PIN?' (answers unpublished on help-my-card).
			] },
			{ heading: 'My account', body: 'Statements, limits, Cubes and transfers.', href: '/studio/help-my-account/', linkLabel: 'Read the answers', items: [
				'How do I generate a statement?', 'What are my account limits?', 'What are Cubes?', 'How do I create a regular Cube?', 'Can I make international transfers?'
			] },
			{ heading: 'Ethical Saver Cubes', body: 'Fixed-term savings, profit, tax and protection.', href: '/studio/help-ethical-saver/', linkLabel: 'Read the answers', items: [
				'What are Ethical Saver Cubes?', 'How do Ethical Saver Cubes work?', 'Is there a minimum deposit?', 'Can I withdraw my money early?', 'How are Ethical Saver Cubes Sharia-compliant?', 'Can I open more than one?', 'What happens when my Cube matures?', 'Are the profits guaranteed?', 'Can I close my account while I have Cubes?', 'Do I need to pay tax on my profit?'
			] },
			// The Ethical Saver help page is live with these ten answers (six out-of-scope answers purged there 2026-11-20; index section restored 2026-11-21 after the MLP1 purge had dropped it by mistake).

			{ heading: 'Security and data', body: 'How we protect your money and your information.', href: '/studio/help-security-data/', linkLabel: 'Read the answers', items: [
				'Is my money safe?', 'How secure is my account?', 'What personal data do I need to share?', 'How does Opello process my data?', 'How do I opt out of marketing notifications?', 'Keeping your money safe: authorised push payment (APP) scams'
			] },
			{ heading: 'About Opello', body: 'Who we are and what we do.', href: '/studio/help-about-opello/', linkLabel: 'Read the answers', items: [
				'What is Opello?', 'What makes Opello different?', 'Does Opello have any fees?', 'Why is community important to us?', 'Where is Opello based?', 'From which countries can I open an account?'
			] },
			{ heading: 'Get in touch', body: 'Contacting us, complaints and closing your account.', href: '/studio/help-get-in-touch/', linkLabel: 'Read the answers', items: [
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
		// Page-level sources restored 2026-11-19 (23:45 Dubai run).
		// 2026-11-22 count check: the live article carries 108 country rows (the earlier
		// "109" here was a miscount); this page's list matches it row-for-row, same order.
		sourceNotes: [
			'Source: help.algbra.com TIN article (26 Jun 2026), reproduced as published. Re-checked 2026-11-22 against the live article: 108 country rows, matched row-for-row by this page (list verified against help.algbra.com/en/articles/15654962).',
			'Opello to confirm the list scope (all 108 countries or applicant countries only) and whether to add a country filter before this publishes.'
		],
		sections: [
			{ heading: 'Tax number by country', countries: true, body: 'Find your country below. Some countries use a national ID number instead, and some issue no tax number at all. If your country does not issue a TIN, you may be asked to confirm this instead.', items: [
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
		// Page-level sources restored 2026-11-19 (23:45 Dubai): the help pages had lost their per-answer notes in an earlier edit, leaving Algbra-sourced claims unmarked.
		sourceNotes: [
			'Source: help.algbra.com Getting started articles, adapted for Opello.',
			'Eligibility: Algbra help says UK residents only, which conflicts with the customer-residence markets in MLP1 scope. See DECISION-eligibility.md in the cycle folder. Do not publish until decided.',
			'The Bacs answer (salary and benefits paid in) conflicts with the FAQ, which lists Faster Payments only. See DECISION-payments.md.',
			'Identity-check, cash/cheque and approval-timing wording, and the app-store names, need Opello confirmation before publishing.'
		],
		sections: [
			{ heading: 'Am I eligible for an account?', body: 'To open an Opello account you need to be a UK resident aged 18 or over. You will also need a valid photo ID, like a passport or driving licence.', href: '/studio/help-articles/', linkLabel: 'Back to article titles' },
			{ heading: 'Do you carry out credit checks?', body: 'No. We do not carry out credit checks, so opening an Opello account has no impact on your credit rating or borrowing ability. Our identity checks may leave a soft footprint on your credit history, which has no effect on your rating.', href: '/studio/open-account/', linkLabel: 'See how to open an account' },
			{ heading: 'Where can I download the app?', body: 'The Opello app is available on iOS from the App Store, and on Android from the Play Store.', href: '/studio/download/', linkLabel: 'Get the app' },
			{ heading: 'What do I need to open an account?', body: 'You need an internet-connected device with a camera, a mobile number, a valid ID document such as a passport or driving licence, and proof of address, such as a utility bill. In the app you record a short video of yourself and take a photo of your ID. Once approved, you can use your account straight away.', href: '/studio/faq/', linkLabel: 'More in the FAQ' },
			{ heading: 'Why do I need to verify my identity?', body: 'Financial rules require us to verify who you are. These are known as Know Your Customer (KYC) and Customer Due Diligence (CDD). The checks protect our community and keep your account secure. You will need a valid, in-date government photo ID. We can only use the original document. If we cannot verify your address from the one you give, we may ask for proof of address and will tell you what we need.', href: '/studio/open-account/', linkLabel: 'See how to open an account' },
			{ heading: 'Finding your tax identification number (TIN)', body: 'Your tax number depends on the country that issued it. Some countries use a national ID number instead, and some issue no tax number at all. The country list is on its own page.', href: '/studio/help-tin/', linkLabel: 'See the country list' },
			{ heading: 'How can I add funds?', body: 'Tap Add Money on the Home tab. You can make an instant bank transfer from a supported bank account, with no bank details to enter. You can also send money by transfer from your account details. Most transfers are instant. To move money from your Cubes to your main balance, use the Cubes option, which is instant.', href: '/studio/transfers/', linkLabel: 'See transfers' },
			{ heading: 'Does Opello accept Bacs payments?', body: 'Yes. You can have your salary or benefits paid into your Opello account.', href: '/studio/faq/', linkLabel: 'Check payments in the FAQ' },
			{ heading: 'Can I deposit cash or cheques into my account?', body: 'Not at the moment. We do not accept cash or cheque deposits.' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'help-logging-in',
		title: 'Logging in',
		kicker: 'Help articles',
		lede: 'Answers to the Logging in questions, taken from the Algbra help centre and written for Opello. Not final until the app screens and support route are confirmed.',
		// Page-level sources restored 2026-11-19 (23:45 Dubai run).
		sourceNotes: [
			'Source: help.algbra.com Logging in articles, adapted for Opello.',
			'App screen names, whether a web log in exists, and the locked-out support route are placeholders until Opello confirms them.'
		],
		sections: [
			{ heading: 'Why am I not getting a confirmation email?', body: 'When you log in, we send a confirmation email to check it is you on this device. It should arrive within a couple of minutes. If it does not, work through the checks on this page.', href: '/studio/contact/', linkLabel: 'See contact options' },
			{ heading: 'Check your email address', body: 'Look for typos, and for a capital letter in the wrong place. If the address is wrong, choose Change your email address in the app and try again.' },
			{ heading: 'Check your spam or junk folder', body: 'The email can land there by mistake. If you find it, mark it as not spam so future emails reach your inbox.' },
			{ heading: 'Check your connection', body: 'Make sure your phone or device is online, then try again. A weak signal can hold up the email.' },
			{ heading: 'New to the app, or already started?', body: 'If this is your first time in the app, choose Get started. If you have opened the app before, choose I have an account to log in and carry on with your registration. Use the Having trouble? button if you are still stuck.' },
			{ heading: 'Still stuck?', body: 'Use the chat icon at the top right of the app and tell us what is happening. You can also email us at [placeholder: Opello support email].', href: '/studio/contact/', linkLabel: 'See contact options' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'help-security-data',
		title: 'Security and data',
		kicker: 'Help articles',
		lede: 'Answers to the Security and data questions, taken from the Algbra help centre and written for Opello. Not final until the flagged points are signed off.',
		// Page-level sources restored 2026-11-19 (23:45 Dubai run).
		sourceNotes: [
			'Source: help.algbra.com Security and data articles, adapted for Opello.',
			'Safeguarding and protection wording, the APP-scam answer (shortened from Algbra\'s article) and the Action Fraud reporting details need Algbra or compliance sign-off.'
		],
		sections: [
			// OUT OF MLP1 SCOPE — section removed, do not publish.

			{ heading: 'How secure is my account?', body: 'The Opello app uses bank-grade encryption to protect your data, both when it moves and when it is stored. To keep your account safe, keep your account details private and your card secure. If you think someone else has access to your account, freeze your card and contact us straight away.', href: '/studio/contact/', linkLabel: 'See contact options' },
			{ heading: 'What personal data do I need to share?', body: 'To open an account we need your legal name, date of birth, phone number, email address, identity documents and card delivery details. In some cases we may ask for more information so we can support you with our services. We use this to verify your identity, protect accounts from fraud, prevent financial crime and provide our services. Our privacy notice explains more.', href: '/privacy/', linkLabel: 'Read the privacy notice' },
			{ heading: 'How does Opello process my data?', body: 'Our privacy notice explains how we process and protect your personal data. You can read it on this website or in the app.', href: '/studio/privacy-policy/', linkLabel: 'Read the privacy policy' },
			{ heading: 'How do I opt out of marketing notifications?', body: 'Go to the Privacy section in the Opello app. There you can opt out of, or back into, marketing emails and push notifications at any time.' },
			{ heading: 'Keeping your money safe: authorised push payment (APP) scams', body: 'An APP scam is when you are tricked into sending money by bank transfer to a fraudster. Scammers may pretend to be your bank, HMRC or a delivery firm, pose as a friend or relative in trouble, offer purchases that never arrive, build a romance to ask for money, or promise fast returns on an investment. Protect yourself by staying alert to urgent requests, checking payment details through a number you already know, and never moving money to a "safe" account because someone on the phone asked you to. If you have already sent money in a scam, contact us in the app or by email straight away, and report it to Action Fraud on 0300 123 2040 (in Scotland, contact the police on 101). The sooner you report it, the better our chances of getting the money back.', href: '/studio/faq/', linkLabel: 'Read the FAQ' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'help-my-card',
		title: 'My card',
		kicker: 'Help articles',
		lede: 'Answers to the My card questions, taken from the Algbra help centre and written for Opello. Not final until the flagged points are signed off.',
		// Page-level sources restored 2026-11-19 (23:45 Dubai run).
		sourceNotes: [
			'Source: help.algbra.com My card articles, adapted for Opello and trimmed to virtual cards (physical cards and wallets are out of MLP1 scope).',
			'The "over 210 countries and territories" figure is the card network\'s published acceptance reach, taken from Algbra\'s answer. Confirm for Opello before publishing.',
			'The exchange-rate and chargeback answers describe the card network\'s rate and scheme; the 45-day merchant window is Algbra\'s wording. Needs Algbra or compliance sign-off.',
			'The 3D Secure passcode wording needs compliance sign-off. Loss, freeze and contact routes depend on the Opello support contacts, which are placeholders.'
		],
		sections: [
			// Out of MLP1 scope — physical cards and wallets not confirmed for day one; answer rewritten for virtual cards only.
			{ heading: 'How do I get my card?', body: 'Tap Cards on the Home tab, then tap + to order. Your virtual card lives in the app and works for online payments.', links: [
				{ label: 'Learn about cards', href: '/studio/cards/' }] },
			/* Out of MLP1 scope — physical card delivery is not applicable at launch. Do not publish.
			{ heading: 'How long until my card arrives?', body: 'When you order a physical card, the app shows an estimated delivery time. It usually takes 3 to 5 working days in the UK. If it has not arrived by then, allow a couple of extra days for postal delays. If it still has not arrived, contact us in the app and we will send a replacement.' },
			*/
			{ heading: 'Where can I use my card?', body: 'Yes. You can use your card to pay online anywhere that shows the card network logo. If you have any trouble, get in touch with us through the in-app chat.', href: '/studio/cards/', linkLabel: 'Learn about cards' },
			{ heading: 'Can I use my card abroad?', body: 'Yes. You can use your card online anywhere the card network is accepted, which covers over 210 countries and territories.', href: '/studio/fees-and-charges/', linkLabel: 'See fees and charges' },
			/* Out of MLP1 scope — cash withdrawals need a physical card, which is not confirmed for day one. Do not publish.
			{ heading: 'Can I use my card to withdraw cash?', body: 'Yes. Your physical card works in cash machines in the UK and abroad. If you forget your PIN, tap Cards on the Home tab, swipe to your physical card and tap Security.', href: '/studio/fees-and-charges/', linkLabel: 'See fees and charges' },
			*/
			/* Out of MLP1 scope — digital wallets (Apple Pay / Google Pay) are not confirmed for day one. Do not publish.
			{ heading: 'Can I add my card to a digital wallet?', body: 'Yes. Tap Cards on the Home tab, swipe to the card you want to add, and tap Add to wallet.', href: '/studio/cards/', linkLabel: 'Learn about cards' },
			*/
			{ heading: 'How is the exchange rate calculated?', body: 'When you pay in another currency, we use the card network\'s exchange rate. You can check the current rates on the card network\'s website at any time.', href: '/studio/fees-and-charges/', linkLabel: 'See fees and charges' },
			{ heading: 'Are my card transactions protected?', body: 'Yes. Card purchases are covered by the card network\'s chargeback scheme. You can dispute a payment if goods or services did not arrive, were not as described or were faulty, a refund was not processed, a charge was duplicated or wrong, or the payment was not authorised. Try to sort it out with the merchant first. Once a chargeback is raised, the merchant usually has up to 45 days to respond, and the process can take several weeks. We will keep you updated.', href: '/studio/faq/', linkLabel: 'Read the FAQ' },
			// Out of MLP1 scope — physical-card step removed from the freeze instructions (virtual cards only at launch).
			{ heading: 'What if my card is lost or stolen?', body: 'Freeze the card straight away. Tap Cards on the Home tab, tap Freeze card, then select Report lost or stolen. Please also contact us, especially if you see transactions you did not make.', href: '/studio/help/', linkLabel: 'Get in touch' },
			{ heading: 'What is 3D Secure?', body: '3D Secure is an extra check for some online payments. When a payment needs it, we send a one-time passcode by text message to the mobile number on your account. Enter the code at checkout. You will only need it when a payment is flagged, not every time. We will never ask you to share a passcode, so never give one to anyone, even someone who sounds trustworthy. If you do not recognise a payment, do not enter the code. Freeze your card in the app and contact us straight away.', href: '/studio/contact/', linkLabel: 'See contact options' },
			/* Out of MLP1 scope — PIN management steps describe a physical card and cash machines, which are not confirmed for day one. Do not publish.
			{ heading: 'How can I change my card PIN?', body: 'Tap Cards on the Home tab, swipe to your physical card, tap Security, then tap Change PIN and follow the steps on screen. Then visit any cash machine, insert your card, and do a balance check or cash withdrawal to confirm the new PIN.' },
			{ heading: 'How do I check my card PIN?', body: 'Tap Cards on the Home tab, swipe to your physical card, tap Security, then tap See your PIN.' },
			*/
			{ heading: 'How do I freeze my card?', body: 'Tap Cards on the Home tab, swipe to the card you want to freeze, and turn on Freeze card. You can also freeze it by contacting us in the app as soon as you notice suspicious activity or lose your card.', href: '/studio/contact/', linkLabel: 'See contact options' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'help-my-account',
		title: 'My account',
		kicker: 'Help articles',
		lede: 'Answers to the My account questions that are not about Ethical Saver Cubes, taken from the Algbra help centre and written for Opello. Not final until the flagged points are signed off.',
		metaDescription: "Answers to the My account questions, written for Opello. Not final until the flagged points are signed off.", // shorter than the lede for search snippets; lede untouched
		// Page-level sources restored 2026-11-19 (23:45 Dubai run).
		sourceNotes: [
			'Source: help.algbra.com My account articles, adapted for Opello.',
			'The no-maximum-balance claim and the app steps need Opello confirmation.',
			'The international-transfers answer (receive-only, no charge for receiving, sanctioned-countries list) is Algbra\'s published wording and conflicts with the MLP1 scope, which lists international GBP payments as in scope. See DECISION-payments.md. Do not publish until decided.'
		],
		sections: [
			{ heading: 'How do I generate a statement?', body: 'In the app, tap the three dots on the Home tab, then tap Statements. Choose the date range you want to see and the format you need: PDF, or CSV and QIF if you use a compatible accounting tool.' },
			{ heading: 'What are my account limits?', body: 'Your account has no maximum balance. To see your spending limits, tap your profile icon at the top of the Home screen, then tap Limits. If you have a question, get in touch through the in-app chat or email us.', href: '/studio/contact/', linkLabel: 'See contact details' }, { heading: 'Can I make international transfers?', body: 'At the moment you can receive pound sterling transfers from accounts outside the UK, and there is no charge for receiving them. You cannot send money outside the UK yet, and we will tell you when that changes. We cannot accept transfers from some countries, including Belarus, Cuba, Iran, North Korea, Russia, Syria and some regions of Ukraine. Payments in any other currency are sent back to the sending account, which can take several days.', href: '/studio/transfers/', linkLabel: 'See transfers' },
			{ heading: 'Ethical Saver Cube questions', body: 'Sixteen Algbra articles cover Ethical Saver Cubes: what they are, how they work, profit rates, early withdrawal, tax, Sharia compliance and whether savings are protected. They are written up on their own page, pending compliance sign-off.', href: '/studio/help-ethical-saver/', linkLabel: 'Read the answers' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'help-ethical-saver',
		title: 'Ethical Saver help',
		kicker: 'Help articles',
		lede: 'Sixteen answers on Ethical Saver Cubes, taken from the Algbra help centre and written for Opello. Not for publication until compliance has signed off the savings, protection and Sharia wording.',
		metaDescription: "Sixteen answers on Ethical Saver Cubes, written for Opello. Not for publication until compliance has signed off the wording.", // shorter than the lede for search snippets; lede untouched
		// Page-level sources restored 2026-11-19 (23:45 Dubai run).
		sourceNotes: [
			'Source: sixteen help.algbra.com Ethical Saver articles, adapted for Opello. The whole page is held for compliance sign-off (savings protection, Murabaha/Sharia, profit rate, tax, early withdrawal); nothing here extends until signed off.'
		],
		sections: [
			{ heading: 'What are Ethical Saver Cubes?', body: 'Ethical Saver Cubes are a savings feature in the Opello app. You earn a fixed, agreed amount of profit over a set period. Your money is held in a savings portfolio run by our partner bank.', href: '/studio/ethical-savings/', linkLabel: 'See Ethical Saver Cubes' }, // Out of MLP1 scope — the original body said savings "support environmental and social projects" and that we show "estimated CO₂ emissions avoided and clean water generated" (impact tracking / Planet Impact). Do not publish.
			{ heading: 'How do Ethical Saver Cubes work?', body: 'Choose how much to save and a fixed term, such as 3, 6 or 12 months. Your expected profit is shown before you confirm. Your money is locked for the term, and at the end you get your savings plus the agreed profit. The return is fixed in advance, so there are no market ups and downs.' },
			{ heading: 'Is there a minimum deposit?', body: 'There is no minimum deposit at the moment. This may change in future.' },
			{ heading: 'Can I withdraw my money early?', body: 'No. Ethical Saver Cubes are fixed-term savings, so you cannot withdraw early, and you cannot add money once the Cube is created. You can open another Ethical Saver Cube if you want to save more. Only save what you can leave untouched until the Cube matures.' },
			{ heading: 'How are Ethical Saver Cubes Sharia-compliant?', body: 'They are built on Murabaha, a Sharia-compliant cost-plus-profit sale. Your profit comes from a profit rate agreed up front on a sale, not from interest. Your money is never used to finance sectors considered harmful, such as alcohol, gambling, tobacco and arms.' },
			// OUT OF MLP1 SCOPE — section removed, do not publish.

			// OUT OF MLP1 SCOPE — section removed, do not publish.

			{ heading: 'Can I open more than one?', body: 'Yes. You can open several Cubes with different terms, up to a total of \u00a3120,000 across all active Ethical Saver Cubes.' },
			{ heading: 'What happens when my Cube matures?', body: 'At maturity we offer to put your money into a new Ethical Saver Cube. If you do not want that, your deposit and profit go back to your Opello account, where you can withdraw it, spend it or save it in a new Cube.' },
			{ heading: 'Are the profits guaranteed?', body: 'Yes. The Expected Profit Rate is agreed in advance and fixed once the Cube is opened.' }, { heading: 'Can I close my account while I have Cubes?', body: 'No. You need to wait until all your active Cubes have matured and the money is back in your account balance.', href: '/studio/help-get-in-touch/', linkLabel: 'Read about closing your account' },
			{ heading: 'Do I need to pay tax on my profit?', body: 'Your profit may be taxable, depending on your circumstances. It counts towards your Personal Savings Allowance. Opello does not take tax off automatically, so you may need to report it to HMRC.' }, // OUT OF MLP1 SCOPE — section removed, do not publish.

			// OUT OF MLP1 SCOPE — section removed, do not publish.
			
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'help-about-opello',
		title: 'About Opello',
		kicker: 'Help articles',
		lede: 'Answers to the About Opello questions, adapted from the Algbra help centre and written for Opello. Not final until the flagged points are signed off.',
		// Page-level sources restored 2026-11-19 (23:45 Dubai run).
		sourceNotes: [
			'Source: help.algbra.com About Algbra articles, adapted for Opello (Algbra\'s charity, card scheme and London contact not reused).',
			'The product list and community work are placeholders. The eligibility answer (UK residents, with a plan to open to other countries) conflicts with the other eligibility touchpoints; see DECISION-eligibility.md.'
		],
		sections: [
			// OUT OF MLP1 SCOPE — section removed, do not publish.,
			{ heading: 'Does Opello have any fees?', body: 'Our fees and charges are set out in full on our fees page, so you can check what applies to the account you choose before you open it.', href: '/studio/fees-and-charges/', linkLabel: 'See fees and charges' },
			// OUT OF MLP1 SCOPE — section removed, do not publish.

			{ heading: 'Where is Opello based?', body: 'Opello is based in London, United Kingdom. You can find our company details and how to reach us on the contact page.', href: '/studio/contact/', linkLabel: 'See contact details' },
			{ heading: 'From which countries can I open an account?', body: 'At the moment you can open an Opello account if you live in the UK. We plan to open to other countries over time, and we will tell you when that happens.', href: '/studio/help-getting-started/', linkLabel: 'Read the eligibility answer' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'help-get-in-touch',
		title: 'Get in touch',
		kicker: 'Help articles',
		lede: 'Answers to the Get in touch questions, taken from the Algbra help centre and written for Opello. Every contact detail is a placeholder until Opello sets up its own channels.',
		metaDescription: "Answers to the Get in touch questions, written for Opello. Every contact detail is a placeholder until Opello sets up its own channels.", // shorter than the lede for search snippets; lede untouched
		// Page-level sources restored 2026-11-19 (23:45 Dubai run).
		sourceNotes: [
			'Source: help.algbra.com Get in touch articles, adapted for Opello.',
			'Complaints timescales (15 and 35 working days), the Financial Ombudsman Service details and the close-account rules need compliance sign-off. Every contact detail is a placeholder. App screen names and their positions are placeholder guidance until Opello confirms the screens.'
		],
		sections: [
			{ heading: 'How do I get in touch?', body: 'For general enquiries, email [placeholder: Opello general enquiries email]. To speak to our Support team, tap the profile icon at the top left of your Home screen in the Opello app and choose Support. There you can chat with us live, or email [placeholder: Opello support email]. If you have lost your card or see suspicious activity and cannot get into the app, email [placeholder: Opello emergency email] or call [placeholder: Opello emergency phone number] straight away.', href: '/studio/contact/', linkLabel: 'See contact details' },
			{ heading: 'What is your complaints procedure?', body: 'We want to hear when we have not met your expectations. Tell our team through the in-app chat, or email [placeholder: Opello complaints email]. Please include your first name and surname, the phone number and email address on your account, what the issue is, when it started, and how you would like us to put it right. We will acknowledge your complaint and look into it as quickly as we can. This usually takes a few days, but it can take up to 15 working days, and in extraordinary cases up to 35 working days, to send our final response. If we need more than 15 working days, we will tell you in advance. If you are not happy with our final response, you can escalate your complaint to the Financial Ombudsman Service (FOS) through their website or by calling 0800 023 4567.', href: '/studio/contact/', linkLabel: 'See contact details' },
			{ heading: 'How do I close my account?', body: 'You can close your account by speaking to our Support team in the in-app chat. Logging in and telling us there lets us check that it is you asking. You will need to bring your balance to zero first. At the moment, once an account is closed we cannot reopen it or offer you a new account later. If something has gone wrong, please tell us before you decide, so we have a chance to put it right.', href: '/studio/contact/', linkLabel: 'See contact details' }
		],
		cta: { label: 'Back to help articles', href: '/studio/help-articles/' }
	},
	{
		slug: 'blog',
		title: 'Blog',
		kicker: 'Blog',
		// Blog split hero: generated placeholder until licensed photography is supplied.
		hero: { variant: 'split', alt: 'A person relaxing in an armchair by a large window, reading a printed magazine with a ceramic mug on a side table' },
		lede: 'Stories from the Opello team and the community, on money, sustainability and everyday spending. [Placeholder: first posts, in Opello wording.]',
		sections: [
			// Blog rebalance 2026-11-19: both cards run full width (wide flag), like the news insights
			// card, so the short placeholder card no longer sits beside the tall list with dead space.
			{ wide: true, heading: 'Read the insights', body: 'The explainers already written for Opello.', links: [{ label: 'What are chargebacks, and when can you claim?', href: '/studio/chargebacks/' }, { label: 'What are virtual cards, and how do they work?', href: '/studio/virtual-cards/' }, { label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' }, { label: 'A Green Break: how to holiday sustainably', href: '/studio/green-break/' }, { label: 'Money and mental health: 5 free mood boosters', href: '/studio/money-and-mental-health/' }, { label: 'What is World Wildlife Day, and why does it matter?', href: '/studio/world-wildlife-day/' }, { label: 'The pros and cons of a cashless society', href: '/studio/cashless-society/' }, { label: 'Seven principles for implementing the Consumer Duty', href: '/studio/consumer-duty/' }, { label: 'The bright side of dark mode', href: '/studio/dark-mode/' }, { label: 'Climate catastrophes: at our doorstep', href: '/studio/climate-catastrophes/' }, { label: 'A just transition: an achievable goal?', href: '/studio/just-transition/' }, { label: "5 tips for a sustainable Valentine's Day", href: '/studio/sustainable-valentines-day/' }, { label: 'Travelling with your card: fees and exchange rates explained', href: '/studio/card-exchange-rates/' }, { label: 'COP26: what it is and why it matters', href: '/studio/cop26/' }, { label: 'Can fintech be a force for good?', href: '/studio/fintech-for-good/' }] },
			{ wide: true, heading: 'First Opello posts', body: '[Placeholder: the first two or three posts from the Opello team, once written and approved.]' },
			// Feed card 2026-11-20: visible Atom subscription for human readers (the autodiscovery link is in the head on every page; llms.txt was a second pointer but is removed from the live build until launch — see the launch checklist in signoff.md). The feed is the English edition; the URL rides on STUDIO_ORIGIN and repoints at launch.
			{ wide: true, heading: 'Subscribe to the feed', body: 'Every insight article is also published as an Atom feed, so you can follow new articles in a feed reader. The feed is the English edition, and its address moves to the public domain at launch.', links: [{ label: 'Subscribe to the Atom feed', href: '/studio/feed.xml' }] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	{
		slug: 'chargebacks',
		title: 'What are chargebacks, and when can you claim?',
		metaTitle: "Chargebacks explained",
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
			{ heading: 'How long it takes', body: '[Placeholder: how long a chargeback takes and what you will hear from us, to be confirmed by Opello.]', note: 'Placeholder. Algbra does not give a timescale in this article.', source: 'placeholder', links: [
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'Read the FAQ', href: '/studio/faq/' },
				{ label: 'Back to News', href: '/studio/news/' }
			] }
		],
		cta: { label: 'Get in touch', href: '/studio/contact/' }
	},
	{
		slug: 'green-banking',
		title: 'What is green banking, and why does it matter?',
		metaTitle: "What is green banking?",
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
			// Out of MLP1 scope — Planet Impact and carbon-offsetting links removed (Donations / Planet Impact are out of scope for MLP1). Do not publish those links.
			{ heading: 'Read next', body: 'More on saving and ethical finance from Opello.', source: 'placeholder', links: [
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'Ethical Saver', href: '/studio/ethical-savings/' },
				{ label: 'World Wildlife Day', href: '/studio/world-wildlife-day/' }
			] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	{
		slug: 'green-break',
		title: 'A Green Break: how to holiday sustainably',
		metaTitle: "How to holiday sustainably",
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
			// Out of MLP1 scope — 'Offset your carbon emissions' section removed (Planet Impact is out of scope for MLP1; the offsetting claim is unconfirmed for Opello). Do not publish.
			{ heading: 'Read next', body: 'More on sustainability and travel from Opello.', source: 'placeholder', links: [
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' },
				{ label: 'What is World Wildlife Day, and why does it matter?', href: '/studio/world-wildlife-day/' }
			] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	{
		slug: 'money-and-mental-health',
		title: 'Money and mental health: 5 free mood boosters',
		metaTitle: "Money and mental health",
		kicker: 'Insights',
		lede: 'The link between money and mental health is often overlooked. Financial strain can worsen mental health, and poor mental health can make money harder to manage. Here are five free things that can help.',
		metaDescription: "The link between money and mental health is often overlooked. Five free things that can help.", // shorter than the lede for search snippets; lede untouched
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
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' },
				{ label: 'What is World Wildlife Day, and why does it matter?', href: '/studio/world-wildlife-day/' }
			] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	{
		slug: 'world-wildlife-day',
		title: 'What is World Wildlife Day, and why does it matter?',
		metaTitle: "What is World Wildlife Day?",
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
			{ heading: 'How to make an impact', body: '[Placeholder: what Opello does with customer money so it never funds harm to people or the planet, and how Opello supports projects that help reverse the loss of biodiversity (Planet Impact is out of scope for MLP1, so no offsetting claim). Opello wording to confirm before publishing.]', note: 'Placeholder. Adapted from algbra.com World Wildlife Day article, "How can I make an impact?". Algbra\'s product claims are not reused. Opello sustainability claims need Opello confirmation and compliance sign-off.', source: 'placeholder' },
			{ heading: 'Read next', body: 'More on sustainability and ethical finance from Opello.', source: 'placeholder', links: [
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' },
				{ label: 'A Green Break: how to holiday sustainably', href: '/studio/green-break/' }
			] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	{
		slug: 'cashless-society',
		title: 'The pros and cons of a cashless society',
		metaTitle: "Cashless society: pros and cons",
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
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'What are virtual cards, and how do they work?', href: '/studio/virtual-cards/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' },
			] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	{
		slug: 'consumer-duty',
		title: 'Seven principles for implementing the Consumer Duty',
		metaTitle: "The Consumer Duty principles",
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
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'What are chargebacks, and when can you claim?', href: '/studio/chargebacks/' },
				{ label: 'Frequently asked questions', href: '/studio/faq/' }
			] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
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
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' },
			] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	{
		slug: 'climate-catastrophes',
		title: 'Climate catastrophes: at our doorstep',
		metaTitle: "Climate catastrophes",
		kicker: 'Insights',
		lede: 'We are not as far removed from the floods, fires and heatwaves in the news as we may think. Here is what is happening, and why it reaches all of us.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/climate-catastrophes-at-our-doorstep (Algbra blog article, 22 September 2022). Wording adapted for Opello. Algbra product references (the sustainable account guarantee, the carbon footprint app and its offset projects) are left out; Planet Impact content stays out of scope for MLP1.',
			'The statistics (flood risk affecting 1.81 billion people with 70% of those exposed in South and East Asia; around sixteen football pitches of trees lost per minute in 2021; fires twice as frequent and severe as twenty years earlier; 167 million homes lost to extreme weather by 2040; 40.3C reached in the UK for the first time; the Pakistan floods impacting 33 million people and submerging a third of the country; fossil fuel financing by the world\'s 60 major banks reaching $4.6 trillion, with $742 billion in 2021 alone) are Algbra figures and need checking against their original sources before publishing.',
			'The list of top climate contributors and the criticism of summit ambition are Algbra editorial claims, kept as published context and flagged for review. The Paris Agreement aim to limit global temperature rise is public record. Not for publication until approved.'
		],
		sections: [
			{ heading: 'What the last year showed us', body: 'Flood risks currently affect 1.81 billion people, with 70% of the people exposed living in South and East Asia. Around sixteen football pitches of trees per minute were lost to forest fires in 2021, with the fires becoming twice as frequent and severe as they had been twenty years earlier. Rising global temperature is diminishing agricultural productivity, putting land in parts of Europe, the Sahel and western North America at risk of desertification. Extreme weather is thought to cause the loss of 167 million homes globally by 2040. And in a single summer, concurrent heatwaves claimed thousands of lives, with 40.3C reached in the UK for the first time ever.', note: 'Source: algbra.com article, opening paragraphs. The statistics are Algbra figures and need checking against their original sources.', source: 'algbra' },
			{ heading: 'Not way over there any more', body: 'The recent floods in Pakistan impacted 33 million people and submerged a third of the country. The floods, fires, hurricanes and heatwaves we once called natural, and could previously dismiss as being far away, are now neither of those things. Record-breaking temperatures and a drought so severe that dead grass and dried-up rivers could be seen from space showed the direct impact of climate change on the UK, and the droughts fed through to farming and agriculture, and then to food prices and quality, in the middle of an already challenging cost of living period.', note: 'Source: algbra.com article, "But the floods, fires..." paragraph. The 33 million / one third figures are Algbra figures and need checking against their original source. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Who contributes, and who pays', body: 'Studies indicate that these catastrophic events are caused by human behaviour, and contributed to disproportionately by developed nations, while developing nations foot the physical, life-threatening and almost irreversible bill. The largest contributors include some of the most influential global decision makers, with the greatest responsibility to hold themselves accountable. Yet while nations gather at summits to speak of meaningful and effective action, fossil fuel financing by the world\'s 60 major banks has reached $4.6 trillion, with $742 billion in 2021 alone, seven years after the Paris Agreement set out its central aim to limit global temperature rise.', note: 'Source: algbra.com article, "Who contributes" and Paris Agreement paragraphs. The financing figures are Algbra figures and need checking against their original source. The contributor list and summit criticism are Algbra editorial claims, kept as published context and flagged for review. The Paris Agreement aim is public record.', source: 'algbra' },
			{ heading: 'What it takes', body: 'There is no longer a question of whether extreme weather is just part of the natural order of things. Our actions, as nations and individuals, have a measurable and palpable impact. Limiting the effects of climate change requires changing how we extract energy, how we consume, how we travel, and how we manage our money. Sustainable alternatives can feel disruptive and inconvenient, but some switches are as easy as going from single-use to reusable water bottles.', note: 'Source: algbra.com article, "There is no longer a question..." paragraph. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Where your money comes in', body: '[Placeholder: what Opello does with customer money so it never funds harmful industries. Planet Impact and carbon tracking are out of scope for MLP1, so no offsetting or footprint claim is made here. Opello wording to confirm before publishing.]', note: 'Placeholder. Algbra\'s green account guarantee and its carbon footprint and offsetting product are Algbra product claims and are not reused.', source: 'placeholder' },
			{ heading: 'Read next', body: 'More on sustainability and money from Opello.', source: 'placeholder', links: [
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' },
				{ label: 'What is World Wildlife Day, and why does it matter?', href: '/studio/world-wildlife-day/' }
			] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	{
		slug: 'just-transition',
		title: 'A just transition: an achievable goal?',
		metaTitle: "What is a just transition?",
		kicker: 'Insights',
		lede: 'A fair, thriving and net-zero world without leaving people behind: what a just transition means, and what it takes to get there.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/a-just-transition-an-achievable-goal (Algbra blog article, 24 November 2022). Wording adapted for Opello. Algbra brand and product references (its role in the panel event and "the world\'s most ethical financial institution") are left out.',
			'The statistics (a global population of 8 billion; the richest 10% of people owning 76% of total wealth while the poorest half owns 2%; global temperature likely to reach 1.5C above pre-industrial levels within five years; wildlife populations down an average of 69% in the past 50 years; fossil fuel financing by the world\'s 60 largest banks reaching $4.6 trillion in the five years after the Paris Agreement) are Algbra figures and need checking against their original sources before publishing.',
			'The panel event (run with a UK sustainability event organiser) and the named speakers and organisations are Algbra editorial context: bodies are described by role and no names are reused. The UN Secretary-General quote and the Paris Agreement are public record. Pensions are out of scope for MLP1, so the original\'s pension footnote is left out. Not for publication until approved.'
		],
		sections: [
			{ heading: 'A fair way to net zero', body: 'A just transition is the process by which a balanced, thriving and net-zero society is achieved without increasing existing socio-economic inequalities. World climate summits keep underlining the same point: the social and environmental issues that hold the transition back have to be addressed together.', note: 'Source: algbra.com article, opening paragraphs. Definition adapted for Opello.', source: 'algbra' },
			{ heading: 'The current state of affairs', body: 'The key environmental and social metrics make sobering reading. The world has just passed a population of 8 billion, yet global inequality is rising and wealth disparities are back at early 20th-century levels: the richest 10% of people own 76% of total wealth, while the poorest half owns just 2%. Global temperature is increasingly likely to reach 1.5C above pre-industrial levels within five years, and wildlife populations have declined by an average of 69% in the past 50 years. Climate change also hits marginalised communities hardest, the very people who contribute least to the problem. As the UN Secretary-General put it on the eve of a recent climate summit: "Humanity has a choice: cooperate, or perish."', note: 'Source: algbra.com article, "What is the current state of affairs?". All figures are Algbra\'s and need checking against their original sources. The UN quote is public record.', source: 'algbra' },
			{ heading: 'Actions speak louder than words', body: 'Greenwashing has shown everyone that promises are cheap. The growing focus on environmental and social impact in business signals some progress, but deeper cooperation is needed. Social issues are interconnected with the climate and ecological crises: building a more sustainable society could, and should, create a more empowered and equitable one for everyone.', note: 'Source: algbra.com article, "Just Transition". Adapted for Opello.', source: 'algbra' },
			{ heading: 'Fossil fuels and finance', body: 'Finance sits at the heart of the transition. Investment into renewable energy is growing, but fossil fuel financing from the world\'s 60 largest banks reached $4.6 trillion in the five years since the Paris Agreement was adopted. Much of the global finance community still has work to do to support the sustainable development of communities through distributive and regenerative projects.', note: 'Source: algbra.com article, "Fossil fuels". The $4.6 trillion figure is Algbra\'s and needs checking against its original source. The Paris Agreement is public record.', source: 'algbra' },
			{ heading: 'Investors and businesses', body: 'The largest investment institutions are increasingly being held to account over their environmental and social impact, and investors and governments are paying more attention to it. The experience of impact-driven businesses also suggests companies do not need to compromise their ethics to be successful: aligning what a business does with what its customers value is commercially important as well.', note: 'Source: algbra.com article, "Impact investing" and "Ethics and commercial success" (panel themes). The named speakers and organisations are not reused; the themes are summarised as published context.', source: 'algbra' },
			{ heading: 'Where your money comes in', body: 'Each of us has agency in achieving a just transition. The savings and investment choices we make, and the money we move every day, can all be aligned with our values. [Placeholder: what Opello does with customer money so it never funds harmful industries, and any tools that help you align your money with your values. Opello wording to confirm before publishing.]', note: 'Source: algbra.com article, "Individual impact" and closing. Algbra\'s product positioning is not reused. The original\'s pension footnote is left out: pensions are out of scope for MLP1.', source: 'placeholder' },
			{ heading: 'Read next', body: 'More on sustainability and money from Opello.', source: 'placeholder', links: [
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'Climate catastrophes: at our doorstep', href: '/studio/climate-catastrophes/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' }
			] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	{
		slug: 'sustainable-valentines-day',
		title: "5 tips for a sustainable Valentine's Day",
		metaTitle: "A sustainable Valentine's Day",
		kicker: 'Insights',
		lede: "Love does not have to cost the earth. Five lower-impact ways to celebrate Valentine's Day, from living gifts to a meal made at home.",
		source: 'algbra',
		sourceNotes: [
			"Source: algbra.com/news/five-tips-for-a-sustainable-valentine-s-day (Algbra blog article, 8 February 2023). Wording adapted for Opello. Algbra's closing product plug (\"You'll love Algbra\") is left out.",
			"The claim that most Valentine's flowers are grown overseas is Algbra editorial context. A source now backs it: The Guardian, 20 September 2024, 'Budding market: hopes of a revival in UK cut-flower production', citing Defra figures, reports that about 90% of flowers sold through UK florists, supermarkets and wholesalers are imported. The page's own wording stays qualitative ('most'); the percentage is not quoted on the page. No statistics are otherwise used in the article.",
			"Tip 4 mentions giving to a charity in a loved one's name: kept as general gift advice, with the original's carbon-offsetting and biodiversity-project wording left out (impact programmes are out of scope for MLP1). Not for publication until approved."
		],
		sections: [
			{ heading: "Love is red, but it can be green", body: "Love is strawberries, roses and romance. It's red. But Valentine's Day is not the greenest day of the year: unrecycled paper, shrink-wrapped chocolates and imported flowers all add up. That does not mean you cannot celebrate each other on 14 February. Here are five eco-friendly ideas to show someone you care, without it costing the earth.", note: 'Source: algbra.com article, intro paragraphs. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Plant one on them', body: "Is there anything more romantic than a beautiful bouquet? But when most of those flowers are grown overseas, they come with a cost attached. A surprise bunch of locally grown cut flowers is one option, but they will fade sooner rather than later (unlike your love). So give something that lasts the distance: a succulent, a houseplant, or even better, a tree. It helps capture carbon, and it reminds them of you every time they water it.", note: 'Source: algbra.com article, tip 1. The "grown overseas" claim is Algbra\'s; it matches Defra figures cited by The Guardian (20 September 2024): about 90% of flowers sold through UK florists, supermarkets and wholesalers are imported. The percentage is not quoted on the page.', source: 'algbra' },
			{ heading: "Give them an experience they'll never forget", body: "Unlike a stuffed toy, memories last forever. So spend the day doing something you would not normally do. If they fancy themselves a culinary whizz, book a cookery class. If they think they are hilarious, put their funny where their mouth is at an improv session. Whatever you land on, it is a chance to bond, chat and maybe even learn something new. Like who the funny one actually is.", note: 'Source: algbra.com article, tip 2. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Cook up a storm. Of passion', body: "They may love that French bistro in town, but what they will love even more is you making their very favourite meal. From scratch. With local ingredients. Which you may or may not feel the need to mention every five minutes. Spend the evening cooking together, talking and laughing after you saute something that should have been seared. (Pro tip: keep the local takeaway's menu to hand.)", note: 'Source: algbra.com article, tip 3. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Think outside the box', body: "If you buy a gift, it is hard to avoid the packaging. So why not show your love by giving to a cause they care about, in their name?", note: "Source: algbra.com article, tip 4. The original also suggested a carbon-offsetting programme and a biodiversity project; that wording is left out because impact programmes are out of scope for MLP1. The charity-gift idea is kept as general gift advice, not an Opello product reference.", source: 'algbra' },
			{ heading: 'Go traditional', body: "If it would not be Valentine's Day without hearts, cupids and kisses, you can still treat your partner to the staples, as long as you do some research before splashing out. Get a card made from recycled (and recyclable) materials. Buy sustainable, zero-waste, fairtrade chocolates. Find flowers that have been locally and ethically sourced.", note: 'Source: algbra.com article, tip 5. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Read next', body: 'More on sustainability and money from Opello.', source: 'placeholder', links: [
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'A Green Break: how to holiday sustainably', href: '/studio/green-break/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' }
			] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	{
		slug: 'card-exchange-rates',
		title: 'Travelling with your card: fees and exchange rates explained',
		metaTitle: "Card fees and exchange rates",
		kicker: 'Insights',
		lede: 'Spending abroad should not need a spreadsheet. How card exchange rates work, and four habits that keep holiday spending simple.',
		source: 'algbra',
		sourceNotes: [
			"Source: algbra.com/news/algbra-card-exchange-rates-explained (Algbra blog article, 16 May 2023). Wording adapted for Opello. Algbra's closing product plug and its cashback section are left out (cashback is not confirmed for Opello).",
			"Product claims are Algbra's and are flagged in the section notes: the card-scheme exchange rate, no extra fees on foreign-currency transactions, and no notification needed before travelling. Opello's own fee position must be confirmed against the Opello fee schedule before any of it publishes.",
			"The card scheme is described by category, not named (vendor names stay off public pages). Algbra's biodegradable-card line is left out (physical cards are out of scope for MLP1). Not for publication until approved."
		],
		sections: [
			{ heading: 'Sorting your money abroad', body: "The best bit of a holiday has to be stepping off the plane in a new country. The worst? Sorting your money. Figuring out what exchange rates and transaction fees you will pay is a headache no one needs, and getting it wrong could cost you. Here is how card exchange rates work, and a few habits that keep things simple.", note: 'Source: algbra.com article, intro. Adapted for Opello.', source: 'algbra' },
			{ heading: 'How a card exchange rate works', body: "When you pay or withdraw cash abroad in the local currency, the card scheme automatically converts your home currency into the local one at its own exchange rate. That rate applies at the time the funds leave your account, so you do not have to work out the exchange rate at the till. Some providers add a mark-up on top of the rate; the claim that no mark-up or extra foreign-transaction fee applies to your card is Opello's to confirm against its fee schedule.", note: "Source: algbra.com article, 'Globally accepted' section. Algbra's claim that neither it nor the card scheme charges extra fees for foreign-currency transactions is a product claim, flagged for Opello/compliance sign-off; the card scheme is named by category only.", source: 'algbra' },
			{ heading: 'Check the exchange rate before you check out', body: "Before paying, quickly check the current rate for the local currency so you have an idea of what you are paying in pounds. You can then compare it to other rates on the market. You might get a good deal paying with cash, but remember some cash machines add their own fees to withdrawals.", note: 'Source: algbra.com article, tip 1. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Pay local', body: "Sometimes abroad you will be asked whether you want to be charged in the local currency or in pounds. It is usually better to choose the local currency. That way the card scheme's rate applies, and you avoid the mark-ups that can be added when a payment is converted into sterling on the spot.", note: 'Source: algbra.com article, tip 2. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Decline dynamic currency conversion', body: "Dynamic currency conversion is a service some providers and cash machines offer that lets you pay in your home currency instead of the local one. It sounds convenient, and the upside is you know exactly what you are paying in pounds, but it usually costs more than paying in the local currency. Decline the conversion and stick with local.", note: 'Source: algbra.com article, tip 3. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Keep an eye on your transactions', body: "While you are away, check each transaction in the app to make sure it was converted at the rate you expected. If something looks wrong, contact us: we might be able to help you raise a chargeback.", note: "Source: algbra.com article, tip 4. Adapted for Opello. Algbra's specific app screen name is left out.", source: 'algbra', href: '/studio/chargebacks/', linkLabel: 'Read about chargebacks' },
			{ heading: 'What fees will Opello charge for spending overseas?', body: '[Placeholder: Opello fee position on card spending abroad, confirmed against the Opello fee schedule. Algbra\'s answer (no extra fees, the card scheme rate and nothing else) is a product claim and is not reused as fact.]', href: '/studio/fees-and-charges/', linkLabel: 'See fees and charges' },
			{ heading: 'Read next', body: 'More on money and travel from Opello.', source: 'placeholder', links: [
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'Global transfers', href: '/studio/transfers/' },
				{ label: 'What are chargebacks, and when can you claim?', href: '/studio/chargebacks/' }
			] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	{
		slug: 'fintech-for-good',
		title: 'Can fintech be a force for good?',
		kicker: 'Insights',
		lede: 'Make a profit and make a difference: four things that separate finance built for the underserved from finance built for everyone else.',
		source: 'algbra',
		sourceNotes: [
			"Source: algbra.com/news/can-fintech-really-be-a-force-for-good-5-insights-from-our-panel (Algbra blog article, 16 March 2022). Wording adapted for Opello. The original is a recap of an industry roundtable produced in partnership with a card scheme and a technology publication; those partners, the panel speaker names and their companies are all left out, so no quote is reproduced and the insights are paraphrased.",
			"The 2008 trust claim is the panel's view, not a fact sheet: kept as reported commentary, not as an Opello claim. Not for publication until approved."
		],
		sections: [
			{ heading: 'Make a profit and make a difference', body: 'Fintech is, by definition, focused on money. So can a company whose business is finance also serve the people mainstream finance leaves behind? That question keeps coming up in this industry, and it deserves an honest answer: profit and purpose are not enemies, but they are not automatically friends either. It takes deliberate design choices. Here is what separates finance built for the underserved from finance built for everyone else.', note: 'Source: algbra.com article, intro paragraphs. Adapted for Opello; the roundtable format and its partners are not named.', source: 'algbra' },
			{ heading: 'Start with what is best for the customer', body: 'Plenty of financial products have filled a real gap without serving their users well. A product aimed at an underserved group only works for good when the people it is for are actually brought into the design: research with real potential users, and a business that treats its financial sustainability and its positive impact on the families it serves as equally important. External accountability keeps the customer in the room when the roadmap is set.', note: "Source: algbra.com article, insight 1. The panel's payday-lending comparison and the panel quotes are paraphrased into general statements; no quote is reproduced.", source: 'algbra' },
			{ heading: 'Traditional banks were not built for everyone', body: "High street banks are designed to serve a very general population. People with specific needs, whether a disability or circumstances that do not fit the standard forms, can hit a wall of 'computer says no' answers. It is rarely because banks are unkind: regulation, cost pressures and legacy systems make it genuinely hard for a large institution to handle an unusual case well. And some communities stopped trusting banks after the 2008 financial crisis, which makes reaching them harder still.", note: "Source: algbra.com article, insight 2. The 2008 trust point is the panel's view and is flagged in the source notes; no speaker or bank is named.", source: 'algbra' },
			{ heading: 'But incumbents still matter', body: 'The big banks keep a crucial place in the financial ecosystem. They are household names with a branch on most high streets, which makes them accessible to a very large number of people, and the pressure from newer challengers has visibly pushed them to do better: the banking apps most people take for granted now might not exist without that competition. Change in this industry does not come from one side alone.', note: 'Source: algbra.com article, insight 3. Adapted for Opello; no speaker is named.', source: 'algbra' },
			{ heading: 'Partnerships scale the good', body: 'No single company serves every community well. Serving underserved groups at scale depends on partnerships: between young fintechs and established firms, between technology and regulation, so that a good idea built for one group does not stay small.', note: "Source: algbra.com article, insight 4 and the roundtable's partnership theme, merged. Adapted for Opello.", source: 'algbra' },
			{ heading: 'What this means for Opello', body: "[Placeholder: Opello's own position on serving underserved customers, in Opello wording, signed off before publishing. The panel insights above are general industry commentary, not Opello claims.]", note: 'Placeholder pending Opello sign-off.', source: 'placeholder' },
			{ heading: 'Read next', body: 'More on money and how finance should work.', source: 'placeholder', links: [
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'The pros and cons of a cashless society', href: '/studio/cashless-society/' },
				{ label: 'Seven principles for implementing the Consumer Duty', href: '/studio/consumer-duty/' }
			] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	{
		slug: 'cop26',
		title: 'COP26: what it is and why it matters',
		metaTitle: "What is COP26?",
		kicker: 'Insights',
		lede: 'The Glasgow climate summit explained: what COP means, what the Paris Agreement asks of countries, and what the world was watching for.',
		source: 'algbra',
		sourceNotes: [
			'Source: algbra.com/news/cop26-what-is-it-and-why-it-matters (Algbra blog article, 1 November 2021). Wording adapted for Opello. Algbra had no product plug in this article, so none is reused.',
			'The article was written while the summit was still running (31 October to 12 November 2021), so it speaks in the present tense about a past event. The summit has since concluded; the outcomes need checking before this publishes, or the wording needs a dated-history pass.',
			'Statistics are Algbra figures and need checking against their original sources before publishing: 156 world leaders attending; the submitted national climate plans (NDCs) amounting to a 16% rise in emissions by 2030 against 2010, pointing to about 2.7C of warming by 2100; G20 economies covering about 80% of world emissions; and the 2009 promise of $100 billion a year for developing countries by 2020. The Paris Agreement goals, the IPCC reports and the quoted statements by the summit president and a climate scientist are public record.',
			'Not for publication until approved.'
		],
		sections: [
			{ heading: 'Why the world was watching Glasgow', body: 'The much-anticipated COP26 climate summit was hosted in Glasgow, with the UK as president in partnership with Italy, running from 31 October to 12 November 2021. Around 156 world leaders joined representatives of civil society and the private sector, because the outcomes were expected to shape how the next few decades unfold for the climate. To understand why it mattered so much, it helps to know what COP is, where it came from, and what it was trying to achieve.', note: 'Source: algbra.com article, opening paragraphs. Adapted for Opello. The attendance figure is Algbra\'s and needs a source.', source: 'algbra' },
			{ heading: 'What does COP stand for?', body: 'COP stands for Conference of the Parties: the parties being every signatory of the United Nations Framework Convention on Climate Change (UNFCCC), an international treaty created to combat the climate crisis through ongoing research, regular meetings, negotiations and policy agreements. Since 1995 the COP has been hosted in a different country each year, with one exception: the summit delayed by the Covid-19 pandemic. The Glasgow meeting was the 26th of them.', note: 'Source: algbra.com article, "Let\'s Talk Basics". Adapted for Opello.', source: 'algbra' },
			{ heading: 'The Paris Agreement', body: 'COPs have a tumultuous history of mandates, protocols and stand-offs, but 2015 delivered a breakthrough: the Paris Agreement. For the first time, almost every country agreed a common goal: to limit global warming to well below 2 degrees Celsius, ideally 1.5 degrees, compared with pre-industrial levels, alongside adapting to climate impacts and mobilising finance to support the goals. The questions that followed were plentiful: are the commitments enough, how will they be enforced, and what does "well below 2 degrees" actually mean?', note: 'Source: algbra.com article, "The Paris Agreement". The Paris goals are public record. Adapted for Opello.', source: 'algbra' },
			{ heading: 'National plans and their shortfall', body: 'Under the Paris Agreement each government sets its own target emission reductions, its Nationally Determined Contributions, and reports them to the UNFCCC. Collectively, the first round of pledges was objectively insufficient for the 2030 goals, amounting to less than a 1% cut in global emissions against 2010 levels.', note: 'Source: algbra.com article, "NDCs" paragraphs. Adapted for Opello.', source: 'algbra' },
			{ heading: 'The window is closing', body: 'As wildfires, floods and droughts devastate communities around the world, the case for swift action sharpens. An IPCC report released that August confirmed that human influence has warmed the atmosphere, ocean and land, that many changes are unprecedented in thousands of years, and that some are already irreversible. The scientists behind it also stressed that the 1.5-degree goal was still achievable, but only with sweeping, rapid cuts to global emissions: roughly halving them by 2030 and reaching net zero by 2050. "Bottom line is that we have zero years left to avoid dangerous climate change, because it\'s here," climate scientist Michael E. Mann told CNN at the time.', note: 'Source: algbra.com article, "The Window is Closing". The IPCC findings and the Mann quote are public record. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Keep 1.5 alive', body: 'The summit\'s rallying cry was "Keep the 1.5 alive": getting as many countries as possible to commit to the harder end of the Paris goal. The early signs were not promising. Of the 192 parties to the Paris Agreement, 165 national plans were available, and taken together they pointed to a 16% rise in global emissions by 2030 against 2010, translating to about 2.7 degrees of warming by the end of the century. Independent climate watchdog the Climate Action Tracker found all G20 economies, which account for about 80% of the world\'s emissions, far from enacting effective policies for the 1.5-degree goal. Every increment of warming matters: it means more extreme weather, rising seas, and loss of life and livelihoods.', note: "Source: algbra.com article, 'Keep the 1.5 Alive'. All figures are Algbra's and need checking against their original sources (the Climate Action Tracker report and the UNFCCC NDC synthesis). Adapted for Opello.", source: 'algbra' },
			{ heading: 'What the summit set out to achieve', body: 'COP26 set out three goals as an update to the Paris framework. First, global net zero by mid-century: phasing out coal, ending deforestation, switching to electric vehicles and investing in renewables. Second, adapting to protect communities and ecosystems that are already affected, through stronger warning systems and more resilient infrastructure. Third, mobilising finance: developed countries had promised in 2009 to mobilise $100 billion a year by 2020 to support developing countries, and governments and international financial institutions were pressed to make good on it. The overriding message was the one the summit\'s president summed up: Glasgow had to launch a decade of ever-increasing ambition.', note: 'Source: algbra.com article, "What do they hope to achieve?" and the summit president\'s statement (public record). The $100 billion figure needs checking against its original source. Adapted for Opello.', source: 'algbra' },
			{ heading: 'Where your money comes in', body: '[Placeholder: what Opello can honestly say about how everyday money choices relate to climate goals. Algbra\'s closing framing (COP as the best mechanism for change at governmental level) is public commentary and kept here in adapted form; any Opello product tie-in needs Opello wording and sign-off before publishing.]', note: 'The original closes on the significance of the COP process itself; that framing is kept. Any Opello product tie-in is a placeholder pending sign-off.', source: 'placeholder' },
			{ heading: 'Read next', body: 'More on climate and money from Opello.', source: 'placeholder', links: [
				{ label: 'Back to Blog', href: '/studio/blog/' },
				{ label: 'Climate catastrophes: at our doorstep', href: '/studio/climate-catastrophes/' },
				{ label: 'What is green banking, and why does it matter?', href: '/studio/green-banking/' }
			] }
		],
		cta: { label: 'Back to News', href: '/studio/news/' }
	},
	// Out of MLP1 scope — 'An intro to carbon offsetting' is Planet Impact content. Do not publish. Restored copy is kept in pages-full.ts.bak.
	{
		slug: 'uk-account-from-abroad',
		title: 'Getting a UK account from abroad',
		kicker: 'Insights',
		lede: 'Many people living outside the UK still get paid in pounds, own UK property or need to move money to the UK. Here is how a UK account can work when you do not live here.',
		metaDescription: "Many people living outside the UK still get paid in pounds or need to move money to the UK. Here is how a UK account can work when you do not live here.", // shorter than the lede for search snippets; lede untouched
		sections: [
			{ heading: 'Why you might need a UK account', body: 'Freelancers and remote workers paid by UK clients, business owners with UK customers or suppliers, people with UK rental income, and investors with UK assets often need to receive or hold pounds.', items: [
				'Freelancers and remote professionals paid by UK companies',
				'Business owners working with British clients or suppliers',
				'Property owners receiving UK rental income',
				'Investors managing expenses or assets in the UK'
			] },
			{ heading: 'Why not just send money the usual way', body: 'Without UK account details, payments often go through international transfers or middlemen. That can mean extra fees, currency conversion costs and slower payments.', href: '/studio/transfers/', linkLabel: 'See transfers' },
			{ heading: 'Can you open a traditional UK bank account from abroad?', body: 'It may be possible, but it is often hard. High-street banks commonly ask for a UK credit history, a UK address or a branch visit. Some offer non-resident accounts, but these can need large minimum balances or sit within private banking.' },
			// OUT OF MLP1 SCOPE — section removed, do not publish.

			{ heading: 'How a UK e-money account can work for you', body: 'You get a UK sort code and account number to receive pound payments, and an international payments service for sending pounds abroad. You can apply in an app with identity checks, with no branch visit and no UK address needed.', items: [
				'A UK sort code and account number for pound payments',
				'Send pounds overseas (country count to confirm for Opello)',
				'A virtual debit card (card scheme to confirm)'
			], links: [] },
			/* Out of MLP1 scope — multi-currency holding (pounds, dollars, euros and other currencies in one account) is not confirmed for day one. Do not publish. Restore the body and items below once multi-currency holding is confirmed:
			body: 'You get a UK sort code and account number to receive pound payments, a multi-currency account for pounds, dollars, euros and other major currencies, and an international payments service. You can apply in an app with identity checks, with no branch visit and no UK address needed.', items: [
				'A UK sort code and account number for pound payments',
				'Several currencies in one account',
				'International payments (country count to confirm for Opello)',
				'A virtual debit card (card scheme to confirm)'
			] */
			{ heading: 'Fees and protection', body: '[Placeholder: Opello exchange fee, monthly fee and how fees are shown before you pay. Confirm against the Opello fee schedule.]', href: '/studio/fees-and-charges/', linkLabel: 'See fees and charges' },
			{ heading: 'Who it is for', body: 'People who live outside the UK and need access to UK payment services, and who want the account to match Sharia principles or be interest-free.' },
			{ heading: 'How to apply', body: 'The application is completed in the app. You will need to pass identity and eligibility checks. Availability depends on where you live and your situation, so check the app before you apply.', href: '/studio/open-account/', linkLabel: 'See how to open an account' }
		],
		cta: { label: 'Open account with us', href: OPEN }
	},
	{
		slug: 'sitemap',
		title: 'Sitemap',
		kicker: 'Help',
		lede: 'Every page in the Opello studio build, grouped the way the footer groups them. Placeholder layout until the site map is confirmed for launch.',
		sections: [
			{ heading: 'Home', body: 'The studio landing page and the sitemap in each language.', links: [
				{ label: 'Home (English)', href: '/studio/' }, { label: 'Home (العربية)', href: '/studio/ar/' }, { label: 'Home (Türkçe)', href: '/studio/tr/' },
				{ label: 'Sitemap (English)', href: '/studio/sitemap/' }, { label: 'Sitemap (العربية)', href: '/studio/ar/sitemap/' }, { label: 'Sitemap (Türkçe)', href: '/studio/tr/sitemap/' }
			] },
			{ heading: 'Personal', body: 'Accounts, payments and cards for everyday use.', links: [
				{ label: 'Personal', href: '/studio/personal/' }, { label: 'All plans', href: '/studio/all-plans/' }, { label: 'Transfers', href: '/studio/transfers/' }, { label: 'Cards', href: '/studio/cards/' }, { label: 'Virtual cards', href: '/studio/virtual-cards/' }, { label: 'Refer a friend', href: '/studio/referrals/' }, { label: 'Download the app', href: '/studio/download/' }
			] },
			// Out of MLP1 scope — "currency accounts" (multi-currency holding) removed from the group intro; wording kept for later iterations.
			{ heading: 'Accounts and savings', body: 'Savings, Cubes and account types.', links: [
				{ label: 'Current accounts', href: '/studio/current-accounts/' }, { label: 'UK account from abroad', href: '/studio/uk-account-from-abroad/' }, { label: 'Savings', href: '/studio/savings/' }, { label: 'Ethical Saver Cubes', href: '/studio/ethical-savings/' }, { label: 'Open an account', href: '/studio/open-account/' }
			] },
			/* Out of MLP1 scope — Business section removed (Vinay, 2026-11-18). Do not publish.
			{ heading: 'Business', body: 'Accounts and payments for businesses.', links: [] }, */
			{ heading: 'About', body: 'Who we are, what we are building and how to reach us.', links: [
				{ label: 'About', href: '/studio/about/' }, { label: 'Careers', href: '/studio/careers/' }, { label: 'Contact', href: '/studio/contact/' }
			] },
			{ heading: 'News and insights', body: 'Newsroom updates, blog posts and topic articles.', links: [
				{ label: 'News', href: '/studio/news/' }, { label: 'Blog', href: '/studio/blog/' }, { label: 'Chargebacks', href: '/studio/chargebacks/' }, { label: 'Virtual cards', href: '/studio/virtual-cards/' }, { label: 'Green banking', href: '/studio/green-banking/' }, { label: 'Green Break', href: '/studio/green-break/' }, { label: 'Money and mental health', href: '/studio/money-and-mental-health/' }, { label: 'World Wildlife Day', href: '/studio/world-wildlife-day/' }, { label: 'Cashless society', href: '/studio/cashless-society/' }, { label: 'Consumer Duty', href: '/studio/consumer-duty/' }, { label: 'Dark mode', href: '/studio/dark-mode/' }, { label: 'Climate catastrophes', href: '/studio/climate-catastrophes/' }, { label: 'Just transition', href: '/studio/just-transition/' }, { label: "Sustainable Valentine's Day", href: '/studio/sustainable-valentines-day/' }, { label: 'Card fees and exchange rates abroad', href: '/studio/card-exchange-rates/' }, { label: 'COP26: what it is and why it matters', href: '/studio/cop26/' }, { label: 'Can fintech be a force for good?', href: '/studio/fintech-for-good/' }] },
			{ heading: 'Help', body: 'Answers and support.', links: [
				{ label: 'Help', href: '/studio/help/' }, { label: 'Help articles', href: '/studio/help-articles/' }, { label: 'Getting started answers', href: '/studio/help-getting-started/' }, { label: 'Finding your TIN', href: '/studio/help-tin/' }, { label: 'Logging in answers', href: '/studio/help-logging-in/' }, { label: 'My card answers', href: '/studio/help-my-card/' }, { label: 'My account answers', href: '/studio/help-my-account/' }, { label: 'Ethical Saver help', href: '/studio/help-ethical-saver/' }, { label: 'Security and data answers', href: '/studio/help-security-data/' }, { label: 'About Opello answers', href: '/studio/help-about-opello/' }, { label: 'Get in touch answers', href: '/studio/help-get-in-touch/' }, { label: 'Frequently asked questions', href: '/studio/faq/' }, { label: 'Log in', href: '/studio/login/' }
			] },
			{ heading: 'Legal', body: 'Policies, terms and fees.', links: [
				{ label: 'Privacy policy', href: '/studio/privacy-policy/' }, { label: 'Terms and conditions', href: '/studio/terms-and-conditions/' }, { label: 'Customer terms', href: '/studio/customer-terms-and-conditions/' }, { label: 'Cookie policy', href: '/studio/cookies-policy/' }, { label: 'Fees and charges', href: '/studio/fees-and-charges/' }, { label: 'Responsible disclosure', href: '/studio/responsible-disclosure/' }, { label: 'Accessibility', href: '/studio/accessibility/' }
			] }
		],
		cta: { label: 'Open account with us', href: OPEN }
	}
];


// ---- Situation pages (website-structure deck v18, NIAN Capital, 11 Nov 2026) ----
// Deck principle 2: speak to the customer's situation, never to a country or nationality.
// GBP-only: the deck's EUR promises are trimmed to GBP for MLP1 (multi-currency is out of scope).
const SITUATION_CTA = { label: 'Open account with us', href: OPEN };

pages.push(
{
	slug: 'for-residents',
	title: 'For people paid from abroad',
	kicker: "Who it's for",
	// Split hero with a generated placeholder photo until licensed photography is supplied.
	hero: { variant: 'split', alt: 'A man at a sunlit desk by a large window smiling at his smartphone, a ceramic mug and a potted plant beside him' },
	lede: 'Local accounts work at home, but getting paid from abroad and paying abroad is slow, costly or blocked. Opello gives you a UK account that moves when you do.',
	metaTitle: 'A UK account for people paid from abroad - Opello',
	metaDescription: 'Get paid from abroad and send money home from a UK account, with the full cost shown before you pay it.',
	sourceNotes: [
		'Source: website-structure deck v18 (NIAN Capital, 11 Nov 2026), slide 4, segment 1; copy adapted for Opello.',
		'Claims flagged for sign-off: cost and speed promises need the confirmed fees schedule before publishing.'
	],
	sections: [
		{ heading: 'Get paid from abroad, smoothly', body: 'Receive payments from outside the UK into a UK account in your name, without the middleman chain that slows transfers down.' },
		{ heading: 'Send money home at a fair cost', body: 'Send GBP to family and accounts back home. You see the fee and the rate before you confirm, so nothing is hidden.' },
		{ heading: 'Keep more of what you earn', body: 'The full cost is shown up front on every payment. What you see is what you pay.' }
	],
	cta: SITUATION_CTA
},
{
	slug: 'for-savers',
	title: 'For savers who want stability',
	kicker: "Who it's for",
	// Split hero with a generated placeholder photo until licensed photography is supplied.
	hero: { variant: 'split', alt: 'Three small peach and terracotta ceramic pots on a sunlit wooden shelf beside a potted plant, coins stacked in front' },
	lede: 'Where inflation runs high, savings held in local currency lose value every month. Opello lets you hold savings in GBP so they keep their value.',
	metaTitle: 'Hold your savings in GBP - Opello',
	metaDescription: 'Hold savings in GBP in a UK account, with safeguarding and the full cost shown up front.',
	sourceNotes: [
		'Source: website-structure deck v18 (NIAN Capital, 11 Nov 2026), slide 4, segment 2; copy adapted for Opello.',
		'MLP1 trim: the deck promises EUR and GBP holding; EUR is out of scope for MLP1, so this page promises GBP only.',
		'Claims flagged for sign-off: safeguarding wording needs compliance confirmation.'
	],
	sections: [
		{ heading: 'Hold savings in GBP', body: 'Keep your savings in a GBP account instead of a currency that loses value every month.' },
		{ heading: 'Savings pots that keep you organised', body: 'Set money aside in separate pots for the things that matter, and watch each one grow.' },
		{ heading: 'Safe in the UK, always within reach', body: 'Your money is safeguarded and stays reachable when you need it.' }
	],
	cta: SITUATION_CTA
},
{
	slug: 'for-immigrants',
	title: 'For people who have moved abroad',
	kicker: "Who it's for",
	// Split hero with a generated placeholder photo until licensed photography is supplied.
	hero: { variant: 'split', alt: 'A woman unpacking a cardboard box in a bright new apartment beside a potted plant in warm afternoon light' },
	lede: 'Banks in some countries cut ties with customers from certain countries without warning. Opello gives you a UK account where your money is safeguarded and stays reachable.',
	metaTitle: 'A UK account that stays reachable - Opello',
	metaDescription: 'A UK-regulated account where your money is safeguarded and stays reachable, built for people who have moved abroad.',
	sourceNotes: [
		'Source: website-structure deck v18 (NIAN Capital, 11 Nov 2026), slide 4, segment 3; copy adapted for Opello.',
		'Claims flagged for sign-off: "UK-regulated" and safeguarding statements need compliance confirmation before publishing; eligibility scope (UK, UAE, Turkiye residence) still open on the signoff sheet.',
		'Deck principle: speak to the situation, never to a country or nationality - no country is named on this page.'
	],
	sections: [
		{ heading: 'An account that does not walk away', body: 'Your account is not tied to where you were born. It stays open and reachable while you build your life abroad.' },
		{ heading: 'Your money, safeguarded', body: 'Funds are safeguarded so they stay yours and stay reachable.' },
		{ heading: 'Send and receive across borders', body: 'Move money between your life abroad and the people back home, with the full cost shown before every payment.' }
	],
	cta: SITUATION_CTA
});

// ---- Safety page (website-structure deck v18, NIAN Capital, 11 Nov 2026) ----
// Deck slide 7: Safety menu item covers licence and safeguarding, security and
// fraud, complaints; deck slide 8 section 6: where money is held, who regulates
// Opello, what happens if the firm fails; plus the 'Who is behind Opello' link.
// Every regulatory claim is marked pending sign-off in its own note: the site's
// established position is that accounts and cards come from a regulated e-money
// partner, and Opello's own authorisation status is not yet confirmed copy.
pages.push(
{
	slug: 'safety',
	title: 'Safety',
	kicker: 'Safety',
	lede: 'Safety is the first question worth asking, so it has its own page: where your money sits, who oversees it and what happens if something goes wrong.',
	metaTitle: 'Safety: where your money sits and how it is protected - Opello',
	metaDescription: 'Where your money is held, who oversees it, what happens if a provider fails, and what we do about fraud. Set out plainly, in one place.',
	sourceNotes: [
		'Source: website-structure deck v18 (NIAN Capital, 11 Nov 2026), slide 7 Safety menu item and slide 8 homepage section 6; structure adapted for Opello.',
		'Claims flagged for sign-off: the safeguarding, regulation and failure-scenario wording in the first three sections is a design slot pending compliance confirmation, marked on each section.',
		'No vendor is named: the account and card provider is described by category only, per the public-copy rule.'
	],
	sections: [
		{ heading: 'Where your money is held', body: 'Your account and card are provided by our regulated e-money partner. The money you hold is safeguarded: kept apart from the company\'s own money, so it stays yours and stays reachable when you need it.', note: 'Pending sign-off: safeguarding wording needs compliance confirmation. Describes the partner by category only.' },
		{ heading: 'Who oversees Opello', body: '[Placeholder pending sign-off: Opello distributes accounts and cards provided by a regulated e-money partner. Opello\'s own authorisation and registration details are being confirmed and will be set out here before launch.]', note: 'Pending sign-off: Opello\'s own FCA authorisation status is not confirmed copy. The placeholder marks the deck\'s licence slot until compliance confirms.' },
		{ heading: 'What happens if a provider fails', body: '[Placeholder pending sign-off: under safeguarding rules, customer money is held apart from the firm\'s own funds and returned to customers if a firm fails, rather than treated as company assets. Final wording to be confirmed by compliance.]', note: 'Pending sign-off: failure-scenario wording is a standard safeguarding description, not a confirmed Opello claim.' },
		{ heading: 'Security and fraud', body: 'Your card can be frozen in the app in one tap. Some online payments ask for a one-time passcode by text message, and we will never ask you to share one. If a payment does not look right, freeze your card and contact us straight away.', href: '/studio/help-security-data/', linkLabel: 'Security and data answers' },
		{ heading: 'Complaints', body: 'If something goes wrong, tell us. Every complaint is picked up and answered. The complaints page sets out how to complain and what happens next.', href: '/studio/complaints/', linkLabel: 'How to complain' },
		{ heading: 'Who is behind Opello', body: 'Safety claims are only as good as the people behind them. Meet the team building Opello.', href: '/studio/about/', linkLabel: 'Who is behind Opello' }
	],
	cta: { label: 'Open account with us', href: OPEN }
}
);

// ---- Complaints page (website-structure deck v18, NIAN Capital, 11 Nov 2026) ----
// Deck slide 7: the Help column lists Complaints as its own item. The procedure
// wording is adapted from the help-get-in-touch complaints answer, so both pages
// say the same thing in one place each. Timescales and the FOS escalation carry
// pending-sign-off notes; every contact detail stays a placeholder.
pages.push(
{
	slug: 'complaints',
	title: 'Complaints',
	kicker: 'Help',
	lede: 'If something has gone wrong, we want to hear about it. Every complaint is picked up and answered, and this page sets out how.',
	metaTitle: 'Complaints: how to complain and what happens next - Opello',
	metaDescription: 'How to complain, what happens after you do, the timescales we work to, and what to do if you are not happy with our response.',
	sourceNotes: [
		'Source: website-structure deck v18 (NIAN Capital, 11 Nov 2026), slide 7 Help column; wording adapted from the help-get-in-touch complaints answer so both pages match.',
		'Claims flagged for sign-off: the 15/35 working-day timescales and the Financial Ombudsman Service escalation need compliance confirmation. Every contact detail is a placeholder.',
		'GBP-only MLP1: page makes no product claims.'
	],
	sections: [
		{ heading: 'How to complain', body: 'Tell our team through the in-app chat, or email [placeholder: Opello complaints email]. Please include your first name and surname, the phone number and email address on your account, what the issue is, when it started, and how you would like us to put it right.', href: '/studio/contact/', linkLabel: 'See contact details' },
		{ heading: 'What happens next', body: 'We will acknowledge your complaint and look into it as quickly as we can. This usually takes a few days, but it can take up to 15 working days, and in extraordinary cases up to 35 working days, to send our final response. If we need more than 15 working days, we will tell you in advance.', note: 'Pending sign-off: the 15/35 working-day timescales are the standard payments-industry limits and need compliance confirmation before publishing.' },
		{ heading: 'If you are not happy with our response', body: '[Placeholder pending sign-off: if you are not happy with our final response, you can escalate your complaint to the Financial Ombudsman Service through their website or by calling 0800 023 4567.]', note: 'Pending sign-off: the FOS escalation route and number need compliance confirmation. Placeholder marks the slot.' },
		{ heading: 'Safety and security questions', body: 'If your complaint is about fraud or a payment that does not look right, freeze your card in the app first, then tell us.', href: '/studio/safety/', linkLabel: 'Safety and security' }
	],
	cta: { label: 'Get in touch', href: '/studio/contact/' }
}
);

export const bySlug = (slug: string) => pages.find((p) => p.slug === slug);
