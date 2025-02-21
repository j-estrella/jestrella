import { useEffect } from "react"
import dp1 from '../img/dp1.png';
import dp2 from '../img/dp2.jpg';
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

export default function Footer(){
    useEffect(() => {
        document.querySelector("#year").innerHTML = new Date().getFullYear();
    },[]);

    return(
        <>
            <div className='bg-black md:mt-40 mt-20 relative bottom-0 py-16 md:h-[800px]' id="footer"> {/*  FOOTER */}
                <section className="grid md:grid-cols-3 grid-cols-2 grid-rows-2 gap-12 text-white h-[550px]">

                    <div className="col-span-1 col-start-1 row-span-2 row-start-1 relative">
                    <img src={dp2} alt="Seb pic 2" className="w-full md:h-3/5 h-2/5 md:object-none object-contain" />
                    <p className="text-4xl md:text-6xl font-bold leading-tight absolute md:bottom-0 bottom-32">WORK WITH ME</p>
                    </div>


                    <div className="col-span-1 col-start-2 row-span-2 md:block hidden">
                        <img src={dp1} alt="Seb pic 1" className="w-full h-full" />
                    </div>

                    <div className="col-span-1 md:col-start-3 col-start-2 row-span-2 flex flex-col h-full">
                        <div className="self-start w-full">
                            <hr className="w-full border mb-4" />
                        </div>

                        <div className="flex flex-col md:justify-center flex-grow gap-6 md:mt-0 mt-8">
                            <div className="flex gap-4">
                                <MdOutlineEmail className="text-3xl lg:text-5xl" />
                                <p className="flex-1 break-all">
                                    Email <br />
                                    <span className="uppercase text-sm tracking-wide">
                                        <a href="mailto:josh.sebastiene@yahoo.com">josh.sebastiene@yahoo.com</a>
                                    </span>
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <CiPhone className="text-3xl lg:text-5xl" />
                                <p className="flex-1 break-all">
                                    Phone <br />
                                    <span className="uppercase text-sm tracking-wide">
                                        <a href="https://wa.me/971554078558?text=Hello%20there!" target="_blank">+971 55-407-8558</a>
                                    </span>  
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='absolute bottom-0 text-white text-center w-full p-4'>
                    <p>© Copyrights <span id="year"></span>, Josh Estrella</p>
                </div>
            </div>
        </>
    )
}