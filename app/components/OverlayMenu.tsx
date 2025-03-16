"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface OverlayMenuProps {
  isOpen: boolean;
}

export function OverlayMenu({ isOpen }: OverlayMenuProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full h-full bg-[#291C3A] transition-transform duration-500",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2 w-full mt-10 text-center">
        <ul className="text-4xl font-black uppercase text-[#E1EBED] space-y-4">
          {["Home", "Studio", "News", "Contact"].map((item, i) => (
            <li key={i} className="hover:text-[#8121D0] transition-colors">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        {/* Tema Değiştirici */}
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
      </div>
    </nav>
  );
}
