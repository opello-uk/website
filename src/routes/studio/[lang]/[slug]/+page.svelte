<script lang="ts">
	import StudioNav from '#lib/studio/StudioNav.svelte';
import { focusMainOnNavigate } from '#lib/studio/focusOnNavigate';
	import StudioFooter from '#lib/studio/StudioFooter.svelte';
	import Ring from '#lib/components/Ring.svelte';
	import StudioCrumbs from '#lib/studio/StudioCrumbs.svelte';
	import EmailBody from '#lib/studio/EmailBody.svelte';
	import '#lib/studio/print.css';
	// Generated placeholder photo until licensed photography is supplied.
	import split from '#lib/assets/studio/split.jpg';
	import split2x from '#lib/assets/studio/split@2x.jpg';

	// Savings split hero: generated placeholder until licensed photography is supplied.
	import savingsHero from '#lib/assets/studio/savings-hero.jpg';
	import savingsHero2x from '#lib/assets/studio/savings-hero@2x.jpg';

	// Current accounts split hero: generated placeholder until licensed photography is supplied.
	import currentAccountsHero from '#lib/assets/studio/current-accounts-hero.jpg';
	import currentAccountsHero2x from '#lib/assets/studio/current-accounts-hero@2x.jpg';

	// Help ring-photo hero: generated placeholder until licensed photography is supplied.
	import helpHero from '#lib/assets/studio/help-hero.jpg';
	import helpHero2x from '#lib/assets/studio/help-hero@2x.jpg';

	import cardsHero from '#lib/assets/studio/cards-hero.jpg';
	import cardsHero2x from '#lib/assets/studio/cards-hero@2x.jpg';

	// Open account photo-ring hero: generated placeholder until licensed photography is supplied.
	import openAccountHero from '#lib/assets/studio/open-account-hero.jpg';
	import openAccountHero2x from '#lib/assets/studio/open-account-hero@2x.jpg';

	// About band hero: generated placeholder until licensed photography is supplied.
	import aboutHero from '#lib/assets/studio/about-hero.jpg';
	import aboutHero2x from '#lib/assets/studio/about-hero@2x.jpg';

	// News split hero: generated placeholder until licensed photography is supplied.
	import newsHero from '#lib/assets/studio/news-hero.jpg';
	import newsHero2x from '#lib/assets/studio/news-hero@2x.jpg';

	// Blog split hero: generated placeholder until licensed photography is supplied.
	import blogHero from '#lib/assets/studio/blog-hero.jpg';
	import blogHero2x from '#lib/assets/studio/blog-hero@2x.jpg';

	import { resolve } from '$app/paths';
	import { chrome, langHref, hasTranslation, STUDIO_ORIGIN } from '#lib/studio/i18n';
	// English page fallback: translated pages inherit the English source notes until the notes
	// themselves are translated (they are internal review markers, not customer copy).
	import { bySlug as enBySlug } from '#lib/studio/pages';
	import { faqJsonLd } from '#lib/studio/faqLd';
	import { articleJsonLd, isArticle } from '#lib/studio/articleLd';
	import { breadcrumbJsonLd, parentBySlug } from '#lib/studio/breadcrumbLd';
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
	// Source notes for this page: the translated twin's own notes when present, else the English
	// page's sourceNotes, else a roll-up of per-section notes (same rule as the English template).
	const notes = $derived(
		p.sourceNotes ?? enBySlug(p.slug)?.sourceNotes ?? p.sections.filter((s) => s.note).map((s) => `${s.heading.replace(/[.!?]$/, "")}: ${s.note}`)
	);
	// Internal links point to this language's equivalent when it exists,
	// otherwise they keep their English target.
	const local = $derived((href: string) => resolve(langHref(lang, href) as '/'));
focusMainOnNavigate();
</script>

<svelte:head>
	<title>{p.title} · Opello studio (unlisted)</title>
	<!-- Description from the page's own lede; og tags make shared links render as a preview card. -->
	<meta name="description" content={p.lede} />
	<!-- Referrer policy: no-referrer, because the studio is unlisted and its URLs should not leak to external sites when someone clicks out. Re-check at launch with the STUDIO_ORIGIN repoint. -->
	<meta name="referrer-policy" content="no-referrer" />
	<meta property="og:title" content={p.title} />
	<meta property="og:description" content={p.lede} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`${STUDIO_ORIGIN}/studio/${lang}/${p.slug}/`} />
	<link rel="canonical" href={`${STUDIO_ORIGIN}/studio/${lang}/${p.slug}/`} />
	<!-- Atom feed autodiscovery: the insight articles feed (English edition; ar/tr twins exist for every article). -->
	<link rel="alternate" type="application/atom+xml" title="Opello insights" href={`${STUDIO_ORIGIN}/studio/feed.xml`} />
	<!-- Per-page preview card: scripts/og-cards.mjs generates one card per page at build time (page title and lede only). -->
	<meta property="og:image" content={`${STUDIO_ORIGIN}/studio/og/${lang}/${p.slug}.png`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={`Opello studio: ${p.title}`} />
	<meta property="og:site_name" content="Opello" />
	<meta property="og:locale" content={lang === 'ar' ? 'ar_AR' : 'tr_TR'} />
	<meta property="og:locale:alternate" content="en_GB" />
	<meta property="og:locale:alternate" content={lang === 'ar' ? 'tr_TR' : 'ar_AR'} />
	<!-- Twitter card so links shared on X render the same preview card. -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={p.title} />
	<meta name="twitter:description" content={p.lede} />
	<meta name="twitter:image" content={`${STUDIO_ORIGIN}/studio/og/${lang}/${p.slug}.png`} />
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
	<link rel="alternate" hreflang={lang} href={`${STUDIO_ORIGIN}/studio/${lang}/${p.slug}/`} />
	<link rel="alternate" hreflang="en" href={`${STUDIO_ORIGIN}/studio/${p.slug}/`} />
	<link rel="alternate" hreflang="x-default" href={`${STUDIO_ORIGIN}/studio/${p.slug}/`} />
	{#each (['ar', 'tr'] as const).filter((l) => l !== lang && hasTranslation(l, p.slug)) as l (l)}
		<link rel="alternate" hreflang={l} href={`${STUDIO_ORIGIN}/studio/${l}/${p.slug}/`} />
	{/each}
	{#if p.slug === 'faq'}
		<!-- FAQPage schema mirroring the visible Q&A cards only. -->
		{@html `<script type="application/ld+json">${JSON.stringify(faqJsonLd(p.sections, p.title, `${STUDIO_ORIGIN}/studio/${lang}/${p.slug}/`))}</script>`}
	{/if}
	{#if isArticle(p.slug)}
		<!-- Article schema for the insight articles: this language's own visible copy, no invented dates. -->
		{@html `<script type="application/ld+json">${JSON.stringify(articleJsonLd(p.title, p.lede, lang, `${STUDIO_ORIGIN}/studio/${lang}/${p.slug}/`))}</script>`}
	{/if}
		<!-- Breadcrumb schema from the visible hero chrome: brand, kicker, title. -->
		{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd(p.kicker, p.title, `${STUDIO_ORIGIN}/studio/${lang}/${p.slug}/`, parentBySlug[p.slug] ? (hasTranslation(lang, parentBySlug[p.slug]) ? `${STUDIO_ORIGIN}/studio/${lang}/${parentBySlug[p.slug]}/` : `${STUDIO_ORIGIN}/studio/${parentBySlug[p.slug]}/`) : null))}</script>`}
	</svelte:head>

<div class="studio" dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
	<a class="skip" href="#content">{t.skip}</a>
	<StudioNav {lang} />

	<main class="subpage" id="content" tabindex="-1">
		{#if p.hero?.variant === 'split'}
		<section class="hero hero-split">
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<div class="media">
				<img src={p.slug === 'blog' ? blogHero : p.slug === 'news' ? newsHero : p.slug === 'savings' ? savingsHero : p.slug === 'current-accounts' ? currentAccountsHero : split} srcset={p.slug === 'blog' ? `${blogHero} 1x, ${blogHero2x} 2x` : p.slug === 'news' ? `${newsHero} 1x, ${newsHero2x} 2x` : p.slug === 'savings' ? `${savingsHero} 1x, ${savingsHero2x} 2x` : p.slug === 'current-accounts' ? `${currentAccountsHero} 1x, ${currentAccountsHero2x} 2x` : `${split} 1x, ${split2x} 2x`} alt={p.hero.alt} width={p.slug === 'savings' ? 800 : 900} height={p.slug === 'savings' ? 800 : 600} decoding="async" fetchpriority="high" />
			</div>
			<div class="copy">
				<StudioCrumbs lang={lang} slug={p.slug} kicker={p.kicker} />
			<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
		</section>
		{:else if p.hero?.variant === 'ring-photo'}
		<section class="hero hero-ringphoto">
			<div class="ring" aria-hidden="true"><Ring /></div>
			<div class="copy">
				<StudioCrumbs lang={lang} slug={p.slug} kicker={p.kicker} />
			<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<div class="media">
				<img src={p.slug === 'help' ? helpHero : cardsHero} srcset={p.slug === 'help' ? `${helpHero} 1x, ${helpHero2x} 2x` : `${cardsHero} 1x, ${cardsHero2x} 2x`} alt={p.hero.alt} width="800" height="800" decoding="async" fetchpriority="high" />
			</div>
		</section>
		{:else if p.hero?.variant === 'photo-ring'}
		<section class="hero hero-ringphoto hero-photoring">
			<div class="ring" aria-hidden="true"><Ring /></div>
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<div class="media">
				<img src={p.slug === 'open-account' ? openAccountHero : cardsHero} srcset={p.slug === 'open-account' ? `${openAccountHero} 1x, ${openAccountHero2x} 2x` : `${cardsHero} 1x, ${cardsHero2x} 2x`} alt={p.hero.alt} width="800" height="800" decoding="async" fetchpriority="high" />
			</div>
			<div class="copy">
				<StudioCrumbs lang={lang} slug={p.slug} kicker={p.kicker} />
			<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
		</section>
		{:else if p.hero?.variant === 'band'}
		<section class="hero hero-band">
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<img class="band-photo" src={p.slug === 'about' ? aboutHero : cardsHero} srcset={p.slug === 'about' ? `${aboutHero} 1x, ${aboutHero2x} 2x` : `${cardsHero} 1x, ${cardsHero2x} 2x`} alt={p.hero.alt} width={p.slug === 'about' ? 900 : 800} height={p.slug === 'about' ? 600 : 800} decoding="async" fetchpriority="high" />
			<div class="band-scrim" aria-hidden="true"></div>
			<div class="copy">
				<StudioCrumbs lang={lang} slug={p.slug} kicker={p.kicker} />
			<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
		</section>
		{:else}
		<section class="hero">
			<div class="ring" aria-hidden="true"><Ring /></div>
			<div class="copy">
				<StudioCrumbs lang={lang} slug={p.slug} kicker={p.kicker} />
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
				<article class="card" class:wide={s.wide} class:half={s.half} class:big={s.big}>
					<h2>{s.heading}</h2>
					<EmailBody text={s.body} />
					{#if s.href}<a class="link" href={local(s.href)} aria-label={`${s.linkLabel ?? t.learnMore}: ${s.heading}`}>{s.linkLabel ?? t.learnMore}</a>{/if}
					{#if s.links}
						<ul class="links">
							{#each s.links as l (l.href)}
								<li><a href={local(l.href)}>{l.label}</a></li>
							{/each}
						</ul>
					{/if}
					{#if s.items}
						{#if s.countries}
							<!-- Country names bolded and the list split into columns so 109 rows scan
							     instead of reading as a wall of text; copy unchanged. -->
							<ul class="links items countries">
								{#each s.items as item (item)}
									{@const c = item.indexOf(': ')}
									<li><strong>{item.slice(0, c)}</strong>{item.slice(c)}</li>
								{/each}
							</ul>
						{:else}
							<ul class="links items">
								{#each s.items as item (item)}
									<li>{item}</li>
								{/each}
							</ul>
						{/if}
					{/if}
				</article>
			{/each}
		</section>

		<!-- Page-level sources and open points, matching the English template. Translated notes when
		     the twin carries them; otherwise the English page's notes (review markers, not customer copy). -->
		{#if notes.length}
			<section class="sources" aria-labelledby="sources-heading">
				<h2 id="sources-heading">{t.sourcesHeading}</h2>
				<ul>
					{#each notes as n (n)}
						<li>{n}</li>
					{/each}
				</ul>
			</section>
		{/if}

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
		/* lifted and shrunk so the lower edge clears the first card row (verified
		   overlapping the third card's heading at 1440; geometry now shared by
		   LTR and RTL pages, so the old RTL-only override is gone) */
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
	/* Baseline-phase parallax: same scroll-linked ring as the EN template
	   (rises a touch faster than the page and fades slightly; scroll-driven
	   CSS, no JS; static ring without animation-timeline; reduced-motion gets
	   the drift only). */
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
			padding: 8px 0;
			margin: -4px 0; /* keep the compact rhythm while the touch box stays tall */
			align-items: start;
		}
		/* two left over: they split the row */
		.sections.rem-2 .card:nth-last-child(-n + 2) {
			grid-column: span 3;
		}
		/* a card explicitly marked half: it takes half the row (used when a following
		   wide card needs the two above it to fill the row without dead space) */
		:global(.sections .card.half) {
			grid-column: span 3 !important;
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
			padding: 8px 0;
			margin: -4px 0; /* keep the compact rhythm while the touch box stays tall */
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
	   gentle hover lift. Slug-keyed so it matches the English template. */
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
	.sections.clay .card .links a:hover {
		opacity: 0.75;
	}
	.sections.clay .card .links a:focus-visible {
		outline-color: var(--deep);
	}
	/* Topic lists (help collections): the default clay-on-navy text would vanish on the
	   clay ground, so items go navy with a navy rule between rows. */
	.sections.clay .card .items li {
		color: var(--deep);
		opacity: 0.9;
		border-bottom-color: rgba(0, 20, 49, 0.14);
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
	/* Statement card (big flag): a full-width card that reads as a declaration, not a list
	   card — larger type so the row it rules does not read as under-filled. */
	.card.big {
		padding: 34px 30px;
	}
	.card.big h2 {
		font-size: 1.75rem;
		line-height: 1.2;
	}
	.card.big p {
		font-size: 1.1rem;
		max-width: 62ch;
	}
	.sections.clay .card.big h2 {
		font-size: 1.75rem;
	}
	.sections.clay .card.big p {
		font-size: 1.1rem;
	}
	@media (min-width: 900px) {
		.sections .card.big h2 {
			font-size: 2rem;
		}
		.sections.clay .card.big h2 {
			font-size: 2rem;
		}
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
		/* Tap target: the padding widens the touch box to 24px+ without moving the
		   text; the negative margin gives the space back to the layout. */
		padding: 9px 0;
		margin-top: 5px;
		margin-bottom: -9px;
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
	/* TIN country list (109 rows): bold the country name and split the list into
	   columns so it scans instead of reading as one wall of text. Copy unchanged. */
	.card ul.countries {
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		column-gap: 40px;
	}
	.card ul.countries li {
		break-inside: avoid;
	}
	.card ul.countries strong {
		font-weight: 600;
	}
	/* On the clay ground: names full navy, detail slightly muted so the country
	   column reads first. */
	.sections.clay .card ul.countries li {
		color: rgb(0 20 49 / 0.78);
	}
	.sections.clay .card ul.countries strong {
		color: var(--deep);
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
	/* Programmatic focus lands on <main> after client-side navigation; never a visible ring. */
	main:focus { outline: none; }
</style>
