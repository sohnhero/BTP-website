export interface ServiceItem {
  id: string;
  number: string;
  category: "btp" | "transport" | "fournitures";
  categoryLabel: string;
  iconName:
    | "building-2"
    | "shovel"
    | "layers"
    | "paint-roller"
    | "route"
    | "trees"
    | "droplets"
    | "fuel"
    | "package";
  title: string;
  tagline: string;
  description: string;
  tags: string[];
}

export const serviceCategories = [
  { id: "all", label: "Tous nos services", count: 9 },
  { id: "btp", label: "BTP & Génie Civil", count: 7 },
  { id: "transport", label: "Transport Hydrocarbures", count: 1 },
  { id: "fournitures", label: "Fournitures & Équipements", count: 1 },
] as const;

export const servicesData: ServiceItem[] = [
  {
    id: "construction",
    number: "01",
    category: "btp",
    categoryLabel: "BTP & Génie Civil",
    iconName: "building-2",
    title: "Construction & Bâtiment",
    tagline: "Gros œuvre & structures durables",
    description:
      "Édification de bâtiments résidentiels, tertiaires, industriels et institutionnels avec un contrôle strict des normes et de la qualité structurelle.",
    tags: ["Gros œuvre", "Bâtiments tertiaires", "Résidentiel", "Génie civil"],
  },
  {
    id: "terrassement",
    number: "02",
    category: "btp",
    categoryLabel: "BTP & Génie Civil",
    iconName: "shovel",
    title: "Terrassement & Nivellement",
    tagline: "Préparation des sols & plateformes",
    description:
      "Terrassement de masse, déblais, remblais, décapage et compactage rigoureux pour garantir des fondations stables sur tous types de terrains.",
    tags: ["Terrassement de masse", "Nivellement", "Déblais / Remblais", "Plateformes"],
  },
  {
    id: "pavage",
    number: "03",
    category: "btp",
    categoryLabel: "BTP & Génie Civil",
    iconName: "layers",
    title: "Pavage & Voiries",
    tagline: "Revêtements et bordures urbaines",
    description:
      "Pose soignée de pavés autobloquants haute résistance, aménagement de trottoirs, allées carrossables, esplanades piétonnes et parkings.",
    tags: ["Pavés autobloquants", "Trottoirs", "Allées carrossables", "Bordures"],
  },
  {
    id: "finition",
    number: "04",
    category: "btp",
    categoryLabel: "BTP & Génie Civil",
    iconName: "paint-roller",
    title: "Travaux de Finition",
    tagline: "Second œuvre & haute exigence",
    description:
      "Plâtrerie, revêtements de sols et murs, étanchéité, peinture technique et menuiserie avec un souci méticuleux du détail et de l'esthétique.",
    tags: ["Second œuvre", "Carrelage & Sols", "Étanchéité", "Peinture & Déco"],
  },
  {
    id: "piste",
    number: "05",
    category: "btp",
    categoryLabel: "BTP & Génie Civil",
    iconName: "route",
    title: "Pistes & Désenclavement",
    tagline: "Voies d'accès & reprofilage",
    description:
      "Ouverture, reprofilage, compactage et réhabilitation de pistes rurales et voies d'accès pour désenclaver les zones communautaires et chantiers.",
    tags: ["Pistes rurales", "Reprofilage", "Voies d'accès", "Désenclavement"],
  },
  {
    id: "amenagement",
    number: "06",
    category: "btp",
    categoryLabel: "BTP & Génie Civil",
    iconName: "trees",
    title: "Aménagement Urbain",
    tagline: "Espaces publics & communaux",
    description:
      "Aménagement de places communales, esplanades, parcs publics et valorisation paysagère au service des municipalités et partenaires institutionnels.",
    tags: ["Espaces publics", "Aménagement communal", "Paysagisme", "Mobilier urbain"],
  },
  {
    id: "adduction-eau",
    number: "07",
    category: "btp",
    categoryLabel: "BTP & Hydraulique",
    iconName: "droplets",
    title: "Adduction d'Eau (AEP)",
    tagline: "Réseaux d'eau potable & hydraulique",
    description:
      "Pose de réseaux de canalisations, raccordements AEP, forages, stations de pompage et châteaux d'eau pour l'accès durable à l'eau potable.",
    tags: ["Réseaux AEP", "Canalisations", "Châteaux d'eau", "Hydraulique"],
  },
  {
    id: "transport-hydrocarbures",
    number: "08",
    category: "transport",
    categoryLabel: "Transport & Énergie",
    iconName: "fuel",
    title: "Transport d'Hydrocarbures",
    tagline: "Logistique sécurisée & certifiée",
    description:
      "Flotte de camions-citernes conformes aux normes de sécurité internationales pour le transport fiable et sécurisé de produits pétroliers et carburants.",
    tags: ["Camions-citernes", "Produits pétroliers", "Normes de sécurité", "Logistique dédiée"],
  },
  {
    id: "fournitures-diverses",
    number: "09",
    category: "fournitures",
    categoryLabel: "Fournitures & Équipements",
    iconName: "package",
    title: "Fournitures Diverses & Équipements",
    tagline: "Matériaux BTP & outillage technique",
    description:
      "Approvisionnement et négoce de matériaux de construction de haute qualité, outillages spécialisés, quincaillerie de chantier et équipements industriels.",
    tags: ["Matériaux de construction", "Outillage technique", "Équipements BTP", "Négoce"],
  },
];
