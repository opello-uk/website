<script lang="ts">
	import StudioNav from '#lib/studio/StudioNav.svelte';
import { focusMainOnNavigate } from '#lib/studio/focusOnNavigate';
	import StudioFooter from '#lib/studio/StudioFooter.svelte';
	import Ring from '#lib/components/Ring.svelte';
	import StudioCrumbs from '#lib/studio/StudioCrumbs.svelte';
	import EmailBody from '#lib/studio/EmailBody.svelte';
	import StudioCalc from '#lib/studio/StudioCalc.svelte';
	import { markLangs } from '#lib/studio/scriptLangs';
	import '#lib/studio/print.css';
	// Generated placeholder photo until licensed photography is supplied.
	import split from '#lib/assets/studio/split.jpg';
	import splitW from '#lib/assets/studio/split.webp';
	import split2x from '#lib/assets/studio/split@2x.jpg';
	import split2xW from '#lib/assets/studio/split@2x.webp';

	import cardsHero from '#lib/assets/studio/cards-hero.jpg';
	import cardsHeroW from '#lib/assets/studio/cards-hero.webp';
	import cardsHero2x from '#lib/assets/studio/cards-hero@2x.jpg';
	import cardsHero2xW from '#lib/assets/studio/cards-hero@2x.webp';

	// Savings split hero: generated placeholder until licensed photography is supplied.
	import savingsHero from '#lib/assets/studio/savings-hero.jpg';
	import savingsHeroW from '#lib/assets/studio/savings-hero.webp';
	import savingsHero2x from '#lib/assets/studio/savings-hero@2x.jpg';
	import savingsHero2xW from '#lib/assets/studio/savings-hero@2x.webp';

	// Current accounts split hero: generated placeholder until licensed photography is supplied.
	import currentAccountsHero from '#lib/assets/studio/current-accounts-hero.jpg';
	import currentAccountsHeroW from '#lib/assets/studio/current-accounts-hero.webp';
	import currentAccountsHero2x from '#lib/assets/studio/current-accounts-hero@2x.jpg';
	import currentAccountsHero2xW from '#lib/assets/studio/current-accounts-hero@2x.webp';

	// Help ring-photo hero: generated placeholder until licensed photography is supplied.
	import helpHero from '#lib/assets/studio/help-hero.jpg';
	import helpHeroW from '#lib/assets/studio/help-hero.webp';
	import helpHero2x from '#lib/assets/studio/help-hero@2x.jpg';
	import helpHero2xW from '#lib/assets/studio/help-hero@2x.webp';

	// Open account photo-ring hero: generated placeholder until licensed photography is supplied.
	import openAccountHero from '#lib/assets/studio/open-account-hero.jpg';
	import openAccountHeroW from '#lib/assets/studio/open-account-hero.webp';
	import openAccountHero2x from '#lib/assets/studio/open-account-hero@2x.jpg';
	import openAccountHero2xW from '#lib/assets/studio/open-account-hero@2x.webp';

	// About band hero: generated placeholder until licensed photography is supplied.
	import aboutHero from '#lib/assets/studio/about-hero.jpg';
	import aboutHeroW from '#lib/assets/studio/about-hero.webp';
	import aboutHero2x from '#lib/assets/studio/about-hero@2x.jpg';
	import aboutHero2xW from '#lib/assets/studio/about-hero@2x.webp';

	// News split hero: generated placeholder until licensed photography is supplied.
	import newsHero from '#lib/assets/studio/news-hero.jpg';
	import newsHeroW from '#lib/assets/studio/news-hero.webp';
	import newsHero2x from '#lib/assets/studio/news-hero@2x.jpg';
	import newsHero2xW from '#lib/assets/studio/news-hero@2x.webp';

	// Blog split hero: generated placeholder until licensed photography is supplied.
	import blogHero from '#lib/assets/studio/blog-hero.jpg';
	import blogHeroW from '#lib/assets/studio/blog-hero.webp';
	import blogHero2x from '#lib/assets/studio/blog-hero@2x.jpg';
	import blogHero2xW from '#lib/assets/studio/blog-hero@2x.webp';

	import { resolve } from '$app/paths';
	import { hasTranslation, langName, STUDIO_ORIGIN, type Lang } from '#lib/studio/i18n';
	import { faqJsonLd, qaPageSlugs, questionSections } from '#lib/studio/faqLd';
	import { articleJsonLd, isArticle } from '#lib/studio/articleLd';
	import { breadcrumbJsonLd, parentBySlug } from '#lib/studio/breadcrumbLd';
	import { siteJsonLd } from '#lib/studio/siteLd';
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
		const m = /\/studio\/([a-z0-9-]+)\//.exec(href);
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
	// Keep the document element in sync after client-side navigation (the translated
	// [lang]/[slug] page does the same for its languages; without this, arriving from
	// an Arabic page leaves lang=ar/dir=rtl on English content).
	$effect(() => {
		document.documentElement.lang = 'en-GB';
		document.documentElement.dir = 'ltr';
	});
focusMainOnNavigate();
</script>

<svelte:head>
	<title>{p.metaTitle ?? p.title} · Opello studio (unlisted)</title>
	<!-- Description from the page's own lede; og tags make shared links render as a preview card. -->
	<meta name="description" content={p.metaDescription ?? p.lede} />
	<!-- Referrer policy: no-referrer, because the studio is unlisted and its URLs should not leak to external sites when someone clicks out. Re-check at launch with the STUDIO_ORIGIN repoint. -->
	<meta name="referrer-policy" content="no-referrer" />
	<meta name="color-scheme" content="light" />
	<meta property="og:title" content={p.title} />
	<meta property="og:description" content={p.metaDescription ?? p.lede} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={altHref('en')} />
	<link rel="canonical" href={altHref('en')} />
	<!-- Atom feed autodiscovery: the insight articles feed (English edition; ar/tr twins exist for every article). -->
	<link rel="alternate" type="application/atom+xml" title="Opello insights" href={`${STUDIO_ORIGIN}/studio/feed.xml`} />
	<!-- Per-page preview card: scripts/og-cards.mjs generates one card per page at build time (page title and lede only). -->
	<meta property="og:image" content={`${STUDIO_ORIGIN}/studio/og/${p.slug}.png`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={`Opello studio: ${p.title}`} />
	<meta property="og:site_name" content="Opello" />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:locale:alternate" content="ar_AE" />
	<meta property="og:locale:alternate" content="tr_TR" />
	<!-- Twitter card so links shared on X render the same preview card. -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={p.title} />
	<meta name="twitter:description" content={p.metaDescription ?? p.lede} />
	<meta name="twitter:image" content={`${STUDIO_ORIGIN}/studio/og/${p.slug}.png`} />
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
	{#each alts as l (l)}
		<link rel="alternate" hreflang={l} href={altHref(l)} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={altHref('en')} />
	{#if p.slug === 'faq'}
		<!-- FAQPage schema mirroring the visible Q&A cards only. -->
		{@html `<script type="application/ld+json">${JSON.stringify(faqJsonLd(p.sections, p.title, altHref('en')))}</script>`}
	{:else if qaPageSlugs.has(p.slug) && questionSections(p.sections).length > 0}
		<!-- FAQPage schema on the help Q&A pages: only sections phrased as visible questions,
		     so sub-cards and topic cards (e.g. "Check your email address") are not emitted as Questions. -->
		{@html `<script type="application/ld+json">${JSON.stringify(faqJsonLd(questionSections(p.sections), p.title, altHref('en')))}</script>`}
	{/if}
	{#if isArticle(p.slug)}
		<!-- Article schema for the insight articles: visible copy only, no invented dates. -->
		{@html `<script type="application/ld+json">${JSON.stringify(articleJsonLd(p.title, p.lede, 'en', altHref('en')))}</script>`}
	{/if}
	<!-- Site-entity schema (Organization + WebSite) so agents landing on any sub-page pick up the site entity, matching the homepage graph. -->
		{@html `<script type="application/ld+json">${JSON.stringify(siteJsonLd('en'))}</script>`}
		<!-- Breadcrumb schema from the visible hero chrome: brand, kicker, title. -->
		{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd(p.kicker, p.title, altHref('en'), parentBySlug[p.slug] ? `${STUDIO_ORIGIN}/studio/${parentBySlug[p.slug]}/` : null))}</script>`}
	</svelte:head>

<div class="studio">
	<a class="skip" href="#content">Skip to content</a>
	<StudioNav />

	<main class="subpage" id="content" tabindex="-1">
		{#if p.hero?.variant === 'split'}
		<section class="hero hero-split">
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<div class="media">
				<picture><source type="image/webp" srcset="{p.slug === 'blog' ? `${blogHeroW} 1x, ${blogHero2xW} 2x` : p.slug === 'news' ? `${newsHeroW} 1x, ${newsHero2xW} 2x` : p.slug === 'savings' ? `${savingsHeroW} 1x, ${savingsHero2xW} 2x` : p.slug === 'current-accounts' ? `${currentAccountsHeroW} 1x, ${currentAccountsHero2xW} 2x` : `${splitW} 1x, ${split2xW} 2x`}" /><img src={p.slug === 'blog' ? blogHero : p.slug === 'news' ? newsHero : p.slug === 'savings' ? savingsHero : p.slug === 'current-accounts' ? currentAccountsHero : split} srcset={p.slug === 'blog' ? `${blogHero} 1x, ${blogHero2x} 2x` : p.slug === 'news' ? `${newsHero} 1x, ${newsHero2x} 2x` : p.slug === 'savings' ? `${savingsHero} 1x, ${savingsHero2x} 2x` : p.slug === 'current-accounts' ? `${currentAccountsHero} 1x, ${currentAccountsHero2x} 2x` : `${split} 1x, ${split2x} 2x`} alt={p.hero.alt} width={p.slug === 'savings' ? 800 : 900} height={p.slug === 'savings' ? 800 : 600} decoding="async" fetchpriority="high" /></picture>
			</div>
			<div class="copy">
				<StudioCrumbs slug={p.slug} kicker={p.kicker} />
			<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
		</section>
		{:else if p.hero?.variant === 'ring-photo'}
		<section class="hero hero-ringphoto">
			<div class="ring" aria-hidden="true"><Ring /></div>
			<div class="copy">
				<StudioCrumbs slug={p.slug} kicker={p.kicker} />
			<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<div class="media">
				<picture><source type="image/webp" srcset="{p.slug === 'help' ? `${helpHeroW} 1x, ${helpHero2xW} 2x` : `${cardsHeroW} 1x, ${cardsHero2xW} 2x`}" /><img src={p.slug === 'help' ? helpHero : cardsHero} srcset={p.slug === 'help' ? `${helpHero} 1x, ${helpHero2x} 2x` : `${cardsHero} 1x, ${cardsHero2x} 2x`} alt={p.hero.alt} width="800" height="800" decoding="async" fetchpriority="high" /></picture>
			</div>
		</section>
		{:else if p.hero?.variant === 'photo-ring'}
		<section class="hero hero-ringphoto hero-photoring">
			<div class="ring" aria-hidden="true"><Ring /></div>
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<div class="media">
				<picture><source type="image/webp" srcset="{p.slug === 'open-account' ? `${openAccountHeroW} 1x, ${openAccountHero2xW} 2x` : `${cardsHeroW} 1x, ${cardsHero2xW} 2x`}" /><img src={p.slug === 'open-account' ? openAccountHero : cardsHero} srcset={p.slug === 'open-account' ? `${openAccountHero} 1x, ${openAccountHero2x} 2x` : `${cardsHero} 1x, ${cardsHero2x} 2x`} alt={p.hero.alt} width="800" height="800" decoding="async" fetchpriority="high" /></picture>
			</div>
			<div class="copy">
				<StudioCrumbs slug={p.slug} kicker={p.kicker} />
			<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
		</section>
		{:else if p.hero?.variant === 'band'}
		<section class="hero hero-band">
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<picture><source type="image/webp" srcset="{p.slug === 'about' ? `${aboutHeroW} 1x, ${aboutHero2xW} 2x` : `${cardsHeroW} 1x, ${cardsHero2xW} 2x`}" /><img class="band-photo" src={p.slug === 'about' ? aboutHero : cardsHero} srcset={p.slug === 'about' ? `${aboutHero} 1x, ${aboutHero2x} 2x` : `${cardsHero} 1x, ${cardsHero2x} 2x`} alt={p.hero.alt} width={p.slug === 'about' ? 1100 : 800} height={p.slug === 'about' ? 733 : 800} decoding="async" fetchpriority="high" /></picture>
			<div class="band-scrim" aria-hidden="true"></div>
			<div class="copy">
				<StudioCrumbs slug={p.slug} kicker={p.kicker} />
			<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
		</section>
		{:else}
		<section class="hero">
			<div class="ring" aria-hidden="true"><Ring /></div>
			<div class="copy">
				<StudioCrumbs slug={p.slug} kicker={p.kicker} />
			<p class="kicker">{p.kicker}</p>
				<h1>{p.title}</h1>
				<p class="lede">{p.lede}</p>
			</div>
		</section>
		{/if}

		{#if p.slug === 'fees-and-charges'}
			<!-- Deck slide 6 principle 3: cost calculator on the fees page (GBP only, MLP1). -->
			<StudioCalc lang="en" />
		{/if}

		<!-- Clay card language is now the studio-wide default (baseline-05): every sub-page's cards
		     match the landing page. Per-slug opt-out is back to the earlier conditional list if a
		     page ever needs the navy ground again. -->
		<section class="sections clay rem-{p.sections.length % 3}">
			{#each p.sections as s (s.heading)}
				<article class="card" class:wide={s.wide} class:half={s.half} class:big={s.big}>
					<h2>{s.heading}</h2>
					<p><EmailBody text={s.body} lang="en" /></p>
					{#if s.href}<a class="link" href={resolve(s.href as '/')} aria-label={`${s.linkLabel ?? 'Learn more'}: ${s.heading}`}>{s.linkLabel ?? 'Learn more'}</a>{/if}
					{#if s.items}
						{#if s.countries}
							<!-- Country names bolded and the list split into columns so 109 rows scan
							     instead of reading as a wall of text; copy unchanged. -->
							<ul class="links items countries">
								{#each s.items as item (item)}
									{@const c = item.indexOf(': ')}
									<li><strong>{@html markLangs(item.slice(0, c))}</strong>{@html markLangs(item.slice(c))}</li>
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
					{#if s.links}
						<ul class="links">
							{#each s.links as l (l.href)}
								<li><a href={resolve(l.href as '/')}>{l.label}</a>{#if p.slug === 'sitemap'}{#each langVariants(l.href) as v (v.href)} <a class="langlink" href={resolve(v.href as '/')} lang={v.label === 'Türkçe' ? 'tr' : 'ar'} aria-label={`${l.label} (${v.label})`}>{v.label}</a>{/each}{/if}</li>
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
		color: var(--peach);
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
		/* Full-bleed (Vinay, 2026-11-26): the IAM pages don't cap the page in a 1100px
		   column; heroes and section bands run the full viewport width and only the
		   copy inside them keeps a reading measure. */
		max-width: none;
		padding: 0 0 80px;
		color: var(--clay);
	}
	/* The sections grid keeps a centered measure so cards don't stretch edge-to-edge. */
	.sections {
		max-width: 1200px;
		margin: 0 auto;
		padding-left: clamp(20px, 4vw, 48px);
		padding-right: clamp(20px, 4vw, 48px);
	}
	/* The page hero spans full-bleed. Side padding lives here: the page container is
	   full-bleed (2026-11-26), so without this the hero copy sat flush on the window
	   edge (Vinay screenshot). */
	.hero {
		max-width: none;
		position: relative;
		min-height: min(36vh, 340px);
		display: grid;
		align-items: end;
		padding: clamp(16px, 3vh, 32px) clamp(20px, 4vw, 48px) clamp(24px, 4vh, 40px);
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
		/* Long non-Latin words (e.g. Turkish "Yükümlülüğü'nü") can exceed the line
		   at 320px; breaking them keeps the title inside the overflow clip. No
		   effect at desktop widths, where no word exceeds its line. */
		overflow-wrap: anywhere;
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
		/* long-measure guard: a full-width card spans the whole row, but its body copy and the
	   page-level source notes keep a readable line length (45-75ch) instead of ~95-char lines */
		.sections.rem-1 .card:last-child p,
		.sections .card.wide p,
		.sources li {
			max-width: 72ch;
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
	   gentle hover lift. Slug-keyed so the Arabic and Turkish twins match automatically. */
	.sections.clay {
		/* Clay band: the landing's warm ground carries into inner pages (IAM hallmark),
		   so inner pages don't read as one flat navy sheet with text on it. */
		background: var(--clay);
		border-radius: 28px;
		padding-top: clamp(40px, 5vw, 64px);
		padding-bottom: clamp(40px, 5vw, 64px);
		margin-top: clamp(32px, 4vw, 56px);
	}
	.sections.clay .card {
		background: #ffffff;
		border-color: #ffffff;
		border-radius: 24px;
		transition: transform 220ms var(--ease), box-shadow 220ms var(--ease);
		box-shadow: 0 6px 18px rgba(0, 20, 49, 0.08);
	}
	/* Hover gated to real pointers; a touch tap must not leave a card lifted. */
	@media (hover: hover) and (pointer: fine) {
		.sections.clay .card:hover {
			transform: translateY(-3px);
			box-shadow: 0 14px 30px rgba(0, 20, 49, 0.35);
		}
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
		/* IAM button language: white-fill pill with navy text, not an underlined text link. */
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background: #ffffff;
		color: var(--deep);
		border: 1px solid rgb(0 20 49 / 0.15);
		border-radius: 999px;
		padding: 9px 18px;
		font-weight: 600;
		font-size: 13px;
		text-decoration: none;
		transition: transform 200ms var(--ease), box-shadow 200ms var(--ease);
	}
	@media (hover: hover) and (pointer: fine) {
		.sections.clay .card .link:hover {
			transform: translateY(-1px);
			box-shadow: 0 8px 20px rgba(0, 20, 49, 0.18);
		}
	}
	@media (hover: hover) and (pointer: fine) {
		.sections.clay .card .link:hover {
			opacity: 0.75;
		}
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
	@media (hover: hover) and (pointer: fine) {
		.sections.clay .card .links a:hover {
			opacity: 0.75;
		}
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
		/* Source notes cite bare URLs; overflow-wrap lets a long one wrap at 320
		   instead of poking past the viewport edge under the overflow clip. */
		overflow-wrap: anywhere;
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
	@media (hover: hover) and (pointer: fine) {
		.card .link:hover {
			text-decoration: underline;
		}
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
	   columns so it scans instead of reading as one wall of text. Copy unchanged.
	   min(300px, 100%) keeps the scan at desktop width and lets the column floor
	   collapse to the card's inner width below 300px so rows never clip at 320
	   (WCAG 1.4.10 reflow; the div.studio overflow clip is not scrollable). */
	.card ul.countries {
		grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
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
	@media (hover: hover) and (pointer: fine) {
		.card .links a:hover {
			color: var(--clay);
		}
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
	@media (hover: hover) and (pointer: fine) {
		.card .langlink:hover {
			color: var(--peach);
		}
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
	@media (hover: hover) and (pointer: fine) {
		.pill:hover {
			filter: brightness(1.06);
		}
	}
	.pill:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
	}
	/* Programmatic focus lands on <main> after client-side navigation; never a visible ring. */
	main:focus { outline: none; }
</style>
