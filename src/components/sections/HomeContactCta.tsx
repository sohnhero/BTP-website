"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export const HomeContactCta: React.FC = () => {
  const { ref, revealClass } = useReveal({ variant: "up" });

  return (
    <section className="home-cta-section section-pad" id="contact-cta">
      <div className="home-cta-container">
        <div ref={ref} className={`home-cta-card ${revealClass}`}>
          {/* Subtle Ambient Background Gradients */}
          <div className="home-cta-glow-1" aria-hidden="true" />
          <div className="home-cta-glow-2" aria-hidden="true" />

          <div className="home-cta-content">
            <div className="home-cta-badge">
              <ShieldCheck size={14} />
              <span>Votre Partenaire BTP de Confiance</span>
            </div>

            <h2 className="home-cta-title">
              Prêt à bâtir votre prochain<br />
              <em>grand ouvrage au Sénégal ?</em>
            </h2>

            <p className="home-cta-subtitle">
              De l&apos;étude de faisabilité à la livraison clé en main, nos ingénieurs et conducteurs de travaux vous garantissent excellence technique, respect des délais et maîtrise budgétaire.
            </p>

            <div className="home-cta-actions">
              <Link href="/contact" className="btn btn-primary home-cta-btn-main">
                <span>Démarrer votre projet</span>
                <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://wa.me/221338214974"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline home-cta-btn-secondary"
              >
                <MessageSquare size={16} />
                <span>Discuter sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
