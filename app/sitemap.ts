import { MetadataRoute } from "next";
import { locales, defaultLocale, type Locale } from "@/i18n/config";
import { routing } from "@/i18n/routing";
import { slugMap, categorySubPages } from "@/i18n/slugs";

const baseUrl = "https://drerkanelci.com";

// Category parent paths (TR key → routing pathname key)
const categoryPaths: Record<string, string> = {
  miyom: "/miyom",
  endometriozis: "/endometriozis",
  "jinekolojik-onkoloji": "/jinekolojik-onkoloji",
  "genital-estetik": "/genital-estetik",
  "hpv-kolposkopi": "/hpv-kolposkopi",
};

function getLocalizedPath(pathnameKey: string, locale: Locale): string {
  const pathConfig = (routing.pathnames as Record<string, any>)[pathnameKey];
  if (!pathConfig) return pathnameKey;
  if (typeof pathConfig === "string") return pathConfig;
  return pathConfig[locale] ?? pathConfig.tr ?? pathnameKey;
}

function buildUrl(locale: Locale, path: string): string {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return `${baseUrl}${prefix}${path}`;
}

function buildAlternates(
  getPath: (locale: Locale) => string
): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    const key = locale === defaultLocale ? "tr" : locale;
    alternates[key] = buildUrl(locale, getPath(locale));
  }
  return alternates;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Standalone pages (no sub-slugs)
  const standaloneKeys = [
    "/",
    "/hakkimda",
    "/iletisim",
    "/videolar",
    "/robotik-cerrahi",
    "/kisirlik-tedavisi",
    "/yuksek-riskli-gebelikler",
    "/ileri-laparoskopik-cerrahi",
    "/histeroskopik-cerrahi",
    "/gebelik-dogum",
    "/jinekoloji",
    "/urojinekoloji",
    "/vnotes",
  ];

  for (const key of standaloneKeys) {
    const priority = key === "/" ? 1 : 0.8;
    const changeFrequency = key === "/" ? "weekly" : "monthly";

    entries.push({
      url: buildUrl(defaultLocale, getLocalizedPath(key, defaultLocale)),
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: buildAlternates((locale) =>
          getLocalizedPath(key, locale)
        ),
      },
    });
  }

  // Category parent pages
  for (const [, pathKey] of Object.entries(categoryPaths)) {
    entries.push({
      url: buildUrl(
        defaultLocale,
        getLocalizedPath(pathKey, defaultLocale)
      ),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: buildAlternates((locale) =>
          getLocalizedPath(pathKey, locale)
        ),
      },
    });
  }

  // Category sub-pages
  for (const [category, subPages] of Object.entries(categorySubPages)) {
    const parentPathKey = categoryPaths[category];
    if (!parentPathKey) continue;

    for (const subKey of subPages) {
      const slugEntry = slugMap[subKey];
      if (!slugEntry) continue;

      entries.push({
        url: buildUrl(
          defaultLocale,
          `${getLocalizedPath(parentPathKey, defaultLocale)}/${slugEntry.tr}`
        ),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: {
          languages: buildAlternates((locale) => {
            const parentPath = getLocalizedPath(parentPathKey, locale);
            const subSlug = slugEntry[locale] ?? slugEntry.tr;
            return `${parentPath}/${subSlug}`;
          }),
        },
      });
    }
  }

  return entries;
}
