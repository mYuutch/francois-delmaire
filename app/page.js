'use client'
import Menu from "./components/Menu"
import Intro from "./components/Intro"
import Services from "./components/Services"
import Reviews from "./components/Reviews"
import Projets from "./components/Projets"
import MobileProjets from "./components/MobileProjets"
import Lenis from '@studio-freight/lenis'
import { useEffect, useState } from "react"
import Hero from "./components/Hero"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"
import ContactForm from "./components/ContactForm"
import { motion, useAnimation } from "framer-motion";
import StaggeredText from "./components/StaggeredText"



export default function Page(){

  const [isMobile, setIsMobile] = useState(false)
  
  const CustomPrevArrow = ({ onClick, hasPrev }) => (
    <div className="absolute left-4 z-10 cursor-pointer   top-1/4" onClick={onClick} disabled={!hasPrev}>
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="white"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
      
    </div>
  );
  
  
  const CustomNextArrow = ({ onClick, hasNext }) => (
    <div className="absolute right-4 z-10 cursor-pointer top-1/4" onClick={onClick} disabled={!hasNext}>
     <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="white"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
    
    </div>
  );

  

  useEffect(() => {

    const setResponsiveness = () => {
      return window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    };

    setResponsiveness();

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

  }, [])


  
  return(
    <>
      <Menu/>
      <div className="flex flex-col gap-24">
      <Hero/>
      <Intro/>
      <Services/>
      {isMobile ? (
        <MobileProjets/>
      ): (<section className=""><Projets/></section>)}
      <Reviews/>
      <ContactForm></ContactForm>
      </div>

    </>
  )
} 