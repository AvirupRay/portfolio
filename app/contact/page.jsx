"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello!";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full w-full flex-col justify-center items-center flex lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-6xl">
        {/* Text container */}
        <div className="h-1/2 w-full lg:h-full lg:w-1/2 flex justify-center items-center">
          <motion.div className="">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😁
          </motion.div>
        </div>
        {/* Form container */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Avirup,</span>
          <textarea
            name="user_message"
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              something went wrong
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
