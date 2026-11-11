<script lang="ts">
	// Hero for the unlisted studio build. All copy is placeholder until confirmed.
</script>

<section class="hero" aria-labelledby="hero-title">
	<!-- Decorative swoosh arc, as in the reference hero -->
	<svg class="swoosh" viewBox="0 0 1000 800" preserveAspectRatio="none" aria-hidden="true" focusable="false">
		<defs>
			<linearGradient id="swoosh-fill" gradientUnits="userSpaceOnUse" x1="0" y1="800" x2="1000" y2="0">
				<stop offset="0" stop-color="#f9b48c" />
				<stop offset="0.5" stop-color="#f7a37a" />
				<stop offset="1" stop-color="#f9b48c" />
			</linearGradient>
		</defs>
		<!-- Desktop: sweeps up behind the phones, clear of the copy column -->
		<path class="arc-desk" d="M430 820 C 520 560, 700 280, 1000 200" fill="none" stroke="url(#swoosh-fill)" stroke-width="96" stroke-linecap="round" />
		<!-- Mobile: low band under the CTA, behind the stacked phones -->
		<path class="arc-mob" d="M-40 900 C 200 740, 620 660, 1040 560" fill="none" stroke="url(#swoosh-fill)" stroke-width="90" stroke-linecap="round" />
	</svg>

	<div class="copy">
		<h1 id="hero-title">
			<span class="line-1">Unlock</span>
			<span class="line-2">your life.</span>
		</h1>
		<!-- Placeholder copy: confirm before launch -->
		<p class="sub">For different lives, different circumstances and different starting points.</p>
		<a class="cta" href="#personal">
			<span>Open account with us</span>
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

	<!-- Example app screens: layout and sample data only, not a live product -->
	<div class="screens" aria-hidden="true">
		<div class="phone phone-back">
			<div class="screen send">
				<div class="status"><span>9:41</span><span class="sig"></span></div>
				<div class="nav-row"><span class="back">&#8249;</span><span class="ttl">Send money</span></div>
				<div class="field">
					<span class="lbl">To</span>
					<div class="payee"><span class="av">JS</span><div><b>Jane Smith</b><small>00-00-00 · 11110000</small></div><span class="chev">&#8250;</span></div>
				</div>
				<div class="field">
					<span class="lbl">Amount</span>
					<div class="amount">£250</div>
				</div>
				<div class="chips"><span>£50</span><span>£100</span><span class="on">£250</span><span>£</span></div>
				<div class="field">
					<span class="lbl">Title</span>
					<div class="input">Groceries</div>
				</div>
				<div class="send-btn">Send money</div>
				<div class="tabs"><span class="on">Home</span><span>Transfer</span><span>Cards</span><span>More</span></div>
			</div>
		</div>
		<div class="phone phone-front">
			<div class="screen home">
				<div class="status"><span>9:41</span><span class="sig"></span></div>
				<div class="hello"><span>Good morning,<br />Omar</span><span class="pfp"></span></div>
				<div class="bal-label">Total balance · Personal GBP</div>
				<div class="bal">£8,420.50</div>
				<div class="card-vis"><span class="logo">opello</span><span class="num">•••• 1111</span></div>
				<div class="quick"><span><i></i>Transfer</span><span><i></i>Pay</span><span><i></i>Add money</span><span><i></i>More</span></div>
				<div class="recent">Recent transactions</div>
				<div class="tx"><span class="dot"></span><div><b>Coffee</b><small>Café · today</small></div><em>-3.00</em></div>
				<div class="tx"><span class="dot dot-b"></span><div><b>Transport</b><small>Travel · today</small></div><em>-2.50</em></div>
				<div class="tabs"><span class="on">Home</span><span>Transfer</span><span>Cards</span><span>More</span></div>
			</div>
		</div>
	</div>
	<p class="example-note" aria-hidden="true">Example app screens with sample data.</p>
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

	.arc-mob {
		display: none;
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
		font-style: italic;
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
		font-style: italic;
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

	/* Example phones */
	.screens {
		position: relative;
		height: clamp(420px, 52svh, 560px);
	}
	.phone {
		position: absolute;
		width: clamp(180px, 20vw, 248px);
		aspect-ratio: 9 / 19.5;
		border-radius: 36px;
		padding: 9px;
		background: linear-gradient(160deg, #3a3f49, #14171f 60%);
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
		padding: 12px 14px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		overflow: hidden;
		color: var(--deep);
		font-size: 10px;
	}
	.status {
		display: flex;
		justify-content: space-between;
		font-size: 9px;
		font-weight: 600;
		padding: 0 6px;
	}
	.sig {
		width: 22px;
		height: 8px;
		border-radius: 2px;
		background: linear-gradient(90deg, currentColor 60%, transparent 60%);
		opacity: 0.7;
	}
	.nav-row {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		margin-top: 4px;
	}
	.back {
		position: absolute;
		left: 0;
		font-size: 18px;
	}
	.ttl {
		font-size: 11px;
		font-weight: 600;
	}
	.field {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.lbl {
		font-size: 8.5px;
		color: rgba(0, 20, 49, 0.6);
	}
	.payee,
	.input {
		background: #fff;
		border-radius: 12px;
		padding: 8px 10px;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	.payee div {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.payee b {
		font-size: 10px;
		font-weight: 600;
	}
	.payee small,
	.tx small {
		font-size: 7.5px;
		color: rgba(0, 20, 49, 0.55);
	}
	.av {
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: var(--peach);
		display: grid;
		place-items: center;
		font-size: 8px;
		font-weight: 700;
	}
	.chev {
		color: rgba(0, 20, 49, 0.5);
	}
	.amount {
		background: #fff;
		border-radius: 12px;
		padding: 8px 10px;
		font-size: 18px;
		font-weight: 500;
	}
	.chips {
		display: flex;
		gap: 5px;
	}
	.chips span {
		flex: 1;
		text-align: center;
		border-radius: 999px;
		padding: 4px 0;
		background: #fff;
		font-size: 8px;
	}
	.chips .on {
		background: var(--peach);
		font-weight: 700;
	}
	.send-btn {
		margin-top: 4px;
		border-radius: 999px;
		background: var(--peach);
		text-align: center;
		padding: 9px 0;
		font-size: 10px;
		font-weight: 600;
	}
	.home {
		background: var(--deep);
		color: var(--clay);
	}
	.hello {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 11px;
		line-height: 1.25;
		margin-top: 4px;
	}
	.pfp {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--peach), var(--mid));
	}
	.bal-label {
		font-size: 7.5px;
		opacity: 0.7;
	}
	.bal {
		font-size: 19px;
		font-weight: 500;
		margin-top: -4px;
	}
	.card-vis {
		position: relative;
		height: 96px;
		border-radius: 14px;
		background: linear-gradient(135deg, #17365f 0%, #0b1d3a 45%, #c96a3b 100%);
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.logo {
		font-size: 13px;
		color: var(--peach);
	}
	.num {
		font-size: 7px;
		opacity: 0.75;
	}
	.quick {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 6px;
		text-align: center;
		font-size: 7px;
	}
	.quick span {
		background: #fff;
		color: var(--deep);
		border-radius: 10px;
		padding: 6px 0 5px;
	}
	.quick i {
		display: block;
		width: 10px;
		height: 10px;
		margin: 0 auto 3px;
		border: 1.5px solid var(--peach);
		border-radius: 3px;
	}
	.recent {
		font-size: 8.5px;
		font-weight: 600;
	}
	.tx {
		display: flex;
		align-items: center;
		gap: 6px;
		background: #fff;
		border-radius: 10px;
		padding: 6px 8px;
		color: var(--deep);
	}
	.tx div {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.tx b {
		font-size: 8.5px;
		font-weight: 600;
	}
	.tx em {
		font-style: normal;
		font-size: 8.5px;
	}
	.dot {
		width: 14px;
		height: 14px;
		border-radius: 4px;
		background: var(--peach);
	}
	.dot-b {
		background: var(--mid);
	}
	.tabs {
		margin-top: auto;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		text-align: center;
		font-size: 7px;
		padding-top: 8px;
		border-top: 1px solid rgba(0, 20, 49, 0.12);
		opacity: 0.8;
	}
	.home .tabs {
		border-top-color: rgba(233, 228, 224, 0.15);
	}
	.tabs .on {
		color: var(--peach);
		font-weight: 700;
	}
	.example-note {
		position: absolute;
		left: clamp(20px, 4vw, 56px);
		bottom: 18px;
		margin: 0;
		font-size: 11px;
		color: var(--muted);
		opacity: 0.8;
	}

	@media (max-width: 800px) {
		.example-note {
			display: none;
		}
		.arc-desk {
			display: none;
		}
		.arc-mob {
			display: inline;
		}
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
	}

	/* Figma mobile: copy on the left, the two phones on the right at the top */
	@media (max-width: 560px) {
		.hero {
			grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
			align-items: start;
			gap: 0;
			padding: 40px 0 0 20px;
		}
		.copy {
			padding-top: 24px;
			padding-bottom: 40px;
		}
		h1 {
			font-size: 36px;
		}
		.sub {
			margin-top: 16px;
			font-size: 13px;
			line-height: 1.45;
			max-width: 20ch;
		}
		.cta {
			margin-top: 20px;
			padding: 9px 14px;
			font-size: 12px;
			gap: 6px;
		}
		.cta svg {
			width: 12px;
			height: 12px;
		}
		.screens {
			order: 0;
			grid-column: 2;
			grid-row: 1;
			height: 300px;
			margin-right: 0;
		}
		.phone {
			width: 118px;
			padding: 6px;
			border-radius: 28px;
		}
		.screen {
			border-radius: 22px;
			padding: 8px 8px;
			font-size: 8px;
		}
		.phone-back {
			right: 52%;
			top: 0;
		}
		.phone-front {
			right: 0;
			top: 34%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cta,
		.cta svg {
			transition: none;
		}
	}
</style>
