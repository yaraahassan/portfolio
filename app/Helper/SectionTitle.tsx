import React from 'react'
type aboutProps={
    title_1:string;
    title_2:string;
    desc:string;
}
const SectionTitle = ({title_1,title_2,desc}:aboutProps) => {
  return (
    <div className='text-center mx-auto'>
        <h1 className='text-2xl sm:3xl md:text-4xl font-bold mb-4'>{title_1} {""}
            <span className='text-[#166088] dark:text-[#0096c7]'>{title_2}</span>
        </h1>
        <p className='text-muted-foreground max-w-2xl mx-auto font-semibold'>{desc}</p>
        
        
    
    </div>
  )
}

export default SectionTitle