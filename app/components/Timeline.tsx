"use client";

import { motion, useReducedMotion } from "motion/react";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";

export interface TimelineItem {
  type: "education" | "work" | "certificate";
  title: string;
  organization: string;
  period: string;
  description?: string;
  location?: string;
}

const timelineData: readonly TimelineItem[] = [
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "Progim",
    period: "2025 Eylül - 2026 Ocak",
    description: "Full Stack Developer olarak modern web teknolojileri ile geliştirme.",
  },
  {
    type: "certificate",
    title: "SiberVatan Eğitim Programı",
    organization: "SiberVatan",
    period: "2023",
    description: "Linux, güvenlik testleri ve zafiyet analizi eğitimleri.",
  },
  {
    type: "education",
    title: "Bilgisayar Mühendisliği",
    organization: "Zonguldak Bülent Ecevit Üniversitesi",
    period: "2022 - 2025",
    description: "Yazılım geliştirme ve siber güvenlik konularında uzmanlaştım.",
    location: "Zonguldak",
  },
  {
    type: "education",
    title: "Bilişim Sistemleri Mühendisliği",
    organization: "Muğla Sıtkı Koçman Üniversitesi",
    period: "2020 - 2022",
    description: "Yazılım geliştirme ve bilişim altyapıları temelleri.",
    location: "Muğla",
  },
];

const iconMap = {
  education: FaGraduationCap,
  work: FaBriefcase,
  certificate: FaCertificate,
} as const;

export function Timeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="py-16 w-full max-w-5xl mx-auto">
      <h3 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-foreground">
        Eğitim & Deneyim
      </h3>

      <div className="relative">
        {/* Central Vertical Line */}
        <div
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-border"
          aria-hidden="true"
        />

        {/* Timeline items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => {
            const Icon = iconMap[item.type];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={`${item.title}-${item.period}`}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, x: isLeft ? -30 : 30 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative flex items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Node Icon on the line */}
                <div
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-md bg-accent text-accent-foreground"
                  aria-hidden="true"
                >
                  <Icon className="text-lg" />
                </div>

                {/* Content Box */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-200">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent mb-2">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm font-semibold text-accent mt-0.5">
                      {item.organization}
                      {item.location ? ` • ${item.location}` : ""}
                    </p>
                    {item.description && (
                      <p className="text-sm text-muted mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
