"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from "lucide-react";
import { teamMembers, teamCategories, TeamMember } from "@/data/team";
import { TeamMemberModal } from "@/components/organisms/TeamMemberModal";
import { useReveal } from "@/hooks/useReveal";

export const TeamSection: React.FC = () => {
  const { ref, revealClass } = useReveal();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
    <section className="team-section section-pad" id="equipe">
      {/* Top Header Row with Title & Controls */}
      <div ref={ref} className={`section-heading team-heading-row ${revealClass}`}>
        <div className="heading-left">
          <span className="overline">Notre équipe</span>
          <h2>
            L’excellence portée par<br />
            <em>des experts passionnés.</em>
          </h2>
        </div>

        <div className="heading-right">
          <p>
            Des ingénieurs, architectes et conducteurs de travaux unis par la même exigence de précision, d'innovation et de résultat.
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
      <div className="team-filter-bar">
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

      {/* Accordion Focus Slider Container */}
      <div className="team-accordion-wrapper">
        {filteredMembers.map((member, index) => {
          const isActive = index === (activeIndex % total);

          return (
            <article
              key={member.id}
              className={`team-accordion-card ${isActive ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setSelectedMember(member)}
            >
              {/* Portrait Background */}
              <div className="accordion-media">
                <Image
                  src={member.imageSrc || "/team-director.png"}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  priority={index === 0}
                />
                <div className="accordion-overlay"></div>
              </div>

              {/* Inactive Vertical Label */}
              <div className="accordion-collapsed-content">
                <span className="collapsed-role">{member.role}</span>
                <strong className="collapsed-name">{member.name}</strong>
              </div>

              {/* Active Expanded Card Content */}
              <div className="accordion-expanded-content">
                <div className="expanded-top">
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

                  <button
                    className="expanded-action-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMember(member);
                    }}
                  >
                    <span>Voir le profil complet</span>
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Interactive Detail Modal */}
      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
};
