"use client";

import { motion, useReducedMotion } from "motion/react";
import { FaGraduationCap, FaBriefcase, FaCertificate } from "react-icons/fa";

export interface TimelineItem {
  type: "education" | "work" | "certificate";
  title: string;
  organization: string;
  period: string;
  description?: string;
  location?: string;
}

const timelineData: readonly TimelineItem[] = [
  {
    type: "work",
    title: "Full-Stack Yazılım Geliştirici",
    organization: "NGSTECH Yazılım",
    period: "03/2026 – 08/2026",
    location: "Samsun / Uzaktan",
    description:
      "3+ web ve e-ticaret projesinde React ve Vite ile modern arayüzler ve REST API entegrasyonu. React Native ve Node.js ile mobil uygulama mimarisi, mağaza yayınlama. Docker, Nginx, VPS ve n8n ile deployment ve CI/CD süreçleri.",
  },
  {
    type: "work",
    title: "Full-Stack Yazılım Geliştirici",
    organization: "Progim",
    period: "09/2025 – 02/2026",
    location: "Eskişehir",
    description:
      "Yalın dönüşüm Ar-Ge projesinde React frontend ve .NET backend geliştirme; iş analizi ve teknik gereksinim belirleme. Büyük veri setlerinin listelenmesi, filtrelenmesi ve raporlanmasına yönelik yüksek performanslı çözümler.",
  },
  {
    type: "education",
    title: "Bilgisayar Mühendisliği (Lisans)",
    organization: "Zonguldak Bülent Ecevit Üniversitesi",
    period: "2022 – 2025 (Mezuniyet: 06/2025)",
    location: "Zonguldak",
    description:
      "Mezuniyet Projesi: Qt ve Python ile dosya şifreleme/çözme özellikli güvenlik odaklı kriptografi masaüstü uygulaması. Odak: Yazılım Mimarisi, Veritabanı Sistemleri, Kriptografi ve Uygulama Güvenliği.",
  },
  {
    type: "certificate",
    title: "STARTUP 2025 & KOSGEB Girişimcilik Sertifikası",
    organization: "Zonguldak Teknopark & Marmara Teknokent",
    period: "12/2024 – 04/2025",
    description:
      "STARTUP 2025 Ürün Maratonu ve KOSGEB Girişimcilik İş Modeli Sertifikası (Doğrulama: KSB01UGE0112961846).",
  },
  {
    type: "work",
    title: "Siber Güvenlik & Yazılım Geliştirici (Stajyer)",
    organization: "CyberNova Siber Güvenlik",
    period: "08/2024 – 09/2024",
    location: "Samsun",
    description:
      "Kriptografi tabanlı masaüstü uygulamalar; Qt ve Python ile GUI tabanlı yazılımlar ve SQL tabanlı veri yönetimi.",
  },
  {
    type: "certificate",
    title: "Siber Vatan BootCamp & Eğitim Sertifikası",
    organization: "Siber Vatan (Trendyol, Barikat, Cyrops, BG-TEK)",
    period: "11/2022 – 09/2023",
    location: "Antalya / Çevrimiçi",
    description:
      "10 günlük uygulamalı siber güvenlik kampı ve 10 aylık yoğun program: Linux & CEH, Sızma Testi, Tersine Mühendislik ve Web Güvenliği.",
  },
  {
    type: "work",
    title: "Full-Stack Yazılım Geliştirici (Stajyer)",
    organization: "Mergentech",
    period: "07/2022 – 08/2022",
    location: "Eskişehir",
    description:
      "JotForm benzeri form uygulaması projesinde Angular ile UI bileşenleri geliştirme; Java & Spring Boot ile REST API ve JWT oturum yönetimi.",
  },
  {
    type: "education",
    title: "Bilişim Sistemleri Mühendisliği",
    organization: "Muğla Sıtkı Koçman Üniversitesi",
    period: "2020 – 2022",
    location: "Muğla",
    description:
      "Mühendislik temelleri ve yazılım mimarileri eğitimi. 2. sınıfta ZBÜ Bilgisayar Mühendisliği'ne başarıyla yatay geçiş yapıldı.",
  },
];

const iconMap = {
  education: FaGraduationCap,
  work: FaBriefcase,
  certificate: FaCertificate,
} as const;

export function Timeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="py-16 w-full max-w-5xl mx-auto">
      <h3 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-foreground">
        Eğitim & Deneyim
      </h3>

      <div className="relative">
        {/* Central Vertical Line */}
        <div
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-border"
          aria-hidden="true"
        />

        {/* Timeline items */}
        <div className="space-y-12">
          {timelineData.map((item, index) => {
            const Icon = iconMap[item.type];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={`${item.title}-${item.period}`}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, x: isLeft ? -30 : 30 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative flex items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Node Icon on the line */}
                <div
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-md bg-accent text-accent-foreground"
                  aria-hidden="true"
                >
                  <Icon className="text-lg" />
                </div>

                {/* Content Box */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-200">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent mb-2">
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm font-semibold text-accent mt-0.5">
                      {item.organization}
                      {item.location ? ` • ${item.location}` : ""}
                    </p>
                    {item.description && (
                      <p className="text-sm text-muted mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
