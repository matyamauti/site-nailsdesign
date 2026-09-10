import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/RevealOnScroll";

const proofPoints = [
  { label: "Experiência", description: "Especialização contínua em técnicas de alongamento." },
  { label: "Qualidade", description: "Materiais selecionados e protocolos de higiene rigorosos." },
  { label: "Precisão", description: "Formato e curvatura ajustados unha a unha." },
  { label: "Atendimento", description: "Escuta atenta e cuidado individual em cada visita." },
];

export function About() {
  return (
    <section id="sobre" className="bg-purple-vivid py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }} className="relative lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-sm">
              <Image
                src="/images/logo/nail-design-logo.png"
                alt="Logo Nicoli Jauker Nail Design"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-contain"
                priority
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <span className="block text-[0.8125rem] font-medium uppercase tracking-[0.24em] text-ink">
                Sobre
              </span>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] tracking-[-0.01em] text-ink">
                Uma trajetória dedicada à{" "}
                <span className="font-italic-accent text-purple-deep">precisão</span>.
              </h2>
              <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink">
                Por trás de cada alongamento está uma técnica apurada e um olhar
                atento a cada detalhe — da escolha do formato ao acabamento final. Um trabalho que
                une durabilidade, conforto e estética refinada, em um ambiente pensado para que
                cada visita seja também um momento de cuidado.
              </p>
            </Reveal>

            <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {proofPoints.map((point, i) => (
                <Reveal key={point.label} delay={0.05 * i} className="border-t border-ink/15 pt-5">
                  <dt className="font-display text-lg text-ink">{point.label}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-ink/80">{point.description}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
