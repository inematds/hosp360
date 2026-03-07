const highlights = [
  {
    value: "24h",
    label: "portal de autoatendimento para pacientes",
  },
  {
    value: "WhatsApp",
    label: "canal direto para consulta de agenda e atendimento",
  },
  {
    value: "Telegram",
    label: "comunicacao interna e alertas operacionais da equipe",
  },
];

const patientJourney = [
  "Paciente acessa o portal, consulta especialidades e horarios disponiveis.",
  "Se preferir, continua a jornada pelo WhatsApp para consultar agenda e pedir atendimento.",
  "Recebe protocolo, confirmacao e orientacoes de comparecimento no mesmo fluxo.",
  "A equipe acompanha o caso e recebe alertas internos pelo Telegram.",
];

const modules = [
  {
    title: "Portal do paciente",
    description: "Acesso simples para login, consulta de agenda, historico de pedidos e orientacoes.",
  },
  {
    title: "Agenda multicanal",
    description: "Consulta de horarios pelo portal e pelo WhatsApp, com regras por especialidade e unidade.",
  },
  {
    title: "Atendimento do paciente",
    description: "Portal, WhatsApp e atendimento assistido conectados para orientar, confirmar e acompanhar.",
  },
  {
    title: "Comunicacao interna",
    description: "Telegram como canal operacional para alertas da recepcao, pendencias e avisos da equipe.",
  },
];

const dashboardItems = [
  { label: "Solicitacoes hoje", value: "128", tone: "teal" },
  { label: "Via WhatsApp", value: "61", tone: "gold" },
  { label: "Aguardando retorno", value: "19", tone: "ink" },
  { label: "Alertas Telegram", value: "12", tone: "rose" },
];

const pillars = [
  "Experiencia do paciente centrada em autosservico com apoio humano quando necessario.",
  "Consulta de agenda e atendimento por WhatsApp sem romper a jornada do paciente.",
  "Comunicacao interna da equipe com alertas operacionais via Telegram.",
  "Base pronta para integracao futura com HIS, faturamento e laboratorio.",
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero hero-home">
        <div className="hero-copy">
          <p className="eyebrow">Hosp360</p>
          <h1>Autoatendimento hospitalar desenhado para reduzir fila, ruido e retrabalho.</h1>
          <p className="lead">
            Esta demonstracao apresenta a frente inicial do produto: portal de relacionamento e
            agendamento para pacientes, consulta e atendimento por WhatsApp, comunicacao interna
            via Telegram e arquitetura preparada para crescimento hospitalar.
          </p>
          <div className="actions">
            <a href="#modulos" className="primary">
              Ver modulos
            </a>
            <a href="#painel" className="secondary">
              Ver painel demo
            </a>
          </div>
          <div className="metric-strip">
            {highlights.map((item) => (
              <div key={item.label} className="metric-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card hero-preview">
          <div className="preview-header">
            <span className="preview-chip">Demo principal</span>
            <span className="preview-chip muted">Portal + WhatsApp</span>
          </div>
          <div className="preview-panel">
            <div>
              <p className="preview-label">Especialidade</p>
              <strong>Cardiologia</strong>
            </div>
            <div>
              <p className="preview-label">Horario sugerido</p>
              <strong>10 Mar 2026 - 08:30</strong>
            </div>
            <div>
              <p className="preview-label">Status</p>
              <strong className="status-badge">Aguardando confirmacao</strong>
            </div>
          </div>
          <div className="preview-list">
            <div>
              <span>Paciente</span>
              <strong>Maria Silva</strong>
            </div>
            <div>
              <span>Canal</span>
              <strong>Portal + WhatsApp</strong>
            </div>
            <div>
              <span>Interno</span>
              <strong>Telegram da recepcao</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-three" id="modulos">
        {modules.map((module) => (
          <article key={module.title} className="panel feature-panel">
            <p className="eyebrow">Modulo</p>
            <h2>{module.title}</h2>
            <p className="section-copy">{module.description}</p>
          </article>
        ))}
      </section>

      <section className="split-section">
        <article className="panel">
          <p className="eyebrow">Jornada do paciente</p>
          <h2>Fluxo inicial de autoatendimento</h2>
          <ol className="journey-list">
            {patientJourney.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>

        <article className="panel">
          <p className="eyebrow">Pilares do produto</p>
          <h2>O que essa primeira fase precisa provar</h2>
          <ul className="pillar-list">
            {pillars.map((pillar) => (
              <li key={pillar}>{pillar}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panel dashboard-demo" id="painel">
        <div className="dashboard-head">
          <div>
            <p className="eyebrow">Painel demo</p>
            <h2>Visao operacional da recepcao</h2>
          </div>
          <p className="section-copy">
            Exemplo visual de como a equipe acompanha volume, confirmacoes e pendencias.
          </p>
        </div>

        <div className="dashboard-grid">
          {dashboardItems.map((item) => (
            <article key={item.label} className={`dashboard-card ${item.tone}`}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>

        <div className="operations-layout">
          <div className="operations-card">
            <h3>Fila de solicitacoes</h3>
            <ul>
              <li>Cardiologia - Maria Silva - 08:30</li>
              <li>Pediatria - Lucas Souza - 09:00</li>
              <li>Ortopedia - Ana Costa - 14:00</li>
            </ul>
          </div>
          <div className="operations-card">
            <h3>Alertas operacionais no Telegram</h3>
            <ul>
              <li>3 pacientes aguardando retorno da recepcao</li>
              <li>2 horarios liberados por cancelamento</li>
              <li>1 solicitacao precisa validar convenio</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
