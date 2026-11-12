import { unstable_cache } from "next/cache";
import { db, isDbConfigured } from "@/lib/db";
import { locales, type Locale } from "@/i18n/config";
import type {
  AdminPost,
  AdminPostListItem,
  AdminTranslation,
  Faq,
  PostDetail,
  PostSummary,
  PostSource,
  PostStatus,
} from "./types";

/** Cache tag for every public blog read; admin publish actions revalidate it. */
export const BLOG_TAG = "blog";
const CACHE_SECONDS = 86400;

type Row = Record<string, any>;

function iso(value: unknown): string | null {
  if (value === null || value === undefined) return null;
  return new Date(value as string | Date).toISOString();
}

function readingMinutes(words: unknown): number {
  return Math.max(1, Math.round(Number(words ?? 0) / 200));
}

function toSummary(row: Row): PostSummary {
  return {
    postId: row.post_id,
    locale: row.locale,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    coverImageUrl: row.cover_image_url,
    coverAlt: row.cover_alt,
    publishedAt: iso(row.published_at),
    reviewedAt: iso(row.reviewed_at),
    updatedAt: iso(row.updated_at)!,
    readingMinutes: readingMinutes(row.words),
  };
}

function toFaqs(value: unknown): Faq[] {
  return Array.isArray(value) ? (value as Faq[]) : [];
}

// ---------------------------------------------------------------------------
// Public reads (cached, tagged). A language version is public only when it
// AND the Turkish version are published, so unpublishing Turkish hides all.
// ---------------------------------------------------------------------------

async function fetchPublishedPosts(locale: Locale): Promise<PostSummary[]> {
  if (!isDbConfigured()) return [];
  const rows = await db()`
    select t.post_id, t.locale, t.slug, t.title, t.excerpt,
           t.published_at, t.reviewed_at, t.updated_at,
           p.category, p.cover_image_url, p.cover_alt,
           coalesce(array_length(regexp_split_to_array(trim(t.content_md), '[[:space:]]+'), 1), 0) as words
    from post_translations t
    join posts p on p.id = t.post_id
    join post_translations tr
      on tr.post_id = t.post_id and tr.locale = 'tr' and tr.status = 'published'
    where t.locale = ${locale} and t.status = 'published'
    order by t.published_at desc`;
  return rows.map(toSummary);
}

async function fetchPost(
  locale: Locale,
  slug: string,
  includeDrafts: boolean
): Promise<PostDetail | null> {
  if (!isDbConfigured()) return null;
  const sql = db();
  const rows = includeDrafts
    ? await sql`
        select t.*, p.category, p.cover_image_url, p.cover_alt,
               coalesce(array_length(regexp_split_to_array(trim(t.content_md), '[[:space:]]+'), 1), 0) as words
        from post_translations t
        join posts p on p.id = t.post_id
        where t.locale = ${locale} and t.slug = ${slug}`
    : await sql`
        select t.*, p.category, p.cover_image_url, p.cover_alt,
               coalesce(array_length(regexp_split_to_array(trim(t.content_md), '[[:space:]]+'), 1), 0) as words
        from post_translations t
        join posts p on p.id = t.post_id
        join post_translations tr
          on tr.post_id = t.post_id and tr.locale = 'tr' and tr.status = 'published'
        where t.locale = ${locale} and t.slug = ${slug} and t.status = 'published'`;
  const row = rows[0];
  if (!row) return null;

  const alternates = await sql`
    select t.locale, t.slug
    from post_translations t
    join post_translations tr
      on tr.post_id = t.post_id and tr.locale = 'tr' and tr.status = 'published'
    where t.post_id = ${row.post_id} and t.status = 'published'`;

  return {
    ...toSummary(row),
    status: row.status as PostStatus,
    contentMd: row.content_md,
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    faqs: toFaqs(row.faqs),
    alternates: alternates.map((a) => ({ locale: a.locale, slug: a.slug })),
  };
}

/**
 * For a slug that isn't published in `locale` (e.g. after switching language
 * on a post page): is it a published post in another language, and if so,
 * what is that post's slug in `locale` (null when not translated)?
 */
async function fetchForeignSlug(
  locale: Locale,
  slug: string
): Promise<{ found: boolean; slug: string | null }> {
  if (!isDbConfigured()) return { found: false, slug: null };
  const rows = await db()`
    select target.slug
    from post_translations src
    join post_translations tr
      on tr.post_id = src.post_id and tr.locale = 'tr' and tr.status = 'published'
    left join post_translations target
      on target.post_id = src.post_id and target.locale = ${locale} and target.status = 'published'
    where src.slug = ${slug} and src.status = 'published'
    order by (target.slug is not null) desc, (src.locale = 'tr') desc
    limit 1`;
  if (!rows[0]) return { found: false, slug: null };
  return { found: true, slug: rows[0].slug ?? null };
}

export interface SitemapPost {
  postId: string;
  locale: Locale;
  slug: string;
  lastModified: string;
}

async function fetchSitemapPosts(): Promise<SitemapPost[]> {
  if (!isDbConfigured()) return [];
  const rows = await db()`
    select t.post_id, t.locale, t.slug, greatest(t.reviewed_at, t.published_at) as last_modified
    from post_translations t
    join post_translations tr
      on tr.post_id = t.post_id and tr.locale = 'tr' and tr.status = 'published'
    where t.status = 'published'`;
  return rows.map((r) => ({
    postId: r.post_id,
    locale: r.locale,
    slug: r.slug,
    lastModified: iso(r.last_modified)!,
  }));
}

const cacheOptions = { tags: [BLOG_TAG], revalidate: CACHE_SECONDS };

export const getPublishedPosts = unstable_cache(
  fetchPublishedPosts,
  ["blog-published-posts"],
  cacheOptions
);

export const getPublishedPost = unstable_cache(
  (locale: Locale, slug: string) => fetchPost(locale, slug, false),
  ["blog-published-post"],
  cacheOptions
);

export const getForeignSlug = unstable_cache(
  fetchForeignSlug,
  ["blog-foreign-slug"],
  cacheOptions
);

export const getSitemapPosts = unstable_cache(
  fetchSitemapPosts,
  ["blog-sitemap"],
  cacheOptions
);

/** Uncached; for draft-mode previews by a logged-in admin only. */
export function getPostForPreview(locale: Locale, slug: string) {
  return fetchPost(locale, slug, true);
}

// ---------------------------------------------------------------------------
// Admin / MCP reads (never cached)
// ---------------------------------------------------------------------------

export async function listPostsAdmin(
  status?: PostStatus
): Promise<AdminPostListItem[]> {
  const rows = await db()`
    select p.id, p.source, p.updated_at,
           coalesce(
             json_agg(json_build_object('locale', t.locale, 'title', t.title, 'status', t.status))
               filter (where t.id is not null),
             '[]'
           ) as translations
    from posts p
    left join post_translations t on t.post_id = p.id
    group by p.id
    order by p.updated_at desc`;

  const items: AdminPostListItem[] = rows.map((r) => ({
    id: r.id,
    source: r.source as PostSource,
    updatedAt: iso(r.updated_at)!,
    translations: (r.translations as AdminPostListItem["translations"]).sort(
      (a, b) => locales.indexOf(a.locale) - locales.indexOf(b.locale)
    ),
  }));

  if (!status) return items;
  return items.filter((item) => {
    const tr = item.translations.find((t) => t.locale === "tr");
    return tr?.status === status;
  });
}

function toAdminTranslation(row: Row): AdminTranslation {
  return {
    id: row.id,
    locale: row.locale,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    contentMd: row.content_md,
    metaTitle: row.meta_title,
    metaDescription: row.meta_description,
    faqs: toFaqs(row.faqs),
    status: row.status,
    publishedAt: iso(row.published_at),
    reviewedAt: iso(row.reviewed_at),
    updatedAt: iso(row.updated_at)!,
  };
}

export async function getPostAdmin(id: string): Promise<AdminPost | null> {
  if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
  const sql = db();
  const posts = await sql`select * from posts where id = ${id}`;
  const post = posts[0];
  if (!post) return null;
  const translations = await sql`
    select * from post_translations where post_id = ${id}`;

  const byLocale: AdminPost["translations"] = {};
  for (const row of translations) {
    byLocale[row.locale as Locale] = toAdminTranslation(row);
  }

  return {
    id: post.id,
    category: post.category,
    coverImageUrl: post.cover_image_url,
    coverAlt: post.cover_alt,
    source: post.source,
    createdAt: iso(post.created_at)!,
    updatedAt: iso(post.updated_at)!,
    translations: byLocale,
  };
}
