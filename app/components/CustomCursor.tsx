"use client";

import { useEffect } from "react";

/**
 * Custom Cursor Component
 * Adds a beautiful purple-themed cursor with glow effect
 */
export function CustomCursor() {
    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            const cursorDot = document.querySelector("body::before") as HTMLElement;
            const cursorRing = document.querySelector("body::after") as HTMLElement;

            // Update CSS custom properties for cursor position
            document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
        };

        window.addEventListener("mousemove", updateCursor);

        return () => {
            window.removeEventListener("mousemove", updateCursor);
        };
    }, []);

    return null; // This component doesn't render anything
}
