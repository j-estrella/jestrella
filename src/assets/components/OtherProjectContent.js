import OtherBanner from '../img/banner/OTHER-PROJECTS.png';
import Other1 from '../img/other-project/other portfolio-01.png';

export default function OtherProjectContent(){
    return(
        <>
            <section className='md:mt-60 mt-32' id="other-projects"> {/*  OTHER PROJECTS */}
                <img src={OtherBanner} className='w-full' alt="Other projects banner image"/>
            </section>

            <section className='md:mt-40 mt-20'> {/*  OTHER PROJECTS 1 */}
                <img src={Other1} className='w-full' alt="Other project 1 image"/>
            </section>
        </>
    )
}