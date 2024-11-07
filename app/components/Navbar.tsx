"use client";

import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useState, useEffect } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    
    useEffect(() => {
      document.body.classList.toggle("darkTheme", isDarkTheme);
    }, [isDarkTheme]);
    return (
        <div>
            <nav className="flex items-center justify-between sm:justify-evenly pt-2 sm:py-6 px-4 bg-transparent sticky top-[0px] z-50">
                <div className="block lg:hidden font-semibold text-[1.7em] font-poppins" onClick={handleMenuToggle}>≡</div>
                <div className={`${isMenuOpen ? "translate-x-0" : "-translate-x-full"} h-full w-[250px] bg-lightGrey text-black shadow-[0px_0px_10px_rgba(0,0,0,1)] left-0 py-60 px-16 fixed z-[999] top-0`}>
                    <div className="top-6 absolute right-6 font-poppins font-bold" onClick={handleMenuToggle}>X</div>
                    <ul className="flex flex-col gap-10 font-poppins font-semibold">
                        <li><Link href="" onClick={handleMenuToggle}>Home</Link></li>
                        <li><Link href="" onClick={handleMenuToggle}>About</Link></li>
                        <li><Link href="" onClick={handleMenuToggle}>Skills</Link></li>
                        <li><Link href="" onClick={handleMenuToggle}>Portfolio</Link></li>
                        <li><Link href="" onClick={handleMenuToggle}>Contact</Link></li>
                    </ul>
                </div>
                <div className="text-[1.5em] md:text-[1.9em] font-saira"><a href="#">Layan<span className="text-scarlet text-4xl"> .</span></a></div>
                <ul className="hidden lg:flex gap-7 font-poppins font-semibold ">
                    <li><Link href="">Home</Link></li>
                    <li><Link href="">About</Link></li>
                    <li><Link href="">Skills</Link></li>
                    <li><Link href="">Portfolio</Link></li>
                    <li><Link href="">Contact</Link></li>
                </ul>

               
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        className={styles.checkboxInput} 
                        checked={isDarkTheme}
                        onChange={() => setIsDarkTheme(!isDarkTheme)}
                        id="checkboxInput"
                    />
                    <label
                        htmlFor="checkboxInput"
                        className={`${styles.toggleSwitch} cursor-pointer flex items-center`}
                    >
                        </label>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
