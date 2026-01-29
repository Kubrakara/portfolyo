"use client";

import { useState, useEffect } from "react";
import { OverlayMenu } from "./OverlayMenu";
import { ThemeSwitch } from "./ThemeSwitch";
import { useThemeColors } from "@/lib/hooks/useThemeColors";
import { GRADIENTS, NAVBAR_COLORS, NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { mounted, isDarkMode } = useThemeColors();

  useEffect(() => {
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

  // Hydration hatasını önlemek için mounted kontrolü
  if (!mounted) return null;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full top-0 left-0 z-50 py-5 shadow-lg bg-gradient-to-r ${isDarkMode ? GRADIENTS.navbar.dark : GRADIENTS.navbar.light
          } ${isDarkMode ? "bg-[80%]" : "bg-[20%]"}`}
      >
        <div className="relative flex justify-between items-center w-[calc(100%-100px)] mx-auto">
          {/* 🚀 Logo */}
          <Link
            href="/"
            className="font-black text-2xl uppercase tracking-wider transition-all hover:opacity-90 text-[#E1EBED]"
          >
            <span
              className={`duration-200`}
              style={{
                color: isDarkMode
                  ? NAVBAR_COLORS.logoFirst.dark
                  : NAVBAR_COLORS.logoFirst.light,
              }}
            >
              Kübra
            </span>
            <span style={{ color: NAVBAR_COLORS.logoSecond }}>Kara</span>
          </Link>

          <nav className="hidden lg:flex space-x-6 text-[#E1EBED] text-xl font-semibold">
            {NAV_ITEMS.map(({ label, href }) => (
              <Link key={href} href={href}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="nav-link px-4 py-2 rounded-lg transition-all font-medium"
                  style={{ color: NAVBAR_COLORS.buttonText[isDarkMode ? 'dark' : 'light'] }}
                  aria-label={`Navigate to ${label}`}
                >
                  {label}
                </motion.button>
              </Link>
            ))}
          </nav>

          {/* 🌙 Tema Geçiş Butonu */}
          <div className="hidden lg:flex">
            <ThemeSwitch />
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
