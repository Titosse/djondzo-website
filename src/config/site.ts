export const siteConfig = {
  name: "Djondzo Escolar",
  shortName: "Djondzo",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://djondzo.com",
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "https://djondzo.com",
  description:
    "Sistema de gestão escolar para organizar alunos, professores, turmas, notas, assiduidade, mensalidades, mediateca e gestão administrativa.",
  locale: "pt_MZ",
  language: "pt-MZ",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "comercial@djondzo.co.mz",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",
  pricePerStudent: "15 MT",
};
