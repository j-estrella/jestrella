import { useEffect } from "react";
import { IoArrowUpCircle } from "react-icons/io5";

export default function BtnReturnTop() {
    const handleReturnToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    }
    
    useEffect(() => {
        const scrollHandler = () => {
          const returnTopButton = document.querySelector('#scroll-top');
    
          if (returnTopButton) {
            if (window.scrollY === 0) {
              returnTopButton.classList.add("hidden");
            } else {
              returnTopButton.classList.remove("hidden");
            }
          }
        };
    
        window.addEventListener('scroll', scrollHandler);
    
        scrollHandler();
        
        return () => {
          window.removeEventListener('scroll', scrollHandler);
        };
    },[])

    return (
        <>
            <a href="#">
                <IoArrowUpCircle  id="scroll-top"  onClick={handleReturnToTop} 
                className="w-12 h-12 z-50 fixed bottom-0 right-0 m-2 text-white cursor-pointer hidden"/>
            </a>
        </>
    )
}