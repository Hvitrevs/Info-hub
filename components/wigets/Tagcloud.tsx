import React from "react";
import { motion } from "framer-motion";
import { HomeTags } from "@/app/data";

const Tagclouds: React.FC = () => {
  return (
    <div>
      {HomeTags.map((item) => (
        <motion.div
          key={item.id}
          className='md:h-6 flex  md:gap-5 justify-start text-start  xs:flex-nowrap xs:gap-[3px] xs:h-4  xs:mt-20 xxs:mt-20 xxs:h-4 xxs:gap-[2px]'

        >
          {item.HomeTagList.map((listItem) => (
            <div 
            key={listItem.id}
            className="Welcome-box py-[8px] px-[6px] border border-[#7042f88b] opacity-[0.9]"
            >
              <div className="text-[#b49bff] xs:py-[2px] sm:py-[2px] md:mr-[2px] md:h-4 md:w-4 xs:h-3 xs:w-3 xxs:w-2 xs:mr-[1px]">{listItem.icon}</div>
              <h1
                key={listItem.id}
                className="Welcome-text md:text-[12px] md:h-4 px-[5px] xs:text-[8px] xs:text-nowrap xxs:text-[5px] xxs:pr-0 border-l-[2px] border-[#7042f88b] opacity-[0.9]"
              >
                {listItem.title}
              </h1>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default Tagclouds;