import Image from 'next/image'

const NavBar = () => {

    return (
        <nav className='container flex justify-between p-4 md:p-8 text-white'>
            <ul className='text-3xl font-extrabold'>
                <li>
                    <p>{'<Felipe/>'}</p>
                </li>
            </ul>
            <ul className='hidden lg:flex flex-row justify-between gap-8 text-xl'>
                <li>
                    <a href=".">Sobre mim</a>
                </li>
                <li>
                    <a href=".">Projetos</a>
                </li>
                <li>
                    <a href=".">Contato</a>
                </li>
            </ul>
            <button className='lg:hidden'>
                <Image 
                src='/icons/menus (1).png' 
                alt='Menu Icon'
                width={44}
                height={44}
                />
            </button>
        </nav>
    )
};

export default NavBar;