import DiseasePageLayout from "@/components/DiseasePageLayout";
import { getDiseasesByLocale } from "@/data/getDiseaseData";
import { setRequestLocale } from "next-intl/server";

const SLUG = "vajinal-miyom-ameliyati";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const disease = getDiseasesByLocale(locale)[SLUG];
  return { title: disease.metaTitle, description: disease.metaDescription };
}

export default async function VajinalMiyomPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const disease = getDiseasesByLocale(locale)[SLUG];
  return <DiseasePageLayout disease={disease} />;
}
