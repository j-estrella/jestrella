import NaosBanner from '../img/work/NAOS COVER.png';
import IntegreonBanner from '../img/work/INTEGREON COVER.png';
import SenateBanner from '../img/work/SENATE COVER.png';
import WedroolBanner from '../img/work/WE DROOL COVER.png';

export default function WorkExperience(){
    return(
        <>
            <section className='md:mt-40 mt-20' id="work"> {/*  WORK EXP */}
                <div className='flex flex-col gap-4'>
                    <p className='md:text-7xl text-4xl font-bold uppercase md:text-justify text-center'>Work Experience</p>
                    <hr className="md:w-56 w-full border-4" />
                </div>

                <div className="grid grid-cols-4 gap-4 my-12">
                    <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
                    <div className="flex flex-col gap-4 flex-grow">
                        <img src={NaosBanner} alt="NAOS logo" className="mx-auto rounded-lg" />
                        <h2 className="md:text-2xl text-md font-bold">NAOS ESPORTS</h2>
                        <p className="md:text-2xl text-md">MULTIMEDIA ARTIST</p>
                    </div>
                    <p className="md:text-xl text-sm italic mt-auto">(2024-2025)</p>
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4">
                    <div className="flex flex-col gap-4 flex-grow">
                        <img src={NaosBanner} alt="NAOS logo" className="mx-auto" />
                        <h2 className="md:text-2xl text-md font-bold">NAOS ESPORTS</h2>
                        <p className="md:text-2xl text-md">COMMUNITY AND EVENTS CREATIVE</p>
                    </div>
                    <p className="md:text-xl text-sm italic mt-auto">(2023-2025)</p>
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
                    <div className="flex flex-col gap-4 flex-grow">
                        <img src={IntegreonBanner} alt="Integreon logo" className="mx-auto rounded-lg" />
                        <h2 className="md:text-2xl text-md font-bold">INTEGREON INC.</h2>
                        <p className="md:text-2xl text-md">DESIGN ASSOCIATE</p>
                    </div>
                    <p className="md:text-xl text-sm italic mt-auto">(2023-2023)</p>
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
                    <div className="flex flex-col gap-4 flex-grow">
                        <img src={IntegreonBanner} alt="Integreon logo" className="mx-auto rounded-lg" />
                        <h2 className="md:text-2xl text-md font-bold">INTEGREON INC.</h2>
                        <p className="md:text-2xl text-md">INDEPENDENT GRAPHIC SPECIALIST</p>
                    </div>
                    <p className="md:text-xl text-sm italic mt-auto">(2022-2023)</p>
                    </div>
                    
                    <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
                    <div className="flex flex-col gap-4 flex-grow">
                        <img src={IntegreonBanner} alt="Integreon logo" className="mx-auto rounded-lg" />
                        <h2 className="md:text-2xl text-md font-bold">INTEGREON INC.</h2>
                        <p className="md:text-2xl text-md">GRAPHIC SPECIALIST</p>
                    </div>
                    <p className="md:text-xl text-sm italic mt-auto">(2019-2022)</p>
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
                    <div className="flex flex-col gap-4 flex-grow">
                        <img src={SenateBanner} alt="Senate logo" className="mx-auto rounded-lg" />
                        <h2 className="md:text-2xl text-md font-bold">SENATE PHILIPPINES</h2>
                        <p className="md:text-2xl text-md">GRAPHIC DESIGNER INTERNSHIP</p>
                    </div>
                    <p className="md:text-xl text-sm italic mt-auto">(2017-2018)</p>
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex flex-col justify-between border border-white text-center rounded-lg p-4 ">
                    <div className="flex flex-col gap-4 flex-grow">
                        <img src={WedroolBanner} alt="Wedrool logo" className="mx-auto rounded-lg" />
                        <h2 className="md:text-2xl text-md font-bold">WEDROOL CLOTHING</h2>
                        <p className="md:text-2xl text-md">GRAPHIC DESIGNER ON-THE-JOB TRAINING</p>
                    </div>
                    <p className="md:text-xl text-sm italic mt-auto">(2017-2017)</p>
                    </div>
                </div>
            </section>
        </>
    )
}