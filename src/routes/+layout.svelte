<script lang="ts">
	import '#lib/styles/global.css';
	// Preload the face the page actually renders (Nimbus Sans Extd, the brand body face in --font).
	// The plain Nimbus Sans face stays a fallback without a preload: it is only fetched if needed.
	import font from '#lib/assets/nimbus-sans-extd-regular.woff2';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="preload" href={font} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

{@render children()}
