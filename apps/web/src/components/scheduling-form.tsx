"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Specialty = {
  id: string;
  name: string;
  description: string;
};

type Slot = {
  id: string;
  specialtyId: string;
  professionalId: string;
  professional: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
};

type ApiStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export function SchedulingForm() {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientDocument, setPatientDocument] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState<ApiStatus>({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/specialties`)
      .then((response) => response.json())
      .then((data: Specialty[]) => {
        setSpecialties(data);
        if (data[0]) {
          setSelectedSpecialty(data[0].id);
        }
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Nao foi possivel carregar as especialidades da API.",
        });
      });
  }, []);

  useEffect(() => {
    if (!selectedSpecialty) {
      return;
    }

    fetch(`${apiUrl}/slots?specialtyId=${selectedSpecialty}`)
      .then((response) => response.json())
      .then((data: Slot[]) => {
        setSlots(data);
        setSelectedSlot(data[0]?.id ?? "");
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Nao foi possivel carregar os horarios disponiveis.",
        });
      });
  }, [selectedSpecialty]);

  const selectedSlotData = useMemo(
    () => slots.find((slot) => slot.id === selectedSlot),
    [selectedSlot, slots],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch(`${apiUrl}/appointment-requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          patientName,
          patientDocument,
          specialtyId: selectedSpecialty,
          slotId: selectedSlot,
          reason,
        }),
      });

      if (!response.ok) {
        throw new Error("Falha ao registrar solicitacao");
      }

      const data = await response.json();
      setStatus({
        type: "success",
        message: `Solicitacao registrada com protocolo ${data.protocol}.`,
      });
      setPatientName("");
      setPatientDocument("");
      setReason("");
    } catch {
      setStatus({
        type: "error",
        message: "Nao foi possivel registrar a solicitacao agora.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="scheduler">
      <div className="panel">
        <p className="eyebrow">Fluxo piloto</p>
        <h2>Solicitacao de agendamento</h2>
        <p className="section-copy">
          Esta tela representa o primeiro fluxo funcional do autoatendimento. O paciente escolhe a
          especialidade, seleciona o horario publicado e registra sua solicitacao.
        </p>
        <form className="scheduler-form" onSubmit={handleSubmit}>
          <label>
            Nome do paciente
            <input
              value={patientName}
              onChange={(event) => setPatientName(event.target.value)}
              placeholder="Nome completo"
              required
            />
          </label>
          <label>
            Documento
            <input
              value={patientDocument}
              onChange={(event) => setPatientDocument(event.target.value)}
              placeholder="CPF ou prontuario"
              required
            />
          </label>
          <label>
            Especialidade
            <select
              value={selectedSpecialty}
              onChange={(event) => setSelectedSpecialty(event.target.value)}
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
            <select value={selectedSlot} onChange={(event) => setSelectedSlot(event.target.value)} required>
              {slots.map((slot) => (
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
              onChange={(event) => setReason(event.target.value)}
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
          <p className="section-copy">Selecione uma especialidade para visualizar os horarios.</p>
        )}
      </div>
    </section>
  );
}

