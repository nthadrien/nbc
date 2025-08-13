export { renderers } from '../renderers.mjs';

async function GET() {
  const robotsTxt = `
User-agent: *
# This rule allows all user agents (web crawlers) to crawl the entire site.
Allow: /

# This rule explicitly tells all user agents to not crawl the /admin section.
# It's a good practice to disallow sensitive or non-public areas of your site.
Disallow: /admin

# This line points to the location of your sitemap.xml file.
# Make sure your sitemap is generated correctly and this path is accurate.
Sitemap: ${"https://ntibusinessconsulting.netlify.com"}/sitemap-index.xml
`.trim();
  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
