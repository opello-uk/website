<script lang="ts">
	import Wordmark from '#lib/components/Wordmark.svelte';
	import Ring from '#lib/components/Ring.svelte';
	import SignupForm from '#lib/components/SignupForm.svelte';
	import { resolve } from '$app/paths';

	const title = 'Opello — More freedom. Fewer barriers.';
	const description =
		'Opello is a cross-border money app for lives that span countries. From everyday payments to international transfers, more flexibility and control wherever life takes you. Coming soon.';
	const url = 'https://opello.co.uk/';

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Opello',
		url,
		logo: 'https://opello.co.uk/assets/opello-wordmark.svg',
		slogan: 'Your own money, unlocked.',
		description:
			'A cross-border money app for people whose lives span countries. Financial freedom should have no borders.'
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<!-- pre-launch: keep out of search and AI indexes until we flip this -->
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
	<meta name="googlebot" content="noindex, nofollow" />
	<link rel="canonical" href={url} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Opello" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content="Financial freedom should have no borders. Opello is coming soon." />
	<meta property="og:url" content={url} />
	<meta property="og:image" content="https://opello.co.uk/assets/og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<main class="page">
	<div class="ground" aria-hidden="true">
		<div class="ring"><Ring /></div>
	</div>

	<header>
		<a class="brand" href={resolve('/')} aria-label="Opello, home"><Wordmark /></a>
		<p class="status">Coming soon</p>
	</header>

	<div class="hero">
		<h1>More freedom.<br />Fewer barriers.</h1>
		<p class="lede">
			From everyday payments to international transfers, Opello gives you more flexibility and
			control, wherever life takes you.
		</p>
		<SignupForm />
	</div>

	<footer>
		<span>opello.co.uk</span>
		<span class="foot-right">
			<span>A cross-border money app</span>
			<a href={resolve('/privacy')}>Privacy</a>
		</span>
	</footer>
</main>

<style>
	.page {
		position: relative;
		min-height: 100svh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		padding: clamp(20px, 3.2vw, 44px) clamp(20px, 4vw, 56px);
		isolation: isolate;
		overflow: clip;
	}

	/* ground: deep navy lifting to mid blue upper right, warm peach corner */
	.ground {
		position: absolute;
		inset: 0;
		z-index: -1;
		pointer-events: none;
		background:
			radial-gradient(48% 46% at 100% 0%, rgba(245, 136, 81, 0.3) 0%, rgba(245, 136, 81, 0.07) 48%, transparent 76%),
			radial-gradient(70% 64% at 78% 30%, rgba(0, 96, 148, 0.5) 0%, rgba(0, 83, 133, 0.16) 48%, transparent 78%),
			radial-gradient(60% 60% at 0% 100%, rgba(1, 10, 24, 0.7) 0%, transparent 70%),
			linear-gradient(200deg, #0d3554 0%, #04203a 42%, #021429 100%);
	}

	/* the core graphic, large and bleeding off the right, dissolving downward */
	.ring {
		position: absolute;
		top: 50%;
		right: -17vw;
		width: min(118vh, 78vw);
		aspect-ratio: 1;
		transform: translateY(-50%);
		opacity: 0.82;
		-webkit-mask-image: linear-gradient(185deg, #000 0%, #000 30%, rgba(0, 0, 0, 0.55) 62%, rgba(0, 0, 0, 0.08) 92%);
		mask-image: linear-gradient(185deg, #000 0%, #000 30%, rgba(0, 0, 0, 0.55) 62%, rgba(0, 0, 0, 0.08) 92%);
		animation: ring-in 1600ms var(--ease) both;
	}
	.ring :global(svg) {
		display: block;
		width: 100%;
		height: 100%;
	}

	@keyframes ring-in {
		from {
			opacity: 0;
			transform: translateY(calc(-50% + 14px));
		}
		to {
			opacity: 0.82;
			transform: translateY(-50%);
		}
	}

	header {
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
	}
	.brand {
		display: block;
		width: clamp(140px, 14vw, 210px);
	}
	.status {
		margin: 0;
		display: inline-flex;
		align-items: center;
		gap: 9px;
		font-size: 11px;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: rgba(233, 228, 224, 0.82);
	}
	.status::before {
		content: '';
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--peach);
		animation: pulse 3.2s var(--ease) infinite;
	}
	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.28;
		}
	}

	.hero {
		position: relative;
		align-self: end;
		padding-bottom: clamp(32px, 6vh, 72px);
	}
	h1 {
		margin: 0;
		max-width: 15ch;
		font-size: clamp(2.7rem, 7vw, 5rem);
		font-weight: 400;
		line-height: 0.94;
		letter-spacing: -0.022em;
	}
	.lede {
		margin: clamp(22px, 3vh, 32px) 0 0;
		max-width: 36ch;
		font-size: clamp(0.98rem, 1.15vw, 1.08rem);
		line-height: 1.55;
		color: var(--muted);
		text-wrap: pretty;
	}

	footer {
		position: relative;
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 16px;
		border-top: 1px solid var(--rule);
		padding-top: 18px;
		font-size: 12px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--muted);
	}

	.foot-right {
		display: inline-flex;
		gap: 24px;
	}
	footer a {
		color: var(--clay);
		text-decoration: none;
	}
	footer a:hover {
		color: var(--peach);
	}

	@media (max-width: 760px) {
		.ring {
			top: 7vh;
			right: -66vw;
			width: 128vw;
			transform: none;
			animation-name: ring-in-m;
		}
		@keyframes ring-in-m {
			from {
				opacity: 0;
				transform: translateY(14px);
			}
			to {
				opacity: 0.82;
				transform: none;
			}
		}
		.page {
			padding-bottom: 26px;
		}
		.hero {
			padding-top: 34vh;
			padding-bottom: clamp(24px, 4vh, 40px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.ring,
		.status::before {
			animation: none;
		}
	}
</style>
