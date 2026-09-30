const faqs = [
  {
    q: "Quanto custa o Djondzo?",
    a: "O modelo base configurado para o Djondzo é de 15 MT por aluno cadastrado por mês. As condições comerciais podem ser confirmadas durante a demonstração.",
  },
  {
    q: "Quem pode usar o sistema?",
    a: "O Djondzo trabalha com perfis como administração, pedagógico, secretaria, contabilidade, professor, bibliotecário e aluno, cada um com as suas rotinas e permissões.",
  },
  {
    q: "O aluno tem aplicação móvel?",
    a: "Sim. O aplicativo do aluno inclui áreas como início, calendário, tarefas, notas, financeiro, biblioteca e perfil.",
  },
  {
    q: "A escola pode controlar a biblioteca?",
    a: "Sim. A Mediateca organiza catálogo, exemplares, empréstimos, reservas, localização física e regras de utilização.",
  },
  {
    q: "O Djondzo envia notificações?",
    a: "O sistema possui fluxos de notificação ligados a eventos como credenciais, notas, tarefas, mensalidades, prazos e pagamentos.",
  },
  {
    q: "Os dados de escolas diferentes ficam misturados?",
    a: "A arquitectura do Djondzo separa os dados por escola e utiliza perfis e regras de acesso para limitar o que cada utilizador pode consultar ou alterar.",
  },
];

export function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="overflow-hidden rounded-[28px] border border-[#DCE3ED] bg-white shadow-[0_12px_36px_rgba(15,23,43,0.05)]">
        {faqs.map((item, index) => (
          <details
            key={item.q}
            className={`group px-6 py-1 sm:px-8 ${
              index !== 0 ? "border-t border-[#E6EBF2]" : ""
            }`}
          >
            <summary className="flex min-h-[72px] cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-base font-semibold text-[#0F172B]">
              {item.q}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#F4F7FB] text-lg font-normal text-[#64748B] transition group-open:rotate-45 group-open:bg-[#EEF3FF] group-open:text-[#155DFC]">
                +
              </span>
            </summary>
            <p className="max-w-3xl pb-6 pr-10 text-base leading-7 text-[#52617A]">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </>
  );
}
