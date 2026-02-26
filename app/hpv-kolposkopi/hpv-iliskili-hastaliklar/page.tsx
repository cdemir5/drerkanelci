import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["hpv-iliskili-hastaliklar"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function UhpvUiliskiliUhastaliklarPage() {
  return <DiseasePageLayout disease={disease} />;
}
