"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ProjectItem, allProjectsData } from "@/data/projects";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { useReveal } from "@/hooks/useReveal";
import { ProjectModal } from "@/components/organisms/ProjectModal";
import { ProjectsCatalogueModal } from "@/components/organisms/ProjectsCatalogueModal";

export const ProjectsSection: React.FC = () => {
  const { ref, revealClass } = useReveal();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);

  return (
    <section className="projects section-pad" id="projects">
      <div ref={ref} className={`section-heading projects-heading-wrap ${revealClass}`}>
        <div className="heading-left">
          <span className="overline">Nos réalisations</span>
          <h2>
            Des ouvrages pensés pour<br />
            <em>durer et impressionner.</em>
          </h2>
        </div>

        {/* 3D Realistic Industrial Concrete Mixer in Center Empty Space */}
        <div className="concrete-mixer-container" aria-hidden="true">
          <div className="concrete-mixer-media">
            <Image
              src="/images/decorations/blueprint-tools.png"
              alt="Bétonnière de chantier BTP"
              width={520}
              height={380}
              priority
              className="concrete-mixer-img"
            />
          </div>
        </div>

        <button
          type="button"
          className="btn btn-outline projects-cta-btn"
          onClick={() => setIsCatalogueOpen(true)}
        >
          <span>Détails des projets</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Main Bento Grid (The 3 Real Projects) */}
      <div className="projects-grid">
        {allProjectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            index={index}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* ── 1. Full-Screen Interactive Portfolio Catalogue ── */}
      <ProjectsCatalogueModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
        onSelectProject={(proj) => {
          setSelectedProject(proj);
        }}
      />

      {/* ── 2. Architectural Blueprint Technical Sheet Modal ── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
