import Link from "next/link";
import { notFound } from "next/navigation";
import { locales, localeNames, type Locale } from "@/i18n/config";
import trNavigation from "@/messages/tr/navigation.json";
import { requireAdmin } from "@/lib/admin/session";
import { getPostAdmin } from "@/lib/blog/queries";
import { BLOG_CATEGORIES } from "@/lib/blog/categories";
import { formatDate } from "@/lib/blog/format";
import { blogPath } from "@/lib/site";
import {
  deleteTranslationAction,
  publishAction,
  unpublishAction,
} from "../../actions";
import StatusBadge from "../../StatusBadge";
import ConfirmSubmit from "../../ConfirmSubmit";
import TranslationForm from "./TranslationForm";
import PostSettingsForm from "./PostSettingsForm";

const navLabels = trNavigation.navigation as Record<string, string>;
const categoryOptions = Object.entries(BLOG_CATEGORIES).map(([key, c]) => ({
  key,
  label: navLabels[c.navKey] ?? key,
}));

export default async function EditPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: string; msg?: string; err?: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const { lang, msg, err } = await searchParams;

  const post = await getPostAdmin(id);
  if (!post) notFound();

  const locale: Locale = locales.includes(lang as Locale) ? (lang as Locale) : "tr";
  const translation = post.translations[locale];
  const trPublished = post.translations.tr?.status === "published";
  const canPublish = locale === "tr" || trPublished;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin" className="text-sm text-gray-500 hover:text-primary">
          ← Yazılar
        </Link>
        <h1 className="text-2xl font-bold mt-2">
          {post.translations.tr?.title ?? "(Başlıksız)"}
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          {post.source === "mcp" ? "Claude ile oluşturuldu" : "Panelden oluşturuldu"} ·{" "}
          {formatDate(post.createdAt, "tr")}
        </p>
      </div>

      {(msg || err) && (
        <p
          className={`rounded-lg border p-3 text-sm ${
            err
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-green-200 bg-green-50 text-green-800"
          }`}
        >
          {err ?? msg}
        </p>
      )}

      <nav className="flex flex-wrap gap-2 border-b">
        {locales.map((l) => {
          const t = post.translations[l];
          const active = l === locale;
          return (
            <Link
              key={l}
              href={`/admin/posts/${post.id}?lang=${l}`}
              className={`-mb-px flex items-center gap-2 border-b-2 px-3 py-2 text-sm ${
                active
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-gray-600 hover:text-primary"
              }`}
            >
              {localeNames[l]}
              <StatusBadge status={t?.status ?? null} />
            </Link>
          );
        })}
      </nav>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="lg:col-span-2 rounded-2xl border bg-white p-6">
          {!translation && locale !== "tr" && (
            <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-900">
              Bu dilde sürüm yok. En kolayı: claude.ai&apos;de bağlayıcı açıkken{" "}
              <em>&quot;{post.translations.tr?.title}&quot; yazısını {localeNames[locale]} diline çevir</em>{" "}
              deyin. İsterseniz aşağıya elle de yazabilirsiniz.
            </div>
          )}
          <TranslationForm
            key={locale}
            postId={post.id}
            locale={locale}
            translation={translation}
            canPublish={canPublish}
          />
        </section>

        <aside className="space-y-6">
          <section className="rounded-2xl border bg-white p-6 space-y-4">
            <h2 className="font-bold">Durum · {localeNames[locale]}</h2>
            {translation ? (
              <>
                <StatusBadge status={translation.status} />
                <dl className="text-xs text-gray-600 space-y-1">
                  {translation.publishedAt && (
                    <div>İlk yayın: {formatDate(translation.publishedAt, "tr")}</div>
                  )}
                  {translation.reviewedAt && (
                    <div>Son onay: {formatDate(translation.reviewedAt, "tr")}</div>
                  )}
                  <div>Son değişiklik: {formatDate(translation.updatedAt, "tr")}</div>
                </dl>

                {translation.status === "published" && trPublished && (
                  <a
                    href={blogPath(locale, translation.slug)}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-sm text-primary underline break-all"
                  >
                    Sitede gör ↗
                  </a>
                )}

                <a
                  href={`/api/admin/preview?id=${post.id}&locale=${locale}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline w-full py-2 text-sm"
                >
                  Önizle (kaydedilmiş hâli)
                </a>

                {translation.status === "draft" && (
                  <form action={publishAction}>
                    <input type="hidden" name="postId" value={post.id} />
                    <input type="hidden" name="locale" value={locale} />
                    <button
                      type="submit"
                      disabled={!canPublish}
                      className="btn-primary w-full py-2 text-sm disabled:opacity-50"
                    >
                      Yayınla
                    </button>
                    {!canPublish && (
                      <p className="text-xs text-gray-500 mt-1">Önce Türkçe sürümü yayınlayın.</p>
                    )}
                  </form>
                )}

                {translation.status === "published" && (
                  <form action={unpublishAction}>
                    <input type="hidden" name="postId" value={post.id} />
                    <input type="hidden" name="locale" value={locale} />
                    <ConfirmSubmit
                      message={
                        locale === "tr"
                          ? "Türkçe sürüm yayından kalkınca bu yazının tüm dilleri sitede gizlenir. Devam edilsin mi?"
                          : "Bu dil sürümü yayından kaldırılsın mı?"
                      }
                      className="w-full rounded-xl border border-gray-300 py-2 text-sm hover:bg-gray-50"
                    >
                      Yayından kaldır
                    </ConfirmSubmit>
                  </form>
                )}

                <form action={deleteTranslationAction}>
                  <input type="hidden" name="postId" value={post.id} />
                  <input type="hidden" name="locale" value={locale} />
                  <ConfirmSubmit
                    message={
                      locale === "tr"
                        ? "Yazının TÜM dil sürümleri kalıcı olarak silinecek. Emin misiniz?"
                        : `${localeNames[locale]} sürümü kalıcı olarak silinecek. Emin misiniz?`
                    }
                    className="w-full text-sm text-red-600 hover:underline"
                  >
                    {locale === "tr" ? "Yazıyı tamamen sil" : "Bu dil sürümünü sil"}
                  </ConfirmSubmit>
                </form>
              </>
            ) : (
              <p className="text-sm text-gray-500">Henüz oluşturulmadı.</p>
            )}
          </section>

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="font-bold mb-4">Yazı ayarları (tüm diller)</h2>
            <PostSettingsForm
              postId={post.id}
              category={post.category}
              coverImageUrl={post.coverImageUrl}
              coverAlt={post.coverAlt}
              categories={categoryOptions}
            />
          </section>
        </aside>
      </div>
    </div>
  );
}
