// @ts-check
import { defineConfig } from 'astro/config';

import purgecss from 'astro-purgecss';

import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss(), sitemap()],
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: true
    }
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  site: 'https://nthadrien.github.io',
  base: 'nbc',
});