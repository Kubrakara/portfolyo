"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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
    <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-16 bg-background text-foreground transition-colors duration-300">
      <motion.div
        className="w-full max-w-2xl"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Başlık */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-3">
            İletişime <span className="text-accent">Geçin</span>
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-md mx-auto">
            Projeleriniz, iş teklifleri veya sadece bir merhaba demek için bana
            yazabilirsiniz.
          </p>
        </div>

        {/* Form Kartı */}
        <form
          onSubmit={handleMailSend}
          className="p-6 sm:p-10 rounded-3xl bg-card border border-border shadow-xl space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Adınız Soyadınız
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınız"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              E-posta Adresiniz
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ornek@email.com"
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-foreground mb-2"
            >
              Mesajınız
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mesajınızı buraya yazabilirsiniz..."
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all text-sm resize-y"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold bg-accent text-accent-foreground shadow-lg hover:opacity-95 transition-all text-base min-h-[44px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-60"
            >
              <FaPaperPlane className="text-sm" aria-hidden="true" />
              {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
