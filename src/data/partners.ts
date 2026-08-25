export interface Partner {
  id: string;
  name: string;
  domain: string;
  logoText: string;       // SVG-text abbreviation for the logo
  description: string;
  yearsSince: number;     // Years of partnership
  projectCount: number;
}

export const partnersData: Partner[] = [
  {
    id: "socotec",
    name: "SOCOTEC",
    domain: "Contrôle Technique & Qualité",
    logoText: "SC",
    description: "Contrôle technique, inspection et certification pour la conformité de nos ouvrages aux normes en vigueur.",
    yearsSince: 12,
    projectCount: 34,
  },
  {
    id: "lafarge-holcim",
    name: "LafargeHolcim",
    domain: "Ciment & Béton Prêt à l'Emploi",
    logoText: "LH",
    description: "Fourniture de béton haute performance et solutions cimentaires pour nos projets structurels les plus exigeants.",
    yearsSince: 15,
    projectCount: 48,
  },
  {
    id: "eiffage",
    name: "Eiffage Sénégal",
    domain: "Construction & Infrastructures",
    logoText: "EF",
    description: "Partenariat stratégique en co-traitance sur les marchés d'infrastructures et de génie civil d'envergure.",
    yearsSince: 8,
    projectCount: 12,
  },
  {
    id: "bureau-veritas",
    name: "Bureau Veritas",
    domain: "Certification & Inspection",
    logoText: "BV",
    description: "Certification qualité ISO et audits de conformité structurelle pour garantir l'excellence de nos livrables.",
    yearsSince: 10,
    projectCount: 26,
  },
  {
    id: "saint-gobain",
    name: "Saint-Gobain",
    domain: "Matériaux & Solutions",
    logoText: "SG",
    description: "Approvisionnement en matériaux de construction premium : isolation, façades, et solutions intérieures haut de gamme.",
    yearsSince: 11,
    projectCount: 38,
  },
  {
    id: "schneider",
    name: "Schneider Electric",
    domain: "Systèmes Électriques & Énergie",
    logoText: "SE",
    description: "Intégration de solutions électriques, domotique et gestion intelligente de l'énergie sur nos ouvrages tertiaires.",
    yearsSince: 9,
    projectCount: 22,
  },
  {
    id: "vinci",
    name: "Vinci Construction",
    domain: "Bâtiment & Infrastructure",
    logoText: "VC",
    description: "Alliance sur les projets de grande envergure nécessitant une co-maîtrise d'œuvre et des moyens techniques exceptionnels.",
    yearsSince: 6,
    projectCount: 8,
  },
  {
    id: "apave",
    name: "APAVE",
    domain: "Inspection Technique & Sécurité",
    logoText: "AP",
    description: "Vérifications techniques réglementaires, contrôles HSE et audits de sécurité sur l'ensemble de nos chantiers.",
    yearsSince: 14,
    projectCount: 42,
  },
  {
    id: "sika",
    name: "Sika",
    domain: "Adjuvants & Étanchéité",
    logoText: "SK",
    description: "Solutions d'étanchéité, d'adjuvants béton et de collage structural pour les finitions et la durabilité des ouvrages.",
    yearsSince: 7,
    projectCount: 19,
  },
  {
    id: "cse",
    name: "CSE Ingénierie",
    domain: "Bureau d'Études Techniques",
    logoText: "CS",
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
