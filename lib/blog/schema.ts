import { z } from "zod";
import { BLOG_CATEGORY_KEYS } from "./categories";

export const faqSchema = z.object({
  question: z.string().trim().min(3).max(300),
  answer: z.string().trim().min(3).max(2000),
});

/** Fields of one language version of a post. Shared by /admin and the MCP tools. */
export const translationInputSchema = z.object({
  title: z.string().trim().min(3).max(200),
  excerpt: z.string().trim().max(500).default(""),
  content_md: z.string().trim().max(50_000).default(""),
  meta_title: z.string().trim().max(90).default(""),
  meta_description: z.string().trim().max(200).default(""),
  faqs: z.array(faqSchema).max(12).default([]),
});

export type TranslationInput = z.infer<typeof translationInputSchema>;

export const categorySchema = z.enum(BLOG_CATEGORY_KEYS);
