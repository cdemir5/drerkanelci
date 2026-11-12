import { randomUUID } from "crypto";
import { revalidateTag } from "next/cache";
import { db } from "@/lib/db";
import type { Locale } from "@/i18n/config";
import { slugify } from "./slugify";
import { BLOG_TAG } from "./queries";
import type { TranslationInput } from "./schema";
import type { PostSource } from "./types";

/** Errors whose message is safe to show to the admin / to Claude. */
export class BlogError extends Error {}

function revalidateBlog() {
  revalidateTag(BLOG_TAG);
}

async function uniqueSlug(
  locale: Locale,
  base: string,
  excludeTranslationId?: string
): Promise<string> {
  const rows = await db()`
    select slug from post_translations
    where locale = ${locale}
      and (slug = ${base} or slug like ${base + "-%"})
      and (${excludeTranslationId ?? null}::uuid is null or id <> ${excludeTranslationId ?? null}::uuid)`;
  const taken = new Set(rows.map((r) => r.slug as string));
  if (!taken.has(base)) return base;
  for (let i = 2; ; i++) {
    const candidate = `${base}-${i}`;
    if (!taken.has(candidate)) return candidate;
  }
}

export async function createPost(input: {
  source: PostSource;
  category?: string | null;
  tr: TranslationInput;
}): Promise<{ postId: string; slug: string }> {
  const postId = randomUUID();
  const slug = await uniqueSlug("tr", slugify(input.tr.title, "tr"));
  const t = input.tr;
  const sql = db();
  await sql.transaction([
    sql`insert into posts (id, category, source)
        values (${postId}, ${input.category ?? null}, ${input.source})`,
    sql`insert into post_translations
          (post_id, locale, slug, title, excerpt, content_md, meta_title, meta_description, faqs)
        values (${postId}, 'tr', ${slug}, ${t.title}, ${t.excerpt}, ${t.content_md},
                ${t.meta_title}, ${t.meta_description}, ${JSON.stringify(t.faqs)}::jsonb)`,
  ]);
  return { postId, slug };
}

/**
 * Create or update one language version.
 * - `allowPublished: false` (MCP) refuses to touch a published version.
 * - The slug is locked once a version has been published.
 */
export async function saveTranslation(
  postId: string,
  locale: Locale,
  input: TranslationInput,
  opts: { allowPublished: boolean; slug?: string }
): Promise<{ slug: string; created: boolean }> {
  const sql = db();
  const posts = await sql`select id from posts where id = ${postId}`;
  if (!posts[0]) throw new BlogError("Yazı bulunamadı.");

  const existingRows = await sql`
    select id, slug, status, published_at from post_translations
    where post_id = ${postId} and locale = ${locale}`;
  const existing = existingRows[0];

  if (existing?.status === "published" && !opts.allowPublished) {
    throw new BlogError(
      "Bu dil sürümü yayında olduğu için değiştirilemez. Değişiklik için yönetim panelinden önce yayından kaldırılmalı."
    );
  }

  let slug: string;
  if (existing?.published_at) {
    slug = existing.slug;
  } else {
    const desired = slugify(opts.slug?.trim() || input.title, locale);
    slug =
      existing && desired === existing.slug
        ? existing.slug
        : await uniqueSlug(locale, desired, existing?.id);
  }

  await sql.transaction([
    sql`insert into post_translations
          (post_id, locale, slug, title, excerpt, content_md, meta_title, meta_description, faqs)
        values (${postId}, ${locale}, ${slug}, ${input.title}, ${input.excerpt}, ${input.content_md},
                ${input.meta_title}, ${input.meta_description}, ${JSON.stringify(input.faqs)}::jsonb)
        on conflict (post_id, locale) do update set
          slug = excluded.slug,
          title = excluded.title,
          excerpt = excluded.excerpt,
          content_md = excluded.content_md,
          meta_title = excluded.meta_title,
          meta_description = excluded.meta_description,
          faqs = excluded.faqs,
          updated_at = now()`,
    sql`update posts set updated_at = now() where id = ${postId}`,
  ]);

  if (existing?.status === "published") revalidateBlog();
  return { slug, created: !existing };
}

export async function publishTranslation(postId: string, locale: Locale) {
  const sql = db();
  const rows = await sql`
    select locale, status, title, content_md from post_translations
    where post_id = ${postId} and locale in ('tr', ${locale})`;
  const target = rows.find((r) => r.locale === locale);
  const tr = rows.find((r) => r.locale === "tr");

  if (!target) throw new BlogError("Bu dil sürümü henüz oluşturulmamış.");
  if (!String(target.content_md ?? "").trim()) {
    throw new BlogError("İçerik boş; yayınlamadan önce yazı metnini ekleyin.");
  }
  if (locale !== "tr" && tr?.status !== "published") {
    throw new BlogError("Önce Türkçe sürümü yayınlayın.");
  }

  await sql.transaction([
    sql`update post_translations
        set status = 'published',
            published_at = coalesce(published_at, now()),
            reviewed_at = now(),
            updated_at = now()
        where post_id = ${postId} and locale = ${locale}`,
    sql`update posts set updated_at = now() where id = ${postId}`,
  ]);
  revalidateBlog();
}

export async function unpublishTranslation(postId: string, locale: Locale) {
  const sql = db();
  await sql.transaction([
    sql`update post_translations set status = 'draft', updated_at = now()
        where post_id = ${postId} and locale = ${locale}`,
    sql`update posts set updated_at = now() where id = ${postId}`,
  ]);
  revalidateBlog();
}

export async function deletePost(postId: string) {
  await db()`delete from posts where id = ${postId}`;
  revalidateBlog();
}

/** Deleting the Turkish version deletes the whole post. */
export async function deleteTranslation(postId: string, locale: Locale) {
  if (locale === "tr") return deletePost(postId);
  await db()`delete from post_translations where post_id = ${postId} and locale = ${locale}`;
  revalidateBlog();
}

export async function updatePostSettings(
  postId: string,
  settings: {
    category: string | null;
    coverImageUrl: string | null;
    coverAlt: string | null;
  }
) {
  await db()`
    update posts set
      category = ${settings.category},
      cover_image_url = ${settings.coverImageUrl},
      cover_alt = ${settings.coverAlt},
      updated_at = now()
    where id = ${postId}`;
  revalidateBlog();
}

/** Number of posts created through the Claude connector in the last 24 hours. */
export async function countRecentMcpPosts(): Promise<number> {
  const rows = await db()`
    select count(*)::int as n from posts
    where source = 'mcp' and created_at > now() - interval '24 hours'`;
  return rows[0]?.n ?? 0;
}
