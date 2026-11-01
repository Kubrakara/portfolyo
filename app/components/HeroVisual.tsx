"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { HERO_CHIPS, type HeroChip } from "@/lib/constants";

function ChipIcon({ type }: { type: HeroChip["iconType"] }) {
  if (type === "react") {
    return (
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0"
        viewBox="0 0 115.3 100"
        fill="currentColor"
        aria-hidden="true"
      >
        <ellipse rx="11" ry="4.2" cx="57.6" cy="50" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(0 57.6 50)" />
        <ellipse rx="11" ry="4.2" cx="57.6" cy="50" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(60 57.6 50)" />
        <ellipse rx="11" ry="4.2" cx="57.6" cy="50" fill="none" stroke="currentColor" strokeWidth="6" transform="rotate(120 57.6 50)" />
        <circle cx="57.6" cy="50" r="5" fill="currentColor" />
      </svg>
    );
  }

  if (type === "nextjs") {
    return (
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-foreground shrink-0"
        viewBox="0 0 180 180"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="90" cy="90" r="85" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="10" />
        <path d="M117 62v56m-54-56v56l52-56" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-accent text-accent-foreground font-mono font-bold text-[10px] sm:text-xs flex items-center justify-center shrink-0">
      TS
    </span>
  );
}

interface ChipAnimation {
  y: number[];
  duration: number;
}

const chipAnimations: readonly ChipAnimation[] = [
  { y: [-5, 5, -5], duration: 3.6 },
  { y: [6, -4, 6], duration: 4.2 },
  { y: [-4, 6, -4], duration: 3.8 },
];

const defaultAnim: ChipAnimation = { y: [-5, 5, -5], duration: 3.6 };

export function HeroVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-fit mx-auto flex items-center justify-center">
      {/* Profil Görseli Çerçevesi (Yuvarlak Gradyan Halka) */}
      <motion.div
        className="relative p-1.5 sm:p-2 rounded-full bg-gradient-to-tr from-accent via-accent-soft to-border shadow-2xl"
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-card border-2 border-border">
          <Image
            src="/profile.webp"
            alt="Kübra Kara - Mobil & Web Uygulama Geliştirici"
            fill
            priority
            sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* 3 Yüzen Teknoloji Chip'i */}
      {HERO_CHIPS.map((chip, idx) => {
        const anim: ChipAnimation = chipAnimations[idx % chipAnimations.length] ?? defaultAnim;

        return (
          <motion.div
            key={chip.name}
            className={`absolute ${chip.positionClass} z-20 flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-card/90 backdrop-blur-md border border-border shadow-lg text-foreground text-xs sm:text-sm font-semibold select-none`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
            animate={
              prefersReducedMotion
                ? { opacity: 1, y: 0 }
                : {
                    opacity: 1,
                    y: anim.y,
                  }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0.4 }
                : {
                    opacity: { duration: 0.5, delay: 0.2 + idx * 0.1 },
                    y: {
                      duration: anim.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
          >
            <ChipIcon type={chip.iconType} />
            <span>{chip.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
