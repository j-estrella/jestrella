import BrandingBannerImg from  '../img/banner/BRANDING-BANNER.png';
import Branding1 from '../img/branding/branding-1.png';
import Branding2 from '../img/branding/branding-2.png';
import Branding3 from '../img/branding/branding-3.png';
import Branding4 from '../img/branding/branding-4.png';

export default function BrandingContent(){
    return(
        <>
            <section className='md:mt-60 mt-32' id="branding"> {/*  BRANDING */}
                <img src={BrandingBannerImg} className='w-full' alt="Branding banner image"/>
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
        </>
    )
}