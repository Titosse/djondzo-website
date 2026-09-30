import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "@/components/brand";
import { solutions } from "@/data/solutions";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  const topSolutions = solutions.slice(0, 5);

  return (
    <footer className="bg-[#0F172B] text-white">
      <div className="container-djondzo grid gap-12 py-14 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <div>
          <Brand inverse />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
            Sistema de gestão escolar para ligar as rotinas académicas,
            administrativas e financeiras numa única plataforma.
          </p>
          <span className="mt-6 inline-flex rounded-full border border-white/10 px-3 py-2 text-xs font-bold text-[#C7D2FE]">
            {siteConfig.location}
          </span>
        </div>

        <div>
          <p className="text-sm font-bold">Produto</p>
          <div className="mt-4 grid gap-3 text-sm text-white/60">
            <Link className="hover:text-white" href="/funcionalidades">Funcionalidades</Link>
            <Link className="hover:text-white" href="/precos">Preços</Link>
            <Link className="hover:text-white" href="/app-mobile">Aplicação móvel</Link>
            <Link className="hover:text-white" href="/blog">Recursos</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold">Soluções</p>
          <div className="mt-4 grid gap-3 text-sm text-white/60">
            {topSolutions.map((solution) => (
              <Link
                className="hover:text-white"
                href={`/${solution.slug}`}
                key={solution.slug}
              >
                {solution.eyebrow}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold">Contactos</p>
          <div className="mt-4 grid gap-3 text-sm text-white/60">
            <Link className="inline-flex items-center gap-1 hover:text-white" href="/contactos">
              Pedir demonstração <ArrowUpRight size={13} />
            </Link>
            <a className="break-all hover:text-white" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            <a className="hover:text-white" href={siteConfig.appUrl}>Entrar no sistema</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-djondzo flex flex-col gap-3 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Djondzo. Todos os direitos reservados.</span>
          <span>Sistema de gestão escolar</span>
        </div>
      </div>
    </footer>
  );
}
