import LogoBanner from '../img/banner/LOGO-DESIGN.png';
import Logo1 from '../img/logo/LOGO COMPILATION-01.png';

export default function LogoContent(){
    return(
        <>
            <section className='md:mt-60 mt-32' id="logo"> {/*  LOGO */}
                <img src={LogoBanner} className='w-full' alt="Logo banner image"/>
            </section>

            <section className='md:mt-40 mt-20'> {/*  LOGO 1 TEMP */}
                <img src={Logo1} className="w-full" alt="Logo 1 image"/>
            </section>
        </>
    )
}