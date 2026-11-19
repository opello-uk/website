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
	import { chrome } from '#lib/studio/i18n';

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
		document.documentElement.lang = lang === 'en' ? 'en-GB' : lang;
	});
</script>

<div class="studio" lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
	<a class="skip" href="#content">Skip to content</a>
	<StudioNav {lang} />

	<main class="error" id="content">
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
	.pill:hover {
		filter: brightness(1.06);
	}
	.pill:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
	}
	.quiet {
		color: var(--clay);
		text-decoration: underline;
		text-underline-offset: 3px;
		font-size: 15px;
	}
	.quiet:hover {
		color: var(--peach);
	}
	.quiet:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
	}
	@media (prefers-reduced-motion: reduce) {
		.ring :global(svg) {
			animation: none;
		}
	}
</style>
