export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStepItem[] = [
  {
    number: "01",
    title: "Cadrage",
    description: "Objectifs, budget, contraintes et planning.",
  },
  {
    number: "02",
    title: "Conception",
    description: "Études, plans, choix techniques et matériaux.",
  },
  {
    number: "03",
    title: "Exécution",
    description: "Coordination chantier et contrôle qualité.",
  },
  {
    number: "04",
    title: "Livraison",
    description: "Réception, finitions et accompagnement.",
  },
];
