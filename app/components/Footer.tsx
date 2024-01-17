import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-[81px] bg-[#EA5251] flex-shrink-0 flex items-center justify-center rounded-b-2xl'>
      <div className='w-[335px] lg:w-full h-[49px] lg:h-auto flex flex-col lg:flex-row items-center lg:justify-around gap-[2px] '>
        <div className='text-white text-[13px] lg:text-[14px] font-[500] leading-[200%] lg:leading-[250%]'>
          <p>&copy;2023 
            <Link href = "https://dev.d2p2mm3quesvi8.amplifyapp.com"> Guess the Word</Link>
            . All rights reserved
          </p>
        </div>
        <div className='flex space-x-6 text-white text-[13px] lg:text-[14px] font-[500] leading-[200%] lg:leading-[250%]'>
          <p>New Game</p>
          <ul className='flex space-x-6 list-disc'>
            <li>Privacy Policy</li>
            <li>About</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer