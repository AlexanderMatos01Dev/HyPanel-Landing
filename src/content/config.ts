import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number().default(0),
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    readTime: z.string(),
    category: z.enum(['Announcement', 'Tutorial', 'Development', 'Technology', 'Community']),
    gradient: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    author: z.string().default('HyPanel Team'),
    authorRole: z.string().default('Community'),
    authorImage: z.string().default('https://pbs.twimg.com/profile_images/1994402976673230848/BeWkPhHU_400x400.jpg'),
    relatedPosts: z.array(z.string()).max(3).optional(),
    coAuthor: z.object({
      name: z.string(),
      role: z.string(),
      image: z.string().optional(),
      initials: z.string().optional()
    }).optional()
  })
});

export const collections = {
  'blog': blogCollection,
};
