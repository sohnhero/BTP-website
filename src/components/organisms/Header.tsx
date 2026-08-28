"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { Button } from "@/components/atoms/Button";
import { navItems } from "@/data/navigation";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Handle cross-page anchor scrolling on mount (e.g., coming from /contact to /#partenaires)
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash && hash !== "#top" && hash !== "#hero") {
        const targetId = hash.replace("#", "");
        const timer = setTimeout(() => {
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            const offset = 80;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 120);
        return () => clearTimeout(timer);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }
  }, [pathname]);

  // ScrollSpy & Sticky Bubble Header across all pages
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(pathname);
    }

    const handleScroll = () => {
      const y = window.scrollY;

      // Hysteresis threshold: triggers bubble at >32px, reverts at <10px
      setScrolled((prev) => {
        if (!prev && y > 32) return true;
        if (prev && y < 10) return false;
        return prev;
      });

      // Clear hash when scrolled all the way back to the top
      if (y < 60 && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }

      // Track active section on homepage
      if (pathname === "/") {
        const scrollPosition = window.scrollY + 180;
        const sectionIds = ["about", "services", "team", "projects", "partenaires"];

        let current = "";
        for (let i = 0; i < sectionIds.length; i++) {
          const id = sectionIds[i];
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              current = `/#${id}`;
              break;
            } else if (scrollPosition >= top) {
              current = `/#${id}`;
            }
          }
        }

        if (window.scrollY < 180) {
          current = "";
        }

        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

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
    closeMenu();

    // 1. If clicking /contact
    if (href === "/contact") {
      if (pathname === "/contact") {
        e.preventDefault();
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      return; // Let Next.js navigate to /contact if on /
    }

    // 2. If clicking top anchor or home
    if (href === "#top" || href === "/#top" || href === "/" || href === "#hero" || href === "/#hero") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 350);
      }
      return;
    }

    // 3. If clicking a section anchor while on homepage
    if (pathname === "/") {
      const targetId = href.replace("/#", "").replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        const offset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", `/#${targetId}`);
        setActiveSection(href);
      }
    }
    // If on /contact and clicking /#partenaires, Next.js Link navigates to /#partenaires and our useEffect scrolls to it!
  };

  return (
    <>
      <header className={`site-header ${scrolled && !menuOpen ? "header--bubble" : ""}`} id="top">
        <BrandLogo />

        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map((item) => {
            const isActive =
              pathname === "/contact"
                ? item.href === "/contact"
                : activeSection === item.href ||
                  activeSection === item.href.replace("/", "") ||
                  activeSection === `/${item.href}`;

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

        <Button
          variant="dark"
          href="/contact"
          className="desktop-cta"
          onClick={(e) => handleNavClick(e, "/contact")}
        >
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
              const isActive =
                pathname === "/contact"
                  ? item.href === "/contact"
                  : activeSection === item.href ||
                    activeSection === item.href.replace("/", "");

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
              href="/contact"
              className="minimal-drawer-btn"
              onClick={(e) => handleNavClick(e, "/contact")}
            >
              <span>Démarrer un projet</span>
              <ArrowUpRight size={16} />
            </Link>
            <span className="minimal-drawer-brand">FIDELE SARL • BTP & Ingénierie</span>
          </div>
        </div>
      </div>
    </>
  );
};
