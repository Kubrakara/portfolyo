"use client";

import { motion, useReducedMotion } from "motion/react";

export function WavingHand() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.span
      className="inline-flex items-center justify-center origin-[70%_70%] text-accent ml-2 sm:ml-3 align-baseline"
      animate={
        prefersReducedMotion
          ? undefined
          : {
              rotate: [0, 16, -10, 16, -6, 12, 0],
            }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }
      }
      aria-hidden="true"
    >
      <svg
        className="w-8 h-8 sm:w-10 sm:h-10 text-accent"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.4 2a2.4 2.4 0 0 0-2.4 2.4v8.2l-1.3-1.4a2.4 2.4 0 0 0-3.4 3.4l4.8 4.8c3.2 3.2 8.3 3.2 11.5 0l.4-.4c.7-.7 1.1-1.6 1.1-2.6V12a2.4 2.4 0 0 0-4.8 0v-1.2a2.4 2.4 0 0 0-4.8 0V4.4A2.4 2.4 0 0 0 12.4 2z" />
      </svg>
    </motion.span>
  );
}

