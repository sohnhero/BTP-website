"use client";

import React, { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Building2, Ruler, PaintRoller, ClipboardCheck, ArrowUpRight } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { useReveal } from "@/hooks/useReveal";

const iconMap = {
  "building-2": Building2,
  ruler: Ruler,
  "paint-roller": PaintRoller,
  "clipboard-check": ClipboardCheck,
};

export const ServiceCard: React.FC<ServiceItem> = ({
  number,
  iconName,
  title,
  description,
}) => {
  const { ref: revealRef, revealClass } = useReveal();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = iconMap[iconName];

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tilt: max ±12deg
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = ((centerY - y) / centerY) * 12;

    // Glare position (%)
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glareX, glareY });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div ref={revealRef} className={revealClass} style={{ perspective: "800px" }}>
      <article
        ref={cardRef}
        className={`service-card ${isHovered ? "service-card--active" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateZ(20px)`
            : "rotateX(0) rotateY(0) translateZ(0)",
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

        {/* Accent border glow */}
        <div
          className="service-card-glow"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(214,169,73,0.35) 0%, transparent 60%)`,
          }}
        />

        <div className="service-icon">
          <IconComponent size={22} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href="#contact" aria-label={`En savoir plus sur ${title}`}>
          <ArrowUpRight size={18} />
        </Link>
      </article>
    </div>
  );
};
