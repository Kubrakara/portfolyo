"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectsCard";
import { motion, useReducedMotion } from "motion/react";

const categories = [
  "Tümü",
  "Web",
  "Mobil",
  "Python",
  "AI",
  "Güvenlik",
  "Otomasyon",
] as const;

export default function MyProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects =
    selectedCategory === "Tümü"
      ? projects
      : projects.filter((project) =>
          project.tags.some(
            (tag) => tag.toLowerCase() === selectedCategory.toLowerCase()
          )
        );

  return (
    <section className="min-h-screen py-16 bg-background text-foreground transition-colors duration-300">
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 tracking-tight"
          initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projelerim
        </motion.h2>

        {/* Kategori Seçimi */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 min-h-[40px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isSelected
                    ? "bg-accent text-accent-foreground border-accent shadow-sm"
                    : "bg-card hover:bg-card-hover border-border text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Proje Kartları */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
