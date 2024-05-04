"use client";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import Lenis from "lenis";

const items = [
  {
    id: 1,
    title: "Cypher",
    desc: " Our payment fraud application\n employs machine learning algorithms\n to detect suspicious transactions,\n flagging potential fraudulent activity in real-time.",
    color: "from-blue-950 to-blue-900",
    link: "https://cypher-theta.vercel.app/",
    video: "./CypherPromo.mp4",
  },
  {
    id: 2,
    title: "Agrico",
    desc: " Agrico is an innovative EdTech platform\n empowering individuals and communities\n to learn modern farming practices\n and cultivate sustainable agricultural success.",
    color: "from-blue-900 to-blue-800",
    link: "https://agrico.vercel.app/",
    video: "./AgricoPromo.mp4",
  },
  {
    id: 3,
    title: "Cook's Book",
    desc: "  Cook's Book could evolve into a\n meal planning tool,suggesting recipes for the entire week \nthat utilize overlapping ingredients and minimize waste.",
    color: "from-blue-800 to-blue-700",
    link: "https://github.com/AvirupRay/CookBook",
    video: "./Cook'sBookPromo.mp4",
  },
  {
    id: 4,
    title: "RobinFood",
    desc: "RobinFood is a web platform\n that bridges the gap between restaurants with\nsurplus food and non-governmental organization(NGOs),\nfood banks, dedicated to distributing food to those in need.",
    color: "from-blue-700 to-blue-600",
    link: "https://github.com/AvirupRay/CookBook",
    video: "./RobinFoodPromo.mp4",
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
      className="h-[800vh]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh]" ref={ref}>
        <div className=" w-full h-screen flex items-center justify-center text-center text-8xl">
          {" "}
          My Works
        </div>
        <div className="sticky flex items-center justify-center h-screen w-screen top-0 bg-black " />
        {items.map((item) => (
          <div
            className={` sticky flex items-center justify-center h-screen w-screen top-0 bg-gradient-to-t ${item.color} rounded-3xl`}
            key={item.id}
            style={{
              top: `calc(-5vh + ${item.id * 25}px)`,
              scale: x,
            }}
          >
            <div className="">
              <h1>{item.title}</h1>
              <div className="relative">
                <video src={item.vid} />
              </div>
              <p>{item.desc}</p>
              <Link href={item.link}>
                <button>See Demo</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
