import { defineConfig } from 'astro/config';
// Static output; Cloudflare Workers serves ./dist as static assets (see wrangler.jsonc).
export default defineConfig({ output: 'static', trailingSlash: 'always' });
