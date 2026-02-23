import React from 'react'
import Logo from './Logo'
import { ModeToggle } from '../ModeToggle'
import {navLinks} from "../../constants/conctants"
import Link from 'next/link'
import { ArrowDown, MenuIcon } from 'lucide-react'
type openNavProps={
  openNav:()=>void
}
const Nav = ({openNav}:openNavProps) => {
  return (
    <div className='flex items-center  fixed z-100  w-full h-[14vh] py-8 duration-200 transition-all shadow-md bg-white dark:bg-gray-800'>
        <div className='w-[90%] xl:w-[80%] mx-auto flex justify-between items-center h-full'>
                <Logo/>
                <div className='hidden lg:flex space-x-8  '>
                {navLinks.map((item)=>(
                    <Link className=' font-semibold hover:text-[#166088] dark:hover:text-[#0096c7] '
                     key={item.name} href={item.href}>
                      {item.name}</Link>
                ))
                }
                </div>
                <div className='flex space-x-4 items-center'>
                <a href="https://drive.google.com/file/d/1HNUR_qKf53RAHCw7hnyELe-Iuyti8vW4/view" className='flex items-center bg-linear-to-r from-[#0096c7] to-[#166088] text-white  font-bold px-8 py-3 rounded-xl   '>
                      <ArrowDown />
                      <span>Download CV</span>

                </a>
                <ModeToggle/>
                <MenuIcon onClick={openNav} className='w-8 h-8 hover:cursor-pointer lg:hidden '/>

                </div>

              

        </div>

    </div>
  )
}

export default Nav 