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
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const handleScroll = () => {
      // Transition to bubble as soon as user scrolls past 25px
      setScrolled(window.scrollY > 25);

      // Robust ScrollSpy to track active section
      const scrollPosition = window.scrollY + 160;
      const sectionIds = navItems.map((item) => item.href.replace("#", ""));

      let current = "";
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = `#${id}`;
            break;
          } else if (scrollPosition >= top) {
            current = `#${id}`;
          }
        }
      }

      if (window.scrollY < 200) {
        current = "";
      }

      setActiveSection(current);
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

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    closeMenu();

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      return;
    }

    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const offset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      <header className={`site-header ${scrolled && !menuOpen ? "header--bubble" : ""}`} id="top">
        <BrandLogo />

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "is-active" : ""}
                aria-current={isActive ? "page" : undefined}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button variant="dark" href="#contact" className="desktop-cta" onClick={(e) => handleNavClick(e, "#contact")}>
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

          {/* Clean Airy Nav Links with Active State */}
          <nav className="minimal-mobile-nav" aria-label="Navigation mobile">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`minimal-nav-item ${isActive ? "is-active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Minimalist Bottom CTA */}
          <div className="minimal-mobile-footer">
            <Link
              href="#contact"
              className="minimal-drawer-btn"
              onClick={(e) => handleNavClick(e, "#contact")}
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
