<script lang="ts">
	import { homeCopy, type Lang } from '#lib/studio/i18n';
	import band from '#lib/assets/studio/band.jpg';
	import bandW from '#lib/assets/studio/band.webp';
	import band2x from '#lib/assets/studio/band@2x.jpg';
	import band2xW from '#lib/assets/studio/band@2x.webp';

	// "A place where you belong." full-bleed photo band. Copy matches the baseline deck (baseline-02); the photo is a placeholder ground until licensed imagery is supplied.
	let { lang = 'en' }: { lang?: 'en' | Lang } = $props();
	const c = $derived(homeCopy[lang]);
</script>

<section class="photo" aria-labelledby="photo-title">
	<div class="ground">
		<!-- Placeholder photo; update alt with the licensed replacement -->
		<picture><source type="image/webp" srcset="{bandW} 1x, {band2xW} 2x" /><img src={band} srcset="{band} 1x, {band2x} 2x" alt={c.photoAlt} width="1200" height="800" decoding="async" loading="lazy" /></picture>
	</div>

	<div class="inner">
		<div class="copy">
			<h2 id="photo-title">{c.photoTitle1}<br />{c.photoTitle2}</h2>
			<p>{c.photoBody}</p>
		</div>
	</div>
</section>

<style>
	.photo {
		position: relative;
		isolation: isolate;
		/* Reference band is about 0.29 of the page width tall (baseline-01): much shorter than a full-bleed hero. */
		min-height: clamp(280px, 29vw, 440px);
		display: flex;
		align-items: flex-start;
		overflow: hidden;
		background: var(--deep);
		color: var(--clay);
	}

	.ground img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 60% 30%;
	}
	/* Baseline-phase parallax: the band photo drifts gently inside the band as
	   the section crosses the viewport (slight oversize keeps the edges covered).
	   Scroll-driven CSS (no JS), named view timeline on the section; browsers
	   without animation-timeline keep the photo static, and reduced-motion keeps
	   it still (block below). */
	@keyframes band-photo-parallax {
		from { transform: scale(1.14) translate3d(0, 3%, 0); }
		to { transform: scale(1.14) translate3d(0, -3%, 0); }
	}
	@supports (animation-timeline: view()) {
		@media (prefers-reduced-motion: no-preference) {
			.photo {
				view-timeline-name: --photoband;
			}
			.ground img {
				animation: band-photo-parallax linear both;
				animation-timeline: --photoband;
				animation-range: cover 0% cover 100%;
			}
		}
	}
	@media (prefers-reduced-motion: reduce) {
		@supports (animation-timeline: view()) {
			.ground img {
				animation: none;
			}
		}
	}
	.ground {
		position: absolute;
		inset: 0;
		z-index: -2;
		background:
			radial-gradient(60% 80% at 80% 30%, rgba(245, 136, 81, 0.55) 0%, rgba(245, 136, 81, 0) 60%),
			linear-gradient(120deg, #0c6470 0%, var(--mid) 45%, var(--deep) 100%);
	}
	/* Soft scrim only over the top-left where the copy sits, so the photo stays bright as in the reference. */
	.photo::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background: linear-gradient(
			115deg,
			rgba(0, 20, 49, 0.72) 0%,
			rgba(0, 20, 49, 0.38) 42%,
			rgba(0, 20, 49, 0) 68%
		);
	}
	/* Phones: the reference band is a short strip (about 200px at 390), copy bottom-left. */
	@media (max-width: 800px) {
		.photo {
			min-height: 280px;
			/* Phones: short strip, copy bottom-left as in the 390 frame. */
			align-items: flex-end;
		}
		/* Phones: let the photo read as the band, with a bottom scrim behind the copy only. */
		.photo::before {
			background: linear-gradient(0deg, rgba(0, 20, 49, 0.9) 0%, rgba(0, 20, 49, 0.45) 45%, rgba(0, 20, 49, 0.05) 100%);
		}
		.inner {
			padding: 28px 20px 22px;
			gap: 12px;
		}
		h2 {
			font-size: 24px;
			margin: 0 0 8px;
		}
		.copy p {
			font-size: 12px;
			line-height: 1.5;
			max-width: 34ch;
		}
	}

	

	.inner {
		position: relative;
		width: 100%;
		max-width: none;
		margin: 0;
		padding: clamp(36px, 4.5vw, 64px) clamp(20px, 5vw, 72px) clamp(48px, 6vw, 88px);
		display: grid;
		gap: clamp(20px, 2.4vw, 32px);
		justify-items: start;
	}

	h2 {
		margin: 0 0 10px;
		font-weight: 500;
		font-size: clamp(28px, 4.4vw, 62px);
		line-height: 1.08;
		letter-spacing: -0.015em;
		max-width: 14ch;
	}
	.copy p {
		margin: 0;
		max-width: 40ch;
		font-size: clamp(15px, 1.2vw, 17px);
		line-height: 1.55;
		color: var(--clay);
	}

</style>
