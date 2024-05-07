"use client";
import React, { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcon";
import Lenis from "lenis";

const Details = ({ type, time, place, special }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl ">{type}</h3>
        <span className=" font-bold text-purple-600">{special}</span>
        <br />
        <span className="capitalize font-medium text-black/75">
          {time} | {place}
        </span>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });

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
      className="h-full pt-20 md:pt-14 lg:pt-12 xl:pt-8"
      initial={{ y: "-400vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      <motion.h2
        className=" font-bold text-6xl mb-10 w-full text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-2 md:left-4 lg:left-8 top-0 w-[4px] h-full bg-black origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-8">
          <Details
            type="Bachelor of Technology"
            special="Computer Science & Engineering (Artificial Intelligence)"
            time="2021 - present"
            place="University of Engineering & Management, Kolkata"
          />
          <Details
            type="Higher Secondary Education"
            special="Science"
            time="2019 - 2021"
            place="Central model school, Barrackpore"
          />
          <Details
            type="Secondary Education"
            special="all subjects"
            time="2009 - 2019"
            place="Army Public school, Barrackpore"
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default Education;
