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
      aria-label="FIDÈLE SARL - Accueil"
    >
      <img
        src={isFooter ? "/images/logo_white.png" : "/images/logo.png"}
        alt="FIDÈLE SARL"
        className="brand-logo-img"
      />
    </Link>
  );
};
