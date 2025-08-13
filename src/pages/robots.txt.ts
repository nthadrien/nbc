// import type { APIRoute } from 'astro';

// const getRobotsTxt = (sitemapURL: URL) => `
// User-agent: *
// Allow: /

// Sitemap: ${sitemapURL.href}
// `;

// export const GET: APIRoute = ({ site }) => {
//   const sitemapURL = new URL('sitemap-index.xml', site);
//   return new Response(getRobotsTxt(sitemapURL));
// };


// src/pages/robots.txt.ts

// The `GET` function is Astro's way of handling dynamic routes.
// When a user or bot requests /robots.txt, this function will run.
// This allows you to generate the file's content on the fly.
export async function GET() {
  // Define the content of your robots.txt file as a string.
  // This content tells web crawlers how to interact with your site.
  const robotsTxt = `
User-agent: *
# This rule allows all user agents (web crawlers) to crawl the entire site.
Allow: /

# This rule explicitly tells all user agents to not crawl the /admin section.
# It's a good practice to disallow sensitive or non-public areas of your site.
Disallow: /admin

# This line points to the location of your sitemap.xml file.
# Make sure your sitemap is generated correctly and this path is accurate.
Sitemap: ${import.meta.env.SITE}/sitemap-index.xml
`.trim(); // .trim() removes leading and trailing whitespace from the template literal.

  // Return a new Response object with the robots.txt content.
  // It's crucial to set the correct headers:
  // - The `Content-Type` must be 'text/plain' for a robots.txt file.
  // - A `status` of 200 indicates a successful response.
  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}