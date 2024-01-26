import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const HeroContent = () => {
  return (
    <motion.div initial="hidden"
    animate="visible"
    className="flex flex-col items-center justify-center px-20 mt-40 w-full z-[20]">
      <div className='h-full w-full flex md:inline-flex gap-5 justify-start m-auto text-start'>
        <motion.div className='Welcome-box py-[8px] border border-[#7042f88b] opacity-[0.5]'>

          <SparklesIcon className='text-[#b49bff] ml-[11px] h-5 w-5 '/>
          <h1 className='Welcome-text text-[13px] pr-3 pl-3'>Divine Agents Rulling</h1>

        </motion.div>
        <motion.div className='Welcome-box py-[8px] border border-[#7042f88b] opacity-[0.5]'>

          <SparklesIcon className='text-[#b49bff] ml-[11px] h-5 w-5 '/>
          <h1 className='Welcome-text text-[13px] pr-3 pl-3'>Sun & Moon</h1>

        </motion.div>
      </div>

    </motion.div>
  )
}

export default HeroContent