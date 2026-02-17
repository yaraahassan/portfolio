"use client";
import { ArrowDown, FolderOpen } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center overflow-hidden gap-y-6
    bg-[radial-gradient(circle_476px_at_54.8%_51.5%,_rgba(168,229,253,1)_0%,_rgba(244,244,254,1)_42.3%,_rgba(244,244,254,1)_100.2%)]
    dark:bg-[linear-gradient(to_right,_#434343_0%,_black_100%)]'>
        
        <div className='mb-4 bg-white text-muted-foreground rounded-xl px-2 py-1 text-xs  sm:px-4 py-3 sm:text-sm font-semibold'>
                 <span>Available for opportunities</span>
        </div>

        <h1 className='sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>Hi I'm <span className='text-[#166088] dark:text-[#0096c7]'>Yara Hassan</span></h1>
        <TypeAnimation 
        sequence={[
            "Front End Developer",
            2000,
            "Computer Engineer",
            2000
        ]}
        wrapper="span"
        speed={50}
        className='text-sm sm:text-xl md:text-2xl xl:text-3xl inline-block font-bold'
        repeat={Infinity}/>

        <p className='text-xs mb-4 sm:text-lg text-center max-w-xl mx-auto text-gray-500 dark:text-[#D3E0EA]'>turning ideas into modern, interactive websites  
            Specialized in responsive, high-performance, and accessible UI.</p>

        <div className='flex flex-col sm:flex-row  gap-4'>
            <Button size={"lg"} color={""}  asChild className='w-fit mx-auto ' >
                <a href='#' >
                <FolderOpen className='mr-2'/>
                View Projects
                </a>

            </Button>
             <Button size={"lg"} asChild className='w-fit mx-auto ' >
                <a href='#' >
                <ArrowDown  className='mr-2'/>
                Download CV
                </a>

            </Button>
        </div>
    </div>
  )
}

export default Hero