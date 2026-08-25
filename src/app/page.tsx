import React from "react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <TeamSection />
        <PartnersSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
