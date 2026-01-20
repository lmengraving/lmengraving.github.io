import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap'; <--- Comment this import out

export default defineConfig({
  site: 'https://lmengraving.github.io',
  
  // REMOVE sitemap() from this list
  integrations: [tailwind()], 

  output: 'static',
  build: {
    assets: 'assets'
  }
});