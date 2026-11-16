<script lang="ts">
	import StudioNav from '#lib/studio/StudioNav.svelte';
	import StudioFooter from '#lib/studio/StudioFooter.svelte';
	import Ring from '#lib/components/Ring.svelte';
	import { resolve } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const p = $derived(data.page);
	const isAlgbra = $derived(p.source === 'algbra');
</script>

<svelte:head>
	<title>{p.title} · Opello studio (unlisted)</title>
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
</svelte:head>

<div class="studio">
	<StudioNav />

	<main class="subpage">
		<section class="hero">
			<div class="ring" aria-hidden="true"><Ring /></div>
			<div class="copy">
				<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
		</section>

		<p class="marker">
			{#if isAlgbra}
				Wording taken from algbra.com. Not for publication until Algbra has approved it.
			{:else}
				Placeholder copy. Not for publication until the wording is confirmed.
			{/if}
		</p>

		<section class="sections">
			{#each p.sections as s (s.heading)}
				<article class="card">
					<h2>{s.heading}</h2>
					<p>{s.body}</p>
					{#if s.note}<p class="note">{s.note}</p>{/if}
				</article>
			{/each}
		</section>

		<section class="cta">
			<a class="pill" href={resolve(p.cta.href as '/')}>{p.cta.label}</a>
		</section>
	</main>

	<StudioFooter />
</div>

<style>
	.subpage {
		max-width: 1100px;
		margin: 0 auto;
		padding: clamp(24px, 4vw, 56px) clamp(20px, 4vw, 48px) 80px;
		color: var(--clay);
	}
	.hero {
		position: relative;
		min-height: 46vh;
		display: grid;
		align-items: end;
		padding: clamp(40px, 8vh, 96px) 0 clamp(24px, 4vh, 40px);
		overflow: hidden;
	}
	.ring {
		position: absolute;
		top: 50%;
		right: -12vw;
		width: min(70vw, 620px);
		aspect-ratio: 1;
		transform: translateY(-50%);
		opacity: 0.8;
		pointer-events: none;
	}
	.ring :global(svg) {
		width: 100%;
		height: 100%;
		display: block;
	}
	.copy {
		position: relative;
		max-width: 40rem;
	}
	.kicker {
		margin: 0 0 14px;
		font-size: 11px;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--peach);
	}
	h1 {
		margin: 0;
		font-size: clamp(2.6rem, 6vw, 4.6rem);
		font-weight: 400;
		line-height: 0.96;
		letter-spacing: -0.025em;
	}
	.lede {
		margin: 22px 0 0;
		font-size: clamp(1rem, 1.3vw, 1.15rem);
		line-height: 1.55;
		color: var(--muted);
		max-width: 36ch;
	}
	.marker {
		margin: 24px 0 0;
		font-size: 12px;
		letter-spacing: 0.04em;
		color: rgba(233, 228, 224, 0.55);
		border-top: 1px solid var(--rule);
		padding-top: 12px;
	}
	.sections {
		display: grid;
		gap: 16px;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		margin-top: 28px;
	}
	.card {
		background: rgba(233, 228, 224, 0.04);
		border: 1px solid var(--rule);
		border-radius: 14px;
		padding: 26px 24px;
	}
	.card h2 {
		margin: 0 0 10px;
		font-size: 1.2rem;
		font-weight: 400;
		color: #fff;
		letter-spacing: -0.01em;
	}
	.card p {
		margin: 0;
		font-size: 0.97rem;
		line-height: 1.6;
		color: var(--muted);
	}
	.card .note {
		margin-top: 12px;
		font-size: 0.8rem;
		color: rgba(233, 228, 224, 0.5);
	}
	.cta {
		margin-top: 36px;
	}
	.pill {
		display: inline-block;
		background: var(--peach);
		color: var(--deep);
		text-decoration: none;
		border-radius: 999px;
		padding: 13px 26px;
		font-size: 15px;
		letter-spacing: 0.02em;
	}
	.pill:hover {
		filter: brightness(1.06);
	}
	.pill:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
	}
</style>
