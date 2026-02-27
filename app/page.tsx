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

export const revalidate = 86400; // 24 saat

export default async function Home() {
  const googleData = await fetchGoogleReviews();

  return (
    <>
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
