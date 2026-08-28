"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Shovel,
  Layers,
  PaintRoller,
  Route,
  Trees,
  Droplets,
  Fuel,
  Package,
  ArrowUpRight,
} from "lucide-react";
import { ServiceItem } from "@/data/services";
import { useReveal } from "@/hooks/useReveal";

const iconMap = {
  "building-2": Building2,
  shovel: Shovel,
  layers: Layers,
  "paint-roller": PaintRoller,
  route: Route,
  trees: Trees,
  droplets: Droplets,
  fuel: Fuel,
  package: Package,
};

interface ServiceCardProps extends ServiceItem {
  index?: number;
  onCardClick?: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  const {
    number,
    categoryLabel,
    iconName,
    title,
    tagline,
    description,
    tags,
    index = 0,
    onCardClick,
  } = props;
  const { ref: revealRef, revealClass } = useReveal({
    variant: "up",
    delay: Math.min(index * 50, 300),
  });

  const IconComponent = iconMap[iconName] || Building2;

  const handleClick = (e: React.MouseEvent) => {
    if (onCardClick) {
      e.preventDefault();
      onCardClick(props);
    }
  };

  return (
    <div ref={revealRef} className={revealClass}>
      <Link
        href="/contact"
        onClick={handleClick}
        className="service-card"
        aria-label={`Découvrir notre service : ${title}`}
      >
        {/* Top Header: Icon + Interactive Arrow */}
        <div className="service-card-top">
          <div className="service-icon-box">
            <IconComponent size={19} />
          </div>
          <span className="service-card-arrow" aria-hidden="true">
            <ArrowUpRight size={14} />
          </span>
        </div>

        {/* Category & Tagline line */}
        <div className="service-meta-row">
          <span className="service-category-tag">{categoryLabel}</span>
          <span className="service-tagline-dot" aria-hidden="true">•</span>
          <span className="service-tagline">{tagline}</span>
        </div>

        {/* Title */}
        <h3 className="service-card-title">{title}</h3>

        {/* Description */}
        <p className="service-card-desc">{description}</p>

        {/* Compact Chips Row */}
        {tags && tags.length > 0 && (
          <div className="service-tags-row">
            {tags.slice(0, 2).map((t, idx) => (
              <span key={idx} className="service-pill-tag">
                {t}
              </span>
            ))}
            {tags.length > 2 && (
              <span className="service-pill-tag service-pill-tag--more">
                +{tags.length - 2}
              </span>
            )}
          </div>
        )}
      </Link>
    </div>
  );
};

