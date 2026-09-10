import { Container } from "@/components/ui/Container";
import { IconInstagram, IconWhatsapp } from "@/components/ui/icons";
import { siteConfig, whatsappHref } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70">
      <Container className="py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-2">
            <span className="font-display text-2xl text-white">Studio Jauker</span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{siteConfig.description}</p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram do ${siteConfig.name}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:text-white"
              >
                <IconInstagram className="h-4 w-4" />
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp do ${siteConfig.name}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-white/40 hover:text-white"
              >
                <IconWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Navegação</span>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Sobre", "#sobre"],
                ["Serviços", "#servicos"],
                ["Galeria", "#galeria"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">Contato</span>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.neighborhood}, {siteConfig.address.city} — {siteConfig.address.state}
              </li>
              <li>
                <span className="block text-white/70">{siteConfig.hours.days}</span>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {siteConfig.hours.slots.map((slot) => (
                    <span
                      key={slot}
                      className="rounded-[4px] border border-white/15 py-1.5 text-center text-xs text-white/70"
                    >
                      {slot}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {siteConfig.name}. Todos os direitos reservados.</span>
          <span>Praia Grande, SP</span>
        </div>
      </Container>
    </footer>
  );
}
