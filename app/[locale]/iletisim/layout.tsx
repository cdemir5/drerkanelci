import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";

// The contact page is a client component, so its metadata lives here.
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo" });
  return pageMetadata({
    locale,
    path: "/iletisim",
    title: t("iletisimTitle"),
    description: t("iletisimDescription"),
  });
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
