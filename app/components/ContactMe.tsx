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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🚫 hydration hatasını engeller

  const isDarkMode = (theme || "light") === "dark";

  const inputStyle = isDarkMode
    ? "bg-[#2a173a] text-white"
    : "bg-gray-200 text-[#22192f]";

  const bgStyle = isDarkMode
    ? "text-white bg-[#110b1a]"
    : "bg-[#e9dff6] text-[#22192f]";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 transition-all duration-300 ${bgStyle}`}
    >
      {/* 📝 Başlık */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      {/* 📬 Form */}
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
        <form className="space-y-6">
          {[
            { label: "Full name *", type: "text", placeholder: "Your name..." },
            { label: "Email *", type: "email", placeholder: "Your email..." },
          ].map((field, i) => (
            <div key={i}>
              <label className="block text-lg mb-2">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 ${inputStyle}`}
              />
            </div>
          ))}

          <div>
            <label className="block text-lg mb-2">Message *</label>
            <textarea
              rows={4}
              placeholder="Your message..."
              className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 ${inputStyle}`}
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="w-full py-3 bg-pink-600 rounded-full text-lg font-bold hover:bg-pink-500 transition-all duration-300"
          >
            Send Message
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
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Follow Me</h2>
        <div className="flex flex-wrap justify-center gap-6 text-3xl">
          {[
            { icon: FaDiscord, title: "Discord", link: "#" },
            { icon: FaTwitter, title: "Twitter", link: "#" },
            { icon: FaInstagram, title: "Instagram", link: "#" },
            { icon: FaFacebook, title: "Facebook", link: "#" },
            { icon: FaYoutube, title: "YouTube", link: "#" },
            { icon: FaTelegram, title: "Telegram", link: "#" },
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
