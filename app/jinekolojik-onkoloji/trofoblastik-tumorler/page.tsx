import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["trofoblastik-tumorler"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function TrofoblastikTumorlerPage() {
  return <DiseasePageLayout disease={disease} />;
}
