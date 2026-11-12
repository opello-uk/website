<script lang="ts">
	import banner from '#lib/assets/studio/banner.jpg';
	// "Your world. Your freedom." navy banner. Copy is placeholder from the deck; confirm before launch.
</script>

<section class="banner" aria-labelledby="banner-title">
	<div class="card">
		<div class="art">
			<img src={banner} alt="" decoding="async" />
		</div>
		<!-- Outside .art so the tag is not washed out by the faded photo on phones -->
		<span class="ph-label">Placeholder photo</span>

		<div class="copy">
			<!-- Placeholder copy: confirm before launch -->
			<h2 id="banner-title">Your world.<br />Your freedom.</h2>
			<p>
				Everything you need to move through your day, with the control to make it yours.
			</p>
		</div>

		<a class="cta" href="#banner-title">
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
	.banner {
		background: var(--clay);
		color: var(--deep);
		padding: clamp(40px, 5vw, 72px) clamp(20px, 4vw, 56px);
	}

	.card {
		position: relative;
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr) auto;
		align-items: center;
		gap: clamp(24px, 4vw, 64px);
		max-width: 1320px;
		margin: 0 auto;
		padding: clamp(28px, 4vw, 64px) clamp(32px, 6vw, 88px);
		border-radius: 24px;
		overflow: hidden;
		background:
			radial-gradient(circle at 0% 0%, rgba(214, 128, 88, 0.55) 0%, rgba(214, 128, 88, 0) 38%),
			linear-gradient(100deg, var(--deep) 0%, var(--deep) 45%, var(--mid) 100%);
		color: var(--clay);
	}

	/* Photo on the right, fading into the navy copy panel. */
	.art {
		position: absolute;
		inset: 0 0 0 auto;
		width: 46%;
		overflow: hidden;
		mask-image: linear-gradient(90deg, transparent 0%, #000 45%);
		-webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 45%);
	}
	.art img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.ph-label {
		position: absolute;
		right: 16px;
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

	.copy {
		position: relative;
		z-index: 1;
	}
	h2 {
		margin: 0 0 14px;
		font-weight: 500;
		color: var(--peach);
		font-size: clamp(26px, 3.4vw, 48px);
		line-height: 1.06;
		letter-spacing: -0.01em;
	}
	.copy p {
		margin: 0;
		max-width: 40ch;
		font-size: clamp(15px, 1.2vw, 17px);
		line-height: 1.55;
		color: var(--muted);
	}

	/* Desktop: the pill sits low on the right over the photo, as in the Figma banner. */
	.cta {
		position: absolute;
		right: clamp(24px, 2.6vw, 38px);
		bottom: clamp(24px, 2.8vw, 40px);
		z-index: 1;
		justify-self: end;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		min-height: 44px;
		box-sizing: border-box;
		padding: 10px 22px;
		border-radius: 999px;
		border: 1px solid var(--clay);
		background: var(--clay);
		color: var(--deep);
		font-size: 13px;
		text-decoration: none;
		white-space: nowrap;
		transition:
			background-color 220ms var(--ease),
			color 220ms var(--ease);
	}
	.cta:hover {
		background: var(--peach);
		border-color: var(--peach);
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

	@media (max-width: 800px) {
		.card {
			grid-template-columns: 1fr;
		}
		.cta {
			position: relative;
			right: auto;
			bottom: auto;
			justify-self: start;
		}
		.art {
			width: 100%;
			opacity: 0.7;
			mask-image: none;
			-webkit-mask-image: none;
		}
		/* Navy scrim under the copy so the peach headline and body stay readable over the photo. */
		.art::after {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(
				180deg,
				rgba(0, 20, 49, 0.1) 0%,
				rgba(0, 20, 49, 0.55) 45%,
				rgba(0, 20, 49, 0.9) 100%
			);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cta,
		.cta svg {
			transition: none;
		}
	}
</style>
