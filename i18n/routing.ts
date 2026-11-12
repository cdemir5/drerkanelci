import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { locales, defaultLocale, type Locale } from "./config";
import { slugMap, categorySubPages } from "./slugs";

// Category paths per locale (internal key = Turkish folder name in app/[locale]).
const categoryPaths = {
  miyom: { tr: "/miyom", en: "/fibroid", de: "/myom", ru: "/mioma" },
  endometriozis: {
    tr: "/endometriozis",
    en: "/endometriosis",
    de: "/endometriose",
    ru: "/endometrioz",
  },
  "jinekolojik-onkoloji": {
    tr: "/jinekolojik-onkoloji",
    en: "/gynecologic-oncology",
    de: "/gynaekologische-onkologie",
    ru: "/ginekologicheskaya-onkologiya",
  },
  "genital-estetik": {
    tr: "/genital-estetik",
    en: "/genital-aesthetics",
    de: "/genital-aesthetik",
    ru: "/genitalnaya-estetika",
  },
  "hpv-kolposkopi": {
    tr: "/hpv-kolposkopi",
    en: "/hpv-colposcopy",
    de: "/hpv-kolposkopie",
    ru: "/vpch-kolposkopiya",
  },
} as const satisfies Record<string, Record<Locale, string>>;

/**
 * One entry per category sub-page, e.g. "/miyom/miyom-nedir" →
 * { en: "/fibroid/what-is-fibroid", de: "/myom/was-ist-myom", ... }, generated
 * from i18n/slugs.ts. This makes the translated URLs resolve to the Turkish
 * page folders, makes <Link href="/miyom/miyom-nedir"> render the translated
 * URL, and lets the language switcher move between them.
 */
const subPagePathnames: Record<string, Record<Locale, string>> = {};
for (const [category, keys] of Object.entries(categorySubPages)) {
  const base = categoryPaths[category as keyof typeof categoryPaths];
  if (!base) continue;
  for (const key of keys) {
    const slugs = slugMap[key];
    if (!slugs) continue;
    subPagePathnames[`${base.tr}/${slugs.tr}`] = Object.fromEntries(
      locales.map((locale) => [locale, `${base[locale]}/${slugs[locale]}`])
    ) as Record<Locale, string>;
  }
}

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/hakkimda": {
      tr: "/hakkimda",
      en: "/about",
      de: "/ueber-mich",
      ru: "/o-nas",
    },
    "/iletisim": {
      tr: "/iletisim",
      en: "/contact",
      de: "/kontakt",
      ru: "/kontakty",
    },
    "/videolar": {
      tr: "/videolar",
      en: "/videos",
      de: "/videos",
      ru: "/video",
    },
    // Category landing pages
    "/miyom": categoryPaths.miyom,
    "/endometriozis": categoryPaths.endometriozis,
    "/jinekolojik-onkoloji": categoryPaths["jinekolojik-onkoloji"],
    "/genital-estetik": categoryPaths["genital-estetik"],
    "/hpv-kolposkopi": categoryPaths["hpv-kolposkopi"],
    // Category sub-pages with translated slugs (see subPagePathnames above)
    ...subPagePathnames,
    // Fallbacks for old links that use the Turkish sub-slug under a
    // translated category (e.g. /en/fibroid/miyom-nedir). Static entries above
    // always match first; these keep such URLs working instead of 404.
    "/miyom/[subSlug]": {
      tr: "/miyom/[subSlug]",
      en: "/fibroid/[subSlug]",
      de: "/myom/[subSlug]",
      ru: "/mioma/[subSlug]",
    },
    "/endometriozis/[subSlug]": {
      tr: "/endometriozis/[subSlug]",
      en: "/endometriosis/[subSlug]",
      de: "/endometriose/[subSlug]",
      ru: "/endometrioz/[subSlug]",
    },
    "/jinekolojik-onkoloji/[subSlug]": {
      tr: "/jinekolojik-onkoloji/[subSlug]",
      en: "/gynecologic-oncology/[subSlug]",
      de: "/gynaekologische-onkologie/[subSlug]",
      ru: "/ginekologicheskaya-onkologiya/[subSlug]",
    },
    "/genital-estetik/[subSlug]": {
      tr: "/genital-estetik/[subSlug]",
      en: "/genital-aesthetics/[subSlug]",
      de: "/genital-aesthetik/[subSlug]",
      ru: "/genitalnaya-estetika/[subSlug]",
    },
    "/hpv-kolposkopi/[subSlug]": {
      tr: "/hpv-kolposkopi/[subSlug]",
      en: "/hpv-colposcopy/[subSlug]",
      de: "/hpv-kolposkopie/[subSlug]",
      ru: "/vpch-kolposkopiya/[subSlug]",
    },
    // Standalone pages
    "/robotik-cerrahi": {
      tr: "/robotik-cerrahi",
      en: "/robotic-surgery",
      de: "/roboterchirurgie",
      ru: "/roboticheskaya-hirurgiya",
    },
    "/kisirlik-tedavisi": {
      tr: "/kisirlik-tedavisi",
      en: "/infertility-treatment",
      de: "/unfruchtbarkeitsbehandlung",
      ru: "/lechenie-besplodiya",
    },
    "/yuksek-riskli-gebelikler": {
      tr: "/yuksek-riskli-gebelikler",
      en: "/high-risk-pregnancies",
      de: "/hochrisiko-schwangerschaften",
      ru: "/beremennost-vysokogo-riska",
    },
    "/ileri-laparoskopik-cerrahi": {
      tr: "/ileri-laparoskopik-cerrahi",
      en: "/advanced-laparoscopic-surgery",
      de: "/fortgeschrittene-laparoskopische-chirurgie",
      ru: "/prodvinutaya-laparoskopicheskaya-hirurgiya",
    },
    "/histeroskopik-cerrahi": {
      tr: "/histeroskopik-cerrahi",
      en: "/hysteroscopic-surgery",
      de: "/hysteroskopische-chirurgie",
      ru: "/gisteroskopicheskaya-hirurgiya",
    },
    "/gebelik-dogum": {
      tr: "/gebelik-dogum",
      en: "/pregnancy-birth",
      de: "/schwangerschaft-geburt",
      ru: "/beremennost-rody",
    },
    "/jinekoloji": {
      tr: "/jinekoloji",
      en: "/gynecology",
      de: "/gynaekologie",
      ru: "/ginekologiya",
    },
    "/urojinekoloji": {
      tr: "/urojinekoloji",
      en: "/urogynecology",
      de: "/urogynaekologie",
      ru: "/uroginekologiya",
    },
    "/vnotes": {
      tr: "/vnotes",
      en: "/vnotes",
      de: "/vnotes",
      ru: "/vnotes",
    },
    // Blog (post slugs are stored per language in the database)
    "/blog": "/blog",
    "/blog/[slug]": "/blog/[slug]",
  },
});

export type Pathnames = keyof typeof routing.pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
