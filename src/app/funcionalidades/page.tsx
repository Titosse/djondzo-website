import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  CalendarCheck,
  CircleDollarSign,
  ClipboardList,
  Library,
  MessageSquareText,
  School,
  Smartphone,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Funcionalidades",
  description:
    "Conheça as funcionalidades do Djondzo Escolar para gestão académica, financeira, administrativa, assiduidade, mediateca e aplicação móvel.",
  alternates: { canonical: "/funcionalidades" },
};

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Alunos e matrículas",
    description: "Organização de alunos, turmas e informação escolar.",
    icon: Users,
  },
  {
    title: "Gestão académica",
    description: "Disciplinas, notas, pautas, tarefas e conteúdos.",
    icon: School,
  },
  {
    title: "Assiduidade",
    description: "Registo e acompanhamento de presenças e faltas.",
    icon: CalendarCheck,
  },
  {
    title: "Financeiro",
    description: "Mensalidades, pagamentos, recibos, despesas e relatórios.",
    icon: CircleDollarSign,
  },
  {
    title: "Professores",
    description: "Turmas, disciplinas, lançamento de notas e assiduidade.",
    icon: ClipboardList,
  },
  {
    title: "Mediateca",
    description: "Catálogo, exemplares, empréstimos e reservas.",
    icon: Library,
  },
  {
    title: "Comunicação",
    description: "Comunicação escolar integrada aos fluxos do sistema.",
    icon: MessageSquareText,
  },
  {
    title: "Aplicação móvel",
    description: "Notas, horários, tarefas, presenças, financeiro e biblioteca.",
    icon: Smartphone,
  },
  {
    title: "Conteúdos",
    description: "Materiais e recursos associados às turmas e disciplinas.",
    icon: BookOpen,
  },
];

export default function FuncionalidadesPage() {
  return (
    <main className="section-space">
      <div className="container-djondzo">
        <SectionHeading
          eyebrow="Funcionalidades"
          title="Uma plataforma para as principais rotinas da escola."
          description="O Djondzo organiza áreas académicas, administrativas e financeiras com acessos separados por perfil."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[28px] border border-black/10 bg-white p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1f3f6]">
                <Icon size={22} />
              </div>
              <h2 className="mt-7 text-xl font-bold tracking-[-0.03em]">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#667085]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
