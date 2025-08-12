import { defineCollection, z, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';



export const postTags:string[] = [ "event","project","blog","business","tax","accounting"];

const postCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "src/data/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(180),
    authors: z.array(reference("members")),
    publishedDate: z.coerce.date(),
    featuredImg: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array( z.string() ),
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
      icon: z.string()
    })
});

const reviewCollection = defineCollection({
  loader: file("src/data/testimonials.json"),
  schema: z.object({
    id: z.string(),
    msg: z.string(),
    pic: z.string(),
    client: z.string(),
    profession: z.string(),
    company: z.string()
  })
})

const comments = defineCollection({
  loader: file("src/data/comments.json"),
  schema: z.object({
    id:z.string(),
    comment: z.string(),
    pseudo: z.string(),
    emails: z.string(),
    post: z.string(),
    day: z.coerce.date(),
    replies: z.array(reference('comment'))
  })
});

const termsCollection = defineCollection({
  loader: glob({ pattern:  '**/[^_]*.md', base: "src/data/terms&conditions" }),
    schema: z.object({
      lang: z.string(),
      updated: z.coerce.date(),
    })
})

export const collections = {
  'posts': postCollection,
  'members': teamCollection,
  'services':serviceCollection,
  'testimonials': reviewCollection,
  'terms': termsCollection
};