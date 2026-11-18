<script lang="ts">
	import { resolve } from '$app/paths';
	// Hero rebuilt 1-for-1 against the high-res baseline (baseline-07). Sample app data is placeholder.
</script>

<section class="hero" aria-labelledby="hero-title">
	<!-- Large soft gradient rings, bleeding off the right edge as in the baseline -->
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

	<div class="copy">
		<h1 id="hero-title">
			<span class="unlock">Unlock</span>
			<span class="life">your life.</span>
		</h1>
		<p class="sub">For different lives, different circumstances and different starting points.</p>
		<a class="cta" href={resolve('/studio/open-account/')}>
			<span>Open account with us</span>
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
	<p class="example-note" aria-hidden="true">Example app screens with sample data.</p>

</section>
<style>
	.hero {
		position: relative;
		background: #0f1f3d;
		color: #fff;
		overflow: clip;
	}
	.rings {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
	.ring { transform-origin: center; }
	.ring-a { animation: drift 26s ease-in-out infinite alternate; }
	.ring-b { animation: drift 34s ease-in-out 2s infinite alternate-reverse; }
	@keyframes drift {
		from { transform: rotate(-2deg) translateY(-8px); }
		to { transform: rotate(2.5deg) translateY(10px); }
	}
	.copy {
		position: relative;
		z-index: 2;
		padding: clamp(56px, 9vh, 96px) clamp(24px, 6vw, 96px) 0;
		max-width: 30rem;
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
		color: #0f1f3d;
		border-radius: 999px;
		padding: 13px 24px;
		font-size: 15px;
		font-weight: 600;
		text-decoration: none;
		transition: transform 200ms var(--ease), filter 200ms var(--ease);
	}
	.cta:hover { filter: brightness(1.07); transform: translateX(2px); }
	@media (prefers-reduced-motion: reduce) {
		.ring { animation: none; }
		.cta { transition: none; }
	}
</style>
