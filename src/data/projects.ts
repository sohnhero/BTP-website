export interface ProjectItem {
  id: string;
  category: string;
  year: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  isLarge?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "villa-horizon",
    category: "Résidentiel",
    year: "2026",
    title: "Villa Horizon",
    subtitle: "Architecture contemporaine — 620 m²",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
    isLarge: true,
  },
  {
    id: "axis-offices",
    category: "Tertiaire",
    year: "2026",
    title: "Axis Offices",
    subtitle: "Construction & pilotage",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: "residence-alma",
    category: "Rénovation",
    year: "2025",
    title: "Résidence Alma",
    subtitle: "Rénovation complète",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
  },
];
