import { motion, useAnimation } from "framer-motion";

export default function Hero(){

    return(
        <main className="flex  w-screen justify-center  max-md:h-auto h-screen max-lg:items-center lg:mt-16 mb-24 xl:py-[calc(100vh/3)]">

        {/* <img className="-z-10 absolute opacity-5 w-full  h-screen top-0 left-0" src="DSC_0852.jpg" alt="" /> */}
        <div className="w-[70%] max-md:w-[90%] relative">


          <div className="lg:absolute lg:w-[45%] z-10 max-md:mb-4 rounded-lg overflow-hidden lg:-top-[21vw] left-[20vw]">
          <img className="" src="/DSC_0852.jpg" alt="" />
          </div>
          


          {/*Texte + Étoile */}

          <div className="flex w-full max-lg:justify-end lg:justify-base ">
            <div className="flex flex-col items-end justify-end xl:mt-4">
              <div className="flex text-right items-center gap-[4vh] max-lg:mt-4">
                <h1 className="uppercase text-primary max-lg:text-7xl lg:text-[7vw]" >créateur</h1>
                <div className="flex grow">
                <img className="xl:w-28 md:w-24" src="/Union.svg" alt="" />
                </div>

                <div className="overflow-hidden absolute w-[45%] -right-[calc(7vw)] -top-[3.5vw] rounded-lg max-lg:hidden">
            <img className="rounded-lg  h-full object-cover" src="/DSC_0843.jpg" alt="" />
          </div>
               
            </div >
              <h1 className="uppercase text-primary text-right max-lg:text-7xl   text-[6vw] xl:-mt-4" >d'intérieur</h1> 
            </div>  
          

        </div>


        </div>
      </main>)
}