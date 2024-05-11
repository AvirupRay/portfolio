import React from "react";
import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const GoTo = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className="z-50 absolute bottom-14 right-5 -mt-5 p-4 b-none rounded-full bg-black cursor-pointer select-none"
      onClick={goToBtn}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse" }}
      >
        <ChevronUp color="white" />
      </motion.div>
    </motion.button>
  );
};

export default GoTo;
