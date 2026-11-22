<script lang="ts">
	// Renders card body text, but splits the privacy mailbox address across spans so
	// Cloudflare email-protection (Scrape Shield) does not rewrite it into
	// "/cdn-cgi/l/email-protection" on the served page. That rewriting left no-JS
	// visitors and agents seeing "[email&#160;protected]" instead of the address.
	// Visible text is identical: the spans render as one continuous address, so
	// people can still read and copy it. The caller wraps this in the page's own
	// <p> so the page's scoped card-paragraph styles still apply.
	//
	// Text segments also go through markLatinInRTL: on the Arabic pages the
	// registered address and company name are Latin runs inside RTL text, and the
	// bidi algorithm scrambles them without an explicit dir. The helper returns
	// escaped text untouched when there is no Arabic script, so every English and
	// Turkish page renders exactly as before.
	import { markLatinInRTL } from '#lib/studio/scriptLangs';

	let { text }: { text: string } = $props();

	const EMAIL = 'privacy@opello.co.uk';

	interface Seg {
		t?: string;
		email?: boolean;
	}
	function segments(src: string): Seg[] {
		const out: Seg[] = [];
		let last = 0;
		let i = src.indexOf(EMAIL);
		while (i !== -1) {
			if (i > last) out.push({ t: src.slice(last, i) });
			out.push({ email: true });
			last = i + EMAIL.length;
			i = src.indexOf(EMAIL, last);
		}
		if (last < src.length) out.push({ t: src.slice(last) });
		return out;
	}
</script>

{#each segments(text) as seg (seg.t ?? 'email')}
	{#if seg.email}
		<span>privacy</span>@<span>opello</span>.<span>co</span>.<span>uk</span>
	{:else}{@html markLatinInRTL(seg.t ?? '')}{/if}
{/each}
