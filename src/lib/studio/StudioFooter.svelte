<script lang="ts">
	import Wordmark from '#lib/components/Wordmark.svelte';
	import { resolve } from '$app/paths';
	import { chrome, footerColumnTitle, footerLinkLabel, langHref, type Lang } from '#lib/studio/i18n';

	let { lang = 'en' }: { lang?: 'en' | Lang } = $props();
	const t = $derived(chrome[lang]);
	const colPage: Record<string, string> = { Personal: 'personal', About: 'about', Help: 'help' };
	// Links that have their own page go there; the rest fall back to their column page.
	const linkPage: Record<string, string> = { 'Everyday account': 'current-accounts', Savings: 'savings', Payments: 'transfers', Cards: 'cards', 'Global transfers': 'transfers', Contact: 'contact', 'Get in touch': 'contact', 'Account support': 'help-get-in-touch', 'Help centre': 'help-articles', FAQs: 'faq', 'Our approach': 'about', Careers: 'careers', News: 'news' };

	// Footer link columns from the deck. The Business column is out of MLP1 scope (Vinay, 2026-11-18);
	// Global transfers moved into Personal so the link survives. Footer IA to confirm with Opello.
	const columns = [
		{ title: 'Personal', links: ['Everyday account', 'Savings', 'Payments', 'Cards', 'Global transfers'] },
		{ title: 'About', links: ['About us', 'Our approach', 'Careers', 'News', 'Contact'] },
		{ title: 'Help', links: ['Help centre', 'FAQs', 'Account support', 'Get in touch'] }
	];

	// Social profiles; linked once the accounts are live.
	const socials = [
		{ name: 'Facebook', path: 'M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.3-1.4 1.5-1.4h1.4V5.5c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v2.3H8.5V14H11v7h2.5z' },
		{ name: 'Instagram', path: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 1.8A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8H7zM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4z' },
		{ name: 'YouTube', path: 'M21.5 7.2a2.7 2.7 0 0 0-1.9-1.9C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.5 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z' },
		{ name: 'X', path: 'M4 4h4.6l3.6 4.9L16.2 4H19l-6 6.9L19.6 20h-4.6l-3.9-5.3L6.6 20H4l6.4-7.3L4 4zm3.1 1.5 9.8 13h1.4l-9.8-13H7.1z' },
		{ name: 'LinkedIn', path: 'M4.5 9.5h3V19h-3V9.5zM6 4.8a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4zM10 9.5h2.9v1.3c.4-.8 1.4-1.6 3-1.6 3.1 0 3.6 2 3.6 4.6V19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3V9.5z' }
	];
</script>

<footer class="foot">
	<div class="top">
		<div class="intro">
			<span class="brand"><Wordmark /></span>
			<p class="tagline">{t.footerTagline}</p>
		</div>

		<div class="cols">
			{#each columns as col (col.title)}
				<section>
					<h2>{lang === 'en' ? col.title : footerColumnTitle[col.title][lang]}</h2>
					<ul>
						{#each col.links as link (link)}
							<!-- langHref keeps the footer in the page's language: on ar/tr pages every footer link goes to its language twin where one exists, instead of dropping the visitor back to English. -->
							<li><a href={resolve(langHref(lang, `/studio/${linkPage[link] ?? colPage[col.title] ?? 'help'}/`) as '/')}>{lang === 'en' ? link : footerLinkLabel[link][lang]}</a></li>
						{/each}
					</ul>
				</section>
			{/each}
		</div>
	</div>

	<!-- Socials row: icons only until the accounts are live. -->
	<!-- Placeholder icons are aria-hidden so assistive tech never announces channels that don't exist yet (group label t.socialAria returns with the real links; see signoff.md "Social links"). -->
	<div class="social" aria-hidden="true">
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

	<!-- Plan rule: every page carries the financial-promotion marker (PLAN.md). -->
	<p class="marker">{t.promoMarker}</p>

	<div class="base">
		<span>{t.copyright}</span>
		<ul class="legal">
			<li><a href={resolve(langHref(lang, '/studio/privacy-policy/') as '/')}>{lang === 'en' ? 'Privacy policy' : footerLinkLabel['Privacy policy'][lang]}</a></li>
			<li><a href={resolve(langHref(lang, '/studio/terms-and-conditions/') as '/')}>{lang === 'en' ? 'Terms & Conditions' : footerLinkLabel['Terms & Conditions'][lang]}</a></li>
			<li><a href={resolve(langHref(lang, '/studio/cookies-policy/') as '/')}>{lang === 'en' ? 'Cookie policy' : footerLinkLabel['Cookie policy'][lang]}</a></li>
			<li><a href={resolve(langHref(lang, '/studio/fees-and-charges/') as '/')}>{lang === 'en' ? 'Fees and charges' : footerLinkLabel['Fees and charges'][lang]}</a></li>
			<li><a href={resolve(langHref(lang, '/studio/customer-terms-and-conditions/') as '/')}>{lang === 'en' ? 'Customer terms' : footerLinkLabel['Customer terms'][lang]}</a></li>
			<li><a href={resolve(langHref(lang, '/studio/responsible-disclosure/') as '/')}>{lang === 'en' ? 'Responsible disclosure' : footerLinkLabel['Responsible disclosure'][lang]}</a></li>
			<li><a href={resolve(langHref(lang, '/studio/accessibility/') as '/')}>{lang === 'en' ? 'Accessibility' : footerLinkLabel['Accessibility'][lang]}</a></li>
			<li><a href={resolve(langHref(lang, '/studio/sitemap/') as '/')}>{lang === 'en' ? 'Sitemap' : footerLinkLabel['Sitemap'][lang]}</a></li>
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
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 24px;
	}
	h2 {
		margin: 0 0 14px;
		font-size: 14px;
		font-weight: 500;
		color: var(--clay);
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
	.cols a {
		/* Tap target: inline-block plus vertical padding lifts the touch box to the
		   24px minimum without changing the column rhythm (negative margin pays it back). */
		display: inline-block;
		padding: 5px 0;
		margin: -5px 0;
		font-size: 14px;
		color: var(--clay);
		text-decoration: none;
	}
	/* Hover gated to real pointers; a touch tap must not leave a footer link stuck styled. */
	@media (hover: hover) and (pointer: fine) {
		.cols a:hover {
			color: var(--peach);
			text-decoration: underline;
		}
	}
	.cols a:focus-visible,
	.legal a:focus-visible,
	.base a:focus-visible {
		outline: 2px solid var(--peach);
		outline-offset: 3px;
	}
	.marker {
		margin: clamp(28px, 4vw, 44px) 0 0;
		font-size: 12px;
		letter-spacing: 0.02em;
		color: var(--peach);
	}
	.base {
		margin-top: 16px;
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
		/* Baseline-01 shows the legal links without underlines. */
		text-decoration: none;
	}
	@media (hover: hover) and (pointer: fine) {
		.base a:hover,
		.legal a:hover {
			text-decoration: underline;
		}
	}
	.social {
		margin-top: clamp(36px, 5vw, 56px);
		display: flex;
		justify-content: flex-end;
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
		color: var(--muted);
	}
	@media (hover: hover) and (pointer: fine) {
		.social-icon:hover {
			color: var(--peach);
		}
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
		/* Phones: three columns in one row, as in the 390 frame. */
		.cols {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 12px;
		}
		h2 {
			font-size: 12px;
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
