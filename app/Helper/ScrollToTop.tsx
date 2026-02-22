"use client";

import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isVisible,setIsVisible]=useState(false);

    useEffect(()=>{
        const handleScroll=()=>{
        if(window.scrollY>300 ) {
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
        }
        window.addEventListener("scroll",handleScroll)

        return ()=>window.removeEventListener("scroll",handleScroll)

      
    },[])

  const moveToUp=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
  }

  return (
    <div className="fixed bottom-5 right-5">
        {
        isVisible &&(
        <button className="bg-red-700 rounded-full w-14 h-14 flex justify-center items-center animate-pulse" 
         onClick={moveToUp}>
            <ArrowBigUp className="w-5 h-5 text-white"/>
        </button>
        )
    }
    </div>
  )
}

export default ScrollToTop