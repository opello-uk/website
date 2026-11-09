# opello.co.uk

The Opello website, built with SvelteKit.

Right now it's a single prerendered coming-soon page with an interest
sign-up. It's set up so the marketing pages stay static HTML (fast, indexable)
while the web app can grow alongside them later.

## Develop

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build   # static output in build/
```

Render (static site) runs `npm ci && npm run build` and publishes `build/`.

## Structure

| Path | What |
|---|---|
| `src/routes/+page.svelte` | the coming-soon page |
| `src/lib/components/Ring.svelte` | the Opello core graphic (disc + locked/unlocked lenses) |
| `src/lib/components/SignupForm.svelte` | interest capture, error and thank-you states |
| `src/lib/components/Wordmark.svelte` | inline wordmark |
| `src/lib/styles/global.css` | brand tokens and base styles |
| `static/` | favicon, share image, `robots.txt`, `llms.txt` |

## Pre-launch

The page sends `noindex, nofollow` and `robots.txt` blocks all crawlers.
Flip both at launch.

## Going app-side later

Swap `@sveltejs/adapter-static` for `@sveltejs/adapter-node` in
`vite.config.ts`, keep `prerender = true` on marketing routes, and move the
Render service to a Node web service.
