"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface OverlayMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export function OverlayMenu({ isOpen, toggleMenu }: OverlayMenuProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = ["Home", "About", "Projects", "Contact"];

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
            {navItems.map((item, i) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={toggleMenu}
                >
                  <Button className="hover:text-[#8121D0] transition-colors text-white text-2xl bg-transparent">
                    {item}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* 🌙 Tema Geçişi */}
          {mounted && (
            <motion.div
              className="cursor-pointer mt-10 flex flex-col items-center space-y-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-16 h-2 border-2 border-[#E1EBED] rounded-full bg-[#8121D0] relative">
                <div
                  className={cn(
                    "absolute -top-[11px] -left-[13px] w-[26px] h-[26px] rounded-full shadow-md bg-[#E1EBED] transition-all duration-300",
                    theme === "dark" && "left-[43px]"
                  )}
                />
              </div>

              <p className="font-semibold text-sm tracking-wider text-[#DCCFED]">
                <span className={cn(theme === "dark" && "underline")}>
                  dark
                </span>{" "}
                -{" "}
                <span className={cn(theme === "light" && "underline")}>
                  light
                </span>
              </p>
            </motion.div>
          )}

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
