import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/RevealOnScroll";
import { IconArrowRight, serviceIcons } from "@/components/ui/icons";
import { services } from "@/content/services";
import { whatsappHref } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="servicos" className="bg-bg py-16 md:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Serviços"
          title={
            <>
              Técnicas para cada{" "}
              <span className="font-italic-accent text-purple">expressão</span>.
            </>
          }
          subtitle="Cinco especialidades, um mesmo padrão de acabamento — escolhidas de acordo com a sua rotina e o resultado que você busca."
        />

        <div className="mt-16 divide-y divide-border border-t border-border">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.id} delay={index * 0.04} as="article">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Perguntar sobre ${service.title} pelo WhatsApp`}
                  className={cn(
                    "group grid grid-cols-[3.5rem_1fr] items-start gap-x-6 gap-y-3 py-8 transition-colors duration-300 hover:bg-surface sm:grid-cols-[4.5rem_3rem_1fr_2rem] sm:items-center sm:gap-x-8",
                    service.featured && "bg-surface/60",
                  )}
                >
                  <span className="font-display text-2xl text-ink-muted/50 transition-colors duration-300 group-hover:text-purple-deep sm:text-3xl">
                    {service.index}
                  </span>

                  <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-border text-ink-muted transition-colors duration-300 group-hover:border-purple group-hover:text-purple-deep sm:flex">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <span className="col-span-1">
                    <span className="flex items-center gap-3 sm:hidden">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="font-display text-xl text-ink">{service.title}</span>
                    </span>
                    <span className="hidden font-display text-2xl text-ink sm:block md:text-[1.75rem]">
                      {service.title}
                    </span>
                    <span className="mt-2 block max-w-md text-sm leading-relaxed text-ink-muted">
                      {service.description}
                    </span>
                  </span>

                  <span className="hidden shrink-0 items-center justify-end text-ink-muted opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:text-purple-deep group-hover:opacity-100 sm:flex">
                    <IconArrowRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
