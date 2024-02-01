"use client"

import React from 'react'


const Hero = () => {
  return (
    <div className='relative flex flex-col w-full'>
      <video
        autoPlay
        muted
        loop
        className="rotate-360 absolute 2xl:top-[-380px] xl:top-[-280px] lg:top-[-220px] md:top-[-140px] w-full left-0 z-[1] object-cover sm:top-[-80px] xs:top-[-60px] xxs:top-[-40px] "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  )
}

export default Hero