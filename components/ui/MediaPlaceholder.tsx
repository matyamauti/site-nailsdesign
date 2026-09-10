import { cn } from "@/lib/utils";

type Tone = "lilac" | "rosegold" | "ink" | "mauve" | "purple";

const gradients: Record<Tone, string> = {
  lilac: "linear-gradient(155deg, #efe7f6 0%, #ded0ea 45%, #c9b6da 100%)",
  rosegold: "linear-gradient(155deg, #f6ece4 0%, #e6cdbb 45%, #c9a38c 100%)",
  ink: "linear-gradient(155deg, #2a2530 0%, #1d1922 55%, #17141a 100%)",
  mauve: "linear-gradient(155deg, #ece6ee 0%, #d3c3d8 45%, #ab97b3 100%)",
  purple: "linear-gradient(155deg, #efe4f6 0%, #cba3de 45%, #8e5fb0 100%)",
};

const labelTone: Record<Tone, string> = {
  lilac: "text-ink/60",
  rosegold: "text-ink/60",
  ink: "text-white/50",
  mauve: "text-ink/60",
  purple: "text-ink/60",
};

type MediaPlaceholderProps = {
  tone?: Tone;
  label?: string;
  className?: string;
};

/**
 * Bloco visual provisório no lugar de fotografia real do estúdio.
 * Mantém a paleta da marca em vez de um cinza genérico de "imagem quebrada".
 */
export function MediaPlaceholder({ tone = "purple", label, className }: MediaPlaceholderProps) {
  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{ background: gradients[tone] }}
      role="img"
      aria-label={label ?? "Imagem ilustrativa — a substituir por fotografia do estúdio"}
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]" preserveAspectRatio="none">
        <defs>
          <pattern id={`grain-${tone}`} width="6" height="6" patternUnits="userSpaceOnUse">
            <path d="M0 6L6 0" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grain-${tone})`} />
      </svg>
      {label ? (
        <span
          className={cn(
            "absolute bottom-4 left-4 text-[0.6875rem] uppercase tracking-[0.18em]",
            labelTone[tone],
          )}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}
