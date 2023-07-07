import { z } from "zod";

export const Category = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string().optional(),
  description: z.string().optional(),
});

export const Author = z.object({
  id: z.string(),
  first_name: z.string(),
  last_name: z.string(),
});

export const Post = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  category: Category,
  author: Author,
  slug: z.string(),
  image: z.string(),
  body: z.string(),
  date_created: z.string(),
  date_updated: z.string(),
});

const PostResults = z.object({
  data: z.array(Post),
});

const CategoryResult = z.object({
  data: z.array(Category),
});

export type PostType = z.infer<typeof Post>;
export type CategoryType = z.infer<typeof Category>;
export type PostResultsType = z.infer<typeof PostResults>;
export type CategoryResultType = z.infer<typeof CategoryResult>;
