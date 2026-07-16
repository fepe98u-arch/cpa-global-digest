import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['IFRS', '감사기준', 'SEC/규제', 'ESG공시', '세무']),
    summary: z.string(),
    sourceName: z.string(),
    sourceUrl: z.string().url(),
  }),
});

export const collections = { posts };
