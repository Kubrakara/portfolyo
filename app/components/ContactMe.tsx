"use client";
import { useTheme } from "next-themes";
import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";

const ContactMe = () => {
  const { theme } = useTheme();
  const isDarkMode = (theme || "light") === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-12
      ${
        isDarkMode
          ? "bg-gradient-to-br from-black via-[#1a0f23] to-[#22192f] text-white" // Koyu mod
          : "bg-[#DCCFED] text-[#22192f]" // Açık mod
      }`}
    >
      {/* Üst Kısım - Contact Me Formu */}
      <h1 className="text-6xl font-bold text-center mb-10">Contact me</h1>

      <div
        className={`w-full max-w-2xl rounded-lg p-8 shadow-xl
          ${
            isDarkMode
              ? "bg-[#1a0f23]"
              : "bg-[#d8c4f2] shadow-2xl border border-[#ccc0dd]"
          }`} // Formun arka planı tema uyumlu
      >
        <form className="space-y-6">
          <div>
            <label
              className={`block text-lg mb-2 ${
                isDarkMode ? "text-white" : "text-[#22192f]"
              }`}
            >
              Full name *
            </label>
            <input
              type="text"
              placeholder="Enter your full name ..."
              className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400
                ${
                  isDarkMode
                    ? "bg-[#2a173a] text-white"
                    : "bg-gray-200 text-[#22192f]"
                }`}
            />
          </div>

          <div>
            <label
              className={`block text-lg mb-2 ${
                isDarkMode ? "text-white" : "text-[#22192f]"
              }`}
            >
              Email *
            </label>
            <input
              type="email"
              placeholder="Enter your email ..."
              className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400
                ${
                  isDarkMode
                    ? "bg-[#2a173a] text-white"
                    : "bg-gray-200 text-[#22192f]"
                }`}
            />
          </div>

          <div>
            <label
              className={`block text-lg mb-2 ${
                isDarkMode ? "text-white" : "text-[#22192f]"
              }`}
            >
              Message *
            </label>
            <textarea
              rows={4}
              placeholder="Enter your message ..."
              className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400
                ${
                  isDarkMode
                    ? "bg-[#2a173a] text-white"
                    : "bg-gray-200 text-[#22192f]"
                }`}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-pink-600 rounded-full text-lg font-bold hover:bg-pink-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Alt Kısım - Follow Me */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold">Follow me</h2>
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a href="#" className="text-pink-500 hover:text-white transition">
            <FaDiscord />
          </a>
          <a href="#" className="text-pink-500 hover:text-white transition">
            <FaTwitter />
          </a>
          <a href="#" className="text-pink-500 hover:text-white transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-pink-500 hover:text-white transition">
            <FaFacebook />
          </a>
          <a href="#" className="text-pink-500 hover:text-white transition">
            <FaYoutube />
          </a>
          <a href="#" className="text-pink-500 hover:text-white transition">
            <FaTelegram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
