<script lang="ts">
	import StudioNav from '#lib/studio/StudioNav.svelte';
	import StudioFooter from '#lib/studio/StudioFooter.svelte';
	import Ring from '#lib/components/Ring.svelte';
	// Generated placeholder photo until licensed photography is supplied.
	import split from '#lib/assets/studio/split.jpg';
	import cardsHero from '#lib/assets/studio/cards-hero.jpg';
	// Savings split hero: generated placeholder until licensed photography is supplied.
	import savingsHero from '#lib/assets/studio/savings-hero.jpg';
	// Current accounts split hero: generated placeholder until licensed photography is supplied.
	import currentAccountsHero from '#lib/assets/studio/current-accounts-hero.jpg';
	// Help ring-photo hero: generated placeholder until licensed photography is supplied.
	import helpHero from '#lib/assets/studio/help-hero.jpg';
	// Open account photo-ring hero: generated placeholder until licensed photography is supplied.
	import openAccountHero from '#lib/assets/studio/open-account-hero.jpg';
	// About band hero: generated placeholder until licensed photography is supplied.
	import aboutHero from '#lib/assets/studio/about-hero.jpg';
	// News split hero: generated placeholder until licensed photography is supplied.
	import newsHero from '#lib/assets/studio/news-hero.jpg';
	// Blog split hero: generated placeholder until licensed photography is supplied.
	import blogHero from '#lib/assets/studio/blog-hero.jpg';
	import { resolve } from '$app/paths';
	import { hasTranslation, langName, STUDIO_ORIGIN, type Lang } from '#lib/studio/i18n';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const p = $derived(data.page);
	// hreflang alternates: this English page plus each language it has a twin for.
	// Studio pages are noindex, so this is plumbing for launch, not SEO today.
	const slug = $derived(p.slug);
	const alts = $derived((['en', 'ar', 'tr'] as const).filter((l) => l === 'en' || hasTranslation(l, slug)));
	const altHref = $derived((l: 'en' | Lang) => `${STUDIO_ORIGIN}/studio/${l === 'en' ? '' : l + '/'}${slug}/`);
	// The sitemap page also lists the language route for each English link.
	const langVariants = $derived((href: string) => {
		const m = /\/studio\/([a-z-]+)\//.exec(href);
		if (!m) return [];
		return (['ar', 'tr'] as const).filter((l) => hasTranslation(l, m[1])).map((l) => ({
			label: langName[l],
			href: `/studio/${l}/${m[1]}/`
		}));
	});
	// Card notes are not shown on the cards; they roll up into one page-level list.
	const notes = $derived(
		p.sourceNotes ?? p.sections.filter((s) => s.note).map((s) => `${s.heading.replace(/[.!?]$/, "")}: ${s.note}`)
	);
</script>

<svelte:head>
	<title>{p.title} · Opello studio (unlisted)</title>
	<!-- Description from the page's own lede; og tags make shared links render as a preview card. -->
	<meta name="description" content={p.lede} />
	<meta property="og:title" content={p.title} />
	<meta property="og:description" content={p.lede} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={altHref('en')} />
	<meta property="og:image" content={`${STUDIO_ORIGIN}/assets/og.png`} />
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
	{#each alts as l (l)}
		<link rel="alternate" hreflang={l} href={altHref(l)} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={altHref('en')} />
</svelte:head>

<div class="studio">
	<a class="skip" href="#content">Skip to content</a>
	<StudioNav />

	<main class="subpage" id="content">
		{#if p.hero?.variant === 'split'}
		<section class="hero hero-split">
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<div class="media">
				<img src={p.slug === 'blog' ? blogHero : p.slug === 'news' ? newsHero : p.slug === 'savings' ? savingsHero : p.slug === 'current-accounts' ? currentAccountsHero : split} alt={p.hero.alt} width={p.slug === 'savings' ? 800 : 900} height={p.slug === 'savings' ? 800 : 600} decoding="async" fetchpriority="high" />
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
				<img src={p.slug === 'help' ? helpHero : cardsHero} alt={p.hero.alt} width="800" height="800" decoding="async" fetchpriority="high" />
			</div>
		</section>
		{:else if p.hero?.variant === 'photo-ring'}
		<section class="hero hero-ringphoto hero-photoring">
			<div class="ring" aria-hidden="true"><Ring /></div>
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<div class="media">
				<img src={p.slug === 'open-account' ? openAccountHero : cardsHero} alt={p.hero.alt} width="800" height="800" decoding="async" fetchpriority="high" />
			</div>
			<div class="copy">
				<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
		</section>
		{:else if p.hero?.variant === 'band'}
		<section class="hero hero-band">
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<img class="band-photo" src={p.slug === 'about' ? aboutHero : cardsHero} alt={p.hero.alt} width={p.slug === 'about' ? 900 : 800} height={p.slug === 'about' ? 600 : 800} decoding="async" fetchpriority="high" />
			<div class="band-scrim" aria-hidden="true"></div>
			<div class="copy">
				<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
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

		<!-- Clay card language is now the studio-wide default (baseline-05): every sub-page's cards
		     match the landing page. Per-slug opt-out is back to the earlier conditional list if a
		     page ever needs the navy ground again. -->
		<section class="sections clay rem-{p.sections.length % 3}">
			{#each p.sections as s (s.heading)}
				<article class="card" class:wide={s.wide}>
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
								<li><a href={resolve(l.href as '/')}>{l.label}</a>{#if p.slug === 'sitemap'}{#each langVariants(l.href) as v (v.href)} <a class="langlink" href={resolve(v.href as '/')} lang={v.label === 'Türkçe' ? 'tr' : 'ar'}>{v.label}</a>{/each}{/if}</li>
							{/each}
						</ul>
					{/if}
				</article>
			{/each}
		</section>

		{#if notes.length}
			<section class="sources" aria-labelledby="sources-heading">
				<h2 id="sources-heading">Sources and open points</h2>
				<ul>
					{#each notes as n (n)}
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
	.skip {
		position: absolute;
		left: -9999px;
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
		/* lifted and shrunk so the lower edge clears the first card row: the old
		   420px ring crossed the third card's heading and body at 1440 (verified
		   live). Same geometry the RTL pages already ship. */
		top: -72px;
		inset-inline-end: -12vw;
		width: min(34vw, 330px);
		aspect-ratio: 1;
		opacity: 0.8;
		pointer-events: none;
	}
	.ring :global(svg) {
		width: 100%;
		height: 100%;
		display: block;
		/* baseline-phase motion: the same gentle drift the landing hero rings use,
		   applied to the svg so RTL/mobile positioning transforms on .ring stay intact */
		animation: ring-drift 30s ease-in-out infinite alternate;
	}
	@keyframes ring-drift {
		from { transform: rotate(-1deg) translateY(-6px); }
		to { transform: rotate(1.2deg) translateY(7px); }
	}
	/* Baseline-phase parallax: the ring rises a touch faster than the page and
	   fades slightly as you scroll, so it reads as a layer above the content.
	   Scroll-driven CSS (no JS); browsers without animation-timeline keep the
	   static ring, and reduced-motion users get the drift only. */
	@keyframes ring-parallax {
		from { translate: 0 0; opacity: 0.8; }
		to { translate: 0 -6vh; opacity: 0.45; }
	}
	@supports (animation-timeline: scroll()) {
		@media (min-width: 900px) and (prefers-reduced-motion: no-preference) {
			.hero .ring {
				animation: ring-parallax linear both;
				animation-timeline: scroll(root block);
				animation-range: 0 90vh;
			}
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.ring :global(svg) { animation: none; }
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
	/* Photo-ring hero variant (Open an account): photo card left, copy right, ring behind the photo.
	   Reuses the ring-photo card styles; grid order flips the media to the left and the ring
	   mirrors to the left with logical properties, so RTL keeps the ring behind the photo. */
	.hero-photoring .media {
		order: -1;
	}
	.hero-photoring .ring {
		inset-inline-end: auto;
		inset-inline-start: -6vw;
	}
	/* Band hero variant (About): full-bleed photo, copy overlaid on a navy scrim,
	   like the baseline photo band. Full column width, photo behind the copy. */
	.hero-band {
		min-height: min(52vh, 480px);
		padding: clamp(16px, 3vh, 32px) clamp(20px, 4vw, 48px) clamp(24px, 4vh, 40px);
		border-radius: 24px;
		overflow: hidden;
		align-items: end;
	}
	.hero-band .band-photo {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.hero-band .band-scrim {
		position: absolute;
		inset: 0;
		background: linear-gradient(180deg, rgba(0, 20, 49, 0.62) 0%, rgba(0, 20, 49, 0.34) 45%, rgba(0, 20, 49, 0.78) 100%);
	}
	.hero-band .copy {
		max-width: 30rem;
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
		/* same for a full-width card with a link list (news insights) */
		.sections.rem-1 .card:last-child .links {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			column-gap: 32px;
			row-gap: 6px;
		}
		.sections.rem-1 .card:last-child .links a {
			min-height: 0;
			padding: 4px 0;
			align-items: start;
		}
		/* two left over: they split the row */
		.sections.rem-2 .card:nth-last-child(-n + 2) {
			grid-column: span 3;
		}
		/* a card explicitly marked wide (blog rebalance): it runs the full row. Global + important because the
		   rem-2 leftover rule out-specifies any scoped selector here (the template's dynamic rem class) */
		:global(.sections .card.wide) {
			grid-column: 1 / -1 !important;
		}
		.sections .card.wide .links {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			column-gap: 32px;
			row-gap: 6px;
		}
		.sections .card.wide .links a {
			min-height: 0;
			padding: 4px 0;
			align-items: start;
		}
	}
	.card {
		background: rgba(233, 228, 224, 0.04);
		border: 1px solid var(--rule);
		border-radius: 14px;
		padding: 26px 24px;
	}
	/* Product pages carry the landing-page card language (baseline-05): clay ground, navy copy, 24px corners,
	   gentle hover lift. Slug-keyed so the Arabic and Turkish twins match automatically. */
	.sections.clay .card {
		background: var(--clay);
		border-color: var(--clay);
		border-radius: 24px;
		transition: transform 220ms var(--ease), box-shadow 220ms var(--ease);
	}
	.sections.clay .card:hover {
		transform: translateY(-3px);
		box-shadow: 0 14px 30px rgba(0, 20, 49, 0.35);
	}
	.sections.clay .card h2 {
		color: var(--deep);
		font-weight: 600;
		font-size: 1.3rem;
	}
	.sections.clay .card p {
		color: var(--deep);
		opacity: 0.85;
	}
	.sections.clay .card .link {
		color: var(--deep);
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 3px;
	}
	.sections.clay .card .link:hover {
		opacity: 0.75;
	}
	.sections.clay .card .link:focus-visible {
		outline-color: var(--deep);
	}
	/* Peach link lists fail contrast on clay; lists go navy like the single links. */
	.sections.clay .card .links a {
		color: var(--deep);
	}
	/* Sitemap language twins were clay-tinted for the navy ground; navy on clay. */
	.sections.clay .card .langlink {
		color: rgba(0, 20, 49, 0.72);
	}
	/* Topic lists (help collections): the default clay-on-navy text would vanish on the
	   clay ground, so items go navy with a navy rule between rows. */
	.sections.clay .card .items li {
		color: var(--deep);
		opacity: 0.9;
		border-bottom-color: rgba(0, 20, 49, 0.14);
	}
	.sections.clay .card .links a:hover {
		opacity: 0.75;
	}
	.sections.clay .card .links a:focus-visible {
		outline-color: var(--deep);
	}
	@media (prefers-reduced-motion: reduce) {
		.sections.clay .card {
			transition: none;
		}
		.sections.clay .card:hover {
			transform: none;
			box-shadow: none;
		}
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
	/* language variants listed beside each sitemap link */
	.card .langlink {
		margin-inline-start: 8px;
		color: rgba(233, 228, 224, 0.72);
		font-size: 0.8rem;
		text-decoration: underline;
		text-underline-offset: 3px;
	}
	.card .langlink:hover {
		color: var(--peach);
	}
	.card .langlink:focus-visible {
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
