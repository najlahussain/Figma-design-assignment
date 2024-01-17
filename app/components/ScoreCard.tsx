import React from 'react'

const ScoreCard = () => {
  return (
    <div className='mt-16 flex flex-col items-center justify-center'>
      <div className=' z-10 lg:w-[240px] w-[158px] lg:h-[63px] h-[46px] bg-[#6495ED] rounded-[90px] flex-shrink-0
         text-white flex items-center justify-center lg:text-[29px] text-[18px] font-[700] leading-normal'>
        <h2>Your Score</h2>
      </div>
      <div className='flex flex-col items-center justify-evenly lg:mt-[-30px] mt-[-20px] lg:w-[1140px] w-[336px] lg:h-254px h-[405px] rounded-[20px] flex-shrink-0 
       border-t-[3px] border-[#649FED] score-box'>
        <div className='lg:flex lg:flex-row'>
          <div className='flex flex-col w-[326px] p-[10px] items-center justify-center gap-[5px]'>
            <h3 className='text-[#545454] text-center text-[16px] lg:text-[20px] font-[700] leading-normal'>
              Username</h3>
            <p className='text-[#777] text-center text-[14px] lg:text-[18px] font-[400] leading-normal'>User not logged in</p>
          </div>
          <div className='flex flex-col w-[326px] p-[10px] items-center justify-center gap-[5px]'>
            <h3 className='text-[#545454] text-center text-[16px] lg:text-[20px] font-[700] leading-normal'>
              Game ID</h3>
            <p className='text-[#777] text-center text-[14px] lg:text-[18px] font-[400] leading-normal'>
            6576faaa7aceda167d40fd66</p>
          </div>
          <div className='flex flex-col w-[326px] p-[10px] items-center justify-center gap-[5px]'>
            <h3 className='text-[#545454] text-center text-[16px] lg:text-[20px] font-[700] leading-normal'>
              Player ID</h3>
            <p className='text-[#777] text-center text-[14px] lg:text-[18px] font-[400] leading-normal'>
            6576faa9e36902e5ec90852d</p>
          </div>
        </div>
        <div className='lg:flex lg:flex-row'>
          <div className='flex flex-col w-[326px] p-[10px] items-center justify-center gap-[5px]'>
            <h3 className='text-[#545454] text-center text-[16px] lg:text-[20px] font-[700] leading-normal'>
              Guesses</h3>
            <p className='text-[#777] text-center text-[14px] lg:text-[18px] font-[400] leading-normal'>
              -</p>
          </div>
          <div className='flex flex-col w-[326px] p-[10px] items-center justify-center gap-[5px]'>
            <h3 className='text-[#545454] text-center text-[16px] lg:text-[20px] font-[700] leading-normal'>
              Timer</h3>
            <p className='text-[#777] text-center text-[14px] lg:text-[18px] font-[400] leading-normal'>
              00:27:06:152</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScoreCard