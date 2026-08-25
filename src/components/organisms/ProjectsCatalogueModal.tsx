"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  X,
  Search,
  SlidersHorizontal,
  Building2,
  MapPin,
  ArrowUpRight,
  Maximize2,
  Layers,
  Sparkles,
} from "lucide-react";
import { ProjectItem, allProjectsData } from "@/data/projects";

interface ProjectsCatalogueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (proj: ProjectItem) => void;
}

type FilterCategory = "all" | "residential" | "commercial" | "renovation" | "infrastructure";

export const ProjectsCatalogueModal: React.FC<ProjectsCatalogueModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

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
        id: "residential" as FilterCategory,
        label: "Résidentiel d'Exception",
        count: allProjectsData.filter((p) => p.categorySlug === "residential").length,
      },
      {
        id: "commercial" as FilterCategory,
        label: "Tertiaire & Sièges",
        count: allProjectsData.filter((p) => p.categorySlug === "commercial").length,
      },
      {
        id: "renovation" as FilterCategory,
        label: "Rénovation & Surélévation",
        count: allProjectsData.filter((p) => p.categorySlug === "renovation").length,
      },
      {
        id: "infrastructure" as FilterCategory,
        label: "Infrastructures & Tech",
        count: allProjectsData.filter((p) => p.categorySlug === "infrastructure").length,
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
        project.surface.toLowerCase().includes(query);

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
        {/* Top Floating Control Bar */}
        <div className="catalogue-header">
          <div className="catalogue-header-left">
            <div className="catalogue-badge">
              <Building2 size={15} />
              <span>CATALOGUE COMPLET & OUVRAGES BTP</span>
            </div>
            <h2 id="catalogue-modal-title">
              Toutes nos réalisations <em>d'ingénierie & de prestige</em>
            </h2>
            <p>
              Explorez l'intégralité de nos chantiers livrés et en cours. Cliquez sur une réalisation pour ouvrir sa fiche technique détaillée.
            </p>
          </div>

          <button
            type="button"
            className="catalogue-close-btn"
            onClick={onClose}
            aria-label="Fermer le catalogue de projets"
          >
            <X size={22} />
          </button>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="catalogue-toolbar">
          {/* Search Box */}
          <div className="catalogue-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher par mot-clé, ville, superficie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="catalogue-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery("")}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="catalogue-filter-pills">
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
                  style={{ animationDelay: `${idx * 40}ms` }}
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
                      <ArrowUpRight size={18} />
                    </button>
                  </div>

                  {/* Card Info Bottom */}
                  <div className="card-content-block">
                    <div className="card-location-row">
                      <MapPin size={13} />
                      <span>{project.location}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p className="card-subtitle-desc">{project.subtitle}</p>

                    <div className="card-specs-footer">
                      <div className="spec-item">
                        <Maximize2 size={13} />
                        <span>{project.surface}</span>
                      </div>
                      <div className="spec-divider" />
                      <div className="spec-item">
                        <Layers size={13} />
                        <span>{project.scope.length} Corps d'état</span>
                      </div>
                      <div className="spec-divider" />
                      <span className="spec-view-link">Voir la fiche &rarr;</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="catalogue-empty-state">
              <Sparkles size={36} className="empty-icon" />
              <h3>Aucun projet ne correspond à votre recherche</h3>
              <p>Essayez de modifier votre filtre de catégorie ou votre terme de recherche.</p>
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
