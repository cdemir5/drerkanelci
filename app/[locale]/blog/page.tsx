import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { locales, type Locale } from "@/i18n/config";
import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import PostCard from "@/components/blog/PostCard";
import { getPublishedPosts } from "@/lib/blog/queries";
import { blogPath } from "@/lib/site";

export const revalidate = 86400;

type Props = { params: Promise<{ locale: string }> };

const OG_LOCALES: Record<string, string> = {
  tr: "tr_TR",
  en: "en_US",
  de: "de_DE",
  ru: "ru_RU",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  // hreflang only for languages that actually have posts (Turkish always).
  const languages: Record<string, string> = {};
  for (const l of locales) {
    if (l === "tr" || (await getPublishedPosts(l)).length > 0) {
      languages[l] = blogPath(l);
    }
  }
  languages["x-default"] = blogPath("tr");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: { canonical: blogPath(locale), languages },
    openGraph: {
      type: "website",
      url: blogPath(locale),
      title: t("metaTitle"),
      description: t("metaDescription"),
      siteName: "Doç. Dr. Erkan Elçi",
      locale: OG_LOCALES[locale] ?? "tr_TR",
      images: [{ url: "/images/dr-erkan-elci.jpg", alt: "Doç. Dr. Erkan Elçi" }],
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const posts = await getPublishedPosts(locale as Locale);

  return (
    <>
      <section className="gradient-hero pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: t("title") }]} />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mt-4 mb-4">
            {t("heading")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">{t("description")}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.postId} post={post} />
              ))}
            </div>
          ) : (
            <div className="max-w-xl mx-auto text-center py-12">
              <p className="text-lg text-gray-600">{t("empty")}</p>
              {locale !== "tr" && (
                <Link href="/blog" locale="tr" className="btn-outline mt-6">
                  Türkçe Blog
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
