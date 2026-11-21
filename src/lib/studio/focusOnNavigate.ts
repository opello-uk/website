import { beforeNavigate, afterNavigate } from '$app/navigation';
import { browser } from '$app/env';

// After a client-side navigation, move focus to the main content landmark so
// keyboard and screen-reader users land on the new page's content. SvelteKit
// resets focus to <body> after every navigation and updates the title, but with
// focus on <body> screen readers announce nothing about the new page.
//
// The flag is module-level because page components remount across route changes:
// beforeNavigate fires while the OLD page is still mounted, so the flag has to
// survive into the new page's afterNavigate callback. beforeNavigate does not
// fire on initial load, so focus never moves on first render.
export function focusMainOnNavigate() {
	if (!browser) return;
	beforeNavigate(() => {
		navigating = true;
	});
	afterNavigate(() => {
		if (!navigating) return;
		navigating = false;
		// SvelteKit resets focus to <body> after the callbacks it runs; wait one
		// frame so our focus lands last and stays.
		requestAnimationFrame(() => {
			const main = document.querySelector('main');
			if (!main) return;
			if (!main.hasAttribute('tabindex')) main.setAttribute('tabindex', '-1');
			main.focus({ preventScroll: true });
		});
	});
}

let navigating = false;
