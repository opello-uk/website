<script lang="ts">
	import { resolve } from '$app/paths';
	import { homeCopy, langHref, type Lang } from '#lib/studio/i18n';
	// "Your world. Your freedom." banner, copy from the baseline deck (baseline-03). The baseline line
	// "across multiple currencies" is left out: multi-currency holding is out of MLP1 scope (2026-11-18).
	let { lang = 'en' }: { lang?: 'en' | Lang } = $props();
	const c = $derived(homeCopy[lang]);
	import banner from '#lib/assets/studio/banner.jpg';
	import banner2x from '#lib/assets/studio/banner@2x.jpg';

</script>

<section class="banner" aria-labelledby="banner-title">
	<div class="card">
		<div class="art">
			<!-- Placeholder photo; update alt with the licensed replacement -->
			<img src={banner} srcset="{banner} 1x, {banner2x} 2x" alt={c.bannerAlt} width="900" height="600" decoding="async" loading="lazy" />
		</div>
		<!-- Outside .art so the tag is not washed out by the faded photo on phones -->

		<div class="copy">
			<h2 id="banner-title">{c.bannerTitle1}<br />{c.bannerTitle2}</h2>
			<p>
				{c.bannerBody}
			</p>
		</div>

		<a class="cta" href={resolve(langHref(lang, '/studio/open-account/') as '/')}>
			<span>{c.bannerCta}</span>
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

	/* Photo on the right, starting about 46% in as in the reference crop, fading into the navy copy panel. */
	.art {
		position: absolute;
		inset: 0 0 0 auto;
		width: 54%;
		overflow: hidden;
		mask-image: linear-gradient(90deg, transparent 0%, #000 40%);
		-webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 40%);
	}
	.art img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	/* Baseline-phase parallax: the banner photo drifts gently inside its clipped
	   panel as the section crosses the viewport (slight oversize keeps the edges
	   covered). Scroll-driven CSS (no JS), named view timeline on the section;
	   browsers without animation-timeline keep the photo static, and
	   reduced-motion keeps it still (block below). */
	@keyframes banner-photo-parallax {
		from { transform: scale(1.12) translate3d(0, 2.5%, 0); }
		to { transform: scale(1.12) translate3d(0, -2.5%, 0); }
	}
	@supports (animation-timeline: view()) {
		@media (prefers-reduced-motion: no-preference) {
			.banner {
				view-timeline-name: --banner;
			}
			.art img {
				animation: banner-photo-parallax linear both;
				animation-timeline: --banner;
				animation-range: cover 0% cover 100%;
			}
		}
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
		/* Navy outline: the pill sits on the photo banner, where peach alone samples 2.75-2.98:1 (WCAG 1.4.11 wants 3:1).
		   The global peach box-shadow stays on underneath, so the ring keeps its two-tone look. */
		outline: 2px solid var(--deep);
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
		/* Reference band on phones is a short strip: small headline, short copy, pill bottom right. */
		.card {
			padding: 44px 18px 64px;
			min-height: 0;
		}
		h2 {
			font-size: 17px;
			margin-bottom: 8px;
		}
		.copy p {
			font-size: 12px;
			line-height: 1.45;
			max-width: 24ch;
		}
		
		.cta {
			position: absolute;
			right: 14px;
			bottom: 14px;
			justify-self: auto;
			min-height: 44px;
			padding: 10px 18px;
			font-size: 12px;
		}
		.art {
			width: 100%;
			opacity: 0.7;
			mask-image: none;
			-webkit-mask-image: none;
		}
		/* Navy scrim under the copy so the peach headline and body stay readable over the photo.
		   The headline sits at the top of the strip, so the top is dark too. */
		.art::after {
			content: '';
			position: absolute;
			inset: 0;
			background: linear-gradient(
				180deg,
				rgba(0, 20, 49, 0.82) 0%,
				rgba(0, 20, 49, 0.78) 50%,
				rgba(0, 20, 49, 0.9) 100%
			);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cta,
		.cta svg {
			transition: none;
		}
		@supports (animation-timeline: view()) {
			.art img {
				animation: none;
			}
		}
	}
</style>
