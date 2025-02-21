import { useEffect, useRef, useState } from "react";
import BroadcastVideo1 from '../vid/broadcast/broadcast1.mp4';
import BroadcastVideo2 from '../vid/broadcast/broadcast2.mp4';
import BroadcastVideo3 from '../vid/broadcast/broadcast3.mp4';
import BroadcastVideo4 from '../vid/broadcast/broadcast4.mp4';
import BroadcastVideo5 from '../vid/broadcast/broadcast5.mp4';
import BroadcastVideo6 from '../vid/broadcast/broadcast6.mp4';
import BroadcastVideo7 from '../vid/broadcast/broadcast7.mp4';
import BroadcastVideo8 from '../vid/broadcast/broadcast8.mp4';
import BroadcastVideo9 from '../vid/broadcast/broadcast9.jpg';

const LazyVideo = ({ src }) => {
  const placeholderRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const isVideo = src.endsWith(".mp4");

  useEffect(() => {
    if (!isVideo) {
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => observer.disconnect();
  }, [isVideo]);

  return (
    <div ref={placeholderRef} className="w-full h-60 bg-white flex items-center justify-center">
      {isLoaded ? (
        isVideo ? (
          <video
            autoPlay
            loop
            muted
            controls
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img src={src} alt="Preview" className="w-full h-full object-cover" />
        )
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse"></div> 
      )}
    </div>
  );
};

export default function LevVideo() {
  const videos = [
    BroadcastVideo1, BroadcastVideo2, BroadcastVideo3,
    BroadcastVideo4, BroadcastVideo5, BroadcastVideo6,
    BroadcastVideo7, BroadcastVideo8, BroadcastVideo9,
  ];

  return (
    <section className="md:mt-40 mt-20">
      <div className="grid grid-cols-12 gap-4 mt-24">
        {videos.map((videoSrc, index) => (
          <div key={index} className="col-span-6 lg:col-span-4 w-full mx-auto">
            <LazyVideo src={videoSrc} />
          </div>
        ))}
      </div>
    </section>
  );
}
