import React from "react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. À PROPOS */}
        <AboutSection />

        {/* 3. SERVICES */}
        <ServicesSection />

        {/* 4. ÉQUIPE */}
        <TeamSection />

        {/* 5. RÉALISATIONS */}
        <ProjectsSection />

        {/* 6. PARTENAIRES */}
        <PartnersSection />

        {/* 7. CONTACT */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
