import { footerLinks } from '@/app/constants/conctants'
import { Heart } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
        <footer className='bg-white dark:bg-gray-800 py-16'>
            <div className='w-[80%] mx-auto gap-y-12'>
              <div className='flex flex-col md:flex-row items-center justify-between gap-3'>
                {/* dev */}
                <a  href="#home" className='text-xl text-[#166088] dark:text-[#0096c7] font-bold'>{"<Dev/>"}</a>
                
                {/* icons */}         
                    <div className='flex gap-3'>
                        {footerLinks.map((footerLink)=>(
                            <a href={footerLink.href} key={footerLink.label} className='w-12 h-12 flex items-center justify-center bg-white shadow-md rounded-xl dark:bg-gray-700 transition-colors '>
                                <footerLink.icon className='w-6 h-6 text-muted-foreground hover:text-blue-500'/>                    
                            </a>               
                    ))
                    }
                 </div>
                 {/* made by */}
                 <p className='text-muted-foreground flex font-semibold gap-1'>made with <Heart className='text-destructive fill-destructive'/> by Yara Hassan</p>
              </div>

              <div className='border-t border-gray-300 text-center mt-6 pt-6'>
                <p className='text-muted-foreground font-medium'>© 2026 All rights reserved.</p>

              </div>
            </div>

        </footer>
  )
}

export default Footer