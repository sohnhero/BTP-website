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
      aria-label="SOHN BUILD - Accueil"
    >
      <span className="brand-mark">S</span>
      <span className="brand-text">
        <strong>SOHN BUILD</strong>
        <small>BTP & Ingénierie</small>
      </span>
    </Link>
  );
};
