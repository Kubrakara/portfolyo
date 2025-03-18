"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { OverlayMenu } from "./OverlayMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Menü ikonları

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDarkMode = (theme || "light") === "dark";
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden", isOpen);
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 left-0 z-50 bg-gradient-to-r py-5 shadow-lg mb-28
          ${
            isDarkMode
              ? "from-[#8121D1] via-[#3c0e61] to-[#22192f] bg-[80%]" // Koyu mod: %80 koyu
              : "from-[#22192f] via-[#a34bd1] to-[#8121D1] bg-[20%]" // Açık mod: %20 koyu
          }`}
      >
        <div className="relative flex justify-between items-center w-[calc(100%-100px)] mx-auto">
          {/* 🚀 Logo */}
          <div className="cursor-pointer transition-transform duration-300 hover:scale-110">
            <Link
              href="/"
              className="font-montserrat font-black text-2xl uppercase tracking-wider transition-all hover:opacity-90 text-[#E1EBED]"
            >
              <span className="duration-200 dark:text-[#22192f] text-[#8121D1]">
                Kübra
              </span>
              <span className="text-[#DCCFED] ">Kara</span>
            </Link>
          </div>

          {/* Desktop Menü (lg ve üstü ekranlar için) */}
          <nav className="hidden lg:flex space-x-6 text-[#E1EBED] text-xl font-semibold">
            <Link href={"/"}>
              <Button className="hover:text-yellow-200 text-[#291C3A] dark:hover:text-yellow-300 dark:text-[#DCCFED] font-bold  hover:bg-transparent bg-transparent text-xl transition-transform duration-300 hover:scale-110">
                Home
              </Button>
            </Link>

            {["About", "Projects", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}>
                <Button className="hover:text-yellow-200 text-[#291C3A] dark:hover:text-yellow-300 dark:text-[#DCCFED] font-bold  hover:bg-transparent bg-transparent text-xl transition-transform duration-300 hover:scale-110">
                  {item}
                </Button>
              </Link>
            ))}
          </nav>

          {/* 🌙 Tema Butonu */}
          {mounted && (
            <div
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
          )}

          {/* 📱 Mobil Menü Butonu */}
          {isMobile && (
            <button
              className="cursor-pointer p-3.5 text-white"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>
      </header>

      {/* 📱 Mobil cihazlarda Overlay Menü Açılır */}
      <OverlayMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
