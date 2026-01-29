"use client";

import { useEffect } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { useThemeColors } from "@/lib/hooks/useThemeColors";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface OverlayMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export function OverlayMenu({ isOpen, toggleMenu }: OverlayMenuProps) {
  const { mounted } = useThemeColors();

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
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
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#291C3A] text-white"
        >
          {/* Menü Öğeleri */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-col items-center space-y-8 text-4xl uppercase"
          >
            {NAV_ITEMS.map(({ label, href }) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link href={href} onClick={toggleMenu}>
                  <Button className="hover:text-[#8121D0] transition-colors text-white text-2xl bg-transparent">
                    {label}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* 🌙 Tema Geçişi */}
          {mounted && <ThemeSwitch variant="menu" />}

          {/* 🔙 Kapat Butonu */}
          <motion.button
            className="absolute top-6 right-6 text-white p-2 hover:text-[#8121D0] transition-all"
            onClick={toggleMenu}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            aria-label="Close menu"
          >
            <X size={32} />
          </motion.button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
