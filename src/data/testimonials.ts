export interface TestimonialItem {
  id: string;
  badgeText: string;
  quote: string;
  rating: number;
  authorName: string;
  authorRole: string;
  avatarUrl: string;
  trustTag: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    badgeText: "Avis Maître d'Ouvrage & Partenaires",
    quote: "Une équipe structurée, réactive et extrêmement professionnelle. Le niveau de finition, le contrôle qualité sur chantier et le respect du planning ont dépassé nos exigences.",
    rating: 5,
    authorName: "Direction de Projet Tertiaire",
    authorRole: "Client Résidentiel & Tertiaire Premium — Dakar",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    trustTag: "Livré dans les délais • 0 Réserve",
  },
  {
    id: "2",
    badgeText: "Rénovation & Villa de Maître",
    quote: "La transformation de notre villa a été gérée avec une précision d'orfèvre. Transparence totale sur les coûts, choix de matériaux nobles et zéro réserve à la réception des clés.",
    rating: 5,
    authorName: "Mme & M. Diop",
    authorRole: "Maître d'Ouvrage Résidentiel — Les Almadies",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    trustTag: "Garantie Décennale • Finition Luxe",
  },
  {
    id: "3",
    badgeText: "Ingénierie & Structures Complexes",
    quote: "Collaborer avec FIDÈLE SARL sur des ouvrages complexes est un vrai plaisir d'ingénieur. Rigueur technique exemplaire, conformité Eurocodes et présence réactive sur le terrain.",
    rating: 5,
    authorName: "Cabinet ArchiTech Studio",
    authorRole: "Architectes & Urbanistes — Paris / Dakar",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    trustTag: "Certification Audit • BE Validé",
  },
  {
    id: "4",
    badgeText: "Génie Civil & Infrastructure",
    quote: "Un partenaire BTP de confiance pour nos programmes d'envergure. Leur maîtrise du génie civil et leur rigueur HSE apportent une vraie sérénité à l'ensemble des investisseurs.",
    rating: 5,
    authorName: "Kewaal Investment Group",
    authorRole: "Développeur Immobilier Tertiaire — Dakar Plateau",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    trustTag: "Normes HSE • Contrôle Socotec",
  },
];
