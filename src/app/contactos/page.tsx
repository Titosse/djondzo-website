import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contactos",
  description: "Contacte a equipa do Djondzo e solicite uma demonstração do sistema.",
  alternates: { canonical: "/contactos" },
};

export default function ContactosPage() {
  const whatsappLink = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`
    : null;

  return (
    <main className="section-space">
      <div className="container-djondzo grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b6722]">Contactos</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.045em] sm:text-6xl">
            Vamos mostrar como o Djondzo funciona.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#667085]">
            Entre em contacto para solicitar uma demonstração e apresentar as necessidades da sua escola.
          </p>
        </div>

        <div className="grid gap-4">
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="rounded-[28px] border border-black/10 bg-white p-7 transition hover:border-black/15"
          >
            <Mail size={24} />
            <p className="mt-6 text-sm font-semibold">E-mail</p>
            <p className="mt-2 text-sm text-[#667085]">{siteConfig.contactEmail}</p>
          </a>

          {whatsappLink ? (
            <a
              href={whatsappLink}
              className="rounded-[28px] border border-black/10 bg-white p-7 transition hover:border-black/15"
            >
              <MessageCircle size={24} />
              <p className="mt-6 text-sm font-semibold">WhatsApp</p>
              <p className="mt-2 text-sm text-[#667085]">Falar com a equipa do Djondzo</p>
            </a>
          ) : (
            <div className="rounded-[28px] border border-dashed border-black/12 bg-[#f1f3f6] p-7">
              <MessageCircle size={24} />
              <p className="mt-6 text-sm font-semibold">WhatsApp</p>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Configure NEXT_PUBLIC_WHATSAPP para activar este contacto.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
