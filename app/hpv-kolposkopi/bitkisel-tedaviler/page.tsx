import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["bitkisel-tedaviler"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function UbitkiselUtedavilerPage() {
  return <DiseasePageLayout disease={disease} />;
}
