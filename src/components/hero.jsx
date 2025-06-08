"use client"
import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Button } from './ui/button';
import { ArrowRight, LoaderIcon } from 'lucide-react';

const dataProduct = 
[
{"id":17933,"size":4,"img":"./4-yarder-skip.jpg","hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":278,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:52.813","allowed_on_road":true,"allows_heavy_waste":true},
{"id":17934,"size":6,"img":"./6-yarder-skip.jpg","hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":305,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:52.992","allowed_on_road":true,"allows_heavy_waste":true},
{"id":17935,"size":8,"img":"./8-yarder-skip.jpg","hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":375,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.171","allowed_on_road":true,"allows_heavy_waste":true},
{"id":17936,"size":10,"img":"./10-yarder-skip.jpg","hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":400,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.339","allowed_on_road":false,"allows_heavy_waste":false},
{"id":17937,"size":12,"img":"./12-yarder-skip.jpg","hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":439,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.516","allowed_on_road":false,"allows_heavy_waste":false},
{"id":17938,"size":14,"img":"./14-yarder-skip.jpg","hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":470,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.69","allowed_on_road":false,"allows_heavy_waste":false},
{"id":17939,"size":16,"img":"./16-yarder-skip.jpg","hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":496,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.876","allowed_on_road":false,"allows_heavy_waste":false},
{"id":15124,"size":20,"img":"./20-yarder-skip.jpg","hire_period_days":14,"transport_cost":248,"per_tonne_cost":248,"price_before_vat":992,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:40.344435","updated_at":"2025-04-07T13:16:52.434","allowed_on_road":false,"allows_heavy_waste":true},
{"id":15125,"size":40,"img":"./40-yarder-skip.jpg","hire_period_days":14,"transport_cost":248,"per_tonne_cost":248,"price_before_vat":992,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:40.344435","updated_at":"2025-04-07T13:16:52.603","allowed_on_road":false,"allows_heavy_waste":false}
]



const hero = () => {

    const [data, setData] = useState(dataProduct)
    const [Selected,setSelected]=useState(false);
  
  return (
    <main>
        <div className=' items-center justify-center'>
        <h1 className='text-sm font-extrabold text-gray-400 mb-6 text-center'>Choose Your Skip Size</h1>
        <span className='text-sm font-extrabold text-gray-400 mb-6 text-center'>Select the skip size that best suits your needs</span>
        </div>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pt-25 hover:cursor-pointer mx-3'>
        
        {data.map((data,i) => (
            <Card className="w-80 overflow-visible bg-white shadow-xl relative" key={i}>
            <CardHeader>
        <div >
            
            
            <img src={data.img} />
        </div>
            </CardHeader>
        
            <CardContent >
                <h3 className='text-2xl font-extrabold mb-2 text-red-500 text-center'>{data.size} yards</h3>
                <p className='text-sm font-extrabold text-gray-400 mb-6 text-center'>{data.hire_period_days} day hire period</p>
                <div className='flex justify-between items-start w-full mb-6'>
                    <div className='flex flex-col items-center w-1/3'>
                        <span className='text-sm mb-1'>£{data.price_before_vat}</span>
                    </div>
                  </div>
            </CardContent>

            <CardFooter className="w-full items-center" >
          <Button key={data.id} onClick={()=>{setSelected(!Selected)}} variant="destructive" className="w-full hover:cursor-pointer" > {Selected?('Selected'):("Select this Skip" )} </Button>
            </CardFooter>
            
         
  </Card>  
   ))} 
  </div>
  </main>
  )
}

export default hero
