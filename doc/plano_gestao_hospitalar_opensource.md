# Plano para Implementação de Sistema Open Source de Gestão Hospitalar

## Resumo Executivo

É possível implementar uma solução open source completa para gestão
hospitalar com atendimento ao público via chat, consulta de agenda e
gestão interna. A recomendação arquitetural é separar **o núcleo
hospitalar (HIS/EMR)** da **camada de atendimento ao paciente**.

Solução recomendada:

-   **Core hospitalar:** Bahmni
-   **Atendimento ao paciente (chat):** Chatwoot
-   **Autenticação e gestão de identidade:** Keycloak
-   **Portal do paciente:** Web app próprio
-   **Banco de dados:** PostgreSQL
-   **Integração:** APIs REST + padrão FHIR

Essa abordagem permite escalabilidade, interoperabilidade e
independência tecnológica.

------------------------------------------------------------------------

# 1. Problema a Resolver

O sistema deve atender três domínios principais:

## 1.1 Atendimento ao público

Funcionalidades desejadas:

-   Chat para atendimento ao paciente
-   Consulta de agenda médica
-   Solicitação de agendamento
-   Confirmação ou remarcação de consultas
-   Orientações e dúvidas

## 1.2 Operação clínica

A equipe médica e administrativa precisa de:

-   Cadastro de pacientes
-   Agenda médica
-   Prontuário eletrônico
-   Prescrição e exames
-   Gestão de internação
-   Gestão de leitos
-   Farmácia e estoque
-   Relatórios e faturamento

## 1.3 Gestão e governança

-   Controle de acesso por perfil
-   Auditoria de dados
-   LGPD e segurança
-   Integração com outros sistemas
-   Indicadores de gestão

------------------------------------------------------------------------

# 2. Sistemas Open Source Avaliados

## Bahmni

Prós: - Sistema hospitalar completo - Integra prontuário, laboratório e
estoque - Forte em ambiente hospitalar

Contras: - Interface de atendimento ao paciente limitada - Necessidade
de portal externo

## OpenEMR

Prós: - Forte em prontuário eletrônico - Portal do paciente integrado -
Agenda avançada

Contras: - Menos robusto para hospital com internação complexa

## GNU Health

Prós: - Forte em saúde pública - Arquitetura robusta

Contras: - Implantação mais complexa - Maior esforço técnico

------------------------------------------------------------------------

# 3. Arquitetura Recomendada

## Camada 1 --- Atendimento ao Paciente

-   Portal Web
-   Chat (Chatwoot)
-   Bot de triagem
-   Consulta de agenda
-   Notificações

## Camada 2 --- Integração

-   API Gateway
-   Serviço de agenda
-   Serviço de notificações
-   Logs e auditoria

## Camada 3 --- Core Hospitalar

-   Bahmni
-   Prontuário
-   Agenda clínica
-   Cadastro de paciente
-   Exames
-   Farmácia
-   Faturamento

## Camada 4 --- Governança

-   Keycloak (SSO)
-   PostgreSQL
-   Backups
-   Monitoramento
-   Segurança LGPD

------------------------------------------------------------------------

# 4. Stack Tecnológica Recomendada

Core Hospitalar: - Bahmni

Comunicação e atendimento: - Chatwoot

Autenticação: - Keycloak

Backend API: - NodeJS (NestJS) ou Python (FastAPI)

Banco de dados: - PostgreSQL

Infraestrutura: - Docker - Kubernetes (opcional)

Integração: - APIs REST - Padrão FHIR

------------------------------------------------------------------------

# 5. MVP (Produto Mínimo Viável)

## Público

-   Chat no site
-   Consulta de agenda
-   Solicitação de agendamento
-   Confirmação ou cancelamento
-   Notificações

## Interno

-   Cadastro de paciente
-   Agenda médica
-   Prontuário básico
-   Filas de atendimento
-   Relatórios operacionais

------------------------------------------------------------------------

# 6. Riscos do Projeto

Principais riscos:

-   Customização excessiva no início
-   Falta de padronização de processos
-   Governança de dados fraca
-   Perfis de acesso mal definidos
-   Falta de gestão do produto

------------------------------------------------------------------------

# 7. Plano de Implementação

## Fase 0 --- Descoberta (2--4 semanas)

-   Mapeamento de processos
-   Arquitetura
-   Backlog do projeto

## Fase 1 --- Fundação Técnica (3--5 semanas)

-   Infraestrutura
-   Instalação do Bahmni
-   Configuração do banco
-   Autenticação Keycloak

## Fase 2 --- Agenda e Cadastro (4--6 semanas)

-   Cadastro de pacientes
-   Agenda médica
-   Portal de consulta de horários

## Fase 3 --- Atendimento via Chat (4--6 semanas)

-   Implantação do Chatwoot
-   Filas de atendimento
-   Integração com agenda

## Fase 4 --- Gestão Clínica (6--10 semanas)

-   Prontuário eletrônico
-   Prescrições
-   Solicitação de exames

## Fase 5 --- Expansão Hospitalar (6--12 semanas)

-   Internação
-   Leitos
-   Farmácia
-   Laboratório
-   Relatórios gerenciais

------------------------------------------------------------------------

# 8. Decisão Recomendada

Arquitetura final:

Bahmni + Chatwoot + Portal Web + Keycloak + PostgreSQL

Benefícios:

-   Sem custo de licença
-   Alta flexibilidade
-   Independência tecnológica
-   Escalabilidade
-   Base para interoperabilidade com padrões de saúde
