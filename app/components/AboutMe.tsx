"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useThemeColors } from "@/lib/hooks/useThemeColors";
import { Timeline } from "./Timeline";
import { Stats } from "./Stats";
import { motion } from "framer-motion";

// Teknolojileri kategorilere göre gruplayın
const categories = [
  {
    title: "Web & Mobil Teknolojileri",
    skills: [
      { title: "React", image: "/images/react.png" },
      { title: "React Native", image: "/images/react-native.png" },
      { title: "Expo", image: "/images/expo.png" },
      { title: "Next.js", image: "/images/nextjs.png" },
      { title: "TailwindCSS", image: "/images/tailwind.png" },
      { title: "Shadcn UI", image: "/images/shadcnui.png" },
      { title: "Kotlin", image: "/images/kotlin.png" },
      { title: "Android Studio", image: "/images/android-studio.png" },
    ],
  },
  {
    title: "Backend & Veri Tabanı Teknolojileri",
    skills: [
      { title: "Node.js", image: "/images/nodejs.png" },
      { title: ".NET", image: "/images/dotnet.png" },
      { title: "Python", image: "/images/python.png" },
      { title: "Firebase", image: "/images/firebase.png" },
      { title: "SQL Server", image: "/images/sql-server.png" },
      { title: "MongoDB", image: "/images/mongodb.png" },
    ],
  },
  {
    title: "Entegrasyon Araçları",
    skills: [
      { title: "Vercel", image: "/images/vercel.png" },
      { title: "Render", image: "/images/render.png" },
      { title: "Google Play", image: "/images/play.png" },
      { title: "Google Ads", image: "/images/google-ads.png" },
      { title: "Google AdMob", image: "/images/google-admob.png" },
    ],
  },
  {
    title: "Yapay Zeka Destekli Geliştirme Araçları",
    skills: [
      { title: "GitHub Copilot", image: "/images/github-copilot.png" },
      { title: "ChatGPT", image: "/images/chatgpt.png" },
      { title: "Cursor", image: "/images/cursor.png" },
      { title: "Antigravity", image: "/images/antigravity.png" },
      { title: "Gemini", image: "/images/gemini.png" },
      { title: "DeepSeek", image: "/images/deepseek.png" },
    ],
  },
  {
    title: "Yayınlama & Platformlar",
    skills: [
      { title: "Vercel", image: "/images/vercel.png" },
      { title: "Google Play", image: "/images/play.png" },
      { title: "Expo", image: "/images/expo.png" },
    ],
  },
];

const AboutMe: React.FC = () => {
  const { mounted, isDarkMode, colors } = useThemeColors();

  if (!mounted) return null;

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 py-10 transition-all duration-300"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      {/* 🚀 Üst Kısım - Hakkımda */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Image
            src="/1ben.png"
            alt="Hakkımda"
            width={360}
            height={360}
            loading="lazy"
            className="rounded-full shadow-lg object-cover max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 px-4 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Neler <span className="text-purple-400">yapıyorum ?</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed">
            Bilgisayar Mühendisliği eğitimi alarak yazılım geliştirme ve siber
            güvenlik konularında uzmanlaştım. Çeşitli projelerde web ve mobil
            uygulama geliştirme, API tasarımı, veri güvenliği ve makine
            öğrenmesi gibi alanlarda çalışmalar yaptım. Siber güvenlik alanında{" "}
            <strong>SiberVatan</strong> projesinde bulunarak eğitimler aldım ve{" "}
            <strong>Linux, güvenlik testleri, zafiyet analizi</strong>{" "}
            konularında uzmanlaştım. Modern teknolojilerle frontend ve backend
            geliştirme yaparak{" "}
            <strong>Next.js, React, React Native, TypeScript</strong> gibi
            araçları etkin şekilde kullandım. Projelerim ve çalışmalarım
            hakkında daha fazla bilgi almak için benimle iletişime
            geçebilirsiniz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-8">
            <FaArrowRight className="text-purple-400 text-3xl animate-pulse" />
            <Link href="/contact">
              <button className="bg-purple-600 hover:bg-purple-800 text-white text-lg px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 💡 Yetkinlikler Bölümü */}
      <section className="w-full mt-20">
        {categories.map((category, index) => (
          <div key={index} className="mb-20">
            <h3 className="text-3xl sm:text-3xl font-bold text-center mb-10">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-purple-500/10"
                  style={{ backgroundColor: colors.card }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <Image
                      src={skill.image}
                      alt={skill.title}
                      width={52}
                      height={52}
                      className="rounded-lg"
                    />
                    <h4 className="text-xl font-semibold">{skill.title}</h4>
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
      <motion.div
        className="text-center mt-16 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300"
            style={{ backgroundColor: colors.accent }}
          >
            Projelerimi Görüntüle
            <FaArrowRight />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutMe;
