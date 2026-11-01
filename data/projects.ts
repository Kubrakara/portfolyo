export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly tags: readonly string[];
  readonly liveUrl?: string;
  readonly githubUrl?: string;
  readonly features?: readonly string[];
}

export const projects: readonly Project[] = [
  {
    id: "qr-menu",
    title: "Multi-Tenant QR Menü & Masa Sipariş Sistemi (SaaS)",
    description:
      "İşletme bazlı veri izolasyonu (tenant_id), rol tabanlı yönetim paneli, masa bazlı anlık sipariş/çağrı akışı ve önbellekleme mimarisiyle sıfırdan geliştirilen çok kiracılı SaaS web uygulaması; ekip olarak birlikte geliştirildi.",
    image: "/pc.jpg",
    tags: ["Next.js", "TypeScript", "Node.js", "MySQL", "Docker", "Nginx", "Web"],
    liveUrl: "https://kubrakara.vercel.app",
    features: [
      "Çok kiracılı (multi-tenant) veri izolasyonu",
      "Rol tabanlı yetkilendirme ve yönetim paneli",
      "Masa bazlı anlık sipariş ve servis çağırma",
      "Docker ve Nginx ile yüksek performanslı sunucu dağıtımı",
    ],
  },
  {
    id: "syncagent",
    title: "SyncAgent — Çok Kanallı Webhook & Mesajlaşma Otomasyon Sistemi",
    description:
      "Web, WhatsApp ve Instagram webhook'larından gelen mesajları karşılayıp kurum içi bilgi tabanına göre otomatik yanıt ve randevu akışlarını REST API'lerle yöneten event-driven servis; ekip olarak birlikte geliştirildi.",
    image: "/proje/apidocker.png",
    tags: ["Next.js", "Node.js", "Webhook", "REST API", "Docker", "n8n", "Otomasyon"],
    githubUrl: "https://github.com/orange-hat-X",
    features: [
      "Çok kanallı webhook entegrasyonu (Web, WhatsApp, Instagram)",
      "Kurum içi bilgi tabanı ile akıllı otomatik yanıt",
      "Event-driven REST API mimarisi",
      "n8n ve Docker ile tam otomatik iş akışları",
    ],
  },
  {
    id: "google-play-apps",
    title: "Google Play — 4 Canlı Mobil Uygulama",
    description:
      "Flagpedia (Push Notification destekli bayrak/ülke rehberi), YouAreAI (senaryo tabanlı simülasyon oyunu), Geziver (dinamik seyahat rotaları), Radar Nerede (harita/konum tabanlı nokta rehberi) — React Native/Expo ile geliştirildi, Play Store'da yayında.",
    image: "/proje/react-native-expo.png",
    tags: ["React Native", "Expo", "Firebase", "Mobil", "Push Notification"],
    liveUrl: "https://play.google.com/store/apps/developer?id=OrangeHat+Digital",
    features: [
      "Flagpedia: Push notification destekli dünya rehberi",
      "YouAreAI: Senaryo tabanlı simülasyon oyunu",
      "Geziver: Dinamik seyahat ve rota planlama",
      "Radar Nerede: Harita ve konum tabanlı rehber",
    ],
  },
  {
    id: "shieldera",
    title: "Shieldera — Çapraz Platform Kriptografik Dosya & Parola Kasası",
    description:
      "Masaüstü (PySide6), web (Next.js) ve mobil (React Native) istemciler arasında Firebase senkronizasyonu ve istemci taraflı şifreleme sunan çok platformlu uygulama; ekip olarak birlikte geliştirildi.",
    image: "/proje/shieldera.png",
    tags: ["Python", "React Native", "Next.js", "Firebase", "Güvenlik"],
    liveUrl: "https://shielderaweb.vercel.app/",
    githubUrl: "https://github.com/Furkanaslnn/Shieldera-Python-Pyside6-Firebase-DesktopApp",
    features: [
      "Uçtan uca istemci taraflı kriptografik şifreleme",
      "PySide6 masaüstü, Next.js web ve React Native mobil istemciler",
      "Firebase bulut senkronizasyonu",
      "Güvenli parola ve dosya saklama kasası",
    ],
  },
  {
    id: "e-imza",
    title: "Esnafeimza.com.tr – E-İmza Başvuru Platformu",
    description:
      "Kullanıcıların e-imza başvurularını online olarak tamamlamasına olanak tanıyan bir platform. Başvurular Google Sheets ve Google Drive ile entegre çalışmaktadır.",
    image: "/proje/e-imza.png",
    tags: ["Next.js", "TypeScript", "Google Sheets", "Firebase", "Tailwind", "Web"],
    liveUrl: "https://esnafeimza.com.tr/",
    githubUrl: "https://github.com/Kubrakara/EsnafE-imza",
  },
  {
    id: "gurme-ai",
    title: "GurmeAI – Yapay Zeka Destekli Yemek Tarifi Platformu",
    description:
      "Kullanıcıların malzemelerine göre yapay zeka destekli yemek tarifleri almasını sağlayan web platformu. Next.js ve Google Gemini API kullanılarak geliştirilmiştir.",
    image: "/proje/gurmeai.png",
    tags: [
      "Next.js",
      "Google Gemini API",
      "Firebase",
      "AI",
      "Tailwind",
      "Web",
    ],
    liveUrl: "https://www.gurmeai.com.tr/",
    githubUrl: "https://github.com/Kubrakara/GurmeAi",
  },
  {
    id: "api-docker",
    title: "Docker Destekli Otomatik API Dokümantasyon ve Test Aracı",
    description:
      "Swagger/OpenAPI dokümanları üzerinden otomatik test, yük testi, loglama, görsel raporlama ve AI destekli açıklamalar sağlayan Docker tabanlı kapsamlı bir araç. FastAPI, Next.js ve Gemini API entegrasyonu ile geliştirildi.",
    image: "/proje/apidocker.png",
    tags: [
      "FastAPI",
      "Node.js",
      "Next.js",
      "Docker",
      "AI",
      "Otomasyon",
    ],
    liveUrl: "https://shielderaweb.vercel.app/",
    githubUrl: "https://github.com/Kubrakara/OtomatikApiTestAraci",
  },
  {
    id: "afet-scope",
    title: "FEMA API Tabanlı Afet Bilgilendirme Mobil Uygulaması",
    description:
      "FEMA'nın Disaster Declarations API'sini kullanarak afet verilerini anlık olarak çeken ve kullanıcıları mobil bildirimlerle bilgilendiren React Native Expo tabanlı mobil uygulama.",
    image: "/proje/afet.png",
    tags: ["React Native", "Expo", "Mobil", "API", "Afet Yönetimi"],
    githubUrl: "https://github.com/Kubrakara/AlertScope",
  },
  {
    id: "vuln-detect",
    title: "Code-Vuln-Detect-Tool – Zafiyetli Kod Analizi",
    description:
      "Kodlardaki güvenlik açıklarını analiz eden ve potansiyel riskleri tespit eden bir makine öğrenmesi uygulaması. Python ve Jupyter Notebook kullanılarak geliştirilmiştir.",
    image: "/proje/vuln.png",
    tags: [
      "Python",
      "AI",
      "Machine Learning",
      "Güvenlik",
    ],
    githubUrl: "https://github.com/Kubrakara/Code-Vuln-Detect-Tool",
  },
  {
    id: "anomali-detect",
    title: "Ağ Anomali Tespiti – Makine Öğrenmesi ile DDOS ve Brute Force Analizi",
    description:
      "Kaggle üzerindeki ağ trafiği veri seti kullanılarak, Python ile geliştirilen makine öğrenmesi modeli sayesinde DDOS, Brute Force gibi saldırılar gerçek zamanlı olarak tespit edilmektedir.",
    image: "/proje/anomali.png",
    tags: [
      "Python",
      "AI",
      "Güvenlik",
      "Machine Learning",
    ],
    githubUrl: "https://github.com/Kubrakara",
  },
  {
    id: "python-bot",
    title: "Python Otomatik Görsel/Doküman İndirme Botu",
    description:
      "Günlük olarak güncellenen görselleri otomatik olarak indiren Python tabanlı bir bot. Selenium kullanarak web üzerinde otomatik gezinme ve dosya indirme işlemlerini gerçekleştirir.",
    image: "/proje/python-bot.png",
    tags: ["Python", "Selenium", "Web Scraping", "Otomasyon"],
  },
] as const;
