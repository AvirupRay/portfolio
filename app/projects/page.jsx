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
    link: "https://cypher-theta.vercel.app/",
    video: "/CypherPromo.mp4",
  },
  {
    id: 2,
    title: "Agrico",
    desc: " Agrico is an innovative EdTech platform\n empowering individuals and communities\n to learn modern farming practices\n and cultivate sustainable agricultural success.",
    color: "from-green-900 to-black",
    link: "https://agrico.vercel.app/",
    video: "/AgricoPromo.mp4",
  },
  {
    id: 3,
    title: "Cook's Book",
    desc: "  Cook's Book could evolve into a\n meal planning tool,suggesting recipes for the entire week \nthat utilize overlapping ingredients and minimize waste.",
    color: "from-yellow-900 to-black",
    link: "https://github.com/AvirupRay/CookBook",
    video: "/Cook'sBookPromo.mp4",
  },
  {
    id: 4,
    title: "RobinFood",
    desc: "RobinFood is a web platform\n that bridges the gap between restaurants with\nsurplus food and non-governmental organization(NGOs),\nfood banks, dedicated to distributing food to those in need.",
    color: "from-indigo-900 to-black",
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
      className="h-[800vh]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className=" w-full h-screen mb-10 flex items-center justify-center text-center text-8xl font-semibold font-serif">
          {" "}
          My Works
        </div>
        <div className=" sticky items-center justify-center h-screen w-screen top-0 bg-black" />
        {items.map((item) => (
          <div
            className={` sticky flex items-center justify-center h-[80vh] w-[80vw] top-5 my-32 left-[10vw] bg-gradient-to-tl ${item.color} rounded-3xl`}
            key={item.id}
            style={{
              top: `calc( ${item.id * 30}px)`,
              scale: x,
            }}
          >
            {/* outer box */}
            <div className=" h-[80vh] w-full rounded-3xl  relative">
              <video
                loop
                width="100%"
                height="100%"
                muted
                autoPlay="autoplay"
                className="rounded-3xl absolute top-0 left-0 -z-10"
              >
                <source src={item.video} type="video/mp4" />
              </video>
              <div className=" h-[90vh] w-full bg-gradient-to-r to-transparent from-[rgba(0,0,0,0.9)] z-20 flex flex-col justify-center p-5">
                <div className="w-1/4 flex flex-col justify-center items-center gap-8">
                  <h1 className=" text-center text-5xl font-mono font-bold select-none text-white">
                    {item.title}
                  </h1>{" "}
                  <p className=" text-xl text-white ">{item.desc}</p>
                  <Link href={item.link} target="_blank">
                    <button className="gap-2 flex flex-row bg-white hover:bg-black text-black hover:text-white p-2 rounded-xl px-4 font-semibold hover:shadow-md hover:shadow-black select-none">
                      See Demo
                      <CirclePlay />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
