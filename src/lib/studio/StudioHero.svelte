<script lang="ts">
	// Hero for the unlisted studio build. All copy is placeholder until confirmed.
</script>

<section class="hero" aria-labelledby="hero-title">
	<!-- Decorative swoosh arc, as in the reference hero -->
	<svg class="swoosh" viewBox="0 0 1000 800" preserveAspectRatio="none" aria-hidden="true" focusable="false">
		<defs>
			<linearGradient id="swoosh-fill" gradientUnits="userSpaceOnUse" x1="0" y1="800" x2="1000" y2="0">
				<stop offset="0" stop-color="#f58851" stop-opacity="0.15" />
				<stop offset="0.5" stop-color="#f58851" stop-opacity="0.32" />
				<stop offset="1" stop-color="#f58851" stop-opacity="0.22" />
			</linearGradient>
		</defs>
		<path d="M40 820 C 180 330, 520 -10, 1000 210" fill="none" stroke="url(#swoosh-fill)" stroke-width="150" stroke-linecap="round" />
	</svg>

	<div class="copy">
		<h1 id="hero-title">
			<span class="line-1">Unlock</span>
			<span class="line-2">your life.</span>
		</h1>
		<!-- Placeholder copy: confirm before launch -->
		<p class="sub">For different lives, different circumstances and different money goals.</p>
		<a class="cta" href="#personal">
			<span>Open your account</span>
			<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
				<path
					d="M5 12h13M13 6l6 6-6 6"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</a>
	</div>

	<!-- Placeholder app screens: layout only, no real product data -->
	<div class="screens" aria-hidden="true">
		<div class="phone phone-back">
			<div class="screen">
				<span class="ph-label">Placeholder screen</span>
				<span class="bar bar-long"></span>
				<span class="bar"></span>
				<span class="block"></span>
			</div>
		</div>
		<div class="phone phone-front">
			<div class="screen">
				<span class="ph-label">Placeholder screen</span>
				<span class="block block-tall"></span>
				<span class="bar"></span>
				<span class="bar bar-short"></span>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		isolation: isolate;
		overflow: hidden;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		align-items: center;
		gap: clamp(24px, 4vw, 64px);
		min-height: clamp(520px, 62svh, 680px);
		padding: clamp(56px, 8vw, 104px) clamp(20px, 4vw, 56px);
		background: var(--deep);
	}

	/* Swoosh arc behind the copy and phones */
	.swoosh {
		position: absolute;
		z-index: -1;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	h1 {
		margin: 0;
		font-weight: 300;
		font-size: clamp(48px, 7.2vw, 104px);
		line-height: 0.96;
		letter-spacing: -0.02em;
	}
	.line-1 {
		display: block;
		color: var(--peach);
	}
	.line-2 {
		display: block;
		color: var(--clay);
	}

	.sub {
		margin: 24px 0 0;
		max-width: 34ch;
		font-size: clamp(16px, 1.3vw, 19px);
		line-height: 1.5;
		color: var(--muted);
	}

	.cta {
		margin-top: 32px;
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 14px 24px;
		border-radius: 999px;
		background: var(--peach);
		color: var(--deep);
		font-size: 15px;
		font-weight: 500;
		text-decoration: none;
		transition:
			transform 220ms var(--ease),
			background-color 220ms var(--ease);
	}
	.cta:hover {
		transform: translateY(-1px);
		background: #ff9a68;
	}
	.cta svg {
		transition: transform 220ms var(--ease);
	}
	.cta:hover svg {
		transform: translateX(3px);
	}

	/* Placeholder phones */
	.screens {
		position: relative;
		height: clamp(420px, 52svh, 560px);
	}
	.phone {
		position: absolute;
		width: clamp(180px, 20vw, 248px);
		aspect-ratio: 9 / 19.5;
		border-radius: 36px;
		padding: 10px;
		background: #0b1d3a;
		border: 1px solid rgba(233, 228, 224, 0.14);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
	}
	.phone-back {
		right: 34%;
		top: 2%;
		rotate: -6deg;
	}
	.phone-front {
		right: 4%;
		top: 14%;
		rotate: 4deg;
	}
	.screen {
		position: relative;
		height: 100%;
		border-radius: 28px;
		background: var(--clay);
		padding: 22px 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		overflow: hidden;
	}
	.ph-label {
		font-size: 9px;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--mushroom);
		margin-bottom: 6px;
	}
	.bar {
		height: 10px;
		width: 60%;
		border-radius: 999px;
		background: rgba(0, 20, 49, 0.14);
	}
	.bar-long {
		width: 85%;
	}
	.bar-short {
		width: 35%;
	}
	.block {
		height: 64px;
		border-radius: 14px;
		background: var(--deep);
		opacity: 0.9;
	}
	.block-tall {
		height: 130px;
		background: var(--mid);
	}

	@media (max-width: 800px) {
		.hero {
			grid-template-columns: 1fr;
			min-height: 0;
		}
		.screens {
			height: 340px;
			order: 2;
		}
		.phone {
			width: 164px;
		}
		.phone-back {
			right: 50%;
			top: 4%;
		}
		.phone-front {
			right: 4%;
			top: 16%;
		}
		.swoosh {
			opacity: 0.8;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cta,
		.cta svg {
			transition: none;
		}
	}
</style>
