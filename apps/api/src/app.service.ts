import { Injectable } from "@nestjs/common";

type Specialty = {
  id: string;
  name: string;
  description: string;
};

type Professional = {
  id: string;
  name: string;
  specialtyId: string;
};

type Slot = {
  id: string;
  specialtyId: string;
  professionalId: string;
  date: string;
  time: string;
  location: string;
};

type AppointmentRequest = {
  id: string;
  patientName: string;
  patientDocument: string;
  specialtyId: string;
  slotId: string;
  reason: string;
  status: "pendente" | "confirmado";
  protocol: string;
};

@Injectable()
export class AppService {
  private readonly specialties: Specialty[] = [
    {
      id: "cardio",
      name: "Cardiologia",
      description: "Consultas para avaliacao cardiovascular e acompanhamento clinico.",
    },
    {
      id: "pediatria",
      name: "Pediatria",
      description: "Atendimento infantil e seguimento de rotina para criancas.",
    },
    {
      id: "ortopedia",
      name: "Ortopedia",
      description: "Avaliacoes musculoesqueleticas, dores e lesoes ortopedicas.",
    },
  ];

  private readonly professionals: Professional[] = [
    { id: "med-01", name: "Dra. Helena Costa", specialtyId: "cardio" },
    { id: "med-02", name: "Dr. Rafael Lima", specialtyId: "pediatria" },
    { id: "med-03", name: "Dr. Bruno Martins", specialtyId: "ortopedia" },
  ];

  private readonly slots: Slot[] = [
    {
      id: "slot-01",
      specialtyId: "cardio",
      professionalId: "med-01",
      date: "2026-03-10",
      time: "08:30",
      location: "Ambulatorio A",
    },
    {
      id: "slot-02",
      specialtyId: "cardio",
      professionalId: "med-01",
      date: "2026-03-10",
      time: "10:00",
      location: "Ambulatorio A",
    },
    {
      id: "slot-03",
      specialtyId: "pediatria",
      professionalId: "med-02",
      date: "2026-03-11",
      time: "09:00",
      location: "Consultorio Infantil",
    },
    {
      id: "slot-04",
      specialtyId: "ortopedia",
      professionalId: "med-03",
      date: "2026-03-12",
      time: "14:00",
      location: "Ambulatorio B",
    },
  ];

  private readonly appointmentRequests: AppointmentRequest[] = [];

  getHealth() {
    return {
      status: "ok",
      service: "crmhosp-api",
      module: "autoatendimento",
      timestamp: new Date().toISOString(),
    };
  }

  getRoadmap() {
    return {
      module: "autoatendimento",
      priorities: [
        "autenticacao do paciente",
        "cadastro inicial",
        "agenda por especialidade",
        "solicitacao de agendamento",
        "chat humano assistido",
      ],
    };
  }

  getSpecialties() {
    return this.specialties;
  }

  getSlots(specialtyId?: string) {
    return this.slots
      .filter((slot) => !specialtyId || slot.specialtyId === specialtyId)
      .map((slot) => ({
        ...slot,
        professional: this.professionals.find(
          (professional) => professional.id === slot.professionalId,
        )?.name,
        specialty: this.specialties.find((specialty) => specialty.id === slot.specialtyId)?.name,
      }));
  }

  createAppointmentRequest(payload: {
    patientName: string;
    patientDocument: string;
    specialtyId: string;
    slotId: string;
    reason: string;
  }) {
    const protocol = `H360-${String(this.appointmentRequests.length + 1).padStart(5, "0")}`;
    const request: AppointmentRequest = {
      id: `req-${this.appointmentRequests.length + 1}`,
      patientName: payload.patientName,
      patientDocument: payload.patientDocument,
      specialtyId: payload.specialtyId,
      slotId: payload.slotId,
      reason: payload.reason,
      status: "pendente",
      protocol,
    };

    this.appointmentRequests.push(request);

    return {
      ...request,
      slot: this.slots.find((slot) => slot.id === payload.slotId),
      specialty: this.specialties.find((specialty) => specialty.id === payload.specialtyId),
    };
  }

  listAppointmentRequests() {
    return this.appointmentRequests.map((request) => ({
      ...request,
      specialty: this.specialties.find((specialty) => specialty.id === request.specialtyId)?.name,
      slot: this.slots.find((slot) => slot.id === request.slotId),
    }));
  }
}
