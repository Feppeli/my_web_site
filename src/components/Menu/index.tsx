import Image from 'next/image'
import close from '../../../public/icons/cancelar.png'

interface MenuProps{
    handleClick: any,

}

const Menu = (props:MenuProps) => {
    return (
        <div className="p-4 fixed top-0 left=-0 w-full h-full bg-blue-600 flex justify-between flex-col items-center">
            <div>
                <button className="fixed top-5 right-4" onClick={props.handleClick}>
                    <Image 
                    src={close}
                    alt='botão de fechar'
                    width={38}
                    height={38}
                    ></Image>
                </button>
            </div>
            <div className="flex flex-col gap-4 text-center text-2xl text-white font-bold">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contacts">Contacts</a>
            </div>
            <div>
                <span className="text-white text-lg">© Felipe Teixeira 2024</span>
            </div>
        </div>
    )
}

export default Menu