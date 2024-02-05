
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
      className="flex flex-row items-center justify-center md:px-20 md:mt-20 w-full z-[20] xs:px-10 xxs:px-10"
    >
      <div className='md:h-full md:w-full flex flex-col gap-5 justify-center m-auto text-start xs:flex-nowrap xl:mt-[10px] xs:mt-[20px] sm:mt[20px]'>

        {/* tagclouds */}
        
        <div className='md:h-6 flex  md:gap-5 justify-start text-start  xs:flex-nowrap xs:gap-[3px] xs:h-4  xs:mt-20 xxs:mt-20 xxs:h-4 xxs:gap-[2px]'>
        <motion.div
          className="Welcome-box py-[8px] px-[6px] border border-[#7042f88b] opacity-[0.9] "
        >
          <SparklesIcon className="text-[#b49bff] xs:py-[2px] sm:py-[2px] md:mr-[2px] md:h-4 md:w-4 xs:h-3 xs:w-3 xxs:w-2 xs:mr-[1px]" />
          <h1 className="Welcome-text md:text-[12px] md:h-4 px-[5px] xs:text-[8px] xs:text-nowrap xxs:text-[5px] xxs:pr-0 border-l-[2px] border-[#7042f88b] opacity-[0.9]">
          Divine Agents Rulling
          </h1>
        </motion.div>
        <motion.div
          className="Welcome-box py-[8px] px-[6px] border border-[#7042f88b] opacity-[0.9]"
        >
          <TagIcon className="text-[#b49bff] xs:py-[3px] sm:py-[2px] md:mr-[2px] md:h-4 md:w-4 xs:h-3 xs:w-3 xxs:w-2" />
          <h1 className="Welcome-text md:text-[12px] md:h-4 px-[5px] xs:text-[8px] xs:text-nowrap xxs:text-[5px] xxs:pr-0 border-l-[2px] border-[#7042f88b] opacity-[0.9]">
          Tao
          </h1>
        </motion.div>
        <motion.div
          className="Welcome-box py-[7px] px-[5px] border border-[#7042f88b] opacity-[0.9]"
        >
          <StarIcon className="text-[#b49bff] xs:py-[2px] sm:py-[2px] md:mr-[2px] md:h-4 md:w-4 xs:h-3 xs:w-3 xxs:w-2" />
          <h1 className="Welcome-text md:text-[12px] md:h-4 px-[5px] xs:text-[8px] xs:text-nowrap xxs:text-[5px] xxs:pr-0 border-l-[2px] border-[#7042f88b] opacity-[0.9]">
          Sun & Moon
          </h1>
        </motion.div>

        </div>
        
        {/* hero text  */}

        <motion.div
          
          className="flex flex-col gap-6 mt-4 text-5xl font-bold text-white max-w-[600px] w-auto h-auto md:text-[60px] xs:text-[30px] xs:mt-[3px] xxs:text-[25px]"
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
          
          className=" text-gray-500 my-5 max-w-[600px] xs:text-[15px] xxs:my-2 md:text-lg xxs:text-[10px]"
        > Learn how to use ancient knowledge and powers to find a way to better life, prosperity and happiness.
        </motion.p>
        <motion.a
          
          className="py-2 button-primary text-center text-white cursor-pointer rounded-md lg:text-[20px] md:w-[150px] xxs:w-[100px] xxs:text-[15px] p-2 hover:bg-[#4c2784]  animate-pulse"
        >
          Tell me!
        </motion.a>
      </div>

      <motion.div
      
        className="w-full h-full flex justify-center items-center lg:visible md:invisible perspective-5"
          >
        <Image
          className="filter-grayscale opacity-[80%]  animate-bounce"
          src="/mainIconsdark_1.svg"
          alt="icon"
          height={450}
          width={450}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;