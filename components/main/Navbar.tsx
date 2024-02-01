import { StarIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[60px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-50 px-40'>
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#contact"
          className="h-auto w-auto flex flex-row items-centers "
        >
          <StarIcon
            width={30}
            height={30}
            className="cursor-pointer hover:animate-slowspin text-[#b49bff]"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Hoshi
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[5px] rounded-full text-[#ffffff] text-[15px]">
            <a href="#readings" className="cursor-pointer">
              Library
            </a>
            <a href="#tests" className="cursor-pointer">
              Know Thyself
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
