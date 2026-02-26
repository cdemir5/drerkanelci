import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["yumurtalik-kanseri"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function YumurtalikKanseriPage() {
  return <DiseasePageLayout disease={disease} />;
}
