"use client";

import React from "react";
import { AlertTriangle, HardHat, Ruler, ShieldCheck, Hammer, Activity } from "lucide-react";

export const ConstructionRibbon: React.FC = () => {
  const tapeItems1 = [
    { icon: AlertTriangle, text: "ZONE DE CHANTIER ACTIVE" },
    { icon: HardHat, text: "PORT DU CASQUE OBLIGATOIRE" },
    { icon: ShieldCheck, text: "SÉCURITÉ & HAUTE EXIGENCE" },
    { icon: Ruler, text: "INGÉNIERIE & MAÎTRISE D'OUVRAGE" },
    { icon: Hammer, text: "FIDÈLE SARL • BTP PREMIUM" },
    { icon: Activity, text: "TRAVAUX EN COURS D'EXÉCUTION" },
  ];

  const tapeItems2 = [
    { text: "01 • ÉTUDES TECHNIQUES AVANCÉES" },
    { text: "02 • GROS ŒUVRE & STRUCTURES DURABLES" },
    { text: "03 • FINITIONS LUXE & LIVRAISON CLÉ EN MAIN" },
    { text: "04 • RESPECT STRICT DES DÉLAIS & NORMES ISO" },
    { text: "FIDÈLE SARL • BTP & INGÉNIERIE" },
  ];

  // 6x repetition ensures 100% full-width coverage across all monitor sizes
  const fullRow1 = [...tapeItems1, ...tapeItems1, ...tapeItems1, ...tapeItems1, ...tapeItems1, ...tapeItems1];
  const fullRow2 = [...tapeItems2, ...tapeItems2, ...tapeItems2, ...tapeItems2, ...tapeItems2, ...tapeItems2];

  return (
    <div className="construction-ribbon-wrapper" aria-hidden="true">
      {/* ── Ribbon 1: Amber Gold Construction Caution Tape (Scrolling Left) ── */}
      <div className="ribbon-strip ribbon-strip--gold">
        <div className="ribbon-track ribbon-track--ltr">
          <div className="ribbon-inner">
            {fullRow1.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={`tape1-${index}`} className="ribbon-node ribbon-node--gold">
                  <span className="ribbon-hazard-block" />
                  <Icon size={15} className="ribbon-icon" />
                  <span className="ribbon-text">{item.text}</span>
                  <span className="ribbon-hazard-block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Ribbon 2: Dark Architectural Blueprint Tape (Scrolling Right) ── */}
      <div className="ribbon-strip ribbon-strip--dark">
        <div className="ribbon-track ribbon-track--rtl">
          <div className="ribbon-inner">
            {fullRow2.map((item, index) => (
              <div key={`tape2-${index}`} className="ribbon-node ribbon-node--dark">
                <span className="ribbon-cross-marker">✕</span>
                <span className="ribbon-text ribbon-text--mono">{item.text}</span>
                <span className="ribbon-ruler-ticks" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
