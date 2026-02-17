import React from 'react'
import Skills from './Skills'
import { skills } from '@/app/constants/conctants'
import { LucideIcon } from 'lucide-react'
type props={
    icon:LucideIcon;
    name:string;
}
const SkillCard = ({icon:Icon,name}:props) => {
  return (
     <div className="gap-3 bg-white dark:bg-gray-800 shadow-md rounded-2xl flex flex-col items-center p-4 ">
        <div className='w-16 h-16 bg-linear-to-r from-[#0096c7] to-[#166088]   rounded-2xl flex items-center justify-center
        hover:scale-110 transition-all duration-300'>
            <Icon className='text-white font-bold '/>
        </div>
        <span className='font-semibold text-[#000] dark:text-white'>{name}</span>
      
                   
     
    </div>
  )
}

export default SkillCard