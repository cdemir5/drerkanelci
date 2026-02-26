import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["barbie-vajina-estetigi"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function UbarbieUvajinaUestetigiPage() {
  return <DiseasePageLayout disease={disease} />;
}
