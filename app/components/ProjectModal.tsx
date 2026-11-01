"use client";

import { motion, AnimatePresence } from "motion/react";
import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-border shadow-2xl text-foreground p-6 sm:p-8 my-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-card hover:bg-card-hover border border-border text-foreground transition-all z-10 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Kapat"
              >
                <FaTimes size={18} aria-hidden="true" />
              </button>

              {/* Görsel */}
              <div className="relative w-full h-56 sm:h-80 mb-6 rounded-2xl overflow-hidden bg-muted/10 border border-border/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>

              {/* Başlık */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground tracking-tight">
                {project.title}
              </h3>

              {/* Etiketler */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full font-medium bg-accent/15 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Açıklama */}
              <div className="text-base text-muted leading-relaxed mb-8">
                <p>{project.description}</p>
              </div>

              {/* Aksiyon Butonları */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold bg-accent text-accent-foreground shadow-md hover:opacity-95 transition-all text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
                  >
                    <FaExternalLinkAlt size={14} aria-hidden="true" />
                    Canlı Önizleme
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold border border-border bg-card hover:bg-card-hover text-foreground transition-all text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[44px]"
                  >
                    <FaGithub size={16} aria-hidden="true" />
                    Kaynak Kod
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
