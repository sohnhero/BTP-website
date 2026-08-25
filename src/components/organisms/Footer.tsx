"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, ArrowRight, Check } from "lucide-react";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { useReveal } from "@/hooks/useReveal";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

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

          <div className="footer-social-bar">
            <span className="social-label">Réseaux Sociaux</span>
            <div className="social-pill-group">
              <a href="#" className="social-icon-btn" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="TikTok">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="X / Twitter">
                <span>𝕏</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Middle Content Grid */}
        <div className="footer-grid">
          {/* Left Reach Out Box */}
          <div className="footer-reach-col">
            <span className="footer-section-title">Nous contacter</span>

            <a href="https://wa.me/221770000000" target="_blank" rel="noopener noreferrer" className="reach-out-card">
              <div className="reach-out-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.101-.2.05-.376-.025-.526-.075-.15-.678-1.636-.929-2.242-.244-.59-.492-.51-.678-.52-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511c0 1.481 1.079 2.91 1.23 3.111.15.2 2.124 3.243 5.145 4.549.719.311 1.281.497 1.719.636.722.23 1.379.197 1.9.12.58-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.076-.126-.277-.201-.578-.352z" />
                  <path d="M12.004 2c-5.518 0-9.996 4.478-9.996 9.996 0 1.763.459 3.487 1.332 5.004L2 22l5.132-1.312c1.472.802 3.136 1.224 4.872 1.224 5.518 0 9.996-4.478 9.996-9.996 0-5.518-4.478-9.996-9.996-9.996zm0 18.28c-1.508 0-2.986-.406-4.276-1.174l-.307-.183-3.176.812.846-3.094-.2-.319c-.846-1.346-1.293-2.91-1.293-4.525 0-4.636 3.771-8.408 8.406-8.408 4.636 0 8.407 3.772 8.407 8.408 0 4.636-3.771 8.408-8.407 8.408z" />
                </svg>
              </div>
              <div className="reach-out-info">
                <strong>Discuter sur WhatsApp</strong>
                <span>Notre équipe vous répond sous 24h</span>
              </div>
              <ArrowUpRight size={16} className="reach-out-arrow" />
            </a>
          </div>

          {/* Right Navigation Columns */}
          <div className="footer-nav-groups">
            <div className="footer-nav-col">
              <span className="footer-col-header">Expertises</span>
              <ul>
                <li><Link href="#services">Construction neuve</Link></li>
                <li><Link href="#services">Rénovation premium</Link></li>
                <li><Link href="#services">Études & Ingénierie</Link></li>
                <li><Link href="#services">Suivi & Pilotage</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-header">Explorer</span>
              <ul>
                <li><Link href="#projects">Projets récents</Link></li>
                <li><Link href="#about">À propos de FIDÈLE</Link></li>
                <li><Link href="#process">Notre méthode</Link></li>
                <li><Link href="#team">Notre équipe</Link></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-header">Aide & Contact</span>
              <ul>
                <li><Link href="#contact">Formulaire projet</Link></li>
                <li><a href="mailto:contact@fidele.sn">contact@fidele.sn</a></li>
                <li><a href="tel:+221338000000">+221 33 800 00 00</a></li>
                <li><span>Dakar, Sénégal</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Huge Watermark Typography Background */}
        <div className="footer-watermark" aria-hidden="true">
          FIDÈLE SARL
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="copyright">
            © {currentYear} FIDÈLE SARL BTP & Ingénierie. Tous droits réservés.
          </span>

          <div className="legal-links">
            <Link href="#">Conditions d'utilisation</Link>
            <span className="dot">•</span>
            <Link href="#">Politique de confidentialité</Link>
            <span className="dot">•</span>
            <Link href="#">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
