import Image from "next/image";
import { useTranslations } from "next-intl";
import { FiBookOpen } from "react-icons/fi";
import { Link } from "@/i18n/routing";
import { getBlogCategory } from "@/lib/blog/categories";
import { formatDate } from "@/lib/blog/format";
import type { PostSummary } from "@/lib/blog/types";

export default function PostCard({ post }: { post: PostSummary }) {
  const t = useTranslations("blog");
  const tNav = useTranslations("navigation");
  const category = getBlogCategory(post.category);

  return (
    <Link
      href={{ pathname: "/blog/[slug]", params: { slug: post.slug } }}
      className="card group flex flex-col h-full hover:-translate-y-0.5"
    >
      <div className="relative aspect-[16/9] bg-primary-50 overflow-hidden">
        {post.coverImageUrl ? (
          <Image
            src={post.coverImageUrl}
            alt={post.coverAlt || post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 gradient-primary flex items-center justify-center">
            <FiBookOpen className="w-10 h-10 text-white/80" aria-hidden />
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        {category && (
          <span className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
            {tNav(category.navKey)}
          </span>
        )}
        <h2 className="text-lg font-bold text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3 flex-1">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between gap-2 text-xs text-gray-500">
          <span>{formatDate(post.publishedAt, post.locale)}</span>
          <span>{t("readingTime", { minutes: post.readingMinutes })}</span>
        </div>
      </div>
    </Link>
  );
}
