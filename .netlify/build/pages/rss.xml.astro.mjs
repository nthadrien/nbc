import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_DkcjdUKO.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const posts = await getCollection('post');
  return rss({
    title: 'Buzz’s Blog',
    description: 'A humble Astronaut’s guide to the stars',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      publishedDate: post.data.pubDate,
      description: post.data.description,
      lang: post.id.slice(0,2) ,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      link: `/blog/${post.id}/`,
    })),
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
