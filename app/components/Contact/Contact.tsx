import { contacts, socialLinks } from "@/app/constants/conctants"
import SectionTitle from "@/app/Helper/SectionTitle"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Icon, Send } from "lucide-react"
import { Button } from "../ui/button"

const Contact = () => {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-950">
      <SectionTitle title_1="Get In" title_2="Touch" desc="Have a project in mind or just want to say hi? I'd love to hear from you."/>
      <div className="w-[80%] mx-auto grid lg:grid-cols-2 gap-12 pt-16">
         {/* contact info */}
          <div className="px-4">
            <div className="flex flex-col gap-6">
              <h1 className="font-semibold text-3xl">Let's talk</h1>
              <p className="text-muted-foreground text-md mb-6">I'am alaways open to discuss new projects ,creative ideas or opportunities to be part of your vision.</p>
            </div>
              <div className="py-6">
                {contacts.map((contact)=>(
                    <a href={contact.href} className=" hover:scale-105 duration-200  mb-6 p-4 gap-6 rounded-2xl shadow-md flex items-center bg-white dark:bg-gray-800">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center 
                        hover:bg-blue-500/20 scale-105 transition-colors duration-200 ">
                          <contact.icon className="text-blue-400 w-6 h-6"/>
                        </div>
                          <div >
                            <p className="text-muted-foreground text-sm">{contact.label}</p>
                            <p className=" text-xl">{contact.value}</p>


                          </div>

                    </a>
                )

                )}
               
              </div>

              {/* follow me */}
              <div className="flex flex-col gap-y-6">
                <h2 className="font-semibold text-2xl">Follow me</h2>
                <div className="flex gap-3 ">
                {
                  
                  socialLinks.map((link)=>(
                      <div className="bg-white w-12 h-12 dark:bg-gray-800 flex items-center justify-center rounded-xl ">
                          <link.icon className="w-6 h-6 text-muted-foreground hover:text-blue-500"/>

                      </div>
                  )

                  )
                  
                }
                </div>
              </div>

          </div>
          {/* contact form */}
          <div className="">
                <form className="bg-white rounded-xl  p-8 space-y-8  dark:bg-gray-800">
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold">Name</label>
                        <Input required placeholder="Yara Hassan " id="name" name="name" className="bg-gray-100"/>
                      </div>
                      {/* email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold">Email</label>
                        <Input required placeholder="yara@example.com " id="email" name="email" className="bg-gray-100"/>
                      </div>

                    </div>
                    {/* subject */}
                    <div>
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input required placeholder="Project Inquiry" className="bg-gray-100" name="subject" id="subject"/>
                    </div >
                    {/* textarea */}
                    <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea required placeholder="Tell me about your project!"
                    rows={5} id="message" name="message" className="h-40 bg-gray-100"/>
                    </div>
                    {/* button */}
                    <Button size={"lg"} className="w-full">
                      <Send className="w-6 h-6 mr-2"/>
                      Send Message

                    </Button>
                </form>
          </div>
      </div>
    </div>
  )
}

export default Contact