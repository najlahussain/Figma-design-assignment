import React from 'react'
import Image from 'next/image'

type props = {
  title : string,
  color : string,
  borderColor : string,
  hoverColor ?: string,
  icon ?: string
}
const Button = ({title , color, borderColor}:props) => {
  return (
    <div>
        <button className={`${color} 
          ${borderColor} 
          border-b-[2px] lg:flex hidden justify-center 
          items-center px-[15px] py-[10px] h-[36px]
          text-white text-[14px] font-[600] leading-normal 
          rounded-[90px] gap-[10px]`}> {title}
        </button>
    </div>
  )
}

export default Button