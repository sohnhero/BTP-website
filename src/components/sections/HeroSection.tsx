"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export const HeroSection: React.FC = () => {
  const { ref, revealClass } = useReveal();

  return (
    <section ref={ref} className={`hero ${revealClass}`}>
      <div className="hero-media">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot"></span>
            Construction • Génie civil • Rénovation
          </div>

          <h1>
            Construire aujourd’hui.<br />
            <em>Créer de la valeur</em> pour demain.
          </h1>

          <p>
            Nous concevons et réalisons des ouvrages durables, performants et remarquables — du premier plan jusqu’à la livraison finale.
          </p>

          <div className="hero-actions">
            <Link className="btn btn-light" href="#projects">
              Voir nos réalisations
              <ArrowRight size={16} />
            </Link>
            <Link className="text-link" href="#about">
              Découvrir notre méthode
              <ArrowDownRight size={16} />
            </Link>
          </div>
        </div>



        <div className="hero-social-proof">
          <div className="avatar-stack">
            <span
              style={
                {
                  "--bg":
                    "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80')",
                } as React.CSSProperties
              }
            ></span>
            <span
              style={
                {
                  "--bg":
                    "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80')",
                } as React.CSSProperties
              }
            ></span>
            <span
              style={
                {
                  "--bg":
                    "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80')",
                } as React.CSSProperties
              }
            ></span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <small>Satisfaction client</small>
          </div>
        </div>
      </div>
    </section>
  );
};
