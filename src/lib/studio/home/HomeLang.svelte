<script lang="ts">
	import StudioNav from '#lib/studio/StudioNav.svelte';
	import StudioFooter from '#lib/studio/StudioFooter.svelte';
	import StudioHero from '#lib/studio/StudioHero.svelte';
	import StudioProducts from '#lib/studio/StudioProducts.svelte';
	import StudioSplit from '#lib/studio/StudioSplit.svelte';
	import StudioBanner from '#lib/studio/StudioBanner.svelte';
	import StudioControl from '#lib/studio/StudioControl.svelte';
	import StudioPhoto from '#lib/studio/StudioPhoto.svelte';
	import '#lib/studio/print.css';
	import { chrome, langHref, STUDIO_ORIGIN, homeCopy } from '#lib/studio/i18n';
	import { resolve } from '$app/paths';

	let { lang: langProp = 'ar' }: { lang?: 'ar' | 'tr' } = $props();
	const lang = $derived(langProp);
	const t = $derived(chrome[lang]);
	// Keep the document element in sync after client-side navigation
	// (the prerender hook sets it in the static HTML).
	$effect(() => {
		document.documentElement.lang = lang;
		document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
	});
	// Internal links point to this language's equivalent when it exists,
	// otherwise they keep their English target.
	const local = $derived((href: string) => resolve(langHref(lang, href) as '/'));
</script>

<svelte:head>
	<title>{lang === 'ar' ? 'استوديو أوبيلو (معاينة غير مدرجة)' : 'Opello stüdyosu (listelenmeyen önizleme)'}</title>
	<!-- Unlisted build: keep out of every index and never link to it. -->
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
	<link rel="alternate" hreflang="en" href={`${STUDIO_ORIGIN}/studio/`} />
	<link rel="alternate" hreflang="ar" href={`${STUDIO_ORIGIN}/studio/ar/`} />
	<link rel="alternate" hreflang="tr" href={`${STUDIO_ORIGIN}/studio/tr/`} />
	<link rel="alternate" hreflang="x-default" href={`${STUDIO_ORIGIN}/studio/`} />
	<!-- Description from this language's landing hero copy; og tags make shared links render as a preview card. -->
	{#if lang === 'ar'}
		<meta name="description" content="افتح حياتك. لحياةٍ مختلفة وظروفٍ مختلفة ونقاط بدايةٍ مختلفة. معاينة غير مدرجة لموقع أوبيلو." />
		<!-- Referrer policy: no-referrer, because the studio is unlisted and its URLs should not leak to external sites when someone clicks out. Re-check at launch with the STUDIO_ORIGIN repoint. -->
		<meta name="referrer-policy" content="no-referrer" />
		<meta property="og:title" content="استوديو أوبيلو" />
		<meta property="og:description" content="افتح حياتك. لحياةٍ مختلفة وظروفٍ مختلفة ونقاط بدايةٍ مختلفة." />
		<meta name="twitter:title" content="استوديو أوبيلو" />
		<meta name="twitter:description" content="افتح حياتك. لحياةٍ مختلفة وظروفٍ مختلفة ونقاط بدايةٍ مختلفة." />
	{:else}
		<meta name="description" content="Hayatını aç. Farklı hayatlar, farklı koşullar ve farklı başlangıç noktaları için. Opello web sitesinin listelenmeyen stüdyo önizlemesi." />
		<meta name="referrer-policy" content="no-referrer" />
		<meta property="og:title" content="Opello stüdyosu" />
		<meta property="og:description" content="Hayatını aç. Farklı hayatlar, farklı koşullar ve farklı başlangıç noktaları için." />
		<meta name="twitter:title" content="Opello stüdyosu" />
		<meta name="twitter:description" content="Hayatını aç. Farklı hayatlar, farklı koşullar ve farklı başlangıç noktaları için." />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${STUDIO_ORIGIN}/studio/${lang}/`} />
	<link rel="canonical" href={`${STUDIO_ORIGIN}/studio/${lang}/`} />
	<!-- Atom feed autodiscovery: the insight articles feed (English edition; ar/tr twins exist for every article). -->
	<link rel="alternate" type="application/atom+xml" title="Opello insights" href={`${STUDIO_ORIGIN}/studio/feed.xml`} />
	<!-- Per-page preview card: scripts/og-cards.mjs generates one card per page at build time. -->
	<meta property="og:image" content={`${STUDIO_ORIGIN}/studio/og/${lang}/home.png`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={`Opello studio: ${homeCopy[lang].heroUnlock} ${homeCopy[lang].heroLife}`} />
	<meta property="og:site_name" content="Opello" />
	<meta property="og:locale" content={lang === 'ar' ? 'ar_AR' : 'tr_TR'} />
	<meta property="og:locale:alternate" content="en_GB" />
	<meta property="og:locale:alternate" content={lang === 'ar' ? 'tr_TR' : 'ar_AR'} />
	<!-- Twitter card so links shared on X render the same preview card. -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={`${STUDIO_ORIGIN}/studio/og/${lang}/home.png`} />
	<!-- Structured data for agent readers: facts match the visible page only
		(hero line, site language). Same facts as the English root, in this
		language; URL rides on STUDIO_ORIGIN for the launch-time repoint.
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
					lang === 'ar'
						? 'افتح حياتك. لحياةٍ مختلفة وظروفٍ مختلفة ونقاط بدايةٍ مختلفة.'
						: 'Hayatını aç. Farklı hayatlar, farklı koşullar ve farklı başlangıç noktaları için.',
				slogan: 'Your own money, unlocked.'
			},
			{
				'@type': 'WebSite',
				'@id': `${STUDIO_ORIGIN}/studio/#site`,
				url: `${STUDIO_ORIGIN}/studio/`,
				name: 'Opello',
				inLanguage: lang === 'ar' ? 'ar' : 'tr',
				publisher: { '@id': `${STUDIO_ORIGIN}/studio/#org` }
			}
		]
	})}<\/script>`}
</svelte:head>

<div class="studio" dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
	<a class="skip" href="#content">{t.skip}</a>
	<StudioNav {lang} />

	<main id="content">
		<StudioHero {lang} />
		<StudioProducts {lang} />
		<StudioSplit {lang} />
		<StudioBanner {lang} />
		<StudioControl {lang} />
		<StudioPhoto {lang} />
	</main>

	<StudioFooter {lang} />
</div>

<style>
	.skip {
		position: absolute;
		inset-inline-start: -9999px;
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
	/* the hero rings bleed past the content column; keep that bleed from adding a sideways scroll */
	.studio {
		overflow-x: clip;
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
