import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/RevealOnScroll";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <section id="processo" className="bg-bg py-16 md:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Processo"
          title={
            <>
              Do primeiro contato ao{" "}
              <span className="font-italic-accent text-purple">resultado</span>.
            </>
          }
          subtitle="Um roteiro simples, pensado para que você saiba exatamente o que esperar em cada etapa."
        />

        <div className="relative mt-20">
          <div className="absolute left-[1.375rem] top-2 bottom-2 w-px bg-border md:left-0 md:right-0 md:top-[1.375rem] md:h-px md:w-auto md:bottom-auto" />
          <Reveal
            as="div"
            variants={{
              hidden: { scaleY: 0, scaleX: 1 },
              visible: { scaleY: 1, scaleX: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="absolute left-[1.375rem] top-2 bottom-2 w-px origin-top bg-purple md:left-0 md:right-0 md:top-[1.375rem] md:h-px md:w-auto md:bottom-auto md:origin-left"
          />

          <RevealGroup
            as="div"
            stagger={0.12}
            className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8"
          >
            {processSteps.map((step) => (
              <RevealItem key={step.number} as="div" className="relative flex gap-6 md:flex-col md:gap-0">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple bg-bg font-display text-base text-purple-deep md:h-12 md:w-12">
                  {step.number}
                </span>

                <div className="relative md:mt-8">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-6 -left-1 select-none font-display text-7xl text-ink-muted/[0.06] md:-top-10 md:text-8xl"
                  >
                    {step.number}
                  </span>
                  <h3 className="relative font-display text-xl text-ink md:text-2xl">{step.title}</h3>
                  <p className="relative mt-2 max-w-[22rem] text-sm leading-relaxed text-ink-muted">
                    {step.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
