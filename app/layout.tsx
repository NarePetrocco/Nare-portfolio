import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";


// Cargamos la fuente
const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

// Metadata para SEO y redes
export const metadata: Metadata = {
  title: "Narella Petrocco — Junior Sofware Developer",
  description:
    "Desarrolladora Frontend especializada en React, Next.js y TypeScript. Creo experiencias web modernas, accesibles y centradas en el usuario.",
  keywords: [
    "frontend",
    "react",
    "desarrolladora web",
    "TypeScript",
    "Next.js",
    "portafolio",
    "desarrollo web",
    "UI",
    "experiencia de usuario",
    "software",
  ],
  openGraph: {
    title: "Narella Petrocco — Junior Sofware Developer",
    description:
      "Desarrolladora Frontend con experiencia en Vensys y colaboración en Metasuma. Me apasiona crear soluciones digitales modernas que combinan diseño y funcionalidad.",
    url: "https://nare-portfolio.vercel.app", 
    siteName: "Narella Petrocco Portfolio",
    images: [
      {
        url: "https://nare-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Narella Petrocco — Desarrolladora Frontend",
      },
      {
        url: "https://nare-portfolio.vercel.app/og-image.png",
        width: 800,
        height: 800,
        alt: "Narella Petrocco — Desarrolladora Frontend",
      },
    ],
    locale: "es-ES",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

// Componente de layout principal
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <ViewProvider>
          <Header />
          {children}
        </ViewProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
