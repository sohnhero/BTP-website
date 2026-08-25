export interface ProjectItem {
  id: string;
  category: string;
  categorySlug: "residential" | "commercial" | "renovation" | "infrastructure";
  year: string;
  title: string;
  subtitle: string;
  location: string;
  surface: string;
  duration: string;
  clientType: string;
  status: "Livré" | "En cours de finition" | "En cours d'exécution";
  imageUrl: string;
  gallery: string[];
  description: string;
  scope: string[];
  architectQuote?: string;
  isLarge?: boolean;
}

export const allProjectsData: ProjectItem[] = [
  {
    id: "villa-horizon",
    category: "Résidentiel d'Exception",
    categorySlug: "residential",
    year: "2026",
    title: "Villa Horizon",
    subtitle: "Architecture contemporaine & piscine suspendue — 620 m²",
    location: "Dakar — Les Almadies, Sénégal",
    surface: "620 m²",
    duration: "14 mois",
    clientType: "Particulier d'Exception",
    status: "Livré",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=90",
    ],
    description:
      "Conception et réalisation d'une villa ultra-moderne aux Almadies. L'ouvrage intègre des porte-à-faux en béton armé haute performance, d'immenses baies vitrées à rupture de pont thermique et une piscine à débordement en porte-à-faux au premier étage.",
    scope: [
      "Études géotechniques & fondations spéciales",
      "Gros œuvre béton armé avec porte-à-faux de 6m",
      "Menuiserie aluminium haute performance thermique",
      "Domotique KNX & éclairage architectural",
      "Finitions marbre de Carrare & bois exotiques",
    ],
    architectQuote:
      "Un défi d'ingénierie structurelle relevé avec brio : concilier l'extrême légèreté visuelle des lignes avec une résistance sismique et maritime optimale.",
    isLarge: true,
  },
  {
    id: "axis-offices",
    category: "Tertiaire & Siège",
    categorySlug: "commercial",
    year: "2026",
    title: "Axis Corporate Center",
    subtitle: "Immeuble de bureaux R+7 & certification HQE — 2 400 m²",
    location: "Dakar — Plateau des Affaires",
    surface: "2 400 m²",
    duration: "18 mois",
    clientType: "Groupe Financier International",
    status: "Livré",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "Construction complète d'un complexe tertiaire R+7. Le projet se distingue par sa double peau vitrée ventilée assurant une efficacité énergétique record sous climat sahélien, complétée par un système de gestion technique centralisée (GTB).",
    scope: [
      "Infrastructures de fondation sur pieux forés",
      "Façade rideau double vitrage à contrôle solaire",
      "Système CVC à débit de réfrigérant variable (VRV)",
      "Courants faibles, sécurité incendie & contrôle d'accès",
      "Aménagement intérieur des plateaux de travail en open-space modulable",
    ],
    architectQuote:
      "L'alliance de la sobriété énergétique et de la distinction statutaire au cœur du quartier des affaires de Dakar.",
  },
  {
    id: "residence-alma",
    category: "Rénovation & Surélévation",
    categorySlug: "renovation",
    year: "2025",
    title: "Résidence Alma",
    subtitle: "Restructuration lourde & surélévation en structure acier",
    location: "Dakar — Fann Résidence",
    surface: "1 850 m²",
    duration: "11 mois",
    clientType: "Société Civile Immobilière",
    status: "Livré",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "Réhabilitation complète d'un bâtiment résidentiel avec reprise en sous-œuvre et surélévation de deux étages en charpente métallique légère pour préserver les fondations existantes tout en maximisant la vue sur l'océan.",
    scope: [
      "Diagnostic structurel & renforcement carbone des poteaux",
      "Surélévation de 2 niveaux en structure métallique",
      "Ravalement complet avec enduits hydrofuges et persiennes bois",
      "Modernisation totale des réseaux d'eau et d'électricité",
      "Rénovation complète des 6 appartements de grand standing",
    ],
    architectQuote:
      "Donner une seconde vie à un patrimoine immobilier en valorisant son potentiel sans interrompre l'usage du rez-de-chaussée.",
  },
  {
    id: "tour-almadies",
    category: "Tertiaire & Siège",
    categorySlug: "commercial",
    year: "2026",
    title: "Tour Almadies R+8",
    subtitle: "Façade vitrée & génie civil — 4 800 m²",
    location: "Dakar — Route des Almadies",
    surface: "4 800 m²",
    duration: "22 mois",
    clientType: "Investisseurs Institutionnels",
    status: "En cours de finition",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "Immeuble de prestige combinant commerces en rez-de-chaussée, plateaux de bureaux panoramiques et rooftop lounge au 8ème étage avec vue imprenable sur la baie des Almadies.",
    scope: [
      "Excavation en milieu urbain dense avec paroi berlinoise",
      "Structure poteaux-poutres en béton précontraint",
      "Façades isolantes et brise-soleil en aluminium anodisé",
      "Double ascenseur haute vitesse avec récupération d'énergie",
      "Sous-sol parking 2 niveaux avec cuvelage étanche",
    ],
    architectQuote:
      "Une silhouette audacieuse qui redéfinit le skyline de la pointe des Almadies.",
  },
  {
    id: "pavillon-saly",
    category: "Résidentiel d'Exception",
    categorySlug: "residential",
    year: "2025",
    title: "Le Pavillon Saly",
    subtitle: "Villa balnéaire de prestige & lagon privé — 850 m²",
    location: "Saly Portudal — Petite Côte",
    surface: "850 m²",
    duration: "12 mois",
    clientType: "Résidence Privée",
    status: "Livré",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "Propriété d'exception conçue en symbiose avec le paysage côtier. Utilisation de matériaux biosourcés locaux (pierre de Rufisque, bois de teck) et intégration de panneaux photovoltaïques en toiture pour une autonomie énergétique à 75%.",
    scope: [
      "Terrassement et stabilisation de sol sablonneux",
      "Ouvrage maçonné mixte pierre naturelle et béton blanc",
      "Bassin de baignade naturel 18m avec filtration écologique",
      "Pergolas bioclimatiques motorisées",
      "Aménagement paysager avec essences locales peu consommatrices en eau",
    ],
    architectQuote:
      "Le luxe tropical réinventé par une exigence technique sans compromis.",
  },
  {
    id: "campus-diamniadio",
    category: "Infrastructures & Tech",
    categorySlug: "infrastructure",
    year: "2025",
    title: "Pôle R&D Diamniadio",
    subtitle: "Laboratoires de pointe & data center — 3 200 m²",
    location: "Pôle Urbain de Diamniadio",
    surface: "3 200 m²",
    duration: "16 mois",
    clientType: "Consortium Technologique & Éducatif",
    status: "Livré",
    imageUrl: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "Complexe dédié à l'innovation comprenant des salles blanches, un data center sécurisé Tier III et des espaces de co-working connectés. Construction certifiée selon les normes de redondance électrique et thermique les plus strictes.",
    scope: [
      "Radiers généraux renforcés pour charges lourdes",
      "Salles à atmosphère contrôlée (ISO 7) & faux-planchers techniques",
      "Alimentation électrique sécurisée avec double groupe électrogène",
      "Isolation phonique et thermique renforcée",
      "Toiture solaire photovoltaïque 120 kWc",
    ],
    architectQuote:
      "Une infrastructure pensée pour accueillir les technologies de demain avec une résilience absolue.",
  },
  {
    id: "teranga-palace",
    category: "Hôtellerie & Luxe",
    categorySlug: "commercial",
    year: "2026",
    title: "Teranga Luxury Resort",
    subtitle: "Complexe hôtelier 5 étoiles & spa — 7 500 m²",
    location: "Somone — Petite Côte",
    surface: "7 500 m²",
    duration: "24 mois",
    clientType: "Groupe Hôtelier International",
    status: "En cours d'exécution",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "Construction d'un resort hôtelier haut de gamme de 45 suites privatives, 3 piscines lagon, un spa de 800 m² et un restaurant gastronomique sur pilotis face à la lagune.",
    scope: [
      "Fondations spéciales sur micropieux maritimes",
      "Structures bois lamellé-collé et béton bas carbone",
      "Station de traitement et recyclage des eaux usées intégrée",
      "Climatisation géothermique marine",
      "Décoration intérieure et agencement sur mesure en bois noble",
    ],
    architectQuote:
      "Une signature architecturale iconique respectant scrupuleusement l'écosystème de la lagune de la Somone.",
  },
  {
    id: "residence-baobabs",
    category: "Résidentiel d'Exception",
    categorySlug: "residential",
    year: "2025",
    title: "Les Baobabs R+4",
    subtitle: "Résidence de 8 appartements de maître — 1 600 m²",
    location: "Dakar — Point E",
    surface: "1 600 m²",
    duration: "15 mois",
    clientType: "Promotion Immobilière Privée",
    status: "Livré",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90",
    ],
    description:
      "Immeuble d'habitation contemporain au Point E offrant des appartements traversants avec terrasses privatives végétalisées, sous-sol sécurisé et conciergerie.",
    scope: [
      "Structure poteaux poutres avec planchers dalles pleines",
      "Façade à isolation par l'extérieur (ITE)",
      "Ascenseur privatif à clé pour les penthouses",
      "Menuiseries extérieures triple vitrage phonique",
      "Générateur de secours insonorisé et réservoir tampon d'eau potable",
    ],
    architectQuote:
      "L'intimité d'une villa avec le confort et la sécurité d'une résidence urbaine de premier ordre.",
  },
];

export const mainProjectsData = allProjectsData.slice(0, 3);
export const secondaryProjectsData = allProjectsData.slice(3, 6);
export const projectsData = allProjectsData;
