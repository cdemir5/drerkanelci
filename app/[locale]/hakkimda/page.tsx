import { getTranslations } from "next-intl/server";
import AboutContent from "@/components/AboutContent";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  return pageMetadata({
    locale,
    path: "/hakkimda",
    title: t("hakkimdaTitle"),
    description: t("hakkimdaDescription"),
  });
}

export default function HakkimdaPage() {
  return <AboutContent />;
}
