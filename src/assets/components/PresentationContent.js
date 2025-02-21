import PresentationBanner from '../img/banner/PRESENTATION-BANNER.png';
import Presentation1 from '../img/presentation/PRESENTATION DESIGN.png';

export default function PresentationContent(){
    return(
        <>
            <section className='md:mt-40 mt-20' id="presentation"> {/*  PRESENTATION AND DESIGN */}
                <img src={PresentationBanner} className='w-full' alt="Presentation banner image"/>
            </section>

            <section className='md:mt-40 mt-20'> {/*  PRESENTATION 1 */}
                <img src={Presentation1} className='w-full' alt="Presentation 1 image"/>
            </section>
        </>
    )
}