import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["ileri-laparoskopik-cerrahi"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function IleriLaparoskopikCerrahiPage() {
  return <DiseasePageLayout disease={disease} />;
}
