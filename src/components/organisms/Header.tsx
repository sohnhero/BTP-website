"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { Button } from "@/components/atoms/Button";
import { navItems } from "@/data/navigation";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled && !menuOpen ? "header--bubble" : ""}`} id="top">
        <BrandLogo />

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Button variant="dark" href="#contact" className="desktop-cta">
          Démarrer un projet
          <ArrowUpRight size={16} />
        </Button>

        <button
          className={`menu-toggle ${menuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Minimalist Light Mode Fullscreen Mobile Navigation */}
      <div
        className={`minimal-mobile-overlay ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="minimal-mobile-container">
          {/* Top Bar */}
          <div className="minimal-mobile-header">
            <BrandLogo />
            <button
              className="minimal-close-btn"
              onClick={closeMenu}
              aria-label="Fermer le menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Clean Airy Nav Links */}
          <nav className="minimal-mobile-nav" aria-label="Navigation mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="minimal-nav-item"
                onClick={closeMenu}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Minimalist Bottom CTA */}
          <div className="minimal-mobile-footer">
            <Link
              href="#contact"
              className="minimal-drawer-btn"
              onClick={closeMenu}
            >
              <span>Démarrer un projet</span>
              <ArrowUpRight size={16} />
            </Link>
            <span className="minimal-drawer-brand">FIDÈLE SARL • BTP & Ingénierie</span>
          </div>
        </div>
      </div>
    </>
  );
};
