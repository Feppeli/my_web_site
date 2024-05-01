'use client'

import Image from 'next/image'
import { useState } from 'react';
import Menu from '../Menu/index'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <nav className='container flex justify-between p-4 md:p-8 text-white'>
            <ul className='text-3xl font-extrabold'>
                <li>
                    <p>{'<Felipe/>'}</p>
                </li>
            </ul>
            <ul className='hidden lg:flex flex-row justify-between gap-8 text-xl'>
                <li>
                    <a className='hover:text-sky-600 transition delay-100' href="#about">About</a>
                </li>
                <li>
                    <a className='hover:text-sky-600 transition delay-100' href="#projects">Projects</a>
                </li>
                <li>
                    <a className='hover:text-sky-600 transition delay-100' href="#contacts">Contact</a>
                </li>
            </ul>
            <button className='lg:hidden' onClick={handleClick}>
                <Image 
                src='/icons/menus (1).png' 
                alt='Menu Icon'
                width={44}
                height={44}
                />
            </button>

            
        </nav>
        {isOpen && <Menu handleClick={handleClick} />}
        </>
        
    )
};

export default NavBar;