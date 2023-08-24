
'use client' // by defalt next things that it server component
import { useState } from 'react'
import { headerItems, userInfo } from '@/constants/constant'
import { NavItems } from '@/models/Header'
import { BiMenu } from 'react-icons/bi'
import { Link as ScrollLink} from 'react-scroll'


const Header:React.FC = () => {

    const [NavItem, showNavItems] = useState<boolean>(false)


  return (
    // applying tailwind css bgcolor, p-padding flex-display justify-space or padding b/w div
    //fixed-position 
    <header className='bg-white p-6 justify-between fixed top-0 w-full z-10 md:flex'>
        {/* left side */}
        <div className='flex justify-between'>
            <h2 className='text-2xl font-bold'>{userInfo.name}</h2>
            <BiMenu
            size={30}
            className = "md:hidden" // hidden in large or midium screen
            // use stat to show navitems
            onClick={() => showNavItems(prevState => !prevState)} // opposite of current state

            />
        </div>
        {/* right side */}
        <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${ NavItem ? 'block' : 'hidden'} `}>
            {
                // map work with array
                // so map the object with key
                Object.keys(headerItems).map(item => (
                    <ScrollLink
                        to={headerItems[item as keyof NavItems].page}
                        className='block md:inline-block cursor-pointer hover:text-sky-400'
                        key= {headerItems[item as keyof NavItems].label}
                        spy={true}
                        smooth={true}
                    >
                    {headerItems[item as keyof NavItems].label}</ScrollLink>
                ))
            }
        </div>

    </header>
  )
}

export default Header