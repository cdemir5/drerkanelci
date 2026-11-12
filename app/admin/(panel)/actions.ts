"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { destroySession, requireAdmin } from "@/lib/admin/session";
import {
  BlogError,
  createPost,
  deleteTranslation,
  publishTranslation,
  saveTranslation,
  unpublishTranslation,
  updatePostSettings,
} from "@/lib/blog/mutations";
import { categorySchema, translationInputSchema } from "@/lib/blog/schema";

export type FormState = { ok: boolean; message: string } | null;

const FIELD_LABELS: Record<string, string> = {
  title: "Başlık",
  excerpt: "Özet",
  content_md: "İçerik",
  meta_title: "SEO başlığı",
  meta_description: "SEO açıklaması",
  faqs: "SSS",
};

function readLocale(formData: FormData): Locale {
  const locale = String(formData.get("locale") ?? "");
  if (!locales.includes(locale as Locale)) throw new Error("Geçersiz dil.");
  return locale as Locale;
}

function readPostId(formData: FormData): string {
  const id = String(formData.get("postId") ?? "");
  if (!/^[0-9a-f-]{36}$/i.test(id)) throw new Error("Geçersiz yazı.");
  return id;
}

function editorUrl(postId: string, locale: Locale, flash?: { msg?: string; err?: string }) {
  const params = new URLSearchParams({ lang: locale });
  if (flash?.msg) params.set("msg", flash.msg);
  if (flash?.err) params.set("err", flash.err);
  return `/admin/posts/${postId}?${params}`;
}

function refreshAdmin(postId?: string) {
  revalidatePath("/admin");
  if (postId) revalidatePath(`/admin/posts/${postId}`);
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login");
}

export async function createEmptyPostAction() {
  await requireAdmin();
  const { postId } = await createPost({
    source: "admin",
    tr: translationInputSchema.parse({ title: "Yeni yazı" }),
  });
  refreshAdmin();
  redirect(editorUrl(postId, "tr"));
}

export async function saveTranslationAction(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  await requireAdmin();
  const postId = readPostId(formData);
  const locale = readLocale(formData);
  const publish = formData.get("intent") === "publish";

  let faqs: unknown = [];
  try {
    faqs = JSON.parse(String(formData.get("faqs") ?? "[]"));
  } catch {
    return { ok: false, message: "SSS listesi okunamadı." };
  }
  // Drop rows the admin left completely empty.
  if (Array.isArray(faqs)) {
    faqs = faqs.filter(
      (f) => String(f?.question ?? "").trim() || String(f?.answer ?? "").trim()
    );
  }

  const parsed = translationInputSchema.safeParse({
    title: formData.get("title"),
    excerpt: formData.get("excerpt"),
    content_md: formData.get("content_md"),
    meta_title: formData.get("meta_title"),
    meta_description: formData.get("meta_description"),
    faqs,
  });
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    const field = FIELD_LABELS[String(issue.path[0])] ?? String(issue.path[0]);
    return { ok: false, message: `${field} alanı geçersiz: ${issue.message}` };
  }

  try {
    await saveTranslation(postId, locale, parsed.data, {
      allowPublished: true,
      slug: String(formData.get("slug") ?? "") || undefined,
    });
    if (publish) await publishTranslation(postId, locale);
  } catch (error) {
    if (error instanceof BlogError) {
      refreshAdmin(postId);
      return { ok: false, message: error.message };
    }
    throw error;
  }

  refreshAdmin(postId);
  return { ok: true, message: publish ? "Kaydedildi ve yayınlandı." : "Kaydedildi." };
}

export async function publishAction(formData: FormData) {
  await requireAdmin();
  const postId = readPostId(formData);
  const locale = readLocale(formData);
  let flash: { msg?: string; err?: string } = { msg: "Yayınlandı." };
  try {
    await publishTranslation(postId, locale);
  } catch (error) {
    if (!(error instanceof BlogError)) throw error;
    flash = { err: error.message };
  }
  refreshAdmin(postId);
  redirect(editorUrl(postId, locale, flash));
}

export async function unpublishAction(formData: FormData) {
  await requireAdmin();
  const postId = readPostId(formData);
  const locale = readLocale(formData);
  await unpublishTranslation(postId, locale);
  refreshAdmin(postId);
  redirect(
    editorUrl(postId, locale, {
      msg:
        locale === "tr"
          ? "Yayından kaldırıldı. Türkçe sürüm taslakta olduğu için diğer diller de sitede görünmez."
          : "Yayından kaldırıldı.",
    })
  );
}

export async function deleteTranslationAction(formData: FormData) {
  await requireAdmin();
  const postId = readPostId(formData);
  const locale = readLocale(formData);
  await deleteTranslation(postId, locale);
  refreshAdmin(postId);
  if (locale === "tr") redirect("/admin?msg=Yaz%C4%B1+silindi.");
  redirect(editorUrl(postId, "tr", { msg: "Dil sürümü silindi." }));
}

export async function updateSettingsAction(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  await requireAdmin();
  const postId = readPostId(formData);

  const rawCategory = String(formData.get("category") ?? "");
  const category = rawCategory ? categorySchema.safeParse(rawCategory) : null;
  if (category && !category.success) return { ok: false, message: "Geçersiz kategori." };

  const coverImageUrl = String(formData.get("coverImageUrl") ?? "").trim() || null;
  if (coverImageUrl) {
    try {
      const url = new URL(coverImageUrl);
      if (!url.hostname.endsWith(".public.blob.vercel-storage.com")) throw new Error();
    } catch {
      return { ok: false, message: "Kapak görseli panelden yüklenmelidir." };
    }
  }

  await updatePostSettings(postId, {
    category: category?.success ? category.data : null,
    coverImageUrl,
    coverAlt: String(formData.get("coverAlt") ?? "").trim().slice(0, 200) || null,
  });
  refreshAdmin(postId);
  return { ok: true, message: "Ayarlar kaydedildi." };
}
