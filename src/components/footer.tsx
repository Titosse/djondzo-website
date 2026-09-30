import Link from "next/link";
import { Brand } from "@/components/brand";
import { solutions } from "@/data/solutions";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  const topSolutions = solutions.slice(0, 5);

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-text)] text-white">
      <div className="container-djondzo grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Brand inverse />
          <p className="mt-4 max-w-[46ch] text-base leading-6 text-[var(--color-on-dark)]">
            Sistema de gestão escolar para ligar as rotinas académicas,
            administrativas e financeiras numa única plataforma.
          </p>
          <p className="mt-4 text-base text-[var(--color-on-dark-muted)]">{siteConfig.location}</p>
        </div>

        <div>
          <p className="text-base font-semibold">Produto</p>
          <div className="mt-4 grid gap-2 text-base text-[var(--color-on-dark)]">
            <Link className="hover:text-white" href="/funcionalidades">Funcionalidades</Link>
            <Link className="hover:text-white" href="/precos">Preços</Link>
            <Link className="hover:text-white" href="/app-mobile">Aplicação móvel</Link>
            <Link className="hover:text-white" href="/blog">Recursos</Link>
          </div>
        </div>

        <div>
          <p className="text-base font-semibold">Soluções</p>
          <div className="mt-4 grid gap-2 text-base text-[var(--color-on-dark)]">
            {topSolutions.map((solution) => (
              <Link className="hover:text-white" href={`/${solution.slug}`} key={solution.slug}>
                {solution.eyebrow}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-base font-semibold">Contactos</p>
          <div className="mt-4 grid gap-2 text-base text-[var(--color-on-dark)]">
            <Link className="hover:text-white" href="/contactos">Pedir demonstração</Link>
            <a className="break-all hover:text-white" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            <a className="hover:text-white" href={siteConfig.appUrl}>Entrar no sistema</a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-djondzo flex flex-col gap-2 py-5 text-xs text-[var(--color-on-dark-muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Djondzo. Todos os direitos reservados.</span>
          <span>Sistema de gestão escolar</span>
        </div>
      </div>
    </footer>
  );
}
