<script lang="ts">
	import '#lib/styles/global.css';
	import font from '#lib/assets/nimbus-sans.woff2';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="preload" href={font} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

{@render children()}
