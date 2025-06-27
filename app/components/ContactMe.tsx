"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactMe = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = (theme || "light") === "dark";

  const inputStyle = isDarkMode
    ? "bg-[#2a173a] text-white"
    : "bg-gray-200 text-[#22192f]";

  const bgStyle = isDarkMode
    ? "text-white bg-[#110b1a]"
    : "bg-[#e9dff6] text-[#22192f]";

  const handleMailSend = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:kubra26kara@gmail.com?subject=İletişim Talebi - ${encodeURIComponent(
      name
    )}&body=Gönderen: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
      email
    )}%0A%0AMesaj:%0A${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 200);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 transition-all duration-300 ${bgStyle}`}
    >
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        İletişim Kurun
      </motion.h1>

      <motion.div
        className={`w-full max-w-lg rounded-2xl p-8 shadow-xl ${
          isDarkMode
            ? "bg-[#1a0f23]"
            : "bg-[#d8c4f2] shadow-2xl border border-[#ccc0dd]"
        }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <form onSubmit={handleMailSend} className="space-y-6">
          <div>
            <label className="block text-lg mb-2">İsim Soyisim *</label>
            <input
              type="text"
              placeholder="İsim Soyisim..."
              className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 ${inputStyle}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Email *</label>
            <input
              type="email"
              placeholder="Mail..."
              className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 ${inputStyle}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-2">Mesaj *</label>
            <textarea
              rows={4}
              placeholder="Mesajınız..."
              className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 ${inputStyle}`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="w-full py-3 bg-pink-600 rounded-full text-lg font-bold hover:bg-pink-500 transition-all duration-300"
          >
            Mail Gönder
          </motion.button>
        </form>
      </motion.div>

      {/* 🌍 Sosyal Medya */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Bana ulaşın !</h2>
        <div className="flex flex-wrap justify-center gap-6 text-3xl">
          {[
            { icon: FaTwitter, title: "Twitter", link: "#" },
            { icon: FaInstagram, title: "Instagram", link: "#" },
            { icon: FaFacebook, title: "Facebook", link: "#" },   
          ].map(({ icon: Icon, title, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-pink-500 hover:text-white transition-colors"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactMe;
