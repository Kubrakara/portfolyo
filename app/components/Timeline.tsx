"use client";

import { motion } from "framer-motion";
import { useThemeColors } from "@/lib/hooks/useThemeColors";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";

interface TimelineItem {
    type: "education" | "work" | "certificate";
    title: string;
    organization: string;
    period: string;
    description?: string;
    location?: string;
}

const timelineData: TimelineItem[] = [
    {
        type: "work",
        title: "Full Stack Developer",
        organization: "Progim",
        period: "2025 Eylül - 2026 Ocak",
        description: "Full Stack Developer",
    },
    {
        type: "certificate",
        title: "SiberVatan Eğitim Programı",
        organization: "SiberVatan",
        period: "2023",
        description: "Linux, güvenlik testleri ve zafiyet analizi eğitimleri",
    },
    {
        type: "education",
        title: "Bilgisayar Mühendisliği",
        organization: "Zonguldak Bülent Ecevit Üniversitesi",
        period: "2022 - 2025",
        description: "Yazılım geliştirme ve siber güvenlik konularında uzmanlaştım",
        location: "Zonguldak",
    },
    {
        type: "education",
        title: "Bilişim Sistemleri Mühendisliği",
        organization: "Muğla Sıtkı Koçman Üniversitesi",
        period: "2020 - 2022",
        description: "Yazılım geliştirme ve siber güvenlik konularında uzmanlaştım",
        location: "Muğla",
    },


];

const iconMap = {
    education: FaGraduationCap,
    work: FaBriefcase,
    certificate: FaCertificate,
};

export function Timeline() {
    const { colors, mounted } = useThemeColors();

    if (!mounted) return null;

    return (
        <div className="py-12">
            <motion.h3
                className="text-3xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ color: colors.text }}
            >
                Eğitim & Deneyim
            </motion.h3>

            <div className="relative max-w-10xl mx-auto">
                {/* Vertical Line */}
                <div
                    className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5"
                    style={{ backgroundColor: `${colors.accent}40` }}
                />

                {/* Timeline Items */}
                <div className="space-y-12">
                    {timelineData.map((item, index) => {
                        const Icon = iconMap[item.type];
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                    } flex-row`}
                            >
                                {/* Icon */}
                                <div
                                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10 shadow-lg"
                                    style={{ backgroundColor: colors.accent }}
                                >
                                    <Icon className="text-white text-2xl" />
                                </div>

                                {/* Content */}
                                <div
                                    className={`ml-28 md:ml-0 md:w-6/12 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                                        }`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="p-6 rounded-xl shadow-lg transition-all duration-300"
                                        style={{ backgroundColor: colors.card }}
                                    >
                                        <p
                                            className="text-sm font-semibold mb-2"
                                            style={{ color: colors.accent }}
                                        >
                                            {item.period}
                                        </p>
                                        <h4 className="text-xl font-bold mb-2" style={{ color: colors.text }}>
                                            {item.title}
                                        </h4>
                                        <p className="font-medium mb-2" style={{ color: colors.textMuted }}>
                                            {item.organization}
                                        </p>
                                        {item.description && (
                                            <p className="text-sm" style={{ color: colors.textMuted }}>
                                                {item.description}
                                            </p>
                                        )}
                                        {item.location && (
                                            <p className="text-xs mt-2" style={{ color: colors.textMuted }}>
                                                📍 {item.location}
                                            </p>
                                        )}
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
