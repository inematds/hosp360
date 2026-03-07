export default function LoginPage() {
  return (
    <main className="page">
      <section className="login-shell">
        <div className="panel login-panel">
          <p className="eyebrow">Acesso do paciente</p>
          <h1>Login inicial do portal</h1>
          <p className="section-copy">
            Esta tela antecipa a integracao com Keycloak. Por enquanto, ela define a experiencia e
            a estrutura de acesso do autoatendimento.
          </p>
          <form className="login-form">
            <label>
              CPF
              <input type="text" placeholder="000.000.000-00" />
            </label>
            <label>
              Senha
              <input type="password" placeholder="Digite sua senha" />
            </label>
            <button type="submit">Entrar</button>
          </form>
          <div className="login-links">
            <a href="/agendamento">Ir para o agendamento piloto</a>
            <a href="/">Voltar ao inicio</a>
          </div>
        </div>
      </section>
    </main>
  );
}
