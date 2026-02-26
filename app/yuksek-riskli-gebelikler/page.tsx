import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["yuksek-riskli-gebelikler"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function YuksekRiskliGebeliklerPage() {
  return <DiseasePageLayout disease={disease} />;
}
