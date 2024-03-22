'use client'
import Menu from "./components/Menu"
import Intro from "./components/Intro"
import Services from "./components/Services"
import Projets from "./components/Projets"
import Lenis from '@studio-freight/lenis'
import { useEffect } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"
import { motion, useAnimation } from "framer-motion";
import StaggeredText from "./components/StaggeredText"



export default function Page(){

  console.log("test");
  
  const CustomPrevArrow = ({ onClick, hasPrev }) => (
    <div className="absolute left-4 z-10 cursor-pointer   top-1/4" onClick={onClick} disabled={!hasPrev}>
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="white"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>
      
    </div>
  );
  
  // Custom arrow component for the next arrow
  const CustomNextArrow = ({ onClick, hasNext }) => (
    <div className="absolute right-4 z-10 cursor-pointer top-1/4" onClick={onClick} disabled={!hasNext}>
     <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="white"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
    
    </div>
  );

  

  useEffect(() => {

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
      <main className="container mx-auto mb-32 mt-5">
        <motion.div initial={{opacity:0,scale:0.9}} transition={{duration:0.70}} whileInView={{opacity:1,scale:1}} className="grid grid-cols-12  p-10 md:gap-5 md:gap-y-5 ">

          
        <div initial={{opacity:0,scale:0.5}} transition={{duration:0.40}} whileInView={{opacity:1,scale:1}}  whileHover={{scale:1.2}} className="col-span-12 h-48 block sm:hidden -z-20 ">
          <img className="w-full" src="/image 6.png" alt="" />
          </div>

          <div className="bg-white rounded  col-span-8 md:col-span-4 flex justify-end p-1 pr-5 md:items-end ">
         
          {/*<h2 className="text-neutral-500  md:text-sm lg:text-2xl md:pr-5">Décorateur d&#39;intérieur</h2>*/}
          </div>

          <div className="col-span-8  hidden md:block ">
          <img className=" w-1/2 md:w-[29rem]" src="/image 5.png" alt="" />
          </div>
          
          <div className="bg-white rounded col-span-10 flex md:col-span-6   justify-end pt-2 ">
            <h1 className="text-primary uppercase  text-5xl md:text-6xl lg:text-8xl xl:text-9xl" >François</h1>
          </div>  
        
          <div className="flex relative items-center justify-center col-span-2 md:col-span-1 -z-10 bg-white rounded ">
              <img className=" w-96" src="/Union.svg" alt="" />
          </div> 

          <div className="hidden md:block col-span-5 relative -z-10 ">
         <img className="absolute w-5/6 -top-5 - md:-top-32 -z-10" src="/image 6.png" alt="" />
         </div>

          <div className="col-span-12 md:col-span-7 bg-white rounded  flex justify-end ">
            <h1 className="text-primary uppercase pb-20 sm:pb-0 text-5xl md:text-6xl lg:text-8xl xl:text-9xl" >Delmaire</h1> 
            </div>
        </motion.div>
      </main>

      <section className="container mx-auto flex justify-between items-center h-screen">
        <Intro/>
      </section>

    <div className="bg-neutral-100">
      <Services/>
    </div>


    <Projets/>

    <section className="h-screen flex flex-col relative bg-primary">
      <div className="container mx-auto mt-24 opacity-90">
      <p className="text-white">Ils nous ont fait confiance,</p> 
      <h2 className="uppercase text-white  text-4xl md:text-5xl lg:text-6xl xl:text-8xl mb-24">Et vous ?</h2>
      </div>
      
      <Carousel 
      autoPlay 
      showStatus={false} 
      showThumbs={false} 
      showIndicators={false} 
      stopOnHover={false} 
      infiniteLoop={true} 
      className="bg-primary relative p-12"
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <CustomPrevArrow onClick={onClickHandler} hasPrev={hasPrev} />
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <CustomNextArrow onClick={onClickHandler} hasNext={hasNext} />  
        )}
      >
      <div className="container mx-auto h-auto">
        <p className="text-white text-2xl opacity-90">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore vel dolorum itaque sed esse aperiam repudiandae ullam quibusdam, autem dicta aliquam totam in inventore numquam pariatur saepe nemo quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id repudiandae error quis, ipsa omnis nam reprehenderit temporibus quas, laborum odit nisi, odio debitis impedit! Repellat vel iusto nobis in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam assumenda nobis corrupti, consequatur soluta corporis, doloribus voluptas a consequuntur aliquid explicabo nisi saepe delectus rem laboriosam accusantium, dolorum quas.&quot;</p>
        <div className="my-14">

          <span className="text-2xl text-white ">François Delmaire - 4 étoiles</span>
          <div className="flex mx-auto justify-center mt-5 gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>  
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>  
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>    
        <svg xmlns="http://www.w3.org/2000/svg"width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
          </div>
        </div>
        
      </div>
      <div className="container mx-auto h-auto">
        <p className="text-white text-2xl opacity-90">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore vel dolorum itaque sed esse aperiam repudiandae ullam quibusdam, autem dicta aliquam totam in inventore numquam pariatur saepe nemo quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id repudiandae error quis, ipsa omnis nam reprehenderit temporibus quas, laborum odit nisi, odio debitis impedit! Repellat vel iusto nobis in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam assumenda nobis corrupti, consequatur soluta corporis, doloribus voluptas a consequuntur aliquid explicabo nisi saepe delectus rem laboriosam accusantium, dolorum quas.&quot;</p>
        <div className="my-14">

          <span className="text-2xl text-white ">François Delmaire - 4 étoiles</span>
          <div className="flex mx-auto justify-center mt-5 gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>  
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>  
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>    
        <svg xmlns="http://www.w3.org/2000/svg"width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
          </div>
        </div>
        
      </div>
      <div className="container mx-auto h-auto">
        <p className="text-white text-2xl opacity-90">&quot;Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit tempore vel dolorum itaque sed esse aperiam repudiandae ullam quibusdam, autem dicta aliquam totam in inventore numquam pariatur saepe nemo quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id repudiandae error quis, ipsa omnis nam reprehenderit temporibus quas, laborum odit nisi, odio debitis impedit! Repellat vel iusto nobis in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aperiam assumenda nobis corrupti, consequatur soluta corporis, doloribus voluptas a consequuntur aliquid explicabo nisi saepe delectus rem laboriosam accusantium, dolorum quas.&quot;</p>
        <div className="my-14">

          <span className="text-2xl text-white ">François Delmaire - 4 étoiles</span>
          <div className="flex mx-auto justify-center mt-5 gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>  
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>  
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>    
        <svg xmlns="http://www.w3.org/2000/svg"width="64" height="64" fill="white" viewBox="0 0 24 24"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
          </div>
        </div>
        
      </div>
    </Carousel>
    </section>

      
    </>
  )
} 