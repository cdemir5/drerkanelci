import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["gebelerde-genital-sigil"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function UgebelerdeUgenitalUsigilPage() {
  return <DiseasePageLayout disease={disease} />;
}
