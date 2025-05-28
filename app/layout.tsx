import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Narella Petrocco — Software Developer",
  description:
    "Frontend Developer specializing in React, Next.js, and TypeScript. Creating modern, responsive web experiences with a focus on performance and accessibility. Let's build something amazing together.",
  keywords: [
    "frontend",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend",
    "developer portfolio",
    "creative development",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: {
    title: "Narella Petrocco — Software Developer",
    description:
    "Desarrolladora Frontend con experiencia en Vensys y colaboración en Metasuma, apasionada por crear software de próxima generación y sitios web creativos. Combino diseño y desarrollo para generar experiencias de usuario que equilibren estética y funcionalidad. Me motiva transformar ideas en soluciones digitales intuitivas y efectivas.",
    url: "",
    siteName: "",
    images: [
      {
        url: "https://i.ibb.co/FKMqc28/adeola-badero.png",
        width: 1200,
        height: 630,
        alt: "Adeola Badero — Frontend Software Engineer",
      },
      {
        url: "https://i.ibb.co/Y8hBTR4/ade-800.png",
        width: 800,
        height: 800,
        alt: "Adeola Badero — Frontend Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeola Badero — Software Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, and TypeScript. Creating modern, responsive web experiences with a focus on performance and accessibility. Let's build something amazing together.",
    creator: "@Ade_the_great",
    images: ["https://i.ibb.co/FKMqc28/adeola-badero.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
