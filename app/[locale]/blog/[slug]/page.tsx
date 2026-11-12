import { cache } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FiCalendar, FiClock, FiCheckCircle } from "react-icons/fi";
import { Link, redirect } from "@/i18n/routing";
import type { Locale } from "@/i18n/config";
import Breadcrumb from "@/components/Breadcrumb";
import Sidebar from "@/components/Sidebar";
import ContactCTA from "@/components/ContactCTA";
import Markdown from "@/components/blog/Markdown";
import ArticleJsonLd from "@/components/blog/ArticleJsonLd";
import {
  getForeignSlug,
  getPostForPreview,
  getPublishedPost,
} from "@/lib/blog/queries";
import { getBlogCategory } from "@/lib/blog/categories";
import { formatDate, stripSiteSuffix } from "@/lib/blog/format";
import { isAdmin } from "@/lib/admin/session";
import { blogPath } from "@/lib/site";

export const revalidate = 86400;

// Posts are rendered on first request and cached until an admin publishes
// or unpublishes something (revalidateTag("blog")). Nothing is built ahead,
// so `next build` never needs the database.
export function generateStaticParams() {
  return [];
}

type Props = { params: Promise<{ locale: string; slug: string }> };

const OG_LOCALES: Record<string, string> = {
  tr: "tr_TR",
  en: "en_US",
  de: "de_DE",
  ru: "ru_RU",
};

const loadPost = cache(async (locale: Locale, slug: string) => {
  // Only touch cookies in draft mode, so normal visits stay static.
  if ((await draftMode()).isEnabled && (await isAdmin())) {
    const draft = await getPostForPreview(locale, slug);
    return draft ? { post: draft, preview: true } : null;
  }
  const post = await getPublishedPost(locale, slug);
  return post ? { post, preview: false } : null;
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const result = await loadPost(locale as Locale, slug);
  if (!result) return {};
  const { post, preview } = result;

  const title = stripSiteSuffix(post.metaTitle || post.title);
  const description = post.metaDescription || post.excerpt;
  const languages: Record<string, string> = {};
  for (const alt of post.alternates) {
    languages[alt.locale] = blogPath(alt.locale, alt.slug);
  }
  if (languages.tr) languages["x-default"] = languages.tr;
  const image = post.coverImageUrl ?? "/images/dr-erkan-elci.jpg";

  return {
    title,
    description,
    alternates: { canonical: blogPath(locale, post.slug), languages },
    openGraph: {
      type: "article",
      url: blogPath(locale, post.slug),
      title,
      description,
      siteName: "Doç. Dr. Erkan Elçi",
      locale: OG_LOCALES[locale] ?? "tr_TR",
      ...(post.publishedAt && { publishedTime: post.publishedAt }),
      modifiedTime: post.reviewedAt ?? post.updatedAt,
      images: [{ url: image, alt: post.coverAlt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    ...(preview && { robots: { index: false, follow: false } }),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const result = await loadPost(locale as Locale, slug);
  if (!result) {
    // e.g. language switch from /blog/<tr-slug> to /en/blog/<tr-slug>
    const foreign = await getForeignSlug(locale as Locale, slug);
    if (foreign.slug) {
      redirect({
        href: { pathname: "/blog/[slug]", params: { slug: foreign.slug } },
        locale,
      });
    }
    if (foreign.found) redirect({ href: "/blog", locale });
    notFound();
  }

  const { post, preview } = result;
  const t = await getTranslations("blog");
  const tCommon = await getTranslations("common");
  const tNav = await getTranslations("navigation");
  const category = getBlogCategory(post.category);

  return (
    <>
      {!preview && (
        <ArticleJsonLd post={post} homeLabel={tCommon("home")} blogLabel={t("title")} />
      )}

      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          {preview && (
            <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              <span>{t("previewBanner")}</span>
              <a href="/api/admin/preview?exit=1" className="font-semibold underline">
                {t("exitPreview")}
              </a>
            </div>
          )}
          <Breadcrumb items={[{ label: t("title"), href: "/blog" }, { label: post.title }]} />
          {category && (
            <Link
              href={category.href as any}
              className="inline-block mt-5 text-xs font-semibold uppercase tracking-wide text-primary hover:underline"
            >
              {tNav(category.navKey)}
            </Link>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-3 mb-4 max-w-4xl">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-lg text-gray-600 max-w-3xl">{post.excerpt}</p>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
            {post.publishedAt && (
              <span className="flex items-center gap-1.5">
                <FiCalendar className="w-4 h-4" aria-hidden />
                {t("publishedOn", { date: formatDate(post.publishedAt, locale) })}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <FiClock className="w-4 h-4" aria-hidden />
              {t("readingTime", { minutes: post.readingMinutes })}
            </span>
            {post.reviewedAt && (
              <span className="flex items-center gap-1.5">
                <FiCheckCircle className="w-4 h-4 text-primary" aria-hidden />
                {t("reviewedBy")}: {t("author")} · {formatDate(post.reviewedAt, locale)}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 space-y-10 min-w-0">
              {post.coverImageUrl && (
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-primary-50">
                  <Image
                    src={post.coverImageUrl}
                    alt={post.coverAlt || post.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}

              <Markdown content={post.contentMd} locale={locale} />

              {post.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-dark mb-6">{t("faq")}</h2>
                  <div className="space-y-4">
                    {post.faqs.map((faq, idx) => (
                      <details
                        key={idx}
                        className="group bg-white border border-gray-200 rounded-xl overflow-hidden"
                      >
                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-dark hover:text-primary transition-colors">
                          {faq.question}
                          <span className="ml-4 text-xl text-primary group-open:rotate-45 transition-transform">
                            +
                          </span>
                        </summary>
                        <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-light p-6">
                <Image
                  src="/images/dr-erkan-elci.jpg"
                  alt={t("author")}
                  width={64}
                  height={64}
                  className="h-16 w-16 flex-shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    {t("aboutAuthor")}
                  </p>
                  <Link
                    href="/hakkimda"
                    className="font-bold text-dark hover:text-primary transition-colors"
                  >
                    {t("author")}
                  </Link>
                  <p className="text-sm text-gray-600">{t("authorTitle")}</p>
                </div>
              </div>

              <p className="rounded-xl bg-primary-50 p-5 text-sm text-gray-600 leading-relaxed">
                {t("disclaimer")}
              </p>
            </article>

            <div className="lg:col-span-1">
              <Sidebar currentSlug="blog" />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
