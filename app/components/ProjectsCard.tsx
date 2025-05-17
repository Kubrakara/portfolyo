"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string; // Opsiyonel tanım
  githubUrl?: string; // Opsiyonel tanım
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}: ProjectProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = (theme || "light") === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative group rounded-2xl p-[2px] bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 animate-border bg-[length:300%_300%] hover:shadow-2xl transition-all duration-500"
    >
      <div
        className={`rounded-2xl h-full p-5 flex flex-col justify-between group-hover:scale-[1.01] transition-transform duration-300 ${
          isDarkMode ? "bg-[#1c152a] text-white" : "bg-[#f9f6fc] text-black"
        }`}
      >
        {/* Üst Kısım: İçerik */}
        <div>
          {/* Görsel */}
          <div className="w-full h-40 relative rounded-lg overflow-hidden mb-4 border border-white/10">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>

          {/* Başlık & Açıklama */}
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-300 dark:text-gray-400 mb-4">
            {description}
          </p>

          {/* Etiketler */}
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className={`px-3 py-1 text-xs rounded-full ${
                  isDarkMode
                    ? "bg-[#2c203f] text-white"
                    : "bg-purple-100 text-[#321851]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Alt Kısım: Butonlar */}
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          {liveUrl && (
            <Link href={liveUrl} target="_blank">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform">
                Canlı Görüntüle
              </button>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank">
              <button className="border border-gray-400 text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-all">
                Github'ta Görüntüle
              </button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
