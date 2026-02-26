import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["dogal-genital-estetik"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function UdogalUgenitalUestetikPage() {
  return <DiseasePageLayout disease={disease} />;
}
