<script lang="ts">
	import Wordmark from '#lib/components/Wordmark.svelte';
	import { resolve } from '$app/paths';

	// Placeholder link columns from the deck. Every label needs confirming before launch.
	const columns = [
		{ title: 'Personal', links: ['Current accounts', 'Savings', 'Pensions'] },
		{ title: 'Business', links: ['Business accounts', 'Business transfers', 'Business cards'] },
		{ title: 'Premium', links: ['Premium plans', 'Premium support'] },
		{ title: 'About', links: ['About Opello', 'Careers', 'Contact'] }
	];
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

	<div class="base">
		<span>© 2026 Opello. All rights reserved.</span>
		<a href={resolve('/privacy/')}>Privacy</a>
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
	.base a {
		color: var(--clay);
	}

	@media (max-width: 860px) {
		.top {
			grid-template-columns: 1fr;
		}
		.cols {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
