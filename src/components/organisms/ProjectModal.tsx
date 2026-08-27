"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  MapPin,
  Maximize2,
  Clock,
  CheckCircle2,
  Building2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject?: (proj: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Handle ESC key to close modal
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && project.gallery.length > 1) {
        setActiveImageIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight" && project.gallery.length > 1) {
        setActiveImageIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentImage = project.gallery[activeImageIndex] || project.imageUrl;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Header Bar */}
        <div className="project-modal-topbar">
          <div className="modal-header-meta">
            <span className="modal-category-badge">{project.category}</span>
            <span className="modal-ref-code">REF: FID-BTP-{project.year}</span>
            <span className="modal-status-badge">
              <ShieldCheck size={13} />
              {project.status}
            </span>
          </div>

          <button
            type="button"
            className="project-modal-close"
            onClick={onClose}
            aria-label="Fermer le dossier technique"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Scrollable Content */}
        <div className="project-modal-body">
          {/* Gallery / Hero Carousel */}
          <div className="project-modal-gallery">
            <div className="gallery-main-viewport">
              <Image
                src={currentImage}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 850px"
                style={{ objectFit: "cover" }}
                priority
                unoptimized={currentImage.startsWith("http")}
              />
              <div className="gallery-gradient-overlay" />

              {/* Gallery Navigation Controls */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    className="gallery-nav-btn gallery-nav-btn--prev"
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? project.gallery.length - 1 : prev - 1
                      )
                    }
                    aria-label="Photo précédente"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    className="gallery-nav-btn gallery-nav-btn--next"
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === project.gallery.length - 1 ? 0 : prev + 1
                      )
                    }
                    aria-label="Photo suivante"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Gallery Pagination Dots */}
              {project.gallery.length > 1 && (
                <div className="gallery-dots">
                  {project.gallery.map((_, idx) => (
                    <button
                      key={`dot-${idx}`}
                      type="button"
                      className={`gallery-dot ${idx === activeImageIndex ? "is-active" : ""}`}
                      onClick={() => setActiveImageIndex(idx)}
                      aria-label={`Aller à la photo ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {project.gallery.length > 1 && (
              <div className="gallery-thumb-strip">
                {project.gallery.map((img, idx) => (
                  <button
                    key={`thumb-${idx}`}
                    type="button"
                    className={`gallery-thumb-btn ${idx === activeImageIndex ? "is-active" : ""}`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <Image
                      src={img}
                      alt={`Miniature ${idx + 1}`}
                      fill
                      sizes="80px"
                      style={{ objectFit: "cover" }}
                      unoptimized={img.startsWith("http")}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details Section */}
          <div className="project-modal-info">
            <div className="project-title-row">
              <div>
                <span className="overline">Dossier Technique Ouvrage</span>
                <h2 id="project-modal-title">{project.title}</h2>
                <p className="project-subtitle-text">{project.subtitle}</p>
              </div>
            </div>

            {/* Technical Metrics Bento Bar */}
            <div className="project-metrics-grid">
              <div className="metric-box">
                <div className="metric-box-icon">
                  <MapPin size={18} />
                </div>
                <div className="metric-box-data">
                  <span className="metric-label">Localisation</span>
                  <strong>{project.location}</strong>
                </div>
              </div>

              <div className="metric-box">
                <div className="metric-box-icon">
                  <Maximize2 size={18} />
                </div>
                <div className="metric-box-data">
                  <span className="metric-label">Superficie</span>
                  <strong>{project.surface}</strong>
                </div>
              </div>

              <div className="metric-box">
                <div className="metric-box-icon">
                  <Clock size={18} />
                </div>
                <div className="metric-box-data">
                  <span className="metric-label">Durée des travaux</span>
                  <strong>{project.duration}</strong>
                </div>
              </div>

              <div className="metric-box">
                <div className="metric-box-icon">
                  <Building2 size={18} />
                </div>
                <div className="metric-box-data">
                  <span className="metric-label">Maîtrise d'Œuvre</span>
                  <strong>FIDELE SARL</strong>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="project-desc-section">
              <h3>Conception & Ingénierie du Projet</h3>
              <p>{project.description}</p>
            </div>

            {/* Scope of Work */}
            <div className="project-scope-section">
              <h3>Corps d'État & Compétences Mobilisées</h3>
              <ul className="project-scope-list">
                {project.scope.map((item, index) => (
                  <li key={`scope-${index}`}>
                    <CheckCircle2 size={16} className="scope-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architect's Quote */}
            {project.architectQuote && (
              <div className="project-quote-box">
                <Award size={20} className="quote-badge-icon" />
                <blockquote>
                  &ldquo;{project.architectQuote}&rdquo;
                  <cite>— Direction Technique FIDELE SARL</cite>
                </blockquote>
              </div>
            )}

            {/* Modal Bottom Action Bar */}
            <div className="project-modal-cta-row">
              <a
                href="#contact"
                className="btn btn-primary modal-action-btn"
                onClick={() => {
                  onClose();
                  const contactEl = document.getElementById("contact");
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span>Étudier un projet similaire</span>
                <ArrowRight size={16} />
              </a>

              <button
                type="button"
                className="btn btn-outline modal-cancel-btn"
                onClick={onClose}
              >
                Fermer la fiche
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
