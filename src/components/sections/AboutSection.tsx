"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { useReveal } from "@/hooks/useReveal";

export const AboutSection: React.FC = () => {
  const copyReveal = useReveal({ variant: "left" });
  const photoReveal = useReveal({ variant: "right" });

  return (
    <section className="intro section-pad" id="about">
      <div ref={copyReveal.ref} className={`intro-copy ${copyReveal.revealClass}`}>
        <span className="overline">À propos</span>
        <h2>
          Des infrastructures bâties sur<br />
          <em>la rigueur, la maîtrise</em> et l’engagement.
        </h2>

        <p className="lead">
          FIDELE SARL est une entreprise sénégalaise spécialisée dans le bâtiment, les travaux publics, la réhabilitation et l’aménagement d’infrastructures. Elle intervient notamment dans l’exécution de marchés publics et de projets institutionnels, avec une approche fondée sur la maîtrise technique, la rigueur d’exécution et le respect des exigences contractuelles.
        </p>

        {/* Core Pillars Mini Grid with Scroll-In Animation */}
        <div className="about-pillars-grid">
          <div className="about-pillar-chip">
            <ShieldCheck size={16} className="pillar-icon" />
            <span>Bâtiment & Travaux Publics</span>
          </div>
          <div className="about-pillar-chip">
            <Award size={16} className="pillar-icon" />
            <span>Réhabilitation & Aménagement</span>
          </div>
          <div className="about-pillar-chip">
            <CheckCircle2 size={16} className="pillar-icon" />
            <span>Marchés Publics & Institutionnels</span>
          </div>
        </div>

        <Button variant="outline" href="/contact">
          Parlons de votre projet
          <ArrowUpRight size={16} />
        </Button>
      </div>

      <div ref={photoReveal.ref} className={`intro-photo photo-card ${photoReveal.revealClass}`}>
        <Image
          src="/images/apropos-img.jpg"
          alt="Équipe technique et encadrement de FIDELE SARL sur un chantier BTP"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <div className="intro-photo-shade" />
      </div>
    </section>
  );
};
