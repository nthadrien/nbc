import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, n as decodeKey } from './chunks/astro/server_CzyFbPgW.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Personal%20Dev%20Projects/important/nti-consulting/","cacheDir":"file:///D:/Personal%20Dev%20Projects/important/nti-consulting/node_modules/.astro/","outDir":"file:///D:/Personal%20Dev%20Projects/important/nti-consulting/dist/","srcDir":"file:///D:/Personal%20Dev%20Projects/important/nti-consulting/src/","publicDir":"file:///D:/Personal%20Dev%20Projects/important/nti-consulting/public/","buildClientDir":"file:///D:/Personal%20Dev%20Projects/important/nti-consulting/dist/","buildServerDir":"file:///D:/Personal%20Dev%20Projects/important/nti-consulting/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"fallback","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://ntibusinessconsulting.netlify.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/[slug].astro",{"propagation":"in-tree","containsHead":true}],["D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/about-us.astro",{"propagation":"in-tree","containsHead":true}],["D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/blog/[id].astro",{"propagation":"in-tree","containsHead":true}],["D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/blog/[page].astro",{"propagation":"in-tree","containsHead":true}],["D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/blog/[tag]/[page].astro",{"propagation":"in-tree","containsHead":true}],["D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/services/[id].astro",{"propagation":"in-tree","containsHead":true}],["D:/Personal Dev Projects/important/nti-consulting/src/pages/[locale]/services/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/Personal Dev Projects/important/nti-consulting/src/components/cards/blogCard.astro",{"propagation":"in-tree","containsHead":false}],["D:/Personal Dev Projects/important/nti-consulting/src/components/latestPost.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[locale]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[locale]/blog/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[locale]/blog/[tag]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Personal Dev Projects/important/nti-consulting/src/components/footer.astro",{"propagation":"in-tree","containsHead":false}],["D:/Personal Dev Projects/important/nti-consulting/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[locale]/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[locale]/about-us@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[locale]/blog/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[locale]/services/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[locale]/services/index@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/Personal Dev Projects/important/nti-consulting/src/components/navbar.astro",{"propagation":"in-tree","containsHead":false}],["D:/Personal Dev Projects/important/nti-consulting/src/components/services.astro",{"propagation":"in-tree","containsHead":false}],["D:/Personal Dev Projects/important/nti-consulting/src/components/team.astro",{"propagation":"in-tree","containsHead":false}],["D:/Personal Dev Projects/important/nti-consulting/src/content.config.ts",{"propagation":"in-tree","containsHead":false}],["D:/Personal Dev Projects/important/nti-consulting/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/[locale]/about-us@_@astro":"pages/_locale_/about-us.astro.mjs","\u0000@astro-page:src/pages/[locale]/blog/[tag]/[page]@_@astro":"pages/_locale_/blog/_tag_/_page_.astro.mjs","\u0000@astro-page:src/pages/[locale]/blog/[id]@_@astro":"pages/_locale_/blog/_id_.astro.mjs","\u0000@astro-page:src/pages/[locale]/blog/[page]@_@astro":"pages/_locale_/blog/_page_.astro.mjs","\u0000@astro-page:src/pages/[locale]/services/[id]@_@astro":"pages/_locale_/services/_id_.astro.mjs","\u0000@astro-page:src/pages/[locale]/services/index@_@astro":"pages/_locale_/services.astro.mjs","\u0000@astro-page:src/pages/[locale]/[slug]@_@astro":"pages/_locale_/_slug_.astro.mjs","\u0000@astro-page:src/pages/[locale]/index@_@astro":"pages/_locale_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BXB1mMZe.mjs","D:/Personal Dev Projects/important/nti-consulting/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","D:\\Personal Dev Projects\\important\\nti-consulting\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","\u0000astro:assets":"chunks/_astro_assets_M70LEwYF.mjs","D:\\Personal Dev Projects\\important\\nti-consulting\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DXK974Xr.mjs","D:/Personal Dev Projects/important/nti-consulting/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.DmcU-Hng.js","D:/Personal Dev Projects/important/nti-consulting/src/components/forms/contactForm.astro?astro&type=script&index=0&lang.ts":"_astro/contactForm.astro_astro_type_script_index_0_lang.BwGsQ1Rw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/Personal Dev Projects/important/nti-consulting/src/components/forms/contactForm.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"contact\")?.addEventListener(\"submit\",async t=>{t.preventDefault();const s=new FormData(t.target),a=Object.fromEntries(s.entries());let n=`message: de .\n`;for(let e in a)n+=`${e} : ${a[e]} \n`;const o={telegram_bot_token:\"32\",chat_id:43};if((await fetch(`https://api.telegram.org/bot${o.telegram_bot_token}/sendMessage?chat_id=${o.chat_id}&text=${encodeURI(n)}`,{method:\"POST\"})).ok){alert(\"Thanks / Merci \");const e=document.querySelector(\"button[data-bs-target='#addReviewModal']\");e&&e.click()}else alert(`500 - sorry we are in maintenance try a different means. \n Oops essayez de nous contactez autrement svp.`)});"]],"assets":["/_astro/_slug_.3M5tYK9F.css","/favicon.svg","/imgs/2229093.jpg","/imgs/documents.avif","/imgs/hero1.avif","/imgs/hero2.avif","/imgs/hero3.avif","/imgs/hero4.avif","/imgs/hero5.avif","/imgs/hero6.avif","/imgs/hro5.avif","/imgs/table.avif","/imgs/tam1.avif","/imgs/team2.webp","/imgs/txtbook1.jpg","/imgs/txtbook2.jpg","/_astro/Layout.astro_astro_type_script_index_0_lang.DmcU-Hng.js","/imgs/team/alphonse.jpg","/imgs/team/gaspard.jpg","/imgs/team/mariette.jpg","/imgs/team/t-1.jpg","/imgs/team/t-2.jpg","/imgs/team/t-3.jpg","/imgs/posts/post-1.jpg","/imgs/posts/post-2.jpg","/imgs/posts/post-3.jpg","/404.html","/robots.txt","/rss.xml","/index.html","/index.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-always","locales":["fr","en"],"defaultLocale":"fr","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"8wSuQGwfFUp5qj+x1fUkdKC0i2PR2qQQ0OEnLbVuw68=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
