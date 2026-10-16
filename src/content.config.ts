import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    client: z.string().optional(),
    location: z.string().optional(),
    period: z.coerce.string().optional(),
    role: z.string().optional(),
    scope: z.string().optional(),
    lod: z.string().optional(),
    category: z.string().default('Project'),
    software: z.array(z.string()).default([]),
    // Paths to files in public/uploads, e.g. /uploads/four-seasons-cover.jpg
    cover: z.string().optional(),
    images: z.array(z.string()).default([]),
    pdf: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const certificates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certificates' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.coerce.string().optional(),
    // Path to the certificate file in public/uploads/certificates, e.g. /uploads/certificates/iso-19650.pdf
    pdf: z.string().optional(),
    // Optional preview image of the certificate (JPG or PNG)
    image: z.string().optional(),
    link: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { work, posts, certificates };
