import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/config/site";

const headingFont = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Djondzo Escolar — Sistema de Gestão Escolar em Moçambique",
    template: "%s | Djondzo Escolar",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Djondzo" }],
  creator: "Djondzo",
  publisher: "Djondzo",
  category: "education",
  keywords: [
    "sistema de gestão escolar",
    "software para escolas",
    "gestão escolar Moçambique",
    "mensalidades escolares",
    "notas escolares",
    "assiduidade escolar",
    "Djondzo Escolar",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Djondzo Escolar — Sistema de Gestão Escolar",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Djondzo Escolar — Sistema de Gestão Escolar",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#155DFC",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.language} className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Saltar para o conteúdo
        </a>
        <JsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
