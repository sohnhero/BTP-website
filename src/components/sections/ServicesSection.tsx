"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { servicesData, serviceCategories, ServiceItem } from "@/data/services";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import { ServiceDetailModal } from "@/components/organisms/ServiceDetailModal";
import { useReveal } from "@/hooks/useReveal";

export const ServicesSection: React.FC = () => {
  const { ref, revealClass } = useReveal();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [showAllMobile, setShowAllMobile] = useState<boolean>(false);

  const filteredServices =
    selectedCategory === "all"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <section className="services section-pad" id="services">
      {/* 3D Crane Hook Hanging directly from the top border of the section */}
      <div className="crane-hook-hanger" aria-hidden="true">
        <Image
          src="/images/Gemini_Generated_Image_bw87q6bw87q6bw87-removebg-preview.png"
          alt="Crochet de grue BTP"
          width={130}
          height={260}
          priority
          className="crane-hook-img"
        />
      </div>

      <div ref={ref} className={`section-heading services-heading-wrap ${revealClass}`}>
        <div className="heading-left">
          <span className="overline">Nos Services & Expertises</span>
          <h2>
            Une maîtrise complète,<br />
            <em>du gros œuvre aux équipements.</em>
          </h2>
        </div>

        <div className="heading-right">
          <p>
            BTP, voiries et adduction d'eau, transport sécurisé d'hydrocarbures et négoce d'équipements techniques : FIDELE SARL mobilise ses équipes et son matériel de pointe pour concrétiser vos projets.
          </p>
        </div>
      </div>

      {/* Luxury Interactive Category Filter Pills */}
      <div className="services-filter-bar">
        {serviceCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              className={`services-filter-pill ${isActive ? "is-active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span>{cat.label}</span>
              <span className="pill-badge">{cat.count}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic 3-column Responsive Grid for 9 Authentic Services */}
      <div
        className={`service-grid ${
          !showAllMobile ? "service-grid--collapsed-mobile" : ""
        }`}
      >
        {filteredServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            {...service}
            index={index}
            onCardClick={(s) => setSelectedServiceForModal(s)}
          />
        ))}
      </div>

      {/* Mobile Toggle Button: only shown on mobile when more than 4 cards */}
      {filteredServices.length > 4 && (
        <div className="services-mobile-toggle-wrap">
          <button
            type="button"
            className="services-mobile-toggle-btn"
            onClick={() => setShowAllMobile((prev) => !prev)}
            aria-expanded={showAllMobile}
          >
            <span>
              {showAllMobile
                ? "Voir moins de services"
                : `Voir tous les services (${filteredServices.length})`}
            </span>
            {showAllMobile ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      )}

      {/* 3D Flip Centered Modal with HD Illustrative Visual & Deep Technical Details */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        isOpen={!!selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
      />
    </section>
  );
};
