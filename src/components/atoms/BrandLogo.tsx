"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BrandLogoProps {
  isFooter?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ isFooter = false }) => {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  return (
    <Link
      className={`brand ${isFooter ? "brand-footer" : ""}`}
      href="/"
      onClick={handleClick}
      aria-label="FIDELE SARL - Accueil"
    >
      <img
        src={isFooter ? "/images/logo_white.png" : "/images/logo.png"}
        alt="FIDELE SARL"
        className="brand-logo-img"
      />
    </Link>
  );
};
