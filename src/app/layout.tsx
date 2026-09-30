import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Djondzo Escolar — Sistema de Gestão Escolar",
    template: "%s | Djondzo Escolar",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "Djondzo" }],
  creator: "Djondzo",
  publisher: "Djondzo",
  category: "education",
  alternates: {
    canonical: "/",
  },
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
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language}>
      <body>
        <JsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
