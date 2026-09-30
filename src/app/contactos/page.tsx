import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
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
    <main id="main-content" className="section-space bg-white">
      <div className="container-djondzo grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h1 className="ui-h1 max-w-[18ch]">Mostre-nos como a sua escola trabalha.</h1>
          <p className="ui-body mt-5">
            Podemos usar a demonstração para percorrer os módulos relevantes e discutir o fluxo actual da instituição.
          </p>

          <dl className="mt-8 border-y border-[var(--color-border)]">
            <div className="grid grid-cols-[28px_1fr] gap-3 py-4">
              <Mail size={18} className="mt-1 text-[var(--color-action)]" aria-hidden="true" />
              <div>
                <dt className="text-base font-medium text-[var(--color-text)]">E-mail</dt>
                <dd className="mt-1 text-base text-[var(--color-text-secondary)]"><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></dd>
              </div>
            </div>
            <div className="grid grid-cols-[28px_1fr] gap-3 border-t border-[var(--color-border)] py-4">
              <MessageCircle size={18} className="mt-1 text-[var(--color-action)]" aria-hidden="true" />
              <div>
                <dt className="text-base font-medium text-[var(--color-text)]">WhatsApp</dt>
                <dd className="mt-1 text-base text-[var(--color-text-secondary)]">
                  {whatsappLink ? <a href={whatsappLink}>Falar com a equipa Djondzo</a> : "Contacto a configurar"}
                </dd>
              </div>
            </div>
            <div className="grid grid-cols-[28px_1fr] gap-3 border-t border-[var(--color-border)] py-4">
              <MapPin size={18} className="mt-1 text-[var(--color-action)]" aria-hidden="true" />
              <div>
                <dt className="text-base font-medium text-[var(--color-text)]">Mercado principal</dt>
                <dd className="mt-1 text-base text-[var(--color-text-secondary)]">{siteConfig.location}</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7"><ContactForm /></div>
      </div>
    </main>
  );
}
