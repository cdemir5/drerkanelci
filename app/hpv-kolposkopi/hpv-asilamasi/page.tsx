import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["hpv-asilamasi-2"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function HpvAsilamasiKolposkopiPage() {
  return <DiseasePageLayout disease={disease} />;
}
