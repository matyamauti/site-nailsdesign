"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { IconClose, IconMenu } from "@/components/ui/icons";
import { Container } from "@/components/ui/Container";
import { siteConfig, whatsappHref } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#faq", label: "FAQ" },
];

const underline =
  "bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-no-repeat bg-left-bottom pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        scrolled ? "bg-purple-soft/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className={cn("relative border-b transition-colors duration-500", scrolled ? "border-border" : "border-transparent")}>
        <Container className="flex h-20 items-center justify-between">
          <a href="#top" className="group shrink-0">
            <span
              className={cn(
                "font-display text-xl tracking-[0.02em] transition-colors duration-500",
                underline,
                scrolled ? "text-ink" : "text-white",
              )}
            >
              Studio Jauker
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "group text-[0.9375rem] transition-colors duration-500",
                  scrolled ? "text-ink-muted hover:text-ink" : "text-white/80 hover:text-white",
                )}
              >
                <span className={underline}>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <motion.a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={cn(
                "inline-block rounded-[4px] px-5 py-2.5 text-[0.9375rem] font-medium transition-colors duration-500",
                scrolled ? "bg-ink text-white hover:bg-purple-deep" : "bg-white text-ink hover:bg-purple-soft",
              )}
            >
              Agendar
            </motion.a>
          </div>

          <motion.button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className={cn("md:hidden", scrolled ? "text-ink" : "text-white")}
          >
            {mobileOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </motion.button>
        </Container>

        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[linear-gradient(90deg,var(--color-lilac)_0%,var(--color-purple-vivid)_100%)]"
          style={{ scaleX: scrollYProgress }}
        />
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-20 z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-b-2xl bg-ink px-6 py-8 text-white shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 6, color: "var(--color-purple-vivid)", transition: { delay: 0, duration: 0.2 } }}
                  whileTap={{ x: 2, transition: { delay: 0, duration: 0.1 } }}
                  transition={{ delay: 0.04 * i, duration: 0.35 }}
                  className="font-display text-2xl"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 block rounded-[4px] bg-white px-6 py-4 text-center text-[0.9375rem] font-medium text-ink"
            >
              Agendar horário
            </motion.a>
            <p className="mt-5 text-center text-xs text-white/40">
              {siteConfig.address.city} · {siteConfig.address.state}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
