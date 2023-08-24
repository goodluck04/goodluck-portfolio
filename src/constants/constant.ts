import { UserObject } from "@/models/Users"
// import { NavItems } from "@/models/Header"



// validate data type of constants from Users.ts
export const userInfo: UserObject = {
    name: 'Goodluck',
    picture: './image/profile-pic.png',
    heading: 'I&#39;m a Software Engineer based in India, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built websites, web applications, leveraging cutting-edge technologies to drive innovation and enhance business processes.',
    about: `
        <p>I am a passionate Software Engineer with a strong background in Web Development, I have been crafting digital experiences for 2 years.</p>
        <p>My journey in IT began in 2020 since then, I've had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.</p>
        <p> I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. </p>
        <p>Feel free to connect with me to learn more about my journey.</p>
        <a href="https://www.linkedin.com/in/goodluck04">Linkedin</a>
        

        `,
    skills: ['React', 'Node', 'Data Structure', 'Algorithms', 'C++', 'Python', 'Linux','Azure', 'AWS', 'MongoDB', 'MySQL', 'HTML', 'CSS'],   
}



export const headerItems = {
    home: { label: 'Home', page: 'home'},
    about: { label: 'About', page: 'about'},
    projects: { label: 'Projects', page: 'projects'},
}

export const projects = {
    tindog: { image: './image/one.png' },
    blog: { image: './image/two.png' },
    todo: { image: './image/three.png' },
    portfolio: { image: './image/four.png' },
    crud: { image: './image/five.png' },
    signup: { image: './image/six.png' },
}




