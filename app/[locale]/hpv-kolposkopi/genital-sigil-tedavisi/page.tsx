import DiseasePageLayout from "@/components/DiseasePageLayout";
import { getDiseasesByLocale } from "@/data/getDiseaseData";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";

const SLUG = "genital-sigil-tedavisi";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const disease = getDiseasesByLocale(locale)[SLUG];
  return pageMetadata({ locale, path: "/hpv-kolposkopi/genital-sigil-tedavisi", title: disease.metaTitle, description: disease.metaDescription });
}

export default async function UgenitalUsigilUtedavisiPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const disease = getDiseasesByLocale(locale)[SLUG];
  return <DiseasePageLayout disease={disease} />;
}
