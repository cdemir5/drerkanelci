import { Metadata } from "next";
import DiseasePageLayout from "@/components/DiseasePageLayout";
import { diseases } from "@/data/diseases";

const disease = diseases["kapali-miyom-ameliyati"];

export const metadata: Metadata = {
  title: disease.metaTitle,
  description: disease.metaDescription,
};

export default function UkapaliUmiyomUameliyatiPage() {
  return <DiseasePageLayout disease={disease} />;
}
