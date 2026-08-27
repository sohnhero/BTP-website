"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { useReveal } from "@/hooks/useReveal";
import { AnimatedNumber } from "@/components/atoms/AnimatedNumber";

export const AboutSection: React.FC = () => {
  const copyReveal = useReveal({ variant: "left" });
  const photoReveal = useReveal({ variant: "right" });

  return (
    <section className="intro section-pad" id="about">
      <div ref={copyReveal.ref} className={`intro-copy ${copyReveal.revealClass}`}>
        <span className="overline">À propos</span>
        <h2>
          Une construction fondée sur <em>la précision, la maîtrise</em> et la confiance.
        </h2>

        <p className="lead">
          FIDELE SARL accompagne entreprises, promoteurs et particuliers dans la réalisation de projets exigeants. Notre approche associe ingénierie, design, pilotage et exécution pour garantir des résultats maîtrisés de bout en bout.
        </p>

        {/* Core Pillars Mini Grid with Scroll-In Animation */}
        <div className="about-pillars-grid">
          <div className="about-pillar-chip">
            <ShieldCheck size={16} className="pillar-icon" />
            <span>Normes ISO & Sécurité</span>
          </div>
          <div className="about-pillar-chip">
            <Award size={16} className="pillar-icon" />
            <span>Matériaux Certifiés</span>
          </div>
          <div className="about-pillar-chip">
            <CheckCircle2 size={16} className="pillar-icon" />
            <span>Supervision Clé en Main</span>
          </div>
        </div>

        <Button variant="outline" href="#contact">
          Parlons de votre projet
          <ArrowUpRight size={16} />
        </Button>
      </div>

      <div ref={photoReveal.ref} className={`intro-photo photo-card ${photoReveal.revealClass}`}>
        <Image
          src="/images/apropos-img.png"
          alt="Équipe technique et encadrement de FIDÈLE SARL sur un chantier BTP"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
        />
        <div className="intro-photo-shade" />

        {/* Floating Animated Achievement Stats Capsule */}
        <div className="about-floating-capsule">
          <div className="capsule-stat-col">
            <strong>
              <AnimatedNumber value={15} suffix="+" duration={1800} />
            </strong>
            <small>Années d'expertise</small>
          </div>
          <div className="capsule-divider" />
          <div className="capsule-stat-col">
            <strong>
              <AnimatedNumber value={50} suffix="+" duration={2000} />
            </strong>
            <small>Ouvrages livrés</small>
          </div>
          <div className="capsule-divider" />
          <div className="capsule-stat-col">
            <strong>
              <AnimatedNumber value={100} suffix="%" duration={2200} />
            </strong>
            <small>Délais garantis</small>
          </div>
        </div>
      </div>
    </section>
  );
};
