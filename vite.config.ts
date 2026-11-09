import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	preview: { allowedHosts: true },
	server: { allowedHosts: true },
	plugins: [
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			// Static for now: every marketing route is prerendered to plain HTML.
			// When the web app arrives, switch to @sveltejs/adapter-node and keep
			// `prerender = true` on the marketing routes.
			adapter: adapter({
				pages: process.env.OUT_DIR ?? 'build',
				assets: process.env.OUT_DIR ?? 'build',
				strict: true
			}),
			// BASE_PATH is only set for internal previews served under a sub-path.
			paths: {
				base: (process.env.BASE_PATH ?? '') as '' | `/${string}`,
				relative: !process.env.BASE_PATH
			}
		})
	]
});
