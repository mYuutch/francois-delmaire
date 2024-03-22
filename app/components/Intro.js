import { motion } from "framer-motion";
import StaggeredText from "./StaggeredText";

export default function Intro(){
    return(
        <>
        <motion.div initial={{opacity:0,scale:0.9}} transition={{duration:0.70}} whileInView={{opacity:1,scale:1}} className="w-1/2 flex">
            <img className="w-2/3 mx-auto" src="/fdelmaire.svg" alt="" />
        </motion.div>

        <motion.div initial={{opacity:0,scale:0.9}} transition={{duration:0.70}} whileInView={{opacity:1,scale:1}}  className="w-1/2  h-1/2">
            
            
            <StaggeredText className="text-primary text-left text-7xl uppercase mb-5 font-display-italic" text="Présentation"/>

            <p className="opacity-70 mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aut laudantium minus ratione eligendi, similique accusamus consequuntur qui architecto quidem quia ullam aliquam maiores harum iusto eveniet, ipsa dolore labore.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat modi optio inventore animi ratione laborum cumque minus, nam non alias iure id expedita quaerat quam quisquam nulla adipisci aspernatur incidunt!
            </p>

            <p className="opacity-70">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aut laudantium minus ratione eligendi, similique accusamus consequuntur qui architecto quidem quia ullam aliquam maiores harum iusto eveniet, ipsa dolore labore.
            </p>
        </motion.div>
        </>
    )
}