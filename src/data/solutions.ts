import {
  BadgeDollarSign,
  BookOpenCheck,
  CalendarCheck2,
  GraduationCap,
  LibraryBig,
  MessageCircleMore,
  School,
  Smartphone,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  icon: LucideIcon;
  features: { title: string; description: string }[];
  outcomes: string[];
  audience: string;
  keywords: string[];
};

export const solutions: Solution[] = [
  {
    slug: "gestao-academica",
    eyebrow: "Gestão académica",
    title: "Turmas, disciplinas, notas e pautas no mesmo fluxo.",
    description:
      "Organize as rotinas pedagógicas e acompanhe a informação académica sem depender de ficheiros soltos.",
    intro:
      "O Djondzo liga turmas, disciplinas, professores, avaliações, pautas, tarefas e conteúdos. A informação lançada por cada perfil passa a fazer parte do mesmo registo escolar.",
    icon: GraduationCap,
    features: [
      { title: "Turmas e disciplinas", description: "Organização por classe, turma, turno, sala, disciplina e ano lectivo." },
      { title: "Notas e avaliações", description: "Lançamento de notas com regras de avaliação configuradas pela escola." },
      { title: "Pautas", description: "Consulta e exportação de pautas trimestrais, anuais e mapas académicos." },
      { title: "Tarefas e conteúdos", description: "Publicação de tarefas, materiais e conteúdos associados às turmas." },
    ],
    outcomes: [
      "Menos duplicação de informação entre secretaria, pedagógico e professores.",
      "Histórico académico organizado por aluno e ano lectivo.",
      "Dados preparados para relatórios e acompanhamento pedagógico.",
    ],
    audience: "Direcção, pedagógico, secretaria e professores.",
    keywords: ["gestão académica escolar", "notas escolares", "pautas escolares", "software para escolas"],
  },
  {
    slug: "gestao-financeira",
    eyebrow: "Gestão financeira",
    title: "Mensalidades, pagamentos e caixa com ligação ao aluno.",
    description:
      "Acompanhe cobranças, pagamentos, recibos, despesas e informação financeira sem separar o financeiro da realidade escolar.",
    intro:
      "Cada movimento financeiro pode ser acompanhado dentro do contexto da escola. O Djondzo permite controlar mensalidades, pagamentos, faturas, despesas, recebimentos e relatórios financeiros.",
    icon: BadgeDollarSign,
    features: [
      { title: "Mensalidades", description: "Cobranças por aluno com acompanhamento de estado, valores pendentes e pagamentos." },
      { title: "Recebimentos", description: "Registo de pagamentos e emissão dos documentos associados ao recebimento." },
      { title: "Despesas e caixa", description: "Saídas organizadas para apoiar o controlo financeiro diário." },
      { title: "Folha salarial", description: "Acompanhamento de salários de professores e funcionários da escola." },
    ],
    outcomes: [
      "Visão mais clara do que foi cobrado, recebido e ainda está pendente.",
      "Ligação entre a secretaria que recebe e a contabilidade que acompanha.",
      "Relatórios financeiros baseados nos movimentos registados no sistema.",
    ],
    audience: "Administração, secretaria e contabilidade.",
    keywords: ["gestão de mensalidades escolares", "software de propinas", "pagamentos escolares", "contabilidade escolar"],
  },
  {
    slug: "assiduidade",
    eyebrow: "Assiduidade",
    title: "Presenças e faltas acompanhadas por turma e disciplina.",
    description:
      "Registe a assiduidade e dê ao pedagógico uma visão clara sobre o cumprimento dos registos.",
    intro:
      "O professor regista a presença da turma e a equipa pedagógica acompanha os dados por aluno, turma, disciplina e data.",
    icon: CalendarCheck2,
    features: [
      { title: "Registo por aula", description: "Presenças associadas à turma, disciplina, professor e data." },
      { title: "Mapa de faltas", description: "Consulta do histórico e exportação de informação para acompanhamento." },
      { title: "Controlo pedagógico", description: "Identificação de turmas ou disciplinas sem registo de assiduidade." },
      { title: "Visão do aluno", description: "Consulta de presença e histórico no espaço destinado ao aluno." },
    ],
    outcomes: ["Menos registos dispersos.", "Acompanhamento pedagógico com dados por disciplina.", "Histórico de presenças disponível para consulta."],
    audience: "Professores, pedagógico, administração e alunos.",
    keywords: ["assiduidade escolar", "controlo de faltas", "presença alunos", "mapa de faltas escolar"],
  },
  {
    slug: "mediateca",
    eyebrow: "Mediateca",
    title: "Catálogo, exemplares, empréstimos e reservas.",
    description:
      "Organize a biblioteca escolar e permita que alunos e professores consultem e reservem livros.",
    intro:
      "A Mediateca do Djondzo junta catálogo, localização física, exemplares, empréstimos, reservas e regras de utilização num módulo ligado aos perfis da escola.",
    icon: LibraryBig,
    features: [
      { title: "Catálogo", description: "Pesquisa por livro, autor, edição e localização física." },
      { title: "Exemplares", description: "Controlo individual dos exemplares e do seu estado de disponibilidade." },
      { title: "Empréstimos", description: "Registo de entrega, prazo, devolução e renovação conforme as regras da escola." },
      { title: "Reservas", description: "Alunos e professores podem solicitar reservas pelos seus próprios espaços." },
    ],
    outcomes: [
      "Biblioteca escolar ligada aos utilizadores já existentes no sistema.",
      "Menos controlo manual de livros emprestados.",
      "Consulta do acervo antes de deslocar-se à mediateca.",
    ],
    audience: "Bibliotecário, alunos, professores e administração.",
    keywords: ["biblioteca escolar digital", "mediateca escolar", "empréstimo de livros escola", "reserva de livros"],
  },
  {
    slug: "professores",
    eyebrow: "Portal do professor",
    title: "O trabalho lectivo reunido num único espaço.",
    description: "Turmas, disciplinas, notas, assiduidade, tarefas e materiais disponíveis para o professor.",
    intro: "O portal do professor concentra as rotinas que normalmente ficam espalhadas entre cadernetas, folhas de cálculo e grupos de mensagens.",
    icon: School,
    features: [
      { title: "Turmas atribuídas", description: "Consulta das turmas e disciplinas leccionadas." },
      { title: "Notas e pautas", description: "Lançamento e consulta de avaliações dentro das regras da escola." },
      { title: "Assiduidade", description: "Registo de presenças e faltas directamente na turma e disciplina." },
      { title: "Tarefas e conteúdos", description: "Publicação de actividades, materiais e acompanhamento das submissões." },
    ],
    outcomes: ["Menos troca de ficheiros entre professor e pedagógico.", "Dados lectivos ligados directamente à turma e disciplina.", "Rotinas do professor acessíveis num único portal."],
    audience: "Professores e equipa pedagógica.",
    keywords: ["portal do professor", "lançamento de notas", "caderneta digital", "sistema escolar professor"],
  },
  {
    slug: "alunos",
    eyebrow: "Portal do aluno",
    title: "Informação escolar disponível sem depender da secretaria.",
    description: "O aluno consulta notas, tarefas, presenças, horário, financeiro e recursos disponíveis.",
    intro: "O Djondzo dá ao aluno um espaço próprio, ligado ao seu registo escolar e à sua turma.",
    icon: UsersRound,
    features: [
      { title: "Notas", description: "Consulta das avaliações e do resumo académico." },
      { title: "Calendário e horário", description: "Acompanhamento das aulas e actividades da turma." },
      { title: "Tarefas", description: "Consulta de actividades, prazos, conteúdos e estado de submissão." },
      { title: "Financeiro e biblioteca", description: "Consulta de cobranças pendentes e acesso aos recursos da biblioteca." },
    ],
    outcomes: ["O aluno consulta informação sem solicitar cada dado à secretaria.", "Maior clareza sobre tarefas, avaliações e situação financeira.", "Acesso web e móvel de acordo com o perfil."],
    audience: "Alunos e equipas que os acompanham.",
    keywords: ["portal do aluno", "aplicativo escolar aluno", "notas aluno online", "tarefas escolares online"],
  },
  {
    slug: "app-mobile",
    eyebrow: "Aplicação móvel",
    title: "O Djondzo também acompanha o aluno no telefone.",
    description: "Uma aplicação dedicada ao acesso rápido às principais informações do dia escolar.",
    intro: "A aplicação móvel foi organizada para o aluno consultar o que precisa com poucos passos, sem transformar o telefone numa cópia do painel administrativo.",
    icon: Smartphone,
    features: [
      { title: "Início", description: "Resumo com indicadores académicos, tarefas e informações do dia." },
      { title: "Calendário", description: "Horário semanal, aulas e acompanhamento de presenças." },
      { title: "Tarefas e notas", description: "Actividades, conteúdos, biblioteca e resultados académicos." },
      { title: "Financeiro e perfil", description: "Consulta de faturas pendentes e gestão dos dados do perfil." },
    ],
    outcomes: ["Acesso rápido às informações mais consultadas pelo aluno.", "Experiência pensada para uso móvel.", "Mesma base de dados do sistema escolar."],
    audience: "Alunos, com expansão prevista para outros perfis conforme o produto evolui.",
    keywords: ["app escolar", "aplicativo para alunos", "gestão escolar mobile", "Djondzo mobile"],
  },
  {
    slug: "whatsapp",
    eyebrow: "Comunicação",
    title: "Notificações ligadas ao que acontece no sistema.",
    description: "Use eventos do Djondzo para apoiar a comunicação com os utilizadores e encarregados.",
    intro: "As notificações podem acompanhar eventos como credenciais, lançamento de notas, tarefas, mensalidades, prazos e confirmação de pagamentos.",
    icon: MessageCircleMore,
    features: [
      { title: "Credenciais", description: "Fluxo de envio e reemissão de credenciais de acesso." },
      { title: "Académico", description: "Avisos relacionados com notas, tarefas e prazos lectivos." },
      { title: "Financeiro", description: "Mensagens associadas a mensalidades e confirmação de pagamentos." },
      { title: "Fila de envio", description: "Processamento controlado para não bloquear as operações do sistema." },
    ],
    outcomes: ["Comunicação baseada em eventos reais do sistema.", "Menos necessidade de avisos manuais repetitivos.", "Histórico operacional do processamento das mensagens."],
    audience: "Administração, secretaria, professores, alunos e encarregados.",
    keywords: ["WhatsApp escolar", "notificação escolar WhatsApp", "mensagem mensalidade aluno", "comunicação escola encarregado"],
  },
  {
    slug: "para-escolas",
    eyebrow: "Para escolas",
    title: "Um sistema que separa responsabilidades sem separar os dados.",
    description: "Cada perfil vê o que precisa, enquanto a escola trabalha sobre uma base comum de informação.",
    intro: "O Djondzo foi estruturado para diferentes áreas da escola: administração, pedagógico, secretaria, contabilidade, professores, bibliotecário e alunos.",
    icon: BookOpenCheck,
    features: [
      { title: "Administração", description: "Visão geral, configurações, utilizadores, indicadores e relatórios." },
      { title: "Secretaria", description: "Alunos, matrículas, turmas, renovação e processos administrativos." },
      { title: "Pedagógico", description: "Acompanhamento académico, pautas, assiduidade e transições." },
      { title: "Contabilidade", description: "Recebimentos, despesas, salários, caixa e controlo financeiro." },
    ],
    outcomes: ["Perfis separados por responsabilidade.", "Dados isolados por escola na arquitectura multi-instituição.", "Web, aplicação móvel e automações ligados à mesma operação."],
    audience: "Escolas, colégios e instituições de ensino.",
    keywords: ["sistema de gestão escolar Moçambique", "software para escolas Moçambique", "gestão escolar online", "Djondzo Escolar"],
  },
];

export const solutionMap = Object.fromEntries(solutions.map((solution) => [solution.slug, solution])) as Record<string, Solution>;
