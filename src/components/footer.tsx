import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container-djondzo grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold">{siteConfig.shortName}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#667085]">
            Gestão académica, administrativa e financeira para escolas.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Produto</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[#667085]">
            <Link href="/funcionalidades">Funcionalidades</Link>
            <Link href="/precos">Preços</Link>
            <Link href="/contactos">Solicitar demonstração</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Acesso</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[#667085]">
            <a href={siteConfig.appUrl}>Entrar no Djondzo</a>
            <a href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="container-djondzo flex flex-col gap-2 py-6 text-xs text-[#667085] sm:flex-row sm:justify-between">
          <span>© {year} Djondzo. Todos os direitos reservados.</span>
          <span>Moçambique</span>
        </div>
      </div>
    </footer>
  );
}
