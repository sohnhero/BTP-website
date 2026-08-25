export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Équipe", href: "#team" },
  { label: "Réalisations", href: "#projects" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Contact", href: "#contact" },
];
