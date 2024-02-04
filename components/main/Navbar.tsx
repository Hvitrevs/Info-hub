import { StarIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full lg:h-[60px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-40 xxs:px-[1px]'>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto md:px-[10px] lg:gap-2">
        <a
          href="#contact"
          className="h-auto w-auto flex flex-row items-centers "
        >
          <StarIcon
            width={25}
            height={25}
            className="cursor-pointer hover:animate-slowspin text-[#b49bff]"
          />
          <span className="font-bold md:ml-[10px] hidden md:block text-gray-300  lg:visible sm:invisible">
            Hoshi
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] md:py-[6px] rounded-full text-[#ffffff] md:text-[15px] xs:text-[10px] xxs:text-[6px]">
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
