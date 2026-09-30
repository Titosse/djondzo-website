import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CTA } from "@/components/cta";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = {
  title: "Funcionalidades",
  description:
    "Conheça os módulos do Djondzo Escolar para gestão académica, financeira, assiduidade, Mediateca, professores e alunos.",
  alternates: { canonical: "/funcionalidades" },
};

export default function FuncionalidadesPage() {
  return (
    <main id="main-content">
      <section className="section-space border-b border-[#DCE3ED] bg-[#F8FAFC]">
        <div className="container-djondzo">
          <div className="grid grid-cols-4 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-end">
            <div className="col-span-4 lg:col-span-5">
              <SectionHeading
              eyebrow="Funcionalidades"
              title="O trabalho da escola dividido por responsabilidade, não por ficheiros."
              description="Conheça as áreas principais do Djondzo e como cada uma se liga às restantes."
              />
            </div>
            <div className="col-span-4 rounded-[20px] lg:col-span-7 border border-[#C7D2FE] bg-[#EEF3FF] p-5 text-base leading-7 text-[#52617A]">
              <strong className="text-[#0F172B]">Uma base comum:</strong> alunos,
              turmas, utilizadores e operações permanecem relacionados mesmo quando
              cada perfil trabalha num módulo diferente.
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map(({ slug, eyebrow, description, icon: Icon }, index) => (
              <Link
                key={slug}
                href={`/${slug}`}
                className="group rounded-[28px] border border-[#DCE3ED] bg-white p-7 shadow-[0_8px_24px_rgba(15,23,43,0.035)] transition hover:-translate-y-1 hover:border-[#C7D2FE] hover:shadow-[0_18px_48px_rgba(15,23,43,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#155DFC] transition group-hover:bg-[#155DFC] group-hover:text-white">
                    <Icon size={21} />
                  </div>
                  <span className="text-xs font-bold text-[#8DA0BB]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-7 text-xl font-bold tracking-[-0.035em] text-[#0F172B]">
                  {eyebrow}
                </h2>
                <p className="mt-3 text-base leading-7 text-[#52617A]">{description}</p>
                <span className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-xl text-xs font-bold text-[#155DFC]">
                  Ver detalhes
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
