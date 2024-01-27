
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
      className="flex flex-row items-center justify-center md:px-20 mt-20 w-full z-[20] xs:px-10"
    >
      <div className='md:h-full md:w-full flex flex-col gap-5 justify-center m-auto text-start xs:flex-nowrap'>

        {/* tagclouds */}
        
        <div className='md:h-7 flex  md:gap-5 justify-start text-start  xs:flex-nowrap xs:gap-[5px] xs:h-5 xs:mb-[10px] xs:mt-20'>
        <motion.div
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] "
        >
          <SparklesIcon className="text-[#b49bff] md:mr-[10px] md:h-5 md:w-5 xs:mr-[1px] xs:h-3 xs:w-3" />
          <h1 className="Welcome-text md:text-[13px] mr-1 xs:text-[8px] xs:text-nowrap xs:mr-[1px]">
          Divine Agents Rulling
          </h1>
        </motion.div>
        <motion.div
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <TagIcon className="text-[#b49bff] md:mr-[10px] md:h-5 md:w-5 xs:mr-[1px] xs:h-3 xs:w-3" />
          <h1 className="Welcome-text md:text-[13px] mr-1 xs:text-[8px] xs:text-nowrap xs:mr-[1px]">
          Tao
          </h1>
        </motion.div>
        <motion.div
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <StarIcon className="text-[#b49bff] md:mr-[10px] md:h-5 md:w-5 xs:mr-[1px] xs:h-3 xs:w-3" />
          <h1 className="Welcome-text md:text-[13px] mr-1 xs:text-[8px] xs:text-nowrap xs:mr-[1px]">
          Sun & Moon
          </h1>
        </motion.div>

        </div>
        
        {/* hero text  */}

        <motion.div
          
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto md:text-[60px] xs:text-[35px]"
        >
          <span>
            Unravel
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-violet-500 ">
              {" "}
              the secrets{" "}
            </span>
            of the ancient teachings
          </span>
        </motion.div>

        <motion.p
          
          className="md:text-lg  text-gray-400 my-5 max-w-[600px] xs:text-sm xs:my-1 md:text-lg"
        > Learn how to use ancient knowledge and powers to find a way to better life, prosperity and happiness.
        </motion.p>
        <motion.a
          
          className="py-2 button-primary text-center text-white cursor-pointer rounded-xl max-w-[150px] p-2 hover:bg-[#4c2784]  animate-pulse"
        >
          Tell me!
        </motion.a>
      </div>

      <motion.div
      
        className="w-full h-full flex justify-center items-center xs:invisible md:visible"
      >
        <Image className="filter saturate(200%) "
          src="/mainIconsdark.png "
          alt="icon"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;