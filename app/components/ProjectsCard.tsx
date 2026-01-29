"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useThemeColors } from "@/lib/hooks/useThemeColors";
import { ProjectModal } from "./ProjectModal";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  features?: string[];
}

export default function ProjectCard(props: ProjectProps) {
  const { colors, mounted } = useThemeColors();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  if (!mounted) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsModalOpen(true)}
        className="relative group rounded-2xl p-[2px] bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 cursor-pointer"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className="rounded-2xl h-full p-5 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300"
          style={{ backgroundColor: colors.card }}
        >
          {/* Image */}
          <div className="w-full h-40 relative rounded-lg overflow-hidden mb-4 border border-white/10">
            <Image
              src={props.image}
              alt={props.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>
            {props.title}
          </h3>
          <p className="text-sm mb-4 line-clamp-2" style={{ color: colors.textMuted }}>
            {props.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {props.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: `${colors.accent}20`,
                  color: colors.accent,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Click to view indicator */}
          <div
            className="mt-auto text-sm font-semibold flex items-center gap-2"
            style={{ color: colors.accent }}
          >
            Detayları görmek için tıklayın →
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

