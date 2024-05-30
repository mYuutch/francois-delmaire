'use client';

import { useEffect, useState } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


function ProjectDetailsClient({ initialData }) {


console.log(initialData)
  if (initialData == 0) {
    return <div className='flex items-center justify-center w-screen h-screen'>Patientez...</div>;
  }
  
  
  const FIRST_IMAGE = {

    imageUrl: initialData.informations.before.node.mediaItemUrl

  };

  const SECOND_IMAGE = {

    imageUrl: initialData.informations.after.node.mediaItemUrl

  };
  
  
  return (

    <>

    <Menu/>
    <div className='container mx-auto gap-12 flex my-24 max-md:flex-col max-md:p-4'>
        <div className='lg:w-1/2 overflow-hidden max-md:w-full'>

       
    <ReactBeforeSliderComponent
   
    className='w-full'
    firstImage={FIRST_IMAGE}
    secondImage={SECOND_IMAGE}
/>
</div>


<div className='w-1/2 flex flex-col gap-12 max-md:w-full max-md:p-4'>
<h1 className='p-0 mx-0 bold uppercase text-primary  text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>{initialData.informations.title}</h1>
<p className='opacity-70'>{initialData.informations.description}</p>
</div>

    </div>

    <Footer/>
    </>
  );
}

export default ProjectDetailsClient;
