import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import ServiceCards from "@/components/ServiceCards";
import AboutPreview from "@/components/AboutPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <ServiceCards />
      <AboutPreview />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </>
  );
}
