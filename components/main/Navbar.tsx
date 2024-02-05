import { StarIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import Logo from '../wigets/Logo'

const Navbar = () => {
  return (
    <div className='w-full xl:h-[55px] md:py-5 xxs:h-[35px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50 lg:px-40 sm:px-[180px] xxs:px-[30px]'>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto lg:gap-4 ">
        <Logo />
        <div className="w-[500px] h-full flex flex-row items-center justify-between lg:mr-10" >
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] md:mr-[15px] md:px-[20px] md:py-[5px] rounded-full text-[#ffffff] lg:text-[15px] md:text-[14px] xs:text-[10px] xs:px-[15px] xs:py-[4px] xxs:text-[6px] md:gap-3">
            <a href="#readings" className="cursor-pointer">
              Read
            </a>
            <a href="#tests" className="cursor-pointer">
              Personality
            </a>
            <a href="#contact" className="cursor-pointer">
              Ask guestion!
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
        </div>
      </div>
    </div>
  )
}

export default Navbar
