import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
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
}

