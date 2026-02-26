import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["bas-etme-yollari"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function EndometriozisBasEtmePage() {
  return <DiseasePageLayout disease={disease} />;
}
