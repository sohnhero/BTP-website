import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/atoms/BackToTop";
import { ScrollProgress } from "@/components/atoms/ScrollProgress";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "FIDÈLE SARL — Construire l’excellence",
  description:
    "FIDÈLE SARL — Construction, rénovation et ingénierie avec une exigence premium. Nous concevons et réalisons des ouvrages durables et performants.",
  keywords: [
    "BTP",
    "Construction",
    "Ingénierie",
    "Rénovation",
    "Dakar",
    "Sénégal",
    "Génie civil",
    "FIDÈLE SARL",
  ],
  authors: [{ name: "FIDÈLE SARL" }],
  openGraph: {
    title: "FIDÈLE SARL — Construire l’excellence",
    description:
      "FIDÈLE SARL — Construction, rénovation et ingénierie avec une exigence premium.",
    url: "https://fidele.sn",
    siteName: "FIDÈLE SARL",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIDÈLE SARL — Construire l’excellence",
    description:
      "FIDÈLE SARL — Construction, rénovation et ingénierie avec une exigence premium.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${dmSans.variable} ${manrope.variable} ${playfairDisplay.variable}`}
    >
      <body>
        <ScrollProgress />
        <div className="page-shell">{children}</div>
        <BackToTop />
      </body>
    </html>
  );
}
