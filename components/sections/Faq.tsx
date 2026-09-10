import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/RevealOnScroll";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/content/faq";

export function Faq() {
  return (
    <section id="faq" className="bg-surface py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title={
                <>
                  Perguntas{" "}
                  <span className="font-italic-accent text-purple">frequentes</span>.
                </>
              }
              subtitle="Não encontrou o que precisa? Fale com a gente diretamente pelo WhatsApp."
            />
          </div>
          <Reveal as="div" className="lg:col-span-7 lg:col-start-6">
            <Accordion items={faqItems} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
