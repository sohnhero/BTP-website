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

interface ServiceCardProps extends ServiceItem {
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  iconName,
  title,
  description,
  index = 0,
}) => {
  const { ref: revealRef, revealClass } = useReveal({
    variant: "brick",
    delay: Math.min(index * 110, 550),
  });
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = iconMap[iconName];

  const updateTiltPosition = useCallback((clientX: number, clientY: number) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tilt: max ±14deg for responsive tactile feel
    const rotateY = ((x - centerX) / centerX) * 14;
    const rotateX = ((centerY - y) / centerY) * 14;

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

  // Mobile Touch Gestures Handling (Dynamic 3D tilt tracking finger movement)
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
            ? `rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) translateZ(24px)`
            : "rotateX(0deg) rotateY(0deg) translateZ(0px)",
        }}
      >
        {/* Glare overlay */}
        <div
          className="service-card-glare"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
          }}
        />

        {/* Accent border glow */}
        <div
          className="service-card-glow"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(214,169,73,0.4) 0%, transparent 60%)`,
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
