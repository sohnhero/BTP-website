"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";

interface ProjectCardProps extends ProjectItem {
  index?: number;
  isMini?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  year,
  title,
  subtitle,
  imageUrl,
  isLarge,
  isMini,
  index = 0,
}) => {
  const { ref, revealClass } = useReveal({
    variant: "brick",
    delay: Math.min(index * 120, 600),
  });

  return (
    <article
      ref={ref}
      className={`project-card ${isLarge ? "project-large" : ""} ${isMini ? "project-mini" : ""} ${revealClass}`}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        sizes={
          isLarge
            ? "(max-width: 768px) 100vw, 66vw"
            : isMini
            ? "(max-width: 768px) 100vw, 33vw"
            : "(max-width: 768px) 100vw, 50vw"
        }
        style={{ objectFit: "cover" }}
        unoptimized={imageUrl.startsWith("http")}
      />
      <div className="project-shade"></div>
      <div className="project-meta">
        <span>
          {category} • {year}
        </span>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <button className="project-open" aria-label={`Voir le projet ${title}`}>
        <ArrowUpRight size={isMini ? 16 : 18} />
      </button>
    </article>
  );
};
