import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "@/i18n/config";
import { getPathname } from "@/i18n/routing";
import { stripSiteSuffix } from "@/lib/blog/format";

export const OG_LOCALES: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
  de: "de_DE",
  ru: "ru_RU",
};

export const DEFAULT_OG_IMAGE = {
  url: "/images/dr-erkan-elci.jpg",
  width: 807,
  height: 772,
  alt: "Doç. Dr. Erkan Elçi",
};

function toLocale(locale: string): Locale {
  return (locales as readonly string[]).includes(locale) ? (locale as Locale) : defaultLocale;
}

/**
 * Public path of an internal route in a locale, with the locale prefix,
 * e.g. ("/miyom/miyom-nedir", "en") → "/en/fibroid/what-is-fibroid".
 */
export function localizedPath(internalPath: string, locale: string): string {
  // Internal paths come from code, not users; next-intl's typed href is a union.
  return getPathname({ locale: toLocale(locale), href: internalPath as never });
}

/** Own canonical + hreflang for every language version of a page. */
export function alternatesFor(internalPath: string, locale: string): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = localizedPath(internalPath, l);
  languages["x-default"] = languages[defaultLocale];
  return { canonical: localizedPath(internalPath, locale), languages };
}

/**
 * Metadata for a regular (non-blog) page. Every page must set its own
 * canonical; the locale layout deliberately sets none.
 */
export function pageMetadata(opts: {
  locale: string;
  /** Internal (Turkish) route, e.g. "/hakkimda" or "/miyom/miyom-nedir" */
  path: string;
  title: string | { absolute: string };
  description: string;
}): Metadata {
  const locale = toLocale(opts.locale);
  // The layout's title template already appends the doctor's name.
  const title = typeof opts.title === "string" ? stripSiteSuffix(opts.title) : opts.title;
  const ogTitle = typeof title === "string" ? title : title.absolute;

  return {
    title,
    description: opts.description,
    alternates: alternatesFor(opts.path, locale),
    openGraph: {
      type: "website",
      url: localizedPath(opts.path, locale),
      title: ogTitle,
      description: opts.description,
      siteName: "Doç. Dr. Erkan Elçi",
      locale: OG_LOCALES[locale],
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
