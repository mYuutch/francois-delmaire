import { motion } from "framer-motion";
import StaggeredText from "./StaggeredText";

export default function Intro(){
    return(
        <>
         <section className="container flex max-md:flex-col mx-auto justify-between overflow-hidden gap-12 items-center max-md:h-auto h-screen">
        <div initial={{opacity:0,scale:0.9}} transition={{duration:0.70}} whileInView={{opacity:1,scale:1}} className=" max-md:w-full w-1/2 flex">
            <img className="w-2/3 mx-auto" src="/fdelmaire.svg" alt="" />
        </div>

        <div initial={{opacity:0,scale:0.9}} transition={{duration:0.70}} whileInView={{opacity:1,scale:1}}  className="max-md:w-full max-md:p-4 w-1/2  h-1/2">
            
            


            <p className="opacity-70 mb-5">
            Ma conviction : « Se sentir bien chez soi !».
            </p>
            <p className="opacity-70 mb-5">
Donnez vie à vos envies d’aménagement et de décoration! Avec un goût prononcé pour les univers chaleureux mêlant classique et contemporain avec des matériaux durables et intemporels, je mets tout en œuvre pour créer des intérieurs faciles à vivre dans lesquels mes clients se sentent bien.

            </p>

            <p className="opacity-70 mb-5">
            Chaque projet est une rencontre, une aventure, dans laquelle je mets tout mon enthousiasme et mon savoir-faire à votre service.
            </p>

            <p className="opacity-70  mb-5">
            L’optimisation de l’espace, de la lumière, des matières, des couleurs et du mobilier sont au centre de ma réflexion pour vous proposer un intérieur valorisé qui correspond à votre personnalité et votre style de vie.

            </p>

            <p className="opacity-70  mb-5">
            ​Exigeant, force de proposition et surtout soucieux du détail et de la qualité de finition des travaux, je m'efforce de faire en sorte que chaque projet soit un nouveau challenge.

            </p>

            <p className="opacity-70  mb-5">
            J’interviens dans l’ouest parisien, plus précisément dans un rayon de 40km autour de Vélizy-Villacoublay.

            </p>

            <p className="opacity-70  mb-5">
            N’hésitez pas à me contacter pour partager vos projets.

            </p>
        </div>
        </section>
        </>
    )
}