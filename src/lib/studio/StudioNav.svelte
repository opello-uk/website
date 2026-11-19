<script lang="ts">
	import Wordmark from '#lib/components/Wordmark.svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { chrome, hasTranslation, langHref, type Lang } from '#lib/studio/i18n';

	let { lang = 'en' }: { lang?: 'en' | Lang } = $props();
	const t = $derived(chrome[lang]);

	// The language is live for this page only when its translation exists, so
	// the dropdown never links to a page that is not built.
	const currentSlug = $derived(page.url.pathname.replace(/^\/studio(?:\/[a-z]{2})?\//, '').replace(/\/$/, ''));
	const languages = [
		{ id: 'en' as const, label: 'English' },
		{ id: 'ar' as const, label: 'العربية' },
		{ id: 'tr' as const, label: 'Türkçe' }
	];

	let open = $state(false);
	let menu: HTMLElement | undefined = $state();
	let regionButton: HTMLButtonElement | undefined = $state();

	function close() {
		open = false;
		regionButton?.focus();
	}

	// Close on Escape (and return focus) and on a click outside the menu.
	function onWindowKeydown(e: KeyboardEvent) {
		if (open && e.key === 'Escape') close();
	}
	function onWindowPointerdown(e: PointerEvent) {
		if (open && menu && !menu.contains(e.target as Node) && !regionButton?.contains(e.target as Node)) open = false;
	}

	function href(langId: string) {
		// Same language keeps your page. Another language lands on that language's
		// version of the current page; English strips the language prefix.
		if (langId === lang) return page.url.pathname;
		if (langId === 'en') return page.url.pathname.replace(/^(\/studio)\/[a-z]{2}/, '$1') || '/studio/';
		if (hasTranslation(langId as Lang, currentSlug)) return `/studio/${langId}/${currentSlug}/`;
		return page.url.pathname.replace(/^(\/studio)\/[a-z]{2}/, '$1') || '/studio/';
	}

	// Customer-type tabs; Personal is the active section for this build.
	// Out of MLP1 scope: Business and Premium tabs (Vinay, 2026-11-18). Restored code kept in git history.
	const tabs = [
		{ id: 'personal', label: 'Personal', href: '/studio/personal/' }
	];
	// The Personal tab is the active section for this build.
	const active = 'personal';
</script>

<svelte:window onkeydown={onWindowKeydown} onpointerdown={onWindowPointerdown} />

<header class="nav">
	<a class="brand" href={resolve('/studio/')} aria-label={t.brandAria}>
		<Wordmark />
	</a>

	<nav class="tabs" aria-label="Customer type">
		{#each tabs as tab (tab.id)}
			<a class="tab" href={resolve(langHref(lang, tab.href) as '/')} aria-current={tab.id === active ? 'page' : undefined}>{t.tabsPersonal}</a>
		{/each}
	</nav>

	<div class="tools">
		<!-- Language picker: the deck's flag opens the language dropdown. -->
		<div class="lang">
			<button
				type="button"
				class="region"
				bind:this={regionButton}
				aria-label={t.langLabel}
				aria-haspopup="menu"
				aria-expanded={open}
				onclick={() => (open = !open)}
			>
				<svg class="flag" viewBox="0 0 60 30" width="22" height="11" aria-hidden="true" focusable="false">
					<rect width="60" height="30" fill="#012169" />
					<path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" stroke-width="6" />
					<path d="M0 0 L60 30 M60 0 L0 30" stroke="#c8102e" stroke-width="2" />
					<path d="M30 0 V30 M0 15 H60" stroke="#fff" stroke-width="10" />
					<path d="M30 0 V30 M0 15 H60" stroke="#c8102e" stroke-width="6" />
				</svg>
			</button>
			{#if open}
				<div class="menu" bind:this={menu} role="menu" aria-label={t.menuLabel}>
					{#each languages as langItem (langItem.id)}
						{@const live = langItem.id === 'en' || hasTranslation(langItem.id, currentSlug)}
						{@const current = langItem.id === lang}
						{#if live}
							<a role="menuitem" class="item" href={href(langItem.id)} lang={langItem.id} onclick={close}>
								<span class="name">{langItem.label}</span>
								{#if current}<span class="tag current">{t.current}</span>{/if}
							</a>
						{:else}
							<span class="item soon" role="menuitem" aria-disabled="true" lang={langItem.id}>
								<span class="name">{langItem.label}</span>
								<span class="tag">{t.soon}</span>
							</span>
						{/if}
					{/each}
				</div>
			{/if}
		</div>

		<!-- Search: the deck shows a search control here. -->
		<button type="button" class="icon" aria-label="Search">
			<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
				<circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2" />
				<path d="M16 16l4.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		</button>

		<!-- One split capsule as in baseline-07: peach half (open account) joined to the white half (log in). -->
		<div class="pills">
			<a class="pill pill-peach" href={resolve(langHref(lang, '/studio/open-account/') as '/')}>{t.ctaAccount}</a>
			<a class="pill pill-white" href={resolve(langHref(lang, '/studio/login/') as '/')}>{t.login}</a>
		</div>
	</div>
</header>

<style>
	.nav {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: clamp(16px, 3vw, 40px);
		padding: 18px clamp(20px, 4vw, 56px);
		color: var(--clay);
	}
	.brand {
		display: block;
		width: clamp(96px, 9vw, 128px);
	}
	.brand:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 4px;
		border-radius: 4px;
	}

	.tabs {
		display: flex;
		justify-content: center;
		gap: 6px;
	}
	.tab {
		border: 0;
		background: transparent;
		font: inherit;
		cursor: pointer;
		padding: 8px 16px;
		border-radius: 999px;
		font-size: 11px;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--muted);
		text-decoration: none;
		transition: color 200ms var(--ease), background-color 200ms var(--ease);
	}
	.tab:hover {
		color: var(--clay);
	}
	.tab:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 2px;
	}
	.tab[aria-current='page'] {
		background: var(--clay);
		color: var(--deep);
	}

	.tools {
		display: flex;
		align-items: center;
		gap: 14px;
	}
	.lang {
		position: relative;
	}
	.menu {
		position: absolute;
		top: calc(100% + 8px);
		right: 0;
		z-index: 30;
		min-width: 176px;
		padding: 6px;
		border-radius: 14px;
		background: var(--deep);
		border: 1px solid var(--rule);
		box-shadow: 0 12px 32px rgba(0, 10, 30, 0.35);
		display: grid;
		gap: 2px;
	}
	.item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		padding: 10px 12px;
		border-radius: 10px;
		font-size: 13px;
		color: var(--clay);
		text-decoration: none;
		transition: background-color 200ms var(--ease);
	}
	.item:hover {
		background: var(--rule);
	}
	.item:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 1px;
	}
	.name {
		font-weight: 500;
	}
	.tag {
		font-size: 10px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--muted);
	}
	.tag.current {
		color: var(--peach);
	}
	.item.soon {
		cursor: default;
		opacity: 0.65;
	}
	@media (prefers-reduced-motion: reduce) {
		.item {
			transition: none;
		}
	}

	.region,
	.icon {
		display: inline-grid;
		place-items: center;
		min-height: 44px;
		min-width: 44px;
		padding: 0 8px;
		border: 0;
		border-radius: 999px;
		background: transparent;
		color: var(--clay);
		font: inherit;
		font-size: 12px;
		letter-spacing: 0.08em;
		cursor: pointer;
	}
	.region:hover,
	.icon:hover {
		background: var(--rule);
	}
	.region:focus-visible,
	.icon:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 2px;
	}

	.pills {
		display: flex;
		gap: 0;
		transition: transform 200ms var(--ease);
	}
	/* Lift the whole capsule together so the join never splits on hover. */
	.pills:hover {
		transform: translateY(-1px);
	}
	.pill {
		border: 0;
		font: inherit;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		min-height: 40px;
		padding: 0 18px;
		border-radius: 999px;
		font-size: 11px;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		line-height: 1.25;
		text-align: center;
		white-space: normal;
		text-decoration: none;
		white-space: nowrap;
		transition: transform 200ms var(--ease), background-color 200ms var(--ease);
	}
	.pill:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
	}
	.pill-peach {
		background: var(--peach);
		color: var(--deep);
		/* First half of the split capsule: rounded on the leading edge only (logical, so RTL mirrors). */
		border-start-start-radius: 999px;
		border-end-start-radius: 999px;
		padding-right: 14px;
	}
	.pill-white {
		background: var(--clay);
		color: var(--deep);
		/* Second half of the split capsule: rounded on the trailing edge only. */
		border-start-end-radius: 999px;
		border-end-end-radius: 999px;
		padding-left: 14px;
	}

	@media (max-width: 960px) {
		.nav {
			grid-template-columns: 1fr auto;
		}
		.tabs {
			grid-column: 1 / -1;
			grid-row: 2;
			justify-content: flex-start;
			overflow-x: auto;
			scrollbar-width: none;
		}
		/* The scrolling tab row is keyboard-focusable on phones; give it a ring so the stop is visible. */
		.tabs:focus-visible {
			outline: 2px solid var(--peach);
			outline-offset: 2px;
			border-radius: 4px;
		}
		.tab {
			min-height: 44px;
			display: inline-flex;
			align-items: center;
		}
	}

	@media (max-width: 560px) {
		/* Mobile: anchor the language menu to the button's left edge so it cannot clip off-screen. */
		.menu {
			left: 0;
			right: auto;
		}
		/* Mobile: keep the region flag, search and both pills, as in the 390 Figma header.
		   Tighter column gap and logo so the Login pill sits inside 390px. */
		.nav {
			gap: 10px;
		}
		.brand {
			width: 84px;
		}
		.tools {
			gap: 4px;
		}
		.region,
		.icon {
			min-height: 44px;
			min-width: 44px;
			padding: 0 4px;
		}
		.pills {
			gap: 0; /* joined capsule, as on desktop */
		}
		.pill {
			min-height: 44px;
			padding: 6px 8px;
			font-size: 10px;
			letter-spacing: 0.04em;
			line-height: 1.15;
			white-space: normal;
			max-width: 88px;
		}
		.pill-white {
			padding: 6px 8px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.pills {
			transition: none;
		}
		.tab,
		.pill {
			transition: none;
		}
	}
</style>
