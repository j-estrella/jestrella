import { useEffect, useRef, useState } from "react";
import NvidiaVideo1 from '../vid/nvidia/NVIDIA 1.mp4';
import NvidiaVideo2 from '../vid/nvidia/NVIDIA 2-1.mp4';
import NvidiaVideo3 from '../vid/nvidia/nvidia 3-1.mp4';
import NvidiaVideo4 from '../vid/nvidia/NVIDIA 4-1.mp4';
import NvidiaVideo5 from '../vid/nvidia/nvidia 5-1.mp4';
import NvidiaVideo6 from '../vid/nvidia/nvidia 6-1.mp4';
import NvidiaVideo7 from '../vid/nvidia/nvidia 7-1.mp4';
import NvidiaVideo8 from '../vid/nvidia/nvidia 8-1.mp4';
import NvidiaVideo9 from '../vid/nvidia/nvidia 9-1.mp4';

const LazyVideo = ({ src }) => {
  const placeholderRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <div ref={placeholderRef} className="w-full h-60 bg-white flex items-center justify-center">
      {isLoaded ? (
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
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      )}
    </div>
  );
};

export default function NvidiaVideo() {
  const videos = [
    NvidiaVideo1, NvidiaVideo2, NvidiaVideo3,
    NvidiaVideo4, NvidiaVideo5, NvidiaVideo6,
    NvidiaVideo7, NvidiaVideo8, NvidiaVideo9,
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
