"use client";

import { useState } from "react";
import { notifications as initialNotifications, type Notification } from "../../lib/mock-data";

const typeLabel: Record<string, string> = {
  confirmacao: "Confirmacao",
  lembrete: "Lembrete",
  cancelamento: "Cancelamento",
  info: "Informacao",
  whatsapp: "WhatsApp",
  telegram: "Telegram",
};

const typeFilters = ["todas", "confirmacao", "lembrete", "cancelamento", "info", "whatsapp", "telegram"] as const;

export default function NotificacoesPage() {
  const [items, setItems] = useState<Notification[]>(initialNotifications);
  const [filter, setFilter] = useState<string>("todas");

  const filtered = filter === "todas" ? items : items.filter((n) => n.type === filter);
  const unread = items.filter((n) => !n.read).length;

  function markAllRead() {
    setItems((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  function toggleRead(id: string) {
    setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n)));
  }

  return (
    <main className="page">
      <section className="topbar">
        <div>
          <p className="eyebrow">Comunicacao</p>
          <h1 className="h1-small">Notificacoes</h1>
        </div>
        <div className="actions">
          {unread > 0 && (
            <button className="secondary small-btn" onClick={markAllRead}>
              Marcar todas como lidas ({unread})
            </button>
          )}
        </div>
      </section>

      <div className="filter-bar">
        {typeFilters.map((f) => (
          <button
            key={f}
            className={`filter-btn${filter === f ? " filter-active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f === "todas" ? "Todas" : typeLabel[f]}
          </button>
        ))}
      </div>

      <div className="notifications-list">
        {filtered.map((n) => (
          <article
            key={n.id}
            className={`notification-card panel${n.read ? "" : " notification-unread"}`}
            onClick={() => toggleRead(n.id)}
          >
            <div className="notification-header">
              <span className={`tag tag-notif tag-notif-${n.type}`}>{typeLabel[n.type]}</span>
              <span className="notification-date">{new Date(n.date).toLocaleString("pt-BR")}</span>
              {!n.read && <span className="unread-dot" />}
            </div>
            <h3>{n.title}</h3>
            <p className="section-copy">{n.message}</p>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="panel empty-state">
            <p className="section-copy">Nenhuma notificacao encontrada para este filtro.</p>
          </div>
        )}
      </div>
    </main>
  );
}
