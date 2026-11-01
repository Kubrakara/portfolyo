"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { HERO_ROLES } from "@/lib/constants";

export function HeroTypewriter() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || prefersReducedMotion) return;

    const currentTitle = HERO_ROLES[index] ?? "";

    // If fully typed, pause before deleting
    if (subIndex === currentTitle.length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    // If fully deleted, switch to next title
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % HERO_ROLES.length);
      return;
    }

    // Typing/deleting speed
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? 45 : 85
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, isMounted, prefersReducedMotion]);

  // When reduced motion is preferred or during SSR, render the primary title statically
  if (prefersReducedMotion || !isMounted) {
    return (
      <div className="min-h-[2.5rem] sm:min-h-[3rem] flex items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent tracking-tight">
          {HERO_ROLES[0]}
        </h2>
      </div>
    );
  }

  const currentTitle = HERO_ROLES[index] ?? "";
  const displayedText = currentTitle.substring(0, subIndex);

  return (
    <div className="min-h-[2.5rem] sm:min-h-[3rem] flex items-center">
      <h2
        className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent tracking-tight flex items-center"
        aria-label={currentTitle}
      >
        <span>{displayedText}</span>
        <span
          className="inline-block w-[3px] h-6 sm:h-7 bg-accent ml-1 animate-pulse"
          aria-hidden="true"
        />
      </h2>
    </div>
  );
}

