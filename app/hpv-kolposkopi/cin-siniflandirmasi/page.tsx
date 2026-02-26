import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["cin-siniflandirmasi"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function CinSiniflandirmasiPage() {
  return <DiseasePageLayout disease={disease} />;
}
