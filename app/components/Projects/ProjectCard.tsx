import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';
type ProjectCardProps={
    img:string;
    title:string,
    desc:string;
    lang:string;
    demoUrl:string;
    gitUrl:string;
}
const ProjectCard = ({img,title,desc,lang,demoUrl,gitUrl}:ProjectCardProps) => {
  return (
    <div className='bg-white rounded-xl shadow-md dark:bg-gray-800 overflow-hidden'>
        {/* image */}
        <div className='relative w-full h-44'>
            <Image 
            src={img}
            className='object-cover ' 
            fill
            alt="project-img"
             />
        </div>
        <div className='flex flex-col p-6 gap-6'>
            {/* title */}
            <h1 className='dark:text-white text-black text-xl font-semibold '>{title}</h1>
            {/* desc */}
            <p className='text-muted-foreground text-sm line-clamp-2'>{desc}</p>
            {/* lang */}
            <div className='flex flex-wrap gap-2 '>
                {
                    lang.map((language)=>(
                        <span key={language} className='text-xs md:text-sm bg-linear-to-r from-[#0096c7] to-[#166088] px-3 py-2 text-white rounded-2xl '>{language}</span>

                    ))
                }
            </div>
            {/* buttons */}
            <div className='flex gap-2'>
            <Button size={"sm"} asChild className='flex-1'>
                <a href={demoUrl}>
                    <ExternalLink className='mr-2'/>
                    Live Demo</a>

            </Button>
              <Button size={"sm"} asChild variant={"outline"} className='flex-1'>
                <a href={gitUrl}>
                    <Github className='mr-2'/>
                    Github</a>

            </Button>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard