"use client";

import React, { useState } from "react";
import { ContactForm } from "@/components/organisms/ContactForm";
import { useReveal } from "@/hooks/useReveal";
import {
  Building2,
  UserPlus,
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  HardHat,
  Ruler,
  Layers,
} from "lucide-react";

export type ContactMode = "project" | "career";

export const ContactSection: React.FC = () => {
  const { ref, revealClass } = useReveal();
  const [mode, setMode] = useState<ContactMode>("project");

  return (
    <section className="contact-hybrid-section section-pad" id="contact">
      <div ref={ref} className={`contact-hybrid-container ${revealClass}`}>
        {/* Top Header Row with Segmented Pill Switcher */}
        <div className="contact-hybrid-header">
          <div className="contact-heading-left">
            <span className="overline">Ingénierie, Chantier & Talents</span>
            <h2>
              {mode === "project" ? (
                <>
                  Concevons votre projet<br />
                  <em>avec rigueur et excellence.</em>
                </>
              ) : (
                <>
                  Construisez votre carrière<br />
                  <em>au cœur de l’ingénierie.</em>
                </>
              )}
            </h2>
          </div>

          {/* Luxury Segmented Slider Switcher */}
          <div className="segmented-switcher">
            <button
              type="button"
              className={`segmented-btn ${mode === "project" ? "active" : ""}`}
              onClick={() => setMode("project")}
            >
              <Building2 size={16} />
              <span>Vous avez un projet</span>
            </button>
            <button
              type="button"
              className={`segmented-btn ${mode === "career" ? "active" : ""}`}
              onClick={() => setMode("career")}
            >
              <UserPlus size={16} />
              <span>Rejoindre l'équipe</span>
            </button>
          </div>
        </div>

        {/* Console Dual Panel */}
        <div className="contact-console-grid">
          {/* Left Info Panel */}
          <div className="console-info-card">
            <div className="info-badge">
              <HardHat size={15} />
              <span>{mode === "project" ? "Coordination Chantier & Bureau d'Études" : "Recrutement & Partenariats BTP"}</span>
            </div>

            {mode === "project" ? (
              <>
                <div>
                  <h3>Votre ouvrage mérite une exécution irréprochable.</h3>
                  <p>
                    De la brique initiale à la remise des clés, notre bureau d'études et nos équipes de chantier maîtrisent chaque étape technique.
                  </p>

                  <div className="info-feature-list">
                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <Clock size={18} />
                      </div>
                      <div>
                        <strong>Réponse & Déplacement sous 24h</strong>
                        <span>Prise en charge rapide et cadrage sur site.</span>
                      </div>
                    </div>

                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <Ruler size={18} />
                      </div>
                      <div>
                        <strong>Études d'Ingénierie & Métré précis</strong>
                        <span>Plans techniques et chiffrage rigoureux.</span>
                      </div>
                    </div>

                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <strong>Sécurité Chantier & Normes BTP</strong>
                        <span>Garantie décennale et contrôle qualité.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info-direct-contacts">
                  <a href="tel:+221338000000" className="contact-chip">
                    <PhoneCall size={14} />
                    <span>+221 33 800 00 00</span>
                  </a>
                  <a href="mailto:contact@sohnbuild.sn" className="contact-chip">
                    <Mail size={14} />
                    <span>contact@sohnbuild.sn</span>
                  </a>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3>Construisez l'avenir sur nos chantiers d'exception.</h3>
                  <p>
                    Rejoignez des équipes exigeantes : ingénieurs béton/structure, architectes, chefs de chantier et artisans d'élite.
                  </p>

                  <div className="info-feature-list">
                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <Layers size={18} />
                      </div>
                      <div>
                        <strong>Grands Ouvrages & Structures</strong>
                        <span>Projets tertiaires et résidentiels de premier plan.</span>
                      </div>
                    </div>

                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <HardHat size={18} />
                      </div>
                      <div>
                        <strong>Équipements & Sécurité Terrain</strong>
                        <span>Normes EPI strictes et matériel de pointe.</span>
                      </div>
                    </div>

                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <strong>Chantiers Stratégiques</strong>
                        <span>Implantation solide à Dakar et en région.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info-direct-contacts">
                  <a href="mailto:recrutement@sohnbuild.sn" className="contact-chip">
                    <Mail size={14} />
                    <span>recrutement@sohnbuild.sn</span>
                  </a>
                  <div className="contact-chip">
                    <MapPin size={14} />
                    <span>Dakar, Sénégal</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Interactive Form Console */}
          <div className="console-form-card">
            <ContactForm mode={mode} />
          </div>
        </div>
      </div>
    </section>
  );
};
