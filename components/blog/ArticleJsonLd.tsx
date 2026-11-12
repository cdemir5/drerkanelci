import { PHYSICIAN_ID, SITE_URL, absoluteUrl, blogPath } from "@/lib/site";
import type { PostDetail } from "@/lib/blog/types";

export default function ArticleJsonLd({
  post,
  homeLabel,
  blogLabel,
}: {
  post: PostDetail;
  homeLabel: string;
  blogLabel: string;
}) {
  const url = absoluteUrl(blogPath(post.locale, post.slug));
  const image = post.coverImageUrl ?? `${SITE_URL}/images/dr-erkan-elci.jpg`;
  const homeUrl = absoluteUrl(post.locale === "tr" ? "/" : `/${post.locale}`);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "MedicalWebPage",
      "@id": url,
      url,
      name: post.title,
      inLanguage: post.locale,
      ...(post.reviewedAt && { lastReviewed: post.reviewedAt }),
      reviewedBy: { "@id": PHYSICIAN_ID },
      mainEntity: { "@id": `${url}#article` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: { "@id": url },
      headline: post.title,
      description: post.metaDescription || post.excerpt,
      image,
      inLanguage: post.locale,
      ...(post.publishedAt && { datePublished: post.publishedAt }),
      dateModified: post.reviewedAt ?? post.updatedAt,
      author: { "@id": PHYSICIAN_ID },
      publisher: { "@id": PHYSICIAN_ID },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: homeLabel, item: homeUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: blogLabel,
          item: absoluteUrl(blogPath(post.locale)),
        },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (post.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });

  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }}
    />
  );
}
