"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function Snowfall() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || resolvedTheme !== "dark") return null;

  const snowflakes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${i * 8.3 + 2}%`,
    duration: `${6 + (i % 4) * 2}s`,
    fontSize: `${10 + (i % 3) * 4}px`,
    opacity: 0.3 + (i % 3) * 0.2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden" aria-hidden="true">
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
