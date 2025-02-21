import PhotographyBanner from '../img/banner/PHOTOGRAPHY-BANNER.png';
import Photog1 from '../img/photography/photog-1.png';
import Photog2 from '../img/photography/photog-2.png';
import Photog3 from '../img/photography/photog-3.png';

export default function PhotographyContent(){
    return(
        <>
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
        </>
    )
}