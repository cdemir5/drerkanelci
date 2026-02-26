import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["genital-sigil-tedavisi"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function UgenitalUsigilUtedavisiPage() {
  return <DiseasePageLayout disease={disease} />;
}
