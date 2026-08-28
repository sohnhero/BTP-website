"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, Mail, Phone, Award, CheckCircle2, Briefcase } from "lucide-react";
import { TeamMember } from "@/data/team";

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (member) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div className="team-modal-backdrop" onClick={onClose}>
      <div className="team-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="team-modal-close" onClick={onClose} aria-label="Fermer">
          <X size={20} />
        </button>

        <div className="team-modal-grid">
          {/* Left Column: Member Media & Info Highlights */}
          <div className="team-modal-media">
            {member.imageSrc ? (
              <Image
                src={member.imageSrc}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            ) : (
              <div className="team-monogram-canvas">
                <div className="monogram-glow-ring">
                  <span className="monogram-initials">{member.initials}</span>
                </div>
                <div className="monogram-dept-badge">
                  <span>{member.department}</span>
                </div>
              </div>
            )}
            <div className="team-modal-media-overlay"></div>
            <div className="team-modal-exp-badge">
              <Award size={14} className="badge-icon" />
              <span>{member.department}</span>
            </div>
          </div>

          {/* Right Column: Full Details */}
          <div className="team-modal-body">
            <div className="team-modal-header">
              <span className="team-modal-role">{member.role}</span>
              <h2 className="team-modal-name">{member.name}</h2>
            </div>

            {member.quote && (
              <blockquote className="team-modal-quote">
                “{member.quote}”
              </blockquote>
            )}

            <div className="team-modal-section">
              <h3>
                <Briefcase size={15} /> À propos
              </h3>
              <p>{member.bio}</p>
            </div>

            <div className="team-modal-section">
              <h3>
                <CheckCircle2 size={15} /> Domaines d'expertise
              </h3>
              <div className="team-modal-chips">
                {member.specialties.map((spec, i) => (
                  <span key={i} className="chip">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {member.keyProjects && member.keyProjects.length > 0 && (
              <div className="team-modal-section">
                <h3>Projets majeurs accompagnés</h3>
                <ul className="team-modal-projects">
                  {member.keyProjects.map((project, i) => (
                    <li key={i}>{project}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Actions */}
            <div className="team-modal-footer">
              <a href={`mailto:${member.email}`} className="btn btn-accent btn-sm">
                <Mail size={14} /> {member.email}
              </a>
              {member.phone && (
                <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="btn btn-outline btn-sm">
                  <Phone size={14} /> {member.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
