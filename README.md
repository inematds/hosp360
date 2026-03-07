# CRMHosp

Base tecnica inicial do modulo de autoatendimento do paciente.

## Estrutura

- `apps/web`: portal do paciente em Next.js
- `apps/api`: API de autoatendimento em NestJS
- `packages/config`: configuracoes compartilhadas
- `infra/docker`: arquivos de infraestrutura local
- `todo.md`: plano de execucao
- `infra.md`: decisao de infraestrutura

## Stack

- Frontend: Next.js + TypeScript
- Backend: NestJS + TypeScript
- Banco: PostgreSQL
- Auth: Keycloak
- Chat: Chatwoot
- Paciente: WhatsApp
- Interno: Telegram
- Infra local: Docker Compose

## Fluxo inicial previsto

1. Paciente acessa o portal
2. Faz login ou cadastro
3. Consulta agenda disponivel
4. Solicita agendamento
5. Acompanha status e abre atendimento via WhatsApp
6. Equipe recebe alertas internos via Telegram

## O que ja esta implementado

- landing page inicial do portal
- tela de login estrutural para futura integracao com Keycloak
- tela piloto de agendamento em `apps/web/src/app/agendamento/page.tsx`
- endpoint `GET /health`
- endpoint `GET /specialties`
- endpoint `GET /slots`
- endpoint `POST /appointment-requests`
- endpoint `GET /appointment-requests`
- diretriz funcional para atendimento do paciente por WhatsApp
- diretriz funcional para comunicacao interna por Telegram

## Como subir a infraestrutura local

1. Copiar `.env.example` para `.env`
2. Subir a infraestrutura:

```bash
docker compose up -d
```

3. Instalar dependencias:

```bash
npm install
```

4. Rodar a API:

```bash
npm run dev:api
```

5. Rodar o portal:

```bash
npm run dev:web
```

## Proximos blocos de implementacao

- autenticacao real com Keycloak
- cadastro de paciente
- agenda e horarios
- solicitacao de agendamento
- integracao com WhatsApp para paciente
- integracao com Telegram para equipe interna
- painel interno basico
