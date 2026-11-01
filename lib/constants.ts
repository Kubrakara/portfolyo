export interface SocialLink {
  readonly name: string;
  readonly url: string;
  readonly label: string;
}

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface HeroChip {
  readonly name: string;
  readonly iconType: "react" | "nextjs" | "typescript";
  readonly positionClass: string;
}

export interface HeroStat {
  readonly value: string;
  readonly label: string;
  readonly detail: string;
}

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Kubrakara",
    label: "Kübra Kara GitHub Profilini Ziyaret Et",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/k%C3%BCbra-kara-394850/",
    label: "Kübra Kara LinkedIn Profilini Ziyaret Et",
  },
  {
    name: "Medium",
    url: "https://medium.com/@kubra26kara",
    label: "Kübra Kara Medium Yazılarını Oku",
  },
] as const satisfies readonly SocialLink[];

export const NAV_ITEMS = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkında", href: "/about" },
  { label: "Projeler", href: "/projects" },
  { label: "İletişim", href: "/contact" },
] as const satisfies readonly NavItem[];

export const HERO_ROLES = [
  "Mobil Uygulama Geliştirici",
  "React Native ve Next.js",
] as const satisfies readonly string[];

export const HERO_CHIPS = [
  {
    name: "React Native",
    iconType: "react",
    positionClass: "top-4 -left-2 sm:top-8 sm:-left-3",
  },
  {
    name: "Next.js",
    iconType: "nextjs",
    positionClass: "top-1/3 -right-2 sm:top-1/3 sm:-right-3",
  },
  {
    name: "TypeScript",
    iconType: "typescript",
    positionClass: "bottom-3 left-2 sm:bottom-6 sm:left-3",
  },
] as const satisfies readonly HeroChip[];

export const HERO_STATS = [
  {
    value: "[YER TUTUCU]",
    label: "Mobil & Web Projesi",
    detail: "Kullanıcı Odaklı Çözümler",
  },
  {
    value: "[YER TUTUCU]",
    label: "Kod Mimarisi",
    detail: "Temiz ve Ölçeklenebilir Yapı",
  },
  {
    value: "[YER TUTUCU]",
    label: "Geliştirme Deneyimi",
    detail: "Modern Teknolojiler",
  },
] as const satisfies readonly HeroStat[];

export const TECH_STACK_ITEMS = [
  "React Native",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Node.js",
  "Expo",
  "Firebase",
  "Git & GitHub",
] as const satisfies readonly string[];
