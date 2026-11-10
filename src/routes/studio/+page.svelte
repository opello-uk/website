<script lang="ts">
	import StudioNav from '#lib/studio/StudioNav.svelte';
	import StudioFooter from '#lib/studio/StudioFooter.svelte';

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
		<!-- Hero, light section and the rest land in the next steps. -->
		<p class="marker">Studio build. Placeholder copy, not for launch.</p>
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
		padding: 96px clamp(20px, 4vw, 56px);
		text-align: center;
	}
	.marker {
		max-width: 36ch;
		margin: 0 auto;
		font-size: 11px;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--muted);
	}
</style>
