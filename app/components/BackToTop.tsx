"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaArrowUp } from "react-icons/fa";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3.5 rounded-full shadow-lg z-40 bg-accent text-accent-foreground hover:opacity-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Yukarı çık"
        >
          <FaArrowUp className="text-base" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
