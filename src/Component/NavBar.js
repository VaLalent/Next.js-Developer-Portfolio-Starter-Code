import Link from 'next/link';
import React from 'react';
import Logo from './Logo';

const NavBar = () => {
    return (
        <header
        className='w-full px-32 py-8 font-medium flex justify-between items-center'
        >
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <Logo/>
            <nav>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
                <Link href="/" target={"_blank"}>T</Link>
            </nav>
        </header>
    )
}

export default NavBar;