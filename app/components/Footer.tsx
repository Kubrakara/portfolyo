"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium, FaHeart } from "react-icons/fa";
import { useThemeColors } from "@/lib/hooks/useThemeColors";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";

export function Footer() {
    const { mounted, colors } = useThemeColors();

    if (!mounted) return null;

    const socialIcons = [
        { icon: FaGithub, ...SOCIAL_LINKS[0] },
        { icon: FaLinkedin, ...SOCIAL_LINKS[1] },
        { icon: FaMedium, ...SOCIAL_LINKS[2] },
    ];

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t transition-all duration-300"
            style={{
                backgroundColor: colors.card,
                borderColor: `${colors.accent}20`,
            }}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">
                            <span style={{ color: colors.accent }}>Kübra</span>
                            <span style={{ color: colors.accentLight }}> Kara</span>
                        </h3>
                        <p className="text-sm" style={{ color: colors.textMuted }}>
                            Modern, kullanıcı dostu web ve mobil uygulamalar oluşturmaya tutkulu Full Stack Developer.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold" style={{ color: colors.text }}>
                            Hızlı Bağlantılar
                        </h4>
                        <nav className="flex flex-col space-y-2">
                            {NAV_ITEMS.map(({ label, href }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="text-sm hover:translate-x-1 transition-transform duration-200"
                                    style={{ color: colors.textMuted }}
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold" style={{ color: colors.text }}>
                            İletişim
                        </h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:kubra26kara@gmail.com"
                                className="text-sm block hover:translate-x-1 transition-transform duration-200"
                                style={{ color: colors.textMuted }}
                            >
                                kubra26kara@gmail.com
                            </a>
                            <div className="flex gap-4 pt-2">
                                {socialIcons.map(({ icon: Icon, name, url }, index) => (
                                    <motion.a
                                        key={index}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={name}
                                        whileHover={{ scale: 1.2, y: -2 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                        className="text-2xl"
                                        style={{ color: colors.accent }}
                                    >
                                        <Icon />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
                    style={{ borderColor: `${colors.accent}20` }}
                >
                    <p className="text-sm flex items-center gap-1" style={{ color: colors.textMuted }}>
                        © {new Date().getFullYear()} Kübra Kara. Türkiye'de{" "}
                        <FaHeart className="text-pink-500 animate-pulse" /> ile yapıldı
                    </p>
                    <p className="text-xs" style={{ color: colors.textMuted }}>
                        Next.js, TypeScript ve Tailwind CSS ile geliştirildi
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}
