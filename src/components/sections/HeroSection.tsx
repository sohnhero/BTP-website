"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDownRight, Play } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { AnimatedNumber } from "@/components/atoms/AnimatedNumber";
import { CompanyVideoModal } from "@/components/organisms/CompanyVideoModal";

export const HeroSection: React.FC = () => {
  const { ref, revealClass } = useReveal();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section ref={ref} className={`hero ${revealClass}`}>
        <div className="hero-media">
          <div className="hero-overlay"></div>

          {/* Top-Right Graphic Video Trigger Console (Film Institutionnel) */}
          <button
            type="button"
            className="hero-video-trigger"
            onClick={() => setIsVideoModalOpen(true)}
            aria-label="Ouvrir le film de présentation de FIDÈLE SARL"
          >
            {/* Play Button with Pulsing Radar Ring */}
            <div className="hero-video-play-wrap">
              <span className="sonar-ring sonar-ring-1" aria-hidden="true" />
              <span className="sonar-ring sonar-ring-2" aria-hidden="true" />

              <div className="hero-video-play-core">
                <span className="ch-tick ch-top" />
                <span className="ch-tick ch-bottom" />
                <span className="ch-tick ch-left" />
                <span className="ch-tick ch-right" />

                <span className="play-icon-triangle">
                  <Play size={15} fill="currentColor" />
                </span>
              </div>
            </div>

            {/* High-Contrast Clear Typography Block */}
            <div className="hero-video-text-content">
              <div className="video-text-overline">
                <span className="rec-live-dot" />
                <span>VIDEO DE PRÉSENTATION</span>
              </div>
              <strong className="video-text-title">
                Découvrir FIDÈLE SARL
              </strong>
            </div>

            {/* Trailing Arrow */}
            <span className="hero-video-arrow-cue" aria-hidden="true">
              <ArrowRight size={14} />
            </span>
          </button>

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
              <strong>
                <AnimatedNumber value={4.9} decimals={1} duration={2200} />/5
              </strong>
              <small>Satisfaction client</small>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Company Presentation Video Modal */}
      <CompanyVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
};
