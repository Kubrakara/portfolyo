import type { Metadata } from "next";
import AboutMe from "../components/AboutMe";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Kübra Kara hakkında detaylı bilgi, yetkinlikler, eğitim ve iş deneyimi.",
};

export default function AboutPage() {
  return <AboutMe />;
}
