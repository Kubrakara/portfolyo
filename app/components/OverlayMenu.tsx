"use client";

import { useEffect } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface OverlayMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export function OverlayMenu({ isOpen, toggleMenu }: OverlayMenuProps) {
  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.classList.remove("overflow-hidden");
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          key="overlay"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md text-foreground"
        >
          {/* Close button */}
          <button
            type="button"
            className="absolute top-6 right-6 p-3 text-foreground hover:text-accent transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={toggleMenu}
            aria-label="Menüyü kapat"
          >
            <X size={30} aria-hidden="true" />
          </button>

          {/* Nav links */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="flex flex-col items-center space-y-6 text-2xl sm:text-3xl font-bold uppercase tracking-wider"
          >
            {NAV_ITEMS.map(({ label, href }) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href={href}
                  onClick={toggleMenu}
                  className="px-6 py-2 rounded-xl text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Theme switch */}
          <div className="mt-10">
            <ThemeSwitch />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
