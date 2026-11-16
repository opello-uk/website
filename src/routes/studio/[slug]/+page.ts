import { error } from '@sveltejs/kit';
import { pages, bySlug } from '#lib/studio/pages';

export const prerender = true;
export function entries() {
	return pages.map((p) => ({ slug: p.slug }));
}
export function load({ params }) {
	const page = bySlug(params.slug);
	if (!page) error(404, 'Not found');
	return { page };
}
