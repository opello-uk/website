<script lang="ts">
	import { resolve } from '$app/paths';
	import { homeCopy, langHref, type Lang } from '#lib/studio/i18n';
	// "Your money on your terms." split section. Copy matches the baseline deck (baseline-04).
	import split from '#lib/assets/studio/split.jpg';
	import splitW from '#lib/assets/studio/split.webp';
	import split2x from '#lib/assets/studio/split@2x.jpg';
	import split2xW from '#lib/assets/studio/split@2x.webp';

	// Generated placeholder photo until licensed photography is supplied.
	let { lang = 'en' }: { lang?: 'en' | Lang } = $props();
	const c = $derived(homeCopy[lang]);
</script>

<section class="split" aria-labelledby="split-title">
	<div class="media">
		<!-- Placeholder photo; update alt with the licensed replacement -->
		<picture><source type="image/webp" srcset="{splitW} 1x, {split2xW} 2x" /><img src={split} srcset="{split} 1x, {split2x} 2x" alt={c.splitAlt} width="900" height="600" decoding="async" loading="lazy" /></picture>
	</div>

	<div class="copy">
		<h2 id="split-title">{c.splitTitle}</h2>

		<div class="mid">
			<p>
				{c.splitIntro}
			</p>

			<ul class="ticks">
				{#each c.splitPoints as point (point)}
					<li>
						<span class="dot" aria-hidden="true">
							<svg viewBox="0 0 24 24" width="12" height="12" focusable="false">
								<path
									d="M5 12.5l4.2 4.2L19 7"
									fill="none"
									stroke="currentColor"
									stroke-width="2.6"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						<span>{point}</span>
					</li>
				{/each}
			</ul>
		</div>

		<a class="learn" href={resolve(langHref(lang, '/studio/open-account/') as '/')}>
			<span>{c.splitCta}</span>
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
	.split {
		display: grid;
		grid-template-columns: minmax(0, 1.31fr) minmax(0, 1fr);
		align-items: stretch;
		gap: clamp(32px, 5vw, 72px);
		background: var(--clay);
		color: var(--deep);
		padding: clamp(56px, 7vw, 96px) clamp(20px, 4vw, 56px);
	}

	.media img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 35% 50%;
	}
	.media {
		position: relative;
		aspect-ratio: 19 / 12;
		border-radius: 24px;
		overflow: hidden;
		background: linear-gradient(135deg, #0c6470 0%, #001431 60%, #f58851 140%);
	}
	

	h2 {
		margin: 0 0 16px;
		font-weight: 500;
		font-size: clamp(28px, 4.4vw, 63px);
		line-height: 1.08;
		letter-spacing: -0.01em;
		/* WCAG 1.4.12: long Turkish words (e.g. "koşullarınızda.") must not clip the narrow
		   split column when user text-spacing overrides force letter-spacing wider. */
		overflow-wrap: break-word;
	}
	/* Desktop: heading at the top, copy and ticks just under it, pill on the bottom edge (as the Figma). */
	.copy {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-self: stretch;
		gap: 0;
	}
	.mid {
		margin: 28px 0 auto;
	}
	.mid p {
		margin: 0 0 28px;
		max-width: 40ch;
		font-size: clamp(15px, 1.25vw, 18px);
		line-height: 1.5;
		color: var(--deep);
		opacity: 0.78;
	}

	.ticks {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 14px;
	}
	.ticks li {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: clamp(15px, 1.25vw, 18px);
	}
	/* Baseline shows a bare peach check, no circle behind it. */
	.ticks .dot {
		flex: none;
		display: grid;
		place-items: center;
		width: 22px;
		height: 22px;
		color: var(--peach);
	}
	.ticks .dot svg {
		width: 14px;
		height: 14px;
	}
	.ticks svg {
		display: block;
	}

	.learn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		min-height: 52px;
		box-sizing: border-box;
		padding: 14px 52px;
		border-radius: 999px;
		border: 1px solid var(--deep);
		color: var(--deep);
		font-size: 16px;
		align-self: flex-start;
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
		/* Navy outline here: the split ground is light clay (peach alone measures 1.95:1, WCAG 1.4.11 wants 3:1).
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

	/* Phone: photo and copy sit side by side, as in the Figma 390 frame. */
	@media (max-width: 800px) {
		.split {
			grid-template-columns: minmax(0, 1.14fr) minmax(0, 1fr);
			gap: 14px;
			align-items: stretch;
			padding: 48px 20px;
		}
		/* Phone photo fills the height of the copy column, so the two columns read as one planned block. */
		.media {
			aspect-ratio: auto;
			min-height: 260px;
		}
		.media img {
			object-position: 42% 40%;
		}
		h2 {
			font-size: 22px;
			margin-bottom: 10px;
		}
		/* Pin the copy block to the top on phones so heading, copy and ticks read as one column. */
		.copy {
			justify-content: flex-start;
			gap: 0;
		}
		.mid {
			margin: 0;
		}
		.mid p {
			font-size: 13px;
			line-height: 1.5;
			margin: 0 0 14px;
			opacity: 1;
		}
		.ticks {
			gap: 8px;
			margin-bottom: 16px;
		}
		.ticks li {
			font-size: 13px;
			align-items: flex-start;
		}
		.ticks .dot {
			width: 18px;
			height: 18px;
		}
		.learn {
			font-size: 12px;
			padding: 10px 14px;
		}
	}

	/* Very narrow phones: stack so the ticks read as single lines. */
	@media (max-width: 380px) {
		.split {
			grid-template-columns: 1fr;
			gap: 18px;
			padding: 44px 20px;
		}
		.media {
			min-height: 0;
			aspect-ratio: 4 / 3;
		}
		.ticks li {
			font-size: 14px;
		}
		.learn {
			font-size: 13px;
			padding: 12px 18px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.learn,
		.learn svg {
			transition: none;
		}
	}
</style>
