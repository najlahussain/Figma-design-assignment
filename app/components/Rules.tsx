import React from 'react'

const Rules = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-[36px] lg:pt-[83px] pb-[36px] lg:pb-[78px]'>
      <h3 className='text-[#FF6347] mt-[12px] mb-[12px] text-center text-[15px] lg:text-[26px] font-[700] leading-[22px] w-[256px] lg:w-[486px]'>Wordle Game</h3>
        <h2 className='text-[#2F4F4F] text-center text-[26px] lg:text-[40px] font-[700] leading-[33px] lg:leading-[51px] w-[256px] lg:w-[486px]'>
          Guess the Hidden Word</h2>
        <p className='w-[323px] lg:w-[894px] text-[#545454] text-center text-[14px] lg:text-[16px] font-[400] leading-[28px] lg:leading-[38px]'>
        The rules are very simple: You need to guess the hidden word (from 4 to 11 letters) in 6 tries. To get started, just type any word on the first line. If the letter is guessed correctly and is in the correct place, it will be highlighted in green, if the letter is in the word, but in the wrong place - in yellow, and if the letter is not in the word, it will remain gray. Can you guess the hidden word in 6 tries?
        </p>
    </div>
  )
}

export default Rules