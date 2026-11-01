import type { Metadata } from "next";
import ContactMe from "../components/ContactMe";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Kübra Kara ile iletişime geçin. Proje teklifleri ve iş birlikleri için mesaj gönderin.",
};

export default function ContactPage() {
  return <ContactMe />;
}
