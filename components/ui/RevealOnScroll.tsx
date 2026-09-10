"use client";

import type { ReactNode } from "react";
import { motion, type Variants, type Transition } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/motion";

type MotionTagName = "div" | "section" | "article" | "li" | "h3" | "figure";

type RevealProps = {
  children?: ReactNode;
  as?: MotionTagName;
  className?: string;
  variants?: Variants;
  delay?: number;
};

/** Wrapper de entrada única, disparada quando o elemento entra em view. */
export function Reveal({ children, as = "div", className, variants = fadeUp, delay = 0 }: RevealProps) {
  const Component = motion[as];
  const resolvedVariants: Variants = delay
    ? {
        hidden: variants.hidden,
        visible: {
          ...(variants.visible as object),
          transition: {
            ...((variants.visible as { transition?: Transition })?.transition ?? {}),
            delay,
          },
        },
      }
    : variants;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={resolvedVariants}
      className={className}
    >
      {children}
    </Component>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  as?: MotionTagName;
  stagger?: number;
  delayChildren?: number;
};

/** Container que orquestra a entrada escalonada dos RevealItem filhos. */
export function RevealGroup({
  children,
  className,
  as = "div",
  stagger = 0.08,
  delayChildren = 0,
}: RevealGroupProps) {
  const Component = motion[as];
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={staggerContainer(stagger, delayChildren)}
      className={className}
    >
      {children}
    </Component>
  );
}

type RevealItemProps = {
  children: ReactNode;
  as?: MotionTagName;
  className?: string;
  variants?: Variants;
};

/** Item filho de um RevealGroup — herda o estado visible/hidden do pai. */
export function RevealItem({ children, as = "div", className, variants = fadeUp }: RevealItemProps) {
  const Component = motion[as];
  return (
    <Component variants={variants} className={className}>
      {children}
    </Component>
  );
}
