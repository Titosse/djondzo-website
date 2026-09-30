import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="section-space bg-white">
      <div className="container-djondzo max-w-2xl">
        <p className="context-label">Erro 404</p>
        <h1 className="ui-h1 mt-3">Página não encontrada.</h1>
        <p className="ui-body mt-5">
          A página que procura não existe ou mudou de endereço.
        </p>
        <Link href="/" className="btn-primary mt-7">
          <ArrowLeft size={16} />
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
