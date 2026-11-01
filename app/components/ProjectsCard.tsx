"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "@/data/projects";

export default function ProjectCard(props: Project) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -6;
    const rotateYValue = ((x - centerX) / centerX) * 6;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsModalOpen(true)}
        className="group rounded-2xl border border-border bg-card hover:bg-card-hover p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-accent"
        style={
          prefersReducedMotion
            ? undefined
            : {
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: "transform 0.15s ease-out, box-shadow 0.2s ease",
              }
        }
      >
        <div>
          {/* Görsel */}
          <div className="w-full h-48 relative rounded-xl overflow-hidden mb-4 bg-muted/10 border border-border/50">
            <Image
              src={props.image}
              alt={props.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Başlık & Açıklama */}
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
            {props.title}
          </h3>
          <p className="text-sm text-muted mb-4 line-clamp-3 leading-relaxed">
            {props.description}
          </p>
        </div>

        <div>
          {/* Etiketler */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {props.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-full font-medium bg-accent/15 text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Tıklama İpucu */}
          <div className="text-sm font-semibold text-accent flex items-center gap-1.5 pt-2 border-t border-border/60">
            Detayları Gör →
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={props}
      />
    </>
  );
}
