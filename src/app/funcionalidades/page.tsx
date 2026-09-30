import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CTA } from "@/components/cta";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Funcionalidades",
  description: "Conheça os módulos do Djondzo Escolar para gestão académica, financeira, assiduidade, Mediateca, professores e alunos.",
  alternates: { canonical: "/funcionalidades" },
};

export default function FuncionalidadesPage() {
  return (
    <main id="main-content">
      <section className="section-space bg-white">
        <div className="container-djondzo">
          <SectionHeading
            title="O trabalho da escola dividido por responsabilidade, não por ficheiros."
            description="Conheça as áreas principais do Djondzo e como cada uma se liga às restantes."
          />

          <div className="mt-8 border-t border-[var(--color-border)]">
            {solutions.map(({ slug, eyebrow, description, icon: Icon }) => (
              <Link
                key={slug}
                href={`/${slug}`}
                className="group grid gap-4 border-b border-[var(--color-border)] py-6 transition-colors duration-150 hover:bg-[var(--color-canvas)] md:grid-cols-[36px_220px_1fr_auto] md:items-start md:px-3"
              >
                <Icon size={20} className="mt-1 text-[var(--color-action)]" aria-hidden="true" />
                <h2 className="ui-h3">{eyebrow}</h2>
                <p className="max-w-[62ch] text-base leading-7 text-[var(--color-text-secondary)]">{description}</p>
                <ArrowRight size={17} className="mt-1 text-[var(--color-text-muted)] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[var(--color-action)]" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
