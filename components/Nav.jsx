"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { motion, stagger } from "framer-motion";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  {
    /*motion variants*/
  }
  const topVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVarients = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const btmVarients = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const listVarients = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVarients = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex justify-center w-1/3">
        <Link
          href="/"
          className=" text-black rounded-md text-4xl  font-extrabold tangerine select-none"
        >
          Avirup Ray
        </Link>
      </div>
      {/* Social Icons */}
      <div className="hidden md:flex gap-4 items-center justify-center w-1/3">
        <Link href="https://github.com/AvirupRay">
          <Image alt="" src="/github.png" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/avirup-ray-18a96a1a0/">
          <Image alt="" src="/linkedin.png" width={24} height={24} />
        </Link>
        <Link href="https://leetcode.com/avirupraytun/">
          <Image alt="" src="/leet.png" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/avirup_ray10/">
          <Image alt="" src="/instagram.png" width={34} height={34} />
        </Link>
      </div>

      {/* responsive menu */}
      <div className="md:hidden">
        {/*MENU BUTTON*/}
        <button
          className=" w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={btmVarients}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/*MENU LIST*/}
        {open && (
          <motion.div
            variants={listVarients}
            initial="closed"
            animate="opened"
            className=" absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {links.map((link) => (
              <motion.div variants={listItemVarients} key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Nav;
