import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <a
    href="#contact"
    className="h-auto w-auto flex flex-row items-centers xs:mr-3"
  >
    <Image className="mb-2"
      src="/mainIconsdark_1.svg"
      alt="icon"
      width={40}
      height={40}
    />
    <span className="font-bold md:ml-[20px]  mt-3 hidden lg:block text-gray-300 lg:visible sm:invisible">
      Hoshi
    </span>
  </a>
  )
}

export default Logo