"use client";
import React from "react";
import { motion } from "framer-motion";
const PortPage = () => {
  return (
    <motion.div
      className="h-[100vh]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      projects
    </motion.div>
  );
};

export default PortPage;
