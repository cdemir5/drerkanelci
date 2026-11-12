import DiseasePageLayout from "@/components/DiseasePageLayout";
import { getDiseasesByLocale } from "@/data/getDiseaseData";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";

const SLUG = "dogal-genital-estetik";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const disease = getDiseasesByLocale(locale)[SLUG];
  return pageMetadata({ locale, path: "/genital-estetik/dogal-genital-estetik", title: disease.metaTitle, description: disease.metaDescription });
}

export default async function UdogalUgenitalUestetikPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const disease = getDiseasesByLocale(locale)[SLUG];
  return <DiseasePageLayout disease={disease} />;
}
