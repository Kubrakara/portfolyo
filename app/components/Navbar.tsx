"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { OverlayMenu } from "./OverlayMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      document.body.classList.toggle("overflow-hidden", next);
      return next;
    });
  };

  // ❗ Hydration hatasını önlemek için: mounted kontrolü tüm bileşeni sarmalar
  if (!mounted) return null;

  const isDarkMode = (theme || "light") === "dark";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full top-0 left-0 z-50 py-5 shadow-lg bg-gradient-to-r ${
          isDarkMode
            ? "from-[#9e57d8] via-[#3c0e61] to-[#0f0b15] bg-[80%]"
            : "from-[#0f0b15] via-[#a34bd1] to-[#8121D1] bg-[20%]"
        }`}
      >
        <div className="relative flex justify-between items-center w-[calc(100%-100px)] mx-auto">
          {/* 🚀 Logo */}
          <Link
            href="/"
            className="font-black text-2xl uppercase tracking-wider transition-all hover:opacity-90 text-[#E1EBED]"
          >
            <span className="duration-200 dark:text-[#22192f] text-[#8121D1]">
              Kübra
            </span>
            <span className="text-[#DCCFED]">Kara</span>
          </Link>

          {/* 🌐 Masaüstü Menü */}
          <nav className="hidden lg:flex space-x-6 text-[#E1EBED] text-xl font-semibold">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              >
                <Button className="hover:text-yellow-200 text-[#291C3A] dark:hover:text-yellow-300 dark:text-[#DCCFED] font-bold hover:bg-transparent bg-transparent text-xl transition-transform duration-300 hover:scale-110">
                  {item}
                </Button>
              </Link>
            ))}
          </nav>

          {/* 🌙 Tema Geçiş Butonu */}
          <div
            aria-label="Toggle theme"
            className="hidden lg:block cursor-pointer p-2 ml-4 transition-transform duration-300 hover:scale-110"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <div className="w-[60px] h-[8px] border-2 border-[#E1EBED] rounded-full bg-[#8121D0] relative">
              <div
                className={cn(
                  "absolute -top-[11px] -left-[13px] w-[26px] h-[26px] rounded-full shadow-md bg-[#E1EBED] transition-all",
                  theme === "dark" && "left-[43px]"
                )}
              />
            </div>
          </div>

          {/* 📱 Mobil Menü İkonu */}
          {isMobile && (
            <button
              className="cursor-pointer p-3.5 text-white"
              onClick={toggleMenu}
              aria-label="Open mobile menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>
      </motion.header>

      {/* 📱 Overlay Menü */}
      <OverlayMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
