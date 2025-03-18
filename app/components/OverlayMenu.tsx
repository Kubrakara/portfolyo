"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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

  return (
    <nav
      className={cn(
        "z-10 fixed inset-0 bg-[#291C3A] transition-transform duration-500 flex flex-col items-center justify-center space-y-6 text-4xl uppercase",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {["Home", "About", "Projects", "Contact"].map((item) => (
        <Link key={item} href={`/${item.toLowerCase()}`} onClick={toggleMenu}>
          <Button className="hover:text-[#8121D0] transition-colors">
            {item}
          </Button>
        </Link>
      ))}

      {/* 🌙 Tema Değiştirici */}
      {mounted && (
        <div
          className="inline-block duration-100 cursor-pointer mt-6"
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

      <p className="font-semibold text-sm tracking-wider text-[#DCCFED] mt-4">
        {mounted && (
          <>
            <span
              className={cn("relative", theme === "dark" ? "underline" : "")}
            >
              dark
            </span>{" "}
            -{" "}
            <span
              className={cn("relative", theme === "light" ? "underline" : "")}
            >
              light
            </span>
          </>
        )}
      </p>

      {/* 🔙 Menü Kapat Butonu */}
      <button
        className="absolute top-6 right-6 text-white text-3xl"
        onClick={toggleMenu}
      >
        ✕
      </button>
    </nav>
  );
}
