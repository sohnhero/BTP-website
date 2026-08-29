export interface ProjectItem {
  id: string;
  category: string;
  categorySlug: "infrastructure" | "renovation" | "sport";
  year: string;
  title: string;
  subtitle: string;
  location: string;
  client: string;
  clientType: string;
  sector: string;
  type: string;
  investment: string;
  contractor: string;
  status: "Chantier en cours d'exécution · 2026" | "Travaux en cours · 2025-2026" | "Réception provisoire · 2026" | "Livré" | "En cours d'exécution";
  surface?: string;
  duration?: string;
  imageUrl: string;
  gallery: string[];
  description: string;
  scope: string[];
  isLarge?: boolean;
}

export const allProjectsData: ProjectItem[] = [
  {
    id: "quai-de-peche-ouakam",
    category: "Infrastructures Portuaires & Économiques",
    categorySlug: "infrastructure",
    year: "2026",
    title: "Quai de pêche de Ouakam",
    subtitle: "Réhabilitation complète & modernisation des plateformes économiques — 435 M FCFA",
    location: "Ouakam · Dakar, Sénégal",
    client: "Ministère des Pêches / État du Sénégal",
    clientType: "Marché Public & Institutionnel",
    sector: "Infrastructure portuaire & halieutique",
    type: "Réhabilitation & Aménagement Quai de Pêche",
    investment: "435 M FCFA",
    contractor: "FIDELE SARL",
    status: "Chantier en cours d'exécution · 2026",
    surface: "Quai de débarquement & marché local",
    duration: "Chantier en cours (2026)",
    imageUrl: "https://res.cloudinary.com/drxouwbms/image/upload/v1787906681/quai-de-peche-ouakam_bpjixr.png",
    gallery: [
      "https://res.cloudinary.com/drxouwbms/image/upload/v1787906681/quai-de-peche-ouakam_bpjixr.png",
    ],
    description:
      "Attribué à FIDELE SARL, ce marché public stratégique d'environ 435 millions FCFA vise la réhabilitation intégrale du quai de pêche de Ouakam. Les travaux en cours comprennent la réalisation de quatre abris de repos (avancement à ~90%), l'aménagement d'une plateforme moderne de débarquement et le décapage du marché local. Le programme intègre également une chambre froide, une fabrique de glace, un système de traitement des eaux, un marché export et des équipements de commercialisation aux normes internationales.",
    scope: [
      "Quatre abris de repos pour pêcheurs (réalisés à 90 %)",
      "Plateforme de débarquement maritime sécurisée",
      "Décapage et restructuration du marché local",
      "Installation d'une chambre froide & fabrique de glace",
      "Système de traitement et assainissement des eaux",
      "Aménagement du marché export & voiries dédiées",
    ],
    isLarge: true,
  },
  {
    id: "rehabilitation-mballing",
    category: "Réhabilitation & Aménagement",
    categorySlug: "renovation",
    year: "2025 - 2026",
    title: "Réhabilitation de Mballing",
    subtitle: "Modernisation d'infrastructures d'utilité publique — 217 M FCFA",
    location: "Mballing · Mbour, Sénégal",
    client: "SEN RM (Société d'Exploitation Nationale des Ressources Maritimes)",
    clientType: "Marché Public Institutionnel",
    sector: "Réhabilitation & Aménagement Public",
    type: "Réhabilitation d'infrastructures",
    investment: "217 M FCFA",
    contractor: "FIDELE SARL",
    status: "Travaux en cours · 2025-2026",
    surface: "Site d'infrastructures et de valorisation",
    duration: "Démarrage : 28 mai 2025",
    imageUrl: "https://res.cloudinary.com/drxouwbms/image/upload/v1787907093/mbaling-projet_cmxa0t.png",
    gallery: [
      "https://res.cloudinary.com/drxouwbms/image/upload/v1787907093/mbaling-projet_cmxa0t.png",
    ],
    description:
      "Projet directement confirmé par le SENRM (Société d'Exploitation Nationale des Ressources Maritimes) et exécuté par FIDELE SARL. L'installation officielle de l'entreprise sur le chantier est intervenue le 28 mai 2025 pour un financement annoncé de 217 millions FCFA. Ce chantier structurel vise la réhabilitation et la modernisation lourde des infrastructures d'utilité publique sur le site de Mballing.",
    scope: [
      "Installation de chantier & logistique de génie civil",
      "Gros œuvre, maçonnerie et réhabilitation structurelle",
      "Aménagement et mise aux normes des espaces techniques",
      "Réseaux d'assainissement et écoulement des eaux",
      "Exécution conforme aux exigences contractuelles du SENRM",
    ],
    isLarge: false,
  },
  {
    id: "terrain-diamalaye-yoff",
    category: "Infrastructures Sportives · Yoff",
    categorySlug: "sport",
    year: "2026",
    title: "Terrain synthétique 7/7 Diamalaye",
    subtitle: "Complexe sportif de proximité à la Cité Poste — 33 M FCFA",
    location: "Diamalaye · Dakar, Sénégal",
    client: "Commune de Yoff",
    clientType: "Collectivité Territoriale",
    sector: "Infrastructure sportive",
    type: "Terrain synthétique 7/7",
    investment: "33 M FCFA",
    contractor: "FIDELE SARL",
    status: "Réception provisoire · 2026",
    surface: "Terrain de football 7 contre 7",
    duration: "Livraison 2026",
    imageUrl: "/images/projects/terrain-sport-rufisque.webp",
    gallery: [
      "/images/projects/terrain-sport-rufisque.webp",
    ],
    description:
      "Réalisation d’une infrastructure sportive de proximité au cœur de la commune de Yoff. FIDELE SARL a assuré l’exécution des travaux du terrain de football synthétique 7/7 de la Cité Poste de Diamalaye, un équipement destiné à offrir aux jeunes et aux habitants un cadre moderne et adapté à la pratique du football. Financé sur fonds propres par la Commune de Yoff pour un investissement annoncé de 33 millions FCFA, le projet s’inscrit dans la politique municipale de développement des infrastructures sportives et d’amélioration du cadre de vie.",
    scope: [
      "Terrassement, nivellement de précision et drainage",
      "Pose de pelouse synthétique dernière génération",
      "Clôture périphérique renforcée et filets pare-ballons",
      "Système d'éclairage projecteurs pour sessions nocturnes",
      "Traçage technique et finitions homologuées",
    ],
    isLarge: false,
  },
];

export const mainProjectsData = allProjectsData;
export const secondaryProjectsData: ProjectItem[] = [];
export const projectsData = allProjectsData;
