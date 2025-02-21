import PersonalBanner from '../img/banner/PERSONAL-PROJECT.png';
import Personal1 from '../img/personal-project/personal-1.png';

export default function PersonalContent(){
    return(
        <>
            <section className='md:mt-60 mt-32' id="personal-projects"> {/*  PERSONAL */}
              <img src={PersonalBanner} className='w-full' alt="Personal banner image"/>
            </section>
        
            <section className='md:mt-40 mt-20'> {/*  PERSONAL 1 */}
              <img src={Personal1} className='w-full' alt="Personal 1 image"/>
            </section>
        </>
    )
}