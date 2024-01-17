import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faqs = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[459px] flex-shrink-0 mt-[44px] lg:mt-[99px]'>
      <div>
        <h1 className='w-[351px] lg:w-[578px] text-[#2F4F4F] lg:text-[#1C1F35] text-center text-[26px] lg:text-[38px] font-[700] leading-[50px]'>FAQs</h1>
      </div>
      <div className='w-[340px] lg:w-[789px]'>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className='text-[#1C1F35] text-[16px] lg:text-[20px] font-[500] leading-normal'>How to play this game?</AccordionTrigger>
            <AccordionContent className='text-[#777] text-[13px] lg:text-[16px] font-[400] leading-[183%]'>
            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
          <AccordionTrigger className='text-[#1C1F35] text-[16px] lg:text-[20px] font-[500] leading-normal'>How to play this game?</AccordionTrigger>
            <AccordionContent className='text-[#777] text-[13px] lg:text-[16px] font-[400] leading-[183%]'>
            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
          <AccordionTrigger className='text-[#1C1F35] text-[16px] lg:text-[20px] font-[500] leading-normal'>How to play this game?</AccordionTrigger>
            <AccordionContent className='text-[#777] text-[13px] lg:text-[16px] font-[400] leading-[183%]'>
            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
          <AccordionTrigger className='text-[#1C1F35] text-[16px] lg:text-[20px] font-[500] leading-normal'>How to play this game?</AccordionTrigger>
            <AccordionContent className='text-[#777] text-[13px] lg:text-[16px] font-[400] leading-[183%]'>
            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
          <AccordionTrigger className='text-[#1C1F35] text-[16px] lg:text-[20px] font-[500] leading-normal'>How to play this game?</AccordionTrigger>
            <AccordionContent className='text-[#777] text-[13px] lg:text-[16px] font-[400] leading-[183%]'>
            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Faqs