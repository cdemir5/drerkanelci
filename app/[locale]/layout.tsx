import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { locales } from "@/i18n/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, { default: string; template: string }> = {
    tr: {
      default: "Doç. Dr. Erkan Elçi | Kadın Hastalıkları ve Doğum Uzmanı",
      template: "%s | Doç. Dr. Erkan Elçi",
    },
    en: {
      default:
        "Assoc. Prof. Dr. Erkan Elçi | Obstetrics & Gynecology Specialist",
      template: "%s | Assoc. Prof. Dr. Erkan Elçi",
    },
    de: {
      default: "Doz. Dr. Erkan Elçi | Facharzt für Gynäkologie und Geburtshilfe",
      template: "%s | Doz. Dr. Erkan Elçi",
    },
    ru: {
      default: "Доц. Др. Эркан Эльчи | Специалист по акушерству и гинекологии",
      template: "%s | Доц. Др. Эркан Эльчи",
    },
  };

  const descriptions: Record<string, string> = {
    tr: "Doç. Dr. Erkan Elçi - Kadın Hastalıkları ve Doğum Uzmanı. Robotik cerrahi, jinekolojik onkoloji, yüksek riskli gebelikler, ileri laparoskopik cerrahi. İstanbul.",
    en: "Assoc. Prof. Dr. Erkan Elçi - Obstetrics & Gynecology Specialist. Robotic surgery, gynecologic oncology, high-risk pregnancies, advanced laparoscopic surgery. Istanbul.",
    de: "Doz. Dr. Erkan Elçi - Facharzt für Gynäkologie und Geburtshilfe. Roboterchirurgie, gynäkologische Onkologie, Risikoschwangerschaften, fortgeschrittene laparoskopische Chirurgie. Istanbul.",
    ru: "Доц. Др. Эркан Эльчи - Специалист по акушерству и гинекологии. Роботическая хирургия, гинекологическая онкология, беременность высокого риска, продвинутая лапароскопическая хирургия. Стамбул.",
  };

  const ogLocales: Record<string, string> = {
    tr: "tr_TR",
    en: "en_US",
    de: "de_DE",
    ru: "ru_RU",
  };

  return {
    metadataBase: new URL("https://drerkanelci.com"),
    alternates: {
      canonical: "/",
      languages: {
        tr: "/",
        en: "/en",
        de: "/de",
        ru: "/ru",
      },
    },
    title: titles[locale] || titles.tr,
    description: descriptions[locale] || descriptions.tr,
    keywords: [
      "jinekolog",
      "kadın doğum uzmanı",
      "robotik cerrahi",
      "miyom tedavisi",
      "endometriozis",
      "jinekolojik onkoloji",
      "istanbul jinekolog",
      "doç dr erkan elçi",
      "gynecologist",
      "obstetrician",
      "robotic surgery",
      "fibroid treatment",
      "endometriosis treatment",
      "gynecologic oncology",
      "istanbul gynecologist",
    ],
    authors: [{ name: "Doç. Dr. Erkan Elçi" }],
    openGraph: {
      type: "website",
      locale: ogLocales[locale] || "tr_TR",
      url: "https://drerkanelci.com",
      siteName: "Doç. Dr. Erkan Elçi",
      title:
        titles[locale]?.default || titles.tr.default,
      description: descriptions[locale] || descriptions.tr,
      images: [
        {
          url: "/images/dr-erkan-elci.jpg",
          width: 1200,
          height: 630,
          alt: "Doç. Dr. Erkan Elçi",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        titles[locale]?.default || titles.tr.default,
      description: descriptions[locale] || descriptions.tr,
      images: ["/images/dr-erkan-elci.jpg"],
    },
    verification: {
      google: "GOOGLE_SITE_VERIFICATION_KODU",
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Doç. Dr. Erkan Elçi",
  url: "https://drerkanelci.com",
  image: "https://drerkanelci.com/images/dr-erkan-elci.jpg",
  telephone: "+90 530 403 69 77",
  email: "info@drerkanelci.com",
  description:
    "Kadın Hastalıkları ve Doğum Uzmanı. Robotik cerrahi, jinekolojik onkoloji, ileri laparoskopik cerrahi.",
  medicalSpecialty: "Obstetrics and Gynecology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ataköy 2-5-6. Kısım, No:59 A Blok 1. Kat",
    addressLocality: "Bakırköy",
    addressRegion: "İstanbul",
    postalCode: "34250",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.9835,
    longitude: 28.8425,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://tr.linkedin.com/in/erkan-elci-976855b4",
    "https://instagram.com/doc.dr.erkanelci",
    "https://www.youtube.com/@ErkanElci",
  ],
  availableLanguage: ["Turkish", "English", "German", "Russian"],
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <Analytics />
    </NextIntlClientProvider>
  );
}
