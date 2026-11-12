const DATE_LOCALES: Record<string, string> = {
  tr: "tr-TR",
  en: "en-GB",
  de: "de-DE",
  ru: "ru-RU",
};

export function formatDate(iso: string | null | undefined, locale: string): string {
  if (!iso) return "";
  return new Intl.DateTimeFormat(DATE_LOCALES[locale] ?? "tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(new Date(iso));
}

// " | Doç. Dr. Erkan Elçi", " - Assoc. Prof. Erkan Elçi", " | Assoz. Prof. Dr. …",
// " | Доц. Др. Эркан Эльчи", …
const DOCTOR_NAME_SUFFIX =
  /\s+[|–-]\s+(?:Doç|Doz|Assoz|Assoc|Prof|Dr|Доц|Проф|Др)\.[^|]*?(?:Elçi|Elci|Эльчи)/gi;

/**
 * The layout's title template already appends the doctor's name, so remove
 * it from page titles: "Robotik Cerrahi | Doç. Dr. Erkan Elçi - İstanbul"
 * → "Robotik Cerrahi - İstanbul". Titles that start with the name are kept.
 */
export function stripSiteSuffix(title: string): string {
  return title.replace(DOCTOR_NAME_SUFFIX, "").trim() || title.trim();
}
