import { BiSolidRightArrow } from "react-icons/bi";
import ContentBanner from '../img/content.png';

export default function Content() {
    return(
        <>
            <section className='md:mt-60 mt-32'> {/*  CONTENTS */}
                <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
                    <div className='col-span-5 my-auto'>
                        <img src={ContentBanner} className='h-60' alt="Content banner image"/>
                    </div>
                    <div className='col-span-7 flex flex-col uppercase text-lg md:text-3xl tracking-wider gap-4'>
                        <div className='flex gap-4'>
                            <div><BiSolidRightArrow className='mt-1'/></div>
                            <a href="#portfolio">Broadcast & Overlays</a>
                        </div>
                        <div className='flex gap-4'>
                            <div><BiSolidRightArrow className='mt-1'/></div>
                            <a href="#branding">Branding & Identity</a>
                        </div>
                        <div className='flex gap-4'>
                            <div><BiSolidRightArrow className='mt-1'/></div>
                            <a href="#logo">Logo Design</a>
                        </div>
                        <div className='flex gap-4'>
                            <div><BiSolidRightArrow className='mt-1'/></div>
                            <a href="#socmed">Social Media Poster</a>
                        </div>
                        <div className='flex gap-4'>
                            <div><BiSolidRightArrow className='mt-1'/></div>
                            <a href="#presentation">Presentation Design</a>
                        </div>
                        <div className='flex gap-4'>
                            <div><BiSolidRightArrow className='mt-1'/></div>
                            <a href="#other-projects">Other Projects</a>
                        </div>
                        <div className='flex gap-4'>
                            <div><BiSolidRightArrow className='mt-1'/></div>
                            <a href="#photography">Photography</a>
                        </div>
                        <div className='flex gap-4'>
                            <div><BiSolidRightArrow className='mt-1'/></div>
                            <a href="#personal-projects">Personal Projects</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}