import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  GraduationCap,
  Library,
  MessageCircle,
  Smartphone,
  Users,
} from "lucide-react";
import { ProductPreview } from "@/components/product-preview";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";

const areas = [
  {
    icon: GraduationCap,
    title: "Gestão académica",
    text: "Turmas, disciplinas, notas, pautas, tarefas, conteúdos e calendário escolar.",
  },
  {
    icon: CircleDollarSign,
    title: "Gestão financeira",
    text: "Mensalidades, pagamentos, recibos, despesas, folha salarial e relatórios.",
  },
  {
    icon: ClipboardCheck,
    title: "Assiduidade",
    text: "Registo e acompanhamento de presenças por turma, disciplina e aluno.",
  },
  {
    icon: Library,
    title: "Mediateca",
    text: "Catálogo, exemplares, empréstimos e reservas num único fluxo.",
  },
  {
    icon: MessageCircle,
    title: "Comunicação",
    text: "Notificações e comunicação escolar integrada com os fluxos do sistema.",
  },
  {
    icon: Smartphone,
    title: "Aplicação móvel",
    text: "Acesso do aluno às notas, tarefas, horários, financeiro e biblioteca.",
  },
];

const profiles = [
  "Administração",
  "Pedagógico",
  "Secretaria",
  "Contabilidade",
  "Professor",
  "Bibliotecário",
  "Aluno",
];

const highlights = [
  "Uma escola, dados organizados num só lugar",
  "Perfis e permissões separados por função",
  "Relatórios académicos e financeiros",
  "Acesso web e aplicação móvel",
];

export default function HomePage() {
  return (
    <main>
      <section className="overflow-hidden border-b border-black/5 bg-[#f7f8fa]">
        <div className="container-djondzo grid min-h-[720px] items-center gap-14 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
          <div>
            <div className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-[#4b5563]">
              Gestão escolar em Moçambique
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-[#111827] sm:text-6xl lg:text-7xl">
              A escola organizada num único sistema.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#667085]">
              O Djondzo reúne gestão académica, administrativa e financeira para
              ajudar escolas a acompanhar alunos, professores, mensalidades,
              assiduidade, notas e operações do dia a dia.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contactos"
                className="inline-flex items-center justify-center gap-2 rounded-[18px] bg-[#171c2b] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#252c41]"
              >
                Solicitar demonstração
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/funcionalidades"
                className="inline-flex items-center justify-center rounded-[18px] border border-black/10 bg-white px-6 py-4 text-sm font-semibold text-[#374151] transition hover:border-black/20"
              >
                Conhecer funcionalidades
              </Link>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-[#4b5563]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8b44b]/20 text-[#7a5a1d]">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <ProductPreview />
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-djondzo">
          <SectionHeading
            eyebrow="Uma plataforma"
            title="As principais áreas da escola ligadas entre si."
            description="Cada perfil trabalha apenas com o que precisa, enquanto a escola mantém a informação organizada numa única plataforma."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {areas.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="min-h-64 rounded-[28px] border border-black/10 bg-[#f7f8fa] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Icon size={22} />
                </div>
                <h3 className="mt-7 text-xl font-bold tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#667085]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="para-escolas" className="section-space bg-[#171c2b] text-white">
        <div className="container-djondzo grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e8b44b]">
              Para toda a equipa
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
              Cada utilizador entra no seu espaço de trabalho.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
              O Djondzo separa as rotinas da escola por perfil para reduzir
              confusão e manter as operações organizadas.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {profiles.map((profile) => (
              <div
                key={profile}
                className="rounded-[22px] border border-white/10 bg-white/5 px-5 py-5 text-sm font-semibold"
              >
                {profile}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f7f8fa]">
        <div className="container-djondzo grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[30px] bg-white p-6 shadow-[0_24px_70px_rgba(17,24,39,0.08)]">
            <div className="rounded-[24px] bg-[#eef0f4] p-6">
              <div className="mx-auto max-w-[260px] rounded-[32px] border-[8px] border-[#171c2b] bg-white p-4 shadow-xl">
                <div className="rounded-2xl bg-[#171c2b] p-4 text-white">
                  <p className="text-xs text-white/60">Bom dia</p>
                  <p className="mt-1 text-lg font-bold">Djondzo</p>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {[
                      ["Notas", "16.4"],
                      ["Presença", "96%"],
                      ["Tarefas", "3"],
                      ["Disciplinas", "11"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl bg-white/10 p-3">
                        <p className="text-[10px] text-white/60">{label}</p>
                        <p className="mt-1 font-bold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="rounded-xl bg-[#f1f3f6] p-3 text-xs font-semibold">Horário de hoje</div>
                  <div className="rounded-xl bg-[#f1f3f6] p-3 text-xs font-semibold">Próximas tarefas</div>
                </div>
              </div>
            </div>
          </div>

          <SectionHeading
            eyebrow="Djondzo Mobile"
            title="A informação escolar também acompanha o aluno."
            description="No aplicativo, o aluno pode consultar áreas como notas, horários, tarefas, presenças, financeiro e biblioteca."
          />
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-djondzo">
          <div className="rounded-[32px] border border-black/10 bg-[#f7f8fa] p-8 sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8b6722]">
                  Planos
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                  Um modelo simples para a sua escola.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[#667085]">
                  O valor base atual é de {siteConfig.pricePerStudent} por aluno por mês.
                  A demonstração permite avaliar o funcionamento antes da adesão.
                </p>
              </div>
              <Link
                href="/precos"
                className="inline-flex h-fit items-center justify-center gap-2 rounded-[18px] bg-[#171c2b] px-6 py-4 text-sm font-semibold text-white"
              >
                Ver preços
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white pt-0">
        <div className="container-djondzo">
          <div className="rounded-[32px] bg-[#171c2b] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
              Quer ver o Djondzo a funcionar na sua escola?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65">
              Solicite uma demonstração e conheça os módulos que fazem sentido para a sua instituição.
            </p>
            <Link
              href="/contactos"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-[18px] bg-white px-6 py-4 text-sm font-semibold text-[#171c2b]"
            >
              Solicitar demonstração
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
