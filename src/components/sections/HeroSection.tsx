"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDownRight, Play, ShieldCheck } from "lucide-react";
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
            aria-label="Ouvrir le film de présentation de FIDELE SARL"
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
                Découvrir FIDELE SARL
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
              BTP & Transport de matériel génie civil
            </div>

            <h1>
              Des infrastructures durables<br />
              au service du <em>développement local.</em>
            </h1>

            <p>
              Du bâtiment gros œuvre aux aménagements sportifs et économiques, Fidèle SARL conçoit et réhabilite les espaces publics sénégalais avec un standard d'excellence.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-light" href="/#projects">
                Voir nos réalisations
                <ArrowRight size={16} />
              </Link>
              <Link className="btn-hero-contact" href="/contact">
                Nous contacter
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="hero-quality-pill">
            <div className="hero-quality-icon-box">
              <ShieldCheck size={20} className="quality-shield-icon" />
            </div>
            <div className="hero-quality-info">
              <strong>Excellence &amp; Qualité</strong>
              <small>Standard d'exécution garanti</small>
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
