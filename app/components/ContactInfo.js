import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosPin } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const ContactInfo = () => {
  return (
    <div id='contact' className="w-1/2 max-lg:w-full max-lg:text-lg max-lg:mb-24 text-xl flex flex-col gap-8 uppercase opacity-70">
      <p className="flex items-center gap-2"> <BsFillTelephoneFill/> 06 22 36 44 03</p>
      <p className="flex items-center gap-2"> <IoMdMail/> francois.delmaire@createur-dinterieur.com</p>
      <p className="flex items-center gap-2"><IoIosPin/> 87 rue Charles de Gaulle, 78350 les LOGES-EN-JOSAS</p>
      <p className="flex gap-4"><a className="flex items-center gap-2" href="https://www.linkedin.com/in/fran%C3%A7ois-delmaire-617235157/"><FaLinkedin/>Linkedin</a> &bull;<a className="flex items-center gap-2" href="https://www.facebook.com/FrancoisxDelmaire"><FaFacebookSquare/>Facebook</a></p>
    </div>
  );
};

export default ContactInfo