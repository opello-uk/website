<script lang="ts">
	// "Your money on your terms." split section. Copy and tick list are placeholders from the deck.
	// The image is a placeholder tile until licensed photography is supplied.
	const points = [
		'A simple, straightforward account',
		'Open banking that you control',
		'Tools to help you stay in control'
	];
</script>

<section class="split" aria-labelledby="split-title">
	<div class="media" role="img" aria-label="Placeholder photo">
		<span class="ph-label">Photo placeholder</span>
	</div>

	<div class="copy">
		<!-- Placeholder copy: confirm before launch -->
		<h2 id="split-title">Your money on your terms.</h2>
		<p>
			Manage your finances with more flexibility, more confidence and fewer unnecessary hassles.
		</p>

		<ul class="ticks">
			{#each points as point (point)}
				<li>
					<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
						<path
							d="M5 12.5l4.2 4.2L19 7"
							fill="none"
							stroke="currentColor"
							stroke-width="2.4"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<span>{point}</span>
				</li>
			{/each}
		</ul>

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
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		align-items: center;
		gap: clamp(32px, 6vw, 96px);
		background: var(--clay);
		color: var(--deep);
		padding: clamp(56px, 7vw, 96px) clamp(20px, 4vw, 56px);
	}

	.media {
		position: relative;
		aspect-ratio: 4 / 3;
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
		opacity: 0.85;
	}

	h2 {
		margin: 0 0 16px;
		font-weight: 400;
		font-size: clamp(28px, 3.2vw, 44px);
		line-height: 1.08;
		letter-spacing: -0.01em;
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
	.ticks svg {
		flex: none;
		color: var(--peach);
		background: var(--deep);
		border-radius: 50%;
		padding: 3px;
		box-sizing: content-box;
		width: 12px;
		height: 12px;
	}

	.learn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 10px 16px;
		border-radius: 999px;
		border: 1px solid var(--deep);
		color: var(--deep);
		font-size: 13px;
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

	@media (max-width: 800px) {
		.split {
			grid-template-columns: 1fr;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.learn,
		.learn svg {
			transition: none;
		}
	}
</style>
