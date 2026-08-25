import React from "react";

export interface Partner {
  id: string;
  name: string;
  domain: string;
  logoType: string;
  iconType: "shield" | "building" | "cube" | "triangle" | "compass" | "zap" | "layers" | "badge" | "award" | "box";
  colorAccent?: string;
  description: string;
  yearsSince: number;
  projectCount: number;
}

export const partnersData: Partner[] = [
  {
    id: "socotec",
    name: "SOCOTEC",
    domain: "Contrôle Technique & Qualité",
    logoType: "SOCOTEC",
    iconType: "compass",
    description: "Contrôle technique, inspection et certification pour la conformité de nos ouvrages aux normes en vigueur.",
    yearsSince: 12,
    projectCount: 34,
  },
  {
    id: "lafarge-holcim",
    name: "LafargeHolcim",
    domain: "Ciment & Béton Haute Performance",
    logoType: "HOLCIM",
    iconType: "cube",
    description: "Fourniture de béton haute performance et solutions cimentaires pour nos projets structurels les plus exigeants.",
    yearsSince: 15,
    projectCount: 48,
  },
  {
    id: "eiffage",
    name: "Eiffage Sénégal",
    domain: "Génie Civil & Infrastructures",
    logoType: "EIFFAGE",
    iconType: "building",
    description: "Partenariat stratégique en co-traitance sur les marchés d'infrastructures et de génie civil d'envergure.",
    yearsSince: 8,
    projectCount: 12,
  },
  {
    id: "bureau-veritas",
    name: "Bureau Veritas",
    domain: "Certification & Audit ISO",
    logoType: "BUREAU VERITAS",
    iconType: "shield",
    description: "Certification qualité ISO et audits de conformité structurelle pour garantir l'excellence de nos livrables.",
    yearsSince: 10,
    projectCount: 26,
  },
  {
    id: "saint-gobain",
    name: "Saint-Gobain",
    domain: "Matériaux & Solutions Façades",
    logoType: "SAINT-GOBAIN",
    iconType: "layers",
    description: "Approvisionnement en matériaux de construction premium : isolation, façades, et solutions intérieures haut de gamme.",
    yearsSince: 11,
    projectCount: 38,
  },
  {
    id: "schneider",
    name: "Schneider Electric",
    domain: "Énergie & Domotique Bâtiment",
    logoType: "SCHNEIDER",
    iconType: "zap",
    description: "Intégration de solutions électriques, domotique et gestion intelligente de l'énergie sur nos ouvrages tertiaires.",
    yearsSince: 9,
    projectCount: 22,
  },
  {
    id: "vinci",
    name: "Vinci Construction",
    domain: "Bâtiment & Grands Travaux",
    logoType: "VINCI",
    iconType: "box",
    description: "Alliance sur les projets de grande envergure nécessitant une co-maîtrise d'œuvre et des moyens techniques exceptionnels.",
    yearsSince: 6,
    projectCount: 8,
  },
  {
    id: "apave",
    name: "APAVE",
    domain: "Inspection Sécurité & HSE",
    logoType: "APAVE",
    iconType: "badge",
    description: "Vérifications techniques réglementaires, contrôles HSE et audits de sécurité sur l'ensemble de nos chantiers.",
    yearsSince: 14,
    projectCount: 42,
  },
  {
    id: "sika",
    name: "Sika",
    domain: "Étanchéité & Adjuvants Béton",
    logoType: "SIKA",
    iconType: "triangle",
    description: "Solutions d'étanchéité, d'adjuvants béton et de collage structural pour les finitions et la durabilité des ouvrages.",
    yearsSince: 7,
    projectCount: 19,
  },
  {
    id: "cse",
    name: "CSE Ingénierie",
    domain: "Bureau d'Études Structures & Fluides",
    logoType: "CSE ING",
    iconType: "award",
    description: "Études techniques CVC, fluides et électricité pour la conception de bâtiments intelligents et performants.",
    yearsSince: 5,
    projectCount: 14,
  },
];

export const partnerTrustMetrics = {
  totalPartners: 10,
  totalProjectsTogether: 263,
  avgPartnershipYears: 10,
  certifications: 18,
};
