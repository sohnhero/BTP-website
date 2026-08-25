"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/atoms/BrandLogo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-card">
        {/* Top Row: Brand Logo & Social Media Bar */}
        <div className="footer-top-bar">
          <BrandLogo isFooter />

          <div className="footer-social-bar">
            <span className="social-label">Réseaux Sociaux</span>
            <div className="social-pill-group">
              <a href="#" className="social-icon-btn" aria-label="X / Twitter">
                <span>𝕏</span>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
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
                <MessageCircle size={20} />
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
