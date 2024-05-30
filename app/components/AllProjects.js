'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { gql, GraphQLClient } from "graphql-request"
const endpoint = 'https://francoisdelmaire.com/graphql';
import Link from "next/link";

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
        databaseId
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

export default function AllProjects() {
    
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

      <main class="-z-1 mt-24 container mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">

 {projets.map(projet => (
          <Link href={`/projets/${projet.node.databaseId}`} key={projet.node.databaseId}>
            <div className="relative rounded flex flex-col overflow-hidden h-[500px]"  key={projet.node.title}>
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
            </Link>
    

    )
    )
    } </main> )};