'use client';

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    controls.start(isMenuOpen ? "closed" : "open");
  };

  // Burger icon variants
  const top = {

    open: {

       rotate:45,
       y:8,
       backgroundColor: 'white',
       transition: {
          duration:0.15,
         backgroundColor: { duration: 0, delay: 0.5, ease: 'linear'}
       }
    },


    closed:{
      rotate:0,
      y:0, 
      backgroundColor: 'black',
      transition: {
        duration: 0.15,
        backgroundColor: { duration: 0, delay: 0.5, ease: 'linear'}
       }
    }
  }

  const center = {
    open: {opacity:0, y:0, backgroundColor:'white'}, 
    closed: {opacity:1, backgroundColor: 'black', transition:{ duration:0.1, backgroundColor:{delay:0.5}}}
  }

  const bottom = {
    open: {
      rotate:-45,
       y:-8,
        backgroundColor:'white',
        transition: {
          duration:0.15,  
           backgroundColor: { duration: 1, delay: 0.5, ease: 'linear'}
         }
      },
    closed:{
      rotate:0,
      y:0, 
      backgroundColor: 'black',
      transition: {
        duration: 0.15,
         ease: 'linear',  
         backgroundColor: { duration: 1, delay: 0.5, ease: 'linear'}
       }
    }
  }
  //

  const navContainer = {
    open: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    closed: {
      delay:1,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  // Stagger Children --> obligatoire pour lancer l'animation des children dans l'un des variants
  const list = {
    open: {
      delay:1,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    closed: {
      delay:1,
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  const item = {
    open: { visibility:'visible', opacity: 1, y: 0 },
    closed: { visibility:'hidden',opacity: 0, y: -10, transition:{visibility:{delay:0.5}} },
  }

  const circle = {
    open: { 
      scale: 100,
      backgroundColor: "#9EAE93",
      transition:{
        ease: "linear",
        duration: 0.75,
       
      }
    },
    closed: {
      scale : 1,
      backgroundColor: "#9EAE93",
      transition:{
        ease: "linear",
        duration: 0.75,
        x: { duration: 1 }
      }
    }
  }

  return (
    <>
    <header className="flex w-full  justify-between mx-auto items-center z-50 text-neutral-700 py-12  p-5 md:px-40 overflow-hidden">
      <h1>François Delmaire</h1>
      <div className="flex flex-col gap-1 z-50"
      onClick={toggleMenu}>
          <motion.div className="bar1 bg-slate-800 w-7 h-1 rounded" 
          animate={controls}
          variants={top}></motion.div>
          <motion.div className="bar2 bg-slate-800 w-7 h-1 rounded" 
          animate={controls}
          variants={center}></motion.div>
          <motion.div className="bar3 bg-slate-800 w-7 h-1 rounded"
          animate={controls}
          variants={bottom}></motion.div>
      </div>
      </header>
      
      <motion.div className="w-screen h-screen absolute flex items-center inset-0 justify-center flex-col text-neutral-100 overflow-hidden"
      initial="closed"
      animate={controls}
      variants={navContainer}>

        <motion.div variants={circle} className="w-10 h-10 z-40 rounded-full bg-slate-600 absolute -top-40"></motion.div>

        <motion.nav className="my-auto items-center flex flex-col text-4xl z-50 gap-16 uppercase list-none z-10 md:text-7xl md:gap-32"
        variants={list}>
          <motion.li variants={item} href=""> Projets</motion.li>
          <motion.li variants={item} href=""> Prestations</motion.li>
          <motion.li variants={item} href=""> Contact</motion.li>
        </motion.nav>

        <div className="absolute bottom-0 z-50 flex justify-between w-full">
          <h1> addressemail@gmail.com</h1>
          <h1> 06 21 48 58 72</h1>
        </div>
      </motion.div>

      
    
      </>
  );
}
