"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { useThemeColors } from "@/lib/hooks/useThemeColors";
import { SOCIAL_LINKS, GRADIENTS } from "@/lib/constants";
import { ParticleBackground } from "./ParticleBackground";
import { motion } from "framer-motion";

const HomePage = () => {
  const { mounted, isDarkMode, colors } = useThemeColors();

  const roles = useMemo(
    () => ["FullStack Developer", "Web Developer", "Mobile Developer"],
    []
  );
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!mounted) return;

    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
        setDisplayText(roles[index].substring(0, subIndex));
      },
      reverse ? 40 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, mounted, roles]);

  if (!mounted) return null;

  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen px-6 md:px-16 lg:px-24 transition-all duration-300 overflow-hidden"
      style={{ backgroundColor: colors.background, color: colors.foreground }}
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* 🚀 Sol Bölüm */}
      <motion.div
        className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-semibold">
          Merhaba{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>

        {/* 🎯 Typewriter Efekti */}
        <motion.div
          className={`bg-gradient-to-r bg-clip-text text-transparent ${isDarkMode ? GRADIENTS.text.dark : GRADIENTS.text.light}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mt-2">Ben Kübra,</h2>

          <div className="h-[60px] mt-2">
            <h2 className="text-3xl md:text-5xl font-bold">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </motion.div>

        <motion.p
          className="text-lg md:text-2xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Modern, yaratıcı ve kullanıcı dostu deneyimler geliştiriyorum.
        </motion.p>

        {/* 🌐 Sosyal Medya */}
        <motion.div
          className="flex gap-4 mt-6 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {[
            { icon: FaGithub, ...SOCIAL_LINKS[0] },
            { icon: FaLinkedin, ...SOCIAL_LINKS[1] },
            { icon: FaMedium, name: "Medium", url: SOCIAL_LINKS[2].url },
          ].map(({ icon: Icon, name, url }, index) => (
            <motion.a
              key={index}
              href={url}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${name} profile`}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-gray-400"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ripple px-8 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
              style={{ backgroundColor: colors.accent }}
              aria-label="Projelerimi görüntüle"
            >
              Projelerimi Görüntüle
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ripple px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300"
              style={{
                borderColor: colors.accent,
                color: colors.accent,
              }}
              aria-label="Bana ulaşın"
            >
              İletişime Geçin
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* 🖼️ Sağ Görsel */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <Image
          src="/keyb.png"
          alt="Developer Illustration"
          width={800}
          height={800}
          priority
          className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default HomePage;
