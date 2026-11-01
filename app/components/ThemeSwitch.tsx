"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import { motion } from "motion/react";

export type Theme = "light" | "dark" | "system";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = (theme as Theme) || "system";

  const cycleTheme = () => {
    if (currentTheme === "light") setTheme("dark");
    else if (currentTheme === "dark") setTheme("system");
    else setTheme("light");
  };

  const labels: Record<Theme, string> = {
    light: "Açık tema (Koyu temaya geç)",
    dark: "Koyu tema (Sistem temasına geç)",
    system: "Sistem teması (Açık temaya geç)",
  };

  return (
    <motion.button
      type="button"
      onClick={cycleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={mounted ? labels[currentTheme] : "Tema değiştir"}
      title={mounted ? labels[currentTheme] : "Tema değiştir"}
      className="relative flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-full border border-border bg-card/80 hover:bg-card-hover text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {!mounted ? (
        <span className="w-5 h-5 rounded-full bg-muted/30" aria-hidden="true" />
      ) : currentTheme === "light" ? (
        <Sun className="w-5 h-5 text-accent" aria-hidden="true" />
      ) : currentTheme === "dark" ? (
        <Moon className="w-5 h-5 text-accent" aria-hidden="true" />
      ) : (
        <Laptop className="w-5 h-5 text-accent" aria-hidden="true" />
      )}
    </motion.button>
  );
}
