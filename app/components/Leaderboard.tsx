import React from 'react'
import Button from './Button'
import Image from 'next/image'
import leader_icon from '@/app/assets/leader_icon.svg'
import leader_table from '@/app/assets/leader_table.svg'

const Leaderboard = () => {
  return (
    <div className='mt-16 flex flex-col items-center justify-center rounded-b-[90px] bg-white pb-[56px]'>
      <div className='gap-[12px] w-[335px] lg:w-[948px] flex flex-col items-center'>
        <h3 className='text-[#FF6347] text-center text-[15px] lg:text-[26px] font-[700] leading-[22px] w-[256px] lg:w-[486px]'>Leaderboard</h3>
        <h2 className='text-[#2F4F4F] text-center text-[26px] lg:text-[40px] font-[700] leading-[33px] lg:leading-[51px] w-[256px] lg:w-[486px]'>Our Top 10 Winners</h2>
      </div>
      <div className='flex flex-col lg:flex-row justify-evenly lg:w-[1140px] w-[336px] mb-10'>
        <Image src={leader_icon} alt='leader_icon' className='w-[335px] h-[316px] flex-shrink-0'></Image>
        <Image src={leader_table} alt='leader_table' className='w-[335px] h-[316px] flex-shrink-0'></Image>
      </div>
      <Button title = "View More" color = "bg-[#50C878]" borderColor='border-[#228B22]'/>
    </div>
  )
}

export default Leaderboard