import Image from "next/image";
import React from "react";

const Homepage = () => {
  return (
    <div className="flex flex-row h-full w-full justify-end items-center">
      {/* Image container*/}
      <Image
        src="/full.png"
        alt=""
        fill
        className=" object-cover h-full w-full absolute"
      />

      {/*<div className=" w-1/4 md:w-2/4 lg:w-2/4"></div>*/}

      {/* Text container*/}
      <div className="w-3/4 flex flex-col gap-8 items-center justify-center z-10 px-4 sm:px-8 md:px-16 lg:px-16 xl:px-20 sm:w-3/4 md:w-2/4 lg:w-2/4">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold ">Avirup Ray</h1>

        {/* desc */}
        <p className="text-lg text-center ">
          I am a full stack developer with a passion for building beautiful
          websites and applications.
        </p>

        {/* Button */}
        <div className=" flex gap-4">
          <button className="p-2 rounded-lg ring-1 ring-black bg-black text-white w-auto text-sm md:text-lg lg:text-xl">
            View my work
          </button>
          <button className="p-2 rounded-lg ring-1 ring-black w-auto text-sm md:text-lg lg:text-xl">
            contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
