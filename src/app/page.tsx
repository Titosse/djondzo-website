import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  CalendarCheck2,
  Check,
  GraduationCap,
  LibraryBig,
  MessageCircleMore,
  ShieldCheck,
  Smartphone,
  UsersRound,
} from "lucide-react";
import { ProductPreview } from "@/components/product-preview";
import { SectionHeading } from "@/components/section-heading";
import { PriceCalculator } from "@/components/price-calculator";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { posts } from "@/data/posts";
import { siteConfig } from "@/config/site";

const modules = [
  {
    icon: UsersRound,
    title: "Alunos e matrículas",
    text: "Registos, matrículas, turmas, renovação e histórico escolar.",
    href: "/para-escolas",
  },
  {
    icon: GraduationCap,
    title: "Gestão académica",
    text: "Disciplinas, avaliações, notas, pautas, tarefas e conteúdos.",
    href: "/gestao-academica",
  },
  {
    icon: CalendarCheck2,
    title: "Assiduidade",
    text: "Presenças e faltas por aluno, turma, disciplina e data.",
    href: "/assiduidade",
  },
  {
    icon: BadgeDollarSign,
    title: "Financeiro",
    text: "Mensalidades, pagamentos, recibos, despesas e salários.",
    href: "/gestao-financeira",
  },
  {
    icon: LibraryBig,
    title: "Mediateca",
    text: "Catálogo, exemplares, empréstimos e reservas.",
    href: "/mediateca",
  },
  {
    icon: MessageCircleMore,
    title: "Comunicação",
    text: "Notificações ligadas aos eventos académicos e financeiros.",
    href: "/whatsapp",
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

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="relative overflow-hidden border-b border-[#DCE3ED] bg-[#F8FAFC]">
        <div
          className="absolute inset-0 soft-grid opacity-60"
          aria-hidden="true"
        />
        <div
          className="absolute left-[4%] top-24 h-28 w-28 rounded-[32px] bg-[#EEF3FF] lg:h-36 lg:w-36"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-14 right-[6%] h-24 w-24 rounded-full border-[18px] border-[#C7D2FE]/60"
          aria-hidden="true"
        />

        <div className="container-djondzo relative grid min-h-[760px] items-center gap-14 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex min-h-9 items-center gap-2 rounded-full border border-[#C7D2FE] bg-white px-4 text-xs font-bold text-[#475569] shadow-[0_6px_18px_rgba(15,23,43,0.04)]">
              <span className="h-2 w-2 rounded-full bg-[#155DFC]" />
              Gestão escolar para Moçambique
            </div>

            <h1 className="display-title mt-7 text-5xl font-extrabold text-[#0F172B] sm:text-6xl lg:text-[4.75rem]">
              A escola inteira, ligada no mesmo sistema.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#64748B]">
              O Djondzo reúne gestão académica, secretaria, contabilidade,
              professores, alunos e Mediateca para reduzir trabalho repetido e
              manter a informação escolar organizada.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contactos" className="btn-primary">
                Pedir demonstração
                <ArrowRight size={17} />
              </Link>
              <Link href="/funcionalidades" className="btn-secondary">
                Explorar funcionalidades
              </Link>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                "Perfis separados por função",
                "Web e aplicação móvel",
                "Académico e financeiro ligados",
                "Dados isolados por escola",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium text-[#475569]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEF3FF] text-[#155DFC]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <ProductPreview />
        </div>
      </section>

      <section className="border-b border-[#E6EBF2] bg-white py-7">
        <div className="container-djondzo">
          <p className="text-center text-xs font-extrabold uppercase tracking-[0.15em] text-[#8DA0BB]">
            Um espaço de trabalho para cada perfil
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {profiles.map((profile) => (
              <span key={profile} className="text-sm font-bold text-[#64748B]">
                {profile}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-djondzo">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <SectionHeading
              eyebrow="Porquê o Djondzo"
              title="Menos ficheiros soltos. Menos informação repetida."
              description="O valor do sistema aparece quando uma acção feita por um perfil passa a alimentar os restantes fluxos que realmente precisam dela."
            />
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                [
                  "01",
                  "Registar uma vez",
                  "O aluno não precisa ser recriado em cada módulo.",
                ],
                [
                  "02",
                  "Separar permissões",
                  "Cada função trabalha apenas com o que lhe compete.",
                ],
                [
                  "03",
                  "Acompanhar melhor",
                  "Relatórios usam a mesma base operacional.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="rounded-[24px] border border-[#DCE3ED] bg-[#F8FAFC] p-5"
                >
                  <span className="text-xs font-extrabold text-[#155DFC]">
                    {number}
                  </span>
                  <h3 className="mt-4 text-sm font-extrabold text-[#0F172B]">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#64748B]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#F8FAFC]">
        <div className="container-djondzo">
          <SectionHeading
            eyebrow="Funcionalidades"
            title="As principais rotinas escolares ligadas entre si."
            description="Cada módulo resolve uma parte do trabalho, mas partilha a mesma base de alunos, turmas, utilizadores e operações."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {modules.map(({ icon: Icon, title, text, href }) => (
              <Link
                key={title}
                href={href}
                className="group min-h-64 rounded-[28px] border border-[#DCE3ED] bg-white p-7 shadow-[0_8px_24px_rgba(15,23,43,0.035)] transition hover:-translate-y-1 hover:border-[#C7D2FE] hover:shadow-[0_20px_46px_rgba(15,23,43,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#155DFC] transition group-hover:bg-[#155DFC] group-hover:text-white">
                  <Icon size={21} />
                </div>
                <h3 className="mt-7 text-xl font-extrabold tracking-[-0.035em] text-[#0F172B]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#64748B]">{text}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-extrabold text-[#155DFC]">
                  Conhecer módulo
                  <ArrowRight
                    size={14}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#0F172B] text-white">
        <div className="container-djondzo grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Uma base comum"
              title="Cada equipa vê o que precisa. Os dados continuam ligados."
              description="O Djondzo não coloca toda a gente no mesmo painel. Cada perfil tem o seu espaço, mas trabalha sobre a mesma realidade da escola."
              light
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {profiles.map((profile) => (
                <span
                  key={profile}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs font-bold text-white/75"
                >
                  {profile}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-4 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Secretaria",
                  text: "Matrículas, alunos, turmas, renovação e processos administrativos.",
                },
                {
                  title: "Pedagógico",
                  text: "Notas, pautas, assiduidade, transições e acompanhamento académico.",
                },
                {
                  title: "Contabilidade",
                  text: "Recebimentos, despesas, salários, caixa e controlo financeiro.",
                },
                {
                  title: "Professor",
                  text: "Turmas, disciplinas, notas, presenças, tarefas e conteúdos.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-[22px] p-5 ${
                    index === 0
                      ? "bg-[#155DFC] text-white"
                      : "bg-white text-[#0F172B]"
                  }`}
                >
                  <p className="text-sm font-extrabold">{item.title}</p>
                  <p
                    className={`mt-2 text-xs leading-5 ${
                      index === 0 ? "text-white/75" : "text-[#64748B]"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-djondzo grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[32px] border border-[#DCE3ED] bg-[#F8FAFC] p-5 shadow-[0_18px_48px_rgba(15,23,43,0.07)] sm:p-7">
            <div className="rounded-[26px] border border-[#E3E8F0] bg-white p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#8DA0BB]">
                    Financeiro
                  </p>
                  <p className="mt-1 text-base font-extrabold text-[#0F172B]">
                    Recebimentos do mês
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[#155DFC]">
                  <BadgeDollarSign size={20} />
                </span>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2">
                {[
                  ["Previsto", "—"],
                  ["Recebido", "—"],
                  ["Pendente", "—"],
                ].map(([label, value], index) => (
                  <div
                    key={label}
                    className={`rounded-2xl p-3 ${
                      index === 1 ? "bg-[#EEF3FF]" : "bg-[#F8FAFC]"
                    }`}
                  >
                    <p className="text-[9px] font-semibold text-[#8DA0BB]">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-[#0F172B]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-2.5">
                {[76, 58, 86, 66].map((width, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-[#E6EBF2] p-3"
                  >
                    <div
                      className="h-2 rounded-full bg-[#DCE3ED]"
                      style={{ width: `${width}%` }}
                    />
                    <div className="mt-2 h-1.5 w-20 rounded-full bg-[#EEF2F6]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <SectionHeading
            eyebrow="Financeiro"
            title="Cobrança e recebimento sem perder o contexto do aluno."
            description="Mensalidades, pagamentos, recibos, despesas e salários podem ser acompanhados dentro da mesma operação escolar."
          />
        </div>
      </section>

      <section className="section-space bg-[#F8FAFC]">
        <div className="container-djondzo grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Djondzo Mobile"
              title="A informação escolar também acompanha o aluno."
              description="O aplicativo organiza as consultas frequentes em início, calendário, tarefas, notas, financeiro, biblioteca e perfil."
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Notas",
                "Horários",
                "Tarefas",
                "Presenças",
                "Financeiro",
                "Biblioteca",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#DCE3ED] bg-white px-4 py-2 text-xs font-bold text-[#64748B]"
                >
                  {item}
                </span>
              ))}
            </div>
            <Link
              href="/app-mobile"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl text-sm font-extrabold text-[#155DFC]"
            >
              Conhecer aplicação móvel
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] rounded-[34px] border border-[#C7D2FE] bg-[#EEF3FF] p-8 sm:p-12">
            <div
              className="absolute left-7 top-7 h-14 w-14 rounded-2xl bg-white/70"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-[274px] rounded-[40px] border-[9px] border-[#0F172B] bg-white p-3 shadow-[0_28px_70px_rgba(15,23,43,0.20)]">
              <div className="rounded-[28px] bg-[#155DFC] p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-white/65">Bom dia</p>
                    <p className="mt-1 text-base font-extrabold">Aluno</p>
                  </div>
                  <Smartphone size={18} className="text-[#C7D2FE]" />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {[
                    ["Notas", "16.4"],
                    ["Presença", "96%"],
                    ["Tarefas", "3"],
                    ["Disciplinas", "11"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-white/[0.11] p-3"
                    >
                      <p className="text-[9px] text-white/65">{label}</p>
                      <p className="mt-1 text-sm font-extrabold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 space-y-2">
                {["Aulas do dia", "Próximas tarefas", "Biblioteca"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex min-h-11 items-center justify-between rounded-2xl bg-[#F4F7FB] px-4 text-[10px] font-bold text-[#475569]"
                    >
                      {item}
                      <ArrowRight size={11} />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-djondzo grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Preço"
              title={`${siteConfig.pricePerStudent} MT por aluno cadastrado por mês.`}
              description="Um modelo simples baseado no número de alunos cadastrados no sistema. Use a calculadora para fazer uma estimativa."
            />
            <div className="mt-7 space-y-3">
              {[
                "Acesso dos perfis da escola",
                "Gestão académica e administrativa",
                "Financeiro e Mediateca",
                "Aplicação móvel do aluno",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-[#475569]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF3FF] text-[#155DFC]">
                    <Check size={13} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/precos"
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl text-sm font-extrabold text-[#155DFC]"
            >
              Ver condições
              <ArrowRight size={15} />
            </Link>
          </div>
          <PriceCalculator />
        </div>
      </section>

      <section className="section-space bg-[#F8FAFC]">
        <div className="container-djondzo grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <SectionHeading
              eyebrow="Perguntas frequentes"
              title="O essencial antes de pedir uma demonstração."
              description="Respostas curtas sobre preço, perfis, aplicativo, Mediateca e organização dos dados."
            />
            <div className="mt-7 flex items-start gap-3 rounded-[22px] border border-[#C7D2FE] bg-[#EEF3FF] p-4">
              <ShieldCheck
                className="mt-0.5 shrink-0 text-[#155DFC]"
                size={19}
              />
              <p className="text-xs leading-5 text-[#475569]">
                O site público apresenta apenas informação comercial. Os dados
                operacionais continuam dentro do sistema autenticado.
              </p>
            </div>
          </div>
          <FAQ />
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-djondzo">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Recursos"
              title="Conteúdo prático sobre gestão escolar."
              description="Artigos que explicam processos académicos, administrativos e financeiros de forma directa."
            />
            <Link
              href="/blog"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl text-sm font-extrabold text-[#155DFC]"
            >
              Ver todos
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-[26px] border border-[#DCE3ED] bg-[#F8FAFC] p-6 transition hover:-translate-y-1 hover:border-[#C7D2FE] hover:bg-white hover:shadow-[0_16px_45px_rgba(15,23,43,0.07)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-extrabold text-[#155DFC]">
                    {post.category}
                  </p>
                  <span className="rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-[#8DA0BB]">
                    {post.readingTime}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold tracking-[-0.035em] text-[#0F172B]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  {post.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-extrabold text-[#155DFC]">
                  Ler artigo
                  <ArrowRight
                    size={14}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
