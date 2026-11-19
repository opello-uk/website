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
	<meta property="og:image" content={`${STUDIO_ORIGIN}/assets/og.png`} />
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
	<link rel="alternate" hreflang="en" href={`${STUDIO_ORIGIN}/studio/`} />
	<link rel="alternate" hreflang="ar" href={`${STUDIO_ORIGIN}/studio/ar/`} />
	<link rel="alternate" hreflang="tr" href={`${STUDIO_ORIGIN}/studio/tr/`} />
	<link rel="alternate" hreflang="x-default" href={`${STUDIO_ORIGIN}/studio/`} />
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
