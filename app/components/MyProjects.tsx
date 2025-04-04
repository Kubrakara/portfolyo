"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "../components/ProjectsCard";
import { motion } from "framer-motion";

export default function MyProjects() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Hydration hatasını önler

  const isDarkMode = (theme || "light") === "dark";

  return (
    <section
      className={`min-h-screen px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 transition-colors duration-300 ${
        isDarkMode ? "bg-[#110b1a] text-white" : "bg-[#e9dff6] text-[#22192f]"
      }`}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projelerim
      </motion.h2>

      {/* 🛠 Responsive Grid Layout */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
