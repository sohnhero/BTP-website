"use client";

import React from "react";
import Image from "next/image";
import { processSteps } from "@/data/process";
import { ProcessStep } from "@/components/molecules/ProcessStep";
import { useReveal } from "@/hooks/useReveal";

export const ProcessSection: React.FC = () => {
  const imageReveal = useReveal({ variant: "left" });
  const contentReveal = useReveal({ variant: "right" });

  return (
    <section className="process section-pad">
      <div ref={imageReveal.ref} className={`process-image ${imageReveal.revealClass}`}>
        <Image
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=90"
          alt="Structure de bâtiment en construction"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>

      <div ref={contentReveal.ref} className={`process-content ${contentReveal.revealClass}`}>
        <span className="overline">Notre méthode</span>
        <h2>
          Une exécution claire.<br />
          <em>Zéro zone grise.</em>
        </h2>
        <p>
          Chaque projet est piloté avec des jalons précis, des validations structurées et une communication continue.
        </p>

        <div className="process-list">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};
