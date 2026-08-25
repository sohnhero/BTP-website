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
    bio: "Ingénieur civil de formation formé à l'ESTP, Moussa pilote la stratégie globale de FIDÈLE SARL avec plus de 18 ans d'expérience dans la conduite de chantiers majeurs et d'infrastructures tertiaires d'envergure au Sénégal et en Afrique de l'Ouest.",
    imageSrc: "/team-director.png",
    yearsOfExp: 18,
    specialties: ["Management Stratégique", "Grands Ouvrages", "Financement BTP"],
    keyProjects: ["Villa Horizon (620 m²)", "Axis Offices (Dakar)", "Complexe Résidentiel Alma"],
    email: "m.sow@fidele.sn",
    phone: "+221 77 100 20 30",
    quote: "L'ingénierie moderne exige l'alliance parfaite entre rigueur technique et élégance architecturale.",
    isFeatured: true,
  },
  {
    id: "fatou-diallo",
    name: "Fatou Diallo",
    role: "Directrice des Opérations",
    category: "travaux",
    tagline: "Coordination opérationnelle & maîtrise parfaite de l'exécution.",
    bio: "Spécialiste du pilotage de chantier et de la gestion des délais, Fatou orchestre les équipes d'exécution et les sous-traitants avec une exigence zéro défaut.",
    imageSrc: "/team-manager.png",
    yearsOfExp: 12,
    specialties: ["Pilotage de Chantier", "Gestion des Délais", "Assurance Qualité"],
    keyProjects: ["Siège Tertiaire Axis", "Tour Résidentielle Plateau"],
    email: "f.diallo@fidele.sn",
    phone: "+221 77 200 40 50",
  },
  {
    id: "aminata-ba",
    name: "Aminata Bâ",
    role: "Architecte Senior & Lead",
    category: "architecture",
    tagline: "Conception contemporaine & valorisation bioclimatique.",
    bio: "Diplômée avec félicitations de l’École Nationale d’Architecture, Aminata insuffle une identité visuelle épurée et durable à chacun de nos projets.",
    imageSrc: "/team-architect.png",
    yearsOfExp: 10,
    specialties: ["Design BIM / Revit", "Architecture Bioclimatique", "Design d'Intérieur"],
    keyProjects: ["Villa Horizon", "Rénovation Résidence Alma"],
    email: "a.ba@fidele.sn",
    phone: "+221 77 300 50 60",
  },
  {
    id: "ibrahima-ndiaye",
    name: "Ibrahima Ndiaye",
    role: "Ingénieur Civil & Structure",
    category: "ingenierie",
    tagline: "Dimensionnement des structures & sécurité parvis.",
    bio: "Expert en modélisation de structures complexes béton armé et charpente métallique. Ibrahima veille à la conformité technique aux normes Eurocodes.",
    imageSrc: "/team-engineer.png",
    yearsOfExp: 8,
    specialties: ["Calculs Eurocodes", "Béton Armé & Métal", "Audit de Structure"],
    keyProjects: ["Fondations Spéciales Axis", "Rénovation Alma"],
    email: "i.ndiaye@fidele.sn",
    phone: "+221 77 400 60 70",
  },
  {
    id: "khadija-gassama",
    name: "Khadija Gassama",
    role: "BIM Manager & Lead 3D",
    category: "architecture",
    tagline: "Numérisation 3D & coordination BIM multidisciplinaire.",
    bio: "Spécialiste de la synthèse architecturale et des maquettes numériques 3D, Khadija prévient tout conflit technique en amont des chantiers.",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    yearsOfExp: 9,
    specialties: ["BIM Level 2/3", "Synthèse 3D", "Revit & Navisworks"],
    keyProjects: ["Siège Axis Offices", "Résidence Marina Almadies"],
    email: "k.gassama@fidele.sn",
    phone: "+221 77 500 70 80",
  },
  {
    id: "omar-cisse",
    name: "Omar Cissé",
    role: "Chef de Chantier Senior",
    category: "travaux",
    tagline: "Supervision quotidienne des corps d'état & sécurité.",
    bio: "Homme de terrain pragmatique, Omar supervise le déploiement opérationnel quotidien des équipes de maçonnerie, coffrage et gros œuvre.",
    imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    yearsOfExp: 14,
    specialties: ["Gros Œuvre", "Sécurité HSE", "Logistique Chantier"],
    keyProjects: ["Complexe Immobilier Plateau", "Villa Horizon"],
    email: "o.cisse@fidele.sn",
    phone: "+221 77 600 80 90",
  },
  {
    id: "ndeye-seck",
    name: "Ndeye Sokhna Seck",
    role: "Directrice Qualité & HQE",
    category: "direction",
    tagline: "Normes environnementales HQE & certification zéro défaut.",
    bio: "Ingénieure matériaux et environnement, Ndeye Sokhna garantit la durabilité écologique de nos réalisations et l'obtention des labels environnementaux.",
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    yearsOfExp: 11,
    specialties: ["Certification HQE", "Audits Matériaux", "Normes ISO 14001"],
    keyProjects: ["Projet Éco-Résidence Ngor", "Axis Offices"],
    email: "ns.seck@fidele.sn",
    phone: "+221 77 700 90 00",
  },
  {
    id: "cheikh-sy",
    name: "Cheikh Sy",
    role: "Ingénieur Géotechnique",
    category: "ingenierie",
    tagline: "Analyse des sols & stabilité des fondations profondes.",
    bio: "Spécialiste de la géotechnique côtière et des fondations spéciales sur pieux pour ouvrages de haute technicité en bord de mer et terrains difficiles.",
    imageSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    yearsOfExp: 13,
    specialties: ["Géotechnique", "Pieux & Fondations", "Mécanique des Sols"],
    keyProjects: ["Fondations Marina Almadies", "Corniche Ouest"],
    email: "c.sy@fidele.sn",
    phone: "+221 77 800 10 20",
  },
];
