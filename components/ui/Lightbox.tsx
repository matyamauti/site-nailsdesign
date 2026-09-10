"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import NextImage from "next/image";
import { IconArrowRight, IconClose } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/content/gallery";

type LightboxProps = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const image = images[index];

  // Foco inicial, bloqueio de scroll e devolução do foco ao fechar — só no mount/unmount.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, []);

  // Navegação por teclado — precisa ver o `index` mais recente a cada tecla.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [index, images.length, onClose, onNavigate]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`Galeria — ${image.alt}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-6"
        onClick={onClose}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar galeria"
          className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
        >
          <IconClose className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + images.length) % images.length);
          }}
          aria-label="Imagem anterior"
          className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 rotate-180 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:flex"
        >
          <IconArrowRight className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % images.length);
          }}
          aria-label="Próxima imagem"
          className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:flex"
        >
          <IconArrowRight className="h-5 w-5" />
        </button>

        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "relative max-h-[80vh] w-full max-w-md overflow-hidden rounded-sm sm:max-w-lg",
            image.media.kind === "video" && "aspect-[9/16] max-w-sm",
          )}
          style={
            image.media.kind === "image"
              ? { aspectRatio: `${image.media.width} / ${image.media.height}` }
              : undefined
          }
        >
          {image.media.kind === "video" ? (
            <video
              key={image.media.src}
              src={image.media.src}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="h-full w-full object-cover"
            >
              <track kind="captions" />
            </video>
          ) : (
            <NextImage
              src={image.media.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 32rem, 100vw"
              className="object-contain"
            />
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
