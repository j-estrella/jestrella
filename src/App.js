import './App.css';
import icon from './assets/img/icon.png';
import dp from './assets/img/dp.png';
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
import FreeFromLimitBranding from './assets/img/banner/FREE-FROM-LIMIT-BRANDING.png';
import TestCanva from './assets/img/banner/test-canva.png';
import SaraBranding from './assets/img/banner/SARA-BRANDING.png';
import Socmed1 from './assets/img/socmed/socmed-1.png';
import Socmed2 from './assets/img/socmed/socmed-2.png';
import Socmed3 from './assets/img/socmed/socmed-3.png';
import { BiSolidRightArrow } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

function App() {
  return (
    <>
    <section className="h-32 flex items-center gap-8"> {/*  NAVBAR */}
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
            <button className="btn h-12 w-44 bg-white text-black uppercase px-4 mt-8">My Resume</button>
        </div>

        <div className='col-span-12 lg:col-span-5 order-1 lg:order-2'>
            <img src={dp} alt="Seb Picture"/>
        </div>
    </section>  

    <section className='mt-12'> {/*  HR LINE */}
      <hr className="w-full border" />
    </section>

    <section className='mt-40'> {/*  EXPERTISE */}
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

    <section className='mt-40' id="work"> {/*  WORK EXP */}
      <div className='flex flex-col gap-4'>
        <p className='text-7xl font-bold uppercase'>Work Experience</p>
        <hr className="w-56 border-4" />
      </div>

      <div className="grid grid-cols-4 gap-4 my-12">
        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={NaosBanner} alt="Logo" className="mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold">NAOS ESPORTS</h2>
            <p className="text-2xl">MULTIMEDIA ARTIST</p>
          </div>
          <p className="text-xl italic mt-auto">(2024-2025)</p>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={NaosBanner} alt="Logo" className="mx-auto" />
            <h2 className="text-2xl font-bold">NAOS ESPORTS</h2>
            <p className="text-2xl">COMMUNITY AND EVENTS CREATIVE</p>
          </div>
          <p className="text-xl italic mt-auto">(2024-2025)</p>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={IntegreonBanner} alt="Logo" className="mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold">INTEGREON INC.</h2>
            <p className="text-2xl">MULTIMEDIA ARTIST</p>
          </div>
          <p className="text-xl italic mt-auto">(2024-2025)</p>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={IntegreonBanner} alt="Logo" className="mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold">INTEGREON INC.</h2>
            <p className="text-2xl">INDEPENDENT GRAPHIC SPECIALIST</p>
          </div>
          <p className="text-xl italic mt-auto">(2023-2025)</p>
        </div>
        
        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={IntegreonBanner} alt="Logo" className="mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold">INTEGREON INC.</h2>
            <p className="text-2xl">GRAPHIC SPECIALIST</p>
          </div>
          <p className="text-xl italic mt-auto">(2024-2025)</p>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={SenateBanner} alt="Logo" className="mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold">SENATE PHILIPPINES</h2>
            <p className="text-2xl">GRAPHIC DESIGNER INTERNSHIP</p>
          </div>
          <p className="text-xl italic mt-auto">(2024-2025)</p>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
          <div className="flex flex-col gap-4 flex-grow">
            <img src={WedroolBanner} alt="Logo" className="mx-auto rounded-lg" />
            <h2 className="text-2xl font-bold">WEDROOL CLOTHING</h2>
            <p className="text-2xl">GRAPHIC DESIGNER ON-THE-JOB TRAINING</p>
          </div>
          <p className="text-xl italic mt-auto">(2024-2025)</p>
        </div>
      </div>
    </section>
    
    <section className='mt-60'> {/*  CONTENTS */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
        <div className='col-span-5 my-auto'>
          <div className='w-96 h-60 bg-white'></div>
        </div>
        <div className='col-span-7 flex flex-col uppercase text-lg md:text-3xl tracking-wider gap-4'>
          <div className='flex gap-4'>
            <div><BiSolidRightArrow className='mt-1'/></div>
            <p>Broadcast & Overlays</p>
          </div>
          <div className='flex gap-4'>
            <div><BiSolidRightArrow className='mt-1'/></div>
            <p>Branding & Identity</p>
          </div>
          <div className='flex gap-4'>
            <div><BiSolidRightArrow className='mt-1'/></div>
            <p>Logo Design</p>
          </div>
          <div className='flex gap-4'>
            <div><BiSolidRightArrow className='mt-1'/></div>
            <p>Social Media Poster</p>
          </div>
          <div className='flex gap-4'>
            <div><BiSolidRightArrow className='mt-1'/></div>
            <p>Presentation Design</p>
          </div>
          <div className='flex gap-4'>
            <div><BiSolidRightArrow className='mt-1'/></div>
            <p>Other Projects</p>
          </div>
          <div className='flex gap-4'>
            <div><BiSolidRightArrow className='mt-1'/></div>
            <p>Photography</p>
          </div>
          <div className='flex gap-4'>
            <div><BiSolidRightArrow className='mt-1'/></div>
            <p>Personal Projects</p>
          </div>
        </div>
      </div>
    </section>

    <section className='mt-60' id="portfolio"> {/*  BROADCAST AND OVERLAYS */}
      <img src={BroadcastBanner} className='w-full'/>
    </section>

    <section className='mt-40'> {/*  VID 1 NVIDIA */}
      <div className="grid grid-cols-12 gap-4 mt-24">
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={NvidiaVideo1} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={NvidiaVideo2} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={NvidiaVideo3} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={NvidiaVideo4} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={NvidiaVideo5} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={NvidiaVideo6} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={NvidiaVideo7} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={NvidiaVideo8} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={NvidiaVideo9} type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>

    <section className='mt-40'> {/*  VID 2 LEV */}
      <div className='grid grid-cols-12 gap-4 my-12'>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={LevVideo1} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={LevVideo2} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={LevVideo3} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={LevVideo4} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={LevVideo5} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={LevVideo6} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={LevVideo7} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <img src={LevVideo8} />
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={LevVideo9} type="video/mp4"/>
          </video>
        </div>
      </div>
    </section>

    <section className='mt-40'> {/*  VID 3 BROADCAST */}
      <div className="grid grid-cols-12 gap-4 mt-24">
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={BroadcastVideo1} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={BroadcastVideo2} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={BroadcastVideo3} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={BroadcastVideo4} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={BroadcastVideo5} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <video  controls autoPlay muted loop>
            <source src={BroadcastVideo6} type="video/mp4"/>
          </video>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <img src={BroadcastVideo7}/>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <img src={BroadcastVideo8}/>
        </div>
        <div className="col-span-6 lg:col-span-4 w-full mx-auto">
          <img src={BroadcastVideo9}/>
        </div>
      </div>
    </section>

    <section className='mt-60'> {/*  PLACEHOLDER */}
      <div className="w-full h-60 rounded-lg bg-white"></div>
    </section>

    <section className='mt-40'> {/*  FREE FROM LIMITS */}
      <img src={FreeFromLimitBranding} className="w-full" alt="Free from limit branding img"/>
    </section>

    <section className='mt-40'> {/*  TEST CANVA */}
      <img src={TestCanva} className="w-full" alt="Test Canva img"/>
    </section>

    <section className='mt-40'> {/*  SARA BRANDING */}
      <img src={SaraBranding} className="w-full" alt="Sara Branding img"/>
    </section>

    <section className='mt-60'> {/*  PLACEHOLDER */}
      <div className="w-full h-60 rounded-lg bg-white"></div>
    </section>

    <section className='mt-40'> {/*  PLACEHOLDER */}
      <div className="w-full h-96 rounded-lg bg-white"></div>
    </section>

    <section className='mt-40'> {/*  PLACEHOLDER */}
      <div className="w-full h-96 rounded-lg bg-white"></div>
    </section>

    <section className='mt-40'> {/*  SOCMED 1 */}
      <img src={Socmed1} className="w-full" alt="Social Media 1 img"/>
    </section>

    <section className='mt-40'> {/*  SOCMED 2 */}
      <img src={Socmed2} className="w-full" alt="Social Media 2 img"/>
    </section>

    <section className='mt-60'> {/*  SOCMED 3 */}
      <img src={Socmed3} className="w-full" alt="Social Media 3 img"/>
    </section>

    <section className='mt-40'> {/*  PLACEHOLDER */}
      <div className="w-full h-96 rounded-lg bg-white"></div>
    </section>

    <section className='mt-40'> {/*  PLACEHOLDER */}
      <div className="w-full h-96 rounded-lg bg-white"></div>
    </section>

    <div className='bg-black min-h-96 mt-40 relative bottom-0 py-16' id="footer"> {/*  FOOTER */}
      <section className='grid grid-rows-4 grid-cols-3 gap-12'>
        {/* 1ST COLUMNN */}
        <div className='row-span-2 col-span-1 bg-white w-full h-full'></div>
        <div className='row-span-2 row-start-3 col-span-1 lg:text-8xl text-lg'>Work <br/>with me</div>
        {/* 2ND COLUMN */}
        <div className='row-span-4 col-span-1 col-start-2 bg-white w-full h-full'></div>
        {/* 3RD COLUMN */}
        <div className='row-span-1 col-span-1 col-start-3'><hr className="w-full border"/></div>
        <div className='row-span-1 row-start-2 col-span-1 col-start-3 flex gap-4'>
          <CiLocationOn className='text-3xl lg:text-5xl'/>
          <p className='flex-1 break-all'>
            Address <br/>
            123 Anywhere St., Any City <br/>
            State, Country 12345
          </p>
        </div>
        <div className='row-span-1 row-start-3 col-span-1 col-start-3 flex gap-4'>
          <MdOutlineEmail className='text-3xl lg:text-5xl' />
          <p className='flex-1 break-all'>
            Email <br />
            joshestrella@gmail.com
          </p>
        </div>
        <div className='row-span-1 row-start-4 col-span-1 col-start-3 flex gap-4'>
          <CiPhone className='text-3xl lg:text-5xl'/>
          <p className='flex-1 break-all'>
            Phone <br/>
            (123) 456 7890
          </p>
        </div>
      </section>
    </div>
    </>
  );
}

export default App;
