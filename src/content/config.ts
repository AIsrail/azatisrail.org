import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tag: z.string(),
    excerpt: z.string(),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.string(),
    icon: z.string().optional(),
    image: z.string().optional(),
    price: z.string().optional(),
    description: z.string(),
    cta: z.string().optional(),
    link: z.string().optional(),
    isFree: z.boolean().default(true),
  }),
});

const funding = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    category: z.enum(['grants', 'investors', 'banks']),
    description: z.string(),
    count: z.string().optional(),
    geography: z.string().optional(),
    updatedAt: z.string().optional(),
    link: z.string().optional(),
  }),
});

const videos = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    youtubeUrl: z.string(),
    youtubeId: z.string().optional(),
    date: z.string().optional(),
    topic: z.string().optional(),
    duration: z.string().optional(),
    views: z.string().optional(),
  }),
});

const trainings = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    topics: z.array(z.string()),
    date: z.string().optional(),
    excerpt: z.string().optional(),
    description: z.string(),
    duration: z.string(),
    format: z.enum(['online', 'offline', 'both']),
    audience: z.array(z.string()),
    isPartner: z.boolean().default(false),
    trainerName: z.string(),
    trainerRole: z.string(),
    trainerInitials: z.string(),
    contactEmail: z.string().optional(),
    contactPhone: z.string().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string() })).optional(),
  }),
});

const courses = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    badge: z.string().optional(),
    isFeatured: z.boolean().default(false),
    description: z.string(),
    format: z.string().optional(),
    duration: z.string().optional(),
    price: z.string().optional(),
    link: z.string().optional(),
  }),
});

export const collections = { posts, publications, funding, videos, trainings, courses };
