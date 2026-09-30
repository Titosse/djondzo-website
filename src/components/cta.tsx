import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-text)] py-12 text-white sm:py-16">
      <div className="container-djondzo text-center">
        <div className="mx-auto max-w-[760px]">
          <h2 className="ui-h2 !text-white">
            Veja o Djondzo aplicado à rotina da sua escola.
          </h2>
          <p className="mx-auto mt-4 max-w-[68ch] text-base leading-[1.6] text-[var(--color-on-dark)]">
            Mostramos os módulos relevantes, os perfis de acesso e como os dados passam entre secretaria, pedagógico, contabilidade, professores e alunos.
          </p>
          <p className="mt-4 text-base text-[var(--color-on-dark-muted)]">
            Sem compromisso · Demonstração orientada · Foco no fluxo da escola
          </p>
          <Link href="/contactos" className="btn-primary link-arrow mt-7 w-full sm:w-auto">
            Pedir demonstração
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
