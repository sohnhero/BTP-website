"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { mainProjectsData, secondaryProjectsData } from "@/data/projects";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Button } from "@/components/atoms/Button";
import { useReveal } from "@/hooks/useReveal";

export const ProjectsSection: React.FC = () => {
  const { ref, revealClass } = useReveal();

  return (
    <section className="projects section-pad" id="projects">
      <div ref={ref} className={`section-heading ${revealClass}`}>
        <div>
          <span className="overline">Nos réalisations</span>
          <h2>
            Des ouvrages pensés pour<br />
            <em>durer et impressionner.</em>
          </h2>
        </div>
        <Button variant="outline" href="#contact">
          Voir tous les projets <ArrowRight size={16} />
        </Button>
      </div>

      {/* Main Top Grid (Featured Projects) */}
      <div className="projects-grid">
        {mainProjectsData.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>

      {/* Single Bottom Row of Compact Secondary Project Cards */}
      <div className="projects-secondary-row">
        {secondaryProjectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            isMini
            index={index + 3}
          />
        ))}
      </div>
    </section>
  );
};
