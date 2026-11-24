<script lang="ts">
	import { resolve } from '$app/paths';
	import { homeCopy, langHref, type Lang } from '#lib/studio/i18n';
	// "How can we help today?" product cards. Titles and copy are Algbra homepage and feature-page wording.
	let { lang = 'en' }: { lang?: 'en' | Lang } = $props();
	const c = $derived(homeCopy[lang]);
	import current from '#lib/assets/studio/current.jpg';
	import currentW from '#lib/assets/studio/current.webp';
	import current2x from '#lib/assets/studio/current@2x.jpg';
	import current2xW from '#lib/assets/studio/current@2x.webp';

	import savings from '#lib/assets/studio/savings.jpg';
	import savingsW from '#lib/assets/studio/savings.webp';
	import savings2x from '#lib/assets/studio/savings@2x.jpg';
	import savings2xW from '#lib/assets/studio/savings@2x.webp';

	import cardsPhoto from '#lib/assets/studio/cards.jpg';
	import cardsPhotoW from '#lib/assets/studio/cards.webp';
	import cardsPhoto2x from '#lib/assets/studio/cards@2x.jpg';
	import cardsPhoto2xW from '#lib/assets/studio/cards@2x.webp';

	// Photography is generated for this build until licensed photography is supplied.
	// Copy and alt text live in i18n (homeCopy[lang]); the photos stay here and
	// join by slug. (Fixed 2026-11-19: the i18n move dropped the image sources,
	// which left the three product cards with no src on the live page.)
	const photos: Record<string, string> = {
		transfers: current,
		savings: savings,
		cards: cardsPhoto
	};
	const photos2x: Record<string, string> = {
		transfers: current2x,
		savings: savings2x,
		cards: cardsPhoto2x
	};
	const photosW: Record<string, string> = {
		transfers: currentW,
		savings: savingsW,
		cards: cardsPhotoW
	};
	const photos2xW: Record<string, string> = {
		transfers: current2xW,
		savings: savings2xW,
		cards: cardsPhoto2xW
	};
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
	<h2 id="products-title">{c.productsTitle}</h2>

	<ul class="grid">
		{#each c.products as p (p.title)}
			<li class="card">
				<div class="photo tone-{p.tone}">
					<picture><source type="image/webp" srcset="{photosW[p.slug]} 1x, {photos2xW[p.slug]} 2x" /><img src={photos[p.slug]} srcset="{photos[p.slug]} 1x, {photos2x[p.slug]} 2x" alt={p.alt} width="800" height="800" decoding="async" loading="lazy" /></picture>
				</div>
				<h3>{p.title}</h3>
				<p>{p.body}</p>
				<a class="learn" href={resolve(langHref(lang, `/studio/${p.slug}/`) as '/')} aria-label={c.learnAria.replace('{title}', p.title)}>
					<span>{c.learnMore}</span>
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
	/* Baseline-phase parallax: the ring layer slides gently against the scroll
	   as the section crosses the viewport. Scroll-driven CSS (no JS), named view
	   timeline on the section; browsers without animation-timeline keep the
	   static ground, and reduced-motion keeps them still (block below). */
	@keyframes ground-parallax {
		from { transform: translate3d(0, 5vh, 0); }
		to { transform: translate3d(0, -5vh, 0); }
	}
	@supports (animation-timeline: view()) {
		@media (prefers-reduced-motion: no-preference) {
			.products {
				view-timeline-name: --products;
			}
			.ground-rings {
				animation: ground-parallax linear both;
				animation-timeline: --products;
				animation-range: cover 0% cover 100%;
			}
		}
	}
	/* Baseline-07 proportion: the heading ends left of the hero phones that dip
	   into this section (measured ~46px at 1440, ~3.2vw); at 4.6vw the heading's
	   tail ran under the left phone. */
	h2 {
		margin: 0 0 clamp(28px, 4.5vw, 65px);
		font-weight: 700;
		font-size: clamp(28px, 3.3vw, 48px);
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
		/* Same card language as the slug-page clay cards (translateY -3px, navy shadow). */
		transition: transform 220ms var(--ease), box-shadow 220ms var(--ease);
	}
	/* Hover gated to real pointers; a touch tap must not leave a tile lifted. */
	@media (hover: hover) and (pointer: fine) {
		.card:hover .photo {
			transform: translateY(-3px);
			box-shadow: 0 14px 30px rgba(0, 20, 49, 0.35);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.photo {
			transition: none;
		}
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
	/* Hover gated to real pointers; a touch tap must not leave the pill inverted. */
	@media (hover: hover) and (pointer: fine) {
		.learn:hover {
			background: var(--deep);
			color: var(--clay);
		}
	}
	.learn:focus-visible {
		/* Navy outline here: the section ground is light clay (peach alone measures 1.95:1, WCAG 1.4.11 wants 3:1).
		   The global peach box-shadow stays on underneath, so the ring keeps its two-tone look. */
		outline: 2px solid var(--deep);
		outline-offset: 3px;
	}
	.learn svg {
		transition: transform 220ms var(--ease);
	}
	@media (hover: hover) and (pointer: fine) {
		.learn:hover svg {
			transform: translateX(2px);
		}
	}

	/* Desktop: the row runs off the right edge, as in the reference, so the third card is cropped. */
	@media (min-width: 1025px) {
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
	@media (max-width: 1024px) {
		/* Reference proportions: the phone heading sits smaller against the 390 width. */
		h2 {
			font-size: 26px;
			position: relative;
			margin-bottom: 20px;
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
			/* Wide enough to read at every width from 340 to 1024; the third card peeks as the scroll affordance. */
			flex: 0 0 clamp(240px, 62vw, 320px);
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

	@media (max-width: 400px) {
		.products {
			padding: 44px 20px 56px;
		}
		.card {
			flex-basis: 66vw;
		}
		.photo {
			margin-bottom: 14px;
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
		@supports (animation-timeline: view()) {
			.ground-rings {
				animation: none;
			}
		}
	}
</style>
