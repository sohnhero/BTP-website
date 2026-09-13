import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { ArrowLeft, Building2, PhoneCall, FolderGit2, ArrowUpRight, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="notfound-page">
        <section className="notfound-hero">
          <div className="notfound-split-container">
            {/* Left Column: Content & Navigation */}
            <div className="notfound-left">
              <div className="notfound-overline">
                <span className="notfound-code">404</span>
                <span className="notfound-divider">/</span>
                <span className="notfound-label">Page non répertoriée</span>
              </div>

              <h1 className="notfound-heading">
                Cette page ne figure pas <em>sur nos plans.</em>
              </h1>

              <p className="notfound-text">
                L&apos;adresse demandée est introuvable ou a été déplacée. Vous pouvez retourner à l&apos;accueil ou explorer nos pôles d&apos;expertise et réalisations :
              </p>

              {/* Main Action Buttons */}
              <div className="notfound-actions-row">
                <Link href="/" className="notfound-main-btn">
                  <ArrowLeft size={16} />
                  <span>Retourner à l&apos;accueil</span>
                </Link>

                <Link href="/contact" className="notfound-secondary-btn">
                  <span>Demander un devis</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Discreet Quick Links */}
              <div className="notfound-quick-links">
                <Link href="/#services" className="notfound-pill-card">
                  <Building2 size={13} className="notfound-pill-icon" />
                  <span>Nos Services BTP</span>
                  <ArrowUpRight size={12} className="notfound-pill-arrow" />
                </Link>

                <Link href="/#projects" className="notfound-pill-card">
                  <FolderGit2 size={13} className="notfound-pill-icon" />
                  <span>Nos Réalisations</span>
                  <ArrowUpRight size={12} className="notfound-pill-arrow" />
                </Link>

                <Link href="/contact" className="notfound-pill-card">
                  <PhoneCall size={13} className="notfound-pill-icon" />
                  <span>Contact direct</span>
                  <ArrowUpRight size={12} className="notfound-pill-arrow" />
                </Link>
              </div>
            </div>

            {/* Right Column: Large 3D BTP 404 Illustration */}
            <div className="notfound-right">
              <div className="notfound-visual-wrap">
                <Image
                  src="/images/decorations/404-construction.webp"
                  alt="Illustration 3D Page 404 - Chantier BTP FIDELE SARL"
                  width={680}
                  height={680}
                  priority
                  unoptimized
                  className="notfound-3d-img"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
