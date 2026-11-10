<script lang="ts">
	// "More control. More confidence." icon tiles. Copy is placeholder from the deck; confirm before launch.
	const tiles = [
		{
			title: 'See everything',
			body: 'Balances, payments and plans in one clear view.',
			icon: 'eye'
		},
		{
			title: 'Lock it down',
			body: 'Freeze a card or limit spending in a tap.',
			icon: 'lock'
		},
		{
			title: 'Know it is you',
			body: 'Secure sign-in that checks it is really you.',
			icon: 'shield'
		}
	];
</script>

<section class="control" aria-labelledby="control-title">
	<div class="wrap">
	<ul class="grid">
		{#each tiles as t (t.title)}
			<li class="tile">
				<span class="icon" aria-hidden="true">
					{#if t.icon === 'eye'}
						<svg viewBox="0 0 24 24" width="26" height="26" focusable="false">
							<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
							<circle cx="12" cy="12" r="3" />
						</svg>
					{:else if t.icon === 'lock'}
						<svg viewBox="0 0 24 24" width="26" height="26" focusable="false">
							<rect x="5" y="10.5" width="14" height="10" rx="2.5" />
							<path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
						</svg>
					{:else}
						<svg viewBox="0 0 24 24" width="26" height="26" focusable="false">
							<path d="M12 3 5 6v5.5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V6l-7-3Z" />
							<path d="m9 12 2.2 2.2L15.5 10" />
						</svg>
								{/if}
				</span>
				<h3>{t.title}</h3>
				<p>{t.body}</p>
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
		grid-template-columns: minmax(0, 2.4fr) minmax(0, 1fr);
		align-items: center;
		gap: clamp(32px, 5vw, 80px);
	}
	header {
		min-width: 0;
	}
	h2 {
		margin: 0 0 12px;
		font-weight: 400;
		font-size: clamp(28px, 3.2vw, 44px);
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
		padding: clamp(20px, 2vw, 26px);
		border-radius: 20px;
		background: rgba(0, 20, 49, 0.06);
		border: 1px solid rgba(0, 20, 49, 0.12);
	}
	.icon {
		display: inline-grid;
		place-items: center;
		width: 52px;
		height: 52px;
		border-radius: 50%;
		background: var(--deep);
		color: var(--clay);
		margin-bottom: 22px;
	}
	.icon svg {
		fill: none;
		stroke: currentColor;
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
	h3 {
		margin: 0 0 8px;
		font-size: 19px;
		font-weight: 500;
		letter-spacing: -0.005em;
	}
	.tile p {
		margin: 0;
		font-size: 15px;
		line-height: 1.5;
		color: var(--mushroom);
		max-width: 30ch;
	}

	@media (max-width: 1000px) {
		.wrap {
			grid-template-columns: 1fr;
		}
		header {
			order: -1;
		}
	}
	@media (max-width: 560px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
