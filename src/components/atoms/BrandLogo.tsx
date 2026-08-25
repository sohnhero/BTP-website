import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  isFooter?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ isFooter = false }) => {
  return (
    <Link
      className={`brand ${isFooter ? "brand-footer" : ""}`}
      href="#top"
      aria-label="FIDÈLE SARL - Accueil"
    >
      <span className="brand-mark">F</span>
      <span className="brand-text">
        <strong>FIDÈLE SARL</strong>
        <small>BTP & Ingénierie</small>
      </span>
    </Link>
  );
};
