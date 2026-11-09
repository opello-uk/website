# opello.co.uk — coming soon

The pre-launch page for Opello, served as a static site on Render and pointed at `opello.co.uk`.

## What's here

| Path | What it is |
|---|---|
| `index.html` | the built page (what Render serves) |
| `index.template.html` | source template with `{{MARK_SVG}}` / `{{WORDMARK_SVG}}` placeholders |
| `build.py` | inlines the brand SVGs into the template and writes `index.html` |
| `assets/` | wordmark, mark, favicon, touch icon, share image, self-hosted Nimbus Sans |
| `llms.txt`, `robots.txt`, `sitemap.xml` | the machine-readable layer |

No build step is needed on the host: `index.html` is committed. Run `python3 build.py` after editing the template or the SVG assets.

## Brand

Built to the Opello brand system (stage 3 concept, 05 Nov 2026): deep blue `#001431`, peach `#F58851`, clay `#E9E4E0`, Nimbus Sans, and the `o` lens mark as the single graphic device.

Copy on the page is brand-approved deck copy. Nothing else (fees, licences, dates, contact addresses) is claimed anywhere on the page.

## Deploying

Render static site, branch `main`, publish directory `.`, no build command. Custom domains: apex `A` record to Render's load balancer, `www` `CNAME` to the service host.
