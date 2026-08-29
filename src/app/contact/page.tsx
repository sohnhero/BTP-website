import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { MapSection } from "@/components/sections/MapSection";
import { Home, ShieldCheck, Building2, Radio } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Demande de Devis BTP | FIDELE SARL",
  description:
    "Contactez FIDELE SARL pour vos projets de construction BTP, réhabilitation, infrastructures publiques et transport au Sénégal. Étude technique et devis rapide sous 24h.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page-main">
        {/* Chic, Modern & Discreet Page Header Banner */}
        <section className="contact-chic-banner">
          {/* Ambient Glows */}
          <div className="chic-banner-glow-left" aria-hidden="true" />
          <div className="chic-banner-glow-right" aria-hidden="true" />

          <div className="chic-banner-container">
            {/* Top Minimal Bar: Breadcrumb + Status Pill */}
            <div className="chic-banner-top-row">
              <nav className="chic-breadcrumb" aria-label="Fil d'Ariane">
                <Link href="/" className="chic-breadcrumb-link">
                  <Home size={12} />
                  <span>Accueil</span>
                </Link>
                <span className="chic-breadcrumb-sep">/</span>
                <span className="chic-breadcrumb-current">Contact & Devis</span>
              </nav>


            </div>

            {/* Banner Main Grid: Left Content + Right Image */}
            <div className="chic-banner-grid">
              {/* Left Column */}
              <div className="chic-banner-left">
                <h1 className="chic-banner-title">
                  Parlons de votre projet <em>avec nos experts.</em>
                </h1>
                <p className="chic-banner-subtitle">
                  Ingénierie BTP, réhabilitation d&apos;ouvrages, terrassement et logistique de transport : bénéficiez d&apos;une étude technique rigoureuse et d&apos;un accompagnement personnalisé.
                </p>

                {/* Quick Key Commitments */}
                <div className="chic-commitments-grid">
                  <div className="chic-commitment-item">
                    <div className="chic-commit-icon">
                      <ShieldCheck size={16} />
                    </div>
                    <div className="chic-commit-text">
                      <strong>Réponse sous 24h</strong>
                      <span>Étude de faisabilité & chiffrage</span>
                    </div>
                  </div>

                  <div className="chic-commitment-item">
                    <div className="chic-commit-icon">
                      <Building2 size={16} />
                    </div>
                    <div className="chic-commit-text">
                      <strong>Couverture Nationale</strong>
                      <span>Déploiement partout au Sénégal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Banner Image */}
              <div className="chic-banner-right">
                <div className="chic-asset-card">
                  <div className="chic-asset-glow" aria-hidden="true" />
                  <Image
                    src="/images/banners/contact-banner.png"
                    alt="Contact et assistance BTP FIDELE SARL"
                    width={750}
                    height={480}
                    className="chic-asset-img"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Main Interactive Contact & Quote Console */}
        <ContactSection />

        {/* 2. Interactive Google Maps & Location Console */}
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
