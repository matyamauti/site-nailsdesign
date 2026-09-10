export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Atendimento",
    description:
      "Recepção acolhedora e conversa inicial para entender sua rotina, referências e expectativas.",
  },
  {
    number: "02",
    title: "Escolha do modelo",
    description:
      "Definição do formato, técnica e acabamento ideais para o seu estilo e o cuidado com a unha natural.",
  },
  {
    number: "03",
    title: "Aplicação",
    description:
      "Execução com precisão técnica, do alongamento ao design, em ambiente higienizado e confortável.",
  },
  {
    number: "04",
    title: "Finalização",
    description:
      "Últimos ajustes de simetria e brilho, com orientações de cuidado para prolongar o resultado.",
  },
];
