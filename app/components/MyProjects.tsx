"use client";

import { useState } from "react";
import { useThemeColors } from "@/lib/hooks/useThemeColors";
import { projects } from "@/data/projects";
import ProjectCard from "../components/ProjectsCard";
import { motion } from "framer-motion";

// Tanımlı kategori listesi – tag'lere uygun olmalı
const categories = [
  "Tümü",
  "Web",
  "Mobil",
  "Python",
  "AI",
  "Güvenlik",
  "Otomasyon",
];

export default function MyProjects() {
  const { mounted, isDarkMode, colors } = useThemeColors();
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  if (!mounted) return null;

  // Filtreleme işlemi
  const filteredProjects =
    selectedCategory === "Tümü"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedCategory));

  return (
    <section
      className="min-h-screen px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 transition-colors duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projelerim
      </motion.h2>

      {/* 🔘 Kategori Seçimi */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${selectedCategory === cat
              ? "bg-purple-600 text-white border-purple-600"
              : isDarkMode
                ? "border-gray-600 text-white hover:bg-gray-800"
                : "border-gray-300 hover:bg-gray-200"
              }`}
            style={{
              color: selectedCategory !== cat ? colors.text : undefined,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 📦 Projeler */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
