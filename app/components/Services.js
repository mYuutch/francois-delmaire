export default function Services(){
    return(
        <section className=" max-lg:h-auto h-screen bg-slate-50  flex flex-col gap-24 justify-center py-16">
            <div className="container mx-auto flex flex-col  gap-12">

            <div className="max-md:p-8">
                <span>Un besoin ? une envie ? Ce que je propose</span>
                <h2 className="uppercase text-primary  text-4xl md:text-5xl lg:text-6xl xl:text-8xl lg:mb-12">Prestations</h2>
            </div>
            <div className="max-lg:flex-col flex justify-between px-24 gap-5">
            
            <div className="flex flex-col items-center justify-center max-lg:w-3/5 max-lg:mx-auto w-96">
                <p className="mb-5 text-xl">Conseil/Conception 3D</p>
                <img className="object-contain " src="/Conception projet.jpg" alt="Conception de projet" />        
            </div>

                <div className="flex flex-col items-center justify-center max-lg:w-3/5 max-lg:mx-auto w-96">
                <p className="mb-5 text-xl">Préparation des travaux</p>
                    <img className="object-contain w-full" src="/Preparation travaux.jpg" alt="Préparation de travaux" />
                   
                </div>

                <div className="flex flex-col items-center justify-center max-lg:w-3/5 max-lg:mx-auto w-96">
                <p className="mb-5 text-xl">Suivi de chantier</p>
                    <img className="object-contain" src="/Suivi de chantier.jpg" alt=" Suit de chantier" />
                  
                </div>

            
            </div>
            </div>
        </section>
    )
}