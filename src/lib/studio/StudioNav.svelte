<script lang="ts">
	import Wordmark from '#lib/components/Wordmark.svelte';
	import { resolve } from '$app/paths';

	// Customer-type tabs; Personal is the active section for this build.
	const tabs = [
		{ id: 'personal', label: 'Personal', href: '/studio/personal/' },
		{ id: 'business', label: 'Business', href: '/studio/all-plans/' } /* out of MLP1; routed to all-plans until business launches */,
		{ id: 'premium', label: 'Premium', href: '/studio/all-plans/' } /* out of MLP1; routed to all-plans */
	];
	// The Personal tab is the active section for this build.
	const active = 'personal';
</script>

<header class="nav">
	<a class="brand" href={resolve('/studio/')} aria-label="Opello, home">
		<Wordmark />
	</a>

	<nav class="tabs" aria-label="Customer type">
		{#each tabs as tab (tab.id)}
			<a class="tab" href={resolve(tab.href as '/')} aria-current={tab.id === active ? 'page' : undefined}>{tab.label}</a>
		{/each}
	</nav>

	<div class="tools">
		<!-- Region picker: the deck shows a flag here. -->
		<button type="button" class="region" aria-label="Region: United Kingdom">
			<svg class="flag" viewBox="0 0 60 30" width="22" height="11" aria-hidden="true" focusable="false">
				<rect width="60" height="30" fill="#012169" />
				<path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" stroke-width="6" />
				<path d="M0 0 L60 30 M60 0 L0 30" stroke="#c8102e" stroke-width="2" />
				<path d="M30 0 V30 M0 15 H60" stroke="#fff" stroke-width="10" />
				<path d="M30 0 V30 M0 15 H60" stroke="#c8102e" stroke-width="6" />
			</svg>
		</button>

		<!-- Search: the deck shows a search control here. -->
		<button type="button" class="icon" aria-label="Search">
			<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
				<circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2" />
				<path d="M16 16l4.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		</button>

		<div class="pills">

			<a class="pill pill-peach" href={resolve('/studio/open-account/')}>Become a customer</a>
			<a class="pill pill-white" href={resolve('/studio/login/')}>Login</a>
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
		gap: 8px;
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
	.pill:hover {
		transform: translateY(-1px);
	}
	.pill:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
	}
	.pill-peach {
		background: var(--peach);
		color: var(--deep);
	}
	.pill-white {
		background: var(--clay);
		color: var(--deep);
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
			gap: 6px;
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
		.tab,
		.pill {
			transition: none;
		}
	}
</style>
