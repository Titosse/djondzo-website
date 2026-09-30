"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Brand } from "@/components/brand";
import { mainNavigation, siteConfig } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DCE3ED]/90 bg-[#F8FAFC]/95 backdrop-blur-xl">
      <div className="container-djondzo flex h-[76px] items-center justify-between gap-4">
        <Brand compact />

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-1 py-2 text-sm font-semibold text-[#64748B] transition hover:text-[#155DFC]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contactos"
            className="rounded-lg px-1 py-2 text-sm font-semibold text-[#64748B] transition hover:text-[#155DFC]"
          >
            Contactos
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.appUrl}
            className="hidden min-h-11 items-center rounded-2xl px-4 text-sm font-bold text-[#0F172B] transition hover:bg-white md:inline-flex"
          >
            Entrar
          </a>
          <Link
            href="/contactos"
            className="hidden min-h-11 items-center gap-2 rounded-2xl bg-[#155DFC] px-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(21,93,252,0.20)] transition hover:bg-[#0F52E8] sm:inline-flex"
          >
            Pedir demonstração
            <ArrowUpRight size={15} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DCE3ED] bg-white text-[#0F172B] transition hover:border-[#C7D2FE] hover:bg-[#EEF3FF] lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-[#DCE3ED] bg-white lg:hidden"
        >
          <div className="container-djondzo py-4">
            <nav className="grid gap-1" aria-label="Navegação móvel">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="min-h-12 rounded-2xl px-4 py-3 text-sm font-bold text-[#0F172B] hover:bg-[#F4F7FB]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contactos"
                onClick={() => setOpen(false)}
                className="min-h-12 rounded-2xl px-4 py-3 text-sm font-bold text-[#0F172B] hover:bg-[#F4F7FB]"
              >
                Contactos
              </Link>
              <a
                href={siteConfig.appUrl}
                className="min-h-12 rounded-2xl px-4 py-3 text-sm font-bold text-[#0F172B] hover:bg-[#F4F7FB]"
              >
                Entrar no Djondzo
              </a>
              <Link
                href="/contactos"
                onClick={() => setOpen(false)}
                className="mt-2 flex min-h-12 items-center justify-center rounded-2xl bg-[#155DFC] px-4 py-3 text-center text-sm font-bold text-white"
              >
                Pedir demonstração
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
