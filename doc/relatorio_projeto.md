# Relatorio do Projeto Hosp360 (CRMHosp)

## Visao Geral

Sistema de autoatendimento hospitalar para pacientes, com portal web, agendamento, e canais de comunicacao (WhatsApp/Telegram). O projeto esta em fase inicial de fundacao tecnica (Sprint 1).

## Arquitetura

| Camada | Tecnologia | Status |
|--------|-----------|--------|
| Frontend | Next.js 15.2 + React 19 + TypeScript | Estrutura criada |
| Backend | NestJS 11 + TypeScript | Estrutura criada |
| Banco | PostgreSQL 16 | Docker configurado |
| Auth | Keycloak 26.1 | Docker configurado, sem integracao |
| Chat | Chatwoot | Apenas planejado |
| Canais | WhatsApp / Telegram | Apenas planejado |

Monorepo com npm workspaces: apps/web, apps/api, packages/config.

## O Que Ja Existe

### Frontend (apps/web) - 7 arquivos
- Landing page (page.tsx) - pagina institucional completa
- Login (login/page.tsx) - tela estrutural, sem logica de autenticacao real
- Agendamento (agendamento/page.tsx + scheduling-form.tsx) - fluxo piloto funcional que consome a API

### Backend (apps/api) - 4 arquivos de codigo
- GET /health - health check
- GET /roadmap - prioridades do modulo
- GET /specialties - lista especialidades (dados in-memory)
- GET /slots?specialtyId= - lista horarios disponiveis
- POST /appointment-requests - cria solicitacao com protocolo
- GET /appointment-requests - lista solicitacoes

Todos os dados estao in-memory (arrays hardcoded no AppService). Nao ha persistencia em banco.

### Infraestrutura
- docker-compose.yml com PostgreSQL + Keycloak (+ seu Postgres dedicado)
- .env.example com todas as variaveis necessarias

## Maturidade por Modulo

| Modulo | Progresso | Observacao |
|--------|-----------|------------|
| Estrutura monorepo | Pronto | Workspaces, scripts, tsconfig |
| Docker / Infra local | Pronto | PostgreSQL + Keycloak |
| Landing page | Pronto | Estatica, pronta para Vercel |
| Fluxo de agendamento | Piloto | Funcional, mas sem persistencia |
| Tela de login | Estrutural | Sem integracao com Keycloak |
| Banco de dados | Nao iniciado | Sem migrations, sem ORM |
| Autenticacao real | Nao iniciado | Keycloak apenas no Docker |
| Cadastro de paciente | Nao iniciado | |
| Chat / Chatwoot | Nao iniciado | |
| WhatsApp / Telegram | Nao iniciado | |
| Painel interno | Nao iniciado | |
| Notificacoes | Nao iniciado | |

## Pontos Fortes

1. Documentacao excelente - todo.md com plano detalhado de 6 sprints
2. Arquitetura bem pensada - separacao clara entre camada de atendimento e core hospitalar
3. Stack moderna e coerente - TypeScript ponta a ponta, frameworks maduros
4. Fluxo piloto funcional - ja e possivel demonstrar o agendamento de ponta a ponta

## Pontos de Atencao

1. Sem persistencia - toda a API trabalha com dados em memoria
2. Sem autenticacao - Keycloak roda no Docker mas nao esta integrado
3. Sem testes - nenhum teste unitario ou e2e
4. Sem validacao de input - endpoint POST aceita qualquer payload
5. CORS nao configurado
6. Sem lint/formatter configurado
7. Sem CI/CD

## Roadmap Sugerido (Proximos Passos Prioritarios)

1. Banco + ORM - Adicionar Prisma ou TypeORM, criar schema inicial
2. Autenticacao - Integrar Keycloak com NestJS e Next.js
3. Validacao - Adicionar class-validator + class-transformer na API
4. CORS - Configurar app.enableCors() no main.ts
5. Testes - Configurar Jest no backend, testar endpoints existentes
6. Cadastro do paciente - Entidade + CRUD + tela no portal

## Metricas

- Commits: 5
- Arquivos de codigo: ~15 (excluindo config)
- Linhas de codigo: ~6.600 (incluindo docs, configs e lock files)
- Dependencias diretas: Next.js, React, NestJS, RxJS
- Branch: main (limpa, sem alteracoes pendentes)

Data da analise: 2026-03-07
