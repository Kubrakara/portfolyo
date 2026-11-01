import type { Metadata } from "next";

export const siteConfig = {
  name: "Kübra Kara",
  title: "Kübra Kara | Full Stack Developer & Mobile App Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, React Native, and modern web technologies. Building beautiful and performant web and mobile applications.",
  url: "https://kubrakara.vercel.app",
  ogImage: "/1ben.png",
  links: {
    github: "https://github.com/Kubrakara",
    linkedin: "https://www.linkedin.com/in/k%C3%BCbra-kara-394850/",
    medium: "https://medium.com/@kubra26kara",
  },
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Mobile App Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Firebase",
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
    metadataBase: new URL(siteConfig.url),
  };
}
