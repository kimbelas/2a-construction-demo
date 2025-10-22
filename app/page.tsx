"use client";

import { Navbar } from "@/components/marketing/navigation";
import { Footer, QuoteModal } from "@/components/marketing/common";
import { HeroSection } from "@/components/marketing/hero";
import { ServicesSection, FeaturedProjects, TestimonialsSection, CTASection } from "@/components/marketing/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedProjects />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <QuoteModal />
    </>
  );
}
