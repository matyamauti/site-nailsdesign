// Dados centrais do negócio.
// TODO: substituir os placeholders restantes pelos dados reais do Nicolly Jauker
// antes de publicar (telefone e URL final do site).

export const siteConfig = {
  name: "Nicolly Jauker",
  tagline: "Alongamento de unhas em Praia Grande",
  description:
    "Studio Jauker especializada em alongamento de unhas em Praia Grande — fibra de vidro, molde F1, blindagem, manutenção e nail art com acabamento impecável.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nicollyjauker.com.br", // TODO: domínio real
  locale: "pt_BR",

  whatsappNumber: "5511958995863",
  whatsappMessage:
    "Oi! Gostaria de agendar meu horário. Pode me passar mais informações? ✨",

  instagramHandle: "studio.jauker",
  instagramUrl: "https://instagram.com/studio.jauker",

  address: {
    street: "Avenida Presidente Kennedy, 3671",
    neighborhood: "Aviação",
    city: "Praia Grande",
    state: "SP",
    postalCode: "11700-000", // TODO: confirmar CEP exato
    country: "BR",
  },

  hours: {
    days: "Segunda a Domingo",
    slots: ["13h", "15h", "17h", "19h", "21h", "23h"],
  },
} as const;

export function whatsappHref(customMessage?: string) {
  const text = encodeURIComponent(customMessage ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
