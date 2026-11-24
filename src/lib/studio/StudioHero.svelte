<script lang="ts">
	import { resolve } from '$app/paths';
	import { homeCopy, langHref, type Lang } from '#lib/studio/i18n';
	// Hero rebuilt 1-for-1 against the high-res baseline. App screens use sample data.
	// Sample data in the phone mockups stays English on every language: it is
	// aria-hidden example content, not page copy.
	let { lang = 'en' }: { lang?: 'en' | Lang } = $props();
	const c = $derived(homeCopy[lang]);
</script>

<section class="hero" aria-labelledby="hero-title">
	<!-- Large soft gradient rings, bleeding off the right edge as in the baseline -->
	<div class="bg" aria-hidden="true">
		<svg class="rings" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
			<defs>
				<radialGradient id="ringA" cx="0.35" cy="0.3" r="0.75">
					<stop offset="0" stop-color="#a2543a" stop-opacity="0.9" />
					<stop offset="0.7" stop-color="#5a2f2a" stop-opacity="0.55" />
					<stop offset="1" stop-color="#2b1a20" stop-opacity="0" />
				</radialGradient>
				<radialGradient id="ringB" cx="0.6" cy="0.65" r="0.8">
					<stop offset="0" stop-color="#c26844" stop-opacity="0.55" />
					<stop offset="1" stop-color="#5a2f2a" stop-opacity="0" />
				</radialGradient>
			</defs>
			<circle class="ring ring-a" cx="620" cy="430" r="330" fill="none" stroke="url(#ringA)" stroke-width="150" />
			<circle class="ring ring-b" cx="900" cy="620" r="260" fill="none" stroke="url(#ringB)" stroke-width="120" />
		</svg>
	</div>

	<div class="inner">
		<div class="copy">
			<h1 id="hero-title">
				<span class="unlock">{c.heroUnlock}</span>
				<span class="life">{c.heroLife}</span>
			</h1>
			<p class="sub">{c.heroSub}</p>
			<a class="cta" href={resolve(langHref(lang, '/studio/open-account/') as '/')}>
				<span>{c.heroCta}</span>
				<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
					<path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
					<div class="tabs"><span class="on">Home</span><span>Send</span><span>Cards</span><span>More</span></div>
				</div>
			</div>
			<div class="phone phone-front">
				<div class="screen home">
					<div class="status"><span>9:41</span><span class="sig"></span></div>
					<div class="hello"><span>Good morning,<br />Omar</span><span class="pfp"></span></div>
					<div class="bal-label">Total balance · Personal GBP</div>
					<div class="bal">£8,420.50</div>
					<div class="card-vis"><span class="logo">opello</span><span class="num">•••• 1111</span></div>
					<div class="quick"><span><i></i>Send</span><span><i></i>Pay</span><span><i></i>Add</span><span><i></i>More</span></div>
					<div class="recent">Recent transactions</div>
					<div class="tx"><span class="dot"></span><div><b>Coffee</b><small>Café · today</small></div><em>-3.00</em></div>
					<div class="tx"><span class="dot dot-b"></span><div><b>Transport</b><small>Travel · today</small></div><em>-2.50</em></div>
					<div class="tabs"><span class="on">Home</span><span>Send</span><span>Cards</span><span>More</span></div>
				</div>
			</div>
		</div>
	</div>

</section>

<style>
	.hero {
		position: relative;
		background: #001431;
		color: #fff;
		/* No overflow clip here: the phones hang into the light section below, as in the baseline */
	}
	.bg {
		position: absolute;
		inset: 0;
		overflow: clip;
		pointer-events: none;
	}
	.rings {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}
	.ring { transform-origin: center; }
	.ring-a { animation: drift 26s ease-in-out infinite alternate; }
	.ring-b { animation: drift 34s ease-in-out 2s infinite alternate-reverse; }
	/* Baseline-phase parallax: the rings lag the scroll slightly inside their
	   clipped layer, so the hero reads as deep ground behind the phones.
	   Scroll-driven CSS (no JS); without animation-timeline the rings stay
	   static, and reduced-motion keeps them still (drift block below). */
	@keyframes rings-parallax {
		from { transform: translate3d(0, 0, 0); }
		to { transform: translate3d(0, 9vh, 0); }
	}
	@supports (animation-timeline: scroll()) {
		@media (prefers-reduced-motion: no-preference) {
			.rings {
				animation: rings-parallax linear both;
				animation-timeline: scroll(root block);
				animation-range: 0 110vh;
			}
		}
	}
	@keyframes drift {
		from { transform: rotate(-2deg) translateY(-8px); }
		to { transform: rotate(2.5deg) translateY(10px); }
	}
	.inner {
		position: relative;
		z-index: 2;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
		align-items: start;
		max-width: 1280px;
		margin: 0 auto;
		padding: clamp(56px, 9vh, 96px) clamp(24px, 5vw, 72px) 0;
	}
	.copy {
		max-width: 30rem;
		padding-bottom: clamp(48px, 7vh, 88px);
	}
	h1 {
		margin: 0;
		font-size: clamp(3rem, 7.2vw, 5.4rem);
		font-weight: 500;
		line-height: 1.02;
		letter-spacing: -0.02em;
	}
	.unlock { display: block; color: #F58851; }
	.life { display: block; color: #fff; }
	.sub {
		margin: 20px 0 0;
		max-width: 24ch;
		font-size: 1.02rem;
		line-height: 1.55;
		color: rgba(255, 255, 255, 0.85);
	}
	.cta {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin-top: 26px;
		background: #F58851;
		color: #001431;
		border-radius: 999px;
		padding: 13px 24px;
		font-size: 15px;
		font-weight: 600;
		text-decoration: none;
		transition: transform 200ms var(--ease), filter 200ms var(--ease);
	}
	/* Hover gated to real pointers; a touch tap must not leave the CTA shifted. */
	@media (hover: hover) and (pointer: fine) {
		.cta:hover { filter: brightness(1.07); transform: translateX(2px); }
	}

	/* Example phones, tilted and overlapping into the section below */
	.screens {
		position: relative;
		z-index: 3;
		height: clamp(420px, 56svh, 600px);
	}
	.phone {
		position: absolute;
		width: clamp(190px, 21vw, 300px);
		aspect-ratio: 9 / 19.5;
		border-radius: 36px;
		padding: 9px;
		background: linear-gradient(160deg, #3a3f49, #14171f 60%);
		box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
	}
	/* Nudged up ~20px so the bottoms clear the "How can we help today?" heading row */
	.phone-back {
		left: 4%;
		top: calc(6% - 20px);
		rotate: -7deg;
	}
	.phone-front {
		right: 2%;
		top: -20px;
		rotate: 4deg;
	}
	.screen {
		position: relative;
		height: 100%;
		border-radius: 28px;
		background: var(--clay);
		padding: 14px 16px;
		display: flex;
		flex-direction: column;
		gap: 11px;
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
		padding: 12px 12px;
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
		color: rgba(0, 20, 49, 0.72);
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
		padding: 12px 12px;
		font-size: 21px;
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
		padding: 7px 0;
		background: #fff;
		font-size: 8px;
	}
	.chips .on {
		background: var(--peach);
		font-weight: 700;
	}
	.send-btn {
		/* pinned above the tab bar so the Send screen fills the phone as in the baseline */
		margin-top: auto;
		border-radius: 999px;
		background: var(--peach);
		text-align: center;
		padding: 12px 0;
		font-size: 10px;
		font-weight: 600;
	}
	.tabs {
		margin-top: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 2px 10px;
		justify-content: space-between;
		padding: 6px 10px;
		border-top: 1px solid rgba(0, 20, 49, 0.12);
		font-size: 7.5px;
		line-height: 1.2;
	}
	.tabs span {
		white-space: nowrap;
	}
	.tabs .on {
		font-weight: 700;
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
		font-size: 9px;
	}
	.tx em {
		font-style: normal;
		font-size: 8.5px;
	}
	.dot {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: var(--peach);
		opacity: 0.85;
	}
	.dot-b {
		background: var(--mid);
		opacity: 0.5;
	}

	@media (max-width: 900px) {
		.inner {
			grid-template-columns: 1fr;
		}
		.screens {
			height: clamp(360px, 52svh, 480px);
			margin-top: 12px;
		}
		.phone {
			width: clamp(170px, 46vw, 230px);
		}
		.phone-back {
			left: 0;
		}
		.phone-front {
			right: 0;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.ring { animation: none; }
		.cta { transition: none; }
	}
</style>
