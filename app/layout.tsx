import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://drerkanelci.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Doç. Dr. Erkan Elçi | Kadın Hastalıkları ve Doğum Uzmanı",
    template: "%s | Doç. Dr. Erkan Elçi",
  },
  description:
    "Doç. Dr. Erkan Elçi - Kadın Hastalıkları ve Doğum Uzmanı. Robotik cerrahi, jinekolojik onkoloji, yüksek riskli gebelikler, ileri laparoskopik cerrahi. İstanbul.",
  keywords: [
    "jinekolog",
    "kadın doğum uzmanı",
    "robotik cerrahi",
    "miyom tedavisi",
    "endometriozis",
    "jinekolojik onkoloji",
    "istanbul jinekolog",
    "doç dr erkan elçi",
    "bakırköy jinekolog",
    "laparoskopik cerrahi",
    "genital estetik",
    "hpv tedavisi",
  ],
  authors: [{ name: "Doç. Dr. Erkan Elçi" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://drerkanelci.com",
    siteName: "Doç. Dr. Erkan Elçi",
    title: "Doç. Dr. Erkan Elçi | Kadın Hastalıkları ve Doğum Uzmanı",
    description:
      "23 yıllık deneyim ile robotik cerrahi, jinekolojik onkoloji ve ileri laparoskopik cerrahi alanlarında uzman hizmet.",
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
    title: "Doç. Dr. Erkan Elçi | Kadın Hastalıkları ve Doğum Uzmanı",
    description:
      "23 yıllık deneyim ile robotik cerrahi, jinekolojik onkoloji ve ileri laparoskopik cerrahi alanlarında uzman hizmet.",
    images: ["/images/dr-erkan-elci.jpg"],
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_KODU",
  },
};

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
