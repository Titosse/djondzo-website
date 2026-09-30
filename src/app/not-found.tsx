import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="section-space bg-[#F8FAFC]">
      <div className="container-djondzo text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#EEF3FF] text-xl font-extrabold text-[#155DFC]">
          404
        </div>
        <h1 className="mt-6 text-5xl font-extrabold tracking-[-0.05em] text-[#0F172B]">
          Página não encontrada.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#64748B]">
          A página que procura não existe ou mudou de endereço.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <ArrowLeft size={16} />
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
