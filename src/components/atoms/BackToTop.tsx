"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isOnFooter, setIsOnFooter] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 650);

      // Detect overlap ONLY with the black footer section (.site-footer)
      const buttonEl = buttonRef.current;
      if (!buttonEl) return;

      const buttonRect = buttonEl.getBoundingClientRect();
      const footerSection = document.querySelector(".site-footer");

      let overFooter = false;
      if (footerSection) {
        const footerRect = footerSection.getBoundingClientRect();
        // Check if button intersects the footer div vertically
        if (
          buttonRect.bottom >= footerRect.top &&
          buttonRect.top <= footerRect.bottom
        ) {
          overFooter = true;
        }
      }

      setIsOnFooter(overFooter);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={buttonRef}
      className={`back-to-top ${visible ? "show" : ""} ${isOnFooter ? "is-on-dark" : ""}`}
      onClick={scrollToTop}
      aria-label="Retour en haut"
    >
      <ArrowUp size={18} />
    </button>
  );
};
