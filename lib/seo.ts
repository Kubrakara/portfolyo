/**
 * SEO and Metadata Configuration
 */

import { Metadata } from "next";

export const siteConfig = {
    name: "Kübra Kara",
    title: "Kübra Kara | Full Stack Developer & Mobile App Developer",
    description:
        "Full Stack Developer specializing in React, Next.js, React Native, and modern web technologies. Building beautiful and performant web and mobile applications.",
    url: "https://yourdomain.com", // Replace with your actual domain
    ogImage: "/og-image.png", // Add your OG image
    links: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        medium: "https://medium.com/@yourusername",
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
            creator: "@yourusername", // Replace with your Twitter handle
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-16x16.png",
            apple: "/apple-touch-icon.png",
        },
        manifest: "/site.webmanifest",
    };
}
