'use client'

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projets(){

    useEffect(() => {

        let ctx = gsap.context(() => {

            let pinProjectsSection = gsap.to('.projects-container', {color: '', ease: 'none', duration: 0.25})
        
            let horizontalScroll = gsap.to('.projects', {
                x: () => -(document.querySelector('.projects').offsetWidth - window.innerWidth),
                ease: 'none',
            });
        
            ScrollTrigger.create({
                trigger: ".projects-section",
                start: "top top",
                end: "bottom bottom",
                pin: true,
                animation: pinProjectsSection,
                toggleActions:  'play reverse play reverse'
            })

            ScrollTrigger.create({
                trigger: ".projects-section",
                start: "top top",
                end: "bottom center",
                scrub: true,
                animation: horizontalScroll,
            });
            
        
    
        })
        

        return () => ctx.revert();
    }, [])


    return(
        <section className="projects-section w-screen h-[700vh] flex relative">
            <div className="projects-container h-[100vh]  pt-20  top-0 left-0 flex">
                   <div className="projects w-[300vh] h-3/4 flex my-auto">
                        
                        <div className="flex flex-col mx-48 ">
                            <p className="opacity-70">Envie de découvrir mes</p>
                            <h1 className="p-0 mx-0 bold uppercase text-primary mb-10 text-4xl md:text-5xl lg:text-6xl xl:text-8xl">Projets ?</h1>
                            <p className="w-[500px] opacity-70">Découvrez à travers cette collection de projets toute la quintessence de mes compétences. Ces projets ont été réalisés avec passion et entrain, afin de transformer la vie de mes clients. =)</p>
                        </div>

                        <div className="overflow-hidden h-[400px] w-[300px] absolute left-[25%] top-[25%] mx-10">
                            <img  className="absolute h-full scale-150 w-auto" src="./image 6.png" alt="" />
                        </div>


                        <div className="overflow-hidden h-[400px] w-[300px] absolute left-[40%]  mx-10">
                            <img  className="absolute h-full scale-150 w-auto" src="./image 5.png" alt="" />
                        </div>


                        <div className="overflow-hidden h-[400px] w-[300px] absolute left-[55%] top-[15%] mx-10">
                            <img  className="absolute h-full scale-150 w-auto" src="./image 6.png" alt="" />
                        </div>


                        <div className="overflow-hidden h-[400px] w-[300px] absolute left-[70%] top-[-15%]  mx-10">
                            <img  className="absolute h-full scale-150 w-auto" src="./image 5.png" alt="" />
                        </div>

                        <button className="absolute left-[90%] top-1/2 bg-primary text-white px-10 py-5 rounded">
                            Voir plus
                        </button>

                   </div>
            </div>

            <div className="h-screen"></div>
        </section>
    )
}