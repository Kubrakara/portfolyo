"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { OverlayMenu } from "./OverlayMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
    document.body.classList.toggle("nav-active");
  };

  return (
    <>
      <header className="fixed w-full top-0 left-0 z-50 bg-[#291C3A] py-6 shadow-lg">
        <div className="relative flex justify-between items-center w-[calc(100%-100px)] ml-[50px]">
          {/* 🚀 Logo (Büyüteç Efekti) */}
          <div className="cursor-pointer transition-transform duration-300 hover:scale-110">
            <Link
              href="/"
              className="font-montserrat font-black text-2xl uppercase tracking-wider transition-all hover:opacity-90 text-[#E1EBED]"
            >
              <span className="text-[#8121D0]">Port</span>
              <span className="text-[#DCCFED]">folyö</span>
            </Link>
          </div>

          {/* Desktop Menü (lg ve üstü ekranlar için) */}
          {!isMobile && (
            <nav className="hidden lg:flex space-x-6 text-[#E1EBED] text-xl font-semibold">
              <Link href="/">
                <Button className="hover:text-[#DCCFED] text-[#8121D0] hover:bg-[#291C3A] bg-[#291C3A] text-xl transition-transform duration-300 hover:scale-110">
                  Home
                </Button>
              </Link>
              <Link href="/projects">
                <Button className="hover:text-[#DCCFED] text-[#8121D0] hover:bg-[#291C3A] bg-[#291C3A] text-xl transition-transform duration-300 hover:scale-110">
                  Projects
                </Button>
              </Link>
              <Link href="/about">
                <Button className="hover:text-[#DCCFED] text-[#8121D0] hover:bg-[#291C3A] bg-[#291C3A] text-xl transition-transform duration-300 hover:scale-110">
                  About
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="hover:text-[#DCCFED] text-[#8121D0] hover:bg-[#291C3A] bg-[#291C3A] text-xl transition-transform duration-300 hover:scale-110">
                  Contact
                </Button>
              </Link>
            </nav>
          )}

          {/* 🌙 Tema Butonu (Hover ile Büyüme) */}
          {mounted && (
            <div
              className="hidden lg:block cursor-pointer p-2 ml-4 transition-transform duration-300 hover:scale-110"
              onClick={() => {
                if (!theme) return;
                setTheme(theme === "dark" ? "light" : "dark");
                console.log("Tema değiştirildi:", theme ?? "Henüz yüklenmedi");
              }}
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

          {/* Mobil Menü Butonu */}
          {isMobile && (
            <div className="cursor-pointer p-4" onClick={toggleMenu}>
              <div className="h-[30px] w-[30px] relative z-10">
                <span
                  className={cn(
                    "block h-[2px] w-[30px] bg-[#E1EBED] mb-[7px] transition-all",
                    isOpen && "translate-y-[9px] -rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-[2px] w-[16.5px] bg-[#E1EBED] mb-[7px] transition-all",
                    isOpen &&
                      "w-[15px] translate-x-[2px] translate-y-[4px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-[2px] w-[16.5px] float-right bg-[#E1EBED] transition-all",
                    isOpen &&
                      "w-[15px] -translate-x-[3px] -translate-y-[3.5px] rotate-45"
                  )}
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobil cihazlarda Overlay Menü açılır */}
      {isMobile && <OverlayMenu isOpen={isOpen} />}
    </>
  );
}
