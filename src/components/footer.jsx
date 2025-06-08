import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const footer = () => {
  return (
    
    <div className='bg-gray-800 text-white  w-full absolute h-30 mx-auto '>
      <div className='justify-between flex flex-col gap-5 p-2'>
        <p>Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</p>
        <div className='flex gap-2 justify-between' >
        <div className='flex gap-2 '>
            <p>10 Yard Skip</p>
            <span>£356</span>
            <span>14 day hire</span>
        </div>
     <div className='flex gap-2 '>
       <Button variant="destructive" className=" text-gray-100 font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300 hover:cursor-pointer" >Back</Button>
       <Button  className=" text-gray-100 font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300 hover:cursor-pointer" >Continue<ArrowRight/></Button> 
     </div>
     </div>
      </div>

    </div>
  )
}

export default footer
