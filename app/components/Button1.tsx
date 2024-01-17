import React from 'react'
import Image from 'next/image'

type props = {
  title : string,
  icon ?: string
}
const Button1 = ({title, icon}:props) => {
  return (
    <div>
        <button className="orange-button orange-button:hover
          flex  items-center justify-center lg:py-[7.7px] py-[7.3] lg:px-[17px] px-[7.3px]
          lg:text-[11.7px] font-[600] leading-normal lg:rounded-[9px] rounded-[3.5px]"> 
          {icon && <Image src = {icon} alt = "icon"className='w-[24px] h-[24px]'></Image>}
          {title}
        </button>
    </div>
  )
}

export default Button1