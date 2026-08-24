export interface StatItem {
  id: string;
  target: number;
  suffix: string;
  description: string;
  isAccent?: boolean;
  actionText?: string;
  actionHref?: string;
}

export const statsData: StatItem[] = [
  {
    id: "expertise",
    target: 12,
    suffix: "+",
    description: "Années d’expertise cumulée",
  },
  {
    id: "projects",
    target: 180,
    suffix: "+",
    description: "Projets livrés & accompagnés",
  },
  {
    id: "satisfaction",
    target: 96,
    suffix: "%",
    description: "Clients satisfaits",
  },
  {
    id: "support",
    target: 24,
    suffix: "/7",
    description: "Suivi opérationnel des chantiers",
    isAccent: true,
    actionText: "Nous contacter",
    actionHref: "#contact",
  },
];
