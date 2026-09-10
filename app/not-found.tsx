import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-bg py-24">
      <Container className="text-center">
        <span className="block text-[0.8125rem] font-medium uppercase tracking-[0.28em] text-purple-deep">
          Erro 404
        </span>
        <h1 className="mx-auto mt-5 max-w-lg text-balance font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-ink">
          Esta página não existe{" "}
          <span className="font-italic-accent text-purple">por aqui</span>.
        </h1>
        <p className="mx-auto mt-5 max-w-sm text-[1.0625rem] leading-relaxed text-ink-muted">
          O endereço pode ter mudado. Volte para a página inicial do {siteConfig.name}.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/" variant="primary">
            Voltar ao início
          </Button>
        </div>
      </Container>
    </section>
  );
}
