---
import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    link: z.string().url().optional(),
    github: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['journal', 'conference', 'working_paper', 'book_chapter', 'other']),
    link: z.string().url().optional(),
    pdf: z.string().url().optional(),
    code: z.string().url().optional(),
    bibtex: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
  'projects': projectsCollection,
  'publications': publicationsCollection,
};
---
