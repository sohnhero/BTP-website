"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  isFooter?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ isFooter = false }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <Link
      className={`brand ${isFooter ? "brand-footer" : ""}`}
      href="#top"
      onClick={handleClick}
      aria-label="FIDELE SARL - Accueil"
    >
      <span className="brand-mark">
        <img
          src="/images/fidele_sarl_logo.png"
          alt="FIDELE SARL Logo"
          className="brand-logo-img"
        />
      </span>
      <span className="brand-text">
        <strong>FIDELE SARL</strong>
        <small>BTP & Ingénierie</small>
      </span>
    </Link>
  );
};
