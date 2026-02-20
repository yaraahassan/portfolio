import {
  FileCode,
  Palette,
  Braces,
  Boxes,
  Type,
  Atom,
  Layers,
  Wind,
  ArrowRightLeft,
  Database,
  ClipboardList,
  ShieldCheck,
  LayoutDashboard,
  Store,
  Code2,
  Globe,
  GitBranch,
  Github,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter
} from "lucide-react";

export const navLinks=[
    {name:"Home",href:"#"},
    {name:"About",href:"#"},
    {name:"Skills",href:"#"},
    {name:"Projects",href:"#"},
    {name:"Experience",href:"#"},
    {name:"Testimonials",href:"#"},
    {name:"Contact",href:"#"}
]

export const skills = [
  { name: "HTML", icon: FileCode },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Braces },
  { name: "Bootstrap", icon: Boxes },
  { name: "TypeScript", icon: Type },
  { name: "React", icon: Atom },
  { name: "Redux", icon: Layers },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Next.js", icon: ArrowRightLeft },
  { name: "Axios", icon: ArrowRightLeft },
  { name: "React Query", icon: Database },
  { name: "React Hook Form", icon: ClipboardList },
  { name: "Zod", icon: ShieldCheck },
  { name: "Shadcn UI", icon: LayoutDashboard },
  { name: "Zustand", icon: Store },
  { name: "PHP", icon: Code2 },
  { name: "WordPress", icon: Globe },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
];

export const projects=[
    {
        img:"/images/555.webp",
        title:"E-commerce",
        description:"This project is a user interface for an e-commerce web application with interactive components designed to enhance the online shopping experience",
        languages:["HTML","CSS","JavaScript"],
        demoUrl:"https://example.com",
        gitUrl:"https://github.com/yaraahassan?tab=repositories"

    }
    ,
    {
        img:"/images/777.webp",
        title:"Twitter Clone",
        description:"This project is a responsive Twitter user interface clone This layout is divided into three main sections — Left Sidebar, Main Feed, and Right Sidebar — closely mimicking the modern Twitter design.",
        languages:["HTML","CSS","JavaScript","Tailwind"],
        demoUrl:"https://example.com",
        gitUrl:"https://github.com/yaraahassan?tab=repositories"

    }
    ,
     {
        img:"/images/333.webp",
        title:"Airbnb",
        description:"TThis project is a fully responsive Airbnb UI clone . It replicates core Airbnb features including property listings and dynamic search filters.",
        languages:["React","Next.js","TypeScript","Tailwind"],
        demoUrl:"https://example.com",
        gitUrl:"https://github.com/yaraahassan?tab=repositories"

    }
]
    
export const contacts=[
    {icon:Mail,
    label:"Email",
    value:"yarah@gmail.com",
    href:"mailto:yarah8215@gmail.com"
    },
    
    {icon:Phone ,
    label:"Phone",
    value:"+20 01559323440",
    href:"tel:+20 01559323440"
    },
    
    {icon:MapPin ,
    label:"Location",
    value:"Egypt ,Mansoura",
    href:"#"
    },

]

export const socialLinks=[
    {
        icon:Github,
        href:"https://github.com/yaraahassan/",
        label:"Github"
    },
   {
        icon:Linkedin,
        href:"https://www.linkedin.com/feed/",
        label:"LinkedIn"
    },
      {
        icon:Twitter,
        href:"https://www.twitter.com",
        label:"Twitter"
    },
]













    
    
