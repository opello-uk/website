<script lang="ts">
	import StudioNav from '#lib/studio/StudioNav.svelte';
	import StudioFooter from '#lib/studio/StudioFooter.svelte';
	import Ring from '#lib/components/Ring.svelte';
	// Generated placeholder photo until licensed photography is supplied.
	import split from '#lib/assets/studio/split.jpg';
	import cardsHero from '#lib/assets/studio/cards-hero.jpg';
	import { resolve } from '$app/paths';
	import { chrome, langHref, hasTranslation, STUDIO_ORIGIN } from '#lib/studio/i18n';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const p = $derived(data.page);
	const lang = $derived(data.lang as 'ar' | 'tr');
	// Keep the document element in sync after client-side navigation
	// (the prerender hook sets it in the static HTML).
	$effect(() => {
		document.documentElement.lang = lang;
		document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
	});
	const t = $derived(chrome[lang]);
	// Internal links point to this language's equivalent when it exists,
	// otherwise they keep their English target.
	const local = $derived((href: string) => resolve(langHref(lang, href) as '/'));
</script>

<svelte:head>
	<title>{p.title} · Opello studio (unlisted)</title>
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
	<link rel="alternate" hreflang={lang} href={`${STUDIO_ORIGIN}/studio/${lang}/${p.slug}/`} />
	<link rel="alternate" hreflang="en" href={`${STUDIO_ORIGIN}/studio/${p.slug}/`} />
	<link rel="alternate" hreflang="x-default" href={`${STUDIO_ORIGIN}/studio/${p.slug}/`} />
	{#each (['ar', 'tr'] as const).filter((l) => l !== lang && hasTranslation(l, p.slug)) as l (l)}
		<link rel="alternate" hreflang={l} href={`${STUDIO_ORIGIN}/studio/${l}/${p.slug}/`} />
	{/each}
</svelte:head>

<div class="studio" dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
	<a class="skip" href="#content">{t.skip}</a>
	<StudioNav {lang} />

	<main class="subpage" id="content">
		{#if p.hero?.variant === 'split'}
		<section class="hero hero-split">
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<div class="media">
				<img src={split} alt={p.hero.alt} decoding="async" fetchpriority="high" />
			</div>
			<div class="copy">
				<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
		</section>
		{:else if p.hero?.variant === 'ring-photo'}
		<section class="hero hero-ringphoto">
			<div class="ring" aria-hidden="true"><Ring /></div>
			<div class="copy">
				<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<div class="media">
				<img src={cardsHero} alt={p.hero.alt} decoding="async" fetchpriority="high" />
			</div>
		</section>
		{:else}
		<section class="hero">
			<div class="ring" aria-hidden="true"><Ring /></div>
			<div class="copy">
				<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
		</section>
		{/if}

		<section class="sections rem-{p.sections.length % 3}">
			{#each p.sections as s (s.heading)}
				<article class="card">
					<h2>{s.heading}</h2>
					<p>{s.body}</p>
					{#if s.href}<a class="link" href={local(s.href)}>{s.linkLabel ?? t.learnMore}</a>{/if}
					{#if s.links}
						<ul class="links">
							{#each s.links as l (l.href)}
								<li><a href={local(l.href)}>{l.label}</a></li>
							{/each}
						</ul>
					{/if}
					{#if s.items}
						<ul class="links items">
							{#each s.items as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					{/if}
				</article>
			{/each}
		</section>

		<section class="cta">
			<a class="pill" href={local(p.cta.href)}>{p.cta.label}</a>
		</section>
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
		inset-inline-end: -12vw;
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
	/* RTL: the mirrored ring hangs over the first card's text at 1440; lift and
	   shrink it slightly so its lower edge clears the card row (LTR pages keep
	   the baseline-size ring) */
	:global([dir="rtl"]) .ring {
		top: -72px;
		width: min(34vw, 330px);
	}
	.copy {
		position: relative;
		max-width: 40rem;
	}
	/* Split hero variant: photo card beside the copy, in the landing-page card language (24px corners). */
	.hero-split {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
		gap: clamp(24px, 4vw, 48px);
		align-items: end;
		min-height: min(46vh, 420px);
	}
	.hero-split .media {
		position: relative;
		align-self: stretch;
		min-height: 260px;
		border-radius: 24px;
		overflow: hidden;
		background: linear-gradient(135deg, #0c6470 0%, #001431 60%, #f58851 140%);
	}
	.hero-split .media img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 35% 50%;
	}
	.hero-split .copy {
		max-width: none;
		padding-bottom: 4px;
	}
	/* Ring-photo hero variant: copy left, photo card right, ring motif behind the photo (Cards). */
	.hero-ringphoto {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(24px, 4vw, 48px);
		align-items: end;
		min-height: min(46vh, 420px);
	}
	.hero-ringphoto .ring {
		top: -40px;
		inset-inline-end: -6vw;
		width: min(38vw, 360px);
	}
	.hero-ringphoto .media {
		position: relative;
		align-self: stretch;
		min-height: 260px;
		border-radius: 24px;
		overflow: hidden;
		background: linear-gradient(135deg, #f58851 0%, #001431 70%);
	}
	.hero-ringphoto .media img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.hero-ringphoto .copy {
		max-width: none;
		padding-bottom: 4px;
	}
	@media (max-width: 720px) {
		.hero-ringphoto {
			grid-template-columns: minmax(0, 1fr);
			gap: 18px;
			min-height: 0;
		}
		.hero-ringphoto .media {
			min-height: 0;
			aspect-ratio: 16 / 10;
		}
		.hero-ringphoto .ring {
			width: 62vw;
		}
	}
	@media (max-width: 720px) {
		.hero-split {
			grid-template-columns: minmax(0, 1fr);
			gap: 18px;
			min-height: 0;
		}
		.hero-split .media {
			min-height: 0;
			aspect-ratio: 16 / 10;
		}
	}
	@media (max-width: 720px) {
		.hero {
			overflow: hidden;
			display: flex;
			flex-direction: column;
			align-items: stretch;
			min-height: 0;
			padding-top: 8px;
		}
		.ring {
			position: relative;
			top: auto;
			inset-inline-end: auto;
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
	@media (min-width: 900px) {
		/* desktop: keep the ring bleed above the rule, not on top of it */
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
		/* a full-width card with a topic list: lay the topics in two columns */
		.sections.rem-1 .card:last-child .items {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			column-gap: 32px;
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
		color: var(--peach);
		text-decoration: underline;
		text-underline-offset: 3px;
		font-size: 0.95rem;
	}
	.card .links a:hover {
		color: var(--clay);
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
