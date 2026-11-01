"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { FaCode, FaProjectDiagram, FaClock, FaStar } from "react-icons/fa";

interface Stat {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const stats: readonly Stat[] = [
  { icon: FaProjectDiagram, value: 12, label: "Tamamlanan Proje", suffix: "+" },
  { icon: FaCode, value: 20, label: "Kullanılan Teknoloji", suffix: "+" },
  { icon: FaClock, value: 2, label: "Yıl Deneyim", suffix: "+" },
  { icon: FaStar, value: 500, label: "GitHub Katkısı", suffix: "+" },
];

function Counter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1500;
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
  }, [value, isInView, prefersReducedMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="py-12 w-full max-w-7xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="text-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="inline-flex p-3.5 rounded-full mb-3 bg-accent/15 text-accent">
              <stat.icon className="text-2xl" aria-hidden="true" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold mb-1 text-foreground">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
              />
            </div>
            <p className="text-sm font-medium text-muted">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
