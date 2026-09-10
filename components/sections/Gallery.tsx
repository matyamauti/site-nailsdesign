import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryInteractive } from "@/components/sections/GalleryInteractive";
import { galleryImages } from "@/content/gallery";

export function Gallery() {
  return (
    <section id="galeria" className="bg-surface py-16 md:py-24 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Galeria"
          title={
            <>
              Trabalhos em{" "}
              <span className="font-italic-accent text-purple">detalhe</span>.
            </>
          }
          subtitle="Um recorte do que sai do estúdio — do alongamento ao acabamento final, em foto e vídeo."
        />
        <GalleryInteractive images={galleryImages} />
      </Container>
    </section>
  );
}
