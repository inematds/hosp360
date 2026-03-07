# Plano de Execucao - CRMHosp

## Objetivo

Implementar o projeto CRMHosp em fases, com foco inicial no sistema de autoatendimento do paciente. A meta da primeira etapa e colocar no ar um portal simples, seguro e integrado ao atendimento humano, reduzindo carga operacional da recepcao e organizando o fluxo de agendamento.

## Visao Geral do Projeto

O projeto sera dividido em 3 frentes:

1. Sistema de Autoatendimento do Paciente
2. Sistema Operacional Hospitalar
3. Sistema de Integracao e Governanca

Neste momento, a implementacao vai priorizar apenas a primeira frente.

## Escopo da Fase Inicial

Nome da fase:

- Fase 1 - Autoatendimento do Paciente

Objetivo da fase:

- permitir que o paciente consulte horarios
- solicite agendamento
- confirme ou cancele consultas
- acompanhe status da solicitacao
- inicie atendimento por chat
- consulte agenda ou atendimento por WhatsApp
- receba notificacoes e orientacoes
- permita comunicacao interna da equipe via Telegram

## Resultado Esperado da Primeira Entrega

Ao final da fase inicial, o hospital deve ter:

- um portal web de autoatendimento
- autenticacao segura do paciente
- agenda disponivel para consulta
- fluxo de solicitacao e confirmacao de consultas
- integracao com atendimento humano
- canal de WhatsApp para consulta e acompanhamento do paciente
- canal interno via Telegram para alertas e comunicacao operacional
- base pronta para futura integracao com o core hospitalar

## Arquitetura Inicial Recomendada

### Camadas

1. Frontend do paciente
2. API de autoatendimento
3. Banco de dados operacional
4. Servicos de comunicacao
5. Integracao futura com HIS

### Stack sugerida

- Frontend: Next.js
- Backend/API: NestJS ou FastAPI
- Banco de dados: PostgreSQL
- Autenticacao: Keycloak
- Chat: Chatwoot
- Canal paciente: WhatsApp
- Canal interno: Telegram
- Containers: Docker Compose
- Monitoramento inicial: logs estruturados + health checks

### Principios da implementacao

- comecar simples e modular
- evitar acoplamento direto com regras complexas do hospital
- criar APIs proprias para agenda e solicitacoes
- deixar o sistema pronto para integrar depois com Bahmni ou outro HIS

## Modulos da Fase 1

### 1. Portal do Paciente

Funcionalidades:

- tela inicial institucional
- login do paciente
- cadastro basico
- painel com proximas consultas
- tela de solicitacao de agendamento
- tela de confirmacao e cancelamento
- historico de solicitacoes

### 2. Agenda e Solicitacoes

Funcionalidades:

- consulta de especialidades
- consulta de profissionais
- consulta de horarios disponiveis
- criacao de pedido de agendamento
- fila de aprovacao ou confirmacao
- remarcacao e cancelamento

### 3. Atendimento e Relacionamento

Funcionalidades:

- chat inicial com paciente
- atendimento e consulta de agenda por WhatsApp
- triagem basica
- transferencia para atendente humano
- registro do motivo do contato
- vinculacao do contato ao cadastro do paciente

### 4. Notificacoes

Funcionalidades:

- confirmacao de solicitacao
- alerta de consulta agendada
- aviso de remarcacao ou cancelamento
- lembrete automatico
- envio de mensagens ao paciente por WhatsApp
- envio de alertas internos por Telegram

### 5. Administracao Basica

Funcionalidades:

- painel simples de solicitacoes
- consulta do status dos atendimentos
- controle de agenda publicada
- auditoria basica

## Backlog Inicial

## Sprint 0 - Preparacao

- definir responsavel de produto
- mapear fluxo atual de agendamento
- mapear perfis de usuarios
- definir campos obrigatorios do paciente
- definir regras de agendamento
- definir canais de notificacao
- configurar repositorio, ambientes e padrao tecnico

Entregaveis:

- fluxos validados
- backlog refinado
- arquitetura inicial aprovada

## Sprint 1 - Fundacao Tecnica

- criar estrutura do frontend
- criar estrutura da API
- configurar banco PostgreSQL
- configurar Docker Compose
- configurar autenticacao
- criar modelos iniciais de dados
- criar ambiente de homologacao

Entregaveis:

- projeto inicial rodando localmente
- login funcional
- banco e migracoes configurados

## Sprint 2 - Cadastro e Acesso do Paciente

- tela de login
- tela de cadastro
- recuperacao de acesso
- perfil basico do paciente
- validacao de documentos e contatos

Entregaveis:

- paciente consegue criar conta e acessar o portal

## Sprint 3 - Agenda e Solicitacao

- listar especialidades
- listar medicos ou agendas publicadas
- listar horarios disponiveis
- registrar solicitacao de agendamento
- exibir protocolo e status

Entregaveis:

- paciente consegue solicitar agendamento pelo portal

## Sprint 4 - Confirmacao, Cancelamento e Remarcacao

- confirmar consulta
- cancelar consulta
- pedir remarcacao
- registrar motivo
- atualizar status no painel interno

Entregaveis:

- fluxo completo de manutencao do agendamento

## Sprint 5 - Chat e Atendimento Humano

- integrar Chatwoot
- vincular atendimento ao paciente autenticado
- criar fila inicial de atendimento
- registrar assunto do contato
- desenhar fluxo inicial de atendimento por WhatsApp

Entregaveis:

- paciente consegue abrir conversa a partir do portal
- paciente consegue ser redirecionado para atendimento via WhatsApp

## Sprint 6 - Notificacoes e Operacao

- notificar criacao de solicitacao
- notificar confirmacao
- notificar cancelamento ou remarcacao
- criar painel operacional simples
- criar logs e trilha de auditoria
- enviar alertas internos para Telegram

Entregaveis:

- operacao minima assistida
- acompanhamento das solicitacoes
- equipe recebe alertas internos em canal Telegram

## Estrutura Funcional do Sistema

### Perfil paciente

- login
- cadastro
- consulta de agenda
- solicitacao de horario
- confirmacao e cancelamento
- visualizacao de historico
- abertura de chat
- consulta e atendimento via WhatsApp

### Perfil atendente

- visualizar fila de solicitacoes
- atualizar status
- responder no chat
- receber avisos e alertas no Telegram
- consultar dados basicos do paciente

### Perfil administrador

- gerenciar agendas publicadas
- acompanhar indicadores simples
- consultar auditoria

## Regras Minimas de Negocio

- nenhum agendamento deve ser criado sem identificacao minima do paciente
- toda solicitacao precisa gerar protocolo
- toda mudanca de status deve ser auditada
- cancelamento deve registrar motivo
- horarios exibidos ao paciente devem respeitar agenda publicada
- dados sensiveis devem exigir autenticacao

## Modelo Inicial de Dados

Entidades recomendadas:

- paciente
- usuario
- perfil_acesso
- especialidade
- profissional
- agenda
- horario_disponivel
- solicitacao_agendamento
- consulta
- atendimento_chat
- notificacao
- auditoria_evento

## Integracoes Previstas

### Integracoes da fase 1

- Keycloak para autenticacao
- Chatwoot para atendimento
- servico de e-mail ou WhatsApp para notificacoes
- integracao com WhatsApp para consulta e atendimento do paciente
- integracao com Telegram para comunicacao interna e alertas operacionais

### Integracoes da fase 2

- Bahmni ou outro HIS
- laboratorio
- faturamento
- ERP

## Criticos de Sucesso

- paciente consegue usar o portal sem apoio humano para tarefas basicas
- recepcao reduz volume de contatos manuais
- equipe consegue acompanhar solicitacoes em painel unico
- fluxo de agenda fica rastreavel
- base pronta para crescer sem retrabalho estrutural

## Riscos e Cuidados

- tentar integrar o HIS completo cedo demais
- criar agenda sem regra clara de negocio
- nao definir responsavel funcional do hospital
- nao validar LGPD desde o inicio
- depender de processos manuais sem registro

## Ordem Recomendada de Implementacao Tecnica

1. Estrutura do monorepo ou repositorios
2. Banco de dados e migracoes
3. Autenticacao
4. Cadastro do paciente
5. Agenda e horarios
6. Solicitacoes de agendamento
7. Confirmacao e cancelamento
8. Painel interno basico
9. Chat
10. Notificacoes

## Definition of Done da Fase 1

A fase de autoatendimento sera considerada concluida quando:

- o portal estiver acessivel em ambiente de homologacao
- o paciente conseguir fazer login e gerenciar seu atendimento basico
- o time interno conseguir visualizar e atualizar solicitacoes
- o chat estiver operacional
- notificacoes essenciais estiverem funcionando
- eventos relevantes estiverem auditados

## Proximos Passos Imediatos

1. Definir stack final entre NestJS e FastAPI
2. Definir se o frontend sera unico ou separado do painel interno
3. Modelar banco inicial
4. Criar repositorio base da aplicacao
5. Implementar Sprint 0

## Decisao Atual do Projeto

Escopo aprovado para inicio:

- construir primeiro o Sistema de Autoatendimento do Paciente
- deixar o core hospitalar para integracao posterior
- usar arquitetura preparada para expansao
