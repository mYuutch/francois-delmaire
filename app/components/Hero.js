import { useEffect } from 'react';
import { gsap } from 'gsap';
import { GoNorthStar } from "react-icons/go";

export default function Hero() {
  useEffect(() => {
    const moveDivs = (e) => {
      const { clientX, clientY } = e;
      const moveX = (clientX / window.innerWidth - 0.5) * 10; // Adjust the value to control the movement intensity
      const moveY = (clientY / window.innerHeight - 0.5) * 10; // Adjust the value to control the movement intensity

      gsap.to('.image1', { x: moveX, y: moveY, duration: 0.5, ease: 'power3.out' });
      gsap.to('.image2', { x: -moveX, y: -moveY, duration: 0.5, ease: 'power3.out' });
    };

    window.addEventListener('mousemove', moveDivs);

    return () => {
      window.removeEventListener('mousemove', moveDivs);
    };
  }, []);

  return (
    <main className="flex max-sm:mb-24 w-screen justify-center max-md:h-auto h-screen items-center lg:mt-16 xl:py-[calc(100vh/3)]">
      <div className="w-[70%] max-md:w-[90%] relative">
        <div className="lg:absolute lg:w-[45%] z-10 max-md:mb-4 rounded-lg overflow-hidden lg:-top-[20vw] left-[20vw] image1">
          <img src="/DSC_0852.jpg" alt="" />
        </div>

        {/* Texte + Étoile */}
        <div className="flex w-[90%] flex-wrap max-lg:justify-end lg:justify-base">
          <div className="flex flex-col items-end justify-end text-right xl:mt-4">
            <div className="flex text-right items-center justify-center gap-[4vh] max-lg:mt-4 max-md:mb-2">
              <h1 className="uppercase text-primary max-md:text-5xl max-lg:text-7xl lg:text-[7vw]">créateur</h1>
               <div className=''>
              
               <GoNorthStar className='max-xl:text-6xl xl:text-8xl opacity-30'/>
               </div>
               
             
            </div>
            <div className="overflow-hidden absolute w-[45%] -right-[6vw] -top-[3.5vw] rounded-lg max-lg:hidden image2">
              <img className="rounded-lg h-full object-cover" src="/DSC_0843.jpg" alt="" />
            </div>
          </div>
          <h1 className="uppercase text-primary text-right max-md:text-5xl max-lg:text-7xl text-[6vw] lg:ml-24 xl:-mt-4">d'intérieur</h1>
        </div>
      </div>
    </main>
  );
}
