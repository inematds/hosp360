const priorities = [
  "Login e autenticacao do paciente",
  "Consulta de agenda por especialidade",
  "Solicitacao e acompanhamento de agendamentos",
  "Chat inicial para atendimento humano",
];

const roadmap = [
  "Sprint 0: definicao funcional e regras de agenda",
  "Sprint 1: fundacao tecnica e infraestrutura",
  "Sprint 2: cadastro e acesso do paciente",
  "Sprint 3: agenda, solicitacao, confirmacao e cancelamento",
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">CRMHosp</p>
          <h1>Autoatendimento para pacientes com base preparada para crescimento hospitalar.</h1>
          <p className="lead">
            Esta base inicial organiza o portal do paciente, a API de autoatendimento e a
            infraestrutura necessaria para autenticacao, agenda e atendimento digital.
          </p>
          <div className="actions">
            <a href="#roadmap" className="primary">Ver entregas iniciais</a>
            <a href="http://localhost:3001/health" className="secondary">Testar health da API</a>
          </div>
        </div>
        <div className="hero-card">
          <h2>Infraestrutura definida</h2>
          <ul>
            <li>Frontend: Next.js</li>
            <li>Backend: NestJS</li>
            <li>Banco: PostgreSQL</li>
            <li>Auth: Keycloak</li>
            <li>Atendimento: Chatwoot</li>
          </ul>
        </div>
      </section>

      <section className="grid">
        <article className="panel">
          <h2>Prioridades de produto</h2>
          <ul>
            {priorities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel" id="roadmap">
          <h2>Roadmap inicial</h2>
          <ol>
            {roadmap.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>
      </section>
    </main>
  );
}

