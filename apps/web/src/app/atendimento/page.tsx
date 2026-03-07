"use client";

import { FormEvent, useState } from "react";
import { chatMessages as initialMessages, type ChatMessage } from "../../lib/mock-data";

const botReplies = [
  "Entendido! Vou verificar no sistema para voce.",
  "Sua solicitacao foi registrada. Um atendente vai responder em breve.",
  "Posso ajudar com mais alguma coisa?",
  "Enviamos a informacao atualizada por WhatsApp tambem.",
  "O horario solicitado esta disponivel. Deseja confirmar?",
];

export default function AtendimentoPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [channel, setChannel] = useState<"chat" | "whatsapp">("chat");

  function handleSend(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      from: "paciente",
      text: input,
      time,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        from: "atendente",
        text: reply,
        time: `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes() + 1).padStart(2, "0")}`,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1200);
  }

  return (
    <main className="page">
      <section className="topbar">
        <div>
          <p className="eyebrow">Atendimento</p>
          <h1 className="h1-small">Central de atendimento</h1>
        </div>
        <div className="actions">
          <a href="/painel" className="secondary">Voltar ao painel</a>
        </div>
      </section>

      <div className="chat-layout">
        <aside className="chat-sidebar panel">
          <p className="eyebrow">Canais</p>
          <button
            className={`channel-btn${channel === "chat" ? " channel-active" : ""}`}
            onClick={() => setChannel("chat")}
          >
            <span className="channel-dot chat-dot" />
            Chat do Portal
          </button>
          <button
            className={`channel-btn${channel === "whatsapp" ? " channel-active" : ""}`}
            onClick={() => setChannel("whatsapp")}
          >
            <span className="channel-dot whatsapp-dot" />
            WhatsApp
          </button>

          <div className="sidebar-divider" />

          <p className="eyebrow">Informacoes</p>
          <div className="sidebar-info">
            <p><strong>Horario de atendimento</strong></p>
            <p>Seg a Sex: 07:00 - 19:00</p>
            <p>Sab: 07:00 - 12:00</p>
          </div>
          <div className="sidebar-info">
            <p><strong>Tempo medio de resposta</strong></p>
            <p>Chat: 2 minutos</p>
            <p>WhatsApp: 5 minutos</p>
          </div>
          <div className="sidebar-info">
            <p><strong>Telegram (Equipe)</strong></p>
            <p>Alertas internos ativos</p>
            <p>Recepcao conectada</p>
          </div>
        </aside>

        <div className="chat-main panel">
          <div className="chat-header">
            <div className="chat-header-info">
              <span className={`channel-dot ${channel === "whatsapp" ? "whatsapp-dot" : "chat-dot"}`} />
              <strong>{channel === "chat" ? "Chat do Portal" : "WhatsApp"}</strong>
              <span className="chat-status-online">Online</span>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-bubble chat-${msg.from}`}>
                <span className="bubble-sender">
                  {msg.from === "paciente" ? "Voce" : msg.from === "bot" ? "Assistente" : "Atendente"}
                </span>
                <p>{msg.text}</p>
                <span className="bubble-time">{msg.time}</span>
              </div>
            ))}
          </div>

          <form className="chat-input-bar" onSubmit={handleSend}>
            <input
              type="text"
              placeholder={channel === "chat" ? "Digite sua mensagem..." : "Mensagem via WhatsApp..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </main>
  );
}
