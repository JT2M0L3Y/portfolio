import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		order: z.number().default(0),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
		url: z.url().optional(),
		repository: z.url().optional(),
	}),
});

const work = defineCollection({
	loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
	schema: z.object({
		company: z.string(),
		role: z.string(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
		order: z.number().default(0),
		draft: z.boolean().default(false),
	}),
});

export const collections = { projects, work };
