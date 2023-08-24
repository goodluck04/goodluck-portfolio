import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";



const About: React.FC = () => {
    return (
        <section 
            id={headerItems.about.page} 
            className="flex flex-col text-center justify-center items-center md:flex-row md:text-start"
        >
            <div className={"m-4 md:ml-20 sm:ml-12 md:w-1/2"}>
                <h1 className={"text-6xl my-6"}>About</h1>
                <h2 className={"text-3xl my-4"}>Get to know me!</h2>
                <h6 className={"[&>p]:mt-3 [&>a]:font-bold [&>a]:underline [&>a]:text-blue-700"} dangerouslySetInnerHTML={{ __html: userInfo.about}} 
                />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
                <Image 
                    src={userInfo.picture} 
                    alt="" 
                    width={300} 
                    height={300} 
                    className={"m-auto"}    
                />
                <div className="break-words w-3/4 mt-3">
                    {userInfo.skills.map((skill, index) => (
                        <span key={index} className={"bg-gray-200 m-1 p-2 rounded-md inline-block text-sm"}>{skill}</span>
                    ))}
                    
                </div>
                
            </div>
        </section>
    );
};

export default About;
