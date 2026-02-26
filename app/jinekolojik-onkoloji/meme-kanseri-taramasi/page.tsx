import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["meme-kanseri-taramasi"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function MemeKanseriTaramasiPage() {
  return <DiseasePageLayout disease={disease} />;
}
