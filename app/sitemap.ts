import { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n/config";
import { routing } from "@/i18n/routing";
import { getPublishedPosts, getSitemapPosts } from "@/lib/blog/queries";
import { SITE_URL, blogPath } from "@/lib/site";
import { localizedPath } from "@/lib/seo";

// Rendered per request: Next 14 does not apply revalidateTag to cached route
// handlers, only to pages. The blog queries are still served from the data
// cache (tag "blog"), so this stays cheap and is fresh right after a publish.
export const dynamic = "force-dynamic";

type Entry = MetadataRoute.Sitemap[number];

function settingsFor(internalPath: string): Pick<Entry, "priority" | "changeFrequency"> {
  if (internalPath === "/") return { priority: 1, changeFrequency: "weekly" };
  const isSubPage = internalPath.split("/").length > 2; // "/miyom/miyom-nedir"
  return isSubPage
    ? { priority: 0.6, changeFrequency: "monthly" }
    : { priority: 0.8, changeFrequency: "monthly" };
}

/**
 * Every static route in i18n/routing.ts, in every language, using exactly the
 * same URLs as the pages' canonical tags (lib/seo.ts).
 */
function pageEntries(): MetadataRoute.Sitemap {
  const internalPaths = Object.keys(routing.pathnames).filter(
    (path) => !path.includes("[") && !path.startsWith("/blog")
  );

  const entries: MetadataRoute.Sitemap = [];
  for (const path of internalPaths) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[locale] = SITE_URL + localizedPath(path, locale);
    }
    languages["x-default"] = languages[defaultLocale];

    for (const locale of locales) {
      entries.push({ url: languages[locale], ...settingsFor(path), alternates: { languages } });
    }
  }
  return entries;
}

async function blogEntries(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  // Blog list: Turkish always, other languages once they have posts.
  const listLanguages: Record<string, string> = {};
  for (const locale of locales) {
    if (locale === defaultLocale || (await getPublishedPosts(locale)).length > 0) {
      listLanguages[locale] = `${SITE_URL}${blogPath(locale)}`;
    }
  }
  for (const url of Object.values(listLanguages)) {
    entries.push({
      url,
      changeFrequency: "weekly",
      priority: 0.7,
      alternates: { languages: listLanguages },
    });
  }

  // Posts: one entry per published language version, with its siblings.
  const posts = await getSitemapPosts();
  const byPost = new Map<string, typeof posts>();
  for (const post of posts) {
    byPost.set(post.postId, [...(byPost.get(post.postId) ?? []), post]);
  }
  for (const versions of Array.from(byPost.values())) {
    const languages = Object.fromEntries(
      versions.map((v) => [v.locale, `${SITE_URL}${blogPath(v.locale, v.slug)}`])
    );
    for (const version of versions) {
      entries.push({
        url: `${SITE_URL}${blogPath(version.locale, version.slug)}`,
        lastModified: new Date(version.lastModified),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [...pageEntries(), ...(await blogEntries())];
}
