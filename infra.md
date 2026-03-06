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

## Estrutura Recomendada

1. Portal do paciente em Next.js hospedado na Vercel
2. API NestJS hospedada no Railway ou Render
3. PostgreSQL gerenciado na nuvem
4. Keycloak em VPS propria
5. Chatwoot em VPS propria

## Resumo Direto

- Linguagem: TypeScript
- Frontend: Next.js
- Backend: NestJS
- Banco: PostgreSQL
- Auth: Keycloak
- Chat: Chatwoot
- Containers: Docker
- Hospedagem: Vercel + Railway/Render + VPS
