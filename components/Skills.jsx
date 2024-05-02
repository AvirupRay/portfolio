"use-client";
import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-black text-white py-3 px-6 shadow-dark cursor-default absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const skillVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const staggerVarients = {
    closed: {
      x: "-100vw",
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <motion.div
        className="h-[100vh] pt-20 md:pt-14 lg:pt-12 xl:pt-8 overflow-hidden"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className=" font-bold text-6xl mb-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        {/* for pc & tablets */}
        <div className=" h-screen relative md:flex lg:flex items-center justify-center rounded-full bg-circularLight object-cover hidden">
          <motion.div
            className="flex items-center justify-center rounded-[50%] font-semibold bg-black text-white p-10 shadow-dark cursor-default"
            whileHover={{ scale: 1.05 }}
          >
            Web
          </motion.div>

          <Skill name="HTML" x="-22vw" y="2vw" />
          <Skill name="CSS" x="-5vw" y="-10vw" />
          <Skill name="Javascript" x="20vw" y="6vw" />
          <Skill name="ReactJS" x="0vw" y="10vw" />
          <Skill name="NextJS" x="-20vw" y="-15vw" />
          <Skill name="Figma" x="0vw" y="-20vw" />
          <Skill name="MongoDB" x="-25vw" y="18vw" />
          <Skill name="Tailwind CSS" x="18vw" y="18vw" />
          <Skill name="Flask" x="15vw" y="-12vw" />
          <Skill name="Web Design" x="32vw" y="-5vw" />
        </div>

        {/* for mobile */}

        <motion.div
          variants={staggerVarients}
          initial="closed"
          animate="opened"
          className="flex gap-4 flex-wrap lg:hidden md:hidden"
        >
          <motion.div
            variants={skillVariants}
            className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            HTML
          </motion.div>
          <motion.div
            variants={skillVariants}
            className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            CSS
          </motion.div>
          <motion.div
            variants={skillVariants}
            className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            Javascript
          </motion.div>
          <motion.div
            variants={skillVariants}
            className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            ReactJS
          </motion.div>
          <motion.div
            variants={skillVariants}
            className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            NextJS
          </motion.div>
          <motion.div
            variants={skillVariants}
            className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            Figma
          </motion.div>
          <motion.div
            variants={skillVariants}
            className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            MongoDB
          </motion.div>
          <motion.div
            variants={skillVariants}
            className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            Tailwind CSS
          </motion.div>
          <motion.div
            variants={skillVariants}
            className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            Flask
          </motion.div>
          <motion.div
            variants={skillVariants}
            className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            Web Design
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Skills;
