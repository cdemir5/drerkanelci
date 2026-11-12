import type { Locale } from "@/i18n/config";

export type PostStatus = "draft" | "published";
export type PostSource = "admin" | "mcp";

export interface Faq {
  question: string;
  answer: string;
}

export interface PostSummary {
  postId: string;
  locale: Locale;
  slug: string;
  title: string;
  excerpt: string;
  category: string | null;
  coverImageUrl: string | null;
  coverAlt: string | null;
  /** ISO strings (cached results are serialized to JSON) */
  publishedAt: string | null;
  reviewedAt: string | null;
  updatedAt: string;
  readingMinutes: number;
}

export interface PostDetail extends PostSummary {
  status: PostStatus;
  contentMd: string;
  metaTitle: string;
  metaDescription: string;
  faqs: Faq[];
  /** Published language versions of this post (including this one) */
  alternates: { locale: Locale; slug: string }[];
}

export interface AdminTranslation {
  id: string;
  locale: Locale;
  slug: string;
  title: string;
  excerpt: string;
  contentMd: string;
  metaTitle: string;
  metaDescription: string;
  faqs: Faq[];
  status: PostStatus;
  publishedAt: string | null;
  reviewedAt: string | null;
  updatedAt: string;
}

export interface AdminPost {
  id: string;
  category: string | null;
  coverImageUrl: string | null;
  coverAlt: string | null;
  source: PostSource;
  createdAt: string;
  updatedAt: string;
  translations: Partial<Record<Locale, AdminTranslation>>;
}

export interface AdminPostListItem {
  id: string;
  source: PostSource;
  updatedAt: string;
  translations: {
    locale: Locale;
    title: string;
    status: PostStatus;
  }[];
}
