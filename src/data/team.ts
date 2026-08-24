export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "direction" | "ingenierie" | "architecture" | "travaux";
  tagline: string;
  bio: string;
  imageSrc: string;
  yearsOfExp: number;
  specialties: string[];
  keyProjects: string[];
  email: string;
  phone: string;
  quote?: string;
  isFeatured?: boolean;
}

export const teamCategories = [
  { id: "all", label: "Toute l'équipe" },
  { id: "direction", label: "Direction" },
  { id: "architecture", label: "Architecture & Design" },
  { id: "ingenierie", label: "Ingénierie & Travaux" },
];

export const teamMembers: TeamMember[] = [
  {
    id: "moussa-sow",
    name: "Moussa Sow",
    role: "Directeur Général",
    category: "direction",
    tagline: "Vision stratégique & suivi des grands ouvrages complexes.",
    bio: "Ingénieur civil de formation formé à l'ESTP, Moussa pilote la stratégie globale de SOHN BUILD avec plus de 18 ans d'expérience dans la conduite de chantiers majeurs et d'infrastructures tertiaires d'envergure au Sénégal et en Afrique de l'Ouest.",
    imageSrc: "/team-director.png",
    yearsOfExp: 18,
    specialties: ["Management Stratégique", "Grands Ouvrages", "Financement BTP"],
    keyProjects: ["Villa Horizon (620 m²)", "Axis Offices (Dakar)", "Complexe Résidentiel Alma"],
    email: "m.sow@sohnbuild.sn",
    phone: "+221 77 100 20 30",
    quote: "L'ingénierie moderne exige l'alliance parfaite entre rigueur technique et élégance architecturale.",
    isFeatured: true,
  },
  {
    id: "fatou-diallo",
    name: "Fatou Diallo",
    role: "Directrice des Opérations & Projets",
    category: "travaux",
    tagline: "Coordination opérationnelle & maîtrise parfaite de l'exécution.",
    bio: "Spécialiste du pilotage de chantier et de la gestion des délais, Fatou orchestre les équipes d'exécution et les sous-traitants avec une exigence zéro défaut. Elle garantit le respect rigoureux des coûts et du planning.",
    imageSrc: "/team-manager.png",
    yearsOfExp: 12,
    specialties: ["Pilotage de Chantier", "Gestion des Délais", "Assurance Qualité"],
    keyProjects: ["Siège Tertiaire Axis", "Tour Résidentielle Plateau"],
    email: "f.diallo@sohnbuild.sn",
    phone: "+221 77 200 40 50",
  },
  {
    id: "aminata-ba",
    name: "Aminata Bâ",
    role: "Architecte Senior & Lead Design",
    category: "architecture",
    tagline: "Conception contemporaine & valorisation bioclimatique.",
    bio: "Diplômée avec félicitations de l’École Nationale d’Architecture, Aminata insuffle une identité visuelle épurée et durable à chacun de nos projets, conciliant esthétique moderne et adaptation au climat sahélien.",
    imageSrc: "/team-architect.png",
    yearsOfExp: 10,
    specialties: ["Design BIM / Revit", "Architecture Bioclimatique", "Design d'Intérieur"],
    keyProjects: ["Villa Horizon", "Rénovation Résidence Alma"],
    email: "a.ba@sohnbuild.sn",
    phone: "+221 77 300 50 60",
  },
  {
    id: "ibrahima-ndiaye",
    name: "Ibrahima Ndiaye",
    role: "Ingénieur Civil & Calcul de Structure",
    category: "ingenierie",
    tagline: "Dimensionnement des structures & sécurité parvis.",
    bio: "Expert en modélisation de structures complexes béton armé et charpente métallique. Ibrahima veille à la conformité technique aux normes Eurocodes et à l’optimisation des matériaux pour une durabilité maximale.",
    imageSrc: "/team-engineer.png",
    yearsOfExp: 8,
    specialties: ["Calculs Eurocodes", "Béton Armé & Métal", "Audit de Structure"],
    keyProjects: ["Fondations Spéciales Axis", "Rénovation Alma"],
    email: "i.ndiaye@sohnbuild.sn",
    phone: "+221 77 400 60 70",
  },
];
