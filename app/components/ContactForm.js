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
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label htmlFor="nomPrenom" className="block mb-1">Nom - Prénom</label>
        <input type="text" name="nomPrenom" id="nomPrenom" value={formData.nomPrenom} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      
      <div className="mb-4">
        <label htmlFor="codePostal" className="block mb-1">Code postal</label>
        <input type="text" name="codePostal" id="codePostal" value={formData.codePostal} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>

      {/* Repeat the pattern for other form fields */}
      <div className='mb-4'>
        <label htmlFor="email" className='block mb-1'>Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500' />
      </div>

      <div className='mb-4'>
        <label htmlFor="numeroTelephone" className='block mb-1'>Téléphone</label>
        <input type="tel" name="numeroTelephone" id="numeroTelephone" value={formData.telephone} onChange={handleChange} required  className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500' />
      </div>

      <div className='mb-4'>
        <label htmlFor="espacesSurface" className='block mb-1'>Espaces + Surface</label>
        <textarea name="espacesSurface" id="espacesSurface" value={formData.espacesSurface} onChange={handleChange} required className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500' />
      </div>


      <div className='mb-4'>
        <label htmlFor="tempsRealisation" className='block mb-1'>Temps de réalisation</label>
        <textarea name="tempsRealisation" id="tempsRealisation" value={formData.tempsRealisation} onChange={handleChange} required className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500' />
      </div>

      <div className='mb-4'>
        <label htmlFor="budgetProjet" className='block mb-1'>Budget ?</label>
        <textarea name="budgetProjet" id="budgetProjet" value={formData.budgetProjet} onChange={handleChange} required className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500' />
      </div>
      
      
      
      <div className="mb-4">
        <label htmlFor="motivations" className="block mb-1">Enfin, racontez-moi en quelques mots votre projet et ce qui a motivé ces envies de changement ?</label>
        <textarea name="motivations" id="motivations" value={formData.motivations} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
      </div>

      {submissionError && <div className="text-red-500 mb-4">{submissionError}</div>}
      
      <button type="submit" className="bg-blue-500 text-primary py-2 px-4 z-50 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Envoyer</button>
    </form>
  );
};

export default ContactForm;
