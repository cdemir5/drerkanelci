import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import ServiceCards from "@/components/ServiceCards";
import AboutPreview from "@/components/AboutPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import VideoPreview from "@/components/VideoPreview";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import { fetchGoogleReviews } from "@/lib/google-reviews";
import { faqs, googleRating } from "@/data/services";

export const revalidate = 86400; // 24 saat

export default async function Home() {
  const googleData = await fetchGoogleReviews();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Doç. Dr. Erkan Elçi",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(googleData?.rating ?? googleRating.score),
      reviewCount: String(googleData?.totalReviews ?? googleRating.totalReviews),
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      <HeroSection />
      <StatsCounter />
      <ServiceCards />
      <AboutPreview />
      <WhyChooseUs />
      <VideoPreview />
      <Testimonials googleData={googleData} />
      <FAQ />
      <ContactCTA />
    </>
  );
}
