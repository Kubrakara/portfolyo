"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";
import { ParticleBackground } from "./ParticleBackground";
import { motion, useReducedMotion } from "motion/react";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Medium: FaMedium,
} as const;

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();
  const roles = useMemo(
    () => ["FullStack Developer", "Web Developer", "Mobile Developer"],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || prefersReducedMotion) return;

    const currentRole = roles[index] ?? "";

    if (subIndex === currentRole.length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1200);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 40 : 90
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, mounted, roles, prefersReducedMotion]);

  const currentRole = roles[index] ?? "";
  const displayText = mounted
    ? currentRole.substring(0, subIndex)
    : roles[0];

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-6rem)] px-6 sm:px-10 md:px-16 lg:px-24 py-12 overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Left content */}
      <motion.div
        className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left z-10"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Merhaba{" "}
          <span role="img" aria-label="El sallama">
            👋
          </span>
        </span>

        {/* Name and Typewriter */}
        <div className="mt-3">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            Ben <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">Kübra,</span>
          </h1>

          <div className="h-16 sm:h-20 mt-2 flex items-center justify-center md:justify-start">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              {displayText}
              {!prefersReducedMotion && (
                <span className="text-accent opacity-90 animate-pulse ml-0.5">|</span>
              )}
            </span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted mt-3 max-w-xl leading-relaxed">
          Modern, yaratıcı ve kullanıcı dostu web ve mobil deneyimler geliştiriyorum.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5 mt-6 text-2xl text-foreground">
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
                className="hover:text-accent transition-colors p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              >
                <Icon aria-hidden="true" />
              </a>
            );
          })}
        </div>

        {/* Call to action links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
          <Link
            href="/projects"
            className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full font-semibold bg-accent text-accent-foreground shadow-lg hover:opacity-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Projelerimi Görüntüle
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full font-semibold border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            İletişime Geçin
          </Link>
        </div>
      </motion.div>

      {/* Right image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0 z-10"
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Image
          src="/keyb.png"
          alt="Yazılımcı Çizimi"
          width={650}
          height={650}
          priority
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 550px"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-auto h-auto rounded-2xl shadow-xl"
        />
      </motion.div>
    </div>
  );
}
