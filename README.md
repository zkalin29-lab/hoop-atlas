# Hoop Atlas (draft)

Independent, unofficial basketball reference in the Atlas family (Jū Atlas, Apex Atlas). Astro, static output, served by Cloudflare Workers. Hidden test page: `noindex` everywhere.

## Photos
1. Drop files into `src/assets/photos/` (jpg, png, webp or avif) and push. That is all; no code or content edits.
2. The start of the filename picks the slot: `hero-*` (home hero, random start, crossfade), `court-*`, `rules-*`, `positions-*`, `eras-*` (that page). Anything else goes to the home-page gallery.
3. Optional caption after a double underscore (use _ for spaces): `court-01__Hardwood_at_dusk.jpg`.
4. The build makes AVIF/WebP at 480/960/1600 px with width/height, lazy-loads below the fold and shows a blurred placeholder while loading.
5. An empty slot shows a court-line placeholder. An empty folder never fails the build.
6. The build log warns about any original over about 8 MB.

## Deploy
Cloudflare Workers Builds: build command `npm run build`, deploy command `npx wrangler deploy` (serves `dist/`, see `wrangler.jsonc`).
Local: `npm install && npm run dev`.

## Sources and open items
Every page cites its sources. Entries marked [VERIFY] need checking against the FIBA / NBA rule books. Facts were written from general knowledge and the cited pages, not yet re-checked line by line.
