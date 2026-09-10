# Studio Jauker — Site Institucional

Site institucional de página única para o **Studio Jauker** (Nicolly Jauker), estúdio especializado em alongamento de unhas em Praia Grande/SP. O objetivo do site é apresentar o trabalho do estúdio com um visual editorial e sofisticado, e converter visitantes em agendamentos diretos pelo WhatsApp.

**[nicollyjauker.com.br](https://nicollyjauker.com.br)** _(domínio a confirmar)_

## Sobre o produto

O site foi pensado como uma vitrine digital do estúdio, com foco em três objetivos:

1. **Apresentar o trabalho** — uma galeria em destaque, com fotos reais dos trabalhos e vídeo de acabamento, é o centro da experiência.
2. **Explicar os serviços** — cinco técnicas oferecidas (Fibra de Vidro, Molde F1, Blindagem, Manutenção e Nail Art), cada uma com sua descrição e ícone autoral.
3. **Converter em agendamento** — todo ponto de contato do site (header, hero, banner de CTA, botão flutuante, cada serviço da lista) leva direto para uma conversa no WhatsApp já com mensagem pré-preenchida.

### Seções do site

| Seção | O que apresenta |
| --- | --- |
| **Hero** | Vídeo em loop do estúdio, headline de posicionamento e chamadas para agendar ou conhecer os serviços |
| **Sobre** | Histórico e diferenciais do trabalho (experiência, qualidade, precisão, atendimento) |
| **Serviços** | As 5 técnicas oferecidas, com descrição e link direto para perguntar sobre cada uma pelo WhatsApp |
| **Galeria** | Grade interativa de fotos e vídeo dos trabalhos, com efeito de inclinação 3D no hover e lightbox em tela cheia |
| **Processo** | As 4 etapas do atendimento, do primeiro contato à finalização |
| **CTA** | Banner de conversão com foto do interior do estúdio |
| **FAQ** | Dúvidas frequentes sobre frequência de manutenção, técnicas e agendamento |

### Identidade visual

A paleta combina tons de **lilás e roxo** (cor de marca) com **rosé gold**, sobre uma base neutra em branco e "ink" (quase-preto), remetendo a um ateliê refinado. A tipografia usa **Playfair Display** (serifada, para títulos e destaques em itálico) combinada com **Inter** (para textos correntes). As transições e entradas de seção usam animações suaves ao rolar a página, desativadas automaticamente para quem tem `prefers-reduced-motion` ativado.

### SEO e performance

- Metadata completa (título, descrição, palavras-chave) e Open Graph com imagem gerada dinamicamente
- Dados estruturados em JSON-LD (`LocalBusiness` / `NailSalon`) com endereço, horário de funcionamento e contato
- `robots.txt` e `sitemap.xml` gerados automaticamente
- Vídeos e imagens carregados sob demanda, pausando fora da viewport para economizar bateria/dados

## Stack técnica

- [Next.js 15](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) (animações)

## Estrutura do projeto

```
app/                  Rotas e metadata do Next.js (layout, home, SEO)
components/
  layout/              Header, Footer, botão flutuante de WhatsApp
  sections/            Seções da home (Hero, Sobre, Serviços, Galeria, Processo, CTA, FAQ)
  ui/                  Componentes reutilizáveis (Button, Accordion, Lightbox, ícones, etc.)
content/               Dados das seções (serviços, galeria, processo, FAQ)
lib/                   Configuração central do site, schema JSON-LD, variants de animação
public/                Imagens, vídeos e demais assets estáticos
```

Todos os dados de negócio (nome, WhatsApp, Instagram, endereço, horários) ficam centralizados em [`lib/site-config.ts`](lib/site-config.ts), e os textos de cada seção em [`content/`](content) — o suficiente para atualizar o conteúdo do site sem tocar nos componentes.

## Deploy

O projeto está hospedado na [Vercel](https://vercel.com), com a variável `NEXT_PUBLIC_SITE_URL` definida para o domínio final de produção.
