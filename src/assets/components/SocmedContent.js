import SocmedBanner from '../img/banner/SOCIAL-MEDIA.png';
import Socmed1 from '../img/socmed/socmed-1.png';
import Socmed2 from '../img/socmed/socmed-2.png';
import Socmed3 from '../img/socmed/socmed-3.png';

export default function SocmendContent(){
    return(
        <>
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
        </>
    )
}