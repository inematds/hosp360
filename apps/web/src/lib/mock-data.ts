export type Specialty = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export type Professional = {
  id: string;
  name: string;
  specialtyId: string;
  crm: string;
};

export type Slot = {
  id: string;
  specialtyId: string;
  professionalId: string;
  professional: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
};

export type AppointmentRequest = {
  id: string;
  patientName: string;
  patientDocument: string;
  specialtyId: string;
  slotId: string;
  reason: string;
  status: "pendente" | "confirmado" | "cancelado" | "realizado";
  protocol: string;
  createdAt: string;
  slot: Slot;
  specialty: string;
};

export type Notification = {
  id: string;
  type: "confirmacao" | "lembrete" | "cancelamento" | "info" | "whatsapp" | "telegram";
  title: string;
  message: string;
  date: string;
  read: boolean;
};

export type ChatMessage = {
  id: string;
  from: "paciente" | "atendente" | "bot";
  text: string;
  time: string;
};

export const specialties: Specialty[] = [
  { id: "cardio", name: "Cardiologia", description: "Consultas para avaliacao cardiovascular e acompanhamento clinico.", icon: "cardio" },
  { id: "pediatria", name: "Pediatria", description: "Atendimento infantil e seguimento de rotina para criancas.", icon: "pediatria" },
  { id: "ortopedia", name: "Ortopedia", description: "Avaliacoes musculoesqueleticas, dores e lesoes ortopedicas.", icon: "ortopedia" },
  { id: "ginecologia", name: "Ginecologia", description: "Consultas ginecologicas, prevencao e acompanhamento da saude da mulher.", icon: "gineco" },
  { id: "neurologia", name: "Neurologia", description: "Avaliacao neurologica, cefaleias, disturbios do sono e acompanhamento.", icon: "neuro" },
  { id: "dermatologia", name: "Dermatologia", description: "Consultas dermatologicas, avaliacoes de pele e procedimentos esteticos.", icon: "derma" },
];

export const professionals: Professional[] = [
  { id: "med-01", name: "Dra. Helena Costa", specialtyId: "cardio", crm: "CRM 12345" },
  { id: "med-02", name: "Dr. Rafael Lima", specialtyId: "pediatria", crm: "CRM 23456" },
  { id: "med-03", name: "Dr. Bruno Martins", specialtyId: "ortopedia", crm: "CRM 34567" },
  { id: "med-04", name: "Dra. Camila Souza", specialtyId: "ginecologia", crm: "CRM 45678" },
  { id: "med-05", name: "Dr. Marcos Oliveira", specialtyId: "neurologia", crm: "CRM 56789" },
  { id: "med-06", name: "Dra. Juliana Ferreira", specialtyId: "dermatologia", crm: "CRM 67890" },
  { id: "med-07", name: "Dr. Andre Ribeiro", specialtyId: "cardio", crm: "CRM 78901" },
];

export const slots: Slot[] = [
  { id: "slot-01", specialtyId: "cardio", professionalId: "med-01", professional: "Dra. Helena Costa", specialty: "Cardiologia", date: "2026-03-10", time: "08:30", location: "Ambulatorio A" },
  { id: "slot-02", specialtyId: "cardio", professionalId: "med-01", professional: "Dra. Helena Costa", specialty: "Cardiologia", date: "2026-03-10", time: "10:00", location: "Ambulatorio A" },
  { id: "slot-03", specialtyId: "cardio", professionalId: "med-07", professional: "Dr. Andre Ribeiro", specialty: "Cardiologia", date: "2026-03-11", time: "14:00", location: "Ambulatorio A" },
  { id: "slot-04", specialtyId: "pediatria", professionalId: "med-02", professional: "Dr. Rafael Lima", specialty: "Pediatria", date: "2026-03-11", time: "09:00", location: "Consultorio Infantil" },
  { id: "slot-05", specialtyId: "pediatria", professionalId: "med-02", professional: "Dr. Rafael Lima", specialty: "Pediatria", date: "2026-03-12", time: "10:30", location: "Consultorio Infantil" },
  { id: "slot-06", specialtyId: "ortopedia", professionalId: "med-03", professional: "Dr. Bruno Martins", specialty: "Ortopedia", date: "2026-03-12", time: "14:00", location: "Ambulatorio B" },
  { id: "slot-07", specialtyId: "ginecologia", professionalId: "med-04", professional: "Dra. Camila Souza", specialty: "Ginecologia", date: "2026-03-13", time: "08:00", location: "Consultorio C" },
  { id: "slot-08", specialtyId: "ginecologia", professionalId: "med-04", professional: "Dra. Camila Souza", specialty: "Ginecologia", date: "2026-03-13", time: "09:30", location: "Consultorio C" },
  { id: "slot-09", specialtyId: "neurologia", professionalId: "med-05", professional: "Dr. Marcos Oliveira", specialty: "Neurologia", date: "2026-03-14", time: "11:00", location: "Ambulatorio D" },
  { id: "slot-10", specialtyId: "dermatologia", professionalId: "med-06", professional: "Dra. Juliana Ferreira", specialty: "Dermatologia", date: "2026-03-14", time: "15:00", location: "Consultorio E" },
];

export const appointmentRequests: AppointmentRequest[] = [
  {
    id: "req-1", patientName: "Maria Silva", patientDocument: "123.456.789-00",
    specialtyId: "cardio", slotId: "slot-01", reason: "Dor no peito e falta de ar ao esforco",
    status: "confirmado", protocol: "H360-00001", createdAt: "2026-03-05T10:30:00",
    slot: slots[0], specialty: "Cardiologia",
  },
  {
    id: "req-2", patientName: "Maria Silva", patientDocument: "123.456.789-00",
    specialtyId: "dermatologia", slotId: "slot-10", reason: "Avaliacao de manchas na pele",
    status: "pendente", protocol: "H360-00002", createdAt: "2026-03-06T14:15:00",
    slot: slots[9], specialty: "Dermatologia",
  },
  {
    id: "req-3", patientName: "Maria Silva", patientDocument: "123.456.789-00",
    specialtyId: "ortopedia", slotId: "slot-06", reason: "Dor no joelho direito apos caminhada",
    status: "cancelado", protocol: "H360-00003", createdAt: "2026-02-20T09:00:00",
    slot: slots[5], specialty: "Ortopedia",
  },
  {
    id: "req-4", patientName: "Maria Silva", patientDocument: "123.456.789-00",
    specialtyId: "cardio", slotId: "slot-02", reason: "Retorno cardiologico de rotina",
    status: "realizado", protocol: "H360-00004", createdAt: "2026-02-10T08:00:00",
    slot: slots[1], specialty: "Cardiologia",
  },
];

export const notifications: Notification[] = [
  { id: "n1", type: "confirmacao", title: "Consulta confirmada", message: "Sua consulta com Dra. Helena Costa em Cardiologia foi confirmada para 10/03/2026 as 08:30.", date: "2026-03-06T09:00:00", read: false },
  { id: "n2", type: "lembrete", title: "Lembrete de consulta", message: "Voce tem uma consulta amanha (10/03) as 08:30 com Dra. Helena Costa. Ambulatorio A.", date: "2026-03-09T08:00:00", read: false },
  { id: "n3", type: "whatsapp", title: "Confirmacao via WhatsApp", message: "Enviamos a confirmacao da sua consulta por WhatsApp. Responda SIM para confirmar presenca.", date: "2026-03-06T09:05:00", read: true },
  { id: "n4", type: "info", title: "Solicitacao recebida", message: "Sua solicitacao H360-00002 para Dermatologia foi recebida e esta em analise.", date: "2026-03-06T14:20:00", read: true },
  { id: "n5", type: "cancelamento", title: "Consulta cancelada", message: "Sua consulta de Ortopedia (H360-00003) foi cancelada conforme solicitado.", date: "2026-02-21T10:00:00", read: true },
  { id: "n6", type: "telegram", title: "Alerta interno enviado", message: "A equipe da recepcao foi notificada sobre sua solicitacao via Telegram.", date: "2026-03-06T14:22:00", read: true },
];

export const chatMessages: ChatMessage[] = [
  { id: "c1", from: "bot", text: "Ola! Bem-vindo ao atendimento do Hosp360. Como posso ajudar?", time: "14:00" },
  { id: "c2", from: "paciente", text: "Ola, gostaria de saber o status da minha solicitacao de agendamento.", time: "14:01" },
  { id: "c3", from: "bot", text: "Claro! Encontrei a solicitacao H360-00002 para Dermatologia. Ela esta pendente de confirmacao. Deseja falar com um atendente?", time: "14:01" },
  { id: "c4", from: "paciente", text: "Sim, por favor.", time: "14:02" },
  { id: "c5", from: "bot", text: "Transferindo para um atendente. Por favor, aguarde um momento.", time: "14:02" },
  { id: "c6", from: "atendente", text: "Ola Maria! Sou a Ana da recepcao. Sua solicitacao para Dermatologia esta na fila de confirmacao. A Dra. Juliana tem disponibilidade no dia 14/03 as 15h. Confirmo?", time: "14:04" },
  { id: "c7", from: "paciente", text: "Sim, pode confirmar por favor!", time: "14:05" },
  { id: "c8", from: "atendente", text: "Perfeito! Consulta confirmada. Enviarei a confirmacao por WhatsApp tambem. Mais alguma duvida?", time: "14:06" },
];

export const adminQueue = [
  { id: "adm-1", protocol: "H360-00005", patient: "Lucas Souza", specialty: "Pediatria", date: "2026-03-11", time: "09:00", status: "pendente" as const, channel: "Portal" },
  { id: "adm-2", protocol: "H360-00006", patient: "Ana Costa", specialty: "Ortopedia", date: "2026-03-12", time: "14:00", status: "pendente" as const, channel: "WhatsApp" },
  { id: "adm-3", protocol: "H360-00007", patient: "Carlos Mendes", specialty: "Cardiologia", date: "2026-03-10", time: "10:00", status: "confirmado" as const, channel: "Portal" },
  { id: "adm-4", protocol: "H360-00008", patient: "Julia Reis", specialty: "Ginecologia", date: "2026-03-13", time: "08:00", status: "pendente" as const, channel: "WhatsApp" },
  { id: "adm-5", protocol: "H360-00009", patient: "Pedro Alves", specialty: "Neurologia", date: "2026-03-14", time: "11:00", status: "confirmado" as const, channel: "Portal" },
  { id: "adm-6", protocol: "H360-00010", patient: "Fernanda Lima", specialty: "Dermatologia", date: "2026-03-14", time: "15:00", status: "cancelado" as const, channel: "Telegram" },
  { id: "adm-7", protocol: "H360-00001", patient: "Maria Silva", specialty: "Cardiologia", date: "2026-03-10", time: "08:30", status: "confirmado" as const, channel: "Portal" },
  { id: "adm-8", protocol: "H360-00002", patient: "Maria Silva", specialty: "Dermatologia", date: "2026-03-14", time: "15:00", status: "pendente" as const, channel: "Portal" },
];

export const adminStats = {
  total: 184,
  confirmados: 112,
  pendentes: 47,
  cancelados: 25,
  whatsapp: 73,
  telegram: 31,
  portalWeb: 80,
};

export const telegramAlerts = [
  { id: "t1", message: "3 pacientes aguardando retorno da recepcao", time: "08:15", priority: "alta" as const },
  { id: "t2", message: "2 horarios liberados por cancelamento em Ortopedia", time: "09:30", priority: "media" as const },
  { id: "t3", message: "Solicitacao H360-00006 precisa validar convenio", time: "10:00", priority: "alta" as const },
  { id: "t4", message: "Dr. Rafael Lima confirmou agenda de amanha", time: "11:45", priority: "baixa" as const },
  { id: "t5", message: "Paciente Julia Reis solicitou remarcacao via WhatsApp", time: "13:20", priority: "media" as const },
];

export const mockPatient = {
  name: "Maria Silva",
  document: "123.456.789-00",
  email: "maria.silva@email.com",
  phone: "(11) 98765-4321",
  birthDate: "1985-06-15",
  address: "Rua das Flores, 123 - Sao Paulo, SP",
};
