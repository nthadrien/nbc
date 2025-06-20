import { defineCollection, z, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { languages } from './i18n/ui';

const postCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "src/data/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    publishedDate: z.coerce.date(),
    language: z.enum(["en","fr"]),
    categories: z.enum([ "one","two"]),
    relatedPosts: z.array(reference('blog'))
  })
});

const teamCollection = defineCollection({
  loader: file("src/data/members.json"),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    pp : z.object({
      src: z.string(),
      alt: z.string()
    })
  })
});

const serviceCollection = defineCollection({
    loader: glob({ pattern:  '**/[^_]*.md', base: "src/data/services" }),
    schema: z.object({
      title: z.string(),
      author: reference('members'),
      description: z.string(),
      date: z.date(),
      tags: z.array(z.string()),
      icon: z.string()
    })
});

export const collections = {
  'posts': postCollection,
  'members': teamCollection,
  'services':serviceCollection
};