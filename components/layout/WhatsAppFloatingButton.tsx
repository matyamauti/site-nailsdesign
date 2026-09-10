"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { IconWhatsapp } from "@/components/ui/icons";
import { whatsappHref } from "@/lib/site-config";

export function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 640);
  });

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar horário pelo WhatsApp"
          initial={{ opacity: 0, y: 12, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.94 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05 }}
          className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-[0_10px_24px_-8px_rgba(23,20,26,0.45)] md:bottom-8 md:right-8"
        >
          <IconWhatsapp className="h-6 w-6" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
