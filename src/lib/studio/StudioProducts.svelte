<script lang="ts">
	import { resolve } from '$app/paths';
	// "How can we help today?" product cards. Titles and copy are Algbra homepage and feature-page wording.
	import current from '#lib/assets/studio/current.jpg';
	import savings from '#lib/assets/studio/savings.jpg';
	import pensions from '#lib/assets/studio/pensions.jpg';
	// Photography is generated for this build until licensed photography is supplied.
	const products = [
		{
			slug: 'transfers',
			title: 'Send money home and abroad',
			body: 'Send GBP overseas and pay friends and family in seconds.',
			tone: 'a',
			src: current,
			// Placeholder photo; update alt with the licensed replacement
			alt: 'Woman smiling at her phone at the kitchen table'
		},
		{
			slug: 'savings',
			title: 'Savings pots',
			body: 'Set money aside for the things that matter, in a few taps.',
			tone: 'b',
			src: savings,
			alt: 'Family on a sofa looking at a tablet together'
		},
		{
			slug: 'cards',
			title: 'Spend worldwide with one card',
			body: 'Spend anywhere your card scheme is accepted, with cards you can freeze and control in the app.',
			tone: 'c',
			src: pensions,
			alt: 'Woman on a park bench holding her phone'
		}
	];
</script>

<section class="products" aria-labelledby="products-title">
	<!-- Soft peach ring motif on the clay ground, as in the reference; drifts gently and is decorative only -->
	<svg class="ground-rings" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
		<defs>
			<radialGradient id="prodRingA" cx="0.5" cy="0.5" r="0.5">
				<stop offset="0.55" stop-color="#f58851" stop-opacity="0" />
				<stop offset="0.82" stop-color="#f58851" stop-opacity="0.3" />
				<stop offset="1" stop-color="#f58851" stop-opacity="0" />
			</radialGradient>
		</defs>
		<circle class="ground-ring" cx="760" cy="300" r="340" fill="url(#prodRingA)" />
	</svg>
	<h2 id="products-title">How can we help today?</h2>

	<ul class="grid">
		{#each products as p (p.title)}
			<li class="card">
				<div class="photo tone-{p.tone}">
					<img src={p.src} alt={p.alt} decoding="async" loading="lazy" />
				</div>
				<h3>{p.title}</h3>
				<p>{p.body}</p>
				<a class="learn" href={resolve(`/studio/${p.slug}/` as '/')} aria-label="Learn more about {p.title}">
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
		--gutter: clamp(20px, 4vw, 56px);
		position: relative;
		background: var(--clay);
		color: var(--deep);
		padding: clamp(56px, 7vw, 96px) var(--gutter);
		overflow: hidden;
	}
	.ground-rings {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
	.ground-ring {
		transform-origin: center;
		animation: ground-drift 30s ease-in-out infinite alternate;
	}
	@keyframes ground-drift {
		from {
			transform: translate(-24px, 16px) scale(1);
		}
		to {
			transform: translate(28px, -20px) scale(1.04);
		}
	}
	.products > :not(.ground-rings) {
		position: relative;
		z-index: 1;
	}
	h2 {
		margin: 0 0 clamp(28px, 4.5vw, 65px);
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
		border-radius: 24px;
		overflow: hidden;
		margin-bottom: 36px;
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
	
	h3 {
		margin: 0 0 10px;
		font-size: clamp(20px, 1.8vw, 25px);
		font-weight: 600;
		letter-spacing: -0.01em;
	}
	p {
		margin: 0 0 22px;
		font-size: 15px;
		line-height: 1.5;
		color: var(--deep);
		opacity: 0.85;
		max-width: 34ch;
	}
	.learn {
		margin-top: auto;
		align-self: flex-start;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		min-height: 44px;
		box-sizing: border-box;
		padding: 12px 24px;
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
		/* Reference pill is about 210 by 52 at 1440, with larger label text. */
		.learn {
			font-size: 16px;
			min-height: 52px;
			padding: 14px 40px;
		}
		.grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: clamp(24px, 4.6vw, 67px);
		}
	}

	/* Phone: a swipeable row that runs off the right edge, as in the Figma 390 frame, so the third card is cropped. */
	@media (max-width: 800px) {
		/* Reference proportions: the phone heading sits smaller against the 390 width. */
		h2 {
			font-size: 26px;
			position: relative;
		}
		h3 {
			font-size: 20px;
		}
		.ground-rings {
			opacity: 0.7;
		}
		.grid {
			display: flex;
			overflow-x: auto;
			scroll-snap-type: x mandatory;
			scroll-padding: 0 var(--gutter);
			scrollbar-width: none;
			gap: 14px;
			margin: 0 calc(-1 * var(--gutter));
			padding: 0 var(--gutter);
			-webkit-overflow-scrolling: touch;
		}
		.grid::-webkit-scrollbar {
			display: none;
		}
		.card {
			flex: 0 0 44vw;
			scroll-snap-align: start;
		}
		.photo {
			aspect-ratio: 1 / 1;
			margin-bottom: 20px;
		}
		h3 {
			font-size: 17px;
		}
		p {
			font-size: 14px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.learn,
		.learn svg {
			transition: none;
		}
		.ground-ring {
			animation: none;
		}
	}
</style>
