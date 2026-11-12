import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { isAdmin } from "@/lib/admin/session";
import { getPostAdmin } from "@/lib/blog/queries";
import { blogPath } from "@/lib/site";

export const dynamic = "force-dynamic";

/**
 * /api/admin/preview?id=<post>&locale=<tr|en|de|ru> → turns on Next.js draft
 * mode and opens the real post page, which then shows the unpublished draft.
 * /api/admin/preview?exit=1 → turns draft mode off again.
 */
export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;

  if (params.has("exit")) {
    (await draftMode()).disable();
    redirect("/admin");
  }

  if (!(await isAdmin())) redirect("/admin/login");

  const id = params.get("id") ?? "";
  const locale = params.get("locale") as Locale;
  if (!locales.includes(locale)) {
    return new Response("Geçersiz dil", { status: 400 });
  }

  const post = await getPostAdmin(id);
  const translation = post?.translations[locale];
  if (!translation) return new Response("Yazı bulunamadı", { status: 404 });

  (await draftMode()).enable();
  redirect(blogPath(locale, translation.slug));
}
