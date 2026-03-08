import { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Doç. Dr. Erkan Elçi - Kadın Hastalıkları ve Doğum Uzmanı. Minimal invaziv jinekolojik cerrahi, jinekolojik kanser cerrahisi ve ileri laparoskopik ameliyatlar.",
};

export default function HakkimdaPage() {
  return <AboutContent />;
}
