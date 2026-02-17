import { navLinks } from "@/app/constants/conctants"
import { X } from "lucide-react";
import Link from "next/link"
type showNavProps={
    showNav:boolean;
    closeNav:()=>void
}
const MobileNav = ({showNav,closeNav}:showNavProps) => {
  return (
    <>
     {showNav && (
        <div className="w-full h-screen bg-black opacity-70 transform transition-all duration-500 fixed inset-0 z-1002">

        </div>
     )} 

    {showNav && (
        <div className="justify-center fixed text-xl font-bold bg-[#1d4e89] w-[85%] sm:[w-70%] h-screen text-white flex flex-col z-1050 delay-500 space-y-8 ">
       {
        navLinks.map((item)=>(
            <Link href={item.href} key={item.name} className="ml-14 border-white  border-b-2 w-fit">
                {item.name}
            </Link>
        ))
       }
       <X onClick={closeNav} className="absolute right-1 top-2 "/>
        </div>
    )}

    </>
  )
}

export default MobileNav