import { defaultLocale } from "@/i18n/config";

export const SITE_URL = "https://drerkanelci.com";

/** Schema.org id of the Physician entity declared in app/[locale]/layout.tsx */
export const PHYSICIAN_ID = `${SITE_URL}/#physician`;

export function localePrefix(locale: string): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/** Public path of the blog list (no slug) or a blog post, e.g. "/en/blog/foo". */
export function blogPath(locale: string, slug?: string): string {
  return `${localePrefix(locale)}/blog${slug ? `/${encodeURIComponent(slug)}` : ""}`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
