<script lang="ts">
	// "How can we help today?" product cards. Titles and copy are placeholders from the deck.
	import current from '#lib/assets/studio/current.jpg';
	import savings from '#lib/assets/studio/savings.jpg';
	import pensions from '#lib/assets/studio/pensions.jpg';
	// Photos are generated placeholders, marked on the tile, until licensed photography is supplied.
	const products = [
		{
			title: 'Current accounts',
			body: 'Everyday banking that works for you, away from home or at home.',
			tone: 'a',
			src: current
		},
		{
			title: 'Savings',
			body: 'Simple ways to save with confidence and plan for what’s next.',
			tone: 'b',
			src: savings
		},
		{
			title: 'Pensions',
			body: 'Straightforward support to build your future and stay ahead.',
			tone: 'c',
			src: pensions
		}
	];
</script>

<section class="products" aria-labelledby="products-title">
	<!-- Placeholder copy: confirm before launch -->
	<h2 id="products-title">How can we help today?</h2>

	<ul class="grid">
		{#each products as p (p.title)}
			<li class="card">
				<div class="photo tone-{p.tone}">
					<img src={p.src} alt="" loading="lazy" decoding="async" />
					<span class="ph-label">Placeholder photo</span>
				</div>
				<h3>{p.title}</h3>
				<p>{p.body}</p>
				<a class="learn" href="#products-title">
					<span>Learn more</span>
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
			</li>
		{/each}
	</ul>
</section>

<style>
	.products {
		background: var(--clay);
		color: var(--deep);
		padding: clamp(56px, 7vw, 96px) clamp(20px, 4vw, 56px);
	}
	h2 {
		margin: 0 0 clamp(28px, 4vw, 48px);
		font-weight: 500;
		font-size: clamp(28px, 4.6vw, 66px);
		letter-spacing: -0.01em;
	}
	.grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(16px, 4vw, 56px);
	}
	.card {
		display: flex;
		flex-direction: column;
		min-width: 0;
	}
	.photo img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.photo {
		position: relative;
		aspect-ratio: 1 / 1;
		border-radius: 18px;
		overflow: hidden;
		margin-bottom: 20px;
	}
	.tone-a {
		background: linear-gradient(160deg, #6f5153 0%, #005385 100%);
	}
	.tone-b {
		background: linear-gradient(160deg, #0c6470 0%, #001431 100%);
	}
	.tone-c {
		background: linear-gradient(160deg, #f58851 0%, #6f5153 100%);
	}
	.ph-label {
		position: absolute;
		z-index: 1;
		left: 14px;
		bottom: 12px;
		font-size: 10px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--clay);
		background: rgba(0, 20, 49, 0.55);
		padding: 3px 8px;
		border-radius: 999px;
	}
	h3 {
		margin: 0 0 8px;
		font-size: 20px;
		font-weight: 500;
		letter-spacing: -0.005em;
	}
	p {
		margin: 0 0 18px;
		font-size: 15px;
		line-height: 1.5;
		color: var(--mushroom);
		max-width: 36ch;
	}
	.learn {
		align-self: flex-start;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 8px 14px;
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

	/* Desktop: the row runs off the right edge, as in the reference, so the third card is cropped. */
	@media (min-width: 801px) {
		.products {
			overflow: hidden;
		}
		.grid {
			display: flex;
			gap: clamp(24px, 4.6vw, 67px);
		}
		.card {
			flex: 0 0 clamp(280px, 30.8vw, 460px);
		}
	}

	@media (max-width: 800px) {
		.grid {
			grid-template-columns: 1fr;
		}
		.photo {
			aspect-ratio: 16 / 10;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.learn,
		.learn svg {
			transition: none;
		}
	}
</style>
