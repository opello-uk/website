<script lang="ts">
	import '#lib/styles/global.css';
	// Preload the face the page actually renders (Nimbus Sans Extd, the brand body face in --font).
	// The plain Nimbus Sans face stays a fallback without a preload: it is only fetched if needed.
	import font from '#lib/assets/nimbus-sans-extd-regular.woff2';
	// Arabic pages render their body in IBM Plex Sans Arabic (the companion face); preload it too,
	// otherwise the visible Arabic text swaps in late after the Latin face (WCAG/perf, 2026-11-21 cycle).
	// Two loads (~143KB total, content-hashed, only on ar pages); Latin preload stays for chrome fallback.
	import fontArRegular from '#lib/assets/plex-arabic-regular.woff2';
	import fontArBold from '#lib/assets/plex-arabic-bold.woff2';
	import { page } from '$app/state';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
	const isArabic = $derived(page.url.pathname.startsWith('/studio/ar'));
</script>

<svelte:head>
	<link rel="preload" href={font} as="font" type="font/woff2" crossorigin="anonymous" />
	{#if isArabic}
		<link rel="preload" href={fontArRegular} as="font" type="font/woff2" crossorigin="anonymous" />
		<link rel="preload" href={fontArBold} as="font" type="font/woff2" crossorigin="anonymous" />
	{/if}
</svelte:head>

{@render children()}
