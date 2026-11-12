<script lang="ts">
	import band from '#lib/assets/studio/band.jpg';
	// "A place where you belong." full-bleed photo band. Copy is placeholder; the photo is a placeholder ground until licensed imagery is supplied.
</script>

<section class="photo" aria-labelledby="photo-title">
	<div class="ground">
		<img src={band} alt="" decoding="async" />
		<span class="ph-label">Placeholder photo</span>
	</div>

	<div class="inner">
		<!-- Placeholder copy: confirm before launch -->
		<div class="copy">
			<h2 id="photo-title">A place where you belong.</h2>
			<p>Placeholder line for the photo band. Confirm before launch.</p>
		</div>
	</div>
</section>

<style>
	.photo {
		position: relative;
		isolation: isolate;
		min-height: clamp(420px, 51vw, 740px);
		display: flex;
		align-items: flex-end;
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
	/* Scrim keeps the copy legible whatever photo replaces the placeholder. */
	.photo::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background: linear-gradient(90deg, rgba(0, 20, 49, 0.85) 0%, rgba(0, 20, 49, 0.35) 60%, rgba(0, 20, 49, 0) 100%);
	}
	/* Phones: the reference band is a short strip (about 200px at 390), copy bottom-left. */
	@media (max-width: 800px) {
		.photo {
			min-height: 210px;
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

	.ph-label {
		position: absolute;
		right: 20px;
		bottom: 16px;
		font-size: 10px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--clay);
		background: rgba(0, 20, 49, 0.62);
		padding: 4px 9px;
		border-radius: 999px;
		line-height: 1.2;
	}

	.inner {
		position: relative;
		width: 100%;
		max-width: none;
		margin: 0;
		padding: clamp(56px, 7vw, 96px) clamp(20px, 5vw, 72px) clamp(48px, 8vw, 120px);
		display: grid;
		gap: clamp(28px, 3vw, 40px);
		justify-items: start;
	}

	h2 {
		margin: 0 0 14px;
		font-weight: 500;
		font-size: clamp(28px, 4.6vw, 66px);
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
