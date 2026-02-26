import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["klitoris-estetigi"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function KlitorisEstetigiPage() {
  return <DiseasePageLayout disease={disease} />;
}
