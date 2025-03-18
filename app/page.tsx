"use client";

import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";

const Home: React.FC = () => {
  const { theme } = useTheme();
  const isDarkMode = (theme || "light") === "dark";

  return (
    <div
      className={`flex items-center justify-between min-h-screen px-10 transition-colors duration-300 
        ${isDarkMode ? "bg-[#291C3A] text-white" : "bg-[#DCCFED] text-black"}`}
    >
      <div className="text-left">
        <h1
          className={`text-6xl font-semibold ${
            isDarkMode ? "text-white" : "text-[#291C3A]"
          }`}
        >
          Merhaba{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
          ,
        </h1>

        <div
          className={`bg-gradient-to-r bg-clip-text text-transparent 
            ${
              isDarkMode
                ? "from-purple-400 via-blue-500 to-blue-300"
                : "from-purple-700 via-blue-400 to-blue-300"
            }`}
        >
          <h2 className="text-8xl font-bold mt-2">Ben Kübra,</h2>
          <h2 className="text-8xl font-bold">
            FullStack, Web, Mobile, Desktop Developerım
          </h2>
          <p
            className={`text-2xl mt-4 ${
              isDarkMode ? "text-white" : "text-[#291C3A]"
            }`}
          >
            I build things for everywhere
          </p>
        </div>

        <div className="flex gap-4 mt-6 text-2xl">
          <a
            href="#"
            className={`${
              isDarkMode ? "text-white" : "text-[#291C3A]"
            } hover:text-gray-500`}
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="#"
            className={`${
              isDarkMode ? "text-white" : "text-[#291C3A]"
            } hover:text-gray-500`}
          >
            <FaGithub size={30} />
          </a>
          <a
            href="#"
            className={`${
              isDarkMode ? "text-white" : "text-[#291C3A]"
            } hover:text-gray-500`}
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="#"
            className={`${
              isDarkMode ? "text-white" : "text-[#291C3A]"
            } hover:text-gray-500`}
          >
            <FaDribbble size={30} />
          </a>
        </div>
      </div>

      <div className="w-1/2 flex justify-end">
        <Image
          src="/keyb.png"
          alt="Developer Illustration"
          className="h-auto w-full max-w-xxl"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Home;
