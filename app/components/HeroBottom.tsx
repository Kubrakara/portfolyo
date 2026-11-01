"use client";

import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { HERO_STATS, TECH_STACK_ITEMS } from "@/lib/constants";

export function HeroBottom() {
  const prefersReducedMotion = useReducedMotion();

  // Duplicate items for seamless continuous ticker
  const tickerItems = [...TECH_STACK_ITEMS, ...TECH_STACK_ITEMS];

  return (
    <div className="w-full flex flex-col items-center gap-10 sm:gap-12 pt-6">
      {/* 3 Öne Çıkan İstatistik Kartı */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {HERO_STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-card/70 backdrop-blur-sm border border-border shadow-sm hover:border-accent/40 transition-colors duration-200"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              prefersReducedMotion
                ? { duration: 0.3 }
                : { duration: 0.5, delay: 0.1 * idx }
            }
          >
            <span className="text-2xl sm:text-3xl font-bold text-accent font-sans tracking-tight">
              {stat.value}
            </span>
            <span className="text-sm sm:text-base font-semibold text-foreground mt-1.5">
              {stat.label}
            </span>
            <span className="text-xs sm:text-sm text-muted mt-0.5">
              {stat.detail}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Teknoloji Şeridi (Reduced-motion'da duran) */}
      <div className="w-full flex flex-col items-center gap-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-muted">
          Kullandığım Teknolojiler
        </span>

        <div className="w-full overflow-hidden relative py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          {prefersReducedMotion ? (
            /* Hareketsiz liste (Reduced Motion) */
            <div className="flex flex-wrap justify-center gap-3">
              {TECH_STACK_ITEMS.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-xl bg-card border border-border text-foreground text-xs sm:text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : (
            /* Kayan sonsuz şerit */
            <motion.div
              className="flex w-max gap-3 sm:gap-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {tickerItems.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="px-4 py-2 rounded-xl bg-card/80 border border-border text-foreground text-xs sm:text-sm font-medium whitespace-nowrap shadow-xs"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Kaydırma İpucu */}
      <div className="flex flex-col items-center gap-2 text-muted">
        <span className="text-xs font-medium uppercase tracking-wider">
          Aşağı Kaydır
        </span>
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          aria-hidden="true"
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </div>
    </div>
  );
}

