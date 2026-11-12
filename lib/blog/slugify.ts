import type { Locale } from "@/i18n/config";

const TURKISH: Record<string, string> = {
  ı: "i", ğ: "g", ş: "s", ç: "c", ö: "o", ü: "u", â: "a", î: "i", û: "u",
};

const GERMAN: Record<string, string> = {
  ä: "ae", ö: "oe", ü: "ue", ß: "ss",
};

// Matches the style of existing Russian slugs, e.g. "chto-takoe-mioma".
const RUSSIAN: Record<string, string> = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e", ж: "zh", з: "z",
  и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r",
  с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "ts", ч: "ch", ш: "sh",
  щ: "shch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
};

const MAX_LENGTH = 80;

export function slugify(text: string, locale: Locale): string {
  const lower =
    locale === "tr" ? text.toLocaleLowerCase("tr") : text.toLowerCase();

  const table = locale === "de" ? GERMAN : TURKISH;
  let out = "";
  for (const char of lower) {
    out += RUSSIAN[char] ?? table[char] ?? char;
  }

  let slug = out
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (slug.length > MAX_LENGTH) {
    const cut = slug.slice(0, MAX_LENGTH);
    const lastDash = cut.lastIndexOf("-");
    slug = lastDash > 20 ? cut.slice(0, lastDash) : cut;
  }

  return slug || "yazi";
}
