import Link from "next/link";
import {
  ArrowRight,
  Check,
  GraduationCap,
  LibraryBig,
  MessageCircleMore,
  CalendarCheck2,
  BadgeDollarSign,
  UsersRound,
} from "lucide-react";
import { ProductPreview } from "@/components/product-preview";
import { SectionHeading } from "@/components/section-heading";
import { PriceCalculator } from "@/components/price-calculator";
import { MobileAppShowcase } from "@/components/mobile-app-showcase";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Reveal } from "@/components/reveal";
import { SchoolFlow } from "@/components/school-flow";
import { ProductTour } from "@/components/product-tour";
import {
  FinancePreview,
  MediatecaPreview,
  PautasPreview,
} from "@/components/djondzo-previews";
import { posts } from "@/data/posts";
import { siteConfig } from "@/config/site";

const profiles = [
  "Administração",
  "Pedagógico",
  "Secretaria",
  "Contabilidade",
  "Professor",
  "Bibliotecário",
  "Aluno",
];

const capabilities = [
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
    text: "Catálogo, exemplares, empréstimos, reservas e localizações.",
    href: "/mediateca",
  },
  {
    icon: MessageCircleMore,
    title: "Comunicação",
    text: "Avisos e notificações ligados aos eventos reais do sistema.",
    href: "/whatsapp",
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero border-b border-[var(--color-border)] bg-white">
        <div className="container-djondzo-wide py-14 text-center lg:py-20">
          <div className="hero-copy mx-auto max-w-[760px]">
            <p className="context-label">Djondzo Escolar · Gestão escolar em Moçambique</p>
            <h1 className="ui-h1 mt-4">
              A escola inteira,
              <span className="hero-accent-line"> ligada no mesmo sistema.</span>
            </h1>
            <p className="ui-body mx-auto mt-6 max-w-[64ch]">
              O Djondzo liga secretaria, gestão académica, financeiro, professores,
              Mediateca e aluno numa única operação escolar — sem repetir os mesmos
              dados em várias folhas e aplicações.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contactos" className="btn-primary link-arrow">
                Pedir demonstração
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link href="/funcionalidades" className="btn-secondary">
                Explorar o produto
              </Link>
            </div>

            <div className="mx-auto mt-8 max-w-[680px] border-t border-[var(--color-border)] pt-5">
              <p className="text-sm font-medium text-[var(--color-text)]">
                Administração · Secretaria · Pedagógico · Contabilidade · Professor · Mediateca · Aluno
              </p>
            </div>
          </div>

          <div className="hero-preview mx-auto mt-12 max-w-[980px] lg:mt-14">
            <div className="home-product-stage home-product-stage-centered">
              <ProductPreview />
            </div>
          </div>
        </div>
      </section>

      <section className="home-context-strip bg-white">
        <div className="container-djondzo-reading py-7 text-center">
          <p className="text-sm font-semibold text-[var(--color-text)]">
            O mesmo dado percorre a escola
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm text-[var(--color-text-secondary)]">
            <span>Matrícula</span>
            <span>Turma</span>
            <span>Notas</span>
            <span>Assiduidade</span>
            <span>Mensalidades</span>
            <span>Mediateca</span>
            <span>Portal do aluno</span>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="section-space bg-[var(--color-canvas)]">
          <div className="container-djondzo">
            <SectionHeading
              centered
              title="Uma base escolar, vários fluxos ligados."
              description="O aluno não é recriado quando muda de área. A matrícula liga a turma; a turma liga o académico; o académico e o financeiro continuam ligados ao mesmo registo."
            />
            <div className="mx-auto mt-10 max-w-[920px]">
              <SchoolFlow />
            </div>
          </div>
        </section>
      </Reveal>

      <section className="section-space border-y border-[var(--color-border)] bg-white">
        <div className="container-djondzo">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="context-label">Fluxo do produto</p>
            <h2 className="ui-h2 mt-3">Acompanhe a operação da escola, área por área.</h2>
            <p className="ui-body mx-auto mt-4 max-w-[64ch]">
              Escolha uma área e veja como o Djondzo organiza o trabalho real da escola,
              usando a estrutura actual do produto com dados neutros de demonstração.
            </p>
          </div>

          <Reveal className="mt-10" delay={70}>
            <div className="home-tour-stage">
              <ProductTour />
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="section-space bg-white">
          <div className="container-djondzo">
            <div className="home-centered-copy">
              <p className="context-label">Académico</p>
              <h2 className="ui-h2 mt-3">Das avaliações à pauta, sem refazer informação.</h2>
              <p className="ui-body mx-auto mt-5">
                Turmas, disciplinas, notas e pautas trabalham sobre os mesmos vínculos
                académicos. O pedagógico e o professor consultam a mesma realidade da escola.
              </p>
              <ul className="home-check-list home-check-list-centered mt-6">
                {[
                  "Cadernetas e pautas académicas",
                  "Filtros por turma, período e disciplina",
                  "Notas, médias e documentos ligados",
                  "Exportação dos resultados disponíveis",
                ].map((item) => (
                  <li key={item}>
                    <Check size={15} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/gestao-academica" className="btn-tertiary link-arrow mt-4">
                Conhecer gestão académica
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="home-showcase-center mt-10">
              <PautasPreview />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-space home-blue-stage">
          <div className="container-djondzo">
            <div className="home-centered-copy">
              <p className="context-label">Financeiro</p>
              <h2 className="ui-h2 mt-3">O pagamento continua ligado ao aluno.</h2>
              <p className="ui-body mx-auto mt-5">
                Mensalidades, recebimentos, dívidas, despesas e salários deixam de viver
                numa folha paralela. A escola acompanha o movimento financeiro dentro do
                mesmo sistema em que gere os alunos.
              </p>
              <Link href="/gestao-financeira" className="btn-tertiary link-arrow mt-5">
                Conhecer Tesouraria
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <div className="home-showcase-center mt-10">
              <FinancePreview />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-space home-dark-stage text-white">
          <div className="container-djondzo">
            <div className="home-centered-copy">
              <p className="text-sm font-semibold text-[var(--color-brand-pale)]">Mediateca escolar</p>
              <h2 className="ui-h2 mt-3 !text-white">Livros físicos também fazem parte do ecossistema.</h2>
              <p className="mx-auto mt-5 max-w-[64ch] text-base leading-[1.6] text-[var(--color-on-dark)]">
                Catálogo, exemplares, localização, empréstimos e reservas ficam ligados aos
                leitores que já existem no Djondzo. Aluno e professor não precisam de outra conta.
              </p>
              <Link href="/mediateca" className="home-dark-link mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                Conhecer Mediateca
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="home-showcase-center mt-10">
              <MediatecaPreview />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-space bg-white">
          <div className="container-djondzo">
            <div className="home-centered-copy">
              <p className="context-label">Aluno e mobile</p>
              <h2 className="ui-h2 mt-3">O essencial chega ao aluno sem passar pela secretaria.</h2>
              <p className="ui-body mx-auto mt-5">
                Horário, tarefas, notas, presenças, financeiro, biblioteca e perfil aparecem
                num espaço próprio. A experiência móvel prioriza o que o aluno precisa consultar no dia a dia.
              </p>
              <Link href="/app-mobile" className="btn-tertiary link-arrow mt-5">
                Conhecer aplicação móvel
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <div className="mx-auto mt-10 max-w-[900px]">
              <MobileAppShowcase />
            </div>
          </div>
        </section>
      </Reveal>

      <section className="section-space border-y border-[var(--color-border)] bg-[var(--color-canvas)]">
        <div className="container-djondzo">
          <SectionHeading
            centered
            title="As áreas que sustentam a operação escolar."
            description="Cada módulo tem uma função própria, mas todos trabalham sobre a mesma estrutura da escola."
          />
          <div className="mx-auto mt-10 max-w-[900px]">
            <div className="capability-index">
              {capabilities.map(({ icon: Icon, title, text, href }) => (
                <Link key={title} href={href} className="capability-row group">
                  <Icon size={18} aria-hidden="true" />
                  <div>
                    <h3 className="ui-h3">{title}</h3>
                    <p>{text}</p>
                  </div>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-djondzo">
          <div className="price-spotlight">
            <div className="price-spotlight-top">
              <p className="context-label">Preço simples</p>

              <div className="price-display" aria-label={`${siteConfig.pricePerStudent} meticais`}>
                <span className="price-display-value">{siteConfig.pricePerStudent}</span>
                <span className="price-display-currency">MT</span>
              </div>

              <p className="price-display-unit">por aluno cadastrado / mês</p>

              <p className="ui-body price-spotlight-description">
                O valor mensal acompanha o número de alunos cadastrados no Djondzo.
                Faça um teste abaixo para estimar a cobrança da sua escola.
              </p>

              <ul className="home-check-list home-check-list-centered price-spotlight-includes">
                {[
                  "Perfis e permissões da escola",
                  "Gestão académica e administrativa",
                  "Financeiro e Mediateca",
                  "Aplicação móvel do aluno",
                ].map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/precos" className="btn-tertiary link-arrow mt-5">
                Ver condições
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="price-calculator-feature">
              <PriceCalculator />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-[var(--color-border)] bg-[var(--color-canvas)]">
        <div className="container-djondzo">
          <SectionHeading
            centered
            title="Antes da demonstração."
            description="Respostas rápidas sobre preço, perfis, aplicativo, Mediateca e organização dos dados."
          />
          <div className="mx-auto mt-10 max-w-[820px]">
            <FAQ />
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-djondzo">
          <div className="text-center">
            <SectionHeading
              centered
              title="Conteúdo para quem gere escolas."
              description="Artigos sobre processos académicos, administrativos e financeiros sem linguagem genérica."
            />
            <Link href="/blog" className="btn-tertiary link-arrow mt-4">
              Ver todos
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="mx-auto mt-8 max-w-[920px] border-t border-[var(--color-border)]">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid gap-3 border-b border-[var(--color-border)] py-5 transition-colors duration-150 hover:bg-[var(--color-canvas)] sm:grid-cols-[140px_1fr_auto] sm:items-start sm:px-3"
              >
                <div>
                  <p className="text-sm font-medium text-[var(--color-action)]">{post.category}</p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">{post.readingTime}</p>
                </div>
                <div>
                  <h3 className="ui-h3">{post.title}</h3>
                  <p className="mt-2 max-w-[64ch] text-base leading-7 text-[var(--color-text-secondary)]">
                    {post.description}
                  </p>
                </div>
                <ArrowRight
                  size={17}
                  className="mt-1 text-[var(--color-text-muted)] transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:text-[var(--color-action)]"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
