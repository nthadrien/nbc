import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_66qaPVPY.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/robots.txt.astro.mjs');
const _page2 = () => import('./pages/rss.xml.astro.mjs');
const _page3 = () => import('./pages/_locale_/about-us.astro.mjs');
const _page4 = () => import('./pages/_locale_/blog/_tag_/_page_.astro.mjs');
const _page5 = () => import('./pages/_locale_/blog/_id_.astro.mjs');
const _page6 = () => import('./pages/_locale_/blog/_page_.astro.mjs');
const _page7 = () => import('./pages/_locale_/services/_id_.astro.mjs');
const _page8 = () => import('./pages/_locale_/services.astro.mjs');
const _page9 = () => import('./pages/_locale_/_slug_.astro.mjs');
const _page10 = () => import('./pages/_locale_.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/robots.txt.ts", _page1],
    ["src/pages/rss.xml.js", _page2],
    ["src/pages/[locale]/about-us.astro", _page3],
    ["src/pages/[locale]/blog/[tag]/[page].astro", _page4],
    ["src/pages/[locale]/blog/[id].astro", _page5],
    ["src/pages/[locale]/blog/[page].astro", _page6],
    ["src/pages/[locale]/services/[id].astro", _page7],
    ["src/pages/[locale]/services/index.astro", _page8],
    ["src/pages/[locale]/[slug].astro", _page9],
    ["src/pages/[locale]/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "10f1dc2e-526b-4c96-929d-f6fdf702bda8"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
