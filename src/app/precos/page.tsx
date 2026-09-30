import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PriceCalculator } from "@/components/price-calculator";
import { FAQ } from "@/components/faq";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Preços",
  description: "Preço do Djondzo Escolar: modelo base por aluno cadastrado por mês.",
  alternates: { canonical: "/precos" },
};

export default function PrecosPage() {
  return (
    <main id="main-content">
      <section className="section-space border-b border-[#DCE3ED] bg-[#F8FAFC]">
        <div className="container-djondzo">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Preço</p>
            <h1 className="ui-h1 mt-4">
              Um preço simples por aluno.
            </h1>
            <p className="ui-body mt-5">
              O modelo base actual é calculado pelo número de alunos cadastrados no sistema.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[32px] bg-[#0F172B] p-7 text-white sm:p-9">
              <div className="absolute right-7 top-7 h-20 w-20 rounded-[24px] border border-[#757DF5]/35" />
              <div className="relative">
                <p className="text-sm font-bold text-[#C7D2FE]">Djondzo Escolar</p>
                <div className="mt-5 flex flex-wrap items-end gap-2">
                  <span className="text-5xl font-bold tracking-[-0.055em]">
                    {siteConfig.pricePerStudent} MT
                  </span>
                  <span className="pb-1 text-sm font-semibold text-white/50">
                    / aluno / mês
                  </span>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    "Gestão académica",
                    "Secretaria e matrículas",
                    "Gestão financeira",
                    "Assiduidade",
                    "Mediateca",
                    "Aplicação móvel do aluno",
                    "Perfis e permissões",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/75">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#155DFC] text-white">
                        <Check size={13} />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contactos"
                  className="mt-9 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[18px] bg-[#155DFC] px-5 text-sm font-bold text-white transition hover:bg-[#0F52E8]"
                >
                  Pedir demonstração
                  <ArrowRight size={16} />
                </Link>
                <p className="mt-4 text-xs leading-5 text-white/45">
                  As condições comerciais finais devem ser confirmadas com a equipa Djondzo.
                </p>
              </div>
            </div>

            <PriceCalculator />
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-djondzo grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="ui-h2 mt-4">
              Dúvidas sobre o modelo.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#52617A]">
              A calculadora serve como estimativa. O valor contratual é confirmado no processo comercial.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
    </main>
  );
}
