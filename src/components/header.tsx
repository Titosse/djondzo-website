import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const navigation = [
  { href: "/funcionalidades", label: "Funcionalidades" },
  { href: "/precos", label: "Preços" },
  { href: "/#para-escolas", label: "Para escolas" },
  { href: "/contactos", label: "Contactos" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f8fa]/95 backdrop-blur">
      <div className="container-djondzo flex h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Djondzo - Página inicial">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#171c2b] text-sm font-bold text-white">
            D
          </span>
          <span className="text-lg font-bold tracking-[-0.03em]">{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#4b5563] lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#111827]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.appUrl}
            className="hidden rounded-2xl px-4 py-2.5 text-sm font-semibold text-[#374151] transition hover:bg-white sm:inline-flex"
          >
            Entrar
          </a>
          <Link
            href="/contactos"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#171c2b] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#252c41]"
          >
            Solicitar demonstração
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
