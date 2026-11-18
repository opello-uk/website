import { error } from '@sveltejs/kit';
import { pagesByLang } from '#lib/studio/i18n';

export const prerender = true;
export function entries() {
	const out: { lang: string; slug: string }[] = [];
	for (const [lang, pages] of Object.entries(pagesByLang)) {
		for (const p of pages) out.push({ lang, slug: p.slug });
	}
	return out;
}
export function load({ params }) {
	const lang = params.lang as 'ar' | 'tr';
	const page = pagesByLang[lang]?.find((p) => p.slug === params.slug);
	if (!page) error(404, 'Not found');
	return { page, lang };
}
