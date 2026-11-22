<script lang="ts">
	import { resolve } from '$app/paths';
	import { homeCopy, langHref, type Lang } from '#lib/studio/i18n';
	// "More control. More confidence." heading + intro are the baseline deck's own wording (baseline-02,
	// Vinay's design reference) — not placeholder copy. Tile labels follow the baseline too; each links to its studio page.
	// MLP1: transfers and virtual cards. The virtual-card tile points at the dedicated /studio/virtual-cards/ page (in scope, rebuilt 2026-11-20); currency-exchange (multi-currency) stays out of scope.
	let { lang = 'en' }: { lang?: 'en' | Lang } = $props();
	const c = $derived(homeCopy[lang]);
</script>

<section class="control" aria-labelledby="control-title">
	<div class="wrap">
	<!-- Heading first in DOM for screen readers; CSS order puts tiles on the left for sighted users. -->
	<!-- Heading and intro line. -->
	<header>
		<h2 id="control-title">{c.controlTitle1}<br />{c.controlTitle2}</h2>
		<p>{c.controlIntro}</p>
	</header>
	<ul class="grid">
		{#each c.controlTiles as t (t.title)}
			<li class="tile">
				<a href={resolve(langHref(lang, t.href) as '/')} class="tile-link">
				<span class="icon" aria-hidden="true">
					{#if t.icon === 'globe'}
						<svg viewBox="0 0 24 24" width="30" height="30" focusable="false">
							<circle cx="12" cy="12" r="8.5" />
							<path d="M3.5 12h17M12 3.5c2.6 2.6 2.6 14.4 0 17M12 3.5c-2.6 2.6-2.6 14.4 0 17" />
						</svg>
					{:else if t.icon === 'card'}
						<svg viewBox="0 0 24 24" width="30" height="30" focusable="false">
							<rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
							<path d="M2.5 10h19M6.5 15h4" />
						</svg>
					{:else}
						<svg viewBox="0 0 24 24" width="30" height="30" focusable="false">
							<path d="M4 8.5h14.5M15.5 5.5l3 3-3 3M20 15.5H5.5M8.5 12.5l-3 3 3 3" />
						</svg>
					{/if}
				</span>
				<h3>{t.title}</h3>
				</a>
			</li>
		{/each}
	</ul>
	</div>
</section>

<style>
	.control {
		background: var(--clay);
		color: var(--deep);
		padding: clamp(56px, 7vw, 96px) clamp(20px, 4vw, 56px);
	}
	.wrap {
		max-width: 1280px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
		align-items: center;
		gap: clamp(32px, 5vw, 80px);
	}
	/* DOM has header first for screen readers; visually place tiles left, header right. */
	header {
		min-width: 0;
		order: 2;
	}
	.grid {
		order: 1;
	}
	h2 {
		margin: 0 0 12px;
		font-weight: 500;
		font-size: clamp(28px, 4vw, 58px);
		letter-spacing: -0.01em;
		line-height: 1.1;
	}
	header p {
		margin: 0;
		font-size: 15px;
		line-height: 1.5;
		/* Baseline-02: intro reads as neutral deep navy, not the mauve mushroom tone. */
		color: var(--deep);
		opacity: 0.78;
	}
	.flag {
		display: block;
		margin-top: 10px;
		font-size: 12px;
		color: var(--deep);
		opacity: 0.72;
	}
	.grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(14px, 1.6vw, 20px);
	}
	.tile {
		min-width: 0;
		padding: 0;
		border-radius: 16px;
		text-align: center;
		display: grid;
		justify-items: center;
		background: #ffffff;
		box-shadow: 0 1px 2px rgba(0, 20, 49, 0.06);
	}
	.tile-link {
		display: grid;
		justify-items: center;
		gap: 0;
		padding: clamp(22px, 2.2vw, 30px) clamp(14px, 1.6vw, 22px);
		text-decoration: none;
		color: inherit;
		border-radius: 16px;
		outline-offset: -2px;
	}
	/* Hover gated to real pointers; a touch tap must not leave the tile stuck tinted. */
	@media (hover: hover) and (pointer: fine) {
		.tile-link:hover {
			background: rgba(245, 136, 81, 0.06);
		}
	}
	.tile-link:focus-visible {
		outline: 2px solid var(--deep);
		outline-offset: 2px;
	}
	.icon {
		display: inline-grid;
		place-items: center;
		width: 40px;
		height: 40px;
		color: #c4561f;
		margin-bottom: 16px;
	}
	.icon svg {
		fill: none;
		stroke: currentColor;
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
	h3 {
		margin: 0;
		font-size: 17px;
		font-weight: 500;
		letter-spacing: -0.005em;
	}

	@media (max-width: 1000px) {
		.wrap {
			grid-template-columns: 1fr;
		}
		/* Header is first in DOM; reset desktop order so it stays first on mobile. */
		header {
			order: 0;
		}
		.grid {
			order: 0;
		}
	}
	/* Phone layout: the tiles sit left, the heading and intro on the right, one row. MLP1 has two tiles, so the tile column is a 2-up grid. */
	@media (max-width: 560px) {
		.control {
			padding: 48px 20px;
		}
		.wrap {
			grid-template-columns: auto minmax(0, 1fr);
			gap: 16px;
			align-items: center;
		}
		header {
			order: 0;
			/* Tiles sit in the first (auto) column even though the header comes first in the DOM. */
			grid-column: 2;
			grid-row: 1;
		}
		.grid {
			grid-column: 1;
			grid-row: 1;
			grid-template-columns: repeat(2, minmax(64px, auto));
			gap: 8px;
		}
		.tile {
			border-radius: 10px;
		}
		.tile-link {
			padding: 14px 10px;
			border-radius: 10px;
		}
		.icon {
			width: 22px;
			height: 22px;
			margin-bottom: 8px;
		}
		.icon svg {
			width: 18px;
			height: 18px;
		}
		h3 {
			/* 12px to match the <=380px stacked tier — the old 10px rendered the
			   smaller heading on the wider phones (381-560px) and failed a
			   minimum-legibility sweep (computed font-size < 12px). */
			font-size: 12px;
			line-height: 1.2;
		}
		h2 {
			font-size: 19px;
			margin-bottom: 8px;
		}
		header p {
			font-size: 12px;
			line-height: 1.45;
		}
	}

	/* Very narrow phones: the side-by-side row cannot fit; stack heading above full-width tiles. */
	@media (max-width: 380px) {
		.wrap {
			grid-template-columns: 1fr;
			gap: 20px;
		}
		header {
			grid-column: 1;
			grid-row: auto;
		}
		.grid {
			grid-column: 1;
			grid-row: auto;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 10px;
		}
		.tile-link {
			padding: 18px 12px;
		}
		h3 {
			font-size: 12px;
		}
	}
</style>
