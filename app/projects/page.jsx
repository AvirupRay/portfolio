"use client";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import Lenis from "lenis";
import { CirclePlay } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Cypher",
    desc: " Our payment fraud application\n employs machine learning algorithms\n to detect suspicious transactions,\n flagging potential fraudulent activity in real-time.",
    color: "from-purple-900 to-black",
    shadow: "purple-900",
    link: "https://cypher-theta.vercel.app/",
    video: "/CypherPromo.mp4",
  },
  {
    id: 2,
    title: "Agrico",
    desc: " Agrico is an innovative EdTech platform\n empowering individuals and communities\n to learn modern farming practices\n and cultivate sustainable agricultural success.",
    color: "from-green-900 to-black",
    shadow: "purple-900",
    link: "https://agrico.vercel.app/",
    video: "/AgricoPromo.mp4",
  },
  {
    id: 3,
    title: "Cook's Book",
    desc: "  Cook's Book could evolve into a\n meal planning tool,suggesting recipes for the entire week \nthat utilize overlapping ingredients and minimize waste.",
    color: "from-yellow-900 to-black",
    shadow: "purple-900",
    link: "https://github.com/AvirupRay/CookBook",
    video: "/Cook'sBookPromo.mp4",
  },
  {
    id: 4,
    title: "RobinFood",
    desc: "RobinFood is a web platform\n that bridges the gap between restaurants with\nsurplus food and non-governmental organization(NGOs),\nfood banks, dedicated to distributing food to those in need.",
    color: "from-indigo-900 to-black",
    shadow: "purple-900",
    link: "https://github.com/AvirupRay/CookBook",
    video: "/RobinFoodPromo.mp4",
  },
];

const Project = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: ["start end", "start start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

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
      className="h-[790vh]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        {/* first page */}
        <div className=" w-full h-screen mb-10 flex items-center justify-center text-center text-8xl font-semibold font-serif">
          {" "}
          My Works
        </div>

        {/* project */}

        {/* background */}
        <div className=" sticky items-center justify-center h-screen w-screen top-0 bg-zinc-700" />

        {items.map((item) => (
          // main div
          <div
            className={` sticky flex items-center justify-center h-[50vh] lg:h-[80vh] w-[90vw] lg:w-[80vw] top-5 my-32 left-[5vw] lg:left-[10vw] bg-gradient-to-tl ${item.color} rounded-3xl shadow-3xl shadow-${item.shadow} `}
            key={item.id}
            style={{
              top: `calc( ${item.id * 30}px)`,
              scale: x,
            }}
          >
            {/* outer box */}
            <div className=" h-full w-full rounded-3xl  relative flex flex-col justify-end lg:justify-center p-2 ">
              <video
                loop
                width="100%"
                height="100%"
                muted
                autoPlay="autoplay"
                className="rounded-3xl absolute top-0 left-0 -z-10 "
              >
                <source src={item.video} type="video/mp4" />
              </video>
              {/* overlay */}
              <div
                className={` h-[87vh] w-full bg-gradient-to-r to-transparent from-[rgba(0,0,0,0.9)] z-0 flex-col justify-center items-baseline p-5 rounded-3xl shadow-3xl shadow-${item.shadow} absolute top-0 left-0 hidden lg:flex`}
              />
              {/* det */}
              <div className="w-full lg:w-1/4 md:w-1/4 flex flex-col justify-center items-center gap-1 lg:gap-8 z-10">
                <h1 className=" text-center text-xl lg:text-5xl font-mono font-bold select-none text-white">
                  {item.title}
                </h1>{" "}
                <p className=" text-md text-white text-center lg:text-xl">
                  {item.desc}
                </p>
                <Link href={item.link} target="_blank">
                  <button className="gap-2 flex flex-row bg-white hover:bg-black text-black hover:text-white p-2 rounded-xl px-4 font-semibold hover:shadow-md hover:shadow-black select-none">
                    See Demo
                    <CirclePlay />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
