import React from "react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ConstructionRibbon } from "@/components/molecules/ConstructionRibbon";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { MapSection } from "@/components/sections/MapSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. HERO */}
        <HeroSection />

        {/* 2. À PROPOS */}
        <AboutSection />

        {/* ── BTP CHANTIER CONSTRUCTION RIBBON ── */}
        <ConstructionRibbon />

        {/* 3. SERVICES */}
        <ServicesSection />

        {/* 4. ÉQUIPE */}
        <TeamSection />

        {/* 5. RÉALISATIONS */}
        <ProjectsSection />

        {/* 6. PARTENAIRES */}
        <PartnersSection />

        {/* 7. TÉMOIGNAGES (Masqué temporairement) */}
        {/* <TestimonialSection /> */}

        {/* 8. CONTACT */}
        <ContactSection />

        {/* 9. LOCALISATION & CARTE */}
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
