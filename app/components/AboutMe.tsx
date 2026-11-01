"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { Timeline } from "./Timeline";
import { Stats } from "./Stats";
import { motion, useReducedMotion } from "motion/react";

export interface Skill {
  readonly title: string;
  readonly image: string;
}

export interface SkillCategory {
  readonly title: string;
  readonly skills: readonly Skill[];
}

const categories: readonly SkillCategory[] = [
  {
    title: "Frontend & Mobil Geliştirme",
    skills: [
      { title: "React", image: "/images/react.png" },
      { title: "React Native", image: "/images/react-native.png" },
      { title: "Next.js", image: "/images/nextjs.png" },
      { title: "TypeScript", image: "/images/typescript.png" },
      { title: "JavaScript", image: "/images/javascript.png" },
      { title: "Expo", image: "/images/expo.png" },
      { title: "TailwindCSS", image: "/images/tailwind.png" },
      { title: "Shadcn UI", image: "/images/shadcnui.png" },
    ],
  },
  {
    title: "Backend & Veritabanı Mimarisi",
    skills: [
      { title: "Node.js", image: "/images/nodejs.png" },
      { title: ".NET", image: "/images/dotnet.png" },
      { title: "Python", image: "/images/python.png" },
      { title: "Firebase", image: "/images/firebase.png" },
      { title: "SQL Server", image: "/images/sql-server.png" },
      { title: "SQL", image: "/images/sql.png" },
      { title: "MongoDB", image: "/images/mongodb.png" },
    ],
  },
  {
    title: "DevOps, Sistem & Dağıtım",
    skills: [
      { title: "Linux / Ubuntu", image: "/images/linux.png" },
      { title: "Google Play Store", image: "/images/play.png" },
      { title: "Vercel", image: "/images/vercel.png" },
      { title: "Render", image: "/images/render.png" },
      { title: "Google AdMob", image: "/images/google-admob.png" },
    ],
  },
  {
    title: "Yapay Zeka & Modern Mühendislik Araçları",
    skills: [
      { title: "Cursor", image: "/images/cursor.png" },
      { title: "Gemini", image: "/images/gemini.png" },
      { title: "ChatGPT", image: "/images/chatgpt.png" },
      { title: "GitHub Copilot", image: "/images/github-copilot.png" },
      { title: "DeepSeek", image: "/images/deepseek.png" },
      { title: "Antigravity", image: "/images/antigravity.png" },
    ],
  },
];

export default function AboutMe() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full py-16 sm:py-20 bg-background text-foreground transition-colors duration-300">
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col items-center">
        {/* Üst Kısım - Hakkımda */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Image
            src="/1ben.png"
            alt="Kübra Kara Profil Fotoğrafı"
            width={360}
            height={360}
            priority
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 360px"
            className="rounded-full shadow-2xl object-cover border-4 border-border/60 max-w-xs sm:max-w-sm md:max-w-md w-auto h-auto"
          />
        </div>

        <div className="w-full lg:w-1/2 px-2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Neler <span className="text-accent">yapıyorum?</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
            <strong className="text-foreground">React, React Native ve Node.js</strong> ile modern web ve mobil ekosisteminde uçtan uca ürünler geliştiriyorum.{" "}
            <strong className="text-foreground">NGSTECH</strong> ve{" "}
            <strong className="text-foreground">Progim</strong> bünyesinde e-ticaret, SaaS ve mobil projelerde frontend, backend, deployment ve canlı sistem süreçlerinin tamamında aktif rol aldım.{" "}
            <strong className="text-foreground">Docker, Nginx ve Linux VPS</strong> altyapılarını bizzat yapılandırıp yönetirken; yapay zeka destekli modern geliştirme araçlarını (<strong className="text-foreground">Cursor, Claude, Gemini</strong>) iş akışlarıma etkin biçimde entegre ediyorum.{" "}
            Bilgisayar Mühendisliği mezuniyetim ve <strong className="text-foreground">Siber Vatan</strong> geçmişimle birlikte güvenli, ölçeklenebilir ve yüksek performanslı çözümler üretiyorum.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-8">
            <FaArrowRight className="text-accent text-2xl hidden sm:block" aria-hidden="true" />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold bg-accent text-accent-foreground shadow-lg hover:opacity-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Bana Ulaşın
            </Link>
          </div>
        </div>
      </div>

      {/* Yetkinlikler Bölümü */}
      <section className="w-full max-w-7xl mt-24">
        {categories.map((category, catIndex) => (
          <div key={category.title || catIndex} className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.title}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-2xl bg-card hover:bg-card-hover border border-border shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={skill.image}
                      alt={skill.title}
                      width={44}
                      height={44}
                      className="rounded-lg object-contain w-11 h-11"
                    />
                    <h4 className="text-base sm:text-lg font-semibold text-foreground">
                      {skill.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Timeline Section */}
      <Timeline />

      {/* CTA Section */}
      <div className="text-center mt-12 mb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-semibold bg-accent text-accent-foreground shadow-lg hover:opacity-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Projelerimi Görüntüle
          <FaArrowRight aria-hidden="true" />
        </Link>
      </div>
      </div>
    </div>
  );
}
