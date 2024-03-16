import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

const Navbar = () => {
    // useState use for click bar and change the icon and show the navlinks
    const [nav, setNav] = useState(false)  // this false is default state

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
            <h1 className='text-5xl ml-2 font-signature'>Shilpi</h1>
        </div>

        <ul className='hidden md:flex'>
            {/* map for link one by one */}
            {links.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to={link} smooth duration={500}>
                        {link}
                    </Link>
                </li>
            ))}
        </ul>

        {/* for mobile responsive we were change the state through onclick function*/}
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* bar touch then navbar oprn in col full screen then touch X then remove tha navbar */}
        {nav && (
            // {/* after click function on bars the navbar we show */}
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {links.map(({id, link}) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    <Link to={link} smooth duration={500} 
                        onClick={() => setNav(!nav)}
                    >
                        {link}
                    </Link>
                </li>
            ))}
            </ul>
        )}

        
    </div>
  )
}

export default Navbar