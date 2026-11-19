<script lang="ts">
	import StudioNav from '#lib/studio/StudioNav.svelte';
	import StudioFooter from '#lib/studio/StudioFooter.svelte';
	import StudioHero from '#lib/studio/StudioHero.svelte';
	import StudioProducts from '#lib/studio/StudioProducts.svelte';
	import StudioSplit from '#lib/studio/StudioSplit.svelte';
	import StudioBanner from '#lib/studio/StudioBanner.svelte';
	import StudioControl from '#lib/studio/StudioControl.svelte';
	import StudioPhoto from '#lib/studio/StudioPhoto.svelte';
	import { chrome, langHref, STUDIO_ORIGIN } from '#lib/studio/i18n';
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
	<link rel="alternate" hreflang={lang} href={`${STUDIO_ORIGIN}/studio/${lang}/`} />
	<link rel="alternate" hreflang="en" href={`${STUDIO_ORIGIN}/studio/`} />
	<link rel="alternate" hreflang="x-default" href={`${STUDIO_ORIGIN}/studio/`} />
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
