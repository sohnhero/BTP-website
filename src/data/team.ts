export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  category: "direction" | "btp" | "transport";
  tagline: string;
  bio: string;
  initials: string;
  imageSrc?: string;
  specialties: string[];
  keyProjects: string[];
  email: string;
  phone?: string;
  isFeatured?: boolean;
  quote?: string;
  yearsOfExp?: number;
}

export const teamCategories = [
  { id: "all", label: "Toute l'équipe" },
  { id: "direction", label: "Direction & Finance" },
  { id: "btp", label: "Direction BTP" },
  { id: "transport", label: "Direction Transport" },
];

export const teamMembers: TeamMember[] = [
  {
    id: "mr-pouye",
    name: "Mr Pouye",
    role: "Directeur Général (DG)",
    department: "Direction Générale",
    category: "direction",
    initials: "MP",
    tagline: "Gouvernance stratégique, développement institutionnel & pilotage des grands marchés.",
    bio: "À la tête de FIDELE SARL, Mr Pouye impulse la vision stratégique et la culture d'excellence technique de l'entreprise. Il assure la direction générale, le dialogue avec les institutions publiques et la supervision globale des investissements majeurs.",
    specialties: ["Direction Stratégique", "Marchés Publics & Institutionnels", "Gouvernance & Développement"],
    keyProjects: ["Quai de pêche de Ouakam (435 M FCFA)", "Réhabilitation Mballing (217 M FCFA)", "Expansion Territoriale"],
    email: "direction@fidele.sn",
    phone: "+221 33 821 49 74",
  },
  {
    id: "mme-dia",
    name: "Mme Dia",
    role: "Adjointe au Directeur Général",
    department: "Direction Générale",
    category: "direction",
    initials: "MD",
    tagline: "Coordination institutionnelle, administration générale & suivi des engagements.",
    bio: "Bras droit de la direction générale, Mme Dia coordonne l'administration, les relations contractuelles avec les partenaires et la bonne exécution des orientations stratégiques de l'entreprise.",
    specialties: ["Coordination Générale", "Suivi Contractuel & Administratif", "Relations Partenaires"],
    keyProjects: ["Supervision Administrative", "Partenariats Stratégiques", "Gestion Opérationnelle"],
    email: "adjointe.direction@fidele.sn",
    phone: "+221 33 821 49 74",
  },
  {
    id: "mr-dicag",
    name: "Mr Dicag",
    role: "Responsable Comptable & Financier",
    department: "Administration & Finance",
    category: "direction",
    initials: "MD",
    tagline: "Rigueur comptable, pilotage budgétaire des chantiers & conformité financière.",
    bio: "Garant de la santé financière et de la conformité comptable de FIDELE SARL, Mr Dicag supervise la gestion budgétaire des marchés, la comptabilité générale et la trésorerie.",
    specialties: ["Comptabilité BTP", "Contrôle Budgétaire de Chantier", "Gestion Financière & Fiscale"],
    keyProjects: ["Gestion Budgétaire Quai Ouakam", "Contrôle Financier Projets", "Audit & Clôtures"],
    email: "comptabilite@fidele.sn",
    phone: "+221 33 821 49 74",
  },
  {
    id: "mr-diop",
    name: "Mr Diop",
    role: "Conducteur de Travaux",
    department: "Direction BTP",
    category: "btp",
    initials: "MD",
    tagline: "Pilotage opérationnel de terrain, coordination des corps d'état & sécurité HSE.",
    bio: "Responsable du déploiement opérationnel sur le terrain, Mr Diop assure la gestion quotidienne des chantiers, l'encadrement des équipes techniques, le respect des plannings et l'application stricte des normes de sécurité.",
    specialties: ["Conduite de Travaux", "Coordination des Équipes", "Sécurité Chantier & Normes HSE"],
    keyProjects: ["Quai de pêche de Ouakam", "Terrain synthétique Diamalaye (Yoff)", "Chantiers de Génie Civil"],
    email: "travaux@fidele.sn",
    phone: "+221 33 821 49 74",
  },
  {
    id: "mr-gueye",
    name: "Mr Gueye",
    role: "Ingénieur Génie Civil",
    department: "Direction BTP",
    category: "btp",
    initials: "MG",
    tagline: "Calculs de structures, dimensionnement d'ouvrages & conformité technique.",
    bio: "Expert en dimensionnement et conception technique des ouvrages, Mr Gueye élabore les plans d'exécution, réalise les notes de calcul et garantit la solidité structurelle et la conformité aux normes d'ingénierie.",
    specialties: ["Génie Civil & Béton Armé", "Calculs Structurels & Métrés", "Contrôle Qualité Matériaux"],
    keyProjects: ["Structures Quai de Ouakam", "Infrastructures Mballing", "Études Techniques BTP"],
    email: "ingenierie@fidele.sn",
    phone: "+221 33 821 49 74",
  },
  {
    id: "mme-name",
    name: "Mme Name",
    role: "Responsable Logistique",
    department: "Direction Transport",
    category: "transport",
    initials: "MN",
    tagline: "Gestion de la flotte d'engins, logistique d'approvisionnement & transport de matériel.",
    bio: "À la tête de la Direction Transport et Logistique, Mme Name pilote le parc d'engins lourds et de véhicules de transport, orchestrant l'acheminement sécurisé des matériaux et du matériel de génie civil sur l'ensemble des chantiers.",
    specialties: ["Logistique Flotte & Engins", "Transport Matériel Génie Civil", "Planification des Approvisionnements"],
    keyProjects: ["Logistique Grands Chantiers", "Acheminement Matériaux Lourds", "Gestion Flotte Hydrocarbures"],
    email: "logistique@fidele.sn",
    phone: "+221 33 821 49 74",
  },
  {
    id: "mme-drame",
    name: "Mme Dramé",
    role: "Assistante Responsable Logistique",
    department: "Direction Transport",
    category: "transport",
    initials: "MD",
    tagline: "Suivi des rotations véhicules, traçabilité des flux & assistance opérationnelle.",
    bio: "En appui direct à la responsable logistique, Mme Dramé assure le suivi administratif du parc matériel, la traçabilité des rotations de transport et la coordination des livraisons de matériaux sur sites.",
    specialties: ["Gestion Administrative Parc", "Suivi des Rotations & Traçabilité", "Coordination des Livraisons"],
    keyProjects: ["Suivi Quotidien des Livraisons", "Planning Matériel", "Traçabilité des Flux de Transport"],
    email: "transport@fidele.sn",
    phone: "+221 33 821 49 74",
  },
];
