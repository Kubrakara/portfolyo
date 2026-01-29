"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

export function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-700" />
        );
    }

    const isDark = theme === "dark";

    return (
        <motion.button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            style={{
                backgroundColor: isDark ? "#6D28D9" : "#A78BFA",
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            {/* Track gradient overlay */}
            <div
                className="absolute inset-0 rounded-full opacity-50"
                style={{
                    background: isDark
                        ? "linear-gradient(to right, #4C1D95, #6D28D9)"
                        : "linear-gradient(to right, #A78BFA, #C4B5FD)",
                }}
            />

            {/* Toggle thumb */}
            <motion.div
                className="relative z-10 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center"
                animate={{
                    x: isDark ? 32 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                }}
            >
                {isDark ? (
                    <FaMoon className="text-purple-600 text-xs" />
                ) : (
                    <FaSun className="text-yellow-500 text-xs" />
                )}
            </motion.div>

            {/* Background icons */}
            <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                <FaSun
                    className="text-white text-xs transition-opacity duration-300"
                    style={{ opacity: isDark ? 0.3 : 0 }}
                />
                <FaMoon
                    className="text-white text-xs transition-opacity duration-300"
                    style={{ opacity: isDark ? 0 : 0.3 }}
                />
            </div>
        </motion.button>
    );
}
