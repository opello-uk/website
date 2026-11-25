<script lang="ts">
	import { calcCopy, type Lang } from '#lib/studio/i18n';

	// Deck principle 3 (website-structure deck v18, slide 6): "Show the full cost before
	// sign-up — cost calculator in the first screen". Sits on the fees page, worked from
	// the published fee schedule on that page (sending money outside the UK: fixed £15
	// plus an FX fee of 1.00%). GBP only (MLP1). No exchange-rate estimate is shown: we
	// do not publish rates, the app shows the rate before a transfer is confirmed.
	// The figures come from the fee schedule source note, which is itself pending
	// sign-off; the visible pending marker follows the studio's placeholder convention.
	let { lang = 'en' }: { lang?: 'en' | Lang } = $props();
	const c = $derived(calcCopy[lang]);

	let amount = $state(1000);
	const FIXED = 15;
	const FX = 0.01;
	const fmt = $derived(new Intl.NumberFormat(c.locale, { style: 'currency', currency: 'GBP' }));
	const fx = $derived(amount >= 0 && Number.isFinite(amount) ? amount * FX : null);
	const total = $derived(fx === null ? null : FIXED + fx);
</script>

<section class="calc" aria-labelledby="calc-h">
	<div class="copy">
		<h2 id="calc-h">{c.h}</h2>
		<p class="lede">{c.lede}</p>
		<label for="calc-amt">{c.amountLabel}</label>
		<input id="calc-amt" type="number" inputmode="decimal" min="0" step="1" bind:value={amount} dir="ltr" />
		<p class="note">{c.note}</p>
	</div>
	<dl class="rows" aria-live="polite">
		<div class="row"><dt>{c.fixed}</dt><dd>{fmt.format(FIXED)}</dd></div>
		<div class="row"><dt>{c.fx}</dt><dd>{fx === null ? '—' : fmt.format(fx)}</dd></div>
		<div class="row total"><dt>{c.total}</dt><dd>{total === null ? '—' : fmt.format(total)}</dd></div>
	</dl>
</section>

<style>
	.calc {
		margin-top: 28px;
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
		gap: clamp(20px, 3vw, 40px);
		background: var(--clay);
		color: var(--deep);
		border-radius: 24px;
		padding: clamp(24px, 3vw, 36px);
	}
	h2 {
		margin: 0 0 10px;
		font-size: 1.5rem;
		font-weight: 600;
		letter-spacing: -0.01em;
	}
	.lede {
		margin: 0 0 18px;
		font-size: 0.97rem;
		line-height: 1.6;
		opacity: 0.85;
		max-width: 46ch;
	}
	label {
		display: block;
		font-size: 0.85rem;
		font-weight: 600;
		margin-bottom: 8px;
	}
	input {
		width: 100%;
		max-width: 220px;
		padding: 12px 16px;
		font: inherit;
		font-size: 1.05rem;
		color: var(--deep);
		background: #ffffff;
		border: 1px solid rgba(0, 20, 49, 0.25);
		border-radius: 12px;
	}
	input:focus-visible {
		outline: 2px solid var(--deep);
		outline-offset: 2px;
	}
	.note {
		margin: 14px 0 0;
		font-size: 0.8rem;
		line-height: 1.5;
		opacity: 0.7;
		max-width: 46ch;
	}
	.rows {
		margin: 0;
		align-self: center;
		display: grid;
		gap: 0;
	}
	.row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 16px;
		padding: 14px 2px;
		border-bottom: 1px solid rgba(0, 20, 49, 0.14);
	}
	.row:first-child {
		border-top: 1px solid rgba(0, 20, 49, 0.14);
	}
	.row dt {
		font-size: 0.95rem;
		opacity: 0.85;
	}
	.row dd {
		margin: 0;
		font-size: 1.05rem;
		font-weight: 600;
		font-variant-numeric: tabular-nums;
		/* Fee values align to the reading side in RTL (same rule as the deck fee rows). */
		text-align: end;
	}
	.row.total dt {
		font-weight: 600;
		opacity: 1;
	}
	.row.total dd {
		font-size: 1.3rem;
		color: #c4561f;
	}
	@media (max-width: 720px) {
		.calc {
			grid-template-columns: minmax(0, 1fr);
			gap: 20px;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.calc { transition: none; }
	}
</style>
