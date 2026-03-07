"use client";

import { useState } from "react";
import { mockPatient, appointmentRequests, notifications } from "../../lib/mock-data";

const statusLabel: Record<string, string> = {
  pendente: "Pendente",
  confirmado: "Confirmado",
  cancelado: "Cancelado",
  realizado: "Realizado",
};

export default function PainelPage() {
  const [tab, setTab] = useState<"resumo" | "perfil">("resumo");

  const proximaConsulta = appointmentRequests.find((r) => r.status === "confirmado");
  const pendentes = appointmentRequests.filter((r) => r.status === "pendente").length;
  const unreadNotifications = notifications.filter((n) => !n.read).length;

  return (
    <main className="page">
      <section className="topbar">
        <div>
          <p className="eyebrow">Painel do paciente</p>
          <h1 className="h1-small">Ola, {mockPatient.name.split(" ")[0]}</h1>
        </div>
        <div className="actions">
          <a href="/agendamento" className="primary">Novo agendamento</a>
          <a href="/atendimento" className="secondary">Abrir atendimento</a>
        </div>
      </section>

      <div className="tab-bar">
        <button className={`tab-btn${tab === "resumo" ? " tab-active" : ""}`} onClick={() => setTab("resumo")}>Resumo</button>
        <button className={`tab-btn${tab === "perfil" ? " tab-active" : ""}`} onClick={() => setTab("perfil")}>Meu perfil</button>
      </div>

      {tab === "resumo" && (
        <>
          <div className="dashboard-grid dashboard-grid-3">
            <article className="dashboard-card teal">
              <span>Proxima consulta</span>
              <strong>{proximaConsulta ? `${proximaConsulta.slot.date} ${proximaConsulta.slot.time}` : "Nenhuma"}</strong>
            </article>
            <article className="dashboard-card gold">
              <span>Solicitacoes pendentes</span>
              <strong>{pendentes}</strong>
            </article>
            <article className="dashboard-card ink">
              <span>Notificacoes nao lidas</span>
              <strong>{unreadNotifications}</strong>
            </article>
          </div>

          {proximaConsulta && (
            <section className="panel mt-24">
              <p className="eyebrow">Proxima consulta confirmada</p>
              <h2>{proximaConsulta.specialty}</h2>
              <div className="detail-grid">
                <div><span className="detail-label">Profissional</span><strong>{proximaConsulta.slot.professional}</strong></div>
                <div><span className="detail-label">Data</span><strong>{proximaConsulta.slot.date}</strong></div>
                <div><span className="detail-label">Horario</span><strong>{proximaConsulta.slot.time}</strong></div>
                <div><span className="detail-label">Local</span><strong>{proximaConsulta.slot.location}</strong></div>
                <div><span className="detail-label">Protocolo</span><strong>{proximaConsulta.protocol}</strong></div>
                <div><span className="detail-label">Status</span><span className={`tag tag-${proximaConsulta.status}`}>{statusLabel[proximaConsulta.status]}</span></div>
              </div>
            </section>
          )}

          <section className="panel mt-24">
            <div className="panel-header">
              <div>
                <p className="eyebrow">Historico recente</p>
                <h2>Ultimas solicitacoes</h2>
              </div>
              <a href="/consultas" className="secondary small-btn">Ver todas</a>
            </div>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Protocolo</th>
                    <th>Especialidade</th>
                    <th>Data</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointmentRequests.map((req) => (
                    <tr key={req.id}>
                      <td><strong>{req.protocol}</strong></td>
                      <td>{req.specialty}</td>
                      <td>{req.slot.date} {req.slot.time}</td>
                      <td><span className={`tag tag-${req.status}`}>{statusLabel[req.status]}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="panel mt-24">
            <p className="eyebrow">Canais de atendimento</p>
            <h2>Como voce pode nos contatar</h2>
            <div className="channel-grid">
              <div className="channel-card">
                <div className="channel-icon whatsapp-icon">W</div>
                <h3>WhatsApp</h3>
                <p>Consulte sua agenda, confirme consultas e tire duvidas direto pelo WhatsApp.</p>
                <span className="tag tag-confirmado">Ativo</span>
              </div>
              <div className="channel-card">
                <div className="channel-icon chat-icon">C</div>
                <h3>Chat do Portal</h3>
                <p>Inicie uma conversa com nossa equipe diretamente pelo portal.</p>
                <a href="/atendimento" className="tag tag-confirmado">Abrir chat</a>
              </div>
              <div className="channel-card">
                <div className="channel-icon telegram-icon">T</div>
                <h3>Telegram (Equipe)</h3>
                <p>Canal interno para alertas e comunicacao operacional da equipe.</p>
                <span className="tag tag-pendente">Interno</span>
              </div>
            </div>
          </section>
        </>
      )}

      {tab === "perfil" && (
        <section className="panel mt-24">
          <p className="eyebrow">Dados cadastrais</p>
          <h2>Perfil do paciente</h2>
          <div className="profile-form">
            <label>
              Nome completo
              <input type="text" value={mockPatient.name} readOnly />
            </label>
            <label>
              CPF
              <input type="text" value={mockPatient.document} readOnly />
            </label>
            <label>
              E-mail
              <input type="email" value={mockPatient.email} readOnly />
            </label>
            <label>
              Telefone / WhatsApp
              <input type="tel" value={mockPatient.phone} readOnly />
            </label>
            <label>
              Data de nascimento
              <input type="text" value={mockPatient.birthDate} readOnly />
            </label>
            <label>
              Endereco
              <input type="text" value={mockPatient.address} readOnly />
            </label>
          </div>
          <p className="section-copy mt-24">Alteracoes cadastrais devem ser solicitadas na recepcao ou pelo atendimento via WhatsApp.</p>
        </section>
      )}
    </main>
  );
}
