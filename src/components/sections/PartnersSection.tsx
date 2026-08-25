"use client";

import React, { useState } from "react";
import { partnersData, Partner } from "@/data/partners";
import { useReveal } from "@/hooks/useReveal";

/* ─── Single Partner Pill ─────────────────────────────────── */
const PartnerPill: React.FC<{ partner: Partner }> = ({ partner }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`partner-pill ${isHovered ? "is-hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="partner-pill-mono">{partner.logoText}</span>
      <span className="partner-pill-name">{partner.name}</span>
      <span className="partner-pill-domain">{partner.domain}</span>
    </div>
  );
};

/* ─── Main Partners Section ───────────────────────────────── */
export const PartnersSection: React.FC = () => {
  const { ref, revealClass } = useReveal();

  // Duplicate for seamless loop
  const row1 = partnersData.slice(0, 5);
  const row2 = partnersData.slice(5, 10);

  return (
    <section className="partners-section" id="partenaires">
      {/* Minimal Header */}
      <div ref={ref} className={`partners-header ${revealClass}`}>
        <span className="partners-overline">Ils nous font confiance</span>
        <h2 className="partners-title">
          Nos <em>partenaires</em>
        </h2>
      </div>

      {/* Dual Marquee */}
      <div className="partners-marquee-zone">
        {/* Row 1 → */}
        <div className="marquee-track marquee-ltr">
          <div className="marquee-inner">
            {[...row1, ...row1, ...row1, ...row1].map((p, i) => (
              <PartnerPill key={`r1-${i}`} partner={p} />
            ))}
          </div>
        </div>

        {/* Row 2 ← */}
        <div className="marquee-track marquee-rtl">
          <div className="marquee-inner">
            {[...row2, ...row2, ...row2, ...row2].map((p, i) => (
              <PartnerPill key={`r2-${i}`} partner={p} />
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div className="marquee-fade-left" aria-hidden="true"></div>
        <div className="marquee-fade-right" aria-hidden="true"></div>
      </div>
    </section>
  );
};
