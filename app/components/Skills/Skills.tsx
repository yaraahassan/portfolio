import SectionTitle from "@/app/Helper/SectionTitle"
import SkillCard from "./SkillCard"
import { skills } from '@/app/constants/conctants'
const Skills = () => {
  return (
    <div className="py-16 bg-[#f4f4fe] dark:bg-gray-950 text-center">
        <SectionTitle title_1="Technical " title_2="Skills" desc="Technologies I've been working recently"/>
        <div className="py-16 w-[80%] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          { skills.map((skill,index)=>(
            <div  data-aos="zoom-in" data-aos-delay="1" data-aos-anchor-placement="top-center">
                <SkillCard key={skill.name} icon={skill.icon} name={skill.name}/>
           </div>))}
          
        </div>
    </div>
  )
}

export default Skills