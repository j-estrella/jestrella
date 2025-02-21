import { useEffect, useRef, useState } from "react";
import LevVideo1 from '../vid/lev/LEV 1-1.mp4';
import LevVideo2 from '../vid/lev/LEV 2-1.mp4';
import LevVideo3 from '../vid/lev/LEV 3-1.mp4';
import LevVideo4 from '../vid/lev/LEV 4-1.mp4';
import LevVideo5 from '../vid/lev/LEV 5-1.mp4';
import LevVideo6 from '../vid/lev/LEV 6-1.mp4';
import LevVideo7 from '../vid/lev/lev 7-1.mp4';
import LevVideo8 from '../vid/lev/lev 8-1.jpg'; // Image
import LevVideo9 from '../vid/lev/lev 9-1.mp4';

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
    LevVideo1, LevVideo2, LevVideo3,
    LevVideo4, LevVideo5, LevVideo6,
    LevVideo7, LevVideo8, LevVideo9,
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
