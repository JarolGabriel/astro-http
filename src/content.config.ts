import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content", // <-- Esta línea reemplaza al `loader: glob(...)`
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
