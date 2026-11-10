<script lang="ts">
	import StudioNav from '#lib/studio/StudioNav.svelte';
	import StudioFooter from '#lib/studio/StudioFooter.svelte';
	import StudioHero from '#lib/studio/StudioHero.svelte';
	import StudioProducts from '#lib/studio/StudioProducts.svelte';

	const title = 'Opello studio (unlisted preview)';
</script>

<svelte:head>
	<title>{title}</title>
	<!-- Unlisted build: keep out of every index and never link to it. -->
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
</svelte:head>

<div class="studio">
	<StudioNav />

	<main id="personal">
		<p class="marker">Studio build. Placeholder copy, not for launch.</p>
		<StudioHero />
		<StudioProducts />
		<!-- The split section and the rest land in the next steps. -->
	</main>

	<StudioFooter />
</div>

<style>
	.studio {
		min-height: 100svh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		background: var(--deep);
	}
	main {
		min-height: 40svh;
	}
	.marker {
		margin: 0;
		padding: 8px clamp(20px, 4vw, 56px);
		font-size: 11px;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--muted);
		background: rgba(233, 228, 224, 0.04);
	}
</style>
