import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const langSchema = z.enum(['es', 'en']);

const profile = defineCollection({
	loader: glob({ base: './src/content/profile', pattern: '*.yaml' }),
	schema: z.object({
		lang: langSchema,
		meta: z.object({
			title: z.string(),
			description: z.string(),
		}),
		hero: z.object({
			name: z.string(),
			kicker: z.string(),
			bio: z.string(),
		}),
		education: z.object({
			degree: z.string(),
			institution: z.string(),
			location: z.string(),
			period: z.string(),
		}),
		skills: z.object({
			technical: z.array(z.string()),
			methods: z.array(z.string()),
			languages: z.array(z.string()),
		}),
		contact: z.object({
			email: z.string().email(),
			location: z.string(),
			linkedin: z.string().url(),
			cvPath: z.string(),
		}),
	}),
});

const experience = defineCollection({
	loader: glob({ base: './src/content/experience', pattern: '**/*.yaml' }),
	schema: z.object({
		lang: langSchema,
		role: z.string(),
		company: z.string(),
		location: z.string(),
		workMode: z.string(),
		period: z.string(),
		order: z.number(),
		bullets: z.array(z.string()),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.yaml' }),
	schema: z.object({
		lang: langSchema,
		title: z.string(),
		description: z.string(),
		order: z.number(),
		technologies: z.array(z.string()).default([]),
		url: z.string().url().optional(),
		repository: z.string().url().optional(),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

export const collections = { profile, experience, projects };
