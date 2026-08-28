"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import {
  X,
  Search,
  Building2,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  Maximize2,
  Layers,
  Banknote,
  Sparkles,
} from "lucide-react";
import { ProjectItem, allProjectsData } from "@/data/projects";

interface ProjectsCatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (proj: ProjectItem) => void;
}

type FilterCategory = "all" | "infrastructure" | "renovation" | "sport";

export const ProjectsCatalogueModal: React.FC<ProjectsCatalogueModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const pillsRef = useRef<HTMLDivElement | null>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const categories = useMemo(
    () => [
      { id: "all" as FilterCategory, label: "Tous les projets", count: allProjectsData.length },
      {
        id: "infrastructure" as FilterCategory,
        label: "Infrastructures Portuaires",
        count: allProjectsData.filter((p) => p.categorySlug === "infrastructure").length,
      },
      {
        id: "renovation" as FilterCategory,
        label: "Réhabilitation & Aménagement",
        count: allProjectsData.filter((p) => p.categorySlug === "renovation").length,
      },
      {
        id: "sport" as FilterCategory,
        label: "Infrastructures Sportives",
        count: allProjectsData.filter((p) => p.categorySlug === "sport").length,
      },
    ],
    []
  );

  const filteredProjects = useMemo(() => {
    return allProjectsData.filter((project) => {
      const matchCategory =
        selectedCategory === "all" || project.categorySlug === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        (project.surface ? project.surface.toLowerCase().includes(query) : false) ||
        (project.client ? project.client.toLowerCase().includes(query) : false);

      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="catalogue-modal-backdrop" onClick={onClose}>
      <div
        className="catalogue-modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="catalogue-modal-title"
      >
        {/* Top Header Bar */}
        <div className="catalogue-header">
          <div className="catalogue-header-left">
            <div className="catalogue-badge">
              <Building2 size={13} />
              <span>CATALOGUE BTP ({filteredProjects.length})</span>
            </div>
            <h2 id="catalogue-modal-title">
              Toutes nos réalisations <em>d'ingénierie</em>
            </h2>
            <p className="catalogue-header-desc">
              Explorez nos chantiers livrés. Touchez une carte pour ouvrir son dossier technique.
            </p>
          </div>

          <button
            type="button"
            className="catalogue-close-btn"
            onClick={onClose}
            aria-label="Fermer le catalogue de projets"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter & Search Toolbar (Sticky) */}
        <div className="catalogue-toolbar">
          {/* Search Box */}
          <div className="catalogue-search-box">
            <Search size={15} className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher par mot-clé, ville, surface..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="catalogue-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery("")}
                aria-label="Effacer la recherche"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Filter Pills (Horizontally Scrollable Carousel on Mobile) */}
          <div className="catalogue-filter-pills" ref={pillsRef}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`catalogue-filter-pill ${selectedCategory === cat.id ? "is-active" : ""}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="pill-counter">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Container */}
        <div className="catalogue-grid-wrapper">
          {filteredProjects.length > 0 ? (
            <div className="catalogue-cards-grid">
              {filteredProjects.map((project, idx) => (
                <article
                  key={project.id}
                  className="catalogue-project-card"
                  onClick={() => onSelectProject(project)}
                  style={{ animationDelay: `${idx * 35}ms` }}
                >
                  <div className="card-media-wrapper">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      unoptimized={project.imageUrl.startsWith("http")}
                    />
                    <div className="card-media-shade" />

                    {/* Category & Status Overlay */}
                    <div className="card-top-tags">
                      <span className="tag-category">{project.category}</span>
                      <span className="tag-year">{project.year}</span>
                    </div>

                    <button
                      type="button"
                      className="card-open-btn"
                      aria-label={`Voir le dossier de ${project.title}`}
                    >
                      <ArrowUpRight size={16} />
                    </button>
                  </div>

                  {/* Card Info Bottom */}
                  <div className="card-content-block">
                    <div className="card-location-row">
                      <MapPin size={13} />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="card-project-title">{project.title}</h3>
                    <p className="card-subtitle-desc">{project.subtitle}</p>

                    {/* Technical Badges Row */}
                    <div className="card-badges-row">
                      <span className="card-badge-investment">
                        <Banknote size={13} />
                        <span>{project.investment}</span>
                      </span>
                      <span className="card-badge-scope">
                        <Layers size={13} />
                        <span>{project.scope.length} corps d&apos;état</span>
                      </span>
                    </div>

                    {/* Card Specs Footer with Dedicated CTA */}
                    <div className="card-specs-footer">
                      <div className="spec-surface-item" title={project.surface}>
                        <Maximize2 size={13} />
                        <span>{project.surface}</span>
                      </div>
                      <div className="spec-view-pill">
                        <span>Fiche</span>
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="catalogue-empty-state">
              <Sparkles size={32} className="empty-icon" />
              <h3>Aucun projet trouvé</h3>
              <p>Essayez un autre mot-clé ou réinitialisez vos filtres.</p>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
