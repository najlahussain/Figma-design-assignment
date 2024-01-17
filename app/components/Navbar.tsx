import Link from 'next/link'
import Image from 'next/image'
import logo from '@/app/assets/donut.svg'
import chart from '@/app/assets/chart.svg'
import settings from '@/app/assets/setting-2.svg'
import menu from '@/app/assets/menu.svg'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='lg:w-full lg:h-[69.71px] h-[50px] top-0 z-0 flex items-center justify-center flex-shrink-0 border-b-[1px] border-b-[rgb(0,0,0,0.1)] nav-shadow'>
      <div className='bg-white flex tems-center justify-between lg:w-[1380px] w-[375px]'>
      <Link href='/'>
        <Image src = {logo} alt='logo' className='w-[34px] lg:w-[42px] h-[34px] lg:h-[42px]'></Image>
      </Link>
      <div className='inline-flex lg:gap-[16px] gap-[19px] items-start'>
        <Image src = {settings} alt='settings' className='w-[26px] lg:w-[36px] h-[26px] lg:h-[36px]'></Image>
        <Image src = {chart} alt='chart' className='w-[26px] lg:w-[36px] h-[26px] lg:h-[36px]'></Image>
        <Image src = {menu} alt='menu' className='lg:hidden flex w-[26px] h-[26px]'></Image>
        <Button title = "New Game" color = "bg-[#50C878]" borderColor = "border-[#228B22]" />
        <Button title = "Login" color = "bg-[#50C878]" borderColor = "border-[#228B22]" />
      </div>
      </div>
    </nav>
  )
}

export default Navbar