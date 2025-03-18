"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const AboutMe: React.FC = () => {
  return (
    <div className="flex items-center justify-between min-h-screen  text-white px-16 py-10">
      {/* Sol taraf (Görsel) */}
      <div className="relative w-1/2">
        <Image
          src="/" // Görselin dosya adını doğru yerleştir
          alt="About Me"
          width={600}
          height={400}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Sağ taraf (Metin içeriği) */}
      <div className="w-1/2">
        <h2 className="text-6xl font-bold">
          About <span className="text-purple-400">me</span>
        </h2>
        <p className="mt-6 text-lg text-gray-300">
          Bilgisayar Mühendisliği eğitimi alarak yazılım geliştirme ve siber
          güvenlik konularında uzmanlaştım. Çeşitli projelerde web ve mobil
          uygulama geliştirme, API tasarımı, veri güvenliği ve makine öğrenmesi
          gibi alanlarda çalışmalar yaptım. Siber güvenlik alanında SiberVatan
          projesinde bulunarak eğitimler ve sertifika alarak Linux sistemleri,
          güvenlik testleri, zafiyet analizi ve kriptografi konularında
          derinlemesine bilgi sahibi oldum. Ayrıca, yazılım geliştirme sürecinde
          güvenlik odaklı yaklaşımlar benimsiyor ve projelerimde güvenliği ön
          planda tutuyorum. Staj ve projelerim sayesinde hem frontend hem
          backend geliştirme konusunda deneyim kazandım. Next.js, React, React
          Native ve TypeScript gibi modern teknolojilerle arayüzler
          geliştirirken, Python, SQL, Firebase ve REST API gibi araçlarla
          backend ve veritabanı süreçlerini yönettim. Analitik düşünme becerim,
          takım çalışmasına yatkınlığım ve problem çözme yeteneğimin gerek
          ekibimle yaptığım projeler gerek katıldığım eğitimler sayesinde
          geliştiğini düşünüyorum. Projelerimde kullandığım teknolojiler ve
          çalışmalarım hakkında daha fazla bilgi edinmek için benimle iletişime
          geçebilirsiniz.
        </p>

        {/* Ok ve buton */}
        <div className="flex items-center gap-6 mt-6">
          <FaArrowRight className="text-purple-400 text-3xl animate-pulse" />
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-800 text-white text-lg px-6 py-3 rounded-full shadow-lg transition-all"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
