import { defineCollection } from "astro:content";
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const project = defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        title: z.string(),
        lead: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()),
        heroImage: z.string(),
    }),
});

export const collections = { project };
