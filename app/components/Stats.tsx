"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useThemeColors } from "@/lib/hooks/useThemeColors";
import { FaCode, FaProjectDiagram, FaClock, FaStar } from "react-icons/fa";

interface Stat {
    icon: React.ElementType;
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
}

const stats: Stat[] = [
    { icon: FaProjectDiagram, value: 9, label: "Tamamlanan Proje", suffix: "+" },
    { icon: FaCode, value: 15, label: "Teknoloji", suffix: "+" },
    { icon: FaClock, value: 1, label: "Yıl Deneyim", suffix: "+" },
    { icon: FaStar, value: 100, label: "Bu Yıl Commit", suffix: "+" },
];

function Counter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value, isInView]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
}

export function Stats() {
    const { colors, mounted } = useThemeColors();

    if (!mounted) return null;

    return (
        <div className="py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-6 rounded-2xl transition-all duration-300"
                        style={{ backgroundColor: colors.card }}
                    >
                        <div
                            className="inline-flex p-4 rounded-full mb-4"
                            style={{ backgroundColor: `${colors.accent}20` }}
                        >
                            <stat.icon className="text-3xl" style={{ color: colors.accent }} />
                        </div>
                        <div className="text-4xl font-bold mb-2" style={{ color: colors.text }}>
                            <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                        </div>
                        <p className="text-sm" style={{ color: colors.textMuted }}>
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
