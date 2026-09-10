"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AmbientVideo } from "@/components/ui/AmbientVideo";
import { siteConfig, whatsappHref } from "@/lib/site-config";
import { easeEditorial } from "@/lib/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeEditorial } },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={sectionRef} className="relative flex h-[100dvh] min-h-[640px] items-end overflow-hidden bg-ink">
      <motion.div className="absolute inset-0 scale-[1.1]" style={{ y: imageY }}>
        <AmbientVideo src="/videos/hero-loop.mp4" tone="ink" label={siteConfig.name} alwaysPlay />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,20,26,0.15)_0%,rgba(23,20,26,0.55)_60%,rgba(23,20,26,0.88)_100%)]" />
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-purple) 0%, transparent 70%)" }}
      />

      <Container className="relative z-10 pb-24 pt-40 md:pb-28">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.01em] text-white text-balance"
          >
            Alongamento de unhas em sua forma mais{" "}
            <span className="font-italic-accent text-purple">refinada</span>.
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-lg text-[1.0625rem] leading-relaxed text-white/70">
            Fibra de vidro, molde F1, blindagem e nail art — com o acabamento e a precisão de
            um ateliê especializado, no coração de Praia Grande.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href={whatsappHref()} external variant="primary">
              Agendar horário
            </Button>
            <Button href="#servicos" variant="secondary" className="text-white/90">
              Conhecer serviços
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
