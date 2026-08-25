"use client";

import React from "react";
import Image from "next/image";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { useReveal } from "@/hooks/useReveal";

export const ServicesSection: React.FC = () => {
  const { ref, revealClass } = useReveal();

  return (
    <section className="services section-pad" id="services">
      {/* 3D Crane Hook Hanging directly from the top border of the section */}
      <div className="crane-hook-hanger" aria-hidden="true">
        <Image
          src="/images/Gemini_Generated_Image_bw87q6bw87q6bw87-removebg-preview.png"
          alt="Crochet de grue BTP"
          width={130}
          height={260}
          priority
          className="crane-hook-img"
        />
      </div>

      <div ref={ref} className={`section-heading services-heading-wrap ${revealClass}`}>
        <div className="heading-left">
          <span className="overline">Nos Services</span>
          <h2>
            Une maîtrise complète,<br />
            <em>du concept au chantier.</em>
          </h2>
        </div>

        <div className="heading-right">
          <p>
            Une équipe unique pour coordonner les études, la technique, l’exécution et la finition avec un niveau d’exigence constant.
          </p>
        </div>
      </div>

      <div className="service-grid">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.id} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};
