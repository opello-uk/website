<script lang="ts">
	import band from '#lib/assets/studio/band.jpg';
	// "A place where you belong." full-bleed photo band. Copy matches the baseline deck (baseline-02); the photo is a placeholder ground until licensed imagery is supplied.
</script>

<section class="photo" aria-labelledby="photo-title">
	<div class="ground">
		<!-- Placeholder photo; update alt with the licensed replacement -->
		<img src={band} alt="Two friends laughing together on a sunny beach" decoding="async" loading="lazy" />
	</div>

	<div class="inner">
		<div class="copy">
			<h2 id="photo-title">A place where<br />you belong.</h2>
			<p>Whatever your background or starting point, Opello believes access to financial services should be more inclusive.</p>
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
