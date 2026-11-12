<script lang="ts">
	// "Your money on your terms." split section. Copy and tick list are placeholders from the deck.
	import split from '#lib/assets/studio/split.jpg';
	// Generated placeholder photo, marked on the tile, until licensed photography is supplied.
	const points = [
		'A simple, straightforward account',
		'Open banking that you control',
		'Tools to help you stay in control'
	];
</script>

<section class="split" aria-labelledby="split-title">
	<div class="media">
		<img src={split} alt="" decoding="async" />
		<span class="ph-label">Placeholder photo</span>
	</div>

	<div class="copy">
		<!-- Placeholder copy: confirm before launch -->
		<h2 id="split-title">Your money on your terms.</h2>

		<div class="mid">
			<p>
				Manage your finances with more flexibility, more confidence and fewer unnecessary hassles.
			</p>

			<ul class="ticks">
				{#each points as point (point)}
					<li>
						<span class="dot" aria-hidden="true">
							<svg viewBox="0 0 24 24" width="12" height="12" focusable="false">
								<path
									d="M5 12.5l4.2 4.2L19 7"
									fill="none"
									stroke="currentColor"
									stroke-width="2.6"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span>{point}</span>
					</li>
				{/each}
			</ul>
		</div>

		<a class="learn" href="#split-title">
			<span>Get started</span>
			<svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true" focusable="false">
				<path
					d="M5 12h13M13 6l6 6-6 6"
					fill="none"
					stroke="currentColor"
					stroke-width="2.4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
	</div>
</section>

<style>
	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.28fr) minmax(0, 1fr);
		align-items: stretch;
		gap: clamp(32px, 4.9vw, 71px);
		background: var(--clay);
		color: var(--deep);
		padding: clamp(56px, 7vw, 96px) clamp(20px, 4vw, 56px);
	}

	.media img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 35% 50%;
	}
	.media {
		position: relative;
		aspect-ratio: 19 / 12;
		border-radius: 18px;
		overflow: hidden;
		background: linear-gradient(135deg, #0c6470 0%, #001431 60%, #f58851 140%);
	}
	.ph-label {
		position: absolute;
		left: 16px;
		bottom: 14px;
		font-size: 10px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--clay);
		background: rgba(0, 20, 49, 0.62);
		padding: 4px 9px;
		border-radius: 999px;
		line-height: 1.2;
	}

	h2 {
		margin: 0 0 16px;
		font-weight: 500;
		font-size: clamp(28px, 4.4vw, 63px);
		line-height: 1.08;
		letter-spacing: -0.01em;
	}
	.copy {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-self: stretch;
		gap: 32px;
	}
	.mid {
		margin: auto 0;
	}
	.copy > p {
		margin: 0 0 24px;
		max-width: 40ch;
		font-size: clamp(15px, 1.2vw, 17px);
		line-height: 1.55;
		color: var(--mushroom);
	}

	.ticks {
		list-style: none;
		margin: 0 0 32px;
		padding: 0;
		display: grid;
		gap: 12px;
	}
	.ticks li {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 15px;
	}
	.ticks .dot {
		flex: none;
		display: grid;
		place-items: center;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: var(--deep);
		color: var(--peach);
	}
	.ticks svg {
		display: block;
	}

	.learn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		min-height: 52px;
		box-sizing: border-box;
		padding: 14px 44px;
		border-radius: 999px;
		border: 1px solid var(--deep);
		color: var(--deep);
		font-size: 16px;
		align-self: flex-start;
		text-decoration: none;
		transition: background-color 220ms var(--ease);
	}
	.learn:hover {
		background: var(--deep);
		color: var(--clay);
	}
	.learn:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
	}
	.learn svg {
		transition: transform 220ms var(--ease);
	}
	.learn:hover svg {
		transform: translateX(2px);
	}

	/* Phone: photo and copy sit side by side, as in the Figma 390 frame. */
	@media (max-width: 800px) {
		.split {
			grid-template-columns: minmax(0, 1.14fr) minmax(0, 1fr);
			gap: 14px;
			align-items: start;
			padding: 48px 20px;
		}
		h2 {
			font-size: 22px;
			margin-bottom: 10px;
		}
		/* The paragraph sits inside .mid, so target it there (this rule was matching nothing). */
		.mid p {
			font-size: 13px;
			line-height: 1.5;
			margin: 0 0 14px;
		}
		.ticks {
			gap: 8px;
			margin-bottom: 16px;
		}
		.ticks li {
			font-size: 13px;
			align-items: flex-start;
		}
		.ticks .dot {
			width: 18px;
			height: 18px;
		}
		.learn {
			font-size: 12px;
			padding: 10px 14px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.learn,
		.learn svg {
			transition: none;
		}
	}
</style>
