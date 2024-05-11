"use client";
import React, { useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Lenis from "lenis";
import GoTo from "@/components/GoTo";
const AboutPage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <motion.div
      className="lg:h-[400vh] h-auto md:h-[400vh] pt-20 md:pt-14 lg:pt-12 xl:pt-8 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* TEXT CONTAINER */}
      <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
        {/* BIOGRAPHY CONTAINER */}
        <div className="flex flex-col gap-12 justify-center items-center">
          {/*BIOGRAPHY HEADING*/}
          <h1 className="font-bold text-center text-6xl">About me</h1>

          {/*BIOGRAPHY DESC*/}
          <p className="text-xl w-2/3 text-center">
            Hello, I am{" "}
            <span className="font-semibold italic ">Avirup Ray</span>, a
            passionate web-developer. My passion for web development fuels my
            creativity in crafting user-friendly and engaging web experiences. I
            combine my front-end and back-end skills to bring websites to life,
            and I'm always eager to collaborate and turn your vision into
            reality.
          </p>

          {/*BIOGRAPHY QUOTE*/}
          <span className="italic text-lg">
            " The only way to do great work is to love what you do. "
          </span>
          {/* BIOGRAPHY SCROLL SVG */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>
        {/* SKILLS CONTAINER */}
        <div className="">
          <Skills />
        </div>
        {/* EXPERIENCE CONTAINER */}
        <div className="">
          <Experience />
        </div>
        <div className="">
          <Education />
        </div>
      </div>
      <GoTo />
    </motion.div>
  );
};

export default AboutPage;
