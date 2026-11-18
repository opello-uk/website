// Declare the page language on the <html> element for translated studio pages.
// The wrapper div in [lang]/[slug] already carries dir/lang, but screen readers
// and crawlers read the document element. Applied during prerendering too, so
// the static HTML ships with the right lang/dir.
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.params.lang;
	if (lang !== 'ar' && lang !== 'tr') return resolve(event);
	const dir = lang === 'ar' ? ' dir="rtl"' : '';
	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('<html lang="en-GB">', `<html lang="${lang}"${dir}>`)
	});
};
