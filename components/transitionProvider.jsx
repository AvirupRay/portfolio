"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";
import Nav from "./Nav";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const transitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        //className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100 relative"
        className="w-full h-screen relative"
      >
        <motion.div
          className="h-screen w-full fixed bg-black rounded-b-[100px] z-30"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 z-40 text-4xl text-white cursor-default w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-full fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        <div className="h-24 w-full absolute z-20">
          <Nav />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default transitionProvider;
