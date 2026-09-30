import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Preços",
  description: "Conheça o modelo de preço do Djondzo Escolar.",
  alternates: { canonical: "/precos" },
};

export default function PrecosPage() {
  return (
    <main className="section-space">
      <div className="container-djondzo">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b6722]">Preços</p>
          <h1 className="mt-4 text-4xl font-bold tracking-[-0.045em] sm:text-6xl">
            Preço simples, calculado por aluno.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#667085]">
            O valor base atual do Djondzo é calculado de acordo com o número de alunos cadastrados.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-[32px] border border-black/8 bg-white p-8 shadow-[0_24px_70px_rgba(17,24,39,0.07)] sm:p-10">
          <p className="text-sm font-semibold text-[#667085]">Djondzo Escolar</p>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-5xl font-bold tracking-[-0.05em]">{siteConfig.pricePerStudent}</span>
            <span className="pb-1 text-sm text-[#667085]">/ aluno / mês</span>
          </div>

          <div className="mt-8 space-y-4">
            {[
              "Gestão académica",
              "Gestão financeira",
              "Assiduidade",
              "Perfis e permissões",
              "Mediateca",
              "Aplicação móvel",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f1f3f6]">
                  <Check size={14} />
                </span>
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/contactos"
            className="mt-9 flex items-center justify-center rounded-[18px] bg-[#171c2b] px-6 py-4 text-sm font-semibold text-white"
          >
            Solicitar demonstração
          </Link>

          <p className="mt-5 text-xs leading-5 text-[#667085]">
            Condições comerciais finais podem ser confirmadas durante a demonstração.
          </p>
        </div>
      </div>
    </main>
  );
}
