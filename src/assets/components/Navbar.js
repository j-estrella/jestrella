import { useState, useEffect } from "react"
import icon from '../img/icon.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Navbar() {
    const [navbarOpen,setNavbarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    function navbarToggle() {
        setNavbarOpen(!navbarOpen);
    }

    function clickMenu(){
        setNavbarOpen(false);
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");

        const handleResize = () => {
            setIsMobile(!mediaQuery.matches);
        };

        handleResize();

        mediaQuery.addEventListener("change", handleResize);

        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, []);
    
    return (
        <>
            <section className="h-32 flex items-center md:justify-none justify-between md:gap-8 gap-4" id="navbar"> {/*  NAVBAR */}
                <div className="flex-shrink-0 basis-16 flex justify-center items-center">
                    <img src={icon} className='w-12 h-12' alt="Seb Logo"/>
                </div>

                <div className="flex-grow hidden lg:flex items-center">
                    <hr className="w-full border" />
                </div>

                <div className="flex-shrink-0 flex gap-4 uppercase font-bold text-sm md:text-xl">
                    <a className='cursor-pointer md:block hidden' href="#portfolio">Portfolio</a>
                    <a className='cursor-pointer md:block hidden' href="#work">Work Experience</a>
                    <a className='cursor-pointer md:block hidden' href="#footer">Contact Me</a>
                    <div>
                    {navbarOpen ? (<IoMdCloseCircleOutline className='w-8 h-8 cursor-pointer md:hidden block' onClick={navbarToggle}/>) 
                    :(<GiHamburgerMenu className='w-8 h-8 cursor-pointer md:hidden block' onClick={navbarToggle}/>)}
                    </div>
                </div>
            </section>

            {/* NAVBAR TOGGLED MENU */}
            {isMobile && navbarOpen && (  
                <div className="absolute left-0 right-0 mx-auto bg-white w-[95%] h-auto p-8 flex flex-col gap-4 items-center text-center justify-center z-50">
                    <a href="#portfolio" onClick={clickMenu} className="hover:opacity-50 cursor-pointer">Portfolio</a>
                    <hr className="w-full text-gray-700" />
                    <a href="#work" onClick={clickMenu} className="hover:opacity-50 cursor-pointer">Work Experience</a>
                    <hr className="w-full text-gray-700" />
                    <a href="#footer" onClick={clickMenu} className="hover:opacity-50 cursor-pointer">Contact Me</a>
                </div>
            )}
        </>
    )
}