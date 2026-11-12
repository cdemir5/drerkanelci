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

/** The layout's title template already appends the doctor's name. */
export function stripSiteSuffix(title: string): string {
  const parts = title.split(/\s+[|–-]\s+/);
  if (parts.length > 1 && /elçi|elci|эльчи/i.test(parts[parts.length - 1])) {
    return parts.slice(0, -1).join(" | ").trim();
  }
  return title.trim();
}
