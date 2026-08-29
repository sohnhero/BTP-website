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
  title: "FIDELE SARL — Construire l’excellence",
  description:
    "FIDELE SARL — Construction, rénovation et ingénierie avec une exigence premium. Nous concevons et réalisons des ouvrages durables et performants.",
  keywords: [
    "BTP",
    "Construction",
    "Ingénierie",
    "Rénovation",
    "Dakar",
    "Sénégal",
    "Génie civil",
    "FIDELE SARL",
  ],
  authors: [{ name: "FIDELE SARL" }],
  openGraph: {
    title: "FIDELE SARL — Construire l’excellence",
    description:
      "FIDELE SARL — Construction, rénovation et ingénierie avec une exigence premium.",
    url: "https://fidele.sn",
    siteName: "FIDELE SARL",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FIDELE SARL — Construire l’excellence",
    description:
      "FIDELE SARL — Construction, rénovation et ingénierie avec une exigence premium.",
  },
  icons: {
    icon: [
      { url: "/images/branding/favicon-fidele-sarl.png", sizes: "any" },
      { url: "/images/branding/favicon-fidele-sarl.png", type: "image/png" },
    ],
    shortcut: "/images/branding/favicon-fidele-sarl.png",
    apple: "/images/branding/favicon-fidele-sarl.png",
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
