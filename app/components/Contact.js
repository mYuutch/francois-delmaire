import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"


const Contact = () => {
    return (
        <section className="flex flex-col container mx-auto gap-24 py-24 max-lg: p-12 ">
                      <div className="flex flex-col mb-8">
                            <p className="opacity-70">Alors ? Êtes vous </p>
                            <h1 className="p-0 mx-0 bold uppercase text-primary mb-10 text-4xl md:text-5xl lg:text-6xl xl:text-8xl">Convaincus ?</h1>
                            <p className="w-[500px] mr-[100px] opacity-70">Dans ce cas, n'hésitez pas ! Contactez-moi et laissez moi faire de votre propriété un véritable espace de vie adapté à vos besoins. </p>
                        </div>

            <div className="max-lg:flex-col  flex">
            <ContactInfo/>
            <ContactForm/>
            </div>
         
        </section>
    )
}

export default Contact