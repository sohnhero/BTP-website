"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { ServiceItem } from "@/data/services";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceForContact?: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onSelectServiceForContact,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [activeService, setActiveService] = useState<ServiceItem | null>(service);

  useEffect(() => {
    if (service) {
      setActiveService(service);
      setIsClosing(false);
    }
  }, [service]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 380);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Escape key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  if (!isOpen && !isClosing) return null;
  if (!activeService) return null;

  const handleCtaClick = () => {
    if (onSelectServiceForContact) {
      onSelectServiceForContact(activeService.title);
    }
    handleClose();
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 390);
  };

  return (
    <div
      className={`service-modal-overlay ${isClosing ? "service-modal-overlay--closing" : ""}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="service-modal-perspective"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`service-modal-card ${isClosing ? "service-modal-card--closing" : ""}`}
        >
          {/* Close button */}
          <button
            type="button"
            className="service-modal-close"
            onClick={handleClose}
            aria-label="Fermer la vue détaillée"
          >
            <X size={18} />
          </button>

          {/* Left Column / Media Header: Illustrative Image */}
          <div className="service-modal-media">
            <Image
              src={activeService.imageSrc}
              alt={`Illustration du service ${activeService.title} - FIDELE SARL`}
              fill
              sizes="(max-width: 900px) 100vw, 480px"
              className="service-modal-img"
              priority
            />
            <div className="service-modal-media-badge">
              <span className="badge-cat">{activeService.categoryLabel}</span>
            </div>
            <div className="service-modal-media-tag">
              <ShieldCheck size={14} />
              <span>Garantie Qualité FIDELE SARL</span>
            </div>
          </div>

          {/* Right Column: Detailed Specifications & Content */}
          <div className="service-modal-body">
            <div className="service-modal-header">
              <span className="service-modal-sub">{activeService.tagline}</span>
              <h2 id="service-modal-title" className="service-modal-title">
                {activeService.title}
              </h2>
            </div>

            <p className="service-modal-desc">{activeService.detailedText}</p>

            {/* Checklist of features / equipment */}
            <div className="service-modal-features">
              <h3 className="features-title">Capacités & Engagements Techniques :</h3>
              <ul className="features-list">
                {activeService.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <CheckCircle2 size={16} className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions Footer */}
            <div className="service-modal-footer">
              <button
                type="button"
                className="service-modal-cta"
                onClick={handleCtaClick}
              >
                <span>Demander un devis pour ce service</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                className="service-modal-back"
                onClick={handleClose}
              >
                <X size={15} />
                <span>Fermer la fiche</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
