export const siteConfig = {
  name: "Djondzo Escolar",
  shortName: "Djondzo",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://djondzo.co.mz",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://app.djondzo.co.mz",
  description:
    "Sistema de gestão escolar para organizar alunos, professores, turmas, notas, assiduidade, mensalidades, mediateca e gestão administrativa.",
  locale: "pt_MZ",
  language: "pt-MZ",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "comercial@djondzo.co.mz",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
  pricePerStudent: 15,
  currency: "MZN",
  location: "Moçambique",
};

export const mainNavigation = [
  { href: "/funcionalidades", label: "Funcionalidades" },
  { href: "/para-escolas", label: "Para escolas" },
  { href: "/precos", label: "Preços" },
  { href: "/blog", label: "Recursos" },
];
