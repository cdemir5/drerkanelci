import { z } from "zod";
import type { McpServer } from "@modelcontextprotocol/server";
import { SITE_URL, blogPath, absoluteUrl } from "@/lib/site";
import { getPostAdmin, listPostsAdmin } from "@/lib/blog/queries";
import {
  BlogError,
  countRecentMcpPosts,
  createPost,
  saveTranslation,
} from "@/lib/blog/mutations";
import { categorySchema, faqSchema, translationInputSchema } from "@/lib/blog/schema";
import { getWritingGuidelines } from "@/lib/blog/guidelines";
import type { Locale } from "@/i18n/config";

/** Max posts the connector may create per 24 hours (abuse guard). */
const DAILY_CREATE_LIMIT = 10;

const GUIDELINES_FIRST = "Önce get_writing_guidelines çağrılmış olmalı. ";

const fields = {
  title: z.string().min(3).max(200).describe("Yazı başlığı (40–70 karakter önerilir)"),
  excerpt: z.string().max(500).describe("1–2 cümlelik özet; liste sayfasında görünür"),
  content_md: z
    .string()
    .min(200)
    .max(50_000)
    .describe("Yazı gövdesi, Markdown. '#' başlık kullanma; bölümler '## ' ile başlar."),
  meta_title: z.string().max(90).describe("SEO başlığı, en fazla 60 karakter, site adı olmadan"),
  meta_description: z.string().max(200).describe("SEO açıklaması, 120–155 karakter"),
  faqs: z.array(faqSchema).max(12).describe("3–6 sıkça sorulan soru ve cevabı"),
};

function adminUrl(postId: string) {
  return `${SITE_URL}/admin/posts/${postId}`;
}

function ok(data: unknown) {
  return {
    content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
  };
}

function fail(message: string) {
  return {
    isError: true,
    content: [{ type: "text" as const, text: message }],
  };
}

async function guarded<T>(fn: () => Promise<T>) {
  try {
    return ok(await fn());
  } catch (error) {
    if (error instanceof BlogError) return fail(error.message);
    console.error("[mcp] tool error", error);
    return fail("Sunucu hatası; lütfen biraz sonra tekrar deneyin.");
  }
}

export function registerBlogTools(server: McpServer) {
  server.registerTool(
    "get_writing_guidelines",
    {
      title: "Yazım kurallarını getir",
      description:
        "drerkanelci.com blogu için zorunlu yazım kuralları (ton, Türkiye sağlık tanıtım yönetmeliği, yapı, SEO alanları, kullanılabilecek iç linkler). Herhangi bir yazı yazmadan veya çevirmeden önce çağır.",
      annotations: { readOnlyHint: true },
    },
    async () => ({
      content: [{ type: "text" as const, text: getWritingGuidelines() }],
    })
  );

  server.registerTool(
    "list_posts",
    {
      title: "Yazıları listele",
      description:
        "Blogdaki mevcut yazıları (taslak ve yayında) dil sürümleri ve durumlarıyla listeler. Aynı konuyu tekrar yazmamak için kullan.",
      inputSchema: z.object({
        status: z
          .enum(["draft", "published"])
          .optional()
          .describe("Türkçe sürümün durumuna göre filtre"),
      }),
      annotations: { readOnlyHint: true },
    },
    async ({ status }) =>
      guarded(async () => {
        const posts = await listPostsAdmin(status);
        return posts.map((p) => ({
          post_id: p.id,
          updated_at: p.updatedAt,
          versions: p.translations,
        }));
      })
  );

  server.registerTool(
    "get_post",
    {
      title: "Yazıyı getir",
      description: "Bir yazının tüm dil sürümlerini tam içeriğiyle getirir (düzeltme veya çeviri için).",
      inputSchema: z.object({ post_id: z.string().uuid() }),
      annotations: { readOnlyHint: true },
    },
    async ({ post_id }) =>
      guarded(async () => {
        const post = await getPostAdmin(post_id);
        if (!post) throw new BlogError("Yazı bulunamadı.");
        return {
          post_id: post.id,
          category: post.category,
          admin_url: adminUrl(post.id),
          versions: Object.values(post.translations).map((t) => ({
            locale: t!.locale,
            status: t!.status,
            title: t!.title,
            excerpt: t!.excerpt,
            content_md: t!.contentMd,
            meta_title: t!.metaTitle,
            meta_description: t!.metaDescription,
            faqs: t!.faqs,
            public_url:
              t!.status === "published"
                ? absoluteUrl(blogPath(t!.locale, t!.slug))
                : null,
          })),
        };
      })
  );

  server.registerTool(
    "create_draft",
    {
      title: "Türkçe taslak oluştur",
      description:
        GUIDELINES_FIRST +
        "Yeni bir blog yazısını TÜRKÇE taslak olarak kaydeder. Yayınlamaz; doktor yönetim panelinden inceleyip yayınlar. Dönen admin_url'yi kullanıcıya ver.",
      inputSchema: z.object({
        ...fields,
        category: categorySchema.optional().describe("Yazının ilgili olduğu hizmet alanı"),
      }),
    },
    async ({ category, ...input }) =>
      guarded(async () => {
        if ((await countRecentMcpPosts()) >= DAILY_CREATE_LIMIT) {
          throw new BlogError(
            `Son 24 saatte en fazla ${DAILY_CREATE_LIMIT} yeni taslak oluşturulabilir. Mevcut bir taslağı update_draft ile güncelleyin veya daha sonra tekrar deneyin.`
          );
        }
        const tr = translationInputSchema.parse(input);
        const { postId } = await createPost({ source: "mcp", category, tr });
        return {
          post_id: postId,
          status: "draft",
          admin_url: adminUrl(postId),
          message:
            "Taslak kaydedildi. Doktor yönetim panelinden inceleyip yayınlayabilir.",
        };
      })
  );

  server.registerTool(
    "update_draft",
    {
      title: "Taslağı güncelle",
      description:
        GUIDELINES_FIRST +
        "Var olan bir dil sürümünü günceller. Yalnızca verilen alanlar değişir. Yayında olan sürümler değiştirilemez.",
      inputSchema: z.object({
        post_id: z.string().uuid(),
        locale: z.enum(["tr", "en", "de", "ru"]),
        title: fields.title.optional(),
        excerpt: fields.excerpt.optional(),
        content_md: fields.content_md.optional(),
        meta_title: fields.meta_title.optional(),
        meta_description: fields.meta_description.optional(),
        faqs: fields.faqs.optional(),
      }),
    },
    async ({ post_id, locale, ...changes }) =>
      guarded(async () => {
        const post = await getPostAdmin(post_id);
        if (!post) throw new BlogError("Yazı bulunamadı.");
        const current = post.translations[locale as Locale];
        if (!current) {
          throw new BlogError(
            locale === "tr"
              ? "Türkçe sürüm bulunamadı."
              : "Bu dilde sürüm yok; çeviri eklemek için upsert_translation kullanın."
          );
        }
        const merged = translationInputSchema.parse({
          title: changes.title ?? current.title,
          excerpt: changes.excerpt ?? current.excerpt,
          content_md: changes.content_md ?? current.contentMd,
          meta_title: changes.meta_title ?? current.metaTitle,
          meta_description: changes.meta_description ?? current.metaDescription,
          faqs: changes.faqs ?? current.faqs,
        });
        await saveTranslation(post_id, locale as Locale, merged, {
          allowPublished: false,
        });
        return {
          post_id,
          locale,
          status: "draft",
          admin_url: adminUrl(post_id),
          message: "Taslak güncellendi.",
        };
      })
  );

  server.registerTool(
    "upsert_translation",
    {
      title: "Çeviri ekle/güncelle",
      description:
        GUIDELINES_FIRST +
        "Bir yazının İngilizce (en), Almanca (de) veya Rusça (ru) sürümünü taslak olarak ekler ya da günceller. Önce get_post ile Türkçe metni al ve onu çevir.",
      inputSchema: z.object({
        post_id: z.string().uuid(),
        locale: z.enum(["en", "de", "ru"]),
        ...fields,
      }),
    },
    async ({ post_id, locale, ...input }) =>
      guarded(async () => {
        const translation = translationInputSchema.parse(input);
        const { created } = await saveTranslation(
          post_id,
          locale as Locale,
          translation,
          { allowPublished: false }
        );
        return {
          post_id,
          locale,
          status: "draft",
          admin_url: adminUrl(post_id),
          message: created ? "Çeviri taslağı eklendi." : "Çeviri taslağı güncellendi.",
        };
      })
  );

  server.registerPrompt(
    "blog-yazisi",
    {
      title: "Blog yazısı yaz",
      description: "drerkanelci.com için kurallara uygun bir blog yazısı taslağı hazırlar.",
      argsSchema: z.object({
        konu: z.string().describe("Yazının konusu, ör. 'Miyom ameliyatı sonrası iyileşme'"),
        notlar: z
          .string()
          .optional()
          .describe("Vurgulanmasını istediğiniz noktalar, hedef kitle vb."),
      }),
    },
    ({ konu, notlar }) => ({
      messages: [
        {
          role: "user" as const,
          content: {
            type: "text" as const,
            text: `drerkanelci.com blogu için şu konuda bir yazı hazırla: "${konu}".${
              notlar ? `\nNotlarım: ${notlar}` : ""
            }\n\nÖnce get_writing_guidelines ile kuralları al, list_posts ile benzer yazı olup olmadığına bak. Yazıyı kurallara göre yaz, bana kısaca özetle ve create_draft ile taslak olarak kaydet. Sonunda panel linkini ver.`,
          },
        },
      ],
    })
  );
}
