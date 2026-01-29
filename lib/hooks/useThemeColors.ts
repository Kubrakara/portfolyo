"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { THEME_COLORS } from "@/lib/constants";

/**
 * Custom hook for theme-based colors and mounted state
 * Reduces code duplication across components
 */
export function useThemeColors() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDarkMode = (theme || "light") === "dark";
    const colors = isDarkMode ? THEME_COLORS.dark : THEME_COLORS.light;

    return {
        mounted,
        isDarkMode,
        theme: theme || "light",
        colors,
    };
}
