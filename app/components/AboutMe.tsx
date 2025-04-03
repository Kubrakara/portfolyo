"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Programlama Dilleri",
    description: "Python, JavaScript, TypeScript",
    image: "/images/languages.png",
  },
  {
    title: "Frontend Geliştirme",
    description: "React, Next.js, React Native, TailwindCSS, Figma",
    image: "/images/frontend.png",
  },
  {
    title: "Backend Geliştirme",
    description: "API Geliştirme, REST API, Firebase, NoSQL, SQL",
    image: "/images/backend.png",
  },
  {
    title: "Veritabanı Teknolojileri",
    description: "Firebase, NoSQL Database, SQL",
    image: "/images/database.png",
  },
  {
    title: "Makine Öğrenmesi",
    description: "Python ile Makine Öğrenmesi",
    image: "/images/ml.png",
  },
  {
    title: "Siber Güvenlik",
    description: "Linux, Güvenlik Testleri ve Zafiyet Analizi",
    image: "/images/cybersecurity.png",
  },
  {
    title: "Kişisel Beceriler",
    description:
      "Takım Çalışması, Problem Çözme, Zaman Yönetimi, Proje Yönetimi",
    image: "/images/softskills.png",
  },
];

const AboutMe: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Hydration hatası çözümü

  const isDarkMode = (theme || "light") === "dark";

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 py-10 transition-all duration-300 ${
        isDarkMode ? "text-white bg-[#110b1a]" : "bg-[#e9dff6] text-[#22192f]"
      }`}
    >
      {/* 🚀 Üst Kısım - Hakkımda */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full">
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Image
            src="/woman.png"
            alt="About Me"
            width={360}
            height={360}
            className="rounded-full shadow-lg object-cover max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 px-4 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            About <span className="text-purple-400">Me</span>
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
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Yetkinliklerim
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${
                isDarkMode ? "bg-[#1c152a]" : "bg-white"
              } p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 border border-purple-500/10`}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={44}
                  height={44}
                  className="rounded-lg"
                />
                <h4 className="text-xl font-semibold">{skill.title}</h4>
              </div>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-sm leading-relaxed`}
              >
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
