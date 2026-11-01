import Link from "next/link";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";
import { HeroTypewriter } from "./HeroTypewriter";
import { WavingHand } from "./WavingHand";
import { HeroVisual } from "./HeroVisual";
import { HeroBottom } from "./HeroBottom";

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Medium: FaMedium,
} as const;

export default function HomePage() {
  return (
    <div className="relative w-full overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Zemin: --accent'in %10-15'i kadar 2 bulanık radial ışık lekesi ve maskeli ince noktalı grid (Sadece CSS) */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Bulanık radial ışık lekesi 1 (Sol Üst) */}
        <div className="absolute -top-32 -left-32 w-80 sm:w-[32rem] h-80 sm:h-[32rem] rounded-full bg-accent/15 blur-3xl" />

        {/* Bulanık radial ışık lekesi 2 (Sağ Orta) */}
        <div className="absolute top-1/3 -right-32 w-80 sm:w-[30rem] h-80 sm:h-[30rem] rounded-full bg-accent/10 blur-3xl" />

        {/* Maske ile silinen ince noktalı grid */}
        <div
          className="absolute inset-0 opacity-70 dark:opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(var(--border) 1.25px, transparent 1.25px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, #000 50%, transparent 95%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, #000 50%, transparent 95%)",
          }}
        />
      </div>

      {/* Tam ekran genişliği ve dengeli kenar dolguları (mx-auto kaynaklı turuncu margin boşlukları kaldırıldı) */}
      <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20 flex flex-col gap-16 md:gap-20">
        {/* Üst Alan: Sol Metin & Sağ Profil Görseli */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Sol Kolon: Kimlik, Unvan ve Hızlı Aksiyonlar */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-7/12 space-y-6">
            {/* Küçük Rozet */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-card/80 border border-border text-foreground text-xs sm:text-sm font-medium shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Yeni fırsatlara açığım</span>
            </div>

            {/* h1 Başlık & Waving Hand */}
            <div>
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight text-foreground leading-[1.1] flex flex-wrap items-center justify-center lg:justify-start">
                <span>Merhaba, ben Kübra</span>
                <WavingHand />
              </h1>

              {/* Daktilo Efektli Unvanlar (Server dostu Client Component) */}
              <div className="mt-2">
                <HeroTypewriter />
              </div>
            </div>

            {/* Somut Açıklama (En fazla 2 cümle, [YER TUTUCU] içeren) */}
            <p className="text-base sm:text-lg text-muted font-normal max-w-2xl leading-relaxed">
              React Native ve Next.js ile kullanıcı deneyimini merkeze alan,
              yüksek performanslı mobil ve web çözümleri geliştiriyorum. Temiz
              mimari standartları ve [YER TUTUCU] prensipleriyle modern arayüzleri
              ölçeklenebilir ürünlere dönüştürüyorum.
            </p>

            {/* CTA Butonları (Doğrudan Link / a stilleri, buton sarmalayıcısız) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-xl font-semibold bg-accent text-accent-foreground shadow-md hover:opacity-90 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent text-sm sm:text-base"
              >
                Projelerimi Görüntüle
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-xl font-semibold border border-border bg-card/60 hover:bg-card hover:border-accent text-foreground active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent text-sm sm:text-base"
              >
                İletişime Geç
              </Link>
              <a
                href="/cv.pdf"
                download="Kubra_Kara_CV.pdf"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-3 rounded-xl font-medium text-muted hover:text-foreground hover:bg-card/60 active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent gap-2 text-sm sm:text-base"
                aria-label="CV İndir (PDF)"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>CV İndir</span>
              </a>
            </div>

            {/* Sosyal Medya İkonları (En az 44px, hover:accent, erişilebilir) */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map(({ name, url, label }) => {
                const Icon = iconMap[name as keyof typeof iconMap];
                if (!Icon) return null;
                return (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-border bg-card/80 text-foreground hover:text-accent hover:border-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Sağ Kolon: Profil Fotoğrafı & Yüzen Teknoloji Chip'leri */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>

        {/* Alt Bölüm: İstatistik Kartları, Teknoloji Şeridi & Kaydırma İpucu */}
        <HeroBottom />
      </div>
    </div>
  );
}
