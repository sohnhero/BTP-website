export interface FaqItem {
  id: string;
  category: "devis" | "construction" | "delais" | "materiaux" | "securite";
  question: string;
  answer: string;
  popular?: boolean;
}

export interface FaqCategory {
  id: string;
  label: string;
}

export const faqCategories: FaqCategory[] = [
  { id: "all", label: "Toutes les questions" },
  { id: "devis", label: "Études & Devis" },
  { id: "construction", label: "Gros Œuvre & Génie Civil" },
  { id: "delais", label: "Délais & Garanties" },
  { id: "materiaux", label: "Matériaux & Flotte" },
  { id: "securite", label: "Normes & Sécurité (HSE)" },
];

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    category: "construction",
    question: "Quels types d'ouvrages et chantiers prenez-vous en charge au Sénégal ?",
    answer:
      "FIDELE SARL intervient sur l'ensemble de la chaîne de valeur du BTP : bâtiments résidentiels de standing, immeubles de bureaux et commerciaux (R+5 et plus), complexes industriels, plateformes logistiques, terrassements grande masse, voiries et réseaux divers (VRD), ainsi que la réalisation d'infrastructures sportives spécialisées (terrains en gazon synthétique aux normes internationales).",
    popular: true,
  },
  {
    id: "faq-2",
    category: "devis",
    question: "Comment se déroule l'établissement d'une estimation ou d'un devis technique ?",
    answer:
      "Dès réception de votre cahier des charges ou de vos plans architecturaux, nos ingénieurs du bureau d'études procèdent à une analyse rigoureuse des métrés et de la faisabilité géotechnique. Nous effectuons une visite technique de site si nécessaire, puis vous transmettons une offre détaillée et transparente (Bordereau des Prix Unitaires, planning prévisionnel) sous 24 à 48h ouvrées.",
    popular: true,
  },
  {
    id: "faq-3",
    category: "delais",
    question: "Quelles sont les garanties contractuelles et assurances appliquées à vos ouvrages ?",
    answer:
      "Tous les projets réalisés par FIDELE SARL bénéficient des garanties légales du droit de la construction au Sénégal : garantie de parfait achèvement (1 an), garantie biennale de bon fonctionnement des équipements, et assurance responsabilité civile décennale couvrant la solidité du gros œuvre et des structures porteuses pendant 10 ans.",
    popular: true,
  },
  {
    id: "faq-4",
    category: "construction",
    question: "Intervenez-vous uniquement à Dakar ou également dans les régions ?",
    answer:
      "Notre siège et nos ateliers sont basés à Dakar (Ouest Foire), mais nos équipes et engins sont déployés sur l'ensemble des 14 régions du Sénégal (Thiès, Mbour, Saint-Louis, Kaolack, Ziguinchor, Tambacounda) ainsi que dans la sous-région pour des projets d'infrastructures structurants.",
  },
  {
    id: "faq-5",
    category: "delais",
    question: "Comment garantissez-vous le respect strict des délais de livraison ?",
    answer:
      "Chaque chantier est piloté par un conducteur de travaux dédié avec un planning au chemin critique (méthode Gantt/CPM). Nous sécurisons l'approvisionnement des matériaux stratégiques (ciment, fer à béton, granulats) en amont et réalisons des réunions de chantier hebdomadaires avec rapports d'avancement pour assurer une livraison ponctuelle.",
  },
  {
    id: "faq-6",
    category: "materiaux",
    question: "Proposez-vous la fourniture de matériaux et la location d'engins BTP ?",
    answer:
      "Oui, notre pôle Logistique & Matériels dispose d'un parc moderne de camions bennes (6x4, 8x4), pelles hydrauliques, chargeuses et niveleuses. Nous assurons la fourniture et le transport sécurisé de tout-venant, sable de dune, gravier basaltique, ciment et remblais de carrière vers vos sites d'intervention.",
  },
  {
    id: "faq-7",
    category: "construction",
    question: "Réalisez-vous des projets 'Clé en main' (Tous Corps d'État - TCE) ?",
    answer:
      "Absolument. Nous assurons la prise en charge complète de vos opérations : terrassement, fondations profondes ou superficielles, structure béton armé, second œuvre technique (plomberie, électricité, climatisation), menuiseries et finitions architecturales haut de gamme avec un interlocuteur unique et responsable.",
    popular: true,
  },
  {
    id: "faq-8",
    category: "securite",
    question: "Quelle est votre politique en matière de sécurité (HSE) et d'environnement ?",
    answer:
      "La sécurité de nos ouvriers et le respect des normes environnementales sont non négociables. Un Plan Particulier de Sécurité et de Protection de la Santé (PPSPS) est établi pour chaque site. Le port des EPI est obligatoire, nos opérateurs sont certifiés, et les déblais de chantier sont évacués vers des centres de traitement agréés.",
  },
  {
    id: "faq-9",
    category: "devis",
    question: "Puis-je modifier mon cahier des charges en cours de chantier ?",
    answer:
      "Oui, toute modification fait l'objet d'un avenant technique et financier validé conjointement avec le maître d'ouvrage avant exécution. Notre bureau d'études recalcule les impacts sur la structure et le calendrier pour vous apporter un conseil éclairé sans mauvaise surprise.",
  },
  {
    id: "faq-10",
    category: "materiaux",
    question: "Quelles normes de qualité appliquez-vous pour le béton et le ferraillage ?",
    answer:
      "Nous travaillons exclusivement avec des centrales à béton certifiées et des aciers haute adhérence (FeE500) conformes aux Eurocodes et normes BAEL. Des essais d'écrasement à 7 et 28 jours sont réalisés par des laboratoires géotechniques indépendants agréés au Sénégal (ex: CEREEQ, LBTP).",
  },
];
