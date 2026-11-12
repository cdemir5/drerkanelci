import DiseasePageLayout from "@/components/DiseasePageLayout";
import { getDiseasesByLocale } from "@/data/getDiseaseData";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";

const SLUG = "cin-siniflandirmasi";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const disease = getDiseasesByLocale(locale)[SLUG];
  return pageMetadata({ locale, path: "/hpv-kolposkopi/cin-siniflandirmasi", title: disease.metaTitle, description: disease.metaDescription });
}

export default async function CinSiniflandirmasiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const disease = getDiseasesByLocale(locale)[SLUG];
  return <DiseasePageLayout disease={disease} />;
}
