import dp1 from '../img/dp1.png';
import Resume from '../file/Josh Estrella Resume.pdf';

export default function MainFunction() {
    return(
        <>
            <section className="grid grid-cols-12 gap-8">
                <div className='col-span-12 lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center'>
                    <p className="md:text-8xl text-5xl uppercase font-bold md:text-justify text-center">Josh <br/>Estrella</p><br/>
                    <p className="uppercase tracking-widest md:text-justify text-center">graphic designer / multimedia artist</p><br/>
                    <p className='md:w-11/12 md:text-justify text-center'>
                    With six  years of experience specializing in Branding, Logo design, Layout design,
                    Illustration, Social Media Design, Adobe Creative Suit, Animation, Video Editing,
                    and Powerpoint Presentation Design, allowing me to create dynamic and visually
                    engaging content. Dedicated to delivering high-quality work, I am passionate
                    about design and committed to exceeding client expectations. 
                    </p>
                    <a href={Resume} className="md:mx-0 mx-auto" target="_blank">
                    <button className="btn h-12 w-44 bg-white text-black uppercase px-4 mt-8">My Resume</button>
                    </a>
                </div>

                <div className='col-span-12 lg:col-span-5 order-1 lg:order-2'>
                    <img src={dp1} alt="Seb Picture"/>
                </div>
            </section>

            <section className='mt-12 md:block hidden'>
                <hr className="w-full border" />
            </section>
        </>
    )
}