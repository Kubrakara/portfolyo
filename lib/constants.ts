/**
 * Centralized Theme Constants
 * Modern, professional color palette with contemporary purple tones
 * Designed for optimal contrast, accessibility, and visual appeal
 */

export const THEME_COLORS = {
  light: {
    background: "#F5F3FF",        // Slightly darker purple-white for better balance
    foreground: "#1A1625",        // Deep rich black-purple
    card: "#EFECFF",              // Soft elevated card
    cardHover: "#E9E5FF",         // Interactive feedback on hover
    accent: "#7C3AED",            // Vibrant modern purple (Tailwind purple-600)
    accentLight: "#A78BFA",       // Soft purple accent (Tailwind purple-400)
    text: "#1A1625",              // Primary text color
    textMuted: "#64748B",         // Muted text for secondary content
  },
  dark: {
    background: "#0F0A1F",        // Rich midnight purple
    foreground: "#F5F3FF",        // Premium light purple
    card: "#1A1230",              // Elevated dark purple card
    cardHover: "#221940",         // Interactive glow on hover
    accent: "#A78BFA",            // Glowing purple (Tailwind purple-400)
    accentLight: "#C4B5FD",       // Soft lavender (Tailwind purple-300)
    text: "#F5F3FF",              // Primary text - premium light
    textMuted: "#C4B5FD",         // Muted text with purple tint
  },
} as const;

export const GRADIENTS = {
  navbar: {
    light: "from-[#7C3AED] via-[#9333EA] to-[#6D28D9]",  // Modern vibrant purple gradient
    dark: "from-[#6D28D9] via-[#4C1D95] to-[#2E1065]",   // Rich deep purple gradient
  },
  text: {
    light: "from-purple-600 via-violet-500 to-purple-400",  // Contemporary light mode text
    dark: "from-purple-400 via-violet-300 to-purple-200",   // Glowing dark mode text
  },
} as const;

export const NAVBAR_COLORS = {
  logoFirst: {
    light: "#FAFAFF",          // White for excellent contrast on gradient
    dark: "#1A1625",           // Dark purple for dark mode
  },
  logoSecond: "#E0D4FF",       // Light purple - excellent visibility
  buttonText: {
    light: "#FAFAFF",          // White text for light mode navbar
    dark: "#F5F3FF",           // Light premium text for dark mode
  },
  switch: {
    border: "#A78BFA",         // Soft purple border
    track: "#7C3AED",          // Vibrant purple track
    thumb: "#FAFAFF",          // White thumb
    text: "#F5F3FF",           // Light text
  },
} as const;

export const TRANSITIONS = {
  theme: "duration-300",
  hover: "duration-300",
  animation: "duration-500",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Kubrakara",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kübra-kara-394850/",
  },
  {
    name: "Medium",
    url: "https://medium.com/@kubra26kara",
  },
] as const;

export const NAV_ITEMS = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkında", href: "/about" },
  { label: "Projeler", href: "/projects" },
  { label: "İletişim", href: "/contact" },
] as const;
