import { defineConfig } from 'astro/config';

// When the site goes live, set `site` to its address, e.g. 'https://uzair-bim.github.io'.
// If it is served from a sub-path (https://user.github.io/portfolio), also set `base: '/portfolio'`.
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  base: process.env.BASE_PATH || '/',
});
