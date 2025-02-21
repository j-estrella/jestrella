import EditingSoftware1 from '../img/software/EditingSoftware1.png';
import EditingSoftware2 from '../img/software/EditingSoftware2.png';
import EditingSoftware3 from '../img/software/EditingSoftware3.png';
import EditingSoftware4 from '../img/software/EditingSoftware4.png';
import EditingSoftware5 from '../img/software/EditingSoftware5.png';
import EditingSoftware6 from '../img/software/EditingSoftware6.png';
import EditingSoftware7 from '../img/software/EditingSoftware7.png';
import OfficeTools1 from '../img/software/OfficeTools1.png';
import OfficeTools2 from '../img/software/OfficeTools2.png';
import OfficeTools3 from '../img/software/OfficeTools3.png';
import OfficeTools4 from '../img/software/OfficeTools4.png';
import OfficeTools5 from '../img/software/OfficeTools5.png';
import OfficeTools6 from '../img/software/OfficeTools6.png';
import OfficeTools7 from '../img/software/OfficeTools7.png';
import BroadcastSoftware1 from '../img/software/BroadcastSoftware1.png';
import BroadcastSoftware2 from '../img/software/BroadcastSoftware2.png';
import BroadcastSoftware3 from '../img/software/BroadcastSoftware3.png';
import BroadcastSoftware4 from '../img/software/BroadcastSoftware4.png';

export default function Expertise(){
    return(
        <>
            <section className='md:mt-40 mt-20'>
                <div className='flex flex-col gap-4'>
                    <p className='md:text-7xl text-4xl font-bold uppercase md:text-justify text-center'>Expertise</p>
                    <hr className="w-full md:w-32 mx-auto sm:mx-0 border-4" />
                </div>

                <div className='flex flex-col gap-4 my-12'>
                    <p className='text-xl uppercase'>Editing Software</p>
                    <div className='flex flex-wrap gap-4'>
                    <div>
                        <img src={EditingSoftware1} className='md:w-16 w-12 md:h-16 h-12' alt="Adobe Photoshop Icon"/>
                    </div>
                    <div>
                        <img src={EditingSoftware2} className='md:w-16 w-12 md:h-16 h-12' alt="Adobe Illustrator Icon"/>
                    </div>
                    <div>
                        <img src={EditingSoftware3} className='md:w-16 w-12 md:h-16 h-12' alt="Adobe Lightroom Icon"/>
                    </div>
                    <div>
                        <img src={EditingSoftware4} className='md:w-16 w-12 md:h-16 h-12' alt="Adobe Premier Icon"/>
                    </div>
                    <div>
                        <img src={EditingSoftware5} className='md:w-16 w-12 md:h-16 h-12' alt="Adobe After Effects Icon"/>
                    </div>
                    <div>
                        <img src={EditingSoftware6} className='md:w-16 w-12 md:h-16 h-12' alt="Canva Icon"/>
                    </div>
                    <div>
                        <img src={EditingSoftware7} className='md:w-16 w-12 md:h-16 h-12' alt="Capcut Icon"/>
                    </div>
                    </div>
                </div>

                <div className='flex flex-col gap-4 my-12'>
                    <p className='text-xl uppercase'>Office tools</p>
                    <div className='flex flex-wrap gap-4'>
                    <div>
                        <img src={OfficeTools1} className='md:w-16 w-12 md:h-16 h-12' alt="Microsoft Powerpoint Icon"/>
                    </div>
                    <div>
                        <img src={OfficeTools2} className='md:w-16 w-12 md:h-16 h-12' alt="Microsoft Word Icon"/>
                    </div>
                    <div>
                        <img src={OfficeTools3} className='md:w-16 w-12 md:h-16 h-12' alt="Microsoft Excel Icon"/>
                    </div>
                    <div>
                        <img src={OfficeTools4} className='md:w-16 w-12 md:h-16 h-12' alt="Google Sheets Icon"/>
                    </div>
                    <div>
                        <img src={OfficeTools5} className='md:w-16 w-12 md:h-16 h-12' alt="Google Slides Icon"/>
                    </div>
                    <div>
                        <img src={OfficeTools6} className='md:w-16 w-12 md:h-16 h-12' alt="Google Forms Icon"/>
                    </div>
                    <div>
                        <img src={OfficeTools7} className='md:w-16 w-12 md:h-16 h-12' alt="Google Docs Icon"/>
                    </div>
                    </div>
                </div>

                <div className='flex flex-col gap-4 my-12'>
                    <p className='text-xl uppercase'>Broadcast softwares</p>
                    <div className='flex flex-wrap gap-4'>
                    <div>
                        <img src={BroadcastSoftware1} className='md:w-16 w-12 md:h-16 h-12' alt="OBS Icon"/>
                    </div>
                    <div>
                        <img src={BroadcastSoftware2} className='md:w-16 w-12 md:h-16 h-12' alt="Streamlabs Icon"/>
                    </div>
                    <div>
                        <img src={BroadcastSoftware3} className='md:w-16 w-12 md:h-16 h-12' alt="Elgato Stream Deck Icon"/>
                    </div>
                    <div>
                        <img src={BroadcastSoftware4} className='md:w-16 w-12 md:h-16 h-12' alt="GT Icon"/>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}