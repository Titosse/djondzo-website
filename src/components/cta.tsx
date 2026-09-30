import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-white pb-20 pt-4 sm:pb-24">
      <div className="container-djondzo">
        <div className="relative overflow-hidden rounded-[34px] bg-[#0F172B] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute right-8 top-8 h-24 w-24 rounded-[28px] border border-[#757DF5]/35" />
          <div className="absolute bottom-8 left-8 h-16 w-16 rounded-full bg-[#155DFC] opacity-20" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow !text-[#C7D2FE]">Demonstração</p>
              <h2 className="ui-h2 mt-4 !text-white">
                Veja o Djondzo aplicado à rotina da sua escola.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/65">
                Mostramos os módulos relevantes, os perfis de acesso e como os dados passam entre secretaria, pedagógico, contabilidade, professores e alunos.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/70">
                {["Sem compromisso", "Demonstração orientada", "Foco no fluxo da escola"].map(
                  (item) => (
                    <span key={item} className="inline-flex items-center gap-2">
                      <CheckCircle2 size={15} className="text-[#757DF5]" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <Link
              href="/contactos"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-[18px] bg-[#155DFC] px-6 text-sm font-bold text-white shadow-[0_16px_36px_rgba(21,93,252,0.28)] transition hover:bg-[#0F52E8]"
            >
              Pedir demonstração
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
