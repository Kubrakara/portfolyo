"use client";

import React, { useState } from "react";
import { useThemeColors } from "@/lib/hooks/useThemeColors";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactMe = () => {
  const { mounted, colors } = useThemeColors();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!mounted) return null;

  const handleMailSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoLink = `mailto:kubra26kara@gmail.com?subject=İletişim Talebi - ${encodeURIComponent(
      name
    )}&body=Gönderen: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
      email
    )}%0A%0AMesaj:%0A${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-20 transition-all duration-300"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: colors.text }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            İletişime Geçin
          </motion.h1>


        </div>

        {/* Form Card */}
        <motion.div
          className="rounded-2xl p-8 sm:p-10 shadow-2xl backdrop-blur-sm border"
          style={{
            backgroundColor: colors.card,
            borderColor: `${colors.accent}30`,
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleMailSend} className="space-y-6">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: colors.text }}
              >
                İsim Soyisim *
              </label>
              <input
                type="text"
                placeholder="Adınızı girin"
                className="w-full px-4 py-3 rounded-lg transition-all duration-300 border-2 focus:outline-none"
                style={{
                  backgroundColor: colors.background,
                  color: colors.text,
                  borderColor: colors.card,
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = colors.accent;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = colors.card;
                }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: colors.text }}
              >
                Email *
              </label>
              <input
                type="email"
                placeholder="email@ornek.com"
                className="w-full px-4 py-3 rounded-lg transition-all duration-300 border-2 focus:outline-none"
                style={{
                  backgroundColor: colors.background,
                  color: colors.text,
                  borderColor: colors.card,
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = colors.accent;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = colors.card;
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: colors.text }}
              >
                Mesajınız *
              </label>
              <textarea
                placeholder="Mesajınızı buraya yazın..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg transition-all duration-300 border-2 focus:outline-none resize-none"
                style={{
                  backgroundColor: colors.background,
                  color: colors.text,
                  borderColor: colors.card,
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = colors.accent;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = colors.card;
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg btn-ripple"
              style={{
                backgroundColor: isSubmitting ? colors.textMuted : colors.accent,
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {isSubmitting ? (
                <>
                  <FaCheckCircle className="animate-pulse" />
                  Gönderiliyor...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Mesaj Gönder
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >

        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactMe;
