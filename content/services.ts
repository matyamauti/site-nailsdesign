export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: "fiberglass" | "moldF1" | "shield" | "maintenance" | "nailArt";
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "fibra-de-vidro",
    index: "01",
    title: "Fibra de Vidro",
    description:
      "Alongamento leve e resistente, com acabamento natural e durabilidade para o dia a dia sem abrir mão da sofisticação.",
    icon: "fiberglass",
    featured: true,
  },
  {
    id: "molde-f1",
    index: "02",
    title: "Molde F1",
    description:
      "Técnica de alongamento em molde para um formato preciso, uniforme e com curvatura impecável.",
    icon: "moldF1",
  },
  {
    id: "blindagem",
    index: "03",
    title: "Blindagem",
    description:
      "Fortalecimento da unha natural com camada protetora de alta resistência e brilho duradouro.",
    icon: "shield",
  },
  {
    id: "manutencao",
    index: "04",
    title: "Manutenção",
    description:
      "Cuidado periódico para manter o alongamento sempre alinhado, seguro e com aparência de recém-feito.",
    icon: "maintenance",
  },
  {
    id: "nail-art",
    index: "05",
    title: "Nail Art",
    description:
      "Design autoral em cada unha — do minimalista ao editorial, sempre sob medida para o seu estilo.",
    icon: "nailArt",
  },
];
