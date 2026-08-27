"use client";

import React, { useRef, useState, useCallback } from "react";
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
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  categoryLabel,
  iconName,
  title,
  tagline,
  description,
  tags,
  index = 0,
}) => {
  const { ref: revealRef, revealClass } = useReveal({
    variant: "brick",
    delay: Math.min(index * 90, 500),
  });
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = iconMap[iconName] || Building2;

  const updateTiltPosition = useCallback((clientX: number, clientY: number) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tilt: max ±12deg for responsive tactile feel
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = ((centerY - y) / centerY) * 12;

    // Glare position (%)
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glareX, glareY });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    updateTiltPosition(e.clientX, e.clientY);
  }, [updateTiltPosition]);

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  // Mobile Touch Gestures Handling
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      setIsHovered(true);
      updateTiltPosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, [updateTiltPosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updateTiltPosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, [updateTiltPosition]);

  const handleTouchEnd = useCallback(() => {
    setTimeout(() => {
      setIsHovered(false);
      setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
    }, 450);
  }, []);

  return (
    <div ref={revealRef} className={revealClass} style={{ perspective: "900px" }}>
      <article
        ref={cardRef}
        className={`service-card ${isHovered ? "service-card--active" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{
          transform: isHovered
            ? `rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) translateZ(20px)`
            : "rotateX(0deg) rotateY(0deg) translateZ(0px)",
        }}
      >
        {/* Glare overlay */}
        <div
          className="service-card-glare"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.25) 0%, transparent 60%)`,
          }}
        />

        {/* Accent border glow in official FIDELE SARL blue */}
        <div
          className="service-card-glow"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(0,79,156,0.35) 0%, transparent 60%)`,
          }}
        />

        {/* Card Header Row: Icon + Number */}
        <div className="service-card-top">
          <div className="service-icon">
            <IconComponent size={22} />
          </div>
          <span className="service-number">{number}</span>
        </div>

        {/* Category Pill Tag */}
        <span className="service-category-tag">{categoryLabel}</span>

        <h3>{title}</h3>
        <span className="service-tagline">{tagline}</span>
        <p>{description}</p>

        {/* Action Link Arrow */}
        <Link href="#contact" aria-label={`Consulter notre expertise : ${title}`}>
          <ArrowUpRight size={18} />
        </Link>
      </article>
    </div>
  );
};
