import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Ícones autorais das seções de serviço — traço fino e consistente,
// desenhados especificamente para este projeto (sem biblioteca externa).

export function IconFiberglass(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 20c-1.2-3.8-1.6-8 .4-12.4C10.7 4.9 12.3 3.6 14 3c1 3.6.9 7.2-.7 10.6C12.2 16.6 10.6 18.6 9 20Z" />
      <path d="M10.2 8.4c1.3.6 2.5 1.6 3.3 3" />
    </svg>
  );
}

export function IconMoldF1(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8.5 20c-1-3.6-1.2-7.7.3-11.8C9.7 5.2 11.5 3.6 13 3c1.4 3.5 1.4 7.3.1 11-1 2.8-2.7 4.9-4.6 6Z" />
      <path d="M8.2 13.2c1.7.4 3.5.4 5.2-.1" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c2 1.1 4 1.7 6 1.7 0 6.9-2.4 11.2-6 13.3-3.6-2.1-6-6.4-6-13.3 2 0 4-.6 6-1.7Z" />
      <path d="M9.3 12.1l1.9 1.9 3.5-3.9" />
    </svg>
  );
}

export function IconMaintenance(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19.4 12a7.4 7.4 0 1 1-2.1-5.2" />
      <path d="M19.6 4.8v3.6H16" />
    </svg>
  );
}

export function IconNailArt(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v3.2M12 16.8V20M4 12h3.2M16.8 12H20" />
      <path d="M6.6 6.6l2.1 2.1M15.3 15.3l2.1 2.1M17.4 6.6l-2.1 2.1M8.7 15.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="2.1" />
    </svg>
  );
}

// Utilitários

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3.2l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L12 3.2Z" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconWhatsapp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2.5c-5.26 0-9.54 4.28-9.54 9.54 0 1.68.44 3.31 1.28 4.75L2.5 21.5l4.86-1.27a9.5 9.5 0 0 0 4.68 1.24h.01c5.26 0 9.54-4.28 9.54-9.54 0-2.55-.99-4.94-2.79-6.75a9.47 9.47 0 0 0-6.76-2.68Zm0 17.32h-.01a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-2.88.75.77-2.81-.19-.29a7.86 7.86 0 0 1-1.21-4.16c0-4.35 3.54-7.89 7.89-7.89a7.84 7.84 0 0 1 5.58 2.32 7.83 7.83 0 0 1 2.3 5.58c0 4.35-3.54 7.77-7.93 7.77Zm4.32-5.9c-.24-.12-1.4-.69-1.62-.77-.22-.08-.37-.12-.53.12-.16.24-.6.77-.74.93-.14.16-.27.18-.5.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.39-1.31-1.63-.14-.24-.01-.37.1-.49.11-.11.24-.27.36-.41.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.73-1.75-.19-.46-.39-.4-.53-.4h-.45c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.1" cy="6.9" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-6.5-6-6.5-11.2A6.5 6.5 0 0 1 18.5 9.8C18.5 15 12 21 12 21Z" />
      <circle cx="12" cy="9.7" r="2.1" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.3" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export const serviceIcons = {
  fiberglass: IconFiberglass,
  moldF1: IconMoldF1,
  shield: IconShield,
  maintenance: IconMaintenance,
  nailArt: IconNailArt,
} as const;
