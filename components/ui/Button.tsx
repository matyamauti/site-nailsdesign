import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "onDark";
  external?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center gap-2.5 text-[0.9375rem] font-medium tracking-[0.01em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "rounded-[4px] px-7 py-3.5 text-white bg-[linear-gradient(135deg,var(--color-lilac)_0%,var(--color-purple)_55%,var(--color-purple-deep)_100%)] shadow-[0_1px_2px_rgba(23,20,26,0.08)] hover:shadow-[0_8px_20px_-8px_rgba(142,95,176,0.55)] hover:-translate-y-[1px]",
  secondary: "py-3.5",
  onDark:
    "rounded-[4px] px-7 py-3.5 text-ink bg-white hover:-translate-y-[1px] hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: ButtonProps) {
  const isGhost = variant === "secondary";

  return (
    <a
      href={href}
      className={cn(base, variants[variant], className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {isGhost ? (
        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-no-repeat bg-left-bottom pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
          {children}
        </span>
      ) : (
        children
      )}
    </a>
  );
}
