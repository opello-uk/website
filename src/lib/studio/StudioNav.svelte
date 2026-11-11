<script lang="ts">
	import Wordmark from '#lib/components/Wordmark.svelte';
	import { resolve } from '$app/paths';

	// Placeholder tabs: they will switch the hero and sections once built.
	const tabs = [
		{ id: 'personal', label: 'Personal' },
		{ id: 'business', label: 'Business' },
		{ id: 'premium', label: 'Premium' }
	];
	// Studio build: the active tab is fixed until the tabs drive real sections.
	const active = 'personal';
</script>

<header class="nav">
	<a class="brand" href={resolve('/studio/')} aria-label="Opello, home">
		<Wordmark />
	</a>

	<nav class="tabs" aria-label="Customer type">
		{#each tabs as tab (tab.id)}
			<button
				type="button"
				class="tab"
				aria-current={tab.id === active ? 'page' : undefined}>{tab.label}</button
			>
		{/each}
	</nav>

	<div class="tools">
		<!-- Placeholder: region picker. The deck shows a flag here. -->
		<button type="button" class="region" aria-label="Region: United Kingdom (placeholder)">
			<svg class="flag" viewBox="0 0 60 30" width="22" height="11" aria-hidden="true" focusable="false">
				<rect width="60" height="30" fill="#012169" />
				<path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" stroke-width="6" />
				<path d="M0 0 L60 30 M60 0 L0 30" stroke="#c8102e" stroke-width="2" />
				<path d="M30 0 V30 M0 15 H60" stroke="#fff" stroke-width="10" />
				<path d="M30 0 V30 M0 15 H60" stroke="#c8102e" stroke-width="6" />
			</svg>
		</button>

		<!-- Placeholder: search, not wired yet -->
		<button type="button" class="icon" aria-label="Search (placeholder)">
			<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
				<circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="2" />
				<path d="M16 16l4.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		</button>

		<div class="pills">
			<!-- Placeholder copy: CTA labels to confirm -->
			<button type="button" class="pill pill-peach">Become a customer</button>
			<button type="button" class="pill pill-white">Login</button>
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
		min-height: 36px;
		min-width: 36px;
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
	}

	@media (max-width: 560px) {
		/* Mobile: keep both pills (Login stays visible), hide the region and search to make room. */
		.region,
		.tools > .icon {
			display: none;
		}
		.tools {
			gap: 8px;
		}
		.pills {
			gap: 6px;
		}
		.pill {
			min-height: 36px;
			padding: 0 12px;
			font-size: 10px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.tab,
		.pill {
			transition: none;
		}
	}
</style>
