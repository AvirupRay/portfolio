"use client";
import React from "react";
import { motion } from "framer-motion";
const ContactPage = () => {
  <motion.div
    className="h-[100vh]"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
  >
    contact
  </motion.div>;
};

export default ContactPage;
