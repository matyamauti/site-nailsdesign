"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { cn } from "@/lib/utils";

type Tone = "lilac" | "rosegold" | "ink" | "mauve" | "purple";

type AmbientVideoProps = {
  src: string;
  tone?: Tone;
  label?: string;
  className?: string;
  /** Mantém o vídeo tocando continuamente, mesmo fora da viewport (ex.: vídeo de fundo do Hero). */
  alwaysPlay?: boolean;
};

/**
 * Vídeo decorativo em loop (hero / tiles de galeria): mudo, sem controles,
 * some para prefers-reduced-motion. Por padrão pausa fora da viewport para
 * poupar bateria/CPU, a menos que `alwaysPlay` esteja ativo. O MediaPlaceholder
 * fica sempre por baixo como poster/fallback.
 */
export function AmbientVideo({ src, tone = "purple", label, className, alwaysPlay = false }: AmbientVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(containerRef, { amount: 0.2 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    if (alwaysPlay || inView) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [inView, prefersReducedMotion, alwaysPlay]);

  return (
    <div ref={containerRef} className={cn("relative h-full w-full overflow-hidden", className)}>
      <MediaPlaceholder tone={tone} label={ready ? undefined : label} />

      {!prefersReducedMotion ? (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setReady(true)}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            ready ? "opacity-100" : "opacity-0",
          )}
        />
      ) : null}
    </div>
  );
}
