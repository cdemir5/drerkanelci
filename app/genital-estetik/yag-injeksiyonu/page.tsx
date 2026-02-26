import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["yag-injeksiyonu"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function YagInjeksiyonuPage() {
  return <DiseasePageLayout disease={disease} />;
}
