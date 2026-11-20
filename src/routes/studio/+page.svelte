<script lang="ts">
	import StudioNav from '#lib/studio/StudioNav.svelte';
	import StudioFooter from '#lib/studio/StudioFooter.svelte';
	import StudioHero from '#lib/studio/StudioHero.svelte';
	import StudioProducts from '#lib/studio/StudioProducts.svelte';
	import StudioSplit from '#lib/studio/StudioSplit.svelte';
	import StudioBanner from '#lib/studio/StudioBanner.svelte';
	import StudioControl from '#lib/studio/StudioControl.svelte';
	import StudioPhoto from '#lib/studio/StudioPhoto.svelte';
	import { STUDIO_ORIGIN } from '#lib/studio/i18n';

	const title = 'Opello studio (unlisted preview)';
</script>

<svelte:head>
	<title>{title}</title>
	<!-- Unlisted build: keep out of every index and never link to it. -->
	<!-- Description from the landing hero copy; og tags make shared links render as a preview card. -->
	<meta name="description" content="Unlock your life. For different lives, different circumstances and different starting points. Unlisted studio preview of the Opello website." />
	<meta property="og:title" content="Opello studio" />
	<meta property="og:description" content="Unlock your life. For different lives, different circumstances and different starting points." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${STUDIO_ORIGIN}/studio/`} />
	<link rel="canonical" href={`${STUDIO_ORIGIN}/studio/`} />
	<!-- Atom feed autodiscovery: the insight articles feed (English edition; ar/tr twins exist for every article). -->
	<link rel="alternate" type="application/atom+xml" title="Opello insights" href={`${STUDIO_ORIGIN}/studio/feed.xml`} />
	<meta property="og:image" content={`${STUDIO_ORIGIN}/assets/og.png`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Opello" />
	<meta property="og:site_name" content="Opello" />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:locale:alternate" content="ar_AR" />
	<meta property="og:locale:alternate" content="tr_TR" />
	<!-- Twitter card so links shared on X render the same preview card. -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Opello studio" />
	<meta name="twitter:description" content="Unlock your life. For different lives, different circumstances and different starting points." />
	<meta name="twitter:image" content={`${STUDIO_ORIGIN}/assets/og.png`} />
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
	<link rel="alternate" hreflang="en" href={`${STUDIO_ORIGIN}/studio/`} />
	<link rel="alternate" hreflang="ar" href={`${STUDIO_ORIGIN}/studio/ar/`} />
	<link rel="alternate" hreflang="tr" href={`${STUDIO_ORIGIN}/studio/tr/`} />
	<link rel="alternate" hreflang="x-default" href={`${STUDIO_ORIGIN}/studio/`} />
	<!-- Structured data for agent readers: facts match the visible page only
		(hero line, slogan in the footer, site language). Social sameAs is left
		out until the accounts are live. URL rides on STUDIO_ORIGIN so the
		launch-time repoint updates it with hreflang, canonical and og:url.
		Rendered with @html because Svelte does not interpolate expressions
		inside a literal <script> element in the head. -->
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Organization',
				'@id': `${STUDIO_ORIGIN}/studio/#org`,
				name: 'Opello',
				url: `${STUDIO_ORIGIN}/studio/`,
				description:
					'Unlock your life. For different lives, different circumstances and different starting points.',
				slogan: 'Your own money, unlocked.'
			},
			{
				'@type': 'WebSite',
				'@id': `${STUDIO_ORIGIN}/studio/#site`,
				url: `${STUDIO_ORIGIN}/studio/`,
				name: 'Opello',
				inLanguage: 'en-GB',
				publisher: { '@id': `${STUDIO_ORIGIN}/studio/#org` }
			}
		]
	})}<\/script>`}
</svelte:head>

<div class="studio">
	<a class="skip" href="#personal">Skip to content</a>
	<StudioNav />

	<main id="personal">
		<StudioHero />
		<StudioProducts />
		<StudioSplit />
		<StudioBanner />
		<StudioControl />
		<StudioPhoto />
		<!-- The footer columns and mobile pass land in the next steps. -->
	</main>

	<StudioFooter />
</div>

<style>
	.skip {
		position: absolute;
		left: -9999px;
		z-index: 100;
	}
	.skip:focus {
		left: 16px;
		top: 16px;
		background: var(--peach);
		color: var(--deep);
		padding: 10px 18px;
		border-radius: 999px;
		font-size: 14px;
		font-weight: 500;
	}
	.studio {
		min-height: 100svh;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		grid-template-rows: auto 1fr auto;
		background: var(--deep);
	}
	main {
		min-height: 40svh;
		min-width: 0;
	}
</style>
