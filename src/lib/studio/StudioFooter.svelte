<script lang="ts">
	import Wordmark from '#lib/components/Wordmark.svelte';
	import { resolve } from '$app/paths';

	// Placeholder link columns from the deck. Every label needs confirming before launch.
	const columns = [
		{ title: 'Personal', links: ['Everyday account', 'Payments', 'Cards'] },
		{ title: 'Business', links: ['Business account', 'Business payments', 'Global transfers'] },
		{ title: 'About', links: ['About us', 'Our approach', 'Careers', 'Contact'] },
		{ title: 'Help', links: ['Help centre', 'FAQs', 'Account support', 'Get in touch'] }
	];

	// Placeholder social labels and icons. Not linked yet: confirm names and URLs before launch.
	const socials = [
		{ name: 'Instagram', path: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 1.8A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8H7zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4z' },
		{ name: 'LinkedIn', path: 'M4.5 9.5h3V19h-3V9.5zM6 4.8a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4zM10 9.5h2.9v1.3c.4-.8 1.4-1.6 3-1.6 3.1 0 3.6 2 3.6 4.6V19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3V9.5z' },
		{ name: 'X', path: 'M4 4h4.6l3.6 4.9L16.2 4H19l-6 6.9L19.6 20h-4.6l-3.9-5.3L6.6 20H4l6.4-7.3L4 4zm3.1 1.5 9.8 13h1.4l-9.8-13H7.1z' },
		{ name: 'YouTube', path: 'M21.5 7.2a2.7 2.7 0 0 0-1.9-1.9C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.5 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z' }
	];
	const legal = ['Terms & Conditions', 'Cookie policy', 'Accessibility', 'Sitemap'];
</script>

<footer class="foot">
	<div class="top">
		<div class="intro">
			<span class="brand"><Wordmark /></span>
			<p class="tagline">Your own money, unlocked.</p>
		</div>

		<div class="cols">
			{#each columns as col (col.title)}
				<section>
					<h2>{col.title}</h2>
					<ul>
						{#each col.links as link (link)}
							<li><span>{link}</span></li>
						{/each}
					</ul>
				</section>
			{/each}
		</div>
	</div>

	<!-- Placeholder socials row: icons only, no links until the accounts are confirmed. -->
	<div class="social" aria-label="Social channels (placeholder)">
		<ul>
			{#each socials as social (social.name)}
				<li>
					<span class="social-icon" aria-label={social.name} role="img">
						<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
							<path d={social.path} fill="currentColor" />
						</svg>
					</span>
				</li>
			{/each}
		</ul>
	</div>

	<div class="base">
		<span>© 2026 Opello. All rights reserved.</span>
		<ul class="legal">
			<li><a href={resolve('/privacy/')}>Privacy policy</a></li>
			<!-- Placeholder legal links: pages not written yet. -->
			{#each legal as name (name)}
				<li><span>{name}</span></li>
			{/each}
		</ul>
	</div>
</footer>

<style>
	.foot {
		background: var(--deep);
		color: var(--clay);
		padding: clamp(48px, 7vw, 88px) clamp(20px, 4vw, 56px) 28px;
		border-top: 1px solid var(--rule);
	}
	.top {
		display: grid;
		grid-template-columns: minmax(200px, 1fr) 2fr;
		gap: clamp(32px, 5vw, 72px);
	}
	.brand {
		display: block;
		width: clamp(120px, 11vw, 160px);
	}
	.tagline {
		margin: 14px 0 0;
		font-size: 14px;
		color: var(--muted);
	}
	.cols {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 24px;
	}
	h2 {
		margin: 0 0 14px;
		font-size: 11px;
		font-weight: 500;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--peach);
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 10px;
	}
	li span {
		font-size: 14px;
		color: var(--muted);
	}
	.base {
		margin-top: clamp(40px, 6vw, 72px);
		padding-top: 22px;
		border-top: 1px solid var(--rule);
		display: flex;
		justify-content: space-between;
		gap: 16px;
		flex-wrap: wrap;
		font-size: 12px;
		color: var(--muted);
	}
	.base a,
	.legal a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		color: var(--clay);
	}
	.social {
		margin-top: clamp(36px, 5vw, 56px);
		display: flex;
		align-items: center;
		gap: 20px;
		flex-wrap: wrap;
	}
	.social ul {
		display: flex;
		gap: 22px;
		flex-wrap: wrap;
	}
	.social-icon {
		display: inline-flex;
		color: var(--peach);
	}
	.legal {
		display: flex;
		gap: 4px 22px;
		flex-wrap: wrap;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.legal li span {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		color: var(--muted);
	}

	@media (max-width: 860px) {
		.top {
			grid-template-columns: 1fr;
		}
		.cols {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 560px) {
		/* Phones: four columns in one row, as in the 390 frame. */
		.cols {
			grid-template-columns: repeat(4, minmax(0, 1fr));
			gap: 12px;
		}
		h2 {
			font-size: 9px;
			letter-spacing: 0.12em;
			margin-bottom: 10px;
		}
		ul {
			gap: 8px;
		}
		li span {
			font-size: 12px;
			line-height: 1.3;
			overflow-wrap: anywhere;
		}
		.base {
			flex-direction: column;
			align-items: flex-start;
			gap: 4px;
		}
		.legal {
			gap: 0 18px;
			width: 100%;
		}
	}
</style>
