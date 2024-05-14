'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { gql, GraphQLClient } from "graphql-request"
const endpoint = 'https://francoisdelmaire.com/graphql';

const graphQLClient = new GraphQLClient(endpoint, {
 method: 'GET', // Since GET method is used by default, you can omit this part if you want
  jsonSerializer: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },
});

const query = gql`
{
  projets {
    edges {
      node {
        informations {
          description
          location
          size
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        title
      }
    }
  }
}
`;
/*
const data = await graphQLClient.request(query);
console.log(data);
*/

export default function MobileProjets() {
    
    const [projets, setProjets] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await graphQLClient.request(query);
          setProjets(data.projets.edges);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (

        <section className="flex flex-col items-center gap-24">

        <div className="flex flex-col container p-4">
        <p className="opacity-70">Envie de découvrir mes</p>
        <h1 className="p-0 mx-0 bold uppercase text-primary mb-10 text-4xl md:text-5xl lg:text-6xl xl:text-8xl">Projets ?</h1>
        <p className="w-[500px] mr-[100px] opacity-70">Découvrez à travers cette collection de projets toute la quintessence de mes compétences. Ces projets ont été réalisés avec passion et entrain, afin de transformer la vie de mes clients.</p>
        </div>


      <div class="-z-1  container mx-auto grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">



 {
 projets.slice(0,6).map(projet => (
            <div className="relative rounded flex flex-col overflow-hidden aspect-square"  key={projet.node.title}>
              <h2 className="text-primary text-2xl flex-end mt-auto">{projet.node.title}</h2>
 
              {projet.node.featuredImage ? (
                <div className="absolute -top-12 left-0 w-full h-full">
                  <img className="w-full h-full object-cover" src={projet.node.featuredImage.node.mediaItemUrl} alt="après"></img>
                </div>
              ) : (
                <div className="absolute -top-12 left-0 w-full h-full">
              <img className="w-full h-full object-cover" src="/default_thumb.png" alt="default thumbnail" />
             </div>
              )}
              
            </div>
    

    )
    )
    } </div>
    

    <a className="px-16 py-4 bg-primary text-white rounded" href="#">Voir plus</a>
    
    
     </section>)};