"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Landmark,
  Building2,
  Leaf,
  ShieldCheck,
  Banknote,
  Briefcase,
} from "lucide-react";
import { partnersData, Partner } from "@/data/partners";
import { useReveal } from "@/hooks/useReveal";

/* ─── Partner Logo Emblem Component ──────────────────────── */
const PartnerIcon: React.FC<{ type: Partner["iconType"] }> = ({ type }) => {
  switch (type) {
    case "landmark":
      return <Landmark size={22} className="partner-vector-icon" />;
    case "building":
      return <Building2 size={22} className="partner-vector-icon" />;
    case "leaf":
      return <Leaf size={22} className="partner-vector-icon" />;
    case "shield":
      return <ShieldCheck size={22} className="partner-vector-icon" />;
    case "bank":
      return <Banknote size={22} className="partner-vector-icon" />;
    case "briefcase":
      return <Briefcase size={22} className="partner-vector-icon" />;
    default:
      return <Building2 size={22} className="partner-vector-icon" />;
  }
};

/* ─── Single Partner Card / Pill (Taller & High Contrast) ── */
const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`partner-card ${isHovered ? "is-hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Prominent Large Logo Box */}
      <div
        className={`partner-logo-container ${
          partner.logoImage ? "partner-logo-container--image" : ""
        }`}
      >
        {partner.logoImage ? (
          <img
            src={partner.logoImage}
            alt={`Logo ${partner.name}`}
            className="partner-custom-logo-img"
          />
        ) : (
          <>
            <div className="partner-logo-badge">
              <PartnerIcon type={partner.iconType} />
            </div>
            <span className="partner-logo-mark">{partner.logoType}</span>
          </>
        )}
      </div>

      {/* Partner Info Details */}
      <div className="partner-info-box">
        <strong className="partner-brand-name">{partner.name}</strong>
        <span className="partner-brand-domain">{partner.domain}</span>
      </div>
    </div>
  );
};

/* ─── Main Partners Section ───────────────────────────────── */
export const PartnersSection: React.FC = () => {
  const { ref, revealClass } = useReveal();

  const row1 = partnersData.slice(0, 7);
  const row2 = partnersData.slice(7);

  return (
    <section className="partners-section section-pad" id="partenaires">
      {/* Harmonized Section Heading with Overline & Accent line */}
      <div ref={ref} className={`section-heading partners-heading-row ${revealClass}`}>
        <div className="heading-left">
          <span className="overline">Nos partenaires</span>
          <h2>
            Des alliances stratégiques pour<br />
            <em>bâtir l’excellence.</em>
          </h2>
        </div>

        <div className="heading-right partners-heading-right">
          {/* 3D Realistic Industrial Handshake (Gants de chantier BTP) */}
          <div className="partners-handshake-media" aria-hidden="true">
            <Image
              src="/images/decorations/handshake-btp.png"
              alt="Partenariat BTP et alliance stratégique"
              width={340}
              height={190}
              priority
              className="partners-handshake-img"
            />
          </div>
          <p>
            Nous collaborons avec les leaders du secteur BTP, bureaux de contrôle certifiés et industriels de premier ordre pour garantir des ouvrages conformes aux standards internationaux.
          </p>
        </div>
      </div>

      {/* Dual Direction Infinite Marquee Track */}
      <div className="partners-marquee-zone">
        {/* Row 1 — Left to Right */}
        <div className="marquee-track marquee-ltr">
          <div className="marquee-inner">
            {[...row1, ...row1, ...row1, ...row1].map((p, i) => (
              <PartnerCard key={`r1-${i}`} partner={p} />
            ))}
          </div>
        </div>

        {/* Row 2 — Right to Left */}
        <div className="marquee-track marquee-rtl">
          <div className="marquee-inner">
            {[...row2, ...row2, ...row2, ...row2].map((p, i) => (
              <PartnerCard key={`r2-${i}`} partner={p} />
            ))}
          </div>
        </div>

        {/* Soft Linear Edge Fades */}
        <div className="marquee-fade-left" aria-hidden="true"></div>
        <div className="marquee-fade-right" aria-hidden="true"></div>
      </div>
    </section>
  );
};
