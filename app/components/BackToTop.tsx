"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useThemeColors } from "@/lib/hooks/useThemeColors";

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { colors, mounted } = useThemeColors();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-4 rounded-full shadow-lg z-50 transition-all duration-300"
                    style={{
                        backgroundColor: colors.accent,
                        color: "white",
                        boxShadow: `0 4px 20px ${colors.accent}40`,
                    }}
                    aria-label="Back to top"
                >
                    <FaArrowUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
