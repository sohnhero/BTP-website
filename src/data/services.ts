export interface ServiceItem {
  id: string;
  number: string;
  iconName: "building-2" | "ruler" | "paint-roller" | "clipboard-check";
  title: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "construction",
    number: "01",
    iconName: "building-2",
    title: "Construction",
    description: "Résidentiel, tertiaire et ouvrages professionnels réalisés avec méthode et contrôle qualité.",
  },
  {
    id: "ingenierie",
    number: "02",
    iconName: "ruler",
    title: "Études & ingénierie",
    description: "Études techniques, dimensionnement, planification et optimisation des coûts de réalisation.",
  },
  {
    id: "renovation",
    number: "03",
    iconName: "paint-roller",
    title: "Rénovation premium",
    description: "Transformation de bâtiments et d’intérieurs avec des finitions soignées et contemporaines.",
  },
  {
    id: "pilotage",
    number: "04",
    iconName: "clipboard-check",
    title: "Suivi & pilotage",
    description: "Coordination, reporting, contrôle des délais, budget et qualité jusqu’à la réception finale.",
  },
];
