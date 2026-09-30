"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Brand } from "@/components/brand";
import { mainNavigation, siteConfig } from "@/config/site";

const solutionPaths = new Set([
  "/para-escolas",
  "/gestao-academica",
  "/gestao-financeira",
  "/assiduidade",
  "/mediateca",
  "/professores",
  "/alunos",
  "/app-mobile",
  "/whatsapp",
]);

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/funcionalidades" && solutionPaths.has(pathname)) return true;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="site-header-glass sticky top-0 z-50">
      <div className="site-header-inner container-djondzo flex items-center justify-between gap-4">
        <Brand compact />

        <nav className="hidden items-stretch lg:flex" aria-label="Navegação principal">
          {mainNavigation.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex min-h-11 items-center px-3 text-base font-medium transition-colors duration-150 ${
                  active
                    ? "text-[var(--color-action)] after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-[var(--color-action)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contactos"
            aria-current={isActive("/contactos") ? "page" : undefined}
            className={`relative flex min-h-11 items-center px-3 text-base font-medium transition-colors duration-150 ${
              isActive("/contactos")
                ? "text-[var(--color-action)] after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-[var(--color-action)]"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            }`}
          >
            Contactos
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href={siteConfig.appUrl} className="btn-tertiary hidden md:inline-flex">
            Entrar
          </a>
          <Link href="/contactos" className="btn-secondary hidden sm:inline-flex">
            Pedir demonstração
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition-colors duration-150 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-canvas)] lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-haspopup="true"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-navigation" className="site-header-mobile-glass mobile-menu-enter border-t border-[var(--color-border)] lg:hidden">
          <div className="container-djondzo py-3">
            <nav className="divide-y divide-[var(--color-border)]" aria-label="Navegação móvel">
              {[...mainNavigation, { href: "/contactos", label: "Contactos" }].map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-12 items-center justify-between py-3 text-base font-medium ${
                      active ? "text-[var(--color-action)]" : "text-[var(--color-text)]"
                    }`}
                  >
                    {item.label}
                    {active && <span className="ui-caption text-[var(--color-action)]">Actual</span>}
                  </Link>
                );
              })}
              <a
                href={siteConfig.appUrl}
                className="flex min-h-12 items-center py-3 text-base font-medium text-[var(--color-text)]"
              >
                Entrar no Djondzo
              </a>
            </nav>
            <Link href="/contactos" className="btn-primary mt-3 w-full">
              Pedir demonstração
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
