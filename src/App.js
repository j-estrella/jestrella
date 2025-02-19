import { useEffect} from 'react';
import { IoArrowUpCircle } from "react-icons/io5";
import './App.css';
import icon from './assets/img/icon.png';
import dp1 from './assets/img/dp1.png';
import dp2 from './assets/img/dp2.jpg';
import Resume from './assets/file/Josh Estrella Resume.pdf';
import EditingSoftware1 from './assets/img/software/EditingSoftware1.png';
import EditingSoftware2 from './assets/img/software/EditingSoftware2.png';
import EditingSoftware3 from './assets/img/software/EditingSoftware3.png';
import EditingSoftware4 from './assets/img/software/EditingSoftware4.png';
import EditingSoftware5 from './assets/img/software/EditingSoftware5.png';
import EditingSoftware6 from './assets/img/software/EditingSoftware6.png';
import EditingSoftware7 from './assets/img/software/EditingSoftware7.png';
import OfficeTools1 from './assets/img/software/OfficeTools1.png';
import OfficeTools2 from './assets/img/software/OfficeTools2.png';
import OfficeTools3 from './assets/img/software/OfficeTools3.png';
import OfficeTools4 from './assets/img/software/OfficeTools4.png';
import OfficeTools5 from './assets/img/software/OfficeTools5.png';
import OfficeTools6 from './assets/img/software/OfficeTools6.png';
import OfficeTools7 from './assets/img/software/OfficeTools7.png';
import BroadcastSoftware1 from './assets/img/software/BroadcastSoftware1.png';
import BroadcastSoftware2 from './assets/img/software/BroadcastSoftware2.png';
import BroadcastSoftware3 from './assets/img/software/BroadcastSoftware3.png';
import BroadcastSoftware4 from './assets/img/software/BroadcastSoftware4.png';
import NaosBanner from './assets/img/work/NAOS COVER.png';
import IntegreonBanner from './assets/img/work/INTEGREON COVER.png';
import SenateBanner from './assets/img/work/SENATE COVER.png';
import WedroolBanner from './assets/img/work/WE DROOL COVER.png';
import ContentBanner from './assets/img/content.png';
import BroadcastBanner from './assets/img/banner/BROADCAST-PAGE.png';
import NvidiaVideo1 from './assets/vid/nvidia/NVIDIA 1.mp4';
import NvidiaVideo2 from './assets/vid/nvidia/NVIDIA 2-1.mp4';
import NvidiaVideo3 from './assets/vid/nvidia/nvidia 3-1.mp4';
import NvidiaVideo4 from './assets/vid/nvidia/NVIDIA 4-1.mp4';
import NvidiaVideo5 from './assets/vid/nvidia/nvidia 5-1.mp4';
import NvidiaVideo6 from './assets/vid/nvidia/nvidia 6-1.mp4';
import NvidiaVideo7 from './assets/vid/nvidia/nvidia 7-1.mp4';
import NvidiaVideo8 from './assets/vid/nvidia/nvidia 8-1.mp4';
import NvidiaVideo9 from './assets/vid/nvidia/nvidia 9-1.mp4';
import LevVideo1 from './assets/vid/lev/LEV 1-1.mp4';
import LevVideo2 from './assets/vid/lev/LEV 2-1.mp4';
import LevVideo3 from './assets/vid/lev/LEV 3-1.mp4';
import LevVideo4 from './assets/vid/lev/LEV 4-1.mp4';
import LevVideo5 from './assets/vid/lev/LEV 5-1.mp4';
import LevVideo6 from './assets/vid/lev/LEV 6-1.mp4';
import LevVideo7 from './assets/vid/lev/lev 7-1.mp4';
import LevVideo8 from './assets/vid/lev/lev 8-1.jpg';
import LevVideo9 from './assets/vid/lev/lev 9-1.mp4';
import BroadcastVideo1 from './assets/vid/broadcast/broadcast1.mp4';
import BroadcastVideo2 from './assets/vid/broadcast/broadcast2.mp4';
import BroadcastVideo3 from './assets/vid/broadcast/broadcast3.mp4';
import BroadcastVideo4 from './assets/vid/broadcast/broadcast4.mp4';
import BroadcastVideo5 from './assets/vid/broadcast/broadcast5.mp4';
import BroadcastVideo6 from './assets/vid/broadcast/broadcast6.mp4';
import BroadcastVideo7 from './assets/vid/broadcast/broadcast7.jpg';
import BroadcastVideo8 from './assets/vid/broadcast/broadcast8.jpg';
import BroadcastVideo9 from './assets/vid/broadcast/broadcast9.jpg';
import BrandingBanner from  './assets/img/banner/BRANDING-BANNER.png';
import Branding1 from './assets/img/branding/branding-1.png';
import Branding2 from './assets/img/branding/branding-2.png';
import Branding3 from './assets/img/branding/branding-3.png';
import Branding4 from './assets/img/branding/branding-4.png';
import LogoBanner from './assets/img/banner/LOGO-DESIGN.png';
import Logo1 from './assets/img/logo/LOGO COMPILATION-01.png';
import SocmedBanner from './assets/img/banner/SOCIAL-MEDIA.png';
import Socmed1 from './assets/img/socmed/socmed-1.png';
import Socmed2 from './assets/img/socmed/socmed-2.png';
import Socmed3 from './assets/img/socmed/socmed-3.png';
import PresentationBanner from './assets/img/banner/PRESENTATION-BANNER.png';
import Presentation1 from './assets/img/presentation/PRESENTATION DESIGN.png';
import OtherBanner from './assets/img/banner/OTHER-PROJECTS.png';
import Other1 from './assets/img/other-project/other portfolio-01.png';
import PhotographyBanner from './assets/img/banner/PHOTOGRAPHY-BANNER.png';
import Photog1 from './assets/img/photography/photog-1.png';
import Photog2 from './assets/img/photography/photog-2.png';
import Photog3 from './assets/img/photography/photog-3.png';
import PersonalBanner from './assets/img/banner/PERSONAL-PROJECT.png';
import Personal1 from './assets/img/personal-project/personal-1.png';
import { BiSolidRightArrow } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

function App() {
  const handleReturnToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  useEffect(() => {
    document.querySelector("#year").innerHTML = new Date().getFullYear();

    const scrollHandler = () => {
      const returnTopButton = document.querySelector('#scroll-top');

      if (returnTopButton) {
        if (window.scrollY === 0) {
          returnTopButton.classList.add("hidden");
        } else {
          returnTopButton.classList.remove("hidden");
        }
      }
    };

    window.addEventListener('scroll', scrollHandler);

    scrollHandler();
    
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  },[])

  return (
    <>
    {/* BTN RETURN TOP  */}
    <IoArrowUpCircle  id="scroll-top"  onClick={handleReturnToTop} 
      className="w-12 h-12  fixed bottom-0 right-0 m-8 text-white cursor-pointer hidden"/>

    <section className="h-32 flex items-center gap-8" id="navbar"> {/*  NAVBAR */}
      <div className="flex-shrink-0 basis-16 flex justify-center items-center">
        {/* <div className='w-20 h-20 bg-white rounded-full'></div> */}
        <img src={icon} className='w-12 h-12' alt="Seb Logo"/>
      </div>

      <div className="flex-grow hidden lg:flex items-center">
        <hr className="w-full border" />
      </div>

      <div className="flex-shrink-0 flex gap-4 uppercase font-bold text-sm md:text-2xl">
        <a className='cursor-pointer' href="#portfolio">Portfolio</a>
        <a className='cursor-pointer' href="#work">Work Experience</a>
        <a className='cursor-pointer' href="#footer">Contact Me</a>
      </div>
    </section>

    <section className="grid grid-cols-12"> {/*  1ST CONTENT */}
        <div className='col-span-12 lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center'>
            <p className="text-8xl uppercase font-bold">Josh <br/>Estrella</p><br/>
            <p className="uppercase tracking-widest">graphic designer / multimedia artist</p><br/>
            <p>
              With six  years of experience specializing in Branding, Logo design, Layout design,
              Illustration, Social Media Design, Adobe Creative Suit, Animation, Video Editing,
              and Powerpoint Presentation Design, allowing me to create dynamic and visually
              engaging content. Dedicated to delivering high-quality work, I am passionate
              about design and committed to exceeding client expectations. 
            </p>
            <a href={Resume} target="_blank">
              <button className="btn h-12 w-44 bg-white text-black uppercase px-4 mt-8">My Resume</button>
            </a>
        </div>

        <div className='col-span-12 lg:col-span-5 order-1 lg:order-2'>
            <img src={dp1} alt="Seb Picture"/>
        </div>
    </section>  

    <section className='mt-12'> {/*  HR LINE */}
      <hr className="w-full border" />
    </section>

    <section className='md:mt-40 mt-20'> {/*  EXPERTISE */}
      <div className='flex flex-col gap-4'>
        <p className='text-7xl font-bold uppercase'>Expertise</p>
        <hr className="w-full sm:w-32 mx-auto sm:mx-0 border-4" />
      </div>

      <div className='flex flex-col gap-4 my-12'>
        <p className='text-xl uppercase'>Editing Software</p>
        <div className='flex flex-wrap gap-4'>
          <div>
            <img src={EditingSoftware1} className='w-16 h-16' alt="Adobe Photoshop Icon"/>
          </div>
          <div>
            <img src={EditingSoftware2} className='w-16 h-16' alt="Adobe Illustrator Icon"/>
          </div>
          <div>
            <img src={EditingSoftware3} className='w-16 h-16' alt="Adobe Lightroom Icon"/>
          </div>
          <div>
            <img src={EditingSoftware4} className='w-16 h-16' alt="Adobe Premier Icon"/>
          </div>
          <div>
            <img src={EditingSoftware5} className='w-16 h-16' alt="Adobe After Effects Icon"/>
          </div>
          <div>
            <img src={EditingSoftware6} className='w-16 h-16' alt="Canva Icon"/>
          </div>
          <div>
            <img src={EditingSoftware7} className='w-16 h-16' alt="Capcut Icon"/>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 my-12'>
        <p className='text-xl uppercase'>Office tools</p>
        <div className='flex flex-wrap gap-4'>
          <div>
            <img src={OfficeTools1} className='w-16 h-16' alt="Microsoft Powerpoint Icon"/>
          </div>
          <div>
            <img src={OfficeTools2} className='w-16 h-16' alt="Microsoft Word Icon"/>
          </div>
          <div>
            <img src={OfficeTools3} className='w-16 h-16' alt="Microsoft Excel Icon"/>
          </div>
          <div>
            <img src={OfficeTools4} className='w-16 h-16' alt="Google Sheets Icon"/>
          </div>
          <div>
            <img src={OfficeTools5} className='w-16 h-16' alt="Google Slides Icon"/>
          </div>
          <div>
            <img src={OfficeTools6} className='w-16 h-16' alt="Google Forms Icon"/>
          </div>
          <div>
            <img src={OfficeTools7} className='w-16 h-16' alt="Google Docs Icon"/>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 my-12'>
        <p className='text-xl uppercase'>Broadcast softwares</p>
        <div className='flex flex-wrap gap-4'>
          <div>
            <img src={BroadcastSoftware1} className='w-16 h-16' alt="OBS Icon"/>
          </div>
          <div>
            <img src={BroadcastSoftware2} className='w-16 h-16' alt="Streamlabs Icon"/>
          </div>
          <div>
            <img src={BroadcastSoftware3} className='w-16 h-16' alt="Elgato Stream Deck Icon"/>
          </div>
          <div>
            <img src={BroadcastSoftware4} className='w-16 h-16' alt="GT Icon"/>
          </div>
        </div>
      </div>

    </section>

    <section className='md:mt-40 mt-20' id="work"> {/*  WORK EXP */}
      <div className='flex flex-col gap-4'>
        <p className='text-7xl font-bold uppercase'>Work Experience</p>
        <hr className="w-56 border-4" />
      </div>

      <div className="grid grid-cols-4 gap-4 my-12">
        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={NaosBanner} alt="NAOS logo" className="mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold">NAOS ESPORTS</h2>
            <p className="text-2xl">MULTIMEDIA ARTIST</p>
          </div>
          <p className="text-xl italic mt-auto">(2024-2025)</p>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={NaosBanner} alt="NAOS logo" className="mx-auto" />
            <h2 className="text-2xl font-bold">NAOS ESPORTS</h2>
            <p className="text-2xl">COMMUNITY AND EVENTS CREATIVE</p>
          </div>
          <p className="text-xl italic mt-auto">(2024-2025)</p>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={IntegreonBanner} alt="Integreon logo" className="mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold">INTEGREON INC.</h2>
            <p className="text-2xl">DESIGN ASSOCIATE</p>
          </div>
          <p className="text-xl italic mt-auto">(2024-2025)</p>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={IntegreonBanner} alt="Integreon logo" className="mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold">INTEGREON INC.</h2>
            <p className="text-2xl">INDEPENDENT GRAPHIC SPECIALIST</p>
          </div>
          <p className="text-xl italic mt-auto">(2023-2025)</p>
        </div>
        
        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={IntegreonBanner} alt="Integreon logo" className="mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold">INTEGREON INC.</h2>
            <p className="text-2xl">GRAPHIC SPECIALIST</p>
          </div>
          <p className="text-xl italic mt-auto">(2024-2025)</p>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={SenateBanner} alt="Senate logo" className="mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold">SENATE PHILIPPINES</h2>
            <p className="text-2xl">GRAPHIC DESIGNER INTERNSHIP</p>
          </div>
          <p className="text-xl italic mt-auto">(2024-2025)</p>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={WedroolBanner} alt="Wedrool logo" className="mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold">WEDROOL CLOTHING</h2>
            <p className="text-2xl">GRAPHIC DESIGNER ON-THE-JOB TRAINING</p>
          </div>
          <p className="text-xl italic mt-auto">(2024-2025)</p>
        </div>
      </div>
    </section>
    
    <section className='md:mt-60 mt-32'> {/*  CONTENTS */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
        <div className='col-span-5 my-auto'>
          {/* <div className='w-96 h-60 bg-white'></div> */}
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

    <section className='md:mt-60 mt-32' id="portfolio"> {/*  BROADCAST AND OVERLAYS */}
      <img src={BroadcastBanner} className='w-full' alt="Broadcast and overlays banner image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/*  VID 1 NVIDIA */}
      <div className="grid grid-cols-12 gap-4 mt-24">
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={NvidiaVideo1} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={NvidiaVideo2} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={NvidiaVideo3} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={NvidiaVideo4} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={NvidiaVideo5} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={NvidiaVideo6} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={NvidiaVideo7} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={NvidiaVideo8} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={NvidiaVideo9} type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>

    <section className='md:mt-40 mt-20'> {/*  VID 2 LEV */}
      <div className='grid grid-cols-12 gap-4 my-12'>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={LevVideo1} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={LevVideo2} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={LevVideo3} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={LevVideo4} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={LevVideo5} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={LevVideo6} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={LevVideo7} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <img src={LevVideo8} />
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={LevVideo9} type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>

    <section className='md:mt-40 mt-20'> {/*  VID 3 BROADCAST */}
      <div className="grid grid-cols-12 gap-4 mt-24">
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={BroadcastVideo1} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={BroadcastVideo2} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={BroadcastVideo3} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={BroadcastVideo4} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={BroadcastVideo5} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video autoPlay loop muted controls playsInline webkit-playsinline>
            <source src={BroadcastVideo6} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <img src={BroadcastVideo7} alt="Broadcast 7 image"/>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <img src={BroadcastVideo8} alt="Broadcast 8 image"/>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <img src={BroadcastVideo9} alt="Broadcast 9 image"/>
        </div>
      </div>
    </section>

    <section className='md:mt-60 mt-32' id="branding"> {/*  BRANDING */}
      <img src={BrandingBanner} className='w-full' alt="Branding banner image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/* LETS CREATE BRANDING IMG */}
      <img src={Branding1} className="w-full" alt="Lets create branding image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/*  TEST CANVA */}
      <img src={Branding2} className="w-full" alt="Test Canva branding image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/*  FREE FROM LIMITS */}
      <img src={Branding3} className="w-full" alt="Free from limits branding image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/*  SARA BRANDING */}
      <img src={Branding4} className="w-full" alt="Sara Branding image"/>
    </section>

    <section className='md:mt-60 mt-32' id="logo"> {/*  LOGO */}
      <img src={LogoBanner} className='w-full' alt="Logo banner image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/*  LOGO 1 TEMP */}
      <img src={Logo1} className="w-full" alt="Logo 1 image"/>
    </section>

    <section className='md:mt-40 mt-20' id="socmed"> {/*  SOCMED */}
      <img src={SocmedBanner} className='w-full' alt="Social media banner image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/*  SOCMED 1 */}
      <img src={Socmed1} className="w-full" alt="Social Media 1 image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/*  SOCMED 2 */}
      <img src={Socmed2} className="w-full" alt="Social Media 2 image"/>
    </section>

    <section className='md:mt-60 mt-32'> {/*  SOCMED 3 */}
      <img src={Socmed3} className="w-full" alt="Social Media 3 image"/>
    </section>

    <section className='md:mt-40 mt-20' id="presentation"> {/*  PRESENTATION AND DESIGN */}
      <img src={PresentationBanner} className='w-full' alt="Presentation banner image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/*  PRESENTATION 1 */}
      <img src={Presentation1} className='w-full' alt="Presentation 1 image"/>
    </section>

    <section className='md:mt-60 mt-32' id="other-projects"> {/*  OTHER PROJECTS */}
      <img src={OtherBanner} className='w-full' alt="Other projects banner image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/*  OTHER PROJECTS 1 */}
      <img src={Other1} className='w-full' alt="Other project 1 image"/>
    </section>

    <section className='md:mt-60 mt-32' id="photography"> {/*  PHOTOGRAPHY */}
      <img src={PhotographyBanner} className='w-full' alt="Photography banner image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/*  PHOTOGRAPHY 1 */}
      <img src={Photog1} className='w-full' alt="Photography 1 image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/*  PHOTOGRAPHY 2 */}
      <img src={Photog2} className='w-full' alt="Photography 2 image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/*  PHOTOGRAPHY 3 */}
      <img src={Photog3} className='w-full' alt="Photography 3 image"/>
    </section>

    <section className='md:mt-60 mt-32' id="personal-projects"> {/*  PERSONAL */}
      <img src={PersonalBanner} className='w-full' alt="Personal banner image"/>
    </section>

    <section className='md:mt-40 mt-20'> {/*  PERSONAL 1 */}
      <img src={Personal1} className='w-full' alt="Personal 1 image"/>
    </section>

    <div className='bg-black md:mt-40 mt-20 relative bottom-0 py-16 md:h-[900px] h-auto' id="footer"> {/*  FOOTER */}
      <section className="grid md:grid-cols-3 grid-cols-2 grid-rows-2 gap-12 text-white h-[550px]">
        {/* 1 - Upper Left Image */}
        <div className="col-span-1 col-start-1 row-span-1 row-start-1">
            <img src={dp2} alt="Seb pic 2" className="w-full h-full" />
        </div>

        {/* 2 - Lower Left "Work with me" */}
        <div className="col-span-1 col-start-1 row-span-1 row-start-2 relative">
            <p className="text-4xl md:text-6xl font-bold leading-tight absolute md:bottom-0">WORK WITH ME</p>
        </div>

        {/* 3 - Center Column, Row-Span 3 */}
        <div className="col-span-1 col-start-2 row-span-2 md:block hidden">
            <img src={dp1} alt="Seb pic 1" className="w-full h-full" />
        </div>

        {/* 4 - Upper Right HR Line */}
        <div className="col-span-1 md:col-start-3 col-start-2 row-span-2 flex flex-col h-full">
          <div className="self-start w-full">
              <hr className="w-full border mb-4" />
          </div>

          {/* Centered Email & Phone */}
          <div className="flex flex-col md:justify-center flex-grow gap-6 md:mt-0 mt-12">
              {/* Email */}
              <div className="flex gap-4">
                  <MdOutlineEmail className="text-3xl lg:text-5xl" />
                  <p className="flex-1 break-all">
                      Email <br />
                      <span className="uppercase text-sm tracking-wide">josh.sebastiene@yahoo.com</span>
                  </p>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                  <CiPhone className="text-3xl lg:text-5xl" />
                  <p className="flex-1 break-all">
                      Phone <br />
                      +971 55-407-8558
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
  );
}

export default App;
