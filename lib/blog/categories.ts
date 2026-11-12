/**
 * Blog categories map to existing service pages: `navKey` is a key in the
 * `navigation` message namespace (already translated in all locales) and
 * `href` is an internal pathname from i18n/routing.ts.
 */
export const BLOG_CATEGORIES = {
  miyom: { navKey: "miyom", href: "/miyom" },
  endometriozis: { navKey: "endometriozis", href: "/endometriozis" },
  "jinekolojik-onkoloji": { navKey: "gynecologicOncology", href: "/jinekolojik-onkoloji" },
  "genital-estetik": { navKey: "genitalAesthetics", href: "/genital-estetik" },
  "hpv-kolposkopi": { navKey: "hpvColposcopy", href: "/hpv-kolposkopi" },
  "gebelik-dogum": { navKey: "pregnancyBirth", href: "/gebelik-dogum" },
  "yuksek-riskli-gebelikler": { navKey: "highRiskPregnancies", href: "/yuksek-riskli-gebelikler" },
  "kisirlik-tedavisi": { navKey: "infertility", href: "/kisirlik-tedavisi" },
  "robotik-cerrahi": { navKey: "roboticSurgery", href: "/robotik-cerrahi" },
  "ileri-laparoskopik-cerrahi": { navKey: "advancedLaparoscopy", href: "/ileri-laparoskopik-cerrahi" },
  "histeroskopik-cerrahi": { navKey: "hysteroscopy", href: "/histeroskopik-cerrahi" },
  jinekoloji: { navKey: "gynecology", href: "/jinekoloji" },
  urojinekoloji: { navKey: "urogynecology", href: "/urojinekoloji" },
  vnotes: { navKey: "vnotes", href: "/vnotes" },
} as const;

export type BlogCategory = keyof typeof BLOG_CATEGORIES;

export const BLOG_CATEGORY_KEYS = Object.keys(BLOG_CATEGORIES) as [
  BlogCategory,
  ...BlogCategory[],
];

export function getBlogCategory(key: string | null | undefined) {
  if (!key) return null;
  return (BLOG_CATEGORIES as Record<string, { navKey: string; href: string }>)[key] ?? null;
}
