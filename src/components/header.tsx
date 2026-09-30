"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Brand } from "@/components/brand";
import { mainNavigation, siteConfig } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCE3ED]/90 bg-[#F8FAFC]/96 backdrop-blur-xl">
      <div className="container-djondzo flex h-[72px] items-center justify-between gap-4">
        <Brand compact />

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Navegação principal">
          {mainNavigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`min-h-11 rounded-[14px] px-3.5 py-3 text-sm font-semibold transition ${
                  active
                    ? "bg-[#EEF3FF] text-[#155DFC]"
                    : "text-[#52617A] hover:bg-white hover:text-[#0F172B]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contactos"
            aria-current={isActive("/contactos") ? "page" : undefined}
            className={`min-h-11 rounded-[14px] px-3.5 py-3 text-sm font-semibold transition ${
              isActive("/contactos")
                ? "bg-[#EEF3FF] text-[#155DFC]"
                : "text-[#52617A] hover:bg-white hover:text-[#0F172B]"
            }`}
          >
            Contactos
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href={siteConfig.appUrl} className="btn-ghost hidden md:inline-flex">
            Entrar
          </a>
          <Link href="/contactos" className="btn-secondary hidden sm:inline-flex">
            Pedir demonstração
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#DCE3ED] bg-white text-[#0F172B] transition hover:border-[#C7D2FE] hover:bg-[#EEF3FF] lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="border-t border-[#DCE3ED] bg-white lg:hidden">
          <div className="container-djondzo py-4">
            <nav className="grid gap-1" aria-label="Navegação móvel">
              {mainNavigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`min-h-12 rounded-[14px] px-4 py-3 text-sm font-semibold ${
                      active ? "bg-[#EEF3FF] text-[#155DFC]" : "text-[#0F172B] hover:bg-[#F4F7FB]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contactos"
                aria-current={isActive("/contactos") ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`min-h-12 rounded-[14px] px-4 py-3 text-sm font-semibold ${
                  isActive("/contactos") ? "bg-[#EEF3FF] text-[#155DFC]" : "text-[#0F172B] hover:bg-[#F4F7FB]"
                }`}
              >
                Contactos
              </Link>
              <a href={siteConfig.appUrl} className="min-h-12 rounded-[14px] px-4 py-3 text-sm font-semibold text-[#0F172B] hover:bg-[#F4F7FB]">
                Entrar no Djondzo
              </a>
              <Link href="/contactos" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
                Pedir demonstração
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
