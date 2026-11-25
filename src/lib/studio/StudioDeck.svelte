<script lang="ts">
	// Website-structure deck v18 (NIAN Capital, Nazanin, 11 Nov 2026), slide 8:
	// the launch homepage takes visitors from the promise, to proof that their money
	// is safe, to sign-up, in eight sections. This component carries the sections the
	// baseline layout did not already cover: 2 trust signals, 3 who it's for,
	// 5 how it works, 7 fees summary, 8 questions and get started.
	// (1 top banner = StudioHero, 4 what you get = StudioProducts, 6 safety deep-dive
	// gets its own page and section next run.)
	// Copy per language lives in deckCopy (i18n); the English strings moved there
	// verbatim on 2026-11-25 so the ar/tr homepages carry the same deck arc. The
	// licence/safeguarding wording is a design slot pending compliance sign-off in
	// every language (see the deckCopy note).
	// Internal links resolve to the language twin via langHref (the three situation
	// pages, fees-and-charges and open-account all have ar/tr twins).
	import { deckCopy, homeCopy, langHref } from '#lib/studio/i18n';
	import { resolve } from '$app/paths';

	let { lang }: { lang?: 'en' | 'ar' | 'tr' } = $props();
	const c = $derived(deckCopy[lang ?? 'en']);
	const local = $derived((href: string) => resolve(langHref(lang ?? 'en', href) as '/'));
	const cta = $derived(homeCopy[lang ?? 'en'].heroCta);
</script>

<!-- 2. Trust signals: proof of safety near the top (deck principle 4, Monzo benchmark).
     The licence/safeguarding wording is a design slot: it fills with confirmed
     compliance wording the moment sign-off lands (see sourceNotes in pages.ts). -->
<section class="deck trust" aria-label={c.trustAria}>
	<ul class="trust-grid">
		{#each c.trust as t (t.label)}
			<li>
				<strong>{t.label}</strong>
				<span>{t.note}</span>
			</li>
		{/each}
	</ul>
</section>

<!-- 3. Who it's for: three cards, one per situation, each to its own page
     (deck principle 2, GrabrFi benchmark). -->
<section class="deck who" aria-labelledby="who-h">
	<h2 id="who-h">{c.whoH}</h2>
	<p class="who-lede">{c.whoLede}</p>
	<div class="who-grid">
		{#each c.whoCards as s (s.href)}
			<a class="who-card" href={local(s.href)}>
				<strong>{s.label}</strong>
				<span>{s.note}</span>
				<span class="go" aria-hidden="true">→</span>
			</a>
		{/each}
	</div>
</section>

<!-- 5. How it works: three steps, eligibility first (deck principle 5). -->
<section class="deck how" aria-labelledby="how-h">
	<h2 id="how-h">{c.howH}</h2>
	<ol class="steps">
		{#each c.steps as s, i (s.label)}
			<li>
				<span class="step-n" aria-hidden="true">{i + 1}</span>
				<div>
					<strong>{s.label}</strong>
					<span>{s.note}</span>
				</div>
			</li>
		{/each}
	</ol>
</section>

<!-- 7. Fees summary: main fees in plain numbers, link to the Fees page
     (deck principle 3). Numbers fill when the fees schedule is confirmed. -->
<section class="deck fees" aria-labelledby="fees-h">
	<h2 id="fees-h">{c.feesH}</h2>
	<dl class="fee-list">
		{#each c.fees as f (f.k)}
			<div class="fee-row">
				<dt>{f.k}</dt>
				<dd>{f.v}</dd>
			</div>
		{/each}
	</dl>
	<a class="fees-link" href={local('/studio/fees-and-charges/')}>{c.feesLink}</a>
</section>

<!-- 8. Questions, then a final get started (Nsave/GrabrFi benchmark). -->
<section class="deck faq" aria-labelledby="faq-h">
	<h2 id="faq-h">{c.faqH}</h2>
	{#each c.faq as q (q.q)}
		<details class="q">
			<summary>{q.q}</summary>
			<p>{q.a}</p>
		</details>
	{/each}
	<div class="final-cta">
		<a class="cta-pill" href={local('/studio/open-account/')}>{cta}</a>
	</div>
</section>

<style>
	.deck {
		padding: clamp(48px, 7vw, 96px) clamp(20px, 4vw, 56px);
		color: var(--clay);
	}
	.deck h2 {
		font-size: clamp(28px, 4vw, 44px);
		font-weight: 400;
		letter-spacing: -0.01em;
		margin: 0 0 18px;
	}
	/* 2. Trust signals: white icon-tile language from the baseline. */
	.trust {
		padding-top: clamp(24px, 3vw, 40px);
	}
	/* The hero's tilted phones hang into this section (baseline look). Reserve
	   room so the tiles start below the phone overhang instead of under it
	   (measured: ~132px overhang at 1440, ~24px at 900, none on mobile). */
	@media (min-width: 720px) {
		.trust {
			padding-top: 72px;
		}
	}
	@media (min-width: 1100px) {
		.trust {
			padding-top: 200px;
		}
	}
	.trust-grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
	}
	.trust-grid li {
		background: #ffffff;
		color: var(--deep);
		border-radius: 20px;
		padding: 20px 18px;
		display: grid;
		gap: 6px;
	}
	.trust-grid strong {
		font-size: 15px;
	}
	.trust-grid span {
		font-size: 13px;
		opacity: 0.72;
		line-height: 1.45;
	}
	@media (max-width: 900px) {
		.trust-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 480px) {
		.trust-grid {
			grid-template-columns: 1fr;
		}
	}
	/* 3. Who it's for cards: the rounded photo-card language, tinted clay. */
	.who-lede {
		margin: 0 0 22px;
		opacity: 0.78;
		max-width: 46ch;
	}
	.who-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
	}
	.who-card {
		position: relative;
		display: grid;
		align-content: start;
		gap: 8px;
		background: var(--clay);
		color: var(--deep);
		border-radius: 24px;
		padding: 24px 22px;
		text-decoration: none;
		transition: transform 200ms var(--ease);
	}
	@media (hover: hover) and (pointer: fine) {
		.who-card:hover {
			transform: translateY(-2px);
		}
	}
	.who-card strong {
		font-size: 18px;
		padding-inline-end: 32px;
	}
	.who-card span {
		font-size: 14px;
		line-height: 1.5;
		opacity: 0.78;
	}
	.who-card .go {
		position: absolute;
		top: 20px;
		inset-inline-end: 20px;
		color: var(--peach);
		font-size: 18px;
		opacity: 1;
	}
	/* RTL mirrors the direction arrow so it always points "onward". */
	[dir='rtl'] .who-card .go {
		transform: scaleX(-1);
	}
	@media (max-width: 900px) {
		.who-grid {
			grid-template-columns: 1fr;
		}
	}
	/* 5. How it works. */
	.steps {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
	}
	.steps li {
		display: flex;
		gap: 14px;
		align-items: flex-start;
	}
	.step-n {
		flex: none;
		width: 40px;
		height: 40px;
		border-radius: 999px;
		background: var(--peach);
		color: var(--deep);
		display: grid;
		place-items: center;
		font-size: 16px;
		font-weight: 600;
	}
	.steps strong {
		display: block;
		font-size: 16px;
		margin-bottom: 4px;
	}
	.steps span {
		font-size: 14px;
		opacity: 0.75;
		line-height: 1.5;
	}
	@media (max-width: 720px) {
		.steps {
			grid-template-columns: 1fr;
		}
	}
	/* 7. Fees summary: the peach-rule tiles from the agreement standard, softened for web. */
	.fee-list {
		margin: 0 0 18px;
		border-top: 1px solid rgb(233 228 224 / 0.25);
	}
	.fee-row {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		padding: 14px 0;
		border-bottom: 1px solid rgb(233 228 224 / 0.25);
	}
	.fee-row dt {
		font-size: 15px;
	}
	.fee-row dd {
		margin: 0;
		font-size: 15px;
		font-weight: 600;
		color: var(--peach);
		text-align: end;
	}
	.fees-link {
		color: var(--peach);
		font-size: 14px;
		text-decoration-thickness: 1px;
		text-underline-offset: 3px;
	}
	/* 8. Questions: JS-free disclosure, matching the no-JS nav principle. */
	.q {
		border-bottom: 1px solid rgb(233 228 224 / 0.25);
	}
	.q summary {
		cursor: pointer;
		padding: 16px 0;
		font-size: 16px;
		list-style: none;
		display: flex;
		justify-content: space-between;
		gap: 12px;
	}
	.q summary::-webkit-details-marker {
		display: none;
	}
	.q summary::after {
		content: '+';
		color: var(--peach);
		font-size: 20px;
		line-height: 1;
	}
	.q[open] summary::after {
		content: '−';
	}
	.q p {
		margin: 0 0 16px;
		font-size: 14px;
		line-height: 1.6;
		opacity: 0.8;
		max-width: 62ch;
	}
	.final-cta {
		margin-top: 36px;
	}
	.cta-pill {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		background: var(--peach);
		color: var(--deep);
		border-radius: 999px;
		padding: 14px 26px;
		font-size: 14px;
		font-weight: 600;
		text-decoration: none;
	}
	@media (prefers-reduced-motion: reduce) {
		.who-card {
			transition: none;
		}
	}
</style>
