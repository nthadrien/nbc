// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import purgecss from 'astro-purgecss';

import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './remark-reading-time.mjs';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss(), sitemap()],
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      rehypeHeadingIds
    ],
  },
  site: 'https://ntibusinessconsulting.netlify.app',
  // base: 'nbc',
  output: 'static',
  adapter: netlify(),
});