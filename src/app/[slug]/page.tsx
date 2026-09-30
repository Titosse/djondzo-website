import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { CTA } from "@/components/cta";
import { solutionMap, solutions } from "@/data/solutions";
import { siteConfig } from "@/config/site";
import { SolutionProductPreview } from "@/components/djondzo-previews";
import { MobileAppShowcase } from "@/components/mobile-app-showcase";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionMap[slug];
  if (!solution) return {};

  return {
    title: solution.eyebrow,
    description: solution.description,
    keywords: solution.keywords,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${solution.eyebrow} | ${siteConfig.name}`,
      description: solution.description,
      url: `${siteConfig.url}/${slug}`,
    },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutionMap[slug];
  if (!solution) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: solution.eyebrow,
    description: solution.description,
    url: `${siteConfig.url}/${solution.slug}`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="section-space bg-white">
        <div className="container-djondzo">
          <nav aria-label="Percurso" className="mb-8 flex items-center gap-2 text-base text-[var(--color-text-muted)]">
            <Link href="/funcionalidades" className="hover:text-[var(--color-action)]">Funcionalidades</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page" className="text-[var(--color-text-secondary)]">{solution.eyebrow}</span>
          </nav>

          <div className="grid grid-cols-4 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-start">
            <div className="col-span-4 lg:col-span-7">
              <h1 className="ui-h1 max-w-[20ch]">{solution.title}</h1>
              <p className="ui-body mt-5">{solution.description}</p>
              <Link href="/contactos" className="btn-primary mt-7">
                Pedir demonstração
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <aside className="col-span-4 border-l-2 border-[var(--color-action)] pl-5 lg:col-span-5" aria-label="Contexto do módulo">
              <h2 className="ui-h3">Como o módulo se encaixa</h2>
              <p className="mt-3 text-base leading-7 text-[var(--color-text-secondary)]">{solution.intro}</p>
              <dl className="mt-5 border-t border-[var(--color-border)] pt-4">
                <dt className="text-base font-medium text-[var(--color-text-muted)]">Perfis relacionados</dt>
                <dd className="mt-1 text-base text-[var(--color-text)]">{solution.audience}</dd>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-canvas)] py-10 sm:py-14">
        <div className="container-djondzo">
          <div className="mb-6 grid gap-3 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="context-label">No produto</p>
              <h2 className="ui-h2 mt-2">Uma apresentação baseada no Djondzo actual.</h2>
            </div>
            <p className="text-base leading-7 text-[var(--color-text-secondary)] lg:col-span-7">
              A interface abaixo preserva a organização e terminologia do frontend do Djondzo, usando apenas dados de demonstração.
            </p>
          </div>
          {solution.slug === "app-mobile" || solution.slug === "alunos" ? (
            <MobileAppShowcase />
          ) : (
            <SolutionProductPreview slug={solution.slug} />
          )}
        </div>
      </section>

      <section className="section-space border-y border-[var(--color-border)] bg-[var(--color-canvas)]">
        <div className="container-djondzo grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="ui-h2">Um fluxo pensado para o trabalho diário.</h2>
          </div>

          <ul className="border-y border-[var(--color-border)] lg:col-span-8">
            {solution.features.map((feature, index) => (
              <li key={feature.title} className={`grid gap-3 py-5 sm:grid-cols-[190px_1fr] ${index ? "border-t border-[var(--color-border)]" : ""}`}>
                <h3 className="ui-h3">{feature.title}</h3>
                <p className="text-base leading-7 text-[var(--color-text-secondary)]">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space bg-[var(--color-text)] text-white">
        <div className="container-djondzo grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="ui-h2 !text-white">O que este módulo ajuda a organizar.</h2>
          </div>
          <ul className="border-y border-white/15 lg:col-span-7">
            {solution.outcomes.map((outcome, index) => (
              <li key={outcome} className={`flex items-start gap-3 py-4 text-base leading-7 text-[var(--color-on-dark)] ${index ? "border-t border-white/15" : ""}`}>
                <Check size={16} className="mt-1 shrink-0 text-[var(--color-brand-pale)]" aria-hidden="true" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </main>
  );
}
