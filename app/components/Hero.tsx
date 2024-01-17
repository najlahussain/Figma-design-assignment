import React from 'react'
import Link from 'next/link'
import Button1 from './Button1'
import del from '@/app/assets/delete.svg'

const inputField = () => {
  return  (
    <input 
      type="text"  
      className='w-[70px] h-[70px] flex text-center flex-shrink-0
        text-black text-[35px] font-[600] leading-normal rounded-[20px]
         bg-white shadow-2xl'/>
      )
}

const Hero = () => {
  const rows = [];
  for(let i = 0; i<5; i++)
    rows.push(inputField());  
  
    const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const row3 = ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  return (
    <div className='relative w-full flex flex-col items-center justify-center'>
      <div className='lg:w-[894px] w-[335px] flex flex-col items-center lg:gap-[8px] gap[-2px] mt-10'>
        <h2 className='text-[#2F4F4F] text-center text-[26px] lg:text-[38px] font-[700] leading-[51px]'>Welcome!</h2>
        <p className='text-[#545454] lg:text-[16px] text-[14px] text-center lg:w-[894px] w-[335px] font-[400] leading-[29px]'>Go to this step by step guideline process on how to certify for your weekly benefits:&nbsp;
        <span className='text-[#228B22] font-[600] underline'><Link href='https://dev.d2p2mm3quesvi8.amplifyapp.com' target='_blank'>See our guideline</Link></span></p>
      </div>
      <div className='inline-flex flex-col items-center gap-[22px] lg:gap-[25px]'>
        <div className='lg:inline-flex flex h-32px py-[10px] px-[20px] justify-center items-center gap-[5px] lg:flex-shrink-0 rounded-[90px] bg-[#6495ED] text-[#F8F8FF] mt-10'>
         <p>00 : 10 : 06 : 250</p>
        </div>

        <form action="">
          <div  className='flex flex-col lg:gap-[11px] items-center gap-[6.137px]'>
            <div className='flex lg:gap-[11px] items-center gap-[6.137px]'>{rows}</div>
            <div className='flex lg:gap-[11px] items-center gap-[6.137px]'>{rows}</div>
            <div className='flex lg:gap-[11px] items-center gap-[6.137px]'>{rows}</div>
            <div className='flex lg:gap-[11px] items-center gap-[6.137px]'>{rows}</div>
            <div className='flex lg:gap-[11px] items-center gap-[6.137px]'>{rows}</div>
            <div className='flex lg:gap-[11px] items-center gap-[6.137px]'>{rows}</div>
          </div>
          <div className='flex flex-col mt-[25px] gap-[3.03px] lg:gap-[7.4px] items-center justify-center'>
            <div className='flex flex-row gap-[3.03px] lg:gap-[7.4px]'>
              {row1.map((element)=>(<Button1 title = {element}></Button1>))}
            </div>
            <div className='flex flex-row gap-[3.03px] lg:gap-[7.4px]'>
              {row2.map((element)=>(<Button1 title = {element}></Button1>))}
            </div>
            <div className='flex flex-row gap-[3.03px] lg:gap-[7.4px]'>
              {row3.map((element)=>(<Button1 title = {element}></Button1>))}
              <Button1 title = 'Delete' icon = {del}></Button1>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero