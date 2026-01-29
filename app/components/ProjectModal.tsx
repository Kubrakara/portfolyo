"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useThemeColors } from "@/lib/hooks/useThemeColors";
import { useEffect } from "react";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        image: string;
        tags: string[];
        link?: string;
        github?: string;
        features?: string[];
    };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
    const { colors, mounted } = useThemeColors();

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
                            style={{ backgroundColor: colors.background }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="modal-close absolute top-4 right-4 p-2 rounded-full transition-all duration-200 z-[10001] hover:scale-110"
                                style={{ backgroundColor: colors.card, color: colors.text, cursor: 'pointer' }}
                                aria-label="Close modal"
                            >
                                <FaTimes size={20} />
                            </button>

                            {/* Content */}
                            <div className="p-8">
                                {/* Image */}
                                <div className="relative w-full h-64 md:h-96 mb-6 rounded-xl overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Title */}
                                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.text }}>
                                    {project.title}
                                </h2>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 rounded-full text-sm font-medium"
                                            style={{
                                                backgroundColor: `${colors.accent}20`,
                                                color: colors.accent,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-lg mb-6 leading-relaxed" style={{ color: colors.textMuted }}>
                                    {project.description}
                                </p>

                                {/* Features */}
                                {project.features && project.features.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text }}>
                                            Temel Özellikler
                                        </h3>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start gap-2"
                                                    style={{ color: colors.textMuted }}
                                                >
                                                    <span style={{ color: colors.accent }}>•</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
                                            style={{ backgroundColor: colors.accent, cursor: 'pointer' }}
                                        >
                                            <FaExternalLinkAlt />
                                            Canlı Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105"
                                            style={{
                                                borderColor: colors.accent,
                                                color: colors.accent,
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <FaGithub />
                                            Kodu Görüntüle
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
