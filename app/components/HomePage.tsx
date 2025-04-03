"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const HomePage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ❗ hydration hatasını önler

  const isDarkMode = (theme || "light") === "dark";
  const bgStyle = isDarkMode
    ? "bg-[#0f0b15] text-white"
    : "bg-[#e9dff6] text-black";

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center md:justify-between min-h-screen px-6 md:px-16 lg:px-24 transition-all duration-300 ${bgStyle}`}
    >
      {/* 🚀 Sol Bölüm (Metinler) */}
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

        <motion.div
          className="bg-gradient-to-r bg-clip-text text-transparent from-purple-700 via-blue-400 to-blue-300 dark:from-purple-400 dark:via-blue-500 dark:to-blue-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mt-2">Ben Kübra,</h2>
          <h2 className="text-3xl md:text-5xl font-bold">
            FullStack & Web Developerım
          </h2>
        </motion.div>

        <motion.p
          className="text-lg md:text-2xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I build things for everywhere 🚀
        </motion.p>

        {/* 🌍 Sosyal Medya İkonları */}
        <motion.div
          className="flex gap-4 mt-6 text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {[
            { icon: FaTwitter, title: "Twitter", link: "#" },
            { icon: FaGithub, title: "GitHub", link: "#" },
            { icon: FaLinkedin, title: "LinkedIn", link: "#" },
            { icon: FaDribbble, title: "Dribbble", link: "#" },
          ].map(({ icon: Icon, title, link }, index) => (
            <motion.a
              key={index}
              href={link}
              title={title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:text-gray-400"
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* 🎨 Sağ Bölüm (Görsel) */}
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
          className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default HomePage;
