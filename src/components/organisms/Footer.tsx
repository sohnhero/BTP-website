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
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="Facebook FIDELE SARL"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="TikTok FIDELE SARL"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525 0h3.88c.07 1.54.64 3.09 1.77 4.18 1.13 1.1 2.69 1.6 4.23 1.76v3.98c-1.42-.02-2.82-.37-4.07-.99v6.52c0 1.63-.44 3.24-1.34 4.54-1.52 2.22-4.14 3.65-7 3.63-2.31.02-4.54-.88-6.15-2.52-1.63-1.63-2.52-3.87-2.52-6.18 0-2.32.89-4.56 2.52-6.19 1.61-1.64 3.84-2.54 6.15-2.52.43 0 .86.04 1.28.12v4.22a4.42 4.42 0 0 0-1.28-.19c-1.16 0-2.28.46-3.1 1.28a4.39 4.39 0 0 0-1.28 3.1c0 1.16.46 2.28 1.28 3.1.82.82 1.94 1.28 3.1 1.28 1.16 0 2.28-.46 3.1-1.28.82-.82 1.28-1.94 1.28-3.1V0z" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn FIDELE SARL"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
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
              <Link href="/contact" className="reach-out-card">
                <div className="reach-out-icon">
                  <ArrowUpRight size={20} />
                </div>
                <div className="reach-out-info">
                  <strong>Bureau d&apos;Études & Direction</strong>
                  <span>Liaison continue 7j/7 Dakar & Régions</span>
                </div>
              </Link>
            </div>

            <div className="footer-nav-groups">
              <div className="footer-nav-col">
                <span className="footer-col-header">Navigation</span>
                <ul>
                  <li><Link href="/">Accueil</Link></li>
                  <li><Link href="/#about">À propos</Link></li>
                  <li><Link href="/#services">Services & Pôles</Link></li>
                  <li><Link href="/#projects">Réalisations</Link></li>
                  <li><Link href="/faq">Questions (FAQ)</Link></li>
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
                  <li><Link href="/faq">Foire aux questions</Link></li>
                  <li><a href="mailto:Fidele@fidele.sn">Fidele@fidele.sn</a></li>
                  <li><a href="tel:+221338214974">+221 33 821 49 74</a></li>
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
