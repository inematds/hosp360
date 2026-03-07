"use client";

import { FormEvent, useMemo, useState } from "react";
import { specialties, slots } from "../lib/mock-data";

type ApiStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

export function SchedulingForm() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialties[0].id);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [patientName, setPatientName] = useState("Maria Silva");
  const [patientDocument, setPatientDocument] = useState("123.456.789-00");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState<ApiStatus>({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  const filteredSlots = useMemo(
    () => slots.filter((s) => s.specialtyId === selectedSpecialty),
    [selectedSpecialty],
  );

  const selectedSlotData = useMemo(
    () => slots.find((s) => s.id === selectedSlot),
    [selectedSlot],
  );

  function handleSpecialtyChange(value: string) {
    setSelectedSpecialty(value);
    const firstSlot = slots.find((s) => s.specialtyId === value);
    setSelectedSlot(firstSlot?.id ?? "");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    await new Promise((resolve) => setTimeout(resolve, 800));

    const protocol = `H360-${String(Math.floor(Math.random() * 99999)).padStart(5, "0")}`;
    setStatus({
      type: "success",
      message: `Solicitacao registrada com protocolo ${protocol}. Voce recebera a confirmacao por WhatsApp e no portal.`,
    });
    setReason("");
    setLoading(false);
  }

  return (
    <section className="scheduler">
      <div className="panel">
        <p className="eyebrow">Fluxo piloto</p>
        <h2>Solicitacao de agendamento</h2>
        <p className="section-copy">
          Escolha a especialidade, selecione o horario publicado e registre sua solicitacao.
          A confirmacao sera enviada pelo portal e por WhatsApp.
        </p>
        <form className="scheduler-form" onSubmit={handleSubmit}>
          <label>
            Nome do paciente
            <input
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Nome completo"
              required
            />
          </label>
          <label>
            Documento
            <input
              value={patientDocument}
              onChange={(e) => setPatientDocument(e.target.value)}
              placeholder="CPF ou prontuario"
              required
            />
          </label>
          <label>
            Especialidade
            <select
              value={selectedSpecialty}
              onChange={(e) => handleSpecialtyChange(e.target.value)}
              required
            >
              {specialties.map((specialty) => (
                <option key={specialty.id} value={specialty.id}>
                  {specialty.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Horario disponivel
            <select value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)} required>
              <option value="">Selecione um horario</option>
              {filteredSlots.map((slot) => (
                <option key={slot.id} value={slot.id}>
                  {slot.date} {slot.time} - {slot.professional}
                </option>
              ))}
            </select>
          </label>
          <label>
            Motivo do atendimento
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              placeholder="Descreva resumidamente o motivo"
              required
            />
          </label>
          <button type="submit" disabled={loading || !selectedSlot}>
            {loading ? "Enviando..." : "Registrar solicitacao"}
          </button>
        </form>
        {status.message ? <p className={`status ${status.type}`}>{status.message}</p> : null}
      </div>

      <div className="panel side-panel">
        <h2>Resumo do horario selecionado</h2>
        {selectedSlotData ? (
          <dl className="slot-summary">
            <div>
              <dt>Especialidade</dt>
              <dd>{selectedSlotData.specialty}</dd>
            </div>
            <div>
              <dt>Profissional</dt>
              <dd>{selectedSlotData.professional}</dd>
            </div>
            <div>
              <dt>Data</dt>
              <dd>{selectedSlotData.date}</dd>
            </div>
            <div>
              <dt>Horario</dt>
              <dd>{selectedSlotData.time}</dd>
            </div>
            <div>
              <dt>Local</dt>
              <dd>{selectedSlotData.location}</dd>
            </div>
          </dl>
        ) : (
          <p className="section-copy">Selecione uma especialidade e horario para visualizar o resumo.</p>
        )}

        <div className="side-info mt-24">
          <h3>Canais de confirmacao</h3>
          <ul>
            <li>Confirmacao automatica no portal</li>
            <li>Notificacao por WhatsApp</li>
            <li>Alerta interno via Telegram para equipe</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
