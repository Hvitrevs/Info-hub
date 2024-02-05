"use client";

import React from "react";
import { motion } from "framer-motion";

import { SparklesIcon, StarIcon, TagIcon } from "@heroicons/react/24/solid";

const Tagclouds = () => {
  return (
    <>
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
            </>
    
  )
}

export default Tagclouds