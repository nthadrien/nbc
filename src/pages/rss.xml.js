import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';


export async function GET(context) {
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