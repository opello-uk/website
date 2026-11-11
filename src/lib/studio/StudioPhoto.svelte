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

		<a class="cta" href="#photo-title">
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
	.ph-label {
		position: absolute;
		right: 20px;
		bottom: 16px;
		font-size: 10px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--clay);
		opacity: 0.85;
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

	.cta {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 10px 16px;
		border-radius: 999px;
		border: 1px solid var(--clay);
		color: var(--clay);
		font-size: 13px;
		text-decoration: none;
		transition: background-color 220ms var(--ease), color 220ms var(--ease);
	}
	.cta:hover {
		background: var(--clay);
		color: var(--deep);
	}
	.cta:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
	}
	.cta svg {
		transition: transform 220ms var(--ease);
	}
	.cta:hover svg {
		transform: translateX(2px);
	}

	@media (prefers-reduced-motion: reduce) {
		.cta,
		.cta svg {
			transition: none;
		}
	}
</style>
