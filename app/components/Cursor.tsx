"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      position.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${
          position.current.x - 20
        }px, ${position.current.y - 20}px)`;
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="z-50 fixed w-10 h-10 rounded-full border-4 border-[#E1EBED] shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform duration-75 pointer-events-none"
      style={{ transform: "translate(-50%, -50%)" }} // Başlangıç konumunu düzeltir
    />
  );
}
