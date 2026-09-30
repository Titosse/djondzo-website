import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contactos",
  description: "Contacte o Djondzo Escolar e solicite uma demonstração.",
  alternates: { canonical: "/contactos" },
};

export default function ContactosPage() {
  const whatsappLink = siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`
    : null;

  return (
    <main id="main-content" className="section-space bg-[#F8FAFC]">
      <div className="container-djondzo grid grid-cols-4 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
        <div className="col-span-4 lg:col-span-5">
          <p className="eyebrow">Contactos</p>
          <h1 className="ui-h1 mt-4 max-w-[16ch]">
            Mostre-nos como a sua escola trabalha.
          </h1>
          <p className="ui-body mt-5 max-w-[70ch]">
            A demonstração é orientada pelos módulos que realmente interessam à instituição.
          </p>

          <div className="mt-9 grid gap-3">
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="group flex min-h-20 items-center gap-4 rounded-[22px] border border-[#DCE3ED] bg-white p-4 transition hover:border-[#C7D2FE]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#155DFC] transition group-hover:bg-[#155DFC] group-hover:text-white">
                <Mail size={19} />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold text-[#0F172B]">E-mail</p>
                <p className="mt-1 break-all text-sm text-[#64748B]">{siteConfig.contactEmail}</p>
              </div>
            </a>

            {whatsappLink ? (
              <a
                href={whatsappLink}
                className="group flex min-h-20 items-center gap-4 rounded-[22px] border border-[#DCE3ED] bg-white p-4 transition hover:border-[#C7D2FE]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#155DFC] transition group-hover:bg-[#155DFC] group-hover:text-white">
                  <MessageCircle size={19} />
                </span>
                <div>
                  <p className="text-xs font-bold text-[#0F172B]">WhatsApp</p>
                  <p className="mt-1 text-sm text-[#64748B]">Falar com a equipa Djondzo</p>
                </div>
              </a>
            ) : (
              <div className="flex min-h-20 items-center gap-4 rounded-[22px] border border-dashed border-[#DCE3ED] bg-white/65 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F4F7FB] text-[#64748B]">
                  <MessageCircle size={19} />
                </span>
                <div>
                  <p className="text-xs font-bold text-[#0F172B]">WhatsApp</p>
                  <p className="mt-1 text-sm text-[#64748B]">
                    Configure NEXT_PUBLIC_WHATSAPP para activar este contacto.
                  </p>
                </div>
              </div>
            )}

            <div className="flex min-h-20 items-center gap-4 rounded-[22px] border border-[#DCE3ED] bg-white p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#155DFC]">
                <MapPin size={19} />
              </span>
              <div>
                <p className="text-xs font-bold text-[#0F172B]">Mercado principal</p>
                <p className="mt-1 text-sm text-[#64748B]">{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
