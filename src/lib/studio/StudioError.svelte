<!--
  Opello studio error page. Previously an unstyled SvelteKit "Not Found" rendered
  for purged (out-of-MLP1-scope) URLs and mistyped paths; this gives those routes
  the brand chrome instead. Navy ground, hero ring motif, peach pill back to the
  homepage, clay text link to the sitemap. 404 wording is neutral: it does not
  say why a page is gone (purged routes are deliberate, not errors to explain).
  Ring drifts gently like every sub-page hero ring; disabled under reduced motion.
-->
<script lang="ts">
	import StudioNav from '#lib/studio/StudioNav.svelte';
	import StudioFooter from '#lib/studio/StudioFooter.svelte';
	import Ring from '#lib/components/Ring.svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { chrome, STUDIO_ORIGIN } from '#lib/studio/i18n';

	// Match the lang wrapper the URL already carries, so the nav chrome and the
	// document dir agree on translated routes.
	const lang = $derived((/^\/studio\/(ar|tr)(\/|$)/.exec(page.url.pathname)?.[1] ?? 'en') as 'en' | 'ar' | 'tr');
	const status = $derived(page.error?.status ?? 404);
	const notFound = $derived(status === 404);
	const t = $derived(chrome[lang].err);

	// The 404.html fallback boots the app outside the prerender hook, so the
	// document element never got its lang/dir from hooks.server.ts. Set the
	// document lang here (non-visual, paints fine). The visual RTL mirroring
	// lives on the wrapper div below: writing documentElement.dir='rtl' over an
	// LTR static shell forces a full relayout that froze paint in headless
	// captures; the [lang] pages don't hit this because their prerendered HTML
	// is already rtl before hydration.
	$effect(() => {
		// The static shell (build/404.html, scripts/404-title.mjs) ships a branded
		// no-JS body that the app replaces on boot — but the fresh client mount
		// appends alongside it rather than replacing it, so remove it once the
		// real page is here. Idempotent: no-op when the shell is absent.
		document.querySelector('.s404')?.remove();
		document.documentElement.lang = lang === 'en' ? 'en-GB' : lang;
		// The static shell prerenders with the English title (no pathname at build
		// time); keep the document title in step when a translated route 404s.
		document.title = (notFound ? t.notFoundKicker : t.serverKicker) + ' · '+chrome[lang].titleSuffix;
	});
</script>

<!--
  Head metadata to match every other studio page (the 2026-11-20 head sweeps
  covered the 153 sitemap pages but never this route, since a 404 is not in
  sitemap.xml): description, og + twitter preview tags, og:site_name/locale.
  No canonical or og:url: a 404 serves on any unmatched path, so naming one
  URL as the page's own would be wrong. English strings in the static shell
  (prerendered before the pathname is known); the runtime effect below keeps
  the title language-matched.
-->
<svelte:head>
	<title>{(notFound ? t.notFoundKicker : t.serverKicker) + ' · '+chrome[lang].titleSuffix}</title>
	<meta name="description" content={notFound ? t.nfLede : t.errLede} />
	<!-- Hiding meta: an error view is never a page to index, and the static shell only
	     covers it with a 404 status (no robots meta by design). Match the studio-wide
	     directive so a client-side error navigation in any shell stays hidden. -->
	<meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
	<!-- Referrer policy: no-referrer, matching every studio page (unlisted; URLs should not leak). -->
	<meta name="referrer-policy" content="no-referrer" />
	<meta name="color-scheme" content="light" />
	<!-- Theme colour: the static 404 shell carries it, but svelte:head must also list it so a client-side error navigation keeps it. -->
	<meta name="theme-color" content="#001431" />
	<meta property="og:site_name" content="Opello" />
	<meta property="og:title" content={(notFound ? t.notFoundKicker : t.serverKicker) + ' · '+chrome[lang].titleSuffix} />
	<meta property="og:description" content={notFound ? t.nfLede : t.errLede} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={`${STUDIO_ORIGIN}/assets/og.png`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Opello" />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:locale:alternate" content="ar_AE" />
	<meta property="og:locale:alternate" content="tr_TR" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={(notFound ? t.notFoundKicker : t.serverKicker) + ' · '+chrome[lang].titleSuffix} />
	<meta name="twitter:description" content={notFound ? t.nfLede : t.errLede} />
	<meta name="twitter:image" content={`${STUDIO_ORIGIN}/assets/og.png`} />
</svelte:head>

<div class="studio" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
	<a class="skip" href="#content">{chrome[lang].skip}</a>
	<StudioNav {lang} />

	<main class="error" id="content" tabindex="-1">
		<div class="ring" aria-hidden="true"><Ring /></div>
		<p class="kicker">{notFound ? t.notFoundKicker : t.serverKicker} · {status}</p>
		<h1>
			{notFound ? t.nfTitle : t.errTitle}
			<span class="accent">{notFound ? t.nfAccent : t.errAccent}</span>
		</h1>
		<p class="lede">{notFound ? t.nfLede : t.errLede}</p>
		<p class="actions">
			<a class="pill" href={resolve('/studio/' as '/')}>{t.cta}</a>
			<a class="quiet" href={resolve('/studio/sitemap/' as '/')}>{t.sitemap}</a>
		</p>
	</main>

	<StudioFooter {lang} />
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
	.studio {
		position: relative; /* containing block for the absolute skip link: without it the link's left:-9999px escapes the overflow clip and inflates the RTL scrollable area ~9999px (found 2026-11-23 cycle) */
		overflow-x: clip;
		min-height: 100svh;
		display: flex;
		flex-direction: column;
	}
	.error {
		position: relative;
		flex: 1;
		max-width: 1100px;
		width: 100%;
		margin: 0 auto;
		padding: clamp(24px, 4vw, 56px) clamp(20px, 4vw, 48px);
		display: flex;
		flex-direction: column;
		justify-content: end;
		min-height: min(52vh, 480px);
		color: var(--clay);
	}
	.ring {
		position: absolute;
		/* Sub-page geometry, nudged lower (top -40px) so the ring stays clear of
		   the nav capsule at 1440, which it crosses at the hero's -72px offset. */
		top: -40px;
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
		animation: ring-drift 30s ease-in-out infinite alternate;
	}
	@keyframes ring-drift {
		from {
			transform: rotate(-1deg) translateY(0);
		}
		to {
			transform: rotate(1deg) translateY(-7px);
		}
	}
	.kicker {
		margin: 0 0 14px;
		font-size: 13px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--muted);
	}
	h1 {
		margin: 0 0 18px;
		font-size: clamp(40px, 6vw, 64px);
		line-height: 1.04;
		font-weight: 500;
		letter-spacing: -0.01em;
	}
	.accent {
		color: var(--peach);
	}
	.lede {
		margin: 0 0 30px;
		max-width: 34em;
		font-size: 17px;
		line-height: 1.6;
		color: var(--clay);
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px 22px;
		margin: 0;
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
	/* Hover gated to real pointers; a touch tap must not leave the pill brightened. */
	@media (hover: hover) and (pointer: fine) {
		.pill:hover {
			filter: brightness(1.06);
		}
	}
	.pill:focus-visible {
		/* Deep outline: the peach CTA pill cannot carry a peach ring (1:1 on its own fill); the global peach
		   halo stays the visible band on the navy ground. */
		outline: 2px solid var(--deep);
		outline-offset: 3px;
	}
	.quiet {
		color: var(--clay);
		text-decoration: underline;
		text-underline-offset: 3px;
		font-size: 15px;
	}
	@media (hover: hover) and (pointer: fine) {
		.quiet:hover {
			color: var(--peach);
		}
	}
	.quiet:focus-visible {
		/* Deep outline: the peach quiet link cannot carry a peach ring (1:1 on its own fill). */
		outline: 2px solid var(--deep);
		outline-offset: 3px;
	}
	@media (prefers-reduced-motion: reduce) {
		.ring :global(svg) {
			animation: none;
		}
	}
	/* Programmatic focus lands on <main> after client-side navigation; never a visible ring. */
	main:focus { outline: none; }
</style>
