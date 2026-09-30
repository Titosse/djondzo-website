import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { CTA } from "@/components/cta";
import { solutionMap, solutions } from "@/data/solutions";
import { siteConfig } from "@/config/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

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

  const Icon = solution.icon;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: solution.eyebrow,
    description: solution.description,
    url: `${siteConfig.url}/${solution.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="section-space border-b border-[#DCE3ED] bg-[#F8FAFC]">
        <div className="container-djondzo grid grid-cols-4 gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="col-span-4 lg:col-span-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#EEF3FF] text-[#155DFC]">
              <Icon size={25} />
            </div>
            <p className="eyebrow mt-7">{solution.eyebrow}</p>
            <h1 className="ui-h1 mt-4">
              {solution.title}
            </h1>
            <p className="ui-body mt-5 max-w-[70ch]">
              {solution.description}
            </p>
            <Link href="/contactos" className="btn-primary mt-8">
              Pedir demonstração
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="col-span-4 rounded-[24px] border border-[#DCE3ED] lg:col-span-7 bg-white p-7 shadow-[0_18px_48px_rgba(15,23,43,0.07)] sm:p-9">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#155DFC]" />
              <p className="text-sm font-bold text-[#0F172B]">
                Como o módulo se encaixa
              </p>
            </div>
            <p className="mt-4 text-base leading-7 text-[#52617A]">{solution.intro}</p>
            <div className="mt-7 rounded-[22px] border border-[#C7D2FE] bg-[#EEF3FF] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#64748B]">
                Perfis relacionados
              </p>
              <p className="mt-3 text-sm font-bold text-[#0F172B]">{solution.audience}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-djondzo">
          <p className="eyebrow">O que inclui</p>
          <h2 className="ui-h2 mt-4 max-w-3xl">
            Um fluxo pensado para o trabalho diário.
          </h2>

          <div className="mt-11 grid gap-4 md:grid-cols-2">
            {solution.features.map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-[27px] border border-[#DCE3ED] bg-[#F8FAFC] p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-[#155DFC]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#C7D2FE]" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-[-0.035em] text-[#0F172B]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#52617A]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#0F172B] text-white">
        <div className="container-djondzo grid grid-cols-4 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-4 lg:col-span-5">
            <p className="eyebrow !text-[#C7D2FE]">Na prática</p>
            <h2 className="ui-h2 mt-4 !text-white">
              O que este módulo ajuda a organizar.
            </h2>
          </div>
          <div className="col-span-4 space-y-3 lg:col-span-7">
            {solution.outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-start gap-3 rounded-[22px] border border-white/10 bg-white/[0.05] p-5 text-base leading-7 text-white/75"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#155DFC] text-white">
                  <Check size={13} />
                </span>
                {outcome}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
