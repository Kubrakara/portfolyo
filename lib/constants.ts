export interface SocialLink {
  readonly name: string;
  readonly url: string;
}

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Kubrakara",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/k%C3%BCbra-kara-394850/",
  },
  {
    name: "Medium",
    url: "https://medium.com/@kubra26kara",
  },
] as const satisfies readonly SocialLink[];

export const NAV_ITEMS = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkında", href: "/about" },
  { label: "Projeler", href: "/projects" },
  { label: "İletişim", href: "/contact" },
] as const satisfies readonly NavItem[];
