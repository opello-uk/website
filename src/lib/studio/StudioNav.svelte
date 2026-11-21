<script lang="ts">
	import Wordmark from '#lib/components/Wordmark.svelte';
	import { tick } from 'svelte';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { chrome, hasTranslation, langHref, type Lang } from '#lib/studio/i18n';
	import type { StudioPage } from '#lib/studio/pages';

	let { lang = 'en' }: { lang?: 'en' | Lang } = $props();
	const t = $derived(chrome[lang]);

	// The language is live for this page only when its translation exists, so
	// the dropdown never links to a page that is not built.
	const currentSlug = $derived(page.url.pathname.replace(/^\/studio(?:\/[a-z]{2})?\//, '').replace(/\/$/, ''));
	// The homepage (empty slug) has Arabic and Turkish twins at /studio/{lang}/,
	// so the dropdown treats it as live like any translated page.
	const isHome = $derived(currentSlug === '');
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

	// Arrow-key navigation inside the language menu (APG menu pattern): the
	// role="menu" markup promises arrows, so Up/Down/Home/End move focus through
	// the live language links (the disabled "coming soon" items are skipped).
	function menuKeydown(e: KeyboardEvent) {
		const items = Array.from(menu?.querySelectorAll<HTMLAnchorElement>('a[role="menuitem"]') ?? []);
		if (!items.length) return;
		const idx = items.indexOf(document.activeElement as HTMLAnchorElement);
		let next = -1;
		if (e.key === 'ArrowDown') next = idx < 0 ? 0 : (idx + 1) % items.length;
		else if (e.key === 'ArrowUp') next = idx < 0 ? items.length - 1 : (idx - 1 + items.length) % items.length;
		else if (e.key === 'Home') next = 0;
		else if (e.key === 'End') next = items.length - 1;
		if (next >= 0) {
			e.preventDefault();
			items[next].focus();
		}
	}
	// ArrowDown on the closed flag button opens the menu straight onto the first
	// item (keyboard equivalent of the click-open path, which keeps focus on the
	// button so Tab still enters the menu in DOM order).
	async function regionKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowDown' && !open) {
			e.preventDefault();
			open = true;
			await tick();
			menu?.querySelector<HTMLAnchorElement>('a[role="menuitem"]')?.focus();
		}
	}

	// Close on Escape (and return focus) and on a click outside the menu.
	function onWindowKeydown(e: KeyboardEvent) {
		if (open && e.key === 'Escape') close();
		if (searchOpen && e.key === 'Escape') closeSearch();
	}
	function onWindowPointerdown(e: PointerEvent) {
		if (open && menu && !menu.contains(e.target as Node) && !regionButton?.contains(e.target as Node)) open = false;
		if (searchOpen && searchPanel && !searchPanel.contains(e.target as Node) && !searchButton?.contains(e.target as Node)) closeSearch();
	}

	type SearchEntry = { title: string; kicker: string; lede: string; blob: string; href: string };
	const searchResults = $derived.by(() => {
		if (!searchIndexLoaded) return [];
		const q = query.trim().toLowerCase();
		if (q === '') return searchIndex.slice(0, 8);
		return searchIndex.filter((p) => p.blob.includes(q)).slice(0, 8);
	});

	let searchButton = $state<HTMLButtonElement>();
	let searchPanel = $state<HTMLElement>();
	let searchInput = $state<HTMLInputElement>();
	let searchOpen = $state(false);
	let query = $state('');

	// Search: the deck shows a search control in the header, so the button opens
	// a real page search instead of being a dead control. The index is this
	// language's page list (en reads pages.ts; ar/tr read pagesByLang), and every
	// result links through langHref so it lands on the language twin.
	// The index loads lazily on first open: the page lists carry every page's
	// content (all three languages), so a static import would pull hundreds of KB
	// into every page bundle for a control most visits never open.
	let searchIndex: SearchEntry[] = $state([]);
	let searchIndexLoaded = $state(false);
	async function loadSearchIndex() {
		if (searchIndexLoaded) return;
		const mod = lang === 'en'
			? await import('#lib/studio/pages')
			: await import('#lib/studio/pages-translated');
		const src: StudioPage[] = lang === 'en' ? mod.pages : mod.pagesByLang[lang];
		const entries: SearchEntry[] = src.map((p) => ({
			title: p.title,
			kicker: p.kicker,
			lede: p.lede,
			blob: (p.title + ' ' + p.kicker + ' ' + p.lede + ' ' + p.sections.map((s: { heading: string }) => s.heading).join(' ')).toLowerCase(),
			href: langHref(lang, `/studio/${p.slug}/`)
		}));
		// The homepage twin (Home / الرئيسية / Ana sayfa) sits at the top, like the sitemap order.
		entries.unshift({
			title: t.searchHome,
			kicker: 'Opello',
			lede: '',
			blob: (t.searchHome + ' opello').toLowerCase(),
			href: lang === 'en' ? '/studio/' : `/studio/${lang}/`
		});
		searchIndex = entries;
		searchIndexLoaded = true;
	}

	function openSearch() {
		open = false;
		query = '';
		void loadSearchIndex();
		searchOpen = true;
	}
	function closeSearch() {
		searchOpen = false;
		searchButton?.focus();
	}
	// ArrowDown in the field hands focus to the first result link, so the results
	// are reachable without leaving the keyboard flow; Escape still closes and
		// returns focus to the button.
	function searchKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowDown') {
			const first = searchPanel?.querySelector<HTMLAnchorElement>('.results a');
			if (first) {
				e.preventDefault();
				first.focus();
			}
		}
		// Enter (or the mobile keyboard's search key) follows the top result:
		// the field is not in a form, so without this the key was dead.
		if (e.key === 'Enter') {
			const first = searchPanel?.querySelector<HTMLAnchorElement>('.results a');
			if (first) {
				e.preventDefault();
				first.click(); // the anchor's own onclick closes the panel; the router navigates
			}
		}
	}
	// Move focus into the field when the panel opens (button → panel, like the language menu).
	$effect(() => {
		if (searchOpen) searchInput?.focus();
	});

	function href(langId: string) {
		// Same language keeps your page. Another language lands on that language's
		// version of the current page; English strips the language prefix.
		if (langId === lang) return page.url.pathname;
		if (isHome) return langId === 'en' ? '/studio/' : `/studio/${langId}/`;
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
				onkeydown={regionKeydown}
			>
				<svg class="flag" viewBox="0 0 60 30" width="22" height="11" aria-hidden="true" focusable="false">
					<rect width="60" height="30" fill="#012169" />
					<path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" stroke-width="6" />
					<path d="M0 0 L60 30 M60 0 L0 30" stroke="#c8102e" stroke-width="2" />
					<path d="M30 0 V30 M0 15 H60" stroke="#fff" stroke-width="10" />
					<path d="M30 0 V30 M0 15 H60" stroke="#c8102e" stroke-width="6" />
				</svg>
				<!-- Baseline-07 shows a caret beside the flag: the affordance that it opens the language dropdown. -->
				<svg class="caret" viewBox="0 0 10 6" width="9" height="6" aria-hidden="true" focusable="false">
					<path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
			<!-- The menu stays in the DOM on every page (prerendered), hidden with the
		     hidden attribute rather than conditionally rendered: without JavaScript
		     the language links still ship in the HTML, so the switcher works JS-off.
		     Keyboard behaviour is unchanged — a hidden menu has no tab stops, and
		     the arrow-key/Escape handlers query the same nodes. -->
			<div class="menu" bind:this={menu} role="menu" aria-label={t.menuLabel} hidden={!open} onkeydown={menuKeydown}>
					{#each languages as langItem (langItem.id)}
						{@const live = langItem.id === 'en' || isHome || hasTranslation(langItem.id, currentSlug)}
						{@const current = langItem.id === lang}
						{#if live}
							<a role="menuitem" class="item" href={href(langItem.id)} lang={langItem.id} onclick={close}>
								<span class="name">{langItem.label}</span>
								{#if current}<span class="tag current">{t.current}</span>{/if}
							</a>
						{:else}
							<span class="item soon" role="menuitem" aria-disabled="true" tabindex="-1" lang={langItem.id}>
								<span class="name">{langItem.label}</span>
								<span class="tag">{t.soon}</span>
							</span>
						{/if}
					{/each}
				</div>
		</div>

		<!-- Search: the deck shows a search control in the header. The button opens a
		     page search (index built from this language's page list, results via langHref). -->
		<div class="searchwrap">
			<button
				type="button"
				class="icon"
				bind:this={searchButton}
				aria-label={t.searchLabel}
				aria-expanded={searchOpen}
				aria-controls="nav-search"
				onclick={searchOpen ? closeSearch : openSearch}
			>
				<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
					<circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2" />
					<path d="M16 16l4.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				</svg>
			</button>
			{#if searchOpen}
				<div class="search" id="nav-search" bind:this={searchPanel} role="dialog" aria-label={t.searchLabel}>
					<input
						class="field"
						type="search"
						bind:this={searchInput}
						autocomplete="off"
						spellcheck="false"
						enterkeyhint="search"
						bind:value={query}
						placeholder={t.searchPlaceholder}
						aria-label={t.searchLabel}
						onkeydown={searchKeydown}
					/>
					<ul class="results">
						{#each searchResults as r (r.href)}
							<li>
								<a href={r.href} onclick={closeSearch}>
									<span class="rtitle">{r.title}</span>
									{#if r.kicker}<span class="rkicker">{r.kicker}</span>{/if}
								</a>
							</li>
						{:else}
							<li class="none">{t.searchNone}</li>
						{/each}
					</ul>
					<!-- Screen-reader feedback: the results list itself is not a live region
					     (announcing the whole list on every keystroke is noisy), so a polite
					     status line reports the count, or the no-results message. -->
					<p class="sr-status" role="status">
						{#if searchResults.length > 0}
							{t.searchStatus.replace('{n}', String(searchResults.length))}
						{:else}
							{t.searchNone}
						{/if}
					</p>
				</div>
			{/if}
		</div>

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
		/* hidden attribute alone loses to the display:grid rule below, so say it here. */
		&[hidden] {
			display: none;
		}
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

	/* Search panel: same panel language as the language menu (deep ground, rule border, shadow). */
	.searchwrap {
		position: relative;
	}
	.search {
		position: absolute;
		top: calc(100% + 8px);
		inset-inline-end: 0;
		z-index: 30;
		width: min(340px, calc(100vw - 24px));
		padding: 10px;
		border-radius: 14px;
		background: var(--deep);
		border: 1px solid var(--rule);
		box-shadow: 0 12px 32px rgba(0, 10, 30, 0.35);
		animation: search-in 160ms var(--ease);
	}
	@keyframes search-in {
		from {
			opacity: 0;
			transform: translateY(-4px);
		}
	}
	.field {
		width: 100%;
		box-sizing: border-box;
		padding: 10px 12px;
		border-radius: 10px;
		border: 1px solid var(--rule);
		background: transparent;
		color: var(--clay);
		font: inherit;
		font-size: 14px;
	}
	.field::placeholder {
		color: var(--muted);
	}
	.field:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 1px;
	}
	.field::-webkit-search-cancel-button {
		filter: invert(1);
		opacity: 0.6;
	}
	.results {
		list-style: none;
		margin: 8px 0 0;
		padding: 0;
		max-height: min(52vh, 420px);
		overflow-y: auto;
		display: grid;
		gap: 2px;
	}
	/* The live-region status line: present for screen readers, never visible. */
	.sr-status {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}
	.results a {
		display: flex;
		align-items: baseline;
		gap: 10px;
		justify-content: space-between;
		padding: 9px 12px;
		border-radius: 10px;
		font-size: 13px;
		color: var(--clay);
		text-decoration: none;
		transition: background-color 200ms var(--ease);
	}
	.results a:hover {
		background: var(--rule);
	}
	.results a:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 1px;
	}
	.rtitle {
		font-weight: 500;
	}
	.rkicker {
		flex: none;
		font-size: 10px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--muted);
	}
	.none {
		padding: 9px 12px;
		font-size: 13px;
		color: var(--muted);
	}
	@media (prefers-reduced-motion: reduce) {
		.search {
			animation: none;
		}
		.results a {
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
	/* Flag plus caret in one row; flex row reverses in RTL so the capsule mirrors with it. */
	.region {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}
	.caret {
		opacity: 0.7;
		transition: transform 200ms var(--ease);
	}
	.region[aria-expanded='true'] .caret {
		transform: rotate(180deg);
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
		/* Mobile: anchor the language menu and search panel to the inline edges so they cannot clip off-screen. */
		.menu {
			left: 0;
			right: auto;
		}
		.search {
			/* Mobile: the button sits mid-header, so a panel anchored to it would clip.
			     Anchor the panel to the whole nav instead (searchwrap goes static). */
			inset-inline-end: auto;
			inset-inline-start: clamp(20px, 4vw, 56px);
			width: min(340px, calc(100vw - 32px));
		}
		.searchwrap {
			position: static;
		}
		.nav {
			position: relative;
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
		.caret {
			transition: none;
		}
	}
</style>
