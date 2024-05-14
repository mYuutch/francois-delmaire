import { motion, useAnimation } from "framer-motion";

export default function Hero(){

    return(
        <main className="container flex flex-col overflow-hidden max-lg:h-lsv max-lg:w-screen h-screen  max-xl:w-screen mx-auto mt-5">

        <img className="-z-10 absolute opacity-5 w-full  h-screen top-0 left-0" src="DSC_0852.jpg" alt="" />
        <div initial={{opacity:0,scale:0.9}} transition={{duration:0.70}} whileInView={{opacity:1,scale:1}} className="grid grid-cols-12  p-10 md:gap-5 md:gap-y-5 ">

          
        <div initial={{opacity:0,scale:0.5}} transition={{duration:0.40}} whileInView={{opacity:1,scale:1}}  whileHover={{scale:1.2}} className="col-span-12 h-48 block sm:hidden -z-20 ">
           <img className="w-full max-md:w-screen " src="/image 6.png" alt="" />
          </div>

          <div className=" rounded  col-span-8 md:col-span-4 flex justify-end p-1 pr-5 md:items-end ">
         
          {/*<h2 className="text-neutral-500  md:text-sm lg:text-2xl md:pr-5">Décorateur d&#39;intérieur</h2>*/}
          </div>

          <div className="col-span-8 scale-125 py-5  hidden md:block ">
          <img className="object-cover md:w-[29rem] rounded-xl" src="/DSC_0852.jpg" alt="" />
          </div>
          
          <div className=" rounded col-span-10 flex md:col-span-6   justify-end pt-2 ">
            <h1 className="text-primary uppercase  text-5xl md:text-6xl lg:text-8xl xl:text-9xl" >créateur</h1>
          </div>  
        
          <div className="flex relative items-center justify-center col-span-2 md:col-span-1 -z-10 rounded ">
              <img className=" w-96" src="/Union.svg" alt="" />
          </div> 

          <div className="hidden md:block col-span-5 relative -z-10 ">
         <img className="absolute object-contain -top-5 - md:-top-32 -z-10 rounded-xl" src="/DSC_0843.jpg" alt="" />
         </div>

          <div className="col-span-12 md:col-span-7  rounded  flex justify-end ">
            <h1 className="text-primary uppercase pb-20 sm:pb-0 text-5xl md:text-6xl lg:text-8xl xl:text-9xl" >d'intérieur</h1> 
            </div>
        </div>
      </main>)
}