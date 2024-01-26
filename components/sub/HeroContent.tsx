
"use client";

import React from "react";
import { motion } from "framer-motion";

import { SparklesIcon, StarIcon, TagIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <div className='h-10 w-full flex md:inline-flex gap-5 justify-start text-start mt-25'>
        <motion.div
          
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
          Divine Agents Rulling
          </h1>
        </motion.div>
        <motion.div
          
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <TagIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
          Taoism
          </h1>
        </motion.div>
        <motion.div
          
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <StarIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
          Sun & Moon
          </h1>
        </motion.div>

        </div>
        
        

        <motion.div
          
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Unravel
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the secrets{" "}
            </span>
            of the ancient teachings
          </span>
        </motion.div>

        <motion.p
          
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        > Learn how to use ancient knowledge and powers to find a way to better life, prosperity and happiness.
        </motion.p>
        <motion.a
          
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] p-3 hover:bg-[#4c2784]  animate-pulse"
        >
          Tell me!
        </motion.a>
      </div>

      <motion.div
      
        className="w-full h-full flex justify-center items-center"
      >
        {/* <Image
          src=" "
          alt="icon"
          height={650}
          width={650}
        /> */}
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;