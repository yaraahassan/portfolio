import SectionTitle from "@/app/Helper/SectionTitle"
import ProjectCard from "./ProjectCard"
import { projects } from "@/app/constants/conctants"

const Projects = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950 ">
        <SectionTitle title_1="Featured" title_2="Projects" desc="A selection of my recent work and side projects"/>
        <div className="py-16 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                projects.map((project)=>(
                     <ProjectCard key={project.title} img={project.img} title={project.title} 
                     desc={project.description} lang={project.languages} demoUrl={project.demoUrl} gitUrl={project.gitUrl}
                     />
                ))
            }
           


        </div>
    </div>
  )
}

export default Projects