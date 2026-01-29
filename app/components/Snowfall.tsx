"use client";

import { useEffect, useState, useMemo } from "react";
import { useTheme } from "next-themes";

export function Snowfall() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Optimize snowflake generation with useMemo
  const snowflakes = useMemo(() => {
    if (!mounted || theme !== "dark") return [];
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      duration: `${5 + Math.random() * 5}s`,
      fontSize: `${10 + Math.random() * 10}px`,
      opacity: `${0.5 + Math.random() * 0.5}`,
    }));
  }, [mounted, theme]);

  if (!mounted || theme !== "dark") return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: flake.duration,
            fontSize: flake.fontSize,
            opacity: flake.opacity,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}
