
'use client'
import Image from "next/image"

import { headerItems, userInfo, projects } from "@/constants/constant"

const Projects: React.FC = () => {
  return (
    <section id={headerItems.projects.page}
     className="flex flex-col text-center justify-center items-center my-40"
    >
        <h1 className="text-6xl my-6">Projects</h1>
        
        <div className="flex justify-center items-center text-center mt-3 break-words flex-wrap">
                {
                    
                    // avoid overlap using inline-block
                    Object.keys(projects).map(project => (
                      <Image 
                      // we have tell the compiler using //
                        key={project} //Provide a unique key here
                        src={projects[project as keyof Projects].image}
                        alt=""
                        width={300}
                        height={300}
                        className="m-4 p-2"
                      />         
                    ))
                }    
        </div>       
    </section>
  )
}

export default Projects