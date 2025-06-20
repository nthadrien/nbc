// @ts-check
import { defineConfig } from 'astro/config';

import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss()],
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: true
    }
  },
  site: 'https://hkbertoson.github.io',
  base: '/github-pages',
});