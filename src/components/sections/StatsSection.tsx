"use client";

import React from "react";
import Image from "next/image";
import { statsData } from "@/data/stats";
import { StatCard } from "@/components/molecules/StatCard";
import { useReveal } from "@/hooks/useReveal";

export const StatsSection: React.FC = () => {
  const { ref, revealClass } = useReveal();

  return (
    <section className="stats-wrap section-pad" id="expertise">
      <div ref={ref} className={`wide-image ${revealClass}`}>
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90"
          alt="Architecture contemporaine"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          unoptimized
        />
        <div className="image-tag">Dakar • Projet résidentiel</div>
      </div>

      <div className="stats-grid">
        {statsData.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>
    </section>
  );
};
