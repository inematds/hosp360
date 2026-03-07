"use client";

import { useState } from "react";
import { adminQueue, adminStats, telegramAlerts, specialties } from "../../lib/mock-data";

const statusLabel: Record<string, string> = {
  pendente: "Pendente",
  confirmado: "Confirmado",
  cancelado: "Cancelado",
};

export default function AdminPage() {
  const [tab, setTab] = useState<"fila" | "alertas" | "agenda">("fila");
  const [queueFilter, setQueueFilter] = useState<string>("todos");

  const filteredQueue = queueFilter === "todos"
    ? adminQueue
    : adminQueue.filter((q) => q.status === queueFilter);

  return (
    <main className="page">
      <section className="topbar">
        <div>
          <p className="eyebrow">Administracao</p>
          <h1 className="h1-small">Painel operacional</h1>
        </div>
        <span className="user-badge">Perfil: Atendente</span>
      </section>

      <div className="dashboard-grid">
        <article className="dashboard-card teal">
          <span>Total de solicitacoes</span>
          <strong>{adminStats.total}</strong>
        </article>
        <article className="dashboard-card gold">
          <span>Confirmadas</span>
          <strong>{adminStats.confirmados}</strong>
        </article>
        <article className="dashboard-card ink">
          <span>Pendentes</span>
          <strong>{adminStats.pendentes}</strong>
        </article>
        <article className="dashboard-card rose">
          <span>Canceladas</span>
          <strong>{adminStats.cancelados}</strong>
        </article>
      </div>

      <div className="dashboard-grid dashboard-grid-3 mt-24">
        <article className="operations-card">
          <h3>Portal Web</h3>
          <strong className="stat-big">{adminStats.portalWeb}</strong>
          <p className="section-copy">solicitacoes</p>
        </article>
        <article className="operations-card">
          <h3>WhatsApp</h3>
          <strong className="stat-big">{adminStats.whatsapp}</strong>
          <p className="section-copy">solicitacoes</p>
        </article>
        <article className="operations-card">
          <h3>Alertas Telegram</h3>
          <strong className="stat-big">{adminStats.telegram}</strong>
          <p className="section-copy">enviados hoje</p>
        </article>
      </div>

      <div className="tab-bar mt-24">
        <button className={`tab-btn${tab === "fila" ? " tab-active" : ""}`} onClick={() => setTab("fila")}>Fila de solicitacoes</button>
        <button className={`tab-btn${tab === "alertas" ? " tab-active" : ""}`} onClick={() => setTab("alertas")}>Alertas Telegram</button>
        <button className={`tab-btn${tab === "agenda" ? " tab-active" : ""}`} onClick={() => setTab("agenda")}>Agendas publicadas</button>
      </div>

      {tab === "fila" && (
        <section className="panel mt-24">
          <div className="panel-header">
            <h2>Fila de solicitacoes</h2>
            <div className="filter-bar">
              {["todos", "pendente", "confirmado", "cancelado"].map((s) => (
                <button key={s} className={`filter-btn${queueFilter === s ? " filter-active" : ""}`} onClick={() => setQueueFilter(s)}>
                  {s === "todos" ? "Todos" : statusLabel[s]}
                </button>
              ))}
            </div>
          </div>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Protocolo</th>
                  <th>Paciente</th>
                  <th>Especialidade</th>
                  <th>Data</th>
                  <th>Horario</th>
                  <th>Canal</th>
                  <th>Status</th>
                  <th>Acoes</th>
                </tr>
              </thead>
              <tbody>
                {filteredQueue.map((q) => (
                  <tr key={q.id}>
                    <td><strong>{q.protocol}</strong></td>
                    <td>{q.patient}</td>
                    <td>{q.specialty}</td>
                    <td>{q.date}</td>
                    <td>{q.time}</td>
                    <td><span className={`tag tag-channel tag-channel-${q.channel.toLowerCase()}`}>{q.channel}</span></td>
                    <td><span className={`tag tag-${q.status}`}>{statusLabel[q.status]}</span></td>
                    <td>
                      {q.status === "pendente" && (
                        <div className="actions-inline">
                          <button className="mini-btn confirm-btn" onClick={() => alert(`Simulacao: ${q.protocol} confirmado!`)}>Confirmar</button>
                          <button className="mini-btn cancel-btn" onClick={() => alert(`Simulacao: ${q.protocol} cancelado!`)}>Recusar</button>
                        </div>
                      )}
                      {q.status !== "pendente" && <span className="muted-text">--</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {tab === "alertas" && (
        <section className="panel mt-24">
          <h2>Alertas do Telegram</h2>
          <p className="section-copy">Alertas operacionais enviados para o canal interno da equipe.</p>
          <div className="alerts-list">
            {telegramAlerts.map((alert) => (
              <article key={alert.id} className={`alert-card alert-${alert.priority}`}>
                <div className="alert-header">
                  <span className={`tag tag-priority tag-priority-${alert.priority}`}>{alert.priority}</span>
                  <span className="notification-date">{alert.time}</span>
                </div>
                <p>{alert.message}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {tab === "agenda" && (
        <section className="panel mt-24">
          <h2>Agendas publicadas</h2>
          <p className="section-copy">Especialidades com agenda ativa para autoatendimento.</p>
          <div className="agenda-grid">
            {specialties.map((spec) => (
              <article key={spec.id} className="agenda-card">
                <h3>{spec.name}</h3>
                <p className="section-copy">{spec.description}</p>
                <span className="tag tag-confirmado">Agenda ativa</span>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
