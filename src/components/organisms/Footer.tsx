"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, ArrowRight, Check } from "lucide-react";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { useReveal } from "@/hooks/useReveal";
import { LegalModal, LegalTabType } from "@/components/organisms/LegalModal";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTabType | null>(null);

  const { ref, revealClass } = useReveal({
    threshold: 0.05,
    rootMargin: "0px 0px -40px 0px",
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setIsSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
      setIsSubscribed(false);
    }, 4000);
  };

  return (
    <>
      <footer ref={ref} className={`site-footer ${revealClass}`}>
        <div className="footer-card">
          {/* Top Row: Brand Logo, Newsletter Form & Social Media Bar */}
          <div className="footer-top-bar">
            <BrandLogo isFooter />

            {/* Luxury Newsletter Subscription Center */}
            <div className="footer-newsletter">
              <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
                <div className="newsletter-input-box">
                  <Mail size={16} className="newsletter-mail-icon" />
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Restez informé de nos chantiers..."
                    required
                    disabled={isSubscribed}
                    className="newsletter-input"
                    aria-label="Votre adresse e-mail pour la newsletter"
                  />
                </div>

                <button
                  type="submit"
                  className={`newsletter-btn ${isSubscribed ? "is-success" : ""}`}
                  disabled={isSubscribed}
                  aria-label="S'inscrire à la newsletter"
                >
                  {isSubscribed ? (
                    <>
                      <Check size={14} className="success-icon" />
                      <span>Inscrit</span>
                    </>
                  ) : (
                    <>
                      <span>S'abonner</span>
                      <ArrowRight size={14} className="arrow-icon" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Social Media Bar */}
            <div className="footer-social-bar">
              <span className="social-label">Réseaux Sociaux</span>
              <div className="social-pill-group">
                <a href="#" className="social-icon-btn" aria-label="Facebook">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a href="#" className="social-icon-btn" aria-label="TikTok">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V5.8a6.34 6.34 0 0 0-1-.08A6.34 6.34 0 1 0 15.7 12V8.34a8.27 8.27 0 0 0 4.84 1.55V6.69z" />
                  </svg>
                </a>

                <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-divider" />

          {/* Main Footer Navigation & Contact Columns */}
          <div className="footer-grid">
            <div className="footer-brand-col">
              <p className="footer-tagline">
                Entreprise Sénégalaise de Référence en Bâtiment, Génie Civil & Transport de Matériel.
              </p>
              <div className="reach-out-card">
                <div className="reach-out-icon">
                  <ArrowUpRight size={20} />
                </div>
                <div className="reach-out-info">
                  <strong>Bureau d&apos;Études & Direction</strong>
                  <span>Liaison continue 7j/7 Dakar & Régions</span>
                </div>
              </div>
            </div>

            <div className="footer-nav-groups">
              <div className="footer-nav-col">
                <span className="footer-col-header">Navigation</span>
                <ul>
                  <li><Link href="/">Accueil</Link></li>
                  <li><Link href="/#about">À propos</Link></li>
                  <li><Link href="/#services">Services & Pôles</Link></li>
                  <li><Link href="/#projects">Réalisations</Link></li>
                </ul>
              </div>

              <div className="footer-nav-col">
                <span className="footer-col-header">Expertises</span>
                <ul>
                  <li><Link href="/#services">Bâtiment Gros Œuvre</Link></li>
                  <li><Link href="/#services">Génie Civil & Infrastructures</Link></li>
                  <li><Link href="/#services">Infrastructures Sportives</Link></li>
                  <li><Link href="/#services">Transport & Matériels BTP</Link></li>
                </ul>
              </div>

              <div className="footer-nav-col">
                <span className="footer-col-header">Aide & Contact</span>
                <ul>
                  <li><Link href="/contact">Formulaire projet</Link></li>
                  <li><a href="mailto:Fidele@fidele.sn">Fidele@fidele.sn</a></li>
                  <li><a href="tel:+221338214974">+221 33 821 49 74</a></li>
                  <li><Link href="/contact">Dakar, Sénégal (Voir Carte)</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Huge Watermark Typography Background */}
          <div className="footer-watermark" aria-hidden="true">
            FIDELE SARL
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <span className="copyright">
              © {currentYear} FIDELE SARL BTP & Ingénierie. Tous droits réservés.
            </span>

            <div className="legal-links">
              <button
                type="button"
                className="legal-link-btn"
                onClick={() => setLegalModalTab("cgu")}
              >
                Conditions d'utilisation
              </button>
              <span className="dot">•</span>
              <button
                type="button"
                className="legal-link-btn"
                onClick={() => setLegalModalTab("confidentialite")}
              >
                Politique de confidentialité
              </button>
              <span className="dot">•</span>
              <button
                type="button"
                className="legal-link-btn"
                onClick={() => setLegalModalTab("mentions")}
              >
                Mentions légales
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Information Interactive Modal */}
      <LegalModal
        isOpen={!!legalModalTab}
        initialTab={legalModalTab || "mentions"}
        onClose={() => setLegalModalTab(null)}
      />
    </>
  );
};
