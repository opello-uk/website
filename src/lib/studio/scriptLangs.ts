// WCAG 3.1.2 language of parts: the TIN country list carries foreign-script runs
// (Arabic, Hebrew, Greek, Cyrillic, Chinese, Japanese, Korean, Georgian) inside
// Latin text. Screen readers need a lang attribute on those runs to switch voice.
// This helper wraps each non-Latin script run in <span lang="xx">. It escapes all
// text first, so the output is safe for {@html}.

const SCRIPT_RUNS: [string, RegExp][] = [
	// Arabic block + supplements + presentation forms
	['ar', /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+/g],
	['he', /[\u0590-\u05FF]+/g],
	['el', /[\u0370-\u03FF\u1F00-\u1FFF]+/g],
	['ru', /[\u0400-\u04FF]+/g],
	['zh', /[\u4E00-\u9FFF]+/g],
	['ja', /[\u3040-\u30FF]+/g],
	['ko', /[\uAC00-\uD7AF]+/g],
	['ka', /[\u10A0-\u10FF]+/g]
];

// Combined pattern with named groups so one pass finds every run.
const ALL = new RegExp(
	SCRIPT_RUNS.map(([name, re]) => `(?<${name}>${re.source})`).join('|'),
	'g'
);

function escapeText(s: string): string {
	return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Latin-script runs (the registered address, the company name) embedded in Arabic
// text have no language/direction markup of their own, so the Unicode bidi
// algorithm can visually scramble them in the RTL paragraph (classic case: the
// en-dash in a range like 401–402 flips, reading 402–401). When the string
// carries Arabic script, wrap each Latin run in <span lang="en" dir="ltr"> so
// the run keeps its own order and screen readers switch voice. Latin pages are
// returned untouched, so English output stays byte-identical.
const LATIN_RUN = /[A-Za-z][A-Za-z0-9 ,.\u2013'’\/&@#-]*[A-Za-z0-9.]/g;
const ARABIC = /[\u0600-\u06FF]/;

export function markLatinInRTL(text: string): string {
	if (!ARABIC.test(text)) return escapeText(text);
	let out = '';
	let last = 0;
	LATIN_RUN.lastIndex = 0;
	for (const m of text.matchAll(LATIN_RUN)) {
		// Skip runs that are just digits/punctuation picked up around a number
		if (!/[A-Za-z]/.test(m[0].slice(1))) continue;
		out += escapeText(text.slice(last, m.index));
		out += `<span lang="en" dir="ltr">${escapeText(m[0])}</span>`;
		last = m.index + m[0].length;
	}
	out += escapeText(text.slice(last));
	return out;
}

export function markLangs(text: string): string {
	let out = '';
	let last = 0;
	ALL.lastIndex = 0;
	for (const m of text.matchAll(ALL)) {
		const groups = m.groups ?? {};
		const lang = Object.keys(groups).find((k) => groups[k]);
		if (!lang) continue;
		out += escapeText(text.slice(last, m.index));
		out += `<span lang="${lang}" dir="auto">${escapeText(m[0])}</span>`;
		last = m.index + m[0].length;
	}
	out += escapeText(text.slice(last));
	return out;
}
