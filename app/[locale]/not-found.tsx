import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function NotFound() {
  const t = useTranslations("common");

  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">{t("pageNotFound")}</p>
        <Link href="/" className="btn-primary">
          {t("goHome")}
        </Link>
      </div>
    </section>
  );
}
