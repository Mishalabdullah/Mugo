import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './content/blogs', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(), date: z.coerce.date(), description: z.string().optional(),
    subtitle: z.string().optional(), image: z.string().optional(),
    tags: z.array(z.string()).default([]), draft: z.boolean().default(false),
    updatedDate: z.coerce.date().optional(), URL: z.string().optional(),
  }),
});
export const collections = { blog };
