<script lang="ts">
	import { langHref, hasTranslation, type Lang } from '#lib/studio/i18n';
	import { parentBySlug } from '#lib/studio/breadcrumbLd';

	// Visible breadcrumb for sub-pages: the human-readable twin of the
	// BreadcrumbList JSON-LD. Shows only where the kicker names a group page
	// (parentBySlug), so top-level pages (Personal, Help, About, Blog...) keep
	// their plain kicker. Current page is the h1 below, so it is not repeated.
	let { lang = 'en', slug, kicker }: { lang?: 'en' | Lang; slug: string; kicker: string } = $props();
	const parent = $derived(parentBySlug[slug] ?? null);
	const homeLabel = $derived(lang === 'ar' ? 'الرئيسية' : lang === 'tr' ? 'Ana sayfa' : 'Home');
</script>

{#if parent}
	<nav class="crumbs" aria-label={lang === 'ar' ? 'مسار التنقل' : lang === 'tr' ? 'Sayfa yolu' : 'Breadcrumb'}>
		<a href={langHref(lang, '/studio/')}>{homeLabel}</a>
		<span class="sep" aria-hidden="true">›</span>
		<a href={lang === 'en' || hasTranslation(lang, parent) ? langHref(lang, `/studio/${parent}/`) : `/studio/${parent}/`}>{kicker}</a>
	</nav>
{/if}

<style>
	.crumbs {
		margin: 0 0 12px;
		font-size: 12px;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.crumbs a {
		color: var(--peach);
		text-decoration: none;
		border-bottom: 1px solid transparent;
		transition: border-color 160ms ease;
		/* WCAG 2.5.8: the visible text is ~15px tall, so pad the target box to
		   >=24px in each dimension (padding is inside the link, the text does
		   not move vertically). */
		padding: 6px 4px;
		margin: -6px -4px;
	}
	.crumbs a:focus-visible {
		border-bottom-color: currentColor;
	}
	/* Hover gated to real pointers; a touch tap must not leave the crumb underlined. */
	@media (hover: hover) and (pointer: fine) {
		.crumbs a:hover {
			border-bottom-color: currentColor;
		}
	}
	.sep {
		color: var(--muted);
	}
	@media (prefers-reduced-motion: reduce) {
		.crumbs a {
			transition: none;
		}
	}
</style>
