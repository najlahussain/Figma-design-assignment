import  Hero  from './components/Hero'
import ScoreCard from './components/ScoreCard';
import Leaderboard from './components/Leaderboard';
import Rules from './components/Rules';
import HowTo from './components/HowTo';
import Faqs from './components/Faqs';
import Image from 'next/image';
import background from '@/public/bg.svg'

export default function Home() {
  return (
    <>
      <div style = {{backgroundImage:`url(${background.src})`}} className="bg-cover bg-no-repeat bg-center ">
        <Hero/>
        <ScoreCard/>
        <div className='bg-[#FFEEDE]'>
          <Leaderboard/>
        </div>
      </div>
      <div className='bg-[#FFEEDE]'>
        <Rules/>
        <HowTo/>
      </div>
      <Faqs/>
    </>
  )
}
