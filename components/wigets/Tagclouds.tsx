import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  icon: React.ReactNode;
};

const Tagclouds = (props: Props) => {
  return (
    <div>
        <motion.div
          
          className='flex md:h-6 md:gap-5 justify-start text-start xxs:h-4 xs:gap-[3px] xxs:gap-[2px]'

        >
            <div 
            className="Welcome-box py-[8px] px-[6px] border border-[#7042f88b] opacity-[0.9]"
            >
              <div className="text-[#b49bff] md:px-[2px] xs:py-[2px] sm:py-[2px] md:h-4 md:w-4 xs:h-4 xs:w-3 xxs:w-2 xs:mr-[1px]">
                {props.icon}
              </div>
              <h1
                className="Welcome-text md:text-[12px] md:h-4 px-[5px] xs:text-[8px] xs:text-nowrap xxs:text-[5px] xxs:pr-0 border-l-[2px] border-[#7042f88b] opacity-[0.9]"
              >
                {props.title}
              </h1>
            </div>
        </motion.div>
    </div>
  );
};

export default Tagclouds;