<script lang="ts">
	import Wordmark from '#lib/components/Wordmark.svelte';
	import { resolve } from '$app/paths';
	import { NOTICE_UPDATED } from '#lib/consent';

	// Fill in once the ICO registration is issued; the line stays hidden until then.
	const ICO_REGISTRATION = '';
</script>

<svelte:head>
	<title>Privacy notice — Opello</title>
	<meta name="description" content="How Opello handles the email address you give us to hear about our launch." />
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
	<link rel="canonical" href="https://opello.co.uk/privacy" />
</svelte:head>

<div class="wrap">
	<header>
		<a class="brand" href={resolve('/')} aria-label="Opello, home"><Wordmark /></a>
		<a class="back" href={resolve('/')}>Back to opello.co.uk</a>
	</header>

	<main>
		<h1>Privacy notice</h1>
		<p class="meta">Launch updates sign-up · Last updated {NOTICE_UPDATED}</p>

		<p class="intro">
			This notice covers one thing: the email address you give us on opello.co.uk to hear when
			Opello launches. A full privacy notice for the Opello app will be published before launch.
		</p>

		<section>
			<h2>Who we are</h2>
			<p>
				Opello Ltd is the controller of this data. We are a private limited company registered in
				England and Wales (company number 17324431), registered office: Suite 401–402, Cumberland
				House, 80 Scrubs Lane, London, NW10 6RF.
			</p>
			{#if ICO_REGISTRATION}
				<p>ICO registration number: {ICO_REGISTRATION}.</p>
			{/if}
		</section>

		<section>
			<h2>What we collect</h2>
			<ul>
				<li>your email address</li>
				<li>the date and time you signed up</li>
				<li>your IP address and browser type, to help us spot abuse and duplicate sign-ups</li>
				<li>the version of the sign-up wording you saw, so we have a record of what you agreed to</li>
			</ul>
			<p>We don't set cookies or use tracking on this website.</p>
		</section>

		<section>
			<h2>Why we use it</h2>
			<p>
				To email you about Opello's launch and related updates. Our legal basis is your consent,
				which you give by signing up. We won't use your email for anything else, and we won't sell
				it.
			</p>
		</section>

		<section>
			<h2>Who can see it</h2>
			<p>
				Only Opello and the trusted service providers who host our website and manage our sign-up
				list on our behalf. They act only on our instructions, are bound to keep your data secure and
				confidential, and can't use it for their own purposes. We don't sell your data or share it for
				anyone else's marketing.
			</p>
		</section>

		<section>
			<h2>Where it's stored</h2>
			<p>
				Your data may be stored or processed outside the UK by our service providers. When it is, we
				make sure it is protected by the safeguards UK data protection law requires.
			</p>
		</section>

		<section>
			<h2>How long we keep it</h2>
			<p>
				Until you ask us to remove it or unsubscribe. If you don't, we delete the list 24 months
				after Opello launches.
			</p>
		</section>

		<section>
			<h2>Your rights</h2>
			<p>
				You can ask for a copy of your data, ask us to correct or delete it, and withdraw your
				consent at any time, without affecting anything we did before. Email
				<a href="mailto:privacy@opello.co.uk">privacy@opello.co.uk</a>. Requests are free and we
				reply within one month.
			</p>
			<p>
				If you're unhappy with how we've handled your data, you can complain to the Information
				Commissioner's Office at <a href="https://ico.org.uk" rel="noopener">ico.org.uk</a> or on
				0303 123 1113. We'd appreciate the chance to sort it out first.
			</p>
		</section>

		<section>
			<h2>Contact</h2>
			<p>
				<a href="mailto:privacy@opello.co.uk">privacy@opello.co.uk</a><br />
				Opello Ltd, Suite 401–402, Cumberland House, 80 Scrubs Lane, London, NW10 6RF
			</p>
		</section>
	</main>
</div>

<style>
	.wrap {
		min-height: 100svh;
		padding: clamp(20px, 3.2vw, 44px) clamp(20px, 4vw, 56px) 80px;
		background:
			radial-gradient(48% 40% at 100% 0%, rgba(245, 136, 81, 0.16) 0%, transparent 70%),
			linear-gradient(200deg, #0a2d49 0%, #04203a 40%, #021429 100%);
	}
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
	}
	.brand {
		display: block;
		width: clamp(110px, 10vw, 150px);
	}
	.back {
		font-size: 12px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--muted);
		text-decoration: none;
	}
	.back:hover {
		color: var(--peach);
	}
	main {
		max-width: 40rem;
		margin: clamp(56px, 10vh, 110px) 0 0;
	}
	h1 {
		margin: 0;
		font-size: clamp(2.2rem, 5vw, 3.4rem);
		font-weight: 400;
		letter-spacing: -0.02em;
		line-height: 1;
	}
	.meta {
		margin: 16px 0 0;
		font-size: 13px;
		color: rgba(233, 228, 224, 0.5);
	}
	.intro {
		margin: 36px 0 0;
		font-size: 1.1rem;
		line-height: 1.6;
	}
	section {
		margin-top: 40px;
		padding-top: 24px;
		border-top: 1px solid var(--rule);
	}
	h2 {
		margin: 0 0 12px;
		font-size: 1.05rem;
		font-weight: 400;
		color: var(--peach);
	}
	p,
	li {
		font-size: 0.98rem;
		line-height: 1.65;
		color: rgba(233, 228, 224, 0.82);
	}
	p {
		margin: 0 0 12px;
	}
	ul {
		margin: 0 0 12px;
		padding-left: 1.1rem;
	}
	a {
		color: var(--clay);
		text-underline-offset: 3px;
		text-decoration-color: rgba(245, 136, 81, 0.6);
	}
	a:hover {
		color: var(--peach);
	}
</style>
