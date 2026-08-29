import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { FaqSection } from "@/components/sections/FaqSection";
import { Home, ShieldCheck, HelpCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Foire Aux Questions (FAQ) | FIDELE SARL",
  description:
    "Toutes les réponses à vos questions sur les projets BTP au Sénégal : devis sous 24h, garanties décennales, gros œuvre, terrassement, engins lourds et délais de livraison.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="faq-page-main">
        {/* Chic, Modern & Discreet Page Header Banner with exact Contact Banner colorimetry */}
        <section className="faq-chic-banner">
          {/* Ambient Atmospheric Glows */}
          <div className="chic-banner-glow-left" aria-hidden="true" />
          <div className="chic-banner-glow-right" aria-hidden="true" />

          <div className="chic-banner-container">
            {/* Top Breadcrumb */}
            <div className="chic-banner-top-row">
              <nav className="chic-breadcrumb" aria-label="Fil d'Ariane">
                <Link href="/" className="chic-breadcrumb-link">
                  <Home size={12} />
                  <span>Accueil</span>
                </Link>
                <span className="chic-breadcrumb-sep">/</span>
                <span className="chic-breadcrumb-current">Foire Aux Questions</span>
              </nav>
            </div>

            {/* Banner Main Grid: Left Content + Right Image */}
            <div className="chic-banner-grid">
              {/* Left Column */}
              <div className="chic-banner-left">
                <div className="faq-banner-badge">
                  <HelpCircle size={13} className="faq-badge-icon" />
                  <span>Centre d&apos;Information & Assistance </span>
                </div>

                <h1 className="chic-banner-title">
                  Toutes les réponses <em>à vos questions.</em>
                </h1>

                <p className="chic-banner-subtitle">
                  Étude technique, devis sous 24h, assurances décennales, gros œuvre et transport de matériaux : retrouvez toutes les informations pour concrétiser vos ouvrages au Sénégal.
                </p>

                {/* Quick Key Commitments */}
                <div className="chic-commitments-grid">
                  <div className="chic-commitment-item">
                    <div className="chic-commit-icon">
                      <ShieldCheck size={16} />
                    </div>
                    <div className="chic-commit-text">
                      <strong>Garantie Décennale 10 ans</strong>
                      <span>Assurance légale & solidité certifiée</span>
                    </div>
                  </div>

                  <div className="chic-commitment-item">
                    <div className="chic-commit-icon">
                      <Clock size={16} />
                    </div>
                    <div className="chic-commit-text">
                      <strong>Devis sous 24h / 48h</strong>
                      <span>Étude géotechnique & chiffrage BPU</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: FAQ Banner Image */}
              <div className="chic-banner-right">
                <div className="chic-asset-card">
                  <div className="chic-asset-glow" aria-hidden="true" />
                  <Image
                    src="/images/banners/faq-banner.png"
                    alt="Centre d'aide et questions fréquentes BTP FIDELE SARL"
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

        {/* Main Interactive FAQ Console */}
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
