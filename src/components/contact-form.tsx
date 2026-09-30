"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const fieldClass =
  "h-13 rounded-2xl border border-[#DCE3ED] bg-[#F8FAFC] px-4 text-sm font-semibold text-[#0F172B] outline-none transition placeholder:text-[#94A3B8] focus:border-[#155DFC] focus:bg-white";

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
        <p className="text-lg font-extrabold tracking-[-0.025em] text-[#0F172B]">
          Pedir demonstração
        </p>
        <p className="mt-2 text-sm leading-6 text-[#64748B]">
          Preencha os dados essenciais. O pedido será preparado no seu programa de e-mail.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-bold text-[#475569]">
          Nome
          <input
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="O seu nome"
          />
        </label>
        <label className="grid gap-2 text-xs font-bold text-[#475569]">
          Escola
          <input
            name="school"
            required
            autoComplete="organization"
            className={fieldClass}
            placeholder="Nome da escola"
          />
        </label>
        <label className="grid gap-2 text-xs font-bold text-[#475569] sm:col-span-2">
          Telefone / WhatsApp
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="+258 84 000 0000"
          />
        </label>
        <label className="grid gap-2 text-xs font-bold text-[#475569] sm:col-span-2">
          O que gostaria de organizar?
          <textarea
            name="message"
            rows={5}
            className="rounded-2xl border border-[#DCE3ED] bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-[#0F172B] outline-none transition placeholder:text-[#94A3B8] focus:border-[#155DFC] focus:bg-white"
            placeholder="Conte-nos brevemente como a sua escola trabalha hoje."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-[18px] bg-[#155DFC] px-5 text-sm font-bold text-white shadow-[0_14px_34px_rgba(21,93,252,0.22)] transition hover:bg-[#0F52E8]"
      >
        Preparar pedido por e-mail
        <ArrowRight size={16} />
      </button>

      <div aria-live="polite">
        {sent && (
          <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-[#64748B]">
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#155DFC]" />
            O seu programa de e-mail será aberto com os dados preenchidos.
          </p>
        )}
      </div>
    </form>
  );
}
