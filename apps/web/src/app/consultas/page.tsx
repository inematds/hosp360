"use client";

import { useState } from "react";
import { appointmentRequests } from "../../lib/mock-data";

const statusLabel: Record<string, string> = {
  pendente: "Pendente",
  confirmado: "Confirmado",
  cancelado: "Cancelado",
  realizado: "Realizado",
};

const allStatuses = ["todos", "pendente", "confirmado", "cancelado", "realizado"] as const;

export default function ConsultasPage() {
  const [filter, setFilter] = useState<string>("todos");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = filter === "todos"
    ? appointmentRequests
    : appointmentRequests.filter((r) => r.status === filter);

  const selected = appointmentRequests.find((r) => r.id === selectedId);

  return (
    <main className="page">
      <section className="topbar">
        <div>
          <p className="eyebrow">Historico</p>
          <h1 className="h1-small">Minhas consultas</h1>
        </div>
        <a href="/agendamento" className="primary">Novo agendamento</a>
      </section>

      <div className="filter-bar">
        {allStatuses.map((s) => (
          <button
            key={s}
            className={`filter-btn${filter === s ? " filter-active" : ""}`}
            onClick={() => setFilter(s)}
          >
            {s === "todos" ? "Todas" : statusLabel[s]}
          </button>
        ))}
      </div>

      <div className="consultas-layout">
        <div className="panel">
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Protocolo</th>
                  <th>Especialidade</th>
                  <th>Profissional</th>
                  <th>Data</th>
                  <th>Local</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((req) => (
                  <tr
                    key={req.id}
                    className={`clickable-row${selectedId === req.id ? " row-selected" : ""}`}
                    onClick={() => setSelectedId(req.id)}
                  >
                    <td><strong>{req.protocol}</strong></td>
                    <td>{req.specialty}</td>
                    <td>{req.slot.professional}</td>
                    <td>{req.slot.date} {req.slot.time}</td>
                    <td>{req.slot.location}</td>
                    <td><span className={`tag tag-${req.status}`}>{statusLabel[req.status]}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selected && (
          <div className="panel detail-panel">
            <p className="eyebrow">Detalhes da solicitacao</p>
            <h2>{selected.specialty}</h2>
            <div className="detail-list">
              <div><span className="detail-label">Protocolo</span><strong>{selected.protocol}</strong></div>
              <div><span className="detail-label">Profissional</span><strong>{selected.slot.professional}</strong></div>
              <div><span className="detail-label">Data</span><strong>{selected.slot.date}</strong></div>
              <div><span className="detail-label">Horario</span><strong>{selected.slot.time}</strong></div>
              <div><span className="detail-label">Local</span><strong>{selected.slot.location}</strong></div>
              <div><span className="detail-label">Motivo</span><strong>{selected.reason}</strong></div>
              <div><span className="detail-label">Status</span><span className={`tag tag-${selected.status}`}>{statusLabel[selected.status]}</span></div>
              <div><span className="detail-label">Solicitado em</span><strong>{new Date(selected.createdAt).toLocaleString("pt-BR")}</strong></div>
            </div>
            {selected.status === "pendente" && (
              <div className="actions mt-24">
                <button className="primary small-btn" onClick={() => alert("Simulacao: consulta confirmada!")}>Confirmar</button>
                <button className="secondary small-btn" onClick={() => alert("Simulacao: consulta cancelada!")}>Cancelar</button>
              </div>
            )}
            {selected.status === "confirmado" && (
              <div className="actions mt-24">
                <button className="secondary small-btn" onClick={() => alert("Simulacao: solicitacao de remarcacao enviada!")}>Solicitar remarcacao</button>
                <button className="secondary small-btn" onClick={() => alert("Simulacao: consulta cancelada!")}>Cancelar consulta</button>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
