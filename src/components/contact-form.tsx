"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const school = String(form.get("school") || "");
    const phone = String(form.get("phone") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`Demonstração Djondzo — ${school || name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEscola: ${school}\nTelefone: ${phone}\n\nMensagem:\n${message}`,
    );

    setSent(true);
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="surface p-6 sm:p-8">
      <div className="mb-6 border-b border-[var(--color-border)] pb-5">
        <h2 className="ui-h2">Pedir demonstração</h2>
        <p className="ui-body mt-2">
          Preencha os dados essenciais. O pedido será preparado no seu programa de e-mail.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-label">
          Nome
          <input
            name="name"
            required
            autoComplete="name"
            className="form-control mt-2"
            placeholder="O seu nome"
          />
        </label>
        <label className="form-label">
          Escola
          <input
            name="school"
            required
            autoComplete="organization"
            className="form-control mt-2"
            placeholder="Nome da escola"
          />
        </label>
        <label className="form-label sm:col-span-2">
          Telefone / WhatsApp
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="form-control mt-2"
            placeholder="+258 84 000 0000"
          />
        </label>
        <label className="form-label sm:col-span-2">
          O que gostaria de organizar?
          <textarea
            name="message"
            rows={5}
            className="form-control mt-2 min-h-[128px] py-3"
            placeholder="Conte-nos brevemente como a sua escola trabalha hoje."
          />
        </label>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Preparar pedido por e-mail
        <ArrowRight size={16} />
      </button>

      <div aria-live="polite">
        {sent && (
          <p className="mt-4 flex items-start gap-2 text-base leading-6 text-[var(--color-text-secondary)]">
            <CheckCircle2 size={16} className="mt-1 shrink-0 text-[var(--color-success)]" />
            O seu programa de e-mail será aberto com os dados preenchidos.
          </p>
        )}
      </div>
    </form>
  );
}
