import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["sikca-sorulan-sorular"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function UsikcaUsorulanUsorularPage() {
  return <DiseasePageLayout disease={disease} />;
}
