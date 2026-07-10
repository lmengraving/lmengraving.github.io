import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lmengraving.sg',

  integrations: [
    tailwind(),
    sitemap({
      // Privacy pages are noindex; 404 should never be in a sitemap.
      filter: (page) => !page.includes('/privacy') && !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-CN',
        },
      },
    }),
  ],

  output: 'static',
  build: {
    assets: 'assets'
  }
});
