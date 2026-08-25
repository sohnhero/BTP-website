export interface ProjectItem {
  id: string;
  category: string;
  year: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  isLarge?: boolean;
}

export const mainProjectsData: ProjectItem[] = [
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
    subtitle: "Construction & pilotage — 2 400 m²",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=90",
  },
  {
    id: "residence-alma",
    category: "Rénovation",
    year: "2025",
    title: "Résidence Alma",
    subtitle: "Rénovation complète & surélévation",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
  },
];

export const secondaryProjectsData: ProjectItem[] = [
  {
    id: "tour-almadies",
    category: "Tertiaire & Siège",
    year: "2026",
    title: "Tour Almadies R+8",
    subtitle: "Façade vitrée & génie civil — 4 800 m²",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: "pavillon-saly",
    category: "Résidentiel de Luxe",
    year: "2025",
    title: "Le Pavillon Saly",
    subtitle: "Villa de prestige & piscine — 850 m²",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: "campus-diamniadio",
    category: "Infrastructures & Tech",
    year: "2025",
    title: "Campus Diamniadio",
    subtitle: "Pôle d'innovation & laboratoires — 3 200 m²",
    imageUrl: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=90",
  },
];

export const projectsData = [...mainProjectsData, ...secondaryProjectsData];
