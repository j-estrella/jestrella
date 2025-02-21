import BroadcastBannerImg from '../img/banner/BROADCAST-PAGE.png';

export default function BroadcastBanner(){
    return(
        <>
            <section className='md:mt-60 mt-32' id="portfolio"> {/*  BROADCAST AND OVERLAYS */}
                <img src={BroadcastBannerImg} className='w-full' alt="Broadcast and overlays banner image"/>
            </section>
        </>
    )
}