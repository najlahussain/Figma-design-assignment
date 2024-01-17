import React from 'react'
import Image from 'next/image'
import howto from '@/app/assets/howto.svg'

const HowTo = () => {
  return (
    <div className='h-[1440px] lg:h-[1185px] rounded-t-[90px] bg-white flex flex-col items-center justify-center shadow-2xl'>
      <div className='flex flex-col justify-center items-center pt-[10px] lg:pt-[86px]'>
      <h3 className='text-[#FF6347] mt-[12px] mb-[12px] text-center text-[15px] lg:text-[26px] font-[700] leading-[22px] w-[375px] lg:w-[486px]'>
        How to Play</h3>
        <h2 className='text-[#2F4F4F] mt-[12px] mb-[12px] text-center text-[26px] lg:text-[40px] font-[700] leading-[33px] lg:leading-[51px] w-[333px] lg:w-[650px]'>
          How to play the Wordle Game?</h2>
        <p className='w-[333px] lg:w-[894px] text-[#545454] text-center text-[14px] lg:text-[16px] font-[400] leading-[28px] lg:leading-[38px]'>
        Start with Any Five-Letter Word: Kick off your Wordle adventure by typing in any five-letter word. This is your first step towards unraveling the word puzzle.
        </p>
      </div>
      <div className='howto_box w-[335px] lg:mt-[30px] lg:w-[1140px] h-[352px] lg:h-[169px] flex justify-center flex-shrink-0'>
        <div className='w-[293px] lg:w-[1094px] flex flex-col items-center justify-center mt-[16px] mb-[45px] lg:mb-[21px] ml-[24px] mr-[14px]'>
          <h3 className='text-[#FF6347] text-center text-[15px] lg:text-[18px] font-[700] leading-[22px] lg:w-[486px]'>
            Uncover Letter Clues</h3>
          <p className='text-[#545454] text-center text-[14px] lg:text-[16px] font-[400] leading-[28px] lg:leading-[38px]'>
            After entering your word, pay attention to the color-coded hints.         </p>
          <p className='text-[#545454] text-center text-[14px] lg:text-[16px] font-[400] leading-[28px] lg:leading-[38px]'>
            Letters highlighted in <span className='font-bold'>yellow </span>indicate they are part of the hidden word but are placed in a different spot.           </p>
          <p className='text-[#545454] text-center text-[14px] lg:text-[16px] font-[400] leading-[28px] lg:leading-[38px]'>
          If a letter turns <span className='font-bold'>green </span>, you've got both the letter and its position correct. A <span className='font-bold'>grey </span> letter means its not in the target word at all.          </p>
        </div>
      </div>
      <div className='howto_box w-[329px] mt-[21px] lg:mt-[30px] lg:w-[1140px] h-[441px] lg:h-[472px] flex justify-center flex-shrink-0'>
        <div className='w-[293px] lg:w-[1094px] flex flex-col items-center justify-center mt-[20px] mb-[45px] lg:mb-[21px] ml-[24px] mr-[14px]'>
          <h3 className='text-[#FF6347] text-center text-[18px] font-[700] leading-[22px] lg:w-[486px]'>
            Strategize Your Next Move</h3>
          <p className='text-[#545454] lg:mb-[30px] text-center text-[14px] lg:text-[16px] font-[400] leading-[28px] lg:leading-[38px]'>
          With each guess, you'll gather more information. Use the <span className='font-bold'>green </span> and <span className='font-bold'>yellow </span> hints to refine your next word choice. The goal is to use these insights to correctly guess the Wordle games hidden word within your remaining attempts.</p>
          <Image src={howto} alt = "howto" className='lg:w-[419px] w-[252px] lg:h-[248px] h-[142px]'></Image>
        </div>
      </div>
      <div className='howto_box w-[329px] mt-[16px] lg:mt-[21px] lg:w-[1140px] h-[238px] lg:h-[141px] flex justify-center flex-shrink-0'>
        <div className='w-[293px] lg:w-[1094px] flex flex-col items-center justify-center mt-[20px] mb-[45px] lg:mb-[21px] ml-[24px] mr-[14px]'>
          <h3 className='text-[#FF6347] text-center text-[18px] font-[700] leading-[22px] lg:w-[486px]'>
            Strategize Your Next Move</h3>
          <p className='text-[#545454] lg:mb-[30px] text-center text-[14px] lg:text-[16px] font-[400] leading-[28px] lg:leading-[38px]'>
          Combine your knowledge of the correct letters <span className='font-bold'>(green)</span> and the correct but misplaced ones <span className='font-bold'>(yellow)</span> to deduce the secret word. Achieve this within six tries, and you've conquered the Wordle challenge!</p>
        </div>
      </div>
    </div>
  )
}

export default HowTo