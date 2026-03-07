# Infraestrutura Recomendada - Fase Inicial

## Objetivo

Definir a infraestrutura base para implementar o sistema de autoatendimento do paciente.

## Linguagens

- Frontend: TypeScript
- Backend: TypeScript

## Frameworks

- Frontend: Next.js
- Backend: NestJS

## Banco de Dados

- PostgreSQL

## Autenticacao

- Keycloak

## Atendimento e Chat

- Chatwoot
- WhatsApp para atendimento e consulta do paciente
- Telegram para comunicacao interna da equipe

## Infraestrutura de Execucao

- Docker
- Docker Compose

## Hospedagem Recomendada

### Frontend

- Vercel

### Backend

- Railway ou Render

### Banco

- PostgreSQL gerenciado em Supabase, Neon ou Railway

### Keycloak e Chatwoot

- VPS Linux com Docker

### Canais de comunicacao

- WhatsApp Business API ou provedor compativel para contato com paciente
- Bot do Telegram para alertas internos, triagem operacional e avisos para equipe

## Estrutura Recomendada

1. Portal do paciente em Next.js hospedado na Vercel
2. API NestJS hospedada no Railway ou Render
3. PostgreSQL gerenciado na nuvem
4. Keycloak em VPS propria
5. Chatwoot em VPS propria
6. WhatsApp integrado ao fluxo do paciente
7. Telegram integrado ao fluxo interno da operacao

## Resumo Direto

- Linguagem: TypeScript
- Frontend: Next.js
- Backend: NestJS
- Banco: PostgreSQL
- Auth: Keycloak
- Chat: Chatwoot
- Paciente: WhatsApp
- Interno: Telegram
- Containers: Docker
- Hospedagem: Vercel + Railway/Render + VPS
