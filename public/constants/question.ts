interface IQuestion {
  question: string
  response: string
}

export const QUESTION: IQuestion[] = [
  {
    question: 'Quais organizações de seguridade social são aceitas?',
    response: 'Aceitamos Golden Cross, Bradesco Saúde, etc.',
  },
  {
    question: 'Qual é o horário de funcionamento da clínica?',
    response: 'Estamos abertos de segunda a sexta, das 8h às 18h.',
  },
  {
    question: 'Como posso agendar uma consulta?',
    response:
      'Você pode agendar uma consulta ligando para nosso telefone ou através do nosso site.',
  },
  {
    question: 'Quais serviços odontológicos vocês oferecem?',
    response:
      'Oferecemos uma ampla gama de serviços, incluindo limpeza dental, tratamento de canal, implantes e mais.',
  },
]
