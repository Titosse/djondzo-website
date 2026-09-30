import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  BookCopy,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Download,
  Megaphone,
  FileDown,
  FileSpreadsheet,
  Filter,
  GraduationCap,
  Library,
  MapPin,
  MessageCircleMore,
  Printer,
  RefreshCw,
  Upload,
  UserCheck,
  UserX,
  Users,
  Wallet,
} from "lucide-react";
import { DjondzoMark } from "@/components/brand";

function WindowShell({
  area,
  children,
  nav,
}: {
  area: string;
  children: React.ReactNode;
  nav: string[];
}) {
  return (
    <div className="dj-window" aria-hidden="true">
      <div className="dj-window-topbar">
        <div className="flex items-center gap-2.5">
          <DjondzoMark size={28} />
          <div>
            <p className="text-xs font-semibold text-[var(--color-text)]">Djondzo</p>
            <p className="text-[10px] text-[var(--color-text-muted)]">{area}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-[10px] text-[var(--color-text-muted)] sm:inline">
            Ambiente de demonstração
          </span>
          <span className="grid h-8 w-8 place-items-center rounded-[8px] border border-[var(--color-border)] bg-white text-[var(--color-text-muted)]">
            <Bell size={13} />
          </span>
        </div>
      </div>
      <div className="dj-window-layout">
        <aside className="dj-window-sidebar">
          {nav.map((item, index) => (
            <div key={item} className={`dj-window-nav ${index === 0 ? "is-active" : ""}`}>
              <span className="dj-window-nav-dot" />
              <span>{item}</span>
            </div>
          ))}
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}

function PlaceholderValue() {
  return <span className="tabular-nums">—</span>;
}

export function AdminDashboardPreview({ compact = false }: { compact?: boolean }) {
  return (
    <WindowShell
      area="Administração"
      nav={["Dashboard", "Estudantes", "Matrículas", "Professores", "Turmas", "Tesouraria"]}
    >
      <div className={`dj-preview-body ${compact ? "dj-preview-body-compact" : ""}`}>
        <div className="dj-preview-pagehead">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="dj-preview-chip">Administração</span>
              <span className="dj-preview-status"><span /> Sistema operacional</span>
            </div>
            <h3 className="dj-preview-title">Boa tarde, Administrador</h3>
            <p className="dj-preview-meta">
              <CalendarDays size={12} /> 30 de Setembro de 2026 · Escola de demonstração
            </p>
          </div>
          <button type="button" className="dj-preview-primary" tabIndex={-1}>
            + Nova acção
          </button>
        </div>

        <section className="dj-finance-priority">
          <div className="dj-finance-priority-head">
            <div className="flex items-center gap-3">
              <span className="dj-finance-icon"><Wallet size={18} /></span>
              <div>
                <p className="dj-preview-kicker">Prioridade administrativa</p>
                <h4>Estado Financeiro</h4>
              </div>
            </div>
            <span className="dj-state-neutral">Demonstração</span>
          </div>
          <p className="dj-finance-description">
            Entradas, saídas, dívida exigível e cobranças futuras reunidas no mesmo acompanhamento.
          </p>
          <div className="dj-finance-metrics">
            {[
              [ArrowUpRight, "Entradas", "success"],
              [ArrowDownRight, "Saídas", "danger"],
              [AlertTriangle, "Em dívida", "warning"],
              [CalendarDays, "A receber", "info"],
            ].map(([Icon, label, tone]) => {
              const I = Icon as typeof ArrowUpRight;
              return (
                <div key={String(label)} className="dj-finance-metric">
                  <div className={`dj-finance-metric-label tone-${tone}`}>
                    <I size={12} /> {String(label)}
                  </div>
                  <strong><PlaceholderValue /> MTn</strong>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </WindowShell>
  );
}

export function FinancePreview() {
  return (
    <WindowShell
      area="Tesouraria"
      nav={["Gestão Financeira", "Recebimentos", "Despesas", "Folha salarial", "Relatórios"]}
    >
      <div className="dj-preview-body">
        <div className="dj-preview-pagehead">
          <div>
            <div className="flex items-center gap-2">
              <p className="dj-preview-kicker text-[var(--color-action)]">Gestão financeira</p>
              <span className="dj-state-success">Financeiro activo</span>
            </div>
            <h3 className="dj-preview-title">Gestão Financeira</h3>
            <p className="dj-preview-description">
              Controle receitas, mensalidades, despesas e saldos da escola.
            </p>
          </div>
          <div className="dj-preview-actions">
            <button type="button" className="dj-preview-secondary" tabIndex={-1}><FileDown size={12} /> PDF</button>
            <button type="button" className="dj-preview-secondary" tabIndex={-1}><FileSpreadsheet size={12} /> Excel</button>
            <button type="button" className="dj-preview-primary" tabIndex={-1}><Upload size={12} /> Importar Financeiro</button>
          </div>
        </div>

        <div className="dj-kpi-strip">
          {[
            ["Total de entradas", ArrowUpRight, "success"],
            ["Total de saídas", ArrowDownRight, "danger"],
            ["Saldo actual", Wallet, "info"],
            ["Dívidas totais", CircleDollarSign, "warning"],
          ].map(([label, Icon, tone]) => {
            const I = Icon as typeof Wallet;
            return (
              <div key={String(label)} className="dj-kpi-cell">
                <div className={`dj-kpi-icon tone-${tone}`}><I size={14} /></div>
                <span>{String(label)}</span>
                <strong><PlaceholderValue /> MTn</strong>
              </div>
            );
          })}
        </div>

        <section className="dj-import-panel">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Upload size={15} className="text-[var(--color-action)]" />
                <h4>Importação Financeira</h4>
              </div>
              <p>Dados antigos da escola podem entrar no controlo financeiro do Djondzo.</p>
            </div>
            <span className="dj-state-neutral">Excel / XLSX</span>
          </div>
          <div className="dj-import-options">
            <span>Saldo inicial</span><span>Mensalidades</span><span>Despesas</span>
          </div>
        </section>
      </div>
    </WindowShell>
  );
}

export function PautasPreview() {
  return (
    <WindowShell
      area="Gestão académica"
      nav={["Notas", "Pautas", "Assiduidade", "Ano Lectivo", "Horário", "Relatórios"]}
    >
      <div className="dj-preview-body">
        <div className="dj-preview-pagehead">
          <div>
            <p className="dj-preview-kicker text-[var(--color-action)]">Gestão académica</p>
            <h3 className="dj-preview-title">Pautas académicas</h3>
            <p className="dj-preview-description">
              Cadernetas, pautas de frequência e boletins com os dados académicos da escola.
            </p>
          </div>
          <div className="dj-preview-actions">
            <button type="button" className="dj-preview-secondary" tabIndex={-1}><FileDown size={12} /> PDF</button>
            <button type="button" className="dj-preview-secondary" tabIndex={-1}><Printer size={12} /> Imprimir</button>
            <button type="button" className="dj-preview-primary" tabIndex={-1}><RefreshCw size={12} /> Gerar documento</button>
          </div>
        </div>

        <div className="dj-filter-panel">
          <div className="dj-filter-title"><Filter size={14} /> Filtros do documento</div>
          <div className="dj-filter-grid">
            {[
              ["Documento", "Caderneta"],
              ["Turma", "5ª Classe — 5ª A"],
              ["Disciplina", "Matemática"],
              ["Período", "1º Trimestre"],
            ].map(([label, value]) => (
              <label key={label}>
                <span>{label}</span>
                <div>{value}</div>
              </label>
            ))}
          </div>
        </div>

        <div className="dj-document-preview">
          <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-3">
            <div>
              <strong>Caderneta</strong>
              <span>ACS1 · ACS2 · AT · Médias</span>
            </div>
            <span className="dj-state-neutral">Ano lectivo 2026</span>
          </div>
          <div className="dj-document-table">
            <span>Nº</span><span>Aluno</span><span>ACS1</span><span>ACS2</span><span>AT</span><span>Média</span>
            {[1,2,3].flatMap((row) => [
              <span key={`${row}-n`}>{row}</span>,
              <span key={`${row}-a`}>Aluno de demonstração</span>,
              <span key={`${row}-1`}>—</span>,
              <span key={`${row}-2`}>—</span>,
              <span key={`${row}-3`}>—</span>,
              <span key={`${row}-m`}>—</span>,
            ])}
          </div>
        </div>
      </div>
    </WindowShell>
  );
}

export function MediatecaPreview() {
  return (
    <WindowShell
      area="Mediateca Escolar"
      nav={["Visão geral", "Catálogo", "Exemplares", "Empréstimos", "Reservas", "Localizações"]}
    >
      <div className="dj-preview-body">
        <div className="dj-preview-pagehead">
          <div>
            <p className="dj-preview-kicker text-[var(--color-action)]">Mediateca Escolar</p>
            <h3 className="dj-preview-title">Gestão da Mediateca</h3>
            <p className="dj-preview-description">
              Catálogo, localização, exemplares, empréstimos e reservas num único lugar.
            </p>
          </div>
          <button type="button" className="dj-preview-primary" tabIndex={-1}>Novo empréstimo</button>
        </div>

        <div className="dj-mediateca-tabs">
          {['Visão geral','Catálogo','Exemplares','Empréstimos','Reservas','Localizações'].map((item,index)=>(
            <span key={item} className={index===0?'is-active':''}>{item}</span>
          ))}
        </div>

        <div className="dj-mediateca-kpis">
          {[
            [BookOpen,'Títulos'],[BookCopy,'Exemplares'],[CheckCircle2,'Disponíveis'],[Users,'Emprestados'],[AlertTriangle,'Em atraso'],[Clock3,'Reservas activas']
          ].map(([Icon,label])=>{ const I=Icon as typeof BookOpen; return (
            <div key={String(label)}><I size={14}/><span>{String(label)}</span><strong>—</strong></div>
          )})}
        </div>

        <div className="dj-mediateca-list">
          <div className="dj-mediateca-list-head"><strong>Circulação recente</strong><span>Estado</span></div>
          {[
            ['Livro de demonstração','Aluno · Devolução prevista','Em curso'],
            ['Manual de referência','Professor · Reserva','Reservado'],
            ['Obra do catálogo','Aluno · Fila de reserva','Em espera'],
          ].map(([title,meta,state])=>(
            <div key={title}><span className="dj-book-mark"><Library size={13}/></span><span><strong>{title}</strong><small>{meta}</small></span><em>{state}</em></div>
          ))}
        </div>
      </div>
    </WindowShell>
  );
}


export function AttendancePreview() {
  return (
    <WindowShell
      area="Assiduidade"
      nav={["Assiduidade", "Turmas", "Presenças", "Mapa de faltas", "Relatórios"]}
    >
      <div className="dj-preview-body">
        <div className="dj-preview-pagehead">
          <div>
            <p className="dj-preview-kicker text-[var(--color-action)]">Ano lectivo 2026</p>
            <h3 className="dj-preview-title">Assiduidade</h3>
            <p className="dj-preview-description">
              Monitorização de presença, faltas, atrasos e desempenho de frequência dos estudantes.
            </p>
          </div>
          <div className="dj-preview-actions">
            <button type="button" className="dj-preview-secondary" tabIndex={-1}><FileDown size={12}/> PDF</button>
            <button type="button" className="dj-preview-secondary" tabIndex={-1}><Upload size={12}/> Importar mapa</button>
            <button type="button" className="dj-preview-primary" tabIndex={-1}><Download size={12}/> Mapa de faltas</button>
          </div>
        </div>
        <div className="dj-kpi-strip">
          {[
            ["Taxa de Presença", CheckCircle2, "success"],
            ["Presentes", UserCheck, "info"],
            ["Faltas", UserX, "danger"],
            ["Atrasos", Clock3, "warning"],
          ].map(([label, Icon, tone]) => {
            const I = Icon as typeof CheckCircle2;
            return (
              <div key={String(label)} className="dj-kpi-cell">
                <div className={`dj-kpi-icon tone-${tone}`}><I size={14}/></div>
                <span>{String(label)}</span>
                <strong>—</strong>
              </div>
            );
          })}
        </div>
        <div className="dj-attendance-panel">
          <div className="flex items-center justify-between gap-4">
            <div>
              <strong>Presença por Turma</strong>
              <span>Percentagem de presença dos estudantes</span>
            </div>
            <span className="dj-state-neutral">Demonstração</span>
          </div>
          <div className="dj-attendance-bars">
            {[74,88,66,92,81].map((value,index)=>(
              <div key={index}><span>{['5ª A','6ª B','7ª A','8ª B','9ª A'][index]}</span><i><b style={{width:`${value}%`}} /></i><em>—</em></div>
            ))}
          </div>
        </div>
      </div>
    </WindowShell>
  );
}

export function CommunicationPreview() {
  return (
    <WindowShell
      area="Comunicação"
      nav={["Comunicação", "Modelos", "Histórico", "WhatsApp", "Configurações"]}
    >
      <div className="dj-preview-body">
        <div className="dj-preview-pagehead">
          <div>
            <p className="dj-preview-kicker text-[var(--color-action)]">Comunicação escolar</p>
            <h3 className="dj-preview-title">Comunicação</h3>
            <p className="dj-preview-description">Envia avisos por WhatsApp e/ou SMS para grupos da escola.</p>
          </div>
          <span className="dj-state-neutral">Histórico disponível</span>
        </div>
        <div className="dj-communication-panel">
          <div className="dj-communication-section">
            <div className="flex items-center gap-2"><Megaphone size={14} className="text-[var(--color-action)]"/><strong>Novo comunicado</strong></div>
            <p>Escolhe o público, o(s) canal(is) e escreve a mensagem.</p>
          </div>
          <div className="dj-communication-grid">
            <div>
              <span>Para quem?</span>
              <div className="dj-choice-row"><b>Alunos</b><b>Professores</b><b>Encarregados</b></div>
            </div>
            <div>
              <span>Por onde?</span>
              <div className="dj-choice-row"><b><MessageCircleMore size={11}/> WhatsApp</b><b>SMS</b></div>
            </div>
          </div>
          <label className="dj-message-preview">
            <span>Mensagem</span>
            <div>Escreve o comunicado...</div>
          </label>
          <button type="button" className="dj-preview-primary" tabIndex={-1}>Enviar comunicado</button>
        </div>
      </div>
    </WindowShell>
  );
}
export function StudentPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`dj-student-preview ${compact ? "is-compact" : ""}`} aria-hidden="true">
      <div className="dj-student-top">
        <div>
          <span>Boa tarde,</span>
          <strong>Aluno</strong>
          <small>5ª Classe — 5ª A · Ano Lectivo 2026</small>
        </div>
        <span className="dj-online"><i /> Online</span>
      </div>
      <div className="dj-student-kpis">
        {[
          [BookOpen,'Disciplinas','activas este ano'],
          [Clock3,'Tarefas Pendentes','para entregar'],
          [CheckCircle2,'Presença','taxa de comparência'],
          [GraduationCap,'Média Geral','de 20 valores'],
        ].map(([Icon,label,sub])=>{ const I=Icon as typeof BookOpen; return (
          <div key={String(label)}><I size={15}/><span>{String(label)}</span><strong>—</strong><small>{String(sub)}</small></div>
        )})}
      </div>
      <div className="dj-student-schedule">
        <div className="flex items-center justify-between"><strong>Horário semanal</strong><span>5ª A</span></div>
        <div className="dj-schedule-grid">
          <span>Hora</span><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span>
          {['07:00','08:00'].flatMap((hour,row)=>[
            <span key={`${hour}-h`}>{hour}</span>,
            ...['Mat.','Port.','C. Soc.','C. Nat.','Ed. F.'].map((s,i)=><span key={`${hour}-${i}`} className={(row+i)%2===0?'has-class':''}>{s}</span>)
          ])}
        </div>
      </div>
    </div>
  );
}

export function SolutionProductPreview({ slug }: { slug: string }) {
  if (["gestao-academica", "professores"].includes(slug)) return <PautasPreview />;
  if (slug === "assiduidade") return <AttendancePreview />;
  if (slug === "gestao-financeira") return <FinancePreview />;
  if (slug === "mediateca") return <MediatecaPreview />;
  if (["alunos", "app-mobile"].includes(slug)) return <StudentPreview />;
  if (slug === "whatsapp") return <CommunicationPreview />;
  return <AdminDashboardPreview />;
}
