"use client";

import React, { useState } from "react";
import { ContactForm } from "@/components/organisms/ContactForm";
import { useReveal } from "@/hooks/useReveal";
import {
  MessageSquare,
  Handshake,
  Briefcase,
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  HardHat,
  Ruler,
  Layers,
  Award,
  Users,
} from "lucide-react";

export type ContactMode = "general" | "partnership" | "career";

export const ContactSection: React.FC = () => {
  const headingReveal = useReveal({ variant: "up" });
  const infoReveal = useReveal({ variant: "left", delay: 100 });
  const formReveal = useReveal({ variant: "right", delay: 220 });
  const [mode, setMode] = useState<ContactMode>("general");

  return (
    <section className="contact-hybrid-section section-pad" id="contact">
      <div className="contact-hybrid-container">
        {/* Section Heading harmonized with the entire site */}
        <div ref={headingReveal.ref} className={`section-heading contact-heading-row ${headingReveal.revealClass}`}>
          <div className="heading-left">
            <span className="overline">Contact & Partenariat</span>
            <h2>
              {mode === "general" && (
                <>
                  Échangeons sur votre projet<br />
                  <em>avec réactivité et rigueur.</em>
                </>
              )}
              {mode === "partnership" && (
                <>
                  Devenons partenaires<br />
                  <em>pour bâtir l’excellence.</em>
                </>
              )}
              {mode === "career" && (
                <>
                  Rejoignez notre équipe<br />
                  <em>au cœur des grands chantiers.</em>
                </>
              )}
            </h2>
          </div>

          <div className="heading-right">
            <p>
              {mode === "general" &&
                "Une question, une étude de faisabilité ou un devis personnalisé ? Nos ingénieurs sont à votre disposition pour vous répondre sous 24h."}
              {mode === "partnership" &&
                "Fournisseurs, sous-traitants, bureaux d’études : unissons nos expertises pour concevoir et exécuter des projets d'envergure."}
              {mode === "career" &&
                "Ingénieurs, conducteurs de travaux, techniciens : donnez une nouvelle dimension à votre carrière au sein d'une entreprise innovante."}
            </p>

            {/* Luxury 3-Way Segmented Switcher */}
            <div className="segmented-switcher segmented-switcher--three">
              <button
                type="button"
                className={`segmented-btn ${mode === "general" ? "active" : ""}`}
                onClick={() => setMode("general")}
              >
                <MessageSquare size={15} />
                <span>Contact Général</span>
              </button>
              <button
                type="button"
                className={`segmented-btn ${mode === "partnership" ? "active" : ""}`}
                onClick={() => setMode("partnership")}
              >
                <Handshake size={15} />
                <span>Partenariat</span>
              </button>
              <button
                type="button"
                className={`segmented-btn ${mode === "career" ? "active" : ""}`}
                onClick={() => setMode("career")}
              >
                <Briefcase size={15} />
                <span>Demande d'Emploi</span>
              </button>
            </div>
          </div>
        </div>

        {/* Console Dual Panel with Staggered Scroll Entrance */}
        <div className="contact-console-grid">
          {/* Left Info Panel (Dynamic based on mode) */}
          <div ref={infoReveal.ref} className={`console-info-card ${infoReveal.revealClass}`}>
            {mode === "general" && (
              <>
                <div className="info-badge">
                  <HardHat size={15} />
                  <span>Bureau d'Études & Information Client</span>
                </div>

                <div>
                  <h3>Une écoute attentive pour vos projets & questions.</h3>
                  <p>
                    Particuliers, investisseurs et collectivités : notre équipe d'ingénierie et de suivi de chantier vous apporte une réponse précise et personnalisée.
                  </p>

                  <div className="info-feature-list">
                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <Clock size={18} />
                      </div>
                      <div>
                        <strong>Réponse garantie sous 24h</strong>
                        <span>Prise en charge rapide et cadrage de vos besoins.</span>
                      </div>
                    </div>

                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <Ruler size={18} />
                      </div>
                      <div>
                        <strong>Études d'Ingénierie & Devis</strong>
                        <span>Métrés, plans d'exécution et estimations budgétaires.</span>
                      </div>
                    </div>

                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <strong>Garantie Décennale & Suivi</strong>
                        <span>Contrôle qualité rigoureux et conformité aux normes.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info-direct-contacts">
                  <a href="tel:+221338000000" className="contact-chip">
                    <PhoneCall size={14} />
                    <span>+221 33 800 00 00</span>
                  </a>
                  <a href="mailto:contact@fidelesarl.com" className="contact-chip">
                    <Mail size={14} />
                    <span>contact@fidelesarl.com</span>
                  </a>
                </div>
              </>
            )}

            {mode === "partnership" && (
              <>
                <div className="info-badge">
                  <Handshake size={15} />
                  <span>Alliances BTP & Co-traitance Stratégique</span>
                </div>

                <div>
                  <h3>Bâtissons des synergies solides et durables.</h3>
                  <p>
                    Entreprises de BTP, sous-traitants d'élite, bureaux d'études et fournisseurs de matériaux : unissons nos expertises sur des projets d'envergure.
                  </p>

                  <div className="info-feature-list">
                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <Layers size={18} />
                      </div>
                      <div>
                        <strong>Co-traitance & Sous-traitance</strong>
                        <span>Alliances techniques sur marchés publics et privés.</span>
                      </div>
                    </div>

                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <Award size={18} />
                      </div>
                      <div>
                        <strong>Fournisseurs & Matériaux Certifiés</strong>
                        <span>Approvisionnement de qualité et traçabilité absolue.</span>
                      </div>
                    </div>

                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <Users size={18} />
                      </div>
                      <div>
                        <strong>Pôle Partenariats Dédié</strong>
                        <span>Traitement direct par la direction des partenariats.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info-direct-contacts">
                  <a href="mailto:partenariat@fidelesarl.com" className="contact-chip">
                    <Mail size={14} />
                    <span>partenariat@fidelesarl.com</span>
                  </a>
                  <div className="contact-chip">
                    <MapPin size={14} />
                    <span>Dakar, Sénégal</span>
                  </div>
                </div>
              </>
            )}

            {mode === "career" && (
              <>
                <div className="info-badge">
                  <Briefcase size={15} />
                  <span>Recrutement & Développement des Talents</span>
                </div>

                <div>
                  <h3>Construisez l'avenir sur nos chantiers d'exception.</h3>
                  <p>
                    Rejoignez des équipes passionnées et exigeantes : ingénieurs structure, architectes BIM, conducteurs de travaux et chefs de chantier.
                  </p>

                  <div className="info-feature-list">
                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <Layers size={18} />
                      </div>
                      <div>
                        <strong>Grands Ouvrages & Défis Techniques</strong>
                        <span>Projets tertiaires et résidentiels de premier plan.</span>
                      </div>
                    </div>

                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <HardHat size={18} />
                      </div>
                      <div>
                        <strong>Sécurité & Matériel de Pointe</strong>
                        <span>Normes HSE strictes et équipements de qualité.</span>
                      </div>
                    </div>

                    <div className="info-feature-item">
                      <div className="feature-icon-box">
                        <Award size={18} />
                      </div>
                      <div>
                        <strong>Évolution & Reconnaissance</strong>
                        <span>Perspectives d'avancement et cadre valorisant.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="info-direct-contacts">
                  <a href="mailto:emploi@fidelesarl.com" className="contact-chip">
                    <Mail size={14} />
                    <span>emploi@fidelesarl.com (avec CV)</span>
                  </a>
                  <div className="contact-chip">
                    <MapPin size={14} />
                    <span>Dakar & Régions</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Interactive Form Console */}
          <div ref={formReveal.ref} className={`console-form-card ${formReveal.revealClass}`}>
            <ContactForm mode={mode} />
          </div>
        </div>
      </div>
    </section>
  );
};
