"use client";

import React from "react";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { useReveal } from "@/hooks/useReveal";

export const ServicesSection: React.FC = () => {
  const { ref, revealClass } = useReveal();

  return (
    <section className="services section-pad" id="services">
      <div ref={ref} className={`section-heading ${revealClass}`}>
        <div>
          <span className="overline">Nos Services</span>
          <h2>
            Une maîtrise complète,<br />
            <em>du concept au chantier.</em>
          </h2>
        </div>
        <p>
          Une équipe unique pour coordonner les études, la technique, l’exécution et la finition avec un niveau d’exigence constant.
        </p>
      </div>

      <div className="service-grid">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};
