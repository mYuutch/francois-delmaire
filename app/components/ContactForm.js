  import { useState } from 'react';

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      nomPrenom: '',
      codePostal: '',
      email: '',
      numeroTelephone: '',
      espacesSurface: '',
      tempsRealisation: '',
      budgetProjet: '',
      motivations: ''
    });
    const [submissionError, setSubmissionError] = useState(null);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const formDataObject = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formDataObject.append(key, value);
        });

        // Add the unit tag to the form data
        formDataObject.append('_wpcf7_unit_tag', 'wpcf7-f180-p109-o1');

        const response = await fetch('https://francoisdelmaire.com/wp-json/contact-form-7/v1/contact-forms/180/feedback', {
          method: 'POST',
          body: formDataObject,
        });
        
        if (response.ok) {
          console.log('Form submitted successfully');
          // Clear form data upon successful submission
          setFormData({
            nomPrenom: '',
            codePostal: '',
            email: '',
            numeroTelephone: '',
            espacesSurface: '',
            tempsRealisation: '',
            budgetProjet: '',
            motivations: ''
          });
          setSubmissionError(null);
        } else {
          // Handle submission error
          const errorData = await response.json();
          console.error('Form submission failed:', errorData);
          setSubmissionError(errorData.message || 'Unknown error occurred');
        }
      } catch (error) {
        console.error('Error:', error);
        setSubmissionError('An error occurred while submitting the form');
      }
    };

    return (
      <section className='mb-24 max-lg:w-full w-1/2'>
        <form onSubmit={handleSubmit} className="max-w-2xl max-lg:w-full max-lg:max-w-none mx-auto p-4 bg-white grid grid-cols-2 gap-x-12 gap-y-12 ">
        <div className="mb-4 text-primary h-16 max-lg:col-span-2">
          <label htmlFor="nomPrenom" className="block uppercase">Nom - Prénom</label>
          <input type="text" name="nomPrenom" id="nomPrenom" value={formData.nomPrenom} onChange={handleChange} required className="w-full h-full px-4 py-2  border-b-2 border-primary focus:outline-none" />
        </div>
        
        <div className="mb-4 text-primary h-16 max-lg:col-span-2">
          <label htmlFor="codePostal" className="block uppercase">Code postal</label>
          <input type="text" name="codePostal" id="codePostal" value={formData.codePostal} onChange={handleChange} required className="w-full h-full px-4 py-2 border-b-2 border-primary focus:outline-none focus:border-blue-500" />
        </div>

    
        <div className='mb-4 text-primary h-16 max-lg:col-span-2'>
          <label htmlFor="email" className='block uppercase'>E-mail</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className='w-full h-full px-4 py-2 border-b-2 border-primary  focus:outline-none focus:border-blue-500' />
        </div>

        <div className='mb-4 text-primary h-16 max-lg:col-span-2'>
          <label htmlFor="numeroTelephone" className='block uppercase'>numéro de téléphone</label>
          <input type="tel" name="numeroTelephone" id="numeroTelephone" value={formData.telephone} onChange={handleChange} required  className='w-full h-full px-4 py-2 border-b-2 border-primary  focus:outline-none focus:border-blue-500' />
        </div>

        <div className='mb-4 col-span-2 text-primary h-32'>
          <label htmlFor="espacesSurface" className='block uppercase'>Espaces à aménager et leur surface</label>
          <textarea name="espacesSurface" id="espacesSurface"  value={formData.espacesSurface} onChange={handleChange} required className='w-full h-full  px-4 py-2 border-b-2 border-primary resize-none  focus:outline-none focus:border-blue-500' />
        </div>


        <div className='mb-4 text-primary h-16'>
          <label htmlFor="tempsRealisation" className='block uppercase'>Délais</label>
          <textarea name="tempsRealisation" id="tempsRealisation" value={formData.tempsRealisation} onChange={handleChange} required className='w-full h-full h-  px-4 py-2 border-b-2 border-primary resize-none  focus:outline-none focus:border-blue-500' />
        </div>

        <div className='mb-4 text-primary h-16'>
          <label htmlFor="budgetProjet" className='block uppercase'>Budget</label>
          <textarea name="budgetProjet" id="budgetProjet" value={formData.budgetProjet} onChange={handleChange} required className='w-full h-full px-4 py-2 border-b-2 border-primary resize-none  focus:outline-none focus:border-blue-500' />
        </div>
        
        
        
        <div className="mb-4 col-span-2 text-primary h-32">
          <label htmlFor="motivations" className="block uppercase opacity-70">Motivations</label>
          <textarea name="motivations" id="motivations" value={formData.motivations} onChange={handleChange} required className="w-full h-full px-4 py-2 border-b-2 border-primary resize-none focus:outline-none focus:border-blue-500"></textarea>
        </div>

        {submissionError && <div className="text-red-500 mb-4">{submissionError}</div>}
        
        <button type="submit" className=" col-span-2  w-1/3 mt-8 ml-auto h-14 text-white bg-blue-500 bg-primary py-2 px-4 z-50 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Envoyer</button>
      </form>
      </section>
    
    );
  };

  export default ContactForm;
