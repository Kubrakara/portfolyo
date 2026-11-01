"use client";

import { useState } from "react";
import { OverlayMenu } from "./OverlayMenu";
import { ThemeSwitch } from "./ThemeSwitch";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed w-full top-0 left-0 z-50 py-4 shadow-lg bg-gradient-to-r from-nav-from via-nav-via to-nav-to"
      >
        <div className="flex justify-between items-center w-[calc(100%-48px)] sm:w-[calc(100%-80px)] max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/"
            className="font-black text-2xl uppercase tracking-wider transition-opacity hover:opacity-90 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg px-1"
          >
            <span className="text-nav-logo">Kübra</span>
            <span className="text-nav-logo-sub">Kara</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-2 text-lg font-semibold">
            {NAV_ITEMS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="nav-link px-4 py-2 rounded-lg font-medium text-nav-text hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex">
              <ThemeSwitch />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-nav-text hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={toggleMenu}
              aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {isOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <OverlayMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
