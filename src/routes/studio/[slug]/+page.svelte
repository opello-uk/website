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
				Wording taken from algbra.com. Not for publication until approved.
			{:else}
				Placeholder copy. Not for publication until approved.
			{/if}
		</p>

		<section class="sections rem-{p.sections.length % 3}">
			{#each p.sections as s (s.heading)}
				<article class="card">
					<h2>{s.heading}</h2>
					<p>{s.body}</p>
					{#if s.href}<a class="link" href={resolve(s.href as '/')}>{s.linkLabel ?? 'Learn more'}</a>{/if}
					{#if s.items}
						<ul class="links items">
							{#each s.items as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					{/if}
					{#if s.links}
						<ul class="links">
							{#each s.links as l (l.href)}
								<li><a href={resolve(l.href as '/')}>{l.label}</a></li>
							{/each}
						</ul>
					{/if}
				</article>
			{/each}
		</section>

		{#if p.sourceNotes}
			<section class="sources" aria-labelledby="sources-heading">
				<h2 id="sources-heading">Sources and open points</h2>
				<ul>
					{#each p.sourceNotes as n (n)}
						<li>{n}</li>
					{/each}
				</ul>
			</section>
		{/if}

		<section class="cta">
			<a class="pill" href={resolve(p.cta.href as '/')}>{p.cta.label}</a>
		</section>
	</main>

	<StudioFooter />
</div>

<style>
	/* the ring may bleed past the content column on desktop; keep that bleed from adding a sideways scroll */
	.studio {
		overflow-x: clip;
	}
	.subpage {
		max-width: 1100px;
		margin: 0 auto;
		padding: clamp(24px, 4vw, 56px) clamp(20px, 4vw, 48px) 80px;
		color: var(--clay);
	}
	.hero {
		position: relative;
		min-height: min(36vh, 340px);
		display: grid;
		align-items: end;
		padding: clamp(16px, 3vh, 32px) 0 clamp(24px, 4vh, 40px);
		/* desktop: let the ring bleed past the content column instead of being cut off at its edge */
		overflow: visible;
	}
	.ring {
		position: absolute;
		top: -32px;
		right: -12vw;
		width: min(44vw, 420px);
		aspect-ratio: 1;
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
	@media (max-width: 720px) {
		.hero {
			overflow: hidden;
			display: flex;
			flex-direction: column;
			min-height: 0;
			padding-top: 8px;
		}
		.ring {
			position: relative;
			top: auto;
			right: auto;
			transform: none;
			width: 62vw;
			align-self: flex-end;
			margin-bottom: 4px;
		}
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
		color: rgba(233, 228, 224, 0.72);
		border-top: 1px solid var(--rule);
		padding-top: 12px;
	}
	@media (min-width: 900px) {
		/* desktop: keep the ring bleed above the rule, not on top of it */
		.marker {
			margin-top: 56px;
		}
	}
	.sections {
		display: grid;
		gap: 16px;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		margin-top: 28px;
	}
	@media (min-width: 900px) {
		/* six columns: cards span two, so a short last row fills the width instead of leaving a gap */
		.sections {
			grid-template-columns: repeat(6, 1fr);
		}
		.card {
			grid-column: span 2;
		}
		/* one card left over: it runs the full width */
		.sections.rem-1 .card:last-child {
			grid-column: 1 / -1;
		}
		/* two left over: they split the row */
		.sections.rem-2 .card:nth-last-child(-n + 2) {
			grid-column: span 3;
		}
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
	.sources {
		margin-top: 20px;
		padding: 22px 24px;
		border: 1px solid var(--rule);
		border-radius: 14px;
	}
	.sources h2 {
		margin: 0 0 12px;
		font-size: 0.8rem;
		font-weight: 400;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--peach);
	}
	.sources ul {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 10px;
	}
	.sources li {
		font-size: 0.85rem;
		line-height: 1.55;
		color: rgba(233, 228, 224, 0.78);
	}
	.card .link {
		display: inline-block;
		margin-top: 14px;
		color: var(--peach);
		text-decoration: none;
		font-size: 0.9rem;
	}
	.card .link:hover {
		text-decoration: underline;
	}
	.card .links {
		list-style: none;
		margin: 14px 0 0;
		padding: 0;
		display: grid;
		gap: 2px;
	}
	.card .items li {
		min-height: 0;
		padding: 4px 0;
		color: var(--clay);
		font-size: 0.95rem;
		border-bottom: 1px solid rgb(233 228 224 / 0.12);
	}
	.card .links a {
		display: inline-flex;
		align-items: center;
		min-height: 36px;
		color: var(--clay);
		text-decoration: none;
		font-size: 0.95rem;
	}
	.card .links a:hover {
		color: var(--peach);
		text-decoration: underline;
	}
	.card .links a:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
	}
.card .link:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
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
