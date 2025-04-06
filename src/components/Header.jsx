import logo from '../assets/dretz.svg';
import { useState } from 'react';
export function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className='bg-blue-1 flex flex-col justify-center place-items-end font-main font-bold px-6 py-4 w-full h-[15vh] relative z-10'>

            {/* Hamburger Menu */}
            <div className='md:hidden'>
                <button
                    className='text-white focus:outline-none'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16m-7 6h7'
                        />
                    </svg>
                </button>
            </div>

            {/* Navigation Menu */}
            <nav
                className={`${
                    menuOpen ? 'block' : 'hidden'
                } absolute top-[15vh] left-0 w-full bg-blue-1 md:static md:flex md:justify-center md:space-x-60 md:items-center z-20`}
            >
                <ul className='gap-x-20 mx-4 py-4 flex flex-col md:flex-row space-y-4 md:space-y-0'>
                    <li>
                        <a
                            href='/'
                            className='text-white hover:underline underline-offset-4 hover:animate-pulse'
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href='/projects'
                            className='text-white hover:underline underline-offset-4 hover:animate-pulse'
                        >
                            Projects
                        </a>
                    </li>
                    {/* Linea de about me sin terminar */}
                    {/* <li>
                        <a
                            href='/about-me'
                            className='text-white hover:underline underline-offset-4 hover:animate-pulse'
                        >
                            About me
                        </a>
                    </li> */}
                    <li>
                        <a
                            href='/contact-me'
                            className='text-white hover:underline underline-offset-4 hover:animate-pulse'
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}