import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["histeroskopik-cerrahi"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function UhisteroskopikUcerrahiPage() {
  return <DiseasePageLayout disease={disease} />;
}
