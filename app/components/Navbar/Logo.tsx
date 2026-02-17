import { LaptopMinimalCheck } from 'lucide-react'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex  space-x-2 items-center '>
         <div className='bg-[#166088] text-white p-2 rounded-xl dark:bg-[#0096c7]'>
            <LaptopMinimalCheck />
         </div>
         <p className='hidden sm:block sm:text-2xl text-[#166088]  font-bold dark:text-[#0096c7] '>{"<Dev/>"}</p>
    </div>
  )
}

export default Logo