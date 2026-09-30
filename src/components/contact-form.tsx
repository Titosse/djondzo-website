"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const fieldClass = "form-control";

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
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-[#DCE3ED] bg-white p-6 shadow-[0_18px_48px_rgba(15,23,43,0.08)] sm:p-8"
    >
      <div className="mb-7">
        <p className="ui-h2">
          Pedir demonstração
        </p>
        <p className="ui-body mt-2">
          Preencha os dados essenciais. O pedido será preparado no seu programa de e-mail.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-[0.8125rem] font-semibold text-[#52617A]">
          Nome
          <input
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="O seu nome"
          />
        </label>
        <label className="grid gap-2 text-[0.8125rem] font-semibold text-[#52617A]">
          Escola
          <input
            name="school"
            required
            autoComplete="organization"
            className={fieldClass}
            placeholder="Nome da escola"
          />
        </label>
        <label className="grid gap-2 text-[0.8125rem] font-semibold text-[#52617A] sm:col-span-2">
          Telefone / WhatsApp
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="+258 84 000 0000"
          />
        </label>
        <label className="grid gap-2 text-[0.8125rem] font-semibold text-[#52617A] sm:col-span-2">
          O que gostaria de organizar?
          <textarea
            name="message"
            rows={5}
            className="form-control min-h-[128px] py-3"
            placeholder="Conte-nos brevemente como a sua escola trabalha hoje."
          />
        </label>
      </div>

      <button
        type="submit"
        className="btn-primary mt-6 w-full"
      >
        Preparar pedido por e-mail
        <ArrowRight size={16} />
      </button>

      <div aria-live="polite">
        {sent && (
          <p className="mt-4 flex items-start gap-2 text-[0.8125rem] leading-5 text-[#71809A]">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#155DFC]" />
            O seu programa de e-mail será aberto com os dados preenchidos.
          </p>
        )}
      </div>
    </form>
  );
}
