"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    await new Promise((resolve) => setTimeout(resolve, 600));

    if (cpf && password) {
      router.push("/painel");
    } else {
      setError("Preencha todos os campos para continuar.");
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="login-shell">
        <div className="panel login-panel">
          <div className="login-logo">
            <span className="logo-mark logo-mark-lg">H</span>
          </div>
          <p className="eyebrow">Acesso do paciente</p>
          <h1 className="h1-small">Entrar no portal</h1>
          <p className="section-copy">
            Acesse o portal de autoatendimento para consultar sua agenda, acompanhar solicitacoes e
            iniciar atendimento por chat ou WhatsApp.
          </p>
          <form className="login-form" onSubmit={handleSubmit}>
            <label>
              CPF
              <input
                type="text"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </label>
            <label>
              Senha
              <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
          {error && <p className="status error">{error}</p>}
          <div className="login-links">
            <a href="/painel">Acessar demo sem login</a>
            <a href="/">Voltar ao inicio</a>
          </div>
          <div className="login-hint">
            <p className="section-copy">Simulacao: use qualquer CPF e senha para entrar, ou clique em &quot;Acessar demo sem login&quot;.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
