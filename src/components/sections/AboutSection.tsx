"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { useReveal } from "@/hooks/useReveal";

export const AboutSection: React.FC = () => {
  const copyReveal = useReveal({ variant: "left" });
  const photoReveal = useReveal({ variant: "right" });

  return (
    <section className="intro section-pad" id="about">
      <div ref={copyReveal.ref} className={`intro-copy ${copyReveal.revealClass}`}>
        <span className="overline">Notre vision</span>
        <h2>
          Une construction fondée sur <em>la précision, la maîtrise</em> et la confiance.
        </h2>

        <p className="lead">
          FIDÈLE SARL accompagne entreprises, promoteurs et particuliers dans la réalisation de projets exigeants. Notre approche associe ingénierie, design, pilotage et exécution pour garantir des résultats maîtrisés de bout en bout.
        </p>

        <Button variant="outline" href="#contact">
          Parlons de votre projet
          <ArrowUpRight size={16} />
        </Button>
      </div>

      <div ref={photoReveal.ref} className={`intro-photo photo-card ${photoReveal.revealClass}`}>
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=90"
          alt="Équipe de chantier sur un projet de construction"
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>
    </section>
  );
};
