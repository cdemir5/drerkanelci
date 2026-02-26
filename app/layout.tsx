import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
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
  ],
  authors: [{ name: "Doç. Dr. Erkan Elçi" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Doç. Dr. Erkan Elçi",
    title: "Doç. Dr. Erkan Elçi | Kadın Hastalıkları ve Doğum Uzmanı",
    description:
      "23 yıllık deneyim ile robotik cerrahi, jinekolojik onkoloji ve ileri laparoskopik cerrahi alanlarında uzman hizmet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
