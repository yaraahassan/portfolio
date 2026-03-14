"use client";
import { ArrowDown, FolderOpen } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center overflow-hidden gap-y-6
    bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)]
    dark:bg-none
    dark:bg-gray-950'>
        
        <div data-aos="fade-up" 
className='mb-4 bg-white text-muted-foreground rounded-xl px-2 text-md  sm:px-4 py-3 sm:text-md font-semibold'>
                 <span>Available for opportunities</span>
        </div>

        <h1 data-aos="fade-up" data-aos-delay="100" className='text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>Hi I'm <span className='text-[#166088] dark:text-[#0096c7]'>Yara Hassan</span></h1>
        <div data-aos="fade-up" data-aos-delay="200">
        <TypeAnimation 
        sequence={[
            "Front End Developer",
            2000,
            "Computer Engineer",
            2000
        ]}
        wrapper="span"
        speed={50}
        className='text-xl  md:text-2xl xl:text-3xl inline-block font-bold'
        repeat={Infinity}/>
        </div>
        <p data-aos="fade-up" data-aos-delay="300" className='text-md mb-4 sm:text-lg text-center max-w-3xl mx-auto text-gray-500 dark:text-[#D3E0EA]'>turning ideas into modern, interactive websites  
            Specialized in responsive, high-performance, and accessible UI.</p>

        <div data-aos="fade-up" data-aos-delay="400" className='flex flex-col sm:flex-row  gap-4'>
            <Button size={"lg"} asChild className='w-fit mx-auto ' >
                <a href='#projects' >
                <FolderOpen className='mr-2'/>
                View Projects
                </a>

            </Button>
             <Button size={"lg"} asChild className='w-fit mx-auto ' >
                <a href='https://drive.google.com/file/d/1HNUR_qKf53RAHCw7hnyELe-Iuyti8vW4/view' >
                <ArrowDown  className='mr-2'/>
                Download CV
                </a>

            </Button>
        </div>
    </div>
  )
}

export default Hero