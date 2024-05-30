import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosPin } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoNorthStar } from "react-icons/go";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer bg-primary flex  justify-between pt-24 pb-32">

        <div className="container mx-auto flex max-lg:flex-col text-white">
                <div className="w-1/2 max-lg:w-full max-lg:mb-12  flex flex-col items-center ">
                <p className="font-sackers text-8xl flex justify-between items-center max-md:text-5xl">François <GoNorthStar className="opacity-70 w-8 ml-8"/>  Delmaire</p>
                <p className="uppercase text-2xl opacity-60 max-md:text-lg">créateur d'intérieur</p>
                </div>

            <div className="flex grow max-sm:flex-col max-sm:items-center max-sm:gap-8">
            <div className="flex flex-col w-1/2 text-xl max-sm:items-center max-sm:mb-8">
                <p className="text-2xl mb-8 ml-[33%] max-sm:ml-0 ">Liens</p>
                <ul className="flex flex-col justify-center ml-[33%] max-sm:items-center max-sm:ml-0  gap-4 opacity-80 text-lg">
                    <li><Link href={'/projets'}>Projets</Link></li>
                    <li><Link href={'/#prestations'}>Prestations</Link></li>
                    <li><Link href={'/#contact'}>Contact</Link></li>
                </ul>
            </div>

            <div className="flex flex-col w-1/2 text-lg max-sm:items-center">
                <p className="text-2xl mb-8 ml-[33%] max-sm:ml-0">Contact</p>
                <ul className="flex flex-col gap-4 justify-center opacity-80 ml-[33%] max-sm:ml-0 max-sm:items-center">        
                    <li><a href="mailto:francois.delmaire@createur-dinterieur.com"> Mail</a></li> 
                    <li><a href="https://www.linkedin.com/in/fran%C3%A7ois-delmaire-617235157/">Linkedin</a></li>
                    <li><a href="https://www.facebook.com/FrancoisxDelmaire">Facebook</a></li>
                    <li><a href="tel:0622364403">Téléphone</a></li>
                </ul>
            </div>

            </div>
            
        </div>  


    </footer>
  );
};

export default Footer;