"use client";

import dynamic from "next/dynamic";
import { useRef, useState, type MouseEvent } from "react";
import NextImage from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { AmbientVideo } from "@/components/ui/AmbientVideo";
import { IconPlus } from "@/components/ui/icons";
import { RevealItem, RevealGroup } from "@/components/ui/RevealOnScroll";
import type { GalleryImage } from "@/content/gallery";
import { cn } from "@/lib/utils";

const Lightbox = dynamic(() => import("@/components/ui/Lightbox").then((m) => m.Lightbox), {
  ssr: false,
});

const spanClasses: Record<GalleryImage["span"], string> = {
  large: "col-span-2 row-span-2",
  tall: "col-span-1 row-span-1 md:row-span-2",
  wide: "col-span-2 row-span-1",
  square: "col-span-1 row-span-1",
};

function GalleryTileMedia({ image }: { image: GalleryImage }) {
  if (image.media.kind === "video") {
    return <AmbientVideo src={image.media.src} tone={image.tone} />;
  }

  return (
    <NextImage
      src={image.media.src}
      alt={image.alt}
      fill
      sizes="(min-width: 768px) 25vw, 50vw"
      className="object-cover object-center"
      style={image.media.zoom ? { transform: `scale(${image.media.zoom})` } : undefined}
    />
  );
}

type GalleryTileProps = {
  image: GalleryImage;
  onOpen: () => void;
};

/** Tile com leve tilt 3D que segue o cursor no hover (mouse); em touch, o tilt simplesmente não é acionado. */
function GalleryTile({ image, onOpen }: GalleryTileProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const springConfig = { stiffness: 300, damping: 25, mass: 0.5 };
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-7, 7]), springConfig);
  const glowBackground = useTransform([pointerX, pointerY], ([px, py]: number[]) =>
    `radial-gradient(180px circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.28), transparent 65%)`,
  );

  function handleMouseMove(event: MouseEvent<HTMLButtonElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onOpen}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={`Ampliar: ${image.alt}`}
      style={{ rotateX, rotateY, transformPerspective: 700 }}
      className="absolute inset-0 h-full w-full cursor-pointer [transform-style:preserve-3d]"
    >
      <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.08]">
        <GalleryTileMedia image={image} />
      </div>

      <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />

      <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <IconPlus className="h-4 w-4" aria-hidden="true" />
      </span>

      {image.media.kind === "video" ? (
        <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.14em] text-ink">
          Vídeo
        </span>
      ) : null}
    </motion.button>
  );
}

export function GalleryInteractive({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <RevealGroup
        as="div"
        stagger={0.05}
        className="mt-16 grid grid-cols-2 auto-rows-[160px] gap-3 [grid-auto-flow:dense] sm:auto-rows-[200px] md:grid-cols-4 md:gap-4 lg:auto-rows-[220px]"
      >
        {images.map((image, index) => (
          <RevealItem
            key={image.id}
            as="figure"
            className={cn("group relative overflow-hidden rounded-sm [perspective:700px]", spanClasses[image.span])}
          >
            <GalleryTile image={image} onOpen={() => setOpenIndex(index)} />
          </RevealItem>
        ))}
      </RevealGroup>

      {openIndex !== null ? (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={(next) => setOpenIndex(next)}
        />
      ) : null}
    </>
  );
}
