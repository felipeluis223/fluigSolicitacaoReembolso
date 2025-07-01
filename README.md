# 💰 Processo Fluig – Solicitação de Pagamento / Reembolso

Este projeto implementa um processo de **Solicitação de Pagamento / Reembolso** no Fluig, com **fluxo de aprovação automática baseado no Centro de Custo** informado na solicitação. Ele é ideal para reembolsos de viagens, compras de materiais e serviços prestados.

---

## 📌 Objetivo

- Permitir que colaboradores solicitem reembolsos de forma padronizada.
- Roteamento automático da aprovação para o responsável do centro de custo.
- Controle de valores, comprovantes e rastreabilidade da despesa.
- Possibilidade de integração com ERP (Protheus, SAP, etc).

---

## 📋 Estrutura do Formulário

| Campo                 | Tipo            | Descrição                                        |
|----------------------|-----------------|--------------------------------------------------|
| Nome do Colaborador  | Texto            | Preenchido automaticamente (`colleagueName`)     |
| Matrícula            | Texto            | Preenchido automaticamente (`colleagueId`)       |
| Centro de Custo      | Autocomplete     | Lista dinâmica via dataset                       |
| Tipo de Despesa      | Select           | Viagem, Material, Serviço, Outro                 |
| Valor                | Moeda            | Validação para > 0                               |
| Data da Despesa      | Data             | Data da realização da despesa                    |
| Descrição            | Texto Longo      | Detalhes da despesa                              |
| Justificativa        | Texto            | Obrigatória para valores acima de R$ 1.000,00   |
| Comprovante          | Upload (anexo)   | Obrigatório antes de envio                       |

---

## 🔁 Fluxo do Processo

```plaintext
[Início]
   ↓
[Preenchimento da Solicitação]
   ↓
[Aprovação por Centro de Custo]
   ↓
[Aprovação Financeira]
   ↓
[Efetuar Pagamento]
   ↓
[Fim]
