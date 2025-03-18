"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function Snowfall() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [snowflakes, setSnowflakes] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
    if (theme !== "dark") return; // ❄ Sadece dark mode'da çalışacak

    // 20 adet kar tanesi oluştur
    const flakes = Array.from({ length: 10 }, (_, i) => i);
    setSnowflakes(flakes);
  }, [theme]);

  if (!mounted || theme !== "dark") return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {snowflakes.map((flake) => (
        <div
          key={flake}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${5 + Math.random() * 5}s`,
            fontSize: `${10 + Math.random() * 10}px`,
            opacity: `${0.5 + Math.random() * 0.5}`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}
