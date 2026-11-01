"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { motion, useReducedMotion } from "motion/react";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Medium: FaMedium,
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.footer
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-border bg-card text-foreground transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Marka Bölümü */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-wider">
              <span className="text-accent">Kübra</span>{" "}
              <span className="text-foreground">Kara</span>
            </h3>
            <p className="text-sm text-muted max-w-sm leading-relaxed">
              Modern, kullanıcı dostu web ve mobil uygulamalar oluşturmaya tutkulu
              Full Stack Developer.
            </p>
          </div>

          {/* Hızlı Bağlantılar */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-foreground">
              Hızlı Bağlantılar
            </h4>
            <nav className="flex flex-col space-y-2">
              {NAV_ITEMS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-muted hover:text-accent transition-colors w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Sosyal Medya */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-foreground">Sosyal Medya</h4>
            <div className="flex items-center gap-4 text-xl">
              {SOCIAL_LINKS.map(({ name, url }) => {
                const Icon = iconMap[name as keyof typeof iconMap];
                if (!Icon) return null;
                return (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name} profilimi ziyaret et`}
                    className="p-2.5 rounded-full bg-background border border-border text-foreground hover:text-accent hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-w-[40px] min-h-[40px] flex items-center justify-center"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Alt Telif */}
        <div className="mt-12 pt-6 border-t border-border/60 text-center text-xs text-muted">
          <p>© {currentYear} Kübra Kara. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </motion.footer>
  );
}
