'use client'
import Menu from "./components/Menu"
import Intro from "./components/Intro"
import Services from "./components/Services"
import Projets from "./components/Projets"
import Lenis from '@studio-freight/lenis'

export default function Page(){

  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  
  return(
    <>
      <Menu/>
      <main className="container mx-auto mb-32 mt-5">
        <div className="grid grid-cols-12  p-10 md:gap-5 md:gap-y-5 ">

          
        <div className="col-span-12 h-48 block sm:hidden -z-20 ">
          <img className="w-full" src="/image 6.png" alt="" />
          </div>

          <div className="bg-white rounded  col-span-8 md:col-span-4 flex justify-end p-1 pr-5 md:items-end ">
          <h2 className="text-neutral-500  md:text-sm lg:text-2xl md:pr-5">Décorateur d&#39;intérieur</h2>
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
        </div>
      </main>

      <section className="container mx-auto flex justify-between items-center h-screen">
        <Intro/>
      </section>

    <div className="bg-neutral-100">
      <Services/>
    </div>


    <Projets/>
      
    </>
  )
} 