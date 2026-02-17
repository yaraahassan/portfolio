import SectionTitle from "@/app/Helper/SectionTitle"
import Image from "next/image"

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 py-16 ">
        <SectionTitle title_1="About" title_2="Me"desc="Get to know the developer behind the code"/>
        <div className="w-[80%] mx-auto grid lg:grid-cols-2 gap-12 flex items-center pt-16">
           {/* image */}
           <div className="relative w-[700px ] aspect-square overflow-hidden " >
                <Image
                    src="/images/yarra.jpeg"
                    fill
                    alt="about_photo"
                    className="object-cover rounded-2xl"
                />

           </div>
           {/* info */}
           <div className="space-y-8 py-8">
                <p className=" text-2xl font-semibold ">A passionate developer who loves to create</p>
                <p className=" text-muted-foreground leading-relaxed">I am a Front-End Developer and a Computer Engineering graduate with a strong passion for programming and web development. I specialize in building modern, responsive, and user-friendly websites using the latest front-end technologies.</p>
                <p className=" text-muted-foreground leading-relaxed">I enjoy transforming creative designs into clean, efficient, and high-quality code, and I am always eager to learn new technologies and improve my skills. My goal is to create engaging digital experiences that combine performance, usability, and elegant design.</p>
           </div>

        </div>
    
    </div>
  )
}

export default About