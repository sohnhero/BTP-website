"use client";

import React from "react";
import { useReveal } from "@/hooks/useReveal";
import { MapPin, Clock, PhoneCall, Mail, Navigation, ExternalLink } from "lucide-react";

export const MapSection: React.FC = () => {
  const headingReveal = useReveal({ variant: "up" });
  const contentReveal = useReveal({ variant: "up", delay: 150 });

  return (
    <section className="map-section section-pad" id="location">
      <div className="map-section-container">
        {/* Section Heading */}
        <div
          ref={headingReveal.ref}
          className={`section-heading map-heading-row ${headingReveal.revealClass}`}
        >
          <div className="heading-left">
            <span className="overline">Siège & Localisation</span>
            <h2>
              Notre siège à Dakar,<br />
              <em>au cœur de vos projets.</em>
            </h2>
          </div>

          <div className="heading-right">
            <p>
              Retrouvez les bureaux de FIDELE SARL pour échanger avec notre direction technique, nos ingénieurs et nos chargés d'affaires BTP.
            </p>
          </div>
        </div>

        {/* Interactive Location Console Grid */}
        <div
          ref={contentReveal.ref}
          className={`map-console-grid ${contentReveal.revealClass}`}
        >
          {/* Left Info Console */}
          <div className="map-info-panel">
            <div className="map-info-status-pill">
              <span className="status-live-dot" />
              <span>Siège Social & Bureau d'Études</span>
            </div>

            <h3 className="map-info-title">
              Venez nous rencontrer
            </h3>
            <p className="map-info-subtitle">
              Nos équipes vous accueillent pour étudier vos plans, devis et opportunités de partenariat BTP.
            </p>

            <div className="map-details-list">
              {/* Adresse */}
              <div className="map-detail-item">
                <div className="map-icon-capsule">
                  <MapPin size={18} />
                </div>
                <div className="map-detail-text">
                  <strong>Adresse & Localisation</strong>
                  <span>FIDELE SARL, Dakar, Sénégal</span>
                </div>
              </div>

              {/* Horaires */}
              <div className="map-detail-item">
                <div className="map-icon-capsule">
                  <Clock size={18} />
                </div>
                <div className="map-detail-text">
                  <strong>Horaires d'Ouverture</strong>
                  <span>Lundi – Vendredi : 08h00 – 18h00</span>
                  <small>Samedi : 08h30 – 13h00 (Sur RDV)</small>
                </div>
              </div>

              {/* Contact Direct */}
              <div className="map-detail-item">
                <div className="map-icon-capsule">
                  <PhoneCall size={18} />
                </div>
                <div className="map-detail-text">
                  <strong>Standard Téléphonique</strong>
                  <a href="tel:+221338214974" className="map-phone-link">
                    +221 33 821 49 74
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="map-detail-item">
                <div className="map-icon-capsule">
                  <Mail size={18} />
                </div>
                <div className="map-detail-text">
                  <strong>Courrier Électronique</strong>
                  <a href="mailto:Fidele@fidele.sn" className="map-email-link">
                    Fidele@fidele.sn
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps External Direction CTA */}
            <div className="map-cta-wrap">
              <a
                href="https://maps.google.com/?q=FIDELE+SARL+Dakar+Senegal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-map-direction"
              >
                <Navigation size={16} />
                <span>Ouvrir l'Itinéraire Google Maps</span>
                <ExternalLink size={14} className="ext-icon" />
              </a>
            </div>
          </div>

          {/* Right Interactive Embedded Google Map */}
          <div className="map-frame-panel">
            {/* Embedded Responsive Iframe */}
            <div className="map-iframe-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.607995093974!2d-17.472773600000004!3d14.734741200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d000faa3f99%3A0xd42884cb4f64f30e!2sFIDELE%20SARL!5e0!3m2!1sfr!2ssn!4v1787903302585!5m2!1sfr!2ssn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Localisation FIDELE SARL sur Google Maps"
                className="map-iframe-element"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
