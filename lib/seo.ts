import type { Metadata } from "next";

export const siteConfig = {
  name: "Kübra Kara",
  title: "Kübra Kara | Full-Stack Yazılım Geliştirici · React · React Native · Node.js",
  description:
    "React, React Native ve Node.js ile uçtan uca web ve mobil ürünler geliştiren Full-Stack Yazılım Geliştirici Kübra Kara'nın portfolyosu.",
  url: "https://kubrakara.vercel.app",
  ogImage: "/1ben.png",
  links: {
    github: "https://github.com/Kubrakara",
    linkedin: "https://www.linkedin.com/in/kubra-karaa",
    medium: "https://medium.com/@kubra26kara",
  },
  keywords: [
    "Kübra Kara",
    "Full-Stack Yazılım Geliştirici",
    "Full Stack Developer",
    "React Developer",
    "React Native Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Mobile App Developer",
    "Web Developer",
    "Docker",
    "Nginx",
    "Linux",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
};

export function generateMetadata(): Metadata {
  return {
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [
      {
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: "@kubrakara",
    },
    icons: {
      icon: "/favicon.ico",
    },
    verification: {
      google: "lOLmkFpoF0zXpGKJ3mw_wAGITbabHn89CH7vrzBJrkA",
    },
    metadataBase: new URL(siteConfig.url),
  };
}
