"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import NavLink from "./NavLink";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
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
          className=" bg-black text-white p-2 rounded-md text-sm font-semibold"
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
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {/*MENU LIST*/}
        {open && (
          <div className=" absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};