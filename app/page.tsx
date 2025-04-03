"use client";

import React from "react";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";

import HomePage from "./components/HomePage";
import ContactMe from "./components/ContactMe";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      {/* Ana Sayfa */}
      <section className="w-full">
        <HomePage />
      </section>

      {/* Hakkımda */}
      <section className="w-full py-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <AboutMe />
      </section>

      {/* Projelerim */}
      <section className="w-full py-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <MyProjects />
      </section>

      {/* İletişim */}
      <section className="w-full py-8 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
