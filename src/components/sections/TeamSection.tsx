"use client";

import React, { useState } from "react";
import { teamMembers, teamCategories, TeamMember } from "@/data/team";
import { TeamCard } from "@/components/molecules/TeamCard";
import { TeamMemberModal } from "@/components/organisms/TeamMemberModal";
import { useReveal } from "@/hooks/useReveal";

export const TeamSection: React.FC = () => {
  const { ref, revealClass } = useReveal();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredMembers = teamMembers.filter((m) => {
    if (activeCategory === "all") return true;
    return m.category === activeCategory;
  });

  return (
    <section className="team-section section-pad" id="equipe">
      {/* Consistent Section Header */}
      <div ref={ref} className={`section-heading ${revealClass}`}>
        <div>
          <span className="overline">Notre équipe</span>
          <h2>
            L’excellence portée par<br />
            <em>des experts passionnés.</em>
          </h2>
        </div>
        <p>
          Des ingénieurs, architectes et conducteurs de travaux unis par la même exigence de précision, d'innovation et de résultat.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="team-filter-bar">
        {teamCategories.map((cat) => (
          <button
            key={cat.id}
            className={`team-filter-btn ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="team-bento-grid">
        {filteredMembers.map((member) => (
          <TeamCard
            key={member.id}
            member={member}
            onSelect={(m) => setSelectedMember(m)}
          />
        ))}
      </div>

      {/* Interactive Detail Modal */}
      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
};
