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
  const inclusions = [
    "Gestão académica",
    "Secretaria e matrículas",
    "Gestão financeira",
    "Assiduidade",
    "Mediateca",
    "Aplicação móvel do aluno",
    "Perfis e permissões",
  ];

  return (
    <main id="main-content">
      <section className="section-space bg-white">
        <div className="container-djondzo">
          <div className="pricing-page-intro">
            <p className="context-label">Preço Djondzo</p>
            <h1 className="ui-h1 mt-3">Um preço simples por aluno.</h1>
            <p className="ui-body">
              O valor mensal é calculado pelo número de alunos cadastrados no sistema.
              Teste abaixo quantos alunos tem a sua escola.
            </p>
          </div>

          <div className="pricing-page-grid">
            <section className="pricing-plan-primary" aria-labelledby="price-plan-title">
              <p className="pricing-kicker">Djondzo Escolar</p>
              <h2 id="price-plan-title" className="pricing-main-value">
                {siteConfig.pricePerStudent} MT
              </h2>
              <p className="pricing-unit">por aluno cadastrado / mês</p>

              <ul className="pricing-plan-list">
                {inclusions.map((item) => (
                  <li key={item}>
                    <Check size={17} className="shrink-0 text-[#C7D2FE]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contactos" className="btn-primary mt-7 w-full sm:w-auto">
                Pedir demonstração
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <p className="pricing-plan-note">
                As condições comerciais finais são confirmadas com a equipa Djondzo.
              </p>
            </section>

            <div className="pricing-calculator-pane">
              <PriceCalculator />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-t border-[var(--color-border)] bg-[var(--color-canvas)]">
        <div className="container-djondzo grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="context-label">Perguntas frequentes</p>
            <h2 className="ui-h2 mt-2">Dúvidas sobre o modelo.</h2>
          </div>
          <div className="lg:col-span-7">
            <FAQ />
          </div>
        </div>
      </section>
    </main>
  );
}
