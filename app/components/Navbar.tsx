"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import clsx from "clsx";
import { NAV_ITEMS } from "@/lib/constants";
import { ThemeSwitch } from "./ThemeSwitch";
import { OverlayMenu } from "./OverlayMenu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (typeof document !== "undefined") {
        document.body.classList.toggle("overflow-hidden", next);
      }
      return next;
    });
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-200">
        {/* Tam ekran genişliği ve eşit kenar dolguları (Hero ile birebir aynı sol/sağ çizgisi) */}
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo (Tek kontrastlı renk, yüksek okunabilirlik) */}
          <Link
            href="/"
            className="font-bold text-xl sm:text-2xl tracking-tight text-foreground hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          >
            Kübra Kara
          </Link>

          {/* Desktop Navigasyon ve Aktif Link Göstergesi */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Ana Menü"
          >
            {NAV_ITEMS.map(({ label, href }) => {
              const isActive =
                pathname === href ||
                (href !== "/" && pathname.startsWith(href));

              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "relative px-4 py-2 rounded-lg text-sm sm:text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    isActive
                      ? "text-accent font-semibold"
                      : "text-muted hover:text-foreground font-medium"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Aksiyonlar (Tema Değiştirici ve Mobil Menü Butonu) */}
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <ThemeSwitch />
            </div>

            {/* Mobil Menü Butonu (WCAG AA - En az 44px) */}
            <button
              type="button"
              className="lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-border bg-card/80 text-foreground hover:text-accent hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              onClick={toggleMenu}
              aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobil Menü Çekmecesi */}
      <OverlayMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
