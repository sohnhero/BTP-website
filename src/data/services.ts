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
  imageSrc: string;
  tags: string[];
  features: string[];
  detailedText: string;
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
    imageSrc: "/images/service_construction.jpg",
    tags: ["Gros œuvre", "Bâtiments tertiaires", "Résidentiel", "Génie civil"],
    features: [
      "Études structurelles béton armé & calculs de charge",
      "Échafaudages certifiés et grues de manutention lourde",
      "Supervision rigoureuse par des ingénieurs BTP diplômés",
      "Respect strict des normes environnementales et de sécurité",
    ],
    detailedText:
      "FIDÈLE SARL mobilise ses équipes d'ingénieurs et techniciens pour concrétiser vos projets de construction de toutes dimensions. De la fondation aux superstructures, nous appliquons un contrôle qualité rigoureux et utilisons des matériaux certifiés pour garantir la pérennité de chaque ouvrage.",
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
    imageSrc: "/images/service_terrassement.jpg",
    tags: ["Terrassement de masse", "Nivellement", "Déblais / Remblais", "Plateformes"],
    features: [
      "Flotte complète d'engins : pelles hydrauliques, chargeuses, dumpers",
      "Nivellement au laser et guidage topographique de précision",
      "Essais de portance et contrôle de compactage géotechnique",
      "Gestion optimisée des mouvements de terres et déblais",
    ],
    detailedText:
      "Une infrastructure solide commence par un sol parfaitement préparé. Nous réalisons des opérations de terrassement de masse et d'aménagement de plateformes industrielles, commerciales ou résidentielles sur l'ensemble du territoire sénégalais.",
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
    imageSrc: "/images/service_pavage.jpg",
    tags: ["Pavés autobloquants", "Trottoirs", "Allées carrossables", "Bordures"],
    features: [
      "Pavés autobloquants vibro-pressés haute densité",
      "Fondations drainantes et couches d'assise stabilisées",
      "Pose de bordures préfabriquées et caniveaux d'évacuation",
      "Finitions esthétiques et résistantes au trafic lourd",
    ],
    detailedText:
      "Spécialiste reconnu auprès des municipalités et promoteurs, FIDÈLE SARL conçoit et pose des revêtements en pavés autobloquants conçus pour durer face aux charges répétées et aux aléas climatiques.",
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
    imageSrc: "/images/service_finition.jpg",
    tags: ["Second œuvre", "Carrelage & Sols", "Étanchéité", "Peinture & Déco"],
    features: [
      "Peintures techniques anti-humidité et revêtements muraux décoratifs",
      "Carrelages grands formats et parquets résistants",
      "Systèmes d'étanchéité multicouches certifiés pour toitures-terrasses",
      "Menuiseries bois, aluminium et finitions intérieures soignées",
    ],
    detailedText:
      "Le second œuvre donne vie et valeur à votre bâtiment. Nos équipes de plâtriers, carreleurs, peintres et menuisiers apportent un niveau de finition digne des plus hauts standards architecturaux.",
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
    imageSrc: "/images/service_pistes.jpg",
    tags: ["Pistes rurales", "Reprofilage", "Voies d'accès", "Désenclavement"],
    features: [
      "Nivellement et compactage à la chaux ou latérite naturelle",
      "Création de fossés longitudinaux et ouvrages d'assainissement",
      "Traitement des points critiques et franchissements de radiers",
      "Désenclavement rapide pour collectivités et sites industriels",
    ],
    detailedText:
      "Acteur engagé du développement territorial, FIDÈLE SARL intervient pour ouvrir et réhabiliter les axes d'accès essentiels, facilitant les échanges économiques et l'accès aux services fondamentaux pour les populations.",
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
    imageSrc: "/images/service_amenagement.jpg",
    tags: ["Espaces publics", "Aménagement communal", "Paysagisme", "Mobilier urbain"],
    features: [
      "Création d'esplanades publiques et places de convivialité",
      "Plantation paysagère adaptée au climat local et systèmes d'arrosage",
      "Installation de mobilier urbain robuste et éclairage solaire autonome",
      "Conformité avec les plans d'urbanisme et d'accessibilité PMR",
    ],
    detailedText:
      "Partenaire de confiance des mairies (Rufisque, Yoff, Saint-Louis, Ngaparou...), nous transformons les espaces urbains en lieux de vie agréables, fonctionnels et durables au bénéfice des citoyens.",
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
    imageSrc: "/images/service_adduction.jpg",
    tags: ["Réseaux AEP", "Canalisations", "Châteaux d'eau", "Hydraulique"],
    features: [
      "Pose de canalisations en PEHD et fonte ductile certifiées",
      "Châteaux d'eau en béton armé et réservoirs de stockage",
      "Raccordement et robinetterie industrielle sous contrôle de pression",
      "Solutions d'alimentation par pompage solaire pour zones isolées",
    ],
    detailedText:
      "L'accès à l'eau potable est une priorité vitale. FIDÈLE SARL déploie des infrastructures hydrauliques complètes, garantissant un approvisionnement fiable et sécurisé pour les communes et complexes industriels.",
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
    imageSrc: "/images/service_hydrocarbures.jpg",
    tags: ["Camions-citernes", "Produits pétroliers", "Normes de sécurité", "Logistique dédiée"],
    features: [
      "Flotte moderne de camions-citernes compartimentés aux normes ADR",
      "Chauffeurs formés au transport de matières dangereuses (TMD)",
      "Traçabilité GPS en temps réel et systèmes de coupure d'urgence",
      "Protocoles stricts de sécurité incendie et anti-déversement",
    ],
    detailedText:
      "Avec une rigueur sans faille, notre pôle logistique assure le transport et la livraison d'hydrocarbures sur l'ensemble du réseau national, garantissant sécurité, ponctualité et respect total des réglementations environnementales.",
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
    imageSrc: "/images/service_fournitures.jpg",
    tags: ["Matériaux de construction", "Outillage technique", "Équipements BTP", "Négoce"],
    features: [
      "Ciment certifié, fers à béton FeE500 et agrégats criblés",
      "Parc d'équipements : bétonnières, compresseurs, groupes électrogènes",
      "Disponibilité immédiate en stock et capacité de livraison sur site",
      "Conseil technique personnalisé selon les exigences du cahier des charges",
    ],
    detailedText:
      "FIDÈLE SARL approvisionne les chantiers en matériaux de premier choix et matériels professionnels pour garantir un déroulement fluide et sans rupture de stock pour tous vos projets de construction.",
  },
];
