"use client"

import { CalendarDays, CreditCard, MapPin, Menu, Shield, Trash2, Truck } from 'lucide-react'
import React, { useState } from 'react'


const menu = () => {
    const [isOpen,setIsOpen] = useState(false);
    const buttonClass = ' flex gap-2  text-gray-100 font-bold text-sm px-2 py-1 border-2 border-gray-100 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300 hover:cursor-pointer'
    const buttons = (
        <>
        <button className={buttonClass}><MapPin />Postcode</button>
        <button className={buttonClass}><Trash2 />Waste Type</button>
        <button className={buttonClass}><Shield />Permit Check</button>
        <button className={buttonClass}><CalendarDays />Choose Date</button>
        <button className={buttonClass}><CreditCard />Payment</button>
        </>
    )

  return (
    <div>
        <nav className='bg-gray-800 text-white relative w-full '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex flex-row w-full justify-between'>
                        <div className='text-xl font-bold'>
                        Waste Management
                        </div>
                        <div className='hidden md:block'>
                            <div className='flex ml-10 items-baseline space-x-2 gap-3'>
                            {buttons}
                            </div>
                           </div>
                           </div>
                           <div className='md:hidden'>
                            <button onClick={()=>{setIsOpen(!isOpen)}} type='button' className='fill-gray-100'>
                              <Menu />
                            </button>
                            </div>
                            </div>
                           </div>
                           {
                            isOpen && (
                                <div className='flex flex-col gap-y-2 md:hidden px-4 sm:px-6 bp-2'>
                            {buttons}
                                </div>
                            )
                           }
        </nav>
      
      
    </div>
  )
}

export default menu
