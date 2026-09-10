import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/RevealOnScroll";
import { whatsappHref } from "@/lib/site-config";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 md:py-24 lg:py-28">
      <Image
        src="/images/studio/studio-interior.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,20,26,0.82)_0%,rgba(23,20,26,0.88)_50%,rgba(23,20,26,0.82)_100%)]" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-purple) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <Container className="relative text-center">
        <Reveal>
          <span className="block text-[0.8125rem] font-medium uppercase tracking-[0.28em] text-white/50">
            Agende seu horário
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.1] tracking-[-0.01em] text-white">
            Suas unhas merecem técnica, precisão e um{" "}
            <span className="font-italic-accent text-purple">acabamento</span> à altura.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[1.0625rem] leading-relaxed text-white/70">
            Atendimento individual, sem pressa, com o padrão de acabamento que você já viu na
            galeria. Fale agora e garanta seu horário em Praia Grande.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={whatsappHref()} external variant="primary">
              Agendar pelo WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
