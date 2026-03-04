import { Disease } from "./diseases";
import { diseases as diseasesTr, getSidebarDiseases as getSidebarTr } from "./diseases";
import { diseases as diseasesEn, getSidebarDiseases as getSidebarEn } from "./diseases-en";
import { diseases as diseasesDe, getSidebarDiseases as getSidebarDe } from "./diseases-de";
import { diseases as diseasesRu, getSidebarDiseases as getSidebarRu } from "./diseases-ru";

const diseasesMap: Record<string, Record<string, Disease>> = {
  tr: diseasesTr,
  en: diseasesEn,
  de: diseasesDe,
  ru: diseasesRu,
};

const sidebarMap: Record<string, () => { title: string; href: string }[]> = {
  tr: getSidebarTr,
  en: getSidebarEn,
  de: getSidebarDe,
  ru: getSidebarRu,
};

export function getDiseasesByLocale(locale: string): Record<string, Disease> {
  return diseasesMap[locale] || diseasesTr;
}

export function getSidebarByLocale(locale: string) {
  return (sidebarMap[locale] || getSidebarTr)();
}
