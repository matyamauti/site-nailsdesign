import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <span
        className={cn(
          "block text-[0.8125rem] font-medium uppercase tracking-[0.24em]",
          tone === "dark" ? "text-white/50" : "text-purple-deep",
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.01em]",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-[1.0625rem] leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-ink-muted",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
