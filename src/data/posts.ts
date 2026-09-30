export type BlogSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type BlogPost = {
  slug: string; title: string; description: string; publishedAt: string; readingTime: string;
  category: string; keywords: string[]; sections: BlogSection[];
};

export const posts: BlogPost[] = [
  {
    slug: "como-organizar-mensalidades-escolares",
    title: "Como organizar mensalidades escolares sem depender de folhas soltas",
    description: "Um fluxo simples para ligar cobrança, recebimento, saldo do aluno e relatórios financeiros.",
    publishedAt: "2026-09-30", readingTime: "5 min", category: "Financeiro",
    keywords: ["mensalidades escolares", "gestão de propinas", "pagamentos escolares"],
    sections: [
      { heading: "O problema começa quando cada área controla uma parte", paragraphs: [
        "Quando a secretaria recebe pagamentos numa folha e a contabilidade mantém outro registo, a escola passa a depender de reconciliações manuais. O mesmo aluno pode aparecer como pago num local e pendente noutro.",
        "A solução não é apenas digitalizar a mesma folha. O fluxo deve ligar a cobrança ao aluno, o pagamento à cobrança e o movimento financeiro ao relatório."
      ]},
      { heading: "Um fluxo que pode ser auditado", paragraphs: ["Cada mensalidade deve ter um valor, um período, um estado e um histórico de pagamentos. Quando existe pagamento parcial, o saldo pendente deve continuar visível até a liquidação."], bullets: [
        "Gerar a cobrança para o aluno.", "Registar o pagamento recebido.", "Actualizar o saldo da cobrança.", "Emitir o recibo correspondente.", "Reflectir a entrada no controlo financeiro."
      ]},
      { heading: "O que muda para a escola", paragraphs: [
        "A secretaria deixa de informar a contabilidade por mensagens ou folhas separadas. As duas áreas consultam o mesmo movimento, mas cada uma trabalha com as permissões do seu perfil.",
        "No Djondzo, a gestão financeira é pensada para manter mensalidades, pagamentos, recebimentos e relatórios ligados ao registo do aluno."
      ]}
    ]
  },
  {
    slug: "como-acompanhar-assiduidade-escolar",
    title: "Como acompanhar assiduidade escolar de forma consistente",
    description: "O que deve ser registado para transformar a presença diária em informação útil para professores e pedagógico.",
    publishedAt: "2026-09-30", readingTime: "4 min", category: "Pedagógico",
    keywords: ["assiduidade escolar", "controlo de faltas", "presença de alunos"],
    sections: [
      { heading: "Presença precisa de contexto", paragraphs: [
        "Um registo de presença isolado diz pouco. Para ser útil, deve indicar pelo menos a data, a turma, a disciplina, o professor e o estado de cada aluno.",
        "Esse contexto permite distinguir uma ausência real de uma aula que simplesmente ainda não teve a assiduidade lançada."
      ]},
      { heading: "O pedagógico também precisa acompanhar o registo", paragraphs: ["Além das faltas dos alunos, a escola precisa saber quais turmas e disciplinas não receberam o registo esperado. Esse controlo ajuda a corrigir lacunas antes de produzir relatórios."], bullets: ["Consultar presença por aluno.", "Filtrar por turma e disciplina.", "Identificar dias sem registo.", "Gerar mapas para acompanhamento."]},
      { heading: "Uma única fonte de informação", paragraphs: ["Quando professor, pedagógico e aluno consultam a mesma base de assiduidade, diminui a necessidade de transportar informação entre cadernos, ficheiros e relatórios manuais."]}
    ]
  },
  {
    slug: "o-que-um-sistema-de-gestao-escolar-deve-centralizar",
    title: "O que um sistema de gestão escolar deve centralizar",
    description: "Uma visão prática das áreas que precisam conversar entre si para evitar duplicação de trabalho.",
    publishedAt: "2026-09-30", readingTime: "6 min", category: "Gestão escolar",
    keywords: ["sistema de gestão escolar", "software escolar", "digitalização de escolas"],
    sections: [
      { heading: "Não basta ter muitos módulos", paragraphs: [
        "Um sistema escolar torna-se útil quando os módulos usam a mesma informação. O aluno cadastrado pela secretaria deve ser o mesmo aluno que aparece na turma, na pauta, na assiduidade e no financeiro.",
        "Quando cada módulo funciona como uma ilha, a escola continua a repetir dados e a corrigir divergências."
      ]},
      { heading: "As áreas que normalmente precisam estar ligadas", paragraphs: ["A estrutura varia de escola para escola, mas algumas áreas aparecem com frequência e beneficiam de uma base comum."], bullets: ["Alunos, matrículas e turmas.", "Professores, disciplinas e horários.", "Notas, pautas e assiduidade.", "Mensalidades, pagamentos e recibos.", "Funcionários, salários e despesas.", "Biblioteca, tarefas, conteúdos e comunicação."]},
      { heading: "Permissões fazem parte da organização", paragraphs: ["Centralizar dados não significa mostrar tudo a todos. Administração, secretaria, contabilidade, professores e alunos precisam de acessos diferentes.", "O Djondzo usa perfis para separar responsabilidades mantendo a informação na mesma plataforma."]}
    ]
  },
  {
    slug: "como-funciona-uma-mediateca-escolar-digital",
    title: "Como funciona uma mediateca escolar digital",
    description: "Catálogo, exemplares, empréstimos e reservas organizados como parte do sistema da escola.",
    publishedAt: "2026-09-30", readingTime: "4 min", category: "Mediateca",
    keywords: ["mediateca escolar", "biblioteca escolar digital", "empréstimo de livros"],
    sections: [
      { heading: "Catálogo e exemplar não são a mesma coisa", paragraphs: ["O catálogo descreve a obra. Os exemplares representam as cópias físicas disponíveis na escola. Separar esses dois conceitos permite saber que um livro existe no acervo mesmo quando todos os seus exemplares estão emprestados."]},
      { heading: "O ciclo do empréstimo", paragraphs: ["Uma mediateca digital deve registar quem recebeu o exemplar, quando foi entregue, qual é o prazo e quando ocorreu a devolução. Regras de renovação e bloqueio por atraso podem ser aplicadas de forma consistente."], bullets: ["Pesquisar a obra.", "Verificar disponibilidade.", "Reservar quando permitido.", "Registar o empréstimo.", "Acompanhar prazo e devolução."]},
      { heading: "Ligação aos perfis da escola", paragraphs: ["Quando a biblioteca faz parte do sistema escolar, aluno e professor não precisam de uma segunda conta. O mesmo perfil pode ser usado para consultar o acervo e acompanhar reservas autorizadas."]}
    ]
  }
];

export const postMap = Object.fromEntries(posts.map((post) => [post.slug, post])) as Record<string, BlogPost>;
