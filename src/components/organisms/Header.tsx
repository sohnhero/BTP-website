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
    // Force page reload to start at top so full header is always shown on refresh
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

  const toggleMenu = () => {
    const nextState = !menuOpen;
    setMenuOpen(nextState);
    if (nextState) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  return (
    <header className={`site-header ${scrolled ? "header--bubble" : ""}`} id="top">
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
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <Button variant="dark" href="#contact" onClick={closeMenu}>
          Démarrer un projet
        </Button>
      </div>
    </header>
  );
};
