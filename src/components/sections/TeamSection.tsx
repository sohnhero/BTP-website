"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Building2,
  HardHat,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { teamMembers, teamCategories, TeamMember } from "@/data/team";
import { useReveal } from "@/hooks/useReveal";

/* Helper to get Department Icon */
const getDepartmentIcon = (category: string, role: string) => {
  if (category === "transport") return Truck;
  if (category === "btp") return HardHat;
  if (role.toLowerCase().includes("comptable") || role.toLowerCase().includes("finance"))
    return ShieldCheck;
  return Building2;
};

/* ─── Individual Team Member Card with Staggered Scroll Reveal ─── */
const TeamMemberCard: React.FC<{
  member: TeamMember;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}> = ({ member, index, isActive, onSelect }) => {
  const { ref, revealClass } = useReveal({
    variant: "brick",
    delay: Math.min(index * 110, 550),
  });

  const DeptIcon = getDepartmentIcon(member.category, member.role);

  return (
    <article
      ref={ref}
      className={`team-accordion-card ${isActive ? "is-active" : ""} ${revealClass}`}
      onMouseEnter={onSelect}
      onClick={onSelect}
    >
      {/* Media or Monogram Avatar Canvas */}
      <div className="accordion-media">
        {member.imageSrc ? (
          <Image
            src={member.imageSrc}
            alt={`${member.name} — ${member.role}`}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "top center" }}
            priority={index === 0}
          />
        ) : (
          <div className="team-monogram-canvas">
            {/* Subtle Architectural Ambient Watermark */}
            <div className="monogram-ambient-watermark" aria-hidden="true">
              <span>{member.initials}</span>
            </div>
          </div>
        )}
        <div className="accordion-overlay"></div>
      </div>

      {/* ── Collapsed Vertical Mode (When Card is Narrow / Enroulée) ── */}
      <div className="accordion-collapsed-vertical" aria-hidden={isActive}>
        <div className="collapsed-top-icon">
          <DeptIcon size={16} />
        </div>

        <div className="collapsed-vertical-text">
          <span className="collapsed-v-role">{member.role}</span>
          <strong className="collapsed-v-name">{member.name}</strong>
        </div>

        <div className="collapsed-bottom-initials">
          <span>{member.initials}</span>
        </div>
      </div>

      {/* ── Active Expanded Card Content ── */}
      <div className="accordion-expanded-content" aria-hidden={!isActive}>
        <div className="expanded-top">
          <div className="expanded-dept-pill">
            <DeptIcon size={13} />
            <span>{member.department}</span>
          </div>
          <span className="expanded-role">{member.role}</span>
          <h3 className="expanded-name">{member.name}</h3>
          <p className="expanded-tagline">{member.tagline}</p>
        </div>

        <div className="expanded-bottom">
          <div className="expanded-chips">
            {member.specialties.map((spec, i) => (
              <span key={i} className="chip">
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export const TeamSection: React.FC = () => {
  const { ref, revealClass } = useReveal();
  const filterReveal = useReveal({ variant: "fade", delay: 100 });
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const filteredMembers = teamMembers.filter((m) => {
    if (activeCategory === "all") return true;
    return m.category === activeCategory;
  });

  const total = filteredMembers.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section className="team-section section-pad" id="team">
      {/* Top Header Row with Title & Controls */}
      <div ref={ref} className={`section-heading team-heading-row ${revealClass}`}>
        <div className="heading-left">
          <span className="overline">Notre équipe</span>
          <h2>
            L’excellence portée par<br />
            <em>des experts engagés.</em>
          </h2>
        </div>

        {/* 3D Realistic Industrial Safety Helmet in Center Empty Space */}
        <div className="team-helmet-container" aria-hidden="true">
          <div className="team-helmet-media">
            <Image
              src="/images/decorations/hardhat-helmet.png"
              alt="Casque de chantier BTP de sécurité"
              width={400}
              height={300}
              priority
              className="team-helmet-img"
            />
          </div>
        </div>

        <div className="heading-right">
          <p>
            Direction Générale, Direction BTP et Direction Transport : des compétences complémentaires au service de l'exécution rigoureuse de vos ouvrages.
          </p>

          {/* Navigation Arrows (Top Right) */}
          <div className="team-slider-controls">
            <button
              className="team-nav-btn"
              onClick={handlePrev}
              aria-label="Membre précédent"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="team-nav-btn"
              onClick={handleNext}
              aria-label="Membre suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div
        ref={filterReveal.ref}
        className={`team-filter-bar ${filterReveal.revealClass}`}
      >
        {teamCategories.map((cat) => (
          <button
            key={cat.id}
            className={`team-filter-btn ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(cat.id);
              setActiveIndex(0);
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion Focus Slider Container with Staggered Elements */}
      <div className="team-accordion-wrapper">
        {filteredMembers.map((member, index) => {
          const isActive = index === (activeIndex % total);

          return (
            <TeamMemberCard
              key={member.id}
              member={member}
              index={index}
              isActive={isActive}
              onSelect={() => setActiveIndex(index)}
            />
          );
        })}
      </div>
    </section>
  );
};
