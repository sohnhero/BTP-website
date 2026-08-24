"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { TeamMember } from "@/data/team";
import { useReveal } from "@/hooks/useReveal";

interface TeamCardProps {
  member?: TeamMember;
  onSelect?: (member: TeamMember) => void;
}

export const TeamCard: React.FC<TeamCardProps & Partial<TeamMember>> = (props) => {
  const { ref: revealRef, revealClass } = useReveal();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Support both member prop object OR spread member props
  const member: TeamMember = props.member || (props as TeamMember);
  const onSelect = props.onSelect || (() => { });

  if (!member || !member.name) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div ref={revealRef} className={revealClass}>
      <article
        ref={cardRef}
        className={`team-bento-card ${member.isFeatured ? "team-bento-card--featured" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onSelect(member)}
      >
        {/* Dynamic Spotlight Glow */}
        {isHovered && (
          <div
            className="team-card-spotlight"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
            }}
          />
        )}

        {/* Media Background */}
        <div className="team-bento-media">
          <Image
            src={member.imageSrc || "/team-director.png"}
            alt={`${member.name} — ${member.role}`}
            fill
            sizes={
              member.isFeatured
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 25vw"
            }
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
          <div className="team-bento-overlay"></div>
        </div>

        {/* Glass Badge */}
        <div className="team-bento-badge">
          <span className="badge-dot"></span>
          <span>{member.yearsOfExp || 0} ans d'expérience</span>
        </div>

        {/* Card Content */}
        <div className="team-bento-content">
          <div className="team-bento-header">
            <span className="member-role-tag">{member.role}</span>
            <h3 className="member-name-title">{member.name}</h3>
            <p className="member-tagline">{member.tagline}</p>
          </div>

          {member.isFeatured && member.quote && (
            <div className="member-featured-quote">
              <span>{member.quote}</span>
            </div>
          )}

          <div className="team-bento-footer">
            <div className="member-chips">
              {(member.specialties || []).map((spec, i) => (
                <span key={i} className="chip">
                  {spec}
                </span>
              ))}
            </div>

            <button
              className="member-action-btn"
              aria-label={`Voir la fiche complète de ${member.name}`}
            >
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};
