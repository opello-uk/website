<script lang="ts">
	// "More control. More confidence." tiles. Tile labels follow the Figma board; the intro line is placeholder, confirm before launch.
	const tiles = [
		{ title: 'Global transfers', icon: 'globe' },
		{ title: 'Virtual cards', icon: 'card' },
		{ title: 'Currency exchange', icon: 'exchange' }
	];
</script>

<section class="control" aria-labelledby="control-title">
	<div class="wrap">
	<ul class="grid">
		{#each tiles as t (t.title)}
			<li class="tile">
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
			</li>
		{/each}
	</ul>
	<!-- Placeholder copy: confirm before launch -->
	<header>
		<h2 id="control-title">More control.<br />More confidence.</h2>
		<p>Placeholder line for the section intro. Confirm before launch.</p>
	</header>
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
	header {
		min-width: 0;
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
		color: var(--mushroom);
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
		padding: clamp(22px, 2.2vw, 30px) clamp(14px, 1.6vw, 22px);
		border-radius: 16px;
		text-align: center;
		display: grid;
		justify-items: center;
		background: #ffffff;
		box-shadow: 0 1px 2px rgba(0, 20, 49, 0.06);
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
		header {
			order: -1;
		}
	}
	/* Figma mobile keeps the three tiles in one row, smaller */
	/* Reference phone layout: three small tiles on the left, the heading and intro on the right, one row. */
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
		}
		.grid {
			grid-template-columns: repeat(3, 60px);
			gap: 6px;
		}
		.tile {
			padding: 12px 4px;
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
			font-size: 10px;
			line-height: 1.2;
		}
		h2 {
			font-size: 20px;
			margin-bottom: 8px;
		}
		header p {
			font-size: 12px;
			line-height: 1.45;
		}
	}
</style>
