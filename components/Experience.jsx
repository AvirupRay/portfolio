"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcons from "./LiIcon";
import Lenis from "lenis";

const Details = ({ position, company, CompanyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl ">
          {position}&nbsp;
          <a
            href={CompanyLink}
            target="_blank"
            className=" text-purple-600 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-black/75">
          {time} | {address}
        </span>
        <p className=" font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
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
      className="h-[100vh] pt-20 md:pt-14 lg:pt-12 xl:pt-8 "
      initial={{ y: "-300vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}
    >
      <motion.h2
        className=" font-bold text-6xl mb-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-2 md:left-4 lg:left-8 top-0 w-[4px] h-full bg-black origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Intern"
            company="Amuzi sports"
            CompanyLink="https://amuzisports.in/"
            time="4/23 - 5/23"
            address="sector-3 Karunamoyee, Salt Lake City, Kolkata, West Bengal 700091"
            work="Worked in there ott platform and learned about the backend and frontend of the website. Also created a Turf booking website for them."
          />
          <Details
            position="member"
            company="CSI"
            CompanyLink="https://www.csi-india.org/"
            time="8/22 - 8/23"
            address="University of Engineering & Management, Kolkata, West Bengal 700091"
            work="I am a member of the Google Developer Student Club of my college. I have learned a lot of things from there and also shared my knowledge with others."
          />
          <Details
            position="member"
            company="GDSC UEMK"
            CompanyLink="https://gdsc.community.dev/university-of-engineering-management-kolkata-india/"
            time="6/21 - present"
            address="University of Engineering & Management, Kolkata, West Bengal 700091"
            work="I am a member of the Google Developer Student Club of my college. I have learned a lot of things from there and also shared my knowledge with others."
          />
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
